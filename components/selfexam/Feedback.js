'use client';

import React, { useState, useEffect, useRef } from 'react';

const Feedback = ({ questionId, examName, currentAnswer, options, onSubmit, existingFeedback }) => {
  const [feedbackType, setFeedbackType] = useState('');
  const [suggestedAnswer, setSuggestedAnswer] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(!!existingFeedback);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Handle click outside form to close it
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  // Handle feedback submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    const feedbackData = {
      questionId,
      examName,
      feedbackType,
      suggestedAnswer: feedbackType === 'incorrect_answer' ? suggestedAnswer : null,
      feedbackText
    };
  
    try {
      // Call the onSubmit handler passed from parent component
      await onSubmit(feedbackData);
      setIsSubmitted(true);
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  
    // Reset form after submission
    setFeedbackType('');
    setSuggestedAnswer('');
    setFeedbackText('');
  };

  return (
    <div ref={formRef}>
      {!showForm && !isSubmitted && (
        <button 
          onClick={() => setShowForm(true)} 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition-colors"
        >
          Provide Feedback
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-white shadow-md">
          <h3 className="text-lg font-semibold mb-2">Provide Feedback</h3>
          <div className="mb-2">
            <label className="block mb-1">Feedback Type:</label>
            <select 
              value={feedbackType} 
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a type</option>
              <option value="incorrect_answer">Incorrect Answer</option>
              <option value="incorrect_explanation">Incorrect Explanation</option>
              <option value="typo">Typo or Error</option>
              <option value="other">Other</option>
            </select>
          </div>
          {feedbackType === 'incorrect_answer' && (
            <div className="mb-2">
              <label className="block mb-1">Suggested Answer:</label>
              <select 
                value={suggestedAnswer} 
                onChange={(e) => setSuggestedAnswer(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an answer</option>
                {options.map(option => (
                  <option key={option.letter} value={option.letter}>
                    {option.letter}: {option.text}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-2">
            <label className="block mb-1">Comments:</label>
            <textarea 
              value={feedbackText} 
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full p-2 border rounded"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              onClick={() => setShowForm(false)} 
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      )}
      {isSubmitted && (
        <p className="text-green-500 mt-2 p-2 bg-green-50 rounded">Feedback sent successfully!</p>
      )}
    </div>
  );
};

export default Feedback;
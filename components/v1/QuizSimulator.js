'use client';

import React, { useState } from 'react';
import MCQOption from './MCQOption';

const QuizSimulator = ({ 
  subject, 
  mcqs, 
  mcqAnswers, 
  pinnedQuestions, 
  onBack, 
  onMcqOptionClick,
  onTogglePin 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const currentQuestion = mcqs[currentQuestionIndex];
  
  const handleNext = () => {
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  if (!currentQuestion) {
    return (
      <div className="text-center p-8">
        <p>No questions available.</p>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Back to Subjects
        </button>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to subjects
        </button>
        <div className="text-sm font-medium text-gray-600">
          {subject.name} • Question <span className="text-blue-600">{currentQuestionIndex + 1}</span> of {mcqs.length}
        </div>
      </div>
    
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium text-gray-900 pr-10">{currentQuestion.question}</h3>
          <button 
            className="text-gray-400 hover:text-blue-500"
            onClick={() => onTogglePin(currentQuestion.id)}
          >
            {pinnedQuestions.includes(currentQuestion.id) ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <MCQOption
              key={index}
              option={option}
              index={index}
              isSelected={mcqAnswers[currentQuestion.id] === index}
              onClick={() => onMcqOptionClick(currentQuestion.id, index)}
            />
          ))}
        </div>
        
        {mcqAnswers[currentQuestion.id] !== undefined && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Explanation:</h4>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          className={`px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white font-medium ${
            currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 bg-blue-600 text-white rounded-md font-medium ${
            currentQuestionIndex === mcqs.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
          onClick={handleNext}
          disabled={currentQuestionIndex === mcqs.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default QuizSimulator;
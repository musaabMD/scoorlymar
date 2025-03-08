import React, { useState } from 'react';
import { Pin, BookOpen, Tag } from 'lucide-react';

const McqCard = ({
  mcq,
  isPinned,
  togglePin,
  selectedOption,
  onSelectOption
}) => {
  // Track which option has its explanation showing
  const [showingExplanationFor, setShowingExplanationFor] = useState(null);
  // Track if this is the second click on the same option
  const [lastClickedOption, setLastClickedOption] = useState(null);
  const [clickTimestamp, setClickTimestamp] = useState(0);
  
  // Handle option click with double-click detection for reset
  const handleOptionClick = (index) => {
    const now = Date.now();
    
    if (selectedOption === undefined) {
      // First click on any option when nothing selected - select it
      onSelectOption(index);
      setShowingExplanationFor(index);
      setLastClickedOption(index);
      setClickTimestamp(now);
    } else if (selectedOption === index) {
      // Clicking on already selected option
      if (lastClickedOption === index && now - clickTimestamp < 500) {
        // Double click detected - reset selection
        onSelectOption(undefined);
        setShowingExplanationFor(null);
        setLastClickedOption(null);
      } else {
        // Single click - toggle explanation
        setShowingExplanationFor(showingExplanationFor === index ? null : index);
        setLastClickedOption(index);
        setClickTimestamp(now);
      }
    } else {
      // Different option selected - choose this one instead
      onSelectOption(index);
      setShowingExplanationFor(index);
      setLastClickedOption(index);
      setClickTimestamp(now);
    }
  };

  return (
    <div className="mb-6 bg-white rounded-xl shadow-sm p-5 border border-gray-100 relative">
      {/* Subject and Topics tags */}
      {mcq.subject && (
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium">
            <BookOpen size={12} className="mr-1" />
            {mcq.subject}
          </div>
          
          {mcq.topics && mcq.topics.map((topic, idx) => (
            <div key={idx} className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">
              <Tag size={10} className="mr-1" />
              {topic}
            </div>
          ))}
        </div>
      )}
      
      {/* Pin button */}
      <button
        onClick={togglePin}
        className={`absolute top-4 right-4 p-1.5 rounded-full ${
          isPinned
            ? 'text-yellow-500'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <Pin size={18} className={isPinned ? 'fill-yellow-500' : ''} />
      </button>
      
      {/* Question text with proper rendering */}
      <h3 className="mb-4 pr-8 font-medium text-gray-800"
          dangerouslySetInnerHTML={{ __html: mcq.question }}></h3>
      
      {/* Hint for double-click reset (only shown when an answer is selected) */}
      {selectedOption !== undefined && (
        <div className="mb-4 text-xs text-gray-500 italic">
          Double-click on your selected answer to reset
        </div>
      )}
      
      {/* Options */}
      <div className="space-y-3 mb-5">
        {mcq.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === mcq.answer;
          const showExplanation = selectedOption !== undefined && showingExplanationFor === index;
          
          // Determine which style to apply to the option
          let optionClass = "w-full text-left p-4 rounded-lg border transition-all cursor-pointer ";
          
          if (selectedOption !== undefined) {
            // User has made a selection
            if (isCorrect) {
              // This is the correct answer
              optionClass += "bg-green-50 border-green-300 text-green-800";
            } else if (isSelected) {
              // This is the selected wrong answer
              optionClass += "bg-red-50 border-red-300 text-red-800";
            } else {
              // Other unselected options - keep them interactive
              optionClass += "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100";
            }
          } else {
            // No selection yet
            optionClass += "bg-gray-50 border-gray-200 hover:bg-gray-100";
          }
          
          return (
            <div key={index} className="relative">
              <div
                onClick={() => handleOptionClick(index)}
                className={optionClass}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium mr-2">{String.fromCharCode(65 + index)})</span> 
                    {option}
                  </div>
                  
                  {isSelected && isCorrect && (
                    <span className="text-green-600 bg-green-100 p-1 rounded-full flex items-center justify-center w-6 h-6">
                      ✓
                    </span>
                  )}
                  
                  {isSelected && !isCorrect && (
                    <span className="text-red-600 bg-red-100 p-1 rounded-full flex items-center justify-center w-6 h-6">
                      ✗
                    </span>
                  )}
                  
                  {!isSelected && selectedOption !== undefined && isCorrect && (
                    <span className="text-green-600 bg-green-100 p-1 rounded-full flex items-center justify-center w-6 h-6">
                      ✓
                    </span>
                  )}
                </div>
                
                {showExplanation && (
                  <div className="mt-3">
                    <div className="text-sm">
                      {isCorrect ? (
                        <div className="bg-green-100 p-3 rounded-lg mb-2 flex items-start">
                          <span className="text-green-600 bg-white rounded-full flex items-center justify-center min-w-6 h-6 mr-2 shadow-sm">✓</span>
                          <div>
                            <div className="font-medium text-green-800">Correct!</div>
                            <p className="text-green-700 mt-1" dangerouslySetInnerHTML={{ __html: mcq.explanation }}></p>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-red-100 p-3 rounded-lg mb-2 flex items-start">
                          <span className="text-red-600 bg-white rounded-full flex items-center justify-center min-w-6 h-6 mr-2 shadow-sm">✗</span>
                          <div>
                            <div className="font-medium text-red-800">Incorrect</div>
                            <p className="text-red-700">
                              The correct answer is <span className="font-medium">{String.fromCharCode(65 + mcq.answer)}: {mcq.options[mcq.answer]}</span>
                              {mcq.explanation && (
                                <>
                                  <br /><br />
                                  <span className="font-medium">Explanation:</span><br />
                                  <span dangerouslySetInnerHTML={{ __html: mcq.explanation }}></span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default McqCard;
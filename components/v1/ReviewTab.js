'use client';

import React from 'react';
import EmptyState from '@/components/EmptyState';
import ReviewFilter from '@/components/v1/ReviewFilter';
import MCQOption from '@/components/v1/MCQOption';

const ReviewTab = ({ 
  reviewItems, 
  reviewFilter, 
  setReviewFilter, 
  reviewAnswers, 
  toggleReviewAnswer, 
  setActiveTab 
}) => {
  // Filter for only MCQ items (pinned or incorrect)
  const mcqReviewItems = reviewItems.filter(item => 
    item.type === 'pinned' || item.type === 'incorrect'
  );

  return (
    <div className="h-full flex flex-col">
      {/* Filter controls */}
      <ReviewFilter 
        reviewFilter={reviewFilter} 
        setReviewFilter={setReviewFilter} 
      />

      {mcqReviewItems.length > 0 ? (
        <div className="space-y-4 flex-grow overflow-auto">
          {mcqReviewItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-base font-medium text-gray-900 pr-8">{item.question}</h3>
                <div className="flex-shrink-0">
                  {item.type === 'pinned' ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              
              {/* Show answer options if they exist */}
              {item.options && (
                <div className="space-y-2 mb-4">
                  {item.options.map((option, index) => (
                    <MCQOption
                      key={index}
                      option={option}
                      index={index}
                      isSelected={option.isCorrect || (item.userAnswer === index)}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              )}
              
              {/* Show explanation - always expanded in review mode */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Explanation:</h4>
                <p className="text-gray-700 text-sm">{item.answer || item.explanation}</p>
              </div>
              
              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>{item.category}</span>
                {item.date && <span>{new Date(item.date).toLocaleDateString()}</span>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <EmptyState 
            icon={reviewFilter === 'pinned' ? "📌" : "✅"}
            title={reviewFilter === 'all' ? "No Review Items" : 
                  reviewFilter === 'pinned' ? "No Pinned Questions" : 
                  "No Incorrect Questions"}
            description={reviewFilter === 'all' ? "You don't have any questions to review." : 
                        reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
                        "Answer questions in study mode to see your incorrect answers here."}
            buttonText="Practice More"
            buttonAction={() => setActiveTab('simulator')}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewTab;
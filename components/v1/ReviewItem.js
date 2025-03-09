'use client';

import React from 'react';

const ReviewItem = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="p-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start">
          <div className="mr-3 mt-1">
            {item.type === 'incorrect' ? (
              <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex-1">
            <p className="text-gray-800 font-medium">{item.question}</p>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{item.category}</span>
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="ml-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
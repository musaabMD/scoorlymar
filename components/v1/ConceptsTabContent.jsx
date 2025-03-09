'use client';

import React from 'react';

const ConceptsTabContent = ({ concepts }) => {
  return (
    <div className="space-y-3 h-full overflow-auto pt-2">
      {concepts.map(category => (
        <div 
          key={category.id} 
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 cursor-pointer hover:shadow-md transition"
        >
          <div className="flex items-center mb-2">
            <div className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
                <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">
                  {Math.floor(Math.random() * 5) + 2} concepts
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConceptsTabContent;
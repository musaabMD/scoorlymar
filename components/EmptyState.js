'use client';
import React from 'react';

const EmptyState = ({ 
  icon = "📭", 
  title = "No content found", 
  description = "There's nothing here yet. Get started by creating your first item.", 
  buttonText, 
  buttonAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-sm border border-gray-100 mx-auto max-w-lg">
      <span className="text-5xl mb-4">{icon}</span>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 mb-6 max-w-md">{description}</p>
      {buttonText && (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
'use client';

import React from 'react';

const SubjectDetail = ({ subject, onBack, onStart, mode = 'study' }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 text-sm font-medium mb-4 hover:text-blue-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to subjects
      </button>
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{subject.name}</h2>
        <p className="text-gray-600">{subject.description}</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Questions</p>
            <p className="text-2xl font-bold text-gray-900">{subject.questionCount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Estimated time</p>
            <p className="text-2xl font-bold text-gray-900">{Math.ceil(subject.questionCount * 1.5)} min</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onStart}
          className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition flex-1"
        >
          {mode === 'study' ? 'Start Studying' : 'Start Simulator'}
        </button>
        <button
          onClick={onBack}
          className="border border-gray-300 bg-white text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition"
        >
          Choose Different Subject
        </button>
      </div>
    </div>
  );
};

export default SubjectDetail;
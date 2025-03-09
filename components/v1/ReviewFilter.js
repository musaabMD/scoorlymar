'use client';

import React from 'react';

const ReviewFilter = ({ reviewFilter, setReviewFilter }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-4">
      <div className="flex flex-wrap gap-2">
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setReviewFilter('all')}
        >
          All
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setReviewFilter('incorrect')}
        >
          Incorrect
        </button>
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setReviewFilter('pinned')}
        >
          Pinned
        </button>
      </div>
    </div>
  );
};

export default ReviewFilter;
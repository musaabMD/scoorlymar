import React from 'react';
import { Eye, EyeOff, BookmarkIcon, XCircleIcon } from 'lucide-react';
import EmptyState from '@/components/EmptyState';

const ReviewTab = ({ 
  reviewItems, 
  reviewFilter, 
  setReviewFilter, 
  reviewAnswers, 
  toggleReviewAnswer,
  setActiveTab
}) => {
  // Check if there are no items to display
  const noItemsToDisplay = reviewItems.length === 0;
  
  return (
    <div className="space-y-4">
      {/* Filter controls */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-200 rounded-full p-1">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setReviewFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setReviewFilter('incorrect')}
          >
            <XCircleIcon size={14} className="mr-1" /> Incorrect
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setReviewFilter('pinned')}
          >
            <BookmarkIcon size={14} className="mr-1" /> Bookmarked
          </button>
        </div>
      </div>

      {/* MCQ List or Empty State */}
      {noItemsToDisplay ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Review Items</h3>
          <p className="text-gray-500 mb-4">You don't have any questions to review.</p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
            onClick={() => setActiveTab('simulator')}
          >
            Practice More
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {reviewItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
              onClick={() => toggleReviewAnswer(item.id)}
            >
              <div className="p-4 hover:bg-gray-50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    {item.type === 'incorrect' ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                        <XCircleIcon size={16} className="text-red-600" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                        <BookmarkIcon size={16} className="text-blue-600" />
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{item.question}</h3>
                      <div className="flex items-center ml-2 text-sm text-gray-600">
                        {reviewAnswers[item.id] ? (
                          <EyeOff size={16} className="ml-1" />
                        ) : (
                          <Eye size={16} className="ml-1" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>{item.category}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {reviewAnswers[item.id] && (
                <div className="p-4 bg-blue-50 border-t border-blue-100">
                  <div
                    className="text-blue-800"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewTab;
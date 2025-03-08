import React from 'react';
import { BookOpen, FileText, CheckSquare, Pin } from 'lucide-react';

const ExamDetailTabs = ({ 
  activeTab, 
  setActiveTab, 
  showPinned, 
  setShowPinned, 
  pinnedCount 
}) => {
  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden sm:block border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('prep')}
              className={`py-4 px-3 font-medium text-md flex items-center border-b-2 transition-colors ${
                activeTab === 'prep'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen size={18} className="mr-2" />
              Prep Notes
            </button>
            <button
              onClick={() => {
                setActiveTab('mcqs');
                setShowPinned(false);
              }}
              className={`py-4 px-3 font-medium text-md flex items-center border-b-2 transition-colors ${
                activeTab === 'mcqs' && !showPinned
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText size={18} className="mr-2" />
              MCQs
            </button>
            {pinnedCount > 0 && (
              <button
                onClick={() => {
                  setActiveTab('mcqs');
                  setShowPinned(true);
                }}
                className={`py-4 px-3 font-medium text-md flex items-center border-b-2 transition-colors ${
                  activeTab === 'mcqs' && showPinned
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Pin size={18} className="mr-2" />
                Pinned ({pinnedCount})
              </button>
            )}
            <button
              onClick={() => setActiveTab('review')}
              className={`py-4 px-3 font-medium text-md flex items-center border-b-2 transition-colors ${
                activeTab === 'review'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CheckSquare size={18} className="mr-2" />
              Last-Minute Review
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Tab Bar (iOS style) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('prep')}
            className={`py-3 flex flex-col items-center justify-center w-1/3 ${
              activeTab === 'prep' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <BookOpen size={22} className="mb-1" />
            <span className="text-xs font-medium">Notes</span>
          </button>
          <button
            onClick={() => setActiveTab('mcqs')}
            className={`py-3 flex flex-col items-center justify-center w-1/3 ${
              activeTab === 'mcqs' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <FileText size={22} className="mb-1" />
            <span className="text-xs font-medium">MCQs</span>
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`py-3 flex flex-col items-center justify-center w-1/3 ${
              activeTab === 'review' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <CheckSquare size={22} className="mb-1" />
            <span className="text-xs font-medium">Review</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ExamDetailTabs;
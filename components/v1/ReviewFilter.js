// 'use client';

// import React from 'react';

// const ReviewFilter = ({ reviewFilter, setReviewFilter }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-4">
//       <div className="flex flex-wrap gap-2">
//         <button 
//           className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//           onClick={() => setReviewFilter('all')}
//         >
//           All
//         </button>
//         <button 
//           className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//           onClick={() => setReviewFilter('incorrect')}
//         >
//           Incorrect
//         </button>
//         <button 
//           className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//           onClick={() => setReviewFilter('pinned')}
//         >
//           Pinned
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReviewFilter;
'use client';

import React from 'react';
import { BookmarkIcon, XCircleIcon, FilterIcon } from 'lucide-react';

const ReviewFilter = ({ reviewFilter, setReviewFilter }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 p-3 border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FilterIcon size={18} className="text-gray-500 mr-2" />
          <h3 className="text-sm font-medium text-gray-700">Filter by:</h3>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => setReviewFilter('all')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              reviewFilter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setReviewFilter('pinned')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
              reviewFilter === 'pinned' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BookmarkIcon size={16} className="mr-1" />
            Bookmarked
          </button>
          <button
            onClick={() => setReviewFilter('incorrect')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
              reviewFilter === 'incorrect' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <XCircleIcon size={16} className="mr-1" />
            Incorrect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;
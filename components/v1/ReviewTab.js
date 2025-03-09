// 'use client';

// import React, { useState } from 'react';
// import ReviewFilter from './review/ReviewFilter';
// import ReviewItem from './review/ReviewItem';
// import EmptyState from '@/components/EmptyState';

// const ReviewTab = ({ reviewItems, searchTerm }) => {
//   const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'pinned'
//   const [reviewAnswers, setReviewAnswers] = useState({});
  
//   // Filter review items based on review filter and search term
//   const filteredReviewItems = reviewItems.filter(item => {
//     const matchesFilter = reviewFilter === 'all' || item.type === reviewFilter;
//     const matchesSearch = !searchTerm || 
//                           item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });
  
//   const toggleReviewAnswer = (reviewId) => {
//     setReviewAnswers({
//       ...reviewAnswers,
//       [reviewId]: !reviewAnswers[reviewId]
//     });
//   };
  
//   return (
//     <>
//       {/* Filter controls */}
//       <ReviewFilter 
//         reviewFilter={reviewFilter}
//         setReviewFilter={setReviewFilter}
//       />

//       {filteredReviewItems.length > 0 ? (
//         <div className="space-y-4">
//           {filteredReviewItems.map((item) => (
//             <ReviewItem 
//               key={item.id}
//               item={item}
//               isExpanded={reviewAnswers[item.id]}
//               onToggle={() => toggleReviewAnswer(item.id)}
//             />
//           ))}
//         </div>
//       ) : (
//         <EmptyState 
//           icon={reviewFilter === 'pinned' ? "📌" : "✅"}
//           title={reviewFilter === 'all' ? "No Review Items" : 
//                 reviewFilter === 'pinned' ? "No Pinned Questions" : 
//                 "No Incorrect Questions"}
//           description={reviewFilter === 'all' ? "You don't have any questions to review." : 
//                       reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
//                       "Answer questions in study mode to see your incorrect answers here."}
//           buttonText="Practice More"
//           buttonAction={() => console.log('Practice more clicked')}
//         />
//       )}
//     </>
//   );
// };

// export default ReviewTab;
'use client';

import React from 'react';
import EmptyState from '@/components/EmptyState';
import ReviewFilter from '@/components/v1/ReviewFilter';
import ReviewItem from '@/components/v1/ReviewItem';

const ReviewTab = ({ 
  reviewItems, 
  reviewFilter, 
  setReviewFilter, 
  reviewAnswers, 
  toggleReviewAnswer, 
  setActiveTab 
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Filter controls */}
      <ReviewFilter 
        reviewFilter={reviewFilter} 
        setReviewFilter={setReviewFilter} 
      />

      {reviewItems.length > 0 ? (
        <div className="space-y-3 flex-grow overflow-auto">
          {reviewItems.map((item) => (
            <ReviewItem 
              key={item.id}
              item={item}
              isExpanded={reviewAnswers[item.id]}
              onToggle={() => toggleReviewAnswer(item.id)}
            />
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
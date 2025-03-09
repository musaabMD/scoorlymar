// // // // 'use client';

// // // // import React from 'react';
// // // // import EmptyState from '@/components/EmptyState';
// // // // import ReviewFilter from '@/components/v1/ReviewFilter';
// // // // import MCQOption from '@/components/v1/MCQOption';

// // // // const ReviewTab = ({ 
// // // //   reviewItems, 
// // // //   reviewFilter, 
// // // //   setReviewFilter, 
// // // //   reviewAnswers, 
// // // //   toggleReviewAnswer, 
// // // //   setActiveTab 
// // // // }) => {
// // // //   // Filter for only MCQ items (pinned or incorrect)
// // // //   const mcqReviewItems = reviewItems.filter(item => 
// // // //     item.type === 'pinned' || item.type === 'incorrect'
// // // //   );

// // // //   return (
// // // //     <div className="h-full flex flex-col">
// // // //       {/* Filter controls */}
// // // //       <ReviewFilter 
// // // //         reviewFilter={reviewFilter} 
// // // //         setReviewFilter={setReviewFilter} 
// // // //       />

// // // //       {mcqReviewItems.length > 0 ? (
// // // //         <div className="space-y-4 flex-grow overflow-auto">
// // // //           {mcqReviewItems.map((item) => (
// // // //             <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
// // // //               <div className="flex justify-between items-start mb-4">
// // // //                 <h3 className="text-base font-medium text-gray-900 pr-8">{item.question}</h3>
// // // //                 <div className="flex-shrink-0">
// // // //                   {item.type === 'pinned' ? (
// // // //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
// // // //                         <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // //                       </svg>
// // // //                     </span>
// // // //                   ) : (
// // // //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
// // // //                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // //                       </svg>
// // // //                     </span>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
              
// // // //               {/* Show answer options if they exist */}
// // // //               {item.options && (
// // // //                 <div className="space-y-2 mb-4">
// // // //                   {item.options.map((option, index) => (
// // // //                     <MCQOption
// // // //                       key={index}
// // // //                       option={option}
// // // //                       index={index}
// // // //                       isSelected={option.isCorrect || (item.userAnswer === index)}
// // // //                       onClick={() => {}}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               )}
              
// // // //               {/* Show explanation - always expanded in review mode */}
// // // //               <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
// // // //                 <h4 className="font-medium text-gray-900 mb-1 text-sm">Explanation:</h4>
// // // //                 <p className="text-gray-700 text-sm">{item.answer || item.explanation}</p>
// // // //               </div>
              
// // // //               <div className="flex justify-between mt-3 text-xs text-gray-500">
// // // //                 <span>{item.category}</span>
// // // //                 {item.date && <span>{new Date(item.date).toLocaleDateString()}</span>}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       ) : (
// // // //         <div className="flex-grow flex items-center justify-center">
// // // //           <EmptyState 
// // // //             icon={reviewFilter === 'pinned' ? "📌" : "✅"}
// // // //             title={reviewFilter === 'all' ? "No Review Items" : 
// // // //                   reviewFilter === 'pinned' ? "No Pinned Questions" : 
// // // //                   "No Incorrect Questions"}
// // // //             description={reviewFilter === 'all' ? "You don't have any questions to review." : 
// // // //                         reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
// // // //                         "Answer questions in study mode to see your incorrect answers here."}
// // // //             buttonText="Practice More"
// // // //             buttonAction={() => setActiveTab('simulator')}
// // // //           />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ReviewTab;
// // // 'use client';

// // // import React, { useState } from 'react';
// // // import EmptyState from '@/components/EmptyState';
// // // import MCQOption from '@/components/v1/MCQOption';
// // // import { BookmarkIcon, XCircleIcon } from 'lucide-react';

// // // const ReviewTab = ({ 
// // //   reviewItems, 
// // //   reviewFilter, 
// // //   setReviewFilter, 
// // //   reviewAnswers, 
// // //   toggleReviewAnswer, 
// // //   setActiveTab 
// // // }) => {
// // //   // Filter for only MCQ items (pinned or incorrect)
// // //   const mcqReviewItems = reviewItems.filter(item => 
// // //     (reviewFilter === 'all' || item.type === reviewFilter)
// // //   );

// // //   // Local state to track expanded items
// // //   const [expandedItems, setExpandedItems] = useState({});

// // //   // Toggle expansion of an item
// // //   const toggleExpand = (itemId) => {
// // //     setExpandedItems(prev => ({
// // //       ...prev,
// // //       [itemId]: !prev[itemId]
// // //     }));
// // //   };

// // //   return (
// // //     <div className="h-full flex flex-col bg-gray-50 rounded-lg p-4">
// // //       {/* Improved filter controls - inline with content */}
// // //       <div className="bg-white rounded-lg shadow-sm mb-4 p-2 border border-gray-200">
// // //         <div className="flex justify-between items-center">
// // //           <h2 className="text-lg font-medium text-gray-900 px-2">Review Items</h2>
// // //           <div className="flex space-x-1">
// // //             <button
// // //               onClick={() => setReviewFilter('all')}
// // //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
// // //                 reviewFilter === 'all' 
// // //                   ? 'bg-blue-100 text-blue-700' 
// // //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // //               }`}
// // //             >
// // //               All
// // //             </button>
// // //             <button
// // //               onClick={() => setReviewFilter('pinned')}
// // //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
// // //                 reviewFilter === 'pinned' 
// // //                   ? 'bg-blue-100 text-blue-700' 
// // //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // //               }`}
// // //             >
// // //               <BookmarkIcon size={16} className="mr-1" />
// // //               Bookmarked
// // //             </button>
// // //             <button
// // //               onClick={() => setReviewFilter('incorrect')}
// // //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
// // //                 reviewFilter === 'incorrect' 
// // //                   ? 'bg-blue-100 text-blue-700' 
// // //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// // //               }`}
// // //             >
// // //               <XCircleIcon size={16} className="mr-1" />
// // //               Incorrect
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {mcqReviewItems.length > 0 ? (
// // //         <div className="space-y-3 flex-grow overflow-auto pr-1">
// // //           {mcqReviewItems.map((item) => (
// // //             <div 
// // //               key={item.id} 
// // //               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
// // //             >
// // //               <div 
// // //                 className="p-4 cursor-pointer flex items-start"
// // //                 onClick={() => toggleExpand(item.id)}
// // //               >
// // //                 <div className="mr-3 mt-1 flex-shrink-0">
// // //                   {item.type === 'incorrect' ? (
// // //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// // //                       <XCircleIcon className="h-4 w-4 text-red-600" />
// // //                     </span>
// // //                   ) : (
// // //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// // //                       <BookmarkIcon className="h-4 w-4 text-blue-600" />
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <p className="text-gray-800 font-medium">{item.question}</p>
// // //                   <div className="flex justify-between mt-2 text-xs text-gray-500">
// // //                     <span>{item.category}</span>
// // //                     {item.date && <span>{new Date(item.date).toLocaleDateString()}</span>}
// // //                   </div>
// // //                 </div>
// // //                 <div className="ml-2 flex-shrink-0">
// // //                   <svg
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     className={`h-5 w-5 text-gray-400 transition-transform ${expandedItems[item.id] ? 'rotate-180' : ''}`}
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                     stroke="currentColor"
// // //                   >
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
              
// // //               {expandedItems[item.id] && (
// // //                 <div className="border-t border-gray-200">
// // //                   {/* Show answer options if they exist */}
// // //                   {item.options && (
// // //                     <div className="p-3 space-y-2 bg-white">
// // //                       {item.options.map((option, index) => (
// // //                         <MCQOption
// // //                           key={index}
// // //                           option={option}
// // //                           index={index}
// // //                           isSelected={option.isCorrect || (item.userAnswer === index)}
// // //                           onClick={() => {}}
// // //                         />
// // //                       ))}
// // //                     </div>
// // //                   )}
                  
// // //                   {/* Show explanation */}
// // //                   <div className="p-4 bg-gray-50">
// // //                     <h4 className="font-medium text-gray-900 mb-2 text-sm">Explanation:</h4>
// // //                     <p className="text-gray-700 text-sm">{item.answer || item.explanation}</p>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex-grow flex items-center justify-center">
// // //           <div className="max-w-sm w-full">
// // //             {reviewFilter === 'all' ? (
// // //               <EmptyState 
// // //                 icon="📝"
// // //                 title="No Review Items"
// // //                 description="You don't have any bookmarked or incorrect questions to review yet."
// // //                 buttonText="Start Practicing"
// // //                 buttonAction={() => setActiveTab('simulator')}
// // //               />
// // //             ) : reviewFilter === 'pinned' ? (
// // //               <EmptyState 
// // //                 icon="📌"
// // //                 title="No Bookmarked Questions"
// // //                 description="Bookmark important questions during your study sessions to review them later."
// // //                 buttonText="Go to Study Mode"
// // //                 buttonAction={() => setActiveTab('study')}
// // //               />
// // //             ) : (
// // //               <EmptyState 
// // //                 icon="✅"
// // //                 title="No Incorrect Questions"
// // //                 description="Practice more questions to identify areas for improvement."
// // //                 buttonText="Take a Practice Test"
// // //                 buttonAction={() => setActiveTab('simulator')}
// // //               />
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ReviewTab;
// // 'use client';

// // import React, { useState } from 'react';
// // import EmptyState from '@/components/EmptyState';
// // import MCQOption from '@/components/v1/MCQOption';
// // import { BookmarkIcon, XCircleIcon } from 'lucide-react';

// // const ReviewTab = ({ 
// //   reviewItems, 
// //   reviewFilter, 
// //   setReviewFilter, 
// //   reviewAnswers, 
// //   toggleReviewAnswer, 
// //   setActiveTab 
// // }) => {
// //   // Filter for only MCQ items (pinned or incorrect)
// //   const mcqReviewItems = reviewItems.filter(item => 
// //     (reviewFilter === 'all' || item.type === reviewFilter)
// //   );

// //   // Local state to track expanded items
// //   const [expandedItems, setExpandedItems] = useState({});

// //   // Toggle expansion of an item
// //   const toggleExpand = (itemId) => {
// //     setExpandedItems(prev => ({
// //       ...prev,
// //       [itemId]: !prev[itemId]
// //     }));
// //   };

// //   return (
// //     <div className="h-full flex flex-col bg-gray-50 rounded-lg p-4">
// //       {/* Improved filter controls - inline with content */}
// //       <div className="bg-white rounded-lg shadow-sm mb-4 p-2 border border-gray-200">
// //         <div className="flex justify-between items-center">
// //           <h2 className="text-lg font-medium text-gray-900 px-2">Review Items</h2>
// //           <div className="flex space-x-1">
// //             <button
// //               onClick={() => setReviewFilter('all')}
// //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
// //                 reviewFilter === 'all' 
// //                   ? 'bg-blue-100 text-blue-700' 
// //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //               }`}
// //             >
// //               All
// //             </button>
// //             <button
// //               onClick={() => setReviewFilter('pinned')}
// //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
// //                 reviewFilter === 'pinned' 
// //                   ? 'bg-blue-100 text-blue-700' 
// //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //               }`}
// //             >
// //               <BookmarkIcon size={16} className="mr-1" />
// //               Bookmarked
// //             </button>
// //             <button
// //               onClick={() => setReviewFilter('incorrect')}
// //               className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center ${
// //                 reviewFilter === 'incorrect' 
// //                   ? 'bg-blue-100 text-blue-700' 
// //                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //               }`}
// //             >
// //               <XCircleIcon size={16} className="mr-1" />
// //               Incorrect
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {mcqReviewItems.length > 0 ? (
// //         <div className="space-y-3 flex-grow overflow-auto pr-1">
// //           {mcqReviewItems.map((item) => (
// //             <div 
// //               key={item.id} 
// //               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
// //             >
// //               <div 
// //                 className="p-4 cursor-pointer flex items-start"
// //                 onClick={() => toggleExpand(item.id)}
// //               >
// //                 <div className="mr-3 mt-1 flex-shrink-0">
// //                   {item.type === 'incorrect' ? (
// //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// //                       <XCircleIcon className="h-4 w-4 text-red-600" />
// //                     </span>
// //                   ) : (
// //                     <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// //                       <BookmarkIcon className="h-4 w-4 text-blue-600" />
// //                     </span>
// //                   )}
// //                 </div>
// //                 <div className="flex-1">
// //                   <p className="text-gray-800 font-medium">{item.question}</p>
// //                   <div className="flex justify-between mt-2 text-xs text-gray-500">
// //                     <span>{item.category}</span>
// //                     {item.date && <span>{new Date(item.date).toLocaleDateString()}</span>}
// //                   </div>
// //                 </div>
// //                 <div className="ml-2 flex-shrink-0">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className={`h-5 w-5 text-gray-400 transition-transform ${expandedItems[item.id] ? 'rotate-180' : ''}`}
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                   </svg>
// //                 </div>
// //               </div>
              
// //               {expandedItems[item.id] && (
// //                 <div className="border-t border-gray-200">
// //                   {/* Show answer options if they exist */}
// //                   {item.options && (
// //                     <div className="p-3 space-y-2 bg-white">
// //                       {item.options.map((option, index) => (
// //                         <MCQOption
// //                           key={index}
// //                           option={option}
// //                           index={index}
// //                           isSelected={option.isCorrect || (item.userAnswer === index)}
// //                           onClick={() => {}}
// //                         />
// //                       ))}
// //                     </div>
// //                   )}
                  
// //                   {/* Show explanation */}
// //                   <div className="p-4 bg-gray-50">
// //                     <h4 className="font-medium text-gray-900 mb-2 text-sm">Explanation:</h4>
// //                     <p className="text-gray-700 text-sm">{item.answer || item.explanation}</p>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex-grow flex items-center justify-center">
// //           <div className="max-w-sm w-full">
// //             {reviewFilter === 'all' ? (
// //               <EmptyState 
// //                 icon="📝"
// //                 title="No Review Items"
// //                 description="You don&apos;t have any bookmarked or incorrect questions to review yet."
// //                 buttonText="Start Practicing"
// //                 buttonAction={() => setActiveTab('simulator')}
// //               />
// //             ) : reviewFilter === 'pinned' ? (
// //               <EmptyState 
// //                 icon="📌"
// //                 title="No Bookmarked Questions"
// //                 description="Bookmark important questions during your study sessions to review them later."
// //                 buttonText="Go to Study Mode"
// //                 buttonAction={() => setActiveTab('study')}
// //               />
// //             ) : (
// //               <EmptyState 
// //                 icon="✅"
// //                 title="No Incorrect Questions"
// //                 description="Practice more questions to identify areas for improvement."
// //                 buttonText="Take a Practice Test"
// //                 buttonAction={() => setActiveTab('simulator')}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ReviewTab;
// import React from 'react';
// import EmptyState from '@/components/EmptyState';

// const ReviewTab = ({ 
//   reviewItems, 
//   reviewFilter, 
//   setReviewFilter, 
//   reviewAnswers, 
//   toggleReviewAnswer, 
//   setActiveTab 
// }) => {
//   return (
//     <>
//       {/* Filter controls */}
//       <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-4">
//         <div className="flex flex-wrap gap-2">
//           <button 
//             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//             onClick={() => setReviewFilter('all')}
//           >
//             All
//           </button>
//           <button 
//             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//             onClick={() => setReviewFilter('incorrect')}
//           >
//             Incorrect
//           </button>
//           <button 
//             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//             onClick={() => setReviewFilter('pinned')}
//           >
//             Pinned
//           </button>
//         </div>
//       </div>

//       {reviewItems.length > 0 ? (
//         <div className="space-y-4">
//           {reviewItems.map((item) => (
//             <div 
//               key={item.id} 
//               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
//             >
//               <div 
//                 className="p-4 cursor-pointer"
//                 onClick={() => toggleReviewAnswer(item.id)}
//               >
//                 <div className="flex items-start">
//                   <div className="mr-3 mt-1">
//                     {item.type === 'incorrect' ? (
//                       <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                     ) : (
//                       <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
//                           <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
//                         </svg>
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-gray-800 font-medium">{item.question}</p>
//                     <div className="flex justify-between mt-2 text-xs text-gray-500">
//                       <span>{item.category}</span>
//                       <span>{new Date(item.date).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                   <div className="ml-2">
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className={`h-5 w-5 text-gray-400 transition-transform ${reviewAnswers[item.id] ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
              
//               {reviewAnswers[item.id] && (
//                 <div className="p-4 bg-gray-50 border-t border-gray-200">
//                   <p className="text-gray-700">{item.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <EmptyState 
//           icon={reviewFilter === 'pinned' ? "📌" : "✅"}
//           title={reviewFilter === 'all' ? "No Review Items" : 
//                  reviewFilter === 'pinned' ? "No Pinned Questions" : 
//                  "No Incorrect Questions"}
//           description={reviewFilter === 'all' ? "You don't have any questions to review." : 
//                        reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
//                        "Answer questions in study mode to see your incorrect answers here."}
//           buttonText="Practice More"
//           buttonAction={() => setActiveTab('simulator')}
//         />
//       )}
//     </>
//   );
// };

// export default ReviewTab;
'use client';

import React from 'react';
import EmptyState from '@/components/EmptyState';

const ReviewTab = ({ 
  reviewItems, 
  reviewFilter, 
  setReviewFilter, 
  reviewAnswers, 
  toggleReviewAnswer, 
  setActiveTab 
}) => {
  return (
    <>
      {/* Filter controls */}
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

      {reviewItems.length > 0 ? (
        <div className="space-y-4">
          {reviewItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div 
                className="p-4 cursor-pointer"
                onClick={() => toggleReviewAnswer(item.id)}
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
                      className={`h-5 w-5 text-gray-400 transition-transform ${reviewAnswers[item.id] ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {reviewAnswers[item.id] && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <EmptyState 
          icon={reviewFilter === 'pinned' ? "📌" : "✅"}
          title={reviewFilter === 'all' ? "No Review Items" : 
                 reviewFilter === 'pinned' ? "No Pinned Questions" : 
                 "No Incorrect Questions"}
          description={reviewFilter === 'all' ? "You don&apos;t have any questions to review." : 
                       reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
                       "Answer questions in study mode to see your incorrect answers here."}
          buttonText="Practice More"
          buttonAction={() => setActiveTab('simulator')}
        />
      )}
    </>
  );
};

export default ReviewTab;
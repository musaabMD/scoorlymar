// // "use client"
// // // USMLEBlueprint.js - Clean, simple design with full-width cards
// // import React, { useState } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { ChevronDown, ChevronUp } from 'lucide-react';

// // export default function USMLEBlueprint() {
// //   // State to track which topics are expanded
// //   const [expandedTopics, setExpandedTopics] = useState({});
  
// //   // Overall score data
// //   const overallScore = 60;
// //   const totalQuestionsCount = 100;

// //   // Toggle expanded state for a topic
// //   const toggleTopic = (index) => {
// //     setExpandedTopics(prev => ({
// //       ...prev,
// //       [index]: !prev[index]
// //     }));
// //   };

// //   // USMLE Step 2 CK exam blueprint data with percentages, subtopics and question counts
// //   const examData = {
// //     name: "USMLE Step 2 CK",
// //     topics: [
// //       { 
// //         name: 'Internal Medicine', 
// //         percentage: '20',
// //         questionCount: 20,
// //         completedCount: 14,
// //         score: 70,
// //         subtopics: [
// //           { name: 'Cardiology', questionCount: 9, completedCount: 8, score: 89 },
// //           { name: 'Pulmonology', questionCount: 5, completedCount: 3, score: 60 },
// //           { name: 'Gastroenterology', questionCount: 9, completedCount: 5, score: 56 },
// //           { name: 'Nephrology', questionCount: 7, completedCount: 4, score: 57 },
// //           { name: 'Endocrinology', questionCount: 9, completedCount: 5, score: 56 },
// //           { name: 'Hematology/Oncology', questionCount: 9, completedCount: 5, score: 56 },
// //           { name: 'Infectious Disease', questionCount: 6, completedCount: 4, score: 67 }
// //         ]
// //       },
// //       { 
// //         name: 'Surgery', 
// //         percentage: '18',
// //         questionCount: 18,
// //         completedCount: 10,
// //         score: 56,
// //         subtopics: [
// //           { name: 'General Surgery', questionCount: 5, completedCount: 3, score: 60 },
// //           { name: 'Trauma', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Orthopedics', questionCount: 3, completedCount: 1, score: 33 },
// //           { name: 'Urology', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Neurosurgery', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Vascular Surgery', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Transplantation', questionCount: 1, completedCount: 1, score: 100 }
// //         ]
// //       },
// //       { 
// //         name: 'Pediatrics', 
// //         percentage: '16',
// //         questionCount: 16,
// //         completedCount: 10,
// //         score: 63,
// //         subtopics: [
// //           { name: 'Neonatology', questionCount: 4, completedCount: 3, score: 75 },
// //           { name: 'Development', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Pediatric Infectious Disease', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Pediatric Emergencies', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Congenital Disorders', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Adolescent Medicine', questionCount: 2, completedCount: 1, score: 50 }
// //         ]
// //       },
// //       { 
// //         name: 'Obstetrics & Gynecology', 
// //         percentage: '15',
// //         questionCount: 15,
// //         completedCount: 9,
// //         score: 60,
// //         subtopics: [
// //           { name: 'Pregnancy & Delivery', questionCount: 5, completedCount: 3, score: 60 },
// //           { name: 'Fetal Development', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Gynecological Disorders', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Menstrual Disorders', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Infertility', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Gynecological Oncology', questionCount: 1, completedCount: 1, score: 100 }
// //         ]
// //       },
// //       { 
// //         name: 'Psychiatry', 
// //         percentage: '12',
// //         questionCount: 12,
// //         completedCount: 7,
// //         score: 58,
// //         subtopics: [
// //           { name: 'Mood Disorders', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Anxiety Disorders', questionCount: 3, completedCount: 2, score: 67 },
// //           { name: 'Psychotic Disorders', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Substance Use Disorders', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Personality Disorders', questionCount: 1, completedCount: 0, score: 0 },
// //           { name: 'Child & Adolescent Psychiatry', questionCount: 1, completedCount: 1, score: 100 }
// //         ]
// //       },
// //       { 
// //         name: 'Family Medicine', 
// //         percentage: '9',
// //         questionCount: 9,
// //         completedCount: 5,
// //         score: 56,
// //         subtopics: [
// //           { name: 'Preventive Care', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Chronic Disease Management', questionCount: 2, completedCount: 2, score: 100 },
// //           { name: 'Geriatrics', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Palliative Care', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Sports Medicine', questionCount: 1, completedCount: 0, score: 0 },
// //           { name: 'Community Medicine', questionCount: 1, completedCount: 0, score: 0 }
// //         ]
// //       },
// //       { 
// //         name: 'Emergency Medicine', 
// //         percentage: '8',
// //         questionCount: 8,
// //         completedCount: 4,
// //         score: 50,
// //         subtopics: [
// //           { name: 'Trauma', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Cardiovascular Emergencies', questionCount: 2, completedCount: 1, score: 50 },
// //           { name: 'Respiratory Emergencies', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Toxicology', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Environmental Emergencies', questionCount: 1, completedCount: 0, score: 0 },
// //           { name: 'Triage & Initial Assessment', questionCount: 1, completedCount: 0, score: 0 }
// //         ]
// //       },
// //       { 
// //         name: 'Preventive Medicine & Public Health', 
// //         percentage: '6',
// //         questionCount: 6,
// //         completedCount: 3,
// //         score: 50,
// //         subtopics: [
// //           { name: 'Biostatistics', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Epidemiology', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Healthcare Systems', questionCount: 1, completedCount: 1, score: 100 },
// //           { name: 'Occupational Medicine', questionCount: 1, completedCount: 0, score: 0 },
// //           { name: 'Global Health', questionCount: 1, completedCount: 0, score: 0 },
// //           { name: 'Ethics', questionCount: 1, completedCount: 0, score: 0 }
// //         ]
// //       }
// //     ]
// //   };

// //   // Function to get color based on score percentage
// //   const getScoreColor = (score) => {
// //     if (score >= 80) return "bg-emerald-500";
// //     if (score >= 70) return "bg-green-500";
// //     if (score >= 60) return "bg-yellow-500";
// //     if (score >= 50) return "bg-orange-400";
// //     return "bg-red-500";
// //   };

// //   const getScoreTextColor = (score) => {
// //     if (score >= 80) return "text-emerald-500";
// //     if (score >= 70) return "text-green-500";
// //     if (score >= 60) return "text-yellow-500";
// //     if (score >= 50) return "text-orange-400";
// //     return "text-red-500";
// //   };

// //   return (
// //     <div className="w-full">
// //       {/* Simple hero with overall performance */}
// //       <div className="bg-blue-600 py-6 relative">
// //         <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white flex items-center">
// //           <div className="w-full p-4">
// //             <div className="text-gray-500 font-medium text-sm mb-2">OVERALL PERFORMANCE</div>
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <div className="text-6xl font-bold text-gray-800">{overallScore}%</div>
// //                 <div className="text-gray-500 mt-1">{overallScore}/{totalQuestionsCount} Correct</div>
// //               </div>
// //               <div className="rounded-full h-20 w-20 border-4 border-blue-100 bg-blue-50 flex items-center justify-center">
// //                 <span className="text-blue-600 font-medium text-lg">{overallScore}/{totalQuestionsCount}</span>
// //               </div>
// //             </div>
// //             <div className="h-2 bg-gray-200 mt-4 rounded-full overflow-hidden">
// //               <div 
// //                 className="h-full bg-blue-600 rounded-full" 
// //                 style={{ width: `${overallScore}%` }}
// //               ></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Topic cards */}
// //       <div className="py-6 px-4 space-y-4">
// //         {examData.topics.map((topic, idx) => {
// //           const isExpanded = expandedTopics[idx] || false;
          
// //           return (
// //             <Card key={idx} className="w-full border shadow-sm">
// //               {/* Main topic header - clickable to expand */}
// //               <div 
// //                 className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
// //                 onClick={() => toggleTopic(idx)}
// //               >
// //                 <div>
// //                   <h3 className="text-xl font-medium text-gray-800">{topic.name}</h3>
// //                   <div className="text-gray-500 mt-1">{topic.completedCount} of {topic.questionCount} Questions</div>
// //                 </div>
                
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
// //                     <div 
// //                       className={`h-full ${getScoreColor(topic.score)}`}
// //                       style={{ width: `${topic.score}%` }}
// //                     ></div>
// //                   </div>
                  
// //                   <div className={`text-2xl font-bold ${getScoreTextColor(topic.score)}`}>
// //                     {topic.score}%
// //                   </div>
                  
// //                   <div>
// //                     {isExpanded ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Subtopics */}
// //               {isExpanded && (
// //                 <CardContent className="bg-gray-50 pt-4 pb-2 px-4">
// //                   <div className="space-y-6">
// //                     {topic.subtopics.map((subtopic, subIdx) => (
// //                       <div key={subIdx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
// //                         <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
// //                           {/* Left side - topic info */}
// //                           <div className="md:w-1/3">
// //                             <h4 className="font-medium text-lg text-gray-700">{subtopic.name}</h4>
// //                             <div className="text-gray-500 mt-1">{subtopic.completedCount} of {subtopic.questionCount} Questions</div>
// //                           </div>
                          
// //                           {/* Right side - score card */}
// //                           <div className="md:w-2/3">
// //                             <div className="bg-white rounded-lg p-4 shadow-sm">
// //                               <div className="flex justify-between items-center">
// //                                 <div>
// //                                   <h4 className="font-medium text-gray-800">{subtopic.name}</h4>
// //                                   <div className="text-gray-500 mt-1">{subtopic.completedCount} of {subtopic.questionCount} Correct</div>
// //                                 </div>
// //                                 <div className={`text-4xl font-bold ${getScoreTextColor(subtopic.score)}`}>
// //                                   {subtopic.score}%
// //                                 </div>
// //                               </div>
// //                               <div className="h-2 bg-gray-200 mt-3 rounded-full overflow-hidden">
// //                                 <div 
// //                                   className={`h-full ${getScoreColor(subtopic.score)}`}
// //                                   style={{ width: `${subtopic.score}%` }}
// //                                 ></div>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               )}
// //             </Card>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// // pages/index.js
// "use client"
// // pages/index.js
// import { useState } from 'react';
// import Head from 'next/head';

// export default function Home() {
//   // Sample exam data - you would fetch this from an API in a real app
//   const [examCategories, setExamCategories] = useState([
//     {
//       id: 1,
//       name: "Cardiovascular",
//       correct: 8,
//       total: 9,
//       percentage: 89,
//       status: "good", // good, mid, fail
//       icon: "heart" // icon name
//     },
//     {
//       id: 2,
//       name: "Endocrine, Hematology, Gastro, Renal, Integumentary",
//       correct: 5,
//       total: 9,
//       percentage: 56,
//       status: "mid",
//       icon: "lab"
//     },
//     {
//       id: 3,
//       name: "Multisystem",
//       correct: 3,
//       total: 8,
//       percentage: 38,
//       status: "fail",
//       icon: "body"
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('all'); // 'all', 'pinned', 'incorrect'
//   const examName = "Medical Board Examination";
  
//   // Overall score calculation
//   const totalCorrect = examCategories.reduce((sum, category) => sum + category.correct, 0);
//   const totalQuestions = examCategories.reduce((sum, category) => sum + category.total, 0);
//   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

//   // Filter categories based on search term and active tab
//   const filteredCategories = examCategories.filter(category =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Function to determine the progress bar color
//   const getProgressBarColor = (status) => {
//     switch (status) {
//       case "good": return "bg-emerald-500";
//       case "mid": return "bg-amber-400";
//       case "fail": return "bg-red-500";
//       default: return "bg-gray-300";
//     }
//   };

//   // Function to get icon based on category type
//   const getCategoryIcon = (iconName) => {
//     switch (iconName) {
//       case "heart":
//         return (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//         );
//       case "lab":
//         return (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//           </svg>
//         );
//       case "body":
//         return (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//           </svg>
//         );
//       default:
//         return (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>{examName} Dashboard</title>
//         <meta name="description" content="Exam performance dashboard" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-6">
//         {/* Hero Section with Overall Score */}
//         <div className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-800">{examName}</h1>
//           <div className="mt-4 max-w-md mx-auto bg-white p-4 rounded-lg shadow-sm">
//             <div className="flex justify-between items-center">
//               <p className="font-semibold text-gray-700">Overall Score</p>
//               <span className="text-2xl font-bold text-gray-800">{overallPercentage}%</span>
//             </div>
//             <p className="text-sm text-gray-600 mb-2">{totalCorrect} / {totalQuestions} Correct</p>
//             <div className="w-full bg-gray-200 rounded-full h-2.5">
//               <div 
//                 className="bg-blue-600 h-2.5 rounded-full" 
//                 style={{ width: `${overallPercentage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs and Search Box Row */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6 max-w-2xl mx-auto">
//           {/* Tabs */}
//           <div className="flex space-x-1 p-1 bg-gray-200 rounded-lg mb-4 sm:mb-0">
//             <button 
//               className={`px-4 py-2 text-sm rounded-md ${activeTab === 'all' ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
//               onClick={() => setActiveTab('all')}
//             >
//               All
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm rounded-md ${activeTab === 'pinned' ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
//               onClick={() => setActiveTab('pinned')}
//             >
//               Pinned
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm rounded-md ${activeTab === 'incorrect' ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
//               onClick={() => setActiveTab('incorrect')}
//             >
//               Incorrect
//             </button>
//           </div>

//           {/* Search Box */}
//           <div className="relative w-full sm:w-64">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//               </svg>
//             </div>
//             <input 
//               type="search" 
//               className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" 
//               placeholder="Search..." 
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Category Cards - More Compact */}
//         <div className="max-w-2xl mx-auto space-y-4">
//           {activeTab === 'all' && filteredCategories.map(category => (
//             <div key={category.id} className="bg-white rounded-lg shadow-sm p-4">
//               <div className="flex items-center mb-2">
//                 <div className="mr-3">
//                   {getCategoryIcon(category.icon)}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
//                     <span className="text-2xl font-bold text-gray-700">{category.percentage}%</span>
//                   </div>
//                   <p className="text-sm text-gray-600">{category.correct} of {category.total} Correct</p>
//                 </div>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div 
//                   className={`${getProgressBarColor(category.status)} h-2.5 rounded-full`} 
//                   style={{ width: `${category.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}

//           {/* Show a message for pinned tab if it's selected */}
//           {activeTab === 'pinned' && (
//             <div className="text-center py-8 bg-white rounded-lg shadow-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//               </svg>
//               <p className="mt-2 text-gray-600">You don't have any pinned items yet.</p>
//               <p className="text-sm text-gray-500">Pin important topics to revisit them later.</p>
//             </div>
//           )}

//           {/* Show a message for incorrect tab if it's selected */}
//           {activeTab === 'incorrect' && (
//             <div className="text-center py-8 bg-white rounded-lg shadow-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <p className="mt-2 text-gray-600">Track your incorrect answers here.</p>
//               <p className="text-sm text-gray-500">This tab shows questions you answered incorrectly.</p>
//             </div>
//           )}

//           {activeTab === 'all' && filteredCategories.length === 0 && (
//             <div className="text-center py-8 bg-white rounded-lg shadow-sm">
//               <p className="text-gray-600">No categories found matching your search.</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }
// pages/index.js
// "use client"
// // pages/index.js
// import { useState } from 'react';
// import Head from 'next/head';

// export default function Home() {
//   // Sample exam data - you would fetch this from an API in a real app
//   const [examCategories, setExamCategories] = useState([
//     {
//       id: 1,
//       name: "Cardiovascular",
//       correct: 8,
//       total: 9,
//       percentage: 89,
//       status: "good" // good, mid, fail
//     },
//     {
//       id: 2,
//       name: "Endocrine, Hematology, Gastro, Renal, Integumentary",
//       correct: 5,
//       total: 9,
//       percentage: 56,
//       status: "mid"
//     },
//     {
//       id: 3,
//       name: "Multisystem",
//       correct: 3,
//       total: 8,
//       percentage: 38,
//       status: "fail"
//     },
//     {
//       id: 4,
//       name: "Random Assessment Topic",
//       correct: 0,
//       total: 0,
//       percentage: 0,
//       status: "mid"
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('study'); // 'study', 'assessment', 'incorrect', 'pinned', 'mynotes'
//   const examName = "Medical Board Examination";
  
//   // Overall score calculation
//   const totalCorrect = 16;
//   const totalQuestions = 26;
//   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

//   // Filter categories based on search term and active tab
//   const filteredCategories = examCategories.filter(category =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Function to determine the progress bar color
//   const getProgressBarColor = (status) => {
//     switch (status) {
//       case "good": return "bg-emerald-500";
//       case "mid": return "bg-amber-400";
//       case "fail": return "bg-red-500";
//       default: return "bg-gray-300";
//     }
//   };

//   // Fixed icon for all categories
//   const getCategoryIcon = () => {
//     return (
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>{examName} Dashboard</title>
//         <meta name="description" content="Exam performance dashboard" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Enhanced Professional Hero Section */}
//       <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md">
//         <div className="container mx-auto px-4 py-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-3xl font-bold mb-2">{examName}</h1>
//             <p className="text-blue-100 mb-6">Track your progress and master key concepts</p>
            
//             {/* Overall Score Card - Smaller */}
//             <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-3 mb-6 max-w-xs mx-auto">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="font-medium text-sm">Overall Performance</h2>
//                   <p className="text-blue-100 text-xs">{totalCorrect} / {totalQuestions} Questions Correct</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xl font-bold">{overallPercentage}%</span>
//                 </div>
//               </div>
//               <div className="w-full bg-blue-900 bg-opacity-50 rounded-full h-1.5 mt-2">
//                 <div 
//                   className="bg-blue-300 h-1.5 rounded-full" 
//                   style={{ width: `${overallPercentage}%` }}
//                 ></div>
//               </div>
//             </div>
            
//             {/* Search Box in Hero with White Background */}
//             <div className="relative max-w-md mx-auto mb-4">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                 </svg>
//               </div>
//               <input 
//                 type="search" 
//                 className="block w-full p-3 pl-10 text-sm border-0 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm" 
//                 placeholder="Search topics..." 
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="container mx-auto px-4 py-6">
//         {/* iOS Style Tabs for Mobile */}
//         <div className="overflow-x-auto mb-6 pb-1">
//           <div className="flex justify-start md:justify-center space-x-1 min-w-max">
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'study' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('study')}
//             >
//               Study Mode
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'assessment' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('assessment')}
//             >
//               Self Assessment
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('incorrect')}
//             >
//               Incorrect
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('pinned')}
//             >
//               Pinned
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'mynotes' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveTab('mynotes')}
//             >
//               My Notes
//             </button>
//           </div>
//         </div>

//         {/* Category Cards with visible borders */}
//         <div className="max-w-2xl mx-auto space-y-4">
//           {(activeTab === 'study' || activeTab === 'assessment') && (
//             <>
//               {activeTab === 'assessment' && (
//                 <div key="random" className="bg-white rounded-lg shadow-sm p-4 border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <div className="mr-3">
//                       {getCategoryIcon()}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <h2 className="text-lg font-semibold text-gray-800">Random Assessment Topic</h2>
//                         <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">New</span>
//                       </div>
//                       <p className="text-sm text-gray-600">Test your knowledge with random questions</p>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                       Start Assessment
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {filteredCategories.slice(0, activeTab === 'assessment' ? 3 : undefined).map(category => (
//                 <div key={category.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
//                   <div className="flex items-center mb-2">
//                     <div className="mr-3">
//                       {getCategoryIcon()}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
//                         <span className="text-2xl font-bold text-gray-700">{category.percentage}%</span>
//                       </div>
//                       <p className="text-sm text-gray-600">{category.correct} of {category.total} Correct</p>
//                     </div>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div 
//                       className={`${getProgressBarColor(category.status)} h-2.5 rounded-full`} 
//                       style={{ width: `${category.percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </>
//           )}

//           {/* Show a message for incorrect tab if it's selected */}
//           {activeTab === 'incorrect' && (
//             <>
//               {filteredCategories.map(category => (
//                 <div key={category.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
//                   <div className="flex items-center mb-2">
//                     <div className="mr-3">
//                       {getCategoryIcon()}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
//                         <span className="text-sm font-medium text-red-600">{Math.round(category.total * 0.3)} incorrect</span>
//                       </div>
//                       <p className="text-sm text-gray-600">Review incorrect questions</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </>
//           )}

//           {/* Show a message for pinned tab if it's selected */}
//           {activeTab === 'pinned' && (
//             <>
//               {filteredCategories.length > 0 ? filteredCategories.map(category => (
//                 <div key={category.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
//                   <div className="flex items-center mb-2">
//                     <div className="mr-3">
//                       {getCategoryIcon()}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
//                         <span className="text-sm font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Pinned</span>
//                       </div>
//                       <p className="text-sm text-gray-600">Your pinned topics</p>
//                     </div>
//                   </div>
//                 </div>
//               )) : (
//                 <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//                   </svg>
//                   <p className="mt-2 text-gray-600 font-medium">No Pinned Items</p>
//                   <p className="text-sm text-gray-500">Pin topics to revisit them later.</p>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Show a message for my notes tab if it's selected */}
//           {activeTab === 'mynotes' && (
//             <>
//               {filteredCategories.length > 0 ? filteredCategories.map(category => (
//                 <div key={category.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
//                   <div className="flex items-center mb-2">
//                     <div className="mr-3">
//                       {getCategoryIcon()}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
//                         <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-800 rounded">Notes</span>
//                       </div>
//                       <p className="text-sm text-gray-600">Your study notes</p>
//                     </div>
//                   </div>
//                 </div>
//               )) : (
//                 <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                   </svg>
//                   <p className="mt-2 text-gray-600 font-medium">No Notes</p>
//                   <p className="text-sm text-gray-500">Create notes to help with your studies.</p>
//                 </div>
//               )}
//             </>
//           )}

//           {/* No results message */}
//           {filteredCategories.length === 0 && activeTab === 'study' && (
//             <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-200">
//               <p className="text-gray-600">No topics found matching your search.</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
    <h1>h</h1>  
    </div>
  )
}

export default page

// // // // // // // // 'use client';

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { useRouter } from 'next/navigation';
// // // // // // // // import { examData } from '@/app/data/allexams';

// // // // // // // // // Import components
// // // // // // // // import ExamDetailHeader from '@/components/ExamDetailHeader';
// // // // // // // // import PrepNotesTab from '@/components/PrepNotesTab';
// // // // // // // // import McqsTab from '@/components/McqsTab';
// // // // // // // // import ReviewTab from '@/components/ReviewTab';

// // // // // // // // // Import utilities
// // // // // // // // import { parseMcqs, parseReviewItems } from './content-parser';

// // // // // // // // export default function ExamDetailPage({ params }) {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [exam, setExam] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [activeTab, setActiveTab] = useState('prep');
// // // // // // // //   const [pinnedQuestions, setPinnedQuestions] = useState([]);
// // // // // // // //   const [showPinned, setShowPinned] = useState(false);
// // // // // // // //   const [mcqAnswers, setMcqAnswers] = useState({});
// // // // // // // //   const [reviewAnswers, setReviewAnswers] = useState({});
  
// // // // // // // //   // Find the exam from the URL param
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!params?.exam) return;
    
// // // // // // // //     const examId = parseInt(params.exam);
// // // // // // // //     if (isNaN(examId)) {
// // // // // // // //       setLoading(false);
// // // // // // // //       return;
// // // // // // // //     }
    
// // // // // // // //     // Search for the exam in all categories
// // // // // // // //     let foundExam = null;
// // // // // // // //     Object.keys(examData).forEach(tabKey => {
// // // // // // // //       const matchingExam = examData[tabKey].find(e => e.id === examId);
// // // // // // // //       if (matchingExam) {
// // // // // // // //         foundExam = matchingExam;
// // // // // // // //       }
// // // // // // // //     });
    
// // // // // // // //     setExam(foundExam);
// // // // // // // //     setLoading(false);
// // // // // // // //   }, [params]);

// // // // // // // //   // Sample content for demonstration
// // // // // // // //   const examContent = {
// // // // // // // //     prep: `
// // // // // // // //       <h3>Myasthenia Gravis (MG) Overview</h3>
// // // // // // // //       <ul>
// // // // // // // //         <li><strong>Definition:</strong> Autoimmune disorder causing <strong>antibody-mediated blockade of neuromuscular transmission</strong> at the <strong>neuromuscular junction (NMJ)</strong>.</li>
// // // // // // // //         <li><strong>Etiology:</strong> <strong>Anti-ACh receptor antibodies</strong> (most common), <strong>Anti-MuSK antibodies</strong> (less common).</li>
// // // // // // // //         <li><strong>Pathophysiology:</strong> ↓ ACh receptor availability → <strong>progressive muscle weakness</strong> with repeated use.</li>
// // // // // // // //         <li><strong>Clinical Features:</strong>
// // // // // // // //           <ul>
// // // // // // // //             <li><strong>Muscle weakness</strong> (worsens with activity, improves with rest)</li>
// // // // // // // //             <li><strong>Ptosis, Diplopia</strong> (ocular symptoms common)</li>
// // // // // // // //             <li><strong>Bulbar symptoms:</strong> Dysphagia, dysarthria</li>
// // // // // // // //             <li><strong>Respiratory failure</strong> (Myasthenic crisis)</li>
// // // // // // // //           </ul>
// // // // // // // //         </li>
// // // // // // // //         <li><strong>Associated Conditions:</strong>
// // // // // // // //           <ul>
// // // // // // // //             <li><strong>Thymoma</strong> (check CT chest)</li>
// // // // // // // //             <li>Autoimmune diseases (SLE, RA)</li>
// // // // // // // //           </ul>
// // // // // // // //         </li>
// // // // // // // //         <li><strong>Diagnosis:</strong>
// // // // // // // //           <ul>
// // // // // // // //             <li><strong>Edrophonium (Tensilon) test</strong>: Rapid symptom improvement</li>
// // // // // // // //             <li><strong>Ice pack test</strong>: Improvement of ptosis</li>
// // // // // // // //             <li><strong>ACh receptor antibody test</strong> (gold standard)</li>
// // // // // // // //             <li><strong>Repetitive nerve stimulation test</strong> (↓ response with repetitive stimulation)</li>
// // // // // // // //           </ul>
// // // // // // // //         </li>
// // // // // // // //         <li><strong>Treatment:</strong>
// // // // // // // //           <ul>
// // // // // // // //             <li><strong>First-line:</strong> Pyridostigmine (AChE inhibitor)</li>
// // // // // // // //             <li><strong>Corticosteroids & Immunosuppressants</strong> for refractory cases</li>
// // // // // // // //             <li><strong>Plasmapheresis/IVIG</strong> for myasthenic crisis</li>
// // // // // // // //             <li><strong>Thymectomy</strong> if thymoma present</li>
// // // // // // // //           </ul>
// // // // // // // //         </li>
// // // // // // // //       </ul>
// // // // // // // //     `,
// // // // // // // //     mcqs: `
// // // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // // //         <h3 class="mb-2">Q1: A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?</h3>
// // // // // // // //         <ul class="space-y-2">
// // // // // // // //           <li class="ml-5">A) Lambert-Eaton Myasthenic Syndrome</li>
// // // // // // // //           <li class="ml-5">B) Multiple Sclerosis</li>
// // // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Myasthenia Gravis</li>
// // // // // // // //           <li class="ml-5">D) Guillain-Barré Syndrome</li>
// // // // // // // //         </ul>
// // // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // // //           <p><strong>Explanation:</strong> MG is characterized by <strong>fluctuating muscle weakness</strong>, ptosis, and <strong>improvement with rest/cooling</strong> (Ice Pack Test).</p>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // // //         <h3 class="mb-2">Q2: Which of the following is the most accurate diagnostic test for Myasthenia Gravis?</h3>
// // // // // // // //         <ul class="space-y-2">
// // // // // // // //           <li class="ml-5">A) Tensilon (Edrophonium) test</li>
// // // // // // // //           <li class="ml-5">B) Electromyography (EMG)</li>
// // // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Acetylcholine receptor antibody test</li>
// // // // // // // //           <li class="ml-5">D) Muscle biopsy</li>
// // // // // // // //         </ul>
// // // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // // //           <p><strong>Explanation:</strong> The <strong>gold standard</strong> for MG diagnosis is <strong>ACh receptor antibody detection</strong>. The <strong>Tensilon test</strong> is a rapid screen but not definitive.</p>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // // //         <h3 class="mb-2">Q3: Which of the following medications can worsen Myasthenia Gravis?</h3>
// // // // // // // //         <ul class="space-y-2">
// // // // // // // //           <li class="ml-5">A) Beta-blockers</li>
// // // // // // // //           <li class="ml-5">B) Aminoglycosides</li>
// // // // // // // //           <li class="ml-5">C) Fluoroquinolones</li>
// // // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ D) All of the above</li>
// // // // // // // //         </ul>
// // // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // // //           <p><strong>Explanation:</strong> <strong>Beta-blockers, aminoglycosides, and fluoroquinolones</strong> can exacerbate MG symptoms by interfering with NMJ transmission.</p>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     `,
// // // // // // // //     review: `
// // // // // // // //       <div class="overflow-x-auto">
// // // // // // // //         <table class="min-w-full border-collapse border">
// // // // // // // //           <thead>
// // // // // // // //             <tr class="bg-gray-100">
// // // // // // // //               <th class="border p-2 text-left">One-Line Question</th>
// // // // // // // //               <th class="border p-2 text-left">Key Answer</th>
// // // // // // // //             </tr>
// // // // // // // //           </thead>
// // // // // // // //           <tbody>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Pathophysiology of MG?</td>
// // // // // // // //               <td class="border p-2">Autoantibodies against <strong>ACh receptors</strong> at NMJ</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Symptoms of MG?</td>
// // // // // // // //               <td class="border p-2"><strong>Fluctuating</strong> weakness, ptosis, diplopia, bulbar signs</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Best initial test for MG?</td>
// // // // // // // //               <td class="border p-2">ACh receptor antibody test</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Gold standard for MG diagnosis?</td>
// // // // // // // //               <td class="border p-2">ACh receptor antibody test</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Best acute treatment for Myasthenic Crisis?</td>
// // // // // // // //               <td class="border p-2">Plasmapheresis or IVIG</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Which tumor is associated with MG?</td>
// // // // // // // //               <td class="border p-2"><strong>Thymoma</strong> (check CT chest)</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">Which drugs worsen MG?</td>
// // // // // // // //               <td class="border p-2">Aminoglycosides, Fluoroquinolones, Beta-blockers</td>
// // // // // // // //             </tr>
// // // // // // // //             <tr>
// // // // // // // //               <td class="border p-2">First-line chronic treatment for MG?</td>
// // // // // // // //               <td class="border p-2">Pyridostigmine (AChE inhibitor)</td>
// // // // // // // //             </tr>
// // // // // // // //           </tbody>
// // // // // // // //         </table>
// // // // // // // //       </div>
// // // // // // // //     `
// // // // // // // //   };

// // // // // // // //   // Parse content for displaying
// // // // // // // //   const mcqs = parseMcqs(examContent.mcqs);
// // // // // // // //   const reviewItems = parseReviewItems(examContent.review);

// // // // // // // //   // Handler functions
// // // // // // // //   const togglePinQuestion = (id) => {
// // // // // // // //     if (pinnedQuestions.includes(id)) {
// // // // // // // //       setPinnedQuestions(pinnedQuestions.filter(qId => qId !== id));
// // // // // // // //     } else {
// // // // // // // //       setPinnedQuestions([...pinnedQuestions, id]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleMcqOptionClick = (mcqId, optionIndex) => {
// // // // // // // //     setMcqAnswers({
// // // // // // // //       ...mcqAnswers,
// // // // // // // //       [mcqId]: optionIndex
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const toggleReviewAnswer = (reviewId) => {
// // // // // // // //     setReviewAnswers({
// // // // // // // //       ...reviewAnswers,
// // // // // // // //       [reviewId]: !reviewAnswers[reviewId]
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   if (!exam) {
// // // // // // // //     return (
// // // // // // // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // // // // // // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // // // // // // //         <button 
// // // // // // // //           onClick={() => router.push('/')}
// // // // // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // // // // // //         >
// // // // // // // //           Back to Exam List
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="bg-gray-50 min-h-screen">
// // // // // // // //       {/* Header Component with Content Type Selection */}
// // // // // // // //       <ExamDetailHeader 
// // // // // // // //         examId={exam.id} // Pass the exam ID instead of the full exam object
// // // // // // // //         activeTab={activeTab} 
// // // // // // // //         setActiveTab={setActiveTab} 
// // // // // // // //         showPinned={showPinned} 
// // // // // // // //         setShowPinned={setShowPinned} 
// // // // // // // //         pinnedCount={pinnedQuestions.length}
// // // // // // // //       />
      
// // // // // // // //       {/* Tab Content Container */}
// // // // // // // //       <div className="max-w-5xl mx-auto p-4 pb-20 sm:pb-8">
// // // // // // // //         {/* Render the appropriate tab content */}
// // // // // // // //         {activeTab === 'prep' && (
// // // // // // // //           <PrepNotesTab examContent={examContent} />
// // // // // // // //         )}
        
// // // // // // // //         {activeTab === 'mcqs' && (
// // // // // // // //           <McqsTab 
// // // // // // // //             mcqs={mcqs}
// // // // // // // //             showPinned={showPinned}
// // // // // // // //             setShowPinned={setShowPinned}
// // // // // // // //             pinnedQuestions={pinnedQuestions}
// // // // // // // //             togglePinQuestion={togglePinQuestion}
// // // // // // // //             mcqAnswers={mcqAnswers}
// // // // // // // //             handleMcqOptionClick={handleMcqOptionClick}
// // // // // // // //           />
// // // // // // // //         )}
        
// // // // // // // //         {activeTab === 'review' && (
// // // // // // // //           <ReviewTab 
// // // // // // // //             reviewItems={reviewItems}
// // // // // // // //             reviewAnswers={reviewAnswers}
// // // // // // // //             toggleReviewAnswer={toggleReviewAnswer}
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // 'use client';
// // // // // // // // import { useState } from 'react';
// // // // // // // // import Header from '@/components/v1/Header';
// // // // // // // // import TabBar from '@/components/v1/TabBar';
// // // // // // // // import CategoryList from '@/components/v1/CategoryList';
// // // // // // // // import CategoryDetail from '@/components/v1/CategoryDetail';
// // // // // // // // import EmptyState from '@/components/EmptyState';
// // // // // // // // import Chat from '@/components/v1/Chat';
// // // // // // // // import Profile from '@/components/v1/Profile';

// // // // // // // // export default function ExamDashboard() {
// // // // // // // //   // Sample exam data - you would fetch this from an API in a real app
// // // // // // // //   const [examCategories] = useState([
// // // // // // // //     {
// // // // // // // //       id: 1,
// // // // // // // //       name: "Cardiovascular",
// // // // // // // //       correct: 8,
// // // // // // // //       total: 9,
// // // // // // // //       percentage: 89,
// // // // // // // //       status: "good" // good, mid, fail
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 2,
// // // // // // // //       name: "Endocrine, Hematology, Gastro, Renal, Integumentary",
// // // // // // // //       correct: 5,
// // // // // // // //       total: 9,
// // // // // // // //       percentage: 56,
// // // // // // // //       status: "mid"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 3,
// // // // // // // //       name: "Multisystem",
// // // // // // // //       correct: 3,
// // // // // // // //       total: 8,
// // // // // // // //       percentage: 38,
// // // // // // // //       status: "fail"
// // // // // // // //     }
// // // // // // // //   ]);

// // // // // // // //   // Sample review data for pinned and incorrect items
// // // // // // // //   const [reviewItems] = useState([
// // // // // // // //     {
// // // // // // // //       id: 101,
// // // // // // // //       question: "What is the primary mechanism of action for ACE inhibitors?",
// // // // // // // //       type: "incorrect",
// // // // // // // //       category: "Cardiovascular",
// // // // // // // //       date: "2025-02-28"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 102,
// // // // // // // //       question: "What are the primary symptoms of Cushing's syndrome?",
// // // // // // // //       type: "pinned",
// // // // // // // //       category: "Endocrine, Hematology, Gastro, Renal, Integumentary",
// // // // // // // //       date: "2025-03-01"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 103,
// // // // // // // //       question: "Which of the following is NOT a common complication of diabetes mellitus?",
// // // // // // // //       type: "incorrect",
// // // // // // // //       category: "Endocrine, Hematology, Gastro, Renal, Integumentary",
// // // // // // // //       date: "2025-03-02"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 104,
// // // // // // // //       question: "What is the gold standard diagnostic test for pulmonary embolism?",
// // // // // // // //       type: "pinned",
// // // // // // // //       category: "Cardiovascular",
// // // // // // // //       date: "2025-03-03"
// // // // // // // //     }
// // // // // // // //   ]);

// // // // // // // //   const [assessmentCategory] = useState({
// // // // // // // //     id: 4,
// // // // // // // //     name: "Random Assessment Topic",
// // // // // // // //     correct: 0,
// // // // // // // //     total: 0,
// // // // // // // //     percentage: 0,
// // // // // // // //     status: "mid"
// // // // // // // //   });

// // // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // // //   const [activeTab, setActiveTab] = useState('study'); // 'study', 'assessment', 'review', 'concepts'
// // // // // // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // // // // // //   const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'pinned'
// // // // // // // //   const examName = "Medical Board Examination";
  
// // // // // // // //   // Overall score calculation
// // // // // // // //   const totalCorrect = 16;
// // // // // // // //   const totalQuestions = 26;
// // // // // // // //   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

// // // // // // // //   // Filter categories based on search term
// // // // // // // //   const filteredCategories = examCategories.filter(category =>
// // // // // // // //     category.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // //   );

// // // // // // // //   // Filter review items based on review filter and search term
// // // // // // // //   const filteredReviewItems = reviewItems.filter(item => {
// // // // // // // //     const matchesFilter = reviewFilter === 'all' || item.type === reviewFilter;
// // // // // // // //     const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // // // // //                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
// // // // // // // //     return matchesFilter && matchesSearch;
// // // // // // // //   });

// // // // // // // //   // Handler for starting assessment or review
// // // // // // // //   const handleStartClick = (category) => {
// // // // // // // //     // If category already has a fromTab property, use it, otherwise use activeTab
// // // // // // // //     setSelectedCategory({
// // // // // // // //       ...category, 
// // // // // // // //       fromTab: category.fromTab || activeTab
// // // // // // // //     });
// // // // // // // //   };
  
// // // // // // // //   // Handler to go back to category selection
// // // // // // // //   const handleBackClick = () => {
// // // // // // // //     setSelectedCategory(null);
// // // // // // // //   };

// // // // // // // //   // Handler for search term changes
// // // // // // // //   const handleSearchChange = (value) => {
// // // // // // // //     setSearchTerm(value);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // //       {/* Single Header component for all screen sizes */}
// // // // // // // //       <Header 
// // // // // // // //         examName={examName}
// // // // // // // //         totalCorrect={totalCorrect}
// // // // // // // //         totalQuestions={totalQuestions}
// // // // // // // //         overallPercentage={overallPercentage}
// // // // // // // //         searchTerm={searchTerm}
// // // // // // // //         onSearchChange={handleSearchChange}
// // // // // // // //         activeTab={activeTab}
// // // // // // // //       />

// // // // // // // //       <main className="container mx-auto px-4 pt-2 pb-16 md:py-6">
// // // // // // // //         {/* Tab Bar Component */}
// // // // // // // //         <TabBar 
// // // // // // // //           activeTab={activeTab} 
// // // // // // // //           setActiveTab={(newTab) => {
// // // // // // // //             // When changing tabs, reset selected category
// // // // // // // //             setActiveTab(newTab);
// // // // // // // //             setSelectedCategory(null);
// // // // // // // //           }} 
// // // // // // // //         />

// // // // // // // //         {/* If a category is selected, show the appropriate detail view based on the tab */}
// // // // // // // //         {selectedCategory && selectedCategory.fromTab === activeTab && (
// // // // // // // //           <CategoryDetail
// // // // // // // //             category={selectedCategory}
// // // // // // // //             activeTab={activeTab}
// // // // // // // //             onBackClick={handleBackClick}
// // // // // // // //           />
// // // // // // // //         )}

// // // // // // // //         {/* If no category is selected, show the category list view */}
// // // // // // // //         {!selectedCategory && (
// // // // // // // //           <div className="max-w-2xl mx-auto space-y-4">
// // // // // // // //             {/* Study Mode Tab */}
// // // // // // // //             {activeTab === 'study' && (
// // // // // // // //               <CategoryList 
// // // // // // // //                 categories={filteredCategories} 
// // // // // // // //                 onCategoryClick={handleStartClick}
// // // // // // // //                 searchTerm={searchTerm}
// // // // // // // //                 onClearSearch={() => setSearchTerm('')}
// // // // // // // //               />
// // // // // // // //             )}

// // // // // // // //             {/* Assessment Tab */}
// // // // // // // //             {activeTab === 'assessment' && (
// // // // // // // //               <CategoryList 
// // // // // // // //                 categories={[assessmentCategory, ...filteredCategories]} 
// // // // // // // //                 onCategoryClick={handleStartClick}
// // // // // // // //                 variant="assessment"
// // // // // // // //               />
// // // // // // // //             )}

// // // // // // // //             {/* Review Tab (merged pinned and incorrect) */}
// // // // // // // //             {activeTab === 'review' && (
// // // // // // // //               <>
// // // // // // // //                 {/* Filter controls */}
// // // // // // // //                 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-4">
// // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // //                     <button 
// // // // // // // //                       className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // // //                       onClick={() => setReviewFilter('all')}
// // // // // // // //                     >
// // // // // // // //                       All
// // // // // // // //                     </button>
// // // // // // // //                     <button 
// // // // // // // //                       className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // // //                       onClick={() => setReviewFilter('incorrect')}
// // // // // // // //                     >
// // // // // // // //                       Incorrect
// // // // // // // //                     </button>
// // // // // // // //                     <button 
// // // // // // // //                       className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // // //                       onClick={() => setReviewFilter('pinned')}
// // // // // // // //                     >
// // // // // // // //                       Pinned
// // // // // // // //                     </button>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 {filteredReviewItems.length > 0 ? (
// // // // // // // //                   <div className="space-y-4">
// // // // // // // //                     {filteredReviewItems.map((item) => (
// // // // // // // //                       <div 
// // // // // // // //                         key={item.id} 
// // // // // // // //                         className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 w-full cursor-pointer transition hover:shadow-md"
// // // // // // // //                         onClick={() => handleStartClick({...item, fromTab: 'review'})}
// // // // // // // //                       >
// // // // // // // //                         <div className="flex items-start">
// // // // // // // //                           <div className="mr-3 mt-1">
// // // // // // // //                             {item.type === 'incorrect' ? (
// // // // // // // //                               <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
// // // // // // // //                                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // // // // // //                                 </svg>
// // // // // // // //                               </span>
// // // // // // // //                             ) : (
// // // // // // // //                               <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
// // // // // // // //                                   <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // // // // // //                                 </svg>
// // // // // // // //                               </span>
// // // // // // // //                             )}
// // // // // // // //                           </div>
// // // // // // // //                           <div className="flex-1">
// // // // // // // //                             <p className="text-gray-800 font-medium">{item.question}</p>
// // // // // // // //                             <div className="flex justify-between mt-2 text-sm">
// // // // // // // //                               <span className="text-gray-600">{item.category}</span>
// // // // // // // //                               <span className="text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
// // // // // // // //                             </div>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                 ) : (
// // // // // // // //                   <EmptyState 
// // // // // // // //                     icon={reviewFilter === 'pinned' ? "📌" : "✅"}
// // // // // // // //                     title={reviewFilter === 'all' ? "No Review Items" : 
// // // // // // // //                            reviewFilter === 'pinned' ? "No Pinned Questions" : 
// // // // // // // //                            "No Incorrect Questions"}
// // // // // // // //                     description={reviewFilter === 'all' ? "You don't have any questions to review." : 
// // // // // // // //                                  reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
// // // // // // // //                                  "Answer questions in study mode to see your incorrect answers here."}
// // // // // // // //                     buttonText="Practice More"
// // // // // // // //                     buttonAction={() => setActiveTab('assessment')}
// // // // // // // //                   />
// // // // // // // //                 )}
// // // // // // // //               </>
// // // // // // // //             )}

// // // // // // // //             {/* Concepts Tab */}
// // // // // // // //             {activeTab === 'concepts' && (
// // // // // // // //               <>
// // // // // // // //                 <div className="space-y-4">
// // // // // // // //                   {filteredCategories.map(category => (
// // // // // // // //                     <button 
// // // // // // // //                       key={category.id} 
// // // // // // // //                       className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 w-full text-left cursor-pointer transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
// // // // // // // //                       onClick={() => handleStartClick({...category, fromTab: 'concepts'})}
// // // // // // // //                     >
// // // // // // // //                       <div className="flex items-center mb-2">
// // // // // // // //                         <div className="mr-3">
// // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // // // // // //                           </svg>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="flex-1">
// // // // // // // //                           <div className="flex justify-between items-center">
// // // // // // // //                             <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
// // // // // // // //                             <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">{Math.floor(Math.random() * 5) + 2} concepts</span>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
                
// // // // // // // //                 {filteredCategories.length === 0 && (
// // // // // // // //                   <EmptyState 
// // // // // // // //                     icon="📚"
// // // // // // // //                     title="No Concepts Found"
// // // // // // // //                     description="No concept cards match your search. Try adjusting your search criteria."
// // // // // // // //                     buttonText="Clear Search"
// // // // // // // //                     buttonAction={() => setSearchTerm('')}
// // // // // // // //                   />
// // // // // // // //                 )}
// // // // // // // //               </>
// // // // // // // //             )}
            
// // // // // // // //             {/* Chat Tab */}
// // // // // // // //             {activeTab === 'chat' && (
// // // // // // // //               <Chat />
// // // // // // // //             )}
            
// // // // // // // //             {/* Profile Tab */}
// // // // // // // //             {activeTab === 'profile' && (
// // // // // // // //               <Profile />
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // 'use client';

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useRouter } from 'next/navigation';
// // // // // // // import { examData } from '@/app/data/allexams';

// // // // // // // // Import components
// // // // // // // import Header from '@/components/v1/Header';
// // // // // // // import TabBar from '@/components/v1/TabBar';
// // // // // // // import CategoryDetail from '@/components/v1/CategoryDetail';
// // // // // // // import EmptyState from '@/components/EmptyState';

// // // // // // // // Import utilities
// // // // // // // import { parseMcqs, parseReviewItems } from './content-parser';

// // // // // // // export default function ExamDetailPage({ params }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const [exam, setExam] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [activeTab, setActiveTab] = useState('study');
// // // // // // //   const [pinnedQuestions, setPinnedQuestions] = useState([]);
// // // // // // //   const [showPinned, setShowPinned] = useState(false);
// // // // // // //   const [mcqAnswers, setMcqAnswers] = useState({});
// // // // // // //   const [reviewAnswers, setReviewAnswers] = useState({});
// // // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // // //   const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'pinned'
  
// // // // // // //   // Find the exam from the URL param
// // // // // // //   useEffect(() => {
// // // // // // //     if (!params?.exam) return;
    
// // // // // // //     const examId = parseInt(params.exam);
// // // // // // //     if (isNaN(examId)) {
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     // Search for the exam in all categories
// // // // // // //     let foundExam = null;
// // // // // // //     Object.keys(examData).forEach(tabKey => {
// // // // // // //       examData[tabKey].forEach(e => {
// // // // // // //         if (e.id === examId) {
// // // // // // //           foundExam = e;
// // // // // // //         }
// // // // // // //       });
// // // // // // //     });
    
// // // // // // //     setExam(foundExam);
// // // // // // //     setLoading(false);
// // // // // // //   }, [params]);

// // // // // // //   // Sample content for demonstration
// // // // // // //   const examContent = {
// // // // // // //     prep: `
// // // // // // //       <h3>Myasthenia Gravis (MG) Overview</h3>
// // // // // // //       <ul>
// // // // // // //         <li><strong>Definition:</strong> Autoimmune disorder causing <strong>antibody-mediated blockade of neuromuscular transmission</strong> at the <strong>neuromuscular junction (NMJ)</strong>.</li>
// // // // // // //         <li><strong>Etiology:</strong> <strong>Anti-ACh receptor antibodies</strong> (most common), <strong>Anti-MuSK antibodies</strong> (less common).</li>
// // // // // // //         <li><strong>Pathophysiology:</strong> ↓ ACh receptor availability → <strong>progressive muscle weakness</strong> with repeated use.</li>
// // // // // // //         <li><strong>Clinical Features:</strong>
// // // // // // //           <ul>
// // // // // // //             <li><strong>Muscle weakness</strong> (worsens with activity, improves with rest)</li>
// // // // // // //             <li><strong>Ptosis, Diplopia</strong> (ocular symptoms common)</li>
// // // // // // //             <li><strong>Bulbar symptoms:</strong> Dysphagia, dysarthria</li>
// // // // // // //             <li><strong>Respiratory failure</strong> (Myasthenic crisis)</li>
// // // // // // //           </ul>
// // // // // // //         </li>
// // // // // // //         <li><strong>Associated Conditions:</strong>
// // // // // // //           <ul>
// // // // // // //             <li><strong>Thymoma</strong> (check CT chest)</li>
// // // // // // //             <li>Autoimmune diseases (SLE, RA)</li>
// // // // // // //           </ul>
// // // // // // //         </li>
// // // // // // //         <li><strong>Diagnosis:</strong>
// // // // // // //           <ul>
// // // // // // //             <li><strong>Edrophonium (Tensilon) test</strong>: Rapid symptom improvement</li>
// // // // // // //             <li><strong>Ice pack test</strong>: Improvement of ptosis</li>
// // // // // // //             <li><strong>ACh receptor antibody test</strong> (gold standard)</li>
// // // // // // //             <li><strong>Repetitive nerve stimulation test</strong> (↓ response with repetitive stimulation)</li>
// // // // // // //           </ul>
// // // // // // //         </li>
// // // // // // //         <li><strong>Treatment:</strong>
// // // // // // //           <ul>
// // // // // // //             <li><strong>First-line:</strong> Pyridostigmine (AChE inhibitor)</li>
// // // // // // //             <li><strong>Corticosteroids & Immunosuppressants</strong> for refractory cases</li>
// // // // // // //             <li><strong>Plasmapheresis/IVIG</strong> for myasthenic crisis</li>
// // // // // // //             <li><strong>Thymectomy</strong> if thymoma present</li>
// // // // // // //           </ul>
// // // // // // //         </li>
// // // // // // //       </ul>
// // // // // // //     `,
// // // // // // //     mcqs: `
// // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // //         <h3 class="mb-2">Q1: A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?</h3>
// // // // // // //         <ul class="space-y-2">
// // // // // // //           <li class="ml-5">A) Lambert-Eaton Myasthenic Syndrome</li>
// // // // // // //           <li class="ml-5">B) Multiple Sclerosis</li>
// // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Myasthenia Gravis</li>
// // // // // // //           <li class="ml-5">D) Guillain-Barré Syndrome</li>
// // // // // // //         </ul>
// // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // //           <p><strong>Explanation:</strong> MG is characterized by <strong>fluctuating muscle weakness</strong>, ptosis, and <strong>improvement with rest/cooling</strong> (Ice Pack Test).</p>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // //         <h3 class="mb-2">Q2: Which of the following is the most accurate diagnostic test for Myasthenia Gravis?</h3>
// // // // // // //         <ul class="space-y-2">
// // // // // // //           <li class="ml-5">A) Tensilon (Edrophonium) test</li>
// // // // // // //           <li class="ml-5">B) Electromyography (EMG)</li>
// // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Acetylcholine receptor antibody test</li>
// // // // // // //           <li class="ml-5">D) Muscle biopsy</li>
// // // // // // //         </ul>
// // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // //           <p><strong>Explanation:</strong> The <strong>gold standard</strong> for MG diagnosis is <strong>ACh receptor antibody detection</strong>. The <strong>Tensilon test</strong> is a rapid screen but not definitive.</p>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // // //         <h3 class="mb-2">Q3: Which of the following medications can worsen Myasthenia Gravis?</h3>
// // // // // // //         <ul class="space-y-2">
// // // // // // //           <li class="ml-5">A) Beta-blockers</li>
// // // // // // //           <li class="ml-5">B) Aminoglycosides</li>
// // // // // // //           <li class="ml-5">C) Fluoroquinolones</li>
// // // // // // //           <li class="ml-5 text-green-600 font-medium">✅ D) All of the above</li>
// // // // // // //         </ul>
// // // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // // //           <p><strong>Explanation:</strong> <strong>Beta-blockers, aminoglycosides, and fluoroquinolones</strong> can exacerbate MG symptoms by interfering with NMJ transmission.</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     `,
// // // // // // //     review: `
// // // // // // //       <div class="overflow-x-auto">
// // // // // // //         <table class="min-w-full border-collapse border">
// // // // // // //           <thead>
// // // // // // //             <tr class="bg-gray-100">
// // // // // // //               <th class="border p-2 text-left">One-Line Question</th>
// // // // // // //               <th class="border p-2 text-left">Key Answer</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Pathophysiology of MG?</td>
// // // // // // //               <td class="border p-2">Autoantibodies against <strong>ACh receptors</strong> at NMJ</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Symptoms of MG?</td>
// // // // // // //               <td class="border p-2"><strong>Fluctuating</strong> weakness, ptosis, diplopia, bulbar signs</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Best initial test for MG?</td>
// // // // // // //               <td class="border p-2">ACh receptor antibody test</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Gold standard for MG diagnosis?</td>
// // // // // // //               <td class="border p-2">ACh receptor antibody test</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Best acute treatment for Myasthenic Crisis?</td>
// // // // // // //               <td class="border p-2">Plasmapheresis or IVIG</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Which tumor is associated with MG?</td>
// // // // // // //               <td class="border p-2"><strong>Thymoma</strong> (check CT chest)</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">Which drugs worsen MG?</td>
// // // // // // //               <td class="border p-2">Aminoglycosides, Fluoroquinolones, Beta-blockers</td>
// // // // // // //             </tr>
// // // // // // //             <tr>
// // // // // // //               <td class="border p-2">First-line chronic treatment for MG?</td>
// // // // // // //               <td class="border p-2">Pyridostigmine (AChE inhibitor)</td>
// // // // // // //             </tr>
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       </div>
// // // // // // //     `
// // // // // // //   };

// // // // // // //   // Sample review items for demonstration
// // // // // // //   const sampleReviewItems = [
// // // // // // //     {
// // // // // // //       id: 101,
// // // // // // //       question: "What is the primary mechanism of action for ACE inhibitors?",
// // // // // // //       type: "incorrect",
// // // // // // //       category: "Cardiovascular",
// // // // // // //       date: "2025-02-28"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 102,
// // // // // // //       question: "What are the primary symptoms of Myasthenia Gravis?",
// // // // // // //       type: "pinned",
// // // // // // //       category: "Neurology",
// // // // // // //       date: "2025-03-01"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 103,
// // // // // // //       question: "Which of the following is NOT a common complication of diabetes mellitus?",
// // // // // // //       type: "incorrect",
// // // // // // //       category: "Endocrine",
// // // // // // //       date: "2025-03-02"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 104,
// // // // // // //       question: "What is the gold standard diagnostic test for Myasthenia Gravis?",
// // // // // // //       type: "pinned",
// // // // // // //       category: "Diagnostics",
// // // // // // //       date: "2025-03-03"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   // Parse content for displaying
// // // // // // //   const mcqs = parseMcqs(examContent.mcqs);
// // // // // // //   const reviewItems = parseReviewItems(examContent.review);

// // // // // // //   // Filter review items based on review filter and search term
// // // // // // //   const filteredReviewItems = sampleReviewItems.filter(item => {
// // // // // // //     const matchesFilter = reviewFilter === 'all' || item.type === reviewFilter;
// // // // // // //     const matchesSearch = !searchTerm || 
// // // // // // //                           item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // // // //                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
// // // // // // //     return matchesFilter && matchesSearch;
// // // // // // //   });

// // // // // // //   // Handler functions
// // // // // // //   const togglePinQuestion = (id) => {
// // // // // // //     if (pinnedQuestions.includes(id)) {
// // // // // // //       setPinnedQuestions(pinnedQuestions.filter(qId => qId !== id));
// // // // // // //     } else {
// // // // // // //       setPinnedQuestions([...pinnedQuestions, id]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleMcqOptionClick = (mcqId, optionIndex) => {
// // // // // // //     setMcqAnswers({
// // // // // // //       ...mcqAnswers,
// // // // // // //       [mcqId]: optionIndex
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const toggleReviewAnswer = (reviewId) => {
// // // // // // //     setReviewAnswers({
// // // // // // //       ...reviewAnswers,
// // // // // // //       [reviewId]: !reviewAnswers[reviewId]
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSearchChange = (value) => {
// // // // // // //     setSearchTerm(value);
// // // // // // //   };

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (!exam) {
// // // // // // //     return (
// // // // // // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // // // // // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // // // // // //         <button 
// // // // // // //           onClick={() => router.push('/exams')}
// // // // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // // // // //         >
// // // // // // //           Back to Exam List
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // Calculate some dummy stats for the UI
// // // // // // //   const totalCorrect = 16;
// // // // // // //   const totalQuestions = 26;
// // // // // // //   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

// // // // // // //   // Some sample categories to work with the CategoryDetail component
// // // // // // //   const categories = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       name: "Condition Overview",
// // // // // // //       correct: 8,
// // // // // // //       total: 9,
// // // // // // //       percentage: 89,
// // // // // // //       status: "good"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       name: "Diagnosis & Testing",
// // // // // // //       correct: 5,
// // // // // // //       total: 9,
// // // // // // //       percentage: 56,
// // // // // // //       status: "mid"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       name: "Treatment & Management",
// // // // // // //       correct: 3,
// // // // // // //       total: 8,
// // // // // // //       percentage: 38,
// // // // // // //       status: "fail"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // //       {/* Header Component */}
// // // // // // //       <Header 
// // // // // // //         examName={exam.name}
// // // // // // //         totalCorrect={totalCorrect}
// // // // // // //         totalQuestions={totalQuestions}
// // // // // // //         overallPercentage={overallPercentage}
// // // // // // //         searchTerm={searchTerm}
// // // // // // //         onSearchChange={handleSearchChange}
// // // // // // //         activeTab={activeTab}
// // // // // // //       />

// // // // // // //       <main className="container mx-auto px-4 pt-2 pb-16 md:py-6">
// // // // // // //         {/* Tab Bar Component */}
// // // // // // //         <TabBar 
// // // // // // //           activeTab={activeTab} 
// // // // // // //           setActiveTab={setActiveTab}
// // // // // // //         />

// // // // // // //         {/* Main content area */}
// // // // // // //         <div className="max-w-2xl mx-auto mt-6 space-y-6">
// // // // // // //           {/* Study Mode Tab - Show exam prep notes */}
// // // // // // //           {activeTab === 'study' && (
// // // // // // //             <div className="bg-white rounded-lg shadow-sm p-6 overflow-auto">
// // // // // // //               <div dangerouslySetInnerHTML={{ __html: examContent.prep }} />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Simulator Tab - Show MCQs (previously assessment) */}
// // // // // // //           {activeTab === 'simulator' && (
// // // // // // //             <div className="space-y-6">
// // // // // // //               {mcqs.map((mcq) => (
// // // // // // //                 <div key={mcq.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
// // // // // // //                   <div className="flex justify-between items-start mb-4">
// // // // // // //                     <h3 className="text-lg font-medium text-gray-900 pr-10">{mcq.question}</h3>
// // // // // // //                     <button 
// // // // // // //                       className="text-gray-400 hover:text-blue-500"
// // // // // // //                       onClick={() => togglePinQuestion(mcq.id)}
// // // // // // //                     >
// // // // // // //                       {pinnedQuestions.includes(mcq.id) ? (
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
// // // // // // //                           <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // // // // //                         </svg>
// // // // // // //                       ) : (
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
// // // // // // //                         </svg>
// // // // // // //                       )}
// // // // // // //                     </button>
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="space-y-3">
// // // // // // //                     {mcq.options.map((option, index) => (
// // // // // // //                       <div 
// // // // // // //                         key={index} 
// // // // // // //                         className={`flex items-center p-3 rounded-lg cursor-pointer border ${
// // // // // // //                           mcqAnswers[mcq.id] === index
// // // // // // //                             ? option.isCorrect 
// // // // // // //                               ? 'bg-green-50 border-green-200 text-green-800' 
// // // // // // //                               : 'bg-red-50 border-red-200 text-red-800'
// // // // // // //                             : 'border-gray-200 hover:bg-gray-50'
// // // // // // //                         }`}
// // // // // // //                         onClick={() => handleMcqOptionClick(mcq.id, index)}
// // // // // // //                       >
// // // // // // //                         <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
// // // // // // //                           mcqAnswers[mcq.id] === index
// // // // // // //                             ? option.isCorrect 
// // // // // // //                               ? 'bg-green-100 text-green-600' 
// // // // // // //                               : 'bg-red-100 text-red-600'
// // // // // // //                             : 'bg-gray-100 text-gray-600'
// // // // // // //                         }`}>
// // // // // // //                           {['A', 'B', 'C', 'D', 'E'][index]}
// // // // // // //                         </div>
// // // // // // //                         <span className="flex-1">{option.text.replace(/^[A-E]\) /, '')}</span>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
                  
// // // // // // //                   {mcqAnswers[mcq.id] !== undefined && (
// // // // // // //                     <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
// // // // // // //                       <h4 className="font-medium text-gray-900 mb-2">Explanation:</h4>
// // // // // // //                       <p className="text-gray-700">{mcq.explanation}</p>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Review Tab (merged pinned and incorrect) */}
// // // // // // //           {activeTab === 'review' && (
// // // // // // //             <>
// // // // // // //               {/* Filter controls */}
// // // // // // //               <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-4">
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                   <button 
// // // // // // //                     className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // //                     onClick={() => setReviewFilter('all')}
// // // // // // //                   >
// // // // // // //                     All
// // // // // // //                   </button>
// // // // // // //                   <button 
// // // // // // //                     className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // //                     onClick={() => setReviewFilter('incorrect')}
// // // // // // //                   >
// // // // // // //                     Incorrect
// // // // // // //                   </button>
// // // // // // //                   <button 
// // // // // // //                     className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // // // //                     onClick={() => setReviewFilter('pinned')}
// // // // // // //                   >
// // // // // // //                     Pinned
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {filteredReviewItems.length > 0 ? (
// // // // // // //                 <div className="space-y-4">
// // // // // // //                   {filteredReviewItems.map((item) => (
// // // // // // //                     <div 
// // // // // // //                       key={item.id} 
// // // // // // //                       className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
// // // // // // //                     >
// // // // // // //                       <div 
// // // // // // //                         className="p-4 cursor-pointer"
// // // // // // //                         onClick={() => toggleReviewAnswer(item.id)}
// // // // // // //                       >
// // // // // // //                         <div className="flex items-start">
// // // // // // //                           <div className="mr-3 mt-1">
// // // // // // //                             {item.type === 'incorrect' ? (
// // // // // // //                               <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
// // // // // // //                                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // // // // //                                 </svg>
// // // // // // //                               </span>
// // // // // // //                             ) : (
// // // // // // //                               <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
// // // // // // //                                   <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // // // // //                                 </svg>
// // // // // // //                               </span>
// // // // // // //                             )}
// // // // // // //                           </div>
// // // // // // //                           <div className="flex-1">
// // // // // // //                             <p className="text-gray-800 font-medium">{item.question}</p>
// // // // // // //                             <div className="flex justify-between mt-2 text-xs text-gray-500">
// // // // // // //                               <span>{item.category}</span>
// // // // // // //                               <span>{new Date(item.date).toLocaleDateString()}</span>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                           <div className="ml-2">
// // // // // // //                             <svg 
// // // // // // //                               xmlns="http://www.w3.org/2000/svg" 
// // // // // // //                               className={`h-5 w-5 text-gray-400 transition-transform ${reviewAnswers[item.id] ? 'rotate-180' : ''}`} 
// // // // // // //                               fill="none" 
// // // // // // //                               viewBox="0 0 24 24" 
// // // // // // //                               stroke="currentColor"
// // // // // // //                             >
// // // // // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // // // //                             </svg>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
                      
// // // // // // //                       {reviewAnswers[item.id] && (
// // // // // // //                         <div className="p-4 bg-gray-50 border-t border-gray-200">
// // // // // // //                           <p className="text-gray-700">
// // // // // // //                             {item.id === 101 && "ACE inhibitors prevent the conversion of angiotensin I to angiotensin II by inhibiting ACE, leading to decreased vasoconstriction and decreased aldosterone secretion."}
// // // // // // //                             {item.id === 102 && "Primary symptoms include muscle weakness that worsens with activity and improves with rest, ptosis (drooping eyelids), diplopia (double vision), and bulbar symptoms like dysarthria and dysphagia."}
// // // // // // //                             {item.id === 103 && "Increased bone density is NOT a common complication of diabetes mellitus. Common complications include retinopathy, nephropathy, neuropathy, cardiovascular disease, and poor wound healing."}
// // // // // // //                             {item.id === 104 && "The gold standard diagnostic test for Myasthenia Gravis is the acetylcholine receptor antibody test, which has high specificity for the condition."}
// // // // // // //                           </p>
// // // // // // //                         </div>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               ) : (
// // // // // // //                 <EmptyState 
// // // // // // //                   icon={reviewFilter === 'pinned' ? "📌" : "✅"}
// // // // // // //                   title={reviewFilter === 'all' ? "No Review Items" : 
// // // // // // //                         reviewFilter === 'pinned' ? "No Pinned Questions" : 
// // // // // // //                         "No Incorrect Questions"}
// // // // // // //                   description={reviewFilter === 'all' ? "You don't have any questions to review." : 
// // // // // // //                               reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
// // // // // // //                               "Answer questions in study mode to see your incorrect answers here."}
// // // // // // //                   buttonText="Practice More"
// // // // // // //                   buttonAction={() => setActiveTab('simulator')}
// // // // // // //                 />
// // // // // // //               )}
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           {/* Concepts Tab */}
// // // // // // //           {activeTab === 'concepts' && (
// // // // // // //             <div className="space-y-4">
// // // // // // //               {categories.map(category => (
// // // // // // //                 <div 
// // // // // // //                   key={category.id} 
// // // // // // //                   className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 cursor-pointer hover:shadow-md transition"
// // // // // // //                 >
// // // // // // //                   <div className="flex items-center mb-2">
// // // // // // //                     <div className="mr-3">
// // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // // // // //                       </svg>
// // // // // // //                     </div>
// // // // // // //                     <div className="flex-1">
// // // // // // //                       <div className="flex justify-between items-center">
// // // // // // //                         <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
// // // // // // //                         <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">
// // // // // // //                           {Math.floor(Math.random() * 5) + 2} concepts
// // // // // // //                         </span>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Chat Tab */}
// // // // // // //           {activeTab === 'chat' && (
// // // // // // //             <EmptyState 
// // // // // // //               icon="💬"
// // // // // // //               title="Chat Support Coming Soon"
// // // // // // //               description="Ask questions about this exam and get help from our AI tutor."
// // // // // // //               buttonText="Back to Study"
// // // // // // //               buttonAction={() => setActiveTab('study')}
// // // // // // //             />
// // // // // // //           )}
          
// // // // // // //           {/* Profile Tab */}
// // // // // // //           {activeTab === 'profile' && (
// // // // // // //             <EmptyState 
// // // // // // //               icon="👤"
// // // // // // //               title="Profile Settings"
// // // // // // //               description="Sign in or create an account to track your progress."
// // // // // // //               buttonText="Sign In"
// // // // // // //               buttonAction={() => router.push('/signin')}
// // // // // // //             />
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // 'use client';

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useRouter } from 'next/navigation';
// // // // // // import { examData } from '@/app/data/allexams';

// // // // // // // Import main components
// // // // // // import Header from '@/components/v1/Header';
// // // // // // import TabBar from '@/components/v1/TabBar';
// // // // // // import StudyTab from '@/components/exam/StudyTab';
// // // // // // import SimulatorTab from '@/components/exam/SimulatorTab';
// // // // // // import ReviewTab from '@/components/exam/ReviewTab';
// // // // // // import ConceptsTab from '@/components/exam/ConceptsTab';
// // // // // // import EmptyStateTab from '@/components/exam/EmptyStateTab';

// // // // // // // Import utilities
// // // // // // import { parseMcqs, parseReviewItems } from './content-parser';

// // // // // // export default function ExamDetailPage({ params }) {
// // // // // //   const router = useRouter();
// // // // // //   const [exam, setExam] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [activeTab, setActiveTab] = useState('study');
// // // // // //   const [pinnedQuestions, setPinnedQuestions] = useState([]);
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
  
// // // // // //   // Find the exam from the URL param
// // // // // //   useEffect(() => {
// // // // // //     if (!params?.exam) return;
    
// // // // // //     const examId = parseInt(params.exam);
// // // // // //     if (isNaN(examId)) {
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }
    
// // // // // //     // Search for the exam in all categories
// // // // // //     let foundExam = null;
// // // // // //     Object.keys(examData).forEach(tabKey => {
// // // // // //       examData[tabKey].forEach(e => {
// // // // // //         if (e.id === examId) {
// // // // // //           foundExam = e;
// // // // // //         }
// // // // // //       });
// // // // // //     });
    
// // // // // //     setExam(foundExam);
// // // // // //     setLoading(false);
// // // // // //   }, [params]);

// // // // // //   // Handler for search term changes
// // // // // //   const handleSearchChange = (value) => {
// // // // // //     setSearchTerm(value);
// // // // // //   };

// // // // // //   // Handler for pinning/unpinning questions
// // // // // //   const togglePinQuestion = (id) => {
// // // // // //     if (pinnedQuestions.includes(id)) {
// // // // // //       setPinnedQuestions(pinnedQuestions.filter(qId => qId !== id));
// // // // // //     } else {
// // // // // //       setPinnedQuestions([...pinnedQuestions, id]);
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!exam) {
// // // // // //     return (
// // // // // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // // // // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // // // // //         <button 
// // // // // //           onClick={() => router.push('/exams')}
// // // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // // // //         >
// // // // // //           Back to Exam List
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // Calculate some dummy stats for the UI
// // // // // //   const totalCorrect = 16;
// // // // // //   const totalQuestions = 26;
// // // // // //   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

// // // // // //   // Sample data
// // // // // //   const examContent = getExamContent();
// // // // // //   const subjects = getSubjects();
// // // // // //   const mcqs = parseMcqs(examContent.mcqs);
// // // // // //   const reviewItems = getReviewItems();
// // // // // //   const concepts = getConcepts();

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // //       {/* Header Component */}
// // // // // //       <Header 
// // // // // //         examName={exam.name}
// // // // // //         totalCorrect={totalCorrect}
// // // // // //         totalQuestions={totalQuestions}
// // // // // //         overallPercentage={overallPercentage}
// // // // // //         searchTerm={searchTerm}
// // // // // //         onSearchChange={handleSearchChange}
// // // // // //         activeTab={activeTab}
// // // // // //       />

// // // // // //       <main className="container mx-auto px-4 pt-2 pb-16 md:py-6">
// // // // // //         {/* Tab Bar Component */}
// // // // // //         <TabBar 
// // // // // //           activeTab={activeTab} 
// // // // // //           setActiveTab={setActiveTab}
// // // // // //         />

// // // // // //         {/* Main content area */}
// // // // // //         <div className="max-w-2xl mx-auto mt-6 space-y-6">
// // // // // //           {activeTab === 'study' && (
// // // // // //             <StudyTab examContent={examContent} />
// // // // // //           )}
          
// // // // // //           {activeTab === 'simulator' && (
// // // // // //             <SimulatorTab 
// // // // // //               subjects={subjects}
// // // // // //               mcqs={mcqs}
// // // // // //               pinnedQuestions={pinnedQuestions}
// // // // // //               onTogglePin={togglePinQuestion}
// // // // // //             />
// // // // // //           )}
          
// // // // // //           {activeTab === 'review' && (
// // // // // //             <ReviewTab 
// // // // // //               reviewItems={reviewItems}
// // // // // //               searchTerm={searchTerm}
// // // // // //             />
// // // // // //           )}
          
// // // // // //           {activeTab === 'concepts' && (
// // // // // //             <ConceptsTab concepts={concepts} />
// // // // // //           )}
          
// // // // // //           {activeTab === 'chat' && (
// // // // // //             <EmptyStateTab 
// // // // // //               icon="💬"
// // // // // //               title="Chat Support Coming Soon"
// // // // // //               description="Ask questions about this exam and get help from our AI tutor."
// // // // // //               buttonText="Back to Study"
// // // // // //               buttonAction={() => setActiveTab('study')}
// // // // // //             />
// // // // // //           )}
          
// // // // // //           {activeTab === 'profile' && (
// // // // // //             <EmptyStateTab 
// // // // // //               icon="👤"
// // // // // //               title="Profile Settings"
// // // // // //               description="Sign in or create an account to track your progress."
// // // // // //               buttonText="Sign In"
// // // // // //               buttonAction={() => router.push('/signin')}
// // // // // //             />
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // Helper functions to provide sample data
// // // // // // // In a real app, these would be API calls or database queries

// // // // // // function getExamContent() {
// // // // // //   return {
// // // // // //     prep: `
// // // // // //       <h3>Myasthenia Gravis (MG) Overview</h3>
// // // // // //       <ul>
// // // // // //         <li><strong>Definition:</strong> Autoimmune disorder causing <strong>antibody-mediated blockade of neuromuscular transmission</strong> at the <strong>neuromuscular junction (NMJ)</strong>.</li>
// // // // // //         <li><strong>Etiology:</strong> <strong>Anti-ACh receptor antibodies</strong> (most common), <strong>Anti-MuSK antibodies</strong> (less common).</li>
// // // // // //         <li><strong>Pathophysiology:</strong> ↓ ACh receptor availability → <strong>progressive muscle weakness</strong> with repeated use.</li>
// // // // // //         <li><strong>Clinical Features:</strong>
// // // // // //           <ul>
// // // // // //             <li><strong>Muscle weakness</strong> (worsens with activity, improves with rest)</li>
// // // // // //             <li><strong>Ptosis, Diplopia</strong> (ocular symptoms common)</li>
// // // // // //             <li><strong>Bulbar symptoms:</strong> Dysphagia, dysarthria</li>
// // // // // //             <li><strong>Respiratory failure</strong> (Myasthenic crisis)</li>
// // // // // //           </ul>
// // // // // //         </li>
// // // // // //         <li><strong>Associated Conditions:</strong>
// // // // // //           <ul>
// // // // // //             <li><strong>Thymoma</strong> (check CT chest)</li>
// // // // // //             <li>Autoimmune diseases (SLE, RA)</li>
// // // // // //           </ul>
// // // // // //         </li>
// // // // // //         <li><strong>Diagnosis:</strong>
// // // // // //           <ul>
// // // // // //             <li><strong>Edrophonium (Tensilon) test</strong>: Rapid symptom improvement</li>
// // // // // //             <li><strong>Ice pack test</strong>: Improvement of ptosis</li>
// // // // // //             <li><strong>ACh receptor antibody test</strong> (gold standard)</li>
// // // // // //             <li><strong>Repetitive nerve stimulation test</strong> (↓ response with repetitive stimulation)</li>
// // // // // //           </ul>
// // // // // //         </li>
// // // // // //         <li><strong>Treatment:</strong>
// // // // // //           <ul>
// // // // // //             <li><strong>First-line:</strong> Pyridostigmine (AChE inhibitor)</li>
// // // // // //             <li><strong>Corticosteroids & Immunosuppressants</strong> for refractory cases</li>
// // // // // //             <li><strong>Plasmapheresis/IVIG</strong> for myasthenic crisis</li>
// // // // // //             <li><strong>Thymectomy</strong> if thymoma present</li>
// // // // // //           </ul>
// // // // // //         </li>
// // // // // //       </ul>
// // // // // //     `,
// // // // // //     mcqs: `
// // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // //         <h3 class="mb-2">Q1: A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?</h3>
// // // // // //         <ul class="space-y-2">
// // // // // //           <li class="ml-5">A) Lambert-Eaton Myasthenic Syndrome</li>
// // // // // //           <li class="ml-5">B) Multiple Sclerosis</li>
// // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Myasthenia Gravis</li>
// // // // // //           <li class="ml-5">D) Guillain-Barré Syndrome</li>
// // // // // //         </ul>
// // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // //           <p><strong>Explanation:</strong> MG is characterized by <strong>fluctuating muscle weakness</strong>, ptosis, and <strong>improvement with rest/cooling</strong> (Ice Pack Test).</p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // //         <h3 class="mb-2">Q2: Which of the following is the most accurate diagnostic test for Myasthenia Gravis?</h3>
// // // // // //         <ul class="space-y-2">
// // // // // //           <li class="ml-5">A) Tensilon (Edrophonium) test</li>
// // // // // //           <li class="ml-5">B) Electromyography (EMG)</li>
// // // // // //           <li class="ml-5 text-green-600 font-medium">✅ C) Acetylcholine receptor antibody test</li>
// // // // // //           <li class="ml-5">D) Muscle biopsy</li>
// // // // // //         </ul>
// // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // //           <p><strong>Explanation:</strong> The <strong>gold standard</strong> for MG diagnosis is <strong>ACh receptor antibody detection</strong>. The <strong>Tensilon test</strong> is a rapid screen but not definitive.</p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div class="mb-8 p-4 border rounded-lg">
// // // // // //         <h3 class="mb-2">Q3: Which of the following medications can worsen Myasthenia Gravis?</h3>
// // // // // //         <ul class="space-y-2">
// // // // // //           <li class="ml-5">A) Beta-blockers</li>
// // // // // //           <li class="ml-5">B) Aminoglycosides</li>
// // // // // //           <li class="ml-5">C) Fluoroquinolones</li>
// // // // // //           <li class="ml-5 text-green-600 font-medium">✅ D) All of the above</li>
// // // // // //         </ul>
// // // // // //         <div class="mt-4 bg-gray-50 p-3 rounded">
// // // // // //           <p><strong>Explanation:</strong> <strong>Beta-blockers, aminoglycosides, and fluoroquinolones</strong> can exacerbate MG symptoms by interfering with NMJ transmission.</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     `
// // // // // //   };
// // // // // // }

// // // // // // function getSubjects() {
// // // // // //   return [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       name: "Pathophysiology",
// // // // // //       description: "Understand disease mechanisms and processes",
// // // // // //       questionCount: 12,
// // // // // //       progress: 75,
// // // // // //       status: "good"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       name: "Diagnosis & Testing",
// // // // // //       description: "Explore diagnostic methods and test interpretation",
// // // // // //       questionCount: 18,
// // // // // //       progress: 50,
// // // // // //       status: "mid"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       name: "Treatment & Management",
// // // // // //       description: "Learn therapeutic approaches and patient care",
// // // // // //       questionCount: 20,
// // // // // //       progress: 30,
// // // // // //       status: "fail"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       name: "Pharmacology",
// // // // // //       description: "Study medications, mechanisms, and side effects",
// // // // // //       questionCount: 15,
// // // // // //       progress: 60,
// // // // // //       status: "mid"
// // // // // //     }
// // // // // //   ];
// // // // // // }

// // // // // // function getReviewItems() {
// // // // // //   return [
// // // // // //     {
// // // // // //       id: 101,
// // // // // //       question: "What is the primary mechanism of action for ACE inhibitors?",
// // // // // //       type: "incorrect",
// // // // // //       category: "Cardiovascular",
// // // // // //       date: "2025-02-28",
// // // // // //       answer: "ACE inhibitors prevent the conversion of angiotensin I to angiotensin II by inhibiting ACE, leading to decreased vasoconstriction and decreased aldosterone secretion."
// // // // // //     },
// // // // // //     {
// // // // // //       id: 102,
// // // // // //       question: "What are the primary symptoms of Myasthenia Gravis?",
// // // // // //       type: "pinned",
// // // // // //       category: "Neurology",
// // // // // //       date: "2025-03-01",
// // // // // //       answer: "Primary symptoms include muscle weakness that worsens with activity and improves with rest, ptosis (drooping eyelids), diplopia (double vision), and bulbar symptoms like dysarthria and dysphagia."
// // // // // //     },
// // // // // //     {
// // // // // //       id: 103,
// // // // // //       question: "Which of the following is NOT a common complication of diabetes mellitus?",
// // // // // //       type: "incorrect",
// // // // // //       category: "Endocrine",
// // // // // //       date: "2025-03-02",
// // // // // //       answer: "Increased bone density is NOT a common complication of diabetes mellitus. Common complications include retinopathy, nephropathy, neuropathy, cardiovascular disease, and poor wound healing."
// // // // // //     },
// // // // // //     {
// // // // // //       id: 104,
// // // // // //       question: "What is the gold standard diagnostic test for Myasthenia Gravis?",
// // // // // //       type: "pinned",
// // // // // //       category: "Diagnostics",
// // // // // //       date: "2025-03-03",
// // // // // //       answer: "The gold standard diagnostic test for Myasthenia Gravis is the acetylcholine receptor antibody test, which has high specificity for the condition."
// // // // // //     }
// // // // // //   ];
// // // // // // }

// // // // // // function getConcepts() {
// // // // // //   return [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       name: "Condition Overview",
// // // // // //       correct: 8,
// // // // // //       total: 9,
// // // // // //       percentage: 89,
// // // // // //       status: "good"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       name: "Diagnosis & Testing",
// // // // // //       correct: 5,
// // // // // //       total: 9,
// // // // // //       percentage: 56,
// // // // // //       status: "mid"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       name: "Treatment & Management",
// // // // // //       correct: 3,
// // // // // //       total: 8,
// // // // // //       percentage: 38,
// // // // // //       status: "fail"
// // // // // //     }
// // // // // //   ];
// // // // // // }
// // // // // 'use client';

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useRouter } from 'next/navigation';
// // // // // import { examData } from '@/app/data/allexams';

// // // // // // Import existing components
// // // // // import Header from '@/components/v1/Header';
// // // // // import TabBar from '@/components/v1/TabBar';
// // // // // import EmptyState from '@/components/EmptyState';

// // // // // // Import data
// // // // // import { examContent, subjects, reviewItems, concepts } from '@/app/data/data';

// // // // // // Import utilities
// // // // // import { parseMcqs, parseReviewItems } from './content-parser';

// // // // // export default function ExamDetailPage({ params }) {
// // // // //   const router = useRouter();
// // // // //   const [exam, setExam] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [activeTab, setActiveTab] = useState('study');
// // // // //   const [pinnedQuestions, setPinnedQuestions] = useState([]);
// // // // //   const [selectedSubject, setSelectedSubject] = useState(null);
// // // // //   const [simulatorStarted, setSimulatorStarted] = useState(false);
// // // // //   const [mcqAnswers, setMcqAnswers] = useState({});
// // // // //   const [reviewAnswers, setReviewAnswers] = useState({});
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'pinned'
  
// // // // //   // Parse content for displaying
// // // // //   const mcqs = parseMcqs(examContent.mcqs);
  
// // // // //   // Find the exam from the URL param
// // // // //   useEffect(() => {
// // // // //     if (!params?.exam) return;
    
// // // // //     const examId = parseInt(params.exam);
// // // // //     if (isNaN(examId)) {
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }
    
// // // // //     // Search for the exam in all categories
// // // // //     let foundExam = null;
// // // // //     Object.keys(examData).forEach(tabKey => {
// // // // //       examData[tabKey].forEach(e => {
// // // // //         if (e.id === examId) {
// // // // //           foundExam = e;
// // // // //         }
// // // // //       });
// // // // //     });
    
// // // // //     setExam(foundExam);
// // // // //     setLoading(false);
// // // // //   }, [params]);

// // // // //   // Reset simulator state when changing tabs
// // // // //   useEffect(() => {
// // // // //     if (activeTab !== 'simulator' && activeTab !== 'study') {
// // // // //       setSelectedSubject(null);
// // // // //       setSimulatorStarted(false);
// // // // //     }
// // // // //   }, [activeTab]);

// // // // //   // Filter review items based on review filter and search term
// // // // //   const filteredReviewItems = reviewItems.filter(item => {
// // // // //     const matchesFilter = reviewFilter === 'all' || item.type === reviewFilter;
// // // // //     const matchesSearch = !searchTerm || 
// // // // //                         item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // // // //                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
// // // // //     return matchesFilter && matchesSearch;
// // // // //   });

// // // // //   // Handler functions
// // // // //   const togglePinQuestion = (id) => {
// // // // //     if (pinnedQuestions.includes(id)) {
// // // // //       setPinnedQuestions(pinnedQuestions.filter(qId => qId !== id));
// // // // //     } else {
// // // // //       setPinnedQuestions([...pinnedQuestions, id]);
// // // // //     }
// // // // //   };

// // // // //   const handleMcqOptionClick = (mcqId, optionIndex) => {
// // // // //     setMcqAnswers({
// // // // //       ...mcqAnswers,
// // // // //       [mcqId]: optionIndex
// // // // //     });
// // // // //   };

// // // // //   const toggleReviewAnswer = (reviewId) => {
// // // // //     setReviewAnswers({
// // // // //       ...reviewAnswers,
// // // // //       [reviewId]: !reviewAnswers[reviewId]
// // // // //     });
// // // // //   };

// // // // //   const handleSearchChange = (value) => {
// // // // //     setSearchTerm(value);
// // // // //   };

// // // // //   const handleSubjectClick = (subject) => {
// // // // //     setSelectedSubject(subject);
// // // // //   };

// // // // //   const handleStartSimulator = () => {
// // // // //     setSimulatorStarted(true);
// // // // //   };

// // // // //   const handleBackToSubjects = () => {
// // // // //     setSimulatorStarted(false);
// // // // //     setSelectedSubject(null);
// // // // //     // Clear answers when going back to subject selection
// // // // //     setMcqAnswers({});
// // // // //   };

// // // // //   // Calculate stats for the header
// // // // //   const totalCorrect = 16;
// // // // //   const totalQuestions = 26;
// // // // //   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (!exam) {
// // // // //     return (
// // // // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // // // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // // // //         <button 
// // // // //           onClick={() => router.push('/exams')}
// // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // // //         >
// // // // //           Back to Exam List
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
// // // // //       {/* Header Component */}
// // // // //       <div className="flex-shrink-0">
// // // // //         <Header 
// // // // //           examName={exam.name}
// // // // //           totalCorrect={totalCorrect}
// // // // //           totalQuestions={totalQuestions}
// // // // //           overallPercentage={overallPercentage}
// // // // //           searchTerm={searchTerm}
// // // // //           onSearchChange={handleSearchChange}
// // // // //           activeTab={activeTab}
// // // // //         />
// // // // //       </div>

// // // // //       {/* TabBar for desktop - positioned below header */}
// // // // //       <div className="hidden md:block flex-shrink-0">
// // // // //         <div className="container mx-auto px-4 pt-2">
// // // // //           <TabBar 
// // // // //             activeTab={activeTab} 
// // // // //             setActiveTab={setActiveTab}
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Main content - Fill all available space */}
// // // // //       <main className="flex-grow overflow-hidden">
// // // // //         <div className="h-full flex flex-col">
// // // // //           {/* Container to limit width on larger screens */}
// // // // //           <div className="w-full max-w-2xl mx-auto px-1 pt-1 pb-0 h-full">
// // // // //             {/* Tab content - Fill all remaining space */}
// // // // //             <div className="flex-grow overflow-auto pb-16 md:pb-0 h-full">
// // // // //               {/* Study Tab */}
// // // // //               {activeTab === 'study' && (
// // // // //                 !selectedSubject ? (
// // // // //                   <StudyList 
// // // // //                     subjects={subjects} 
// // // // //                     onSubjectSelect={handleSubjectClick} 
// // // // //                   />
// // // // //                 ) : !simulatorStarted ? (
// // // // //                   <SubjectDetail 
// // // // //                     subject={selectedSubject} 
// // // // //                     onBack={() => setSelectedSubject(null)} 
// // // // //                     onStart={handleStartSimulator}
// // // // //                     mode="study"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <McqQuiz 
// // // // //                     mcqs={mcqs}
// // // // //                     subject={selectedSubject}
// // // // //                     onBack={handleBackToSubjects}
// // // // //                     mcqAnswers={mcqAnswers}
// // // // //                     onMcqAnswer={handleMcqOptionClick}
// // // // //                     pinnedQuestions={pinnedQuestions}
// // // // //                     onTogglePin={togglePinQuestion}
// // // // //                   />
// // // // //                 )
// // // // //               )}
              
// // // // //               {/* Simulator Tab */}
// // // // //               {activeTab === 'simulator' && (
// // // // //                 !selectedSubject ? (
// // // // //                   <StudyList 
// // // // //                     subjects={subjects} 
// // // // //                     onSubjectSelect={handleSubjectClick} 
// // // // //                   />
// // // // //                 ) : !simulatorStarted ? (
// // // // //                   <SubjectDetail 
// // // // //                     subject={selectedSubject} 
// // // // //                     onBack={() => setSelectedSubject(null)} 
// // // // //                     onStart={handleStartSimulator}
// // // // //                     mode="simulator"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <McqQuiz 
// // // // //                     mcqs={mcqs}
// // // // //                     subject={selectedSubject}
// // // // //                     onBack={handleBackToSubjects}
// // // // //                     mcqAnswers={mcqAnswers}
// // // // //                     onMcqAnswer={handleMcqOptionClick}
// // // // //                     pinnedQuestions={pinnedQuestions}
// // // // //                     onTogglePin={togglePinQuestion}
// // // // //                   />
// // // // //                 )
// // // // //               )}
              
// // // // //               {/* Review Tab */}
// // // // //               {activeTab === 'review' && (
// // // // //                 <ReviewTab
// // // // //                   reviewItems={filteredReviewItems}
// // // // //                   reviewFilter={reviewFilter}
// // // // //                   setReviewFilter={setReviewFilter}
// // // // //                   reviewAnswers={reviewAnswers}
// // // // //                   toggleReviewAnswer={toggleReviewAnswer}
// // // // //                   setActiveTab={setActiveTab}
// // // // //                 />
// // // // //               )}
              
// // // // //               {/* Concepts Tab */}
// // // // //               {activeTab === 'concepts' && (
// // // // //                 <div className="space-y-3 h-full overflow-auto pt-2">
// // // // //                   {concepts.map(category => (
// // // // //                     <div 
// // // // //                       key={category.id} 
// // // // //                       className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 cursor-pointer hover:shadow-md transition"
// // // // //                     >
// // // // //                       <div className="flex items-center mb-2">
// // // // //                         <div className="mr-3">
// // // // //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // // //                           </svg>
// // // // //                         </div>
// // // // //                         <div className="flex-1">
// // // // //                           <div className="flex justify-between items-center">
// // // // //                             <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
// // // // //                             <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">
// // // // //                               {Math.floor(Math.random() * 5) + 2} concepts
// // // // //                             </span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
              
// // // // //               {/* Chat Tab */}
// // // // //               {activeTab === 'chat' && (
// // // // //                 <div className="h-full flex items-center justify-center">
// // // // //                   <EmptyState 
// // // // //                     icon="💬"
// // // // //                     title="Chat Support Coming Soon"
// // // // //                     description="Ask questions about this exam and get help from our AI tutor."
// // // // //                     buttonText="Back to Study"
// // // // //                     buttonAction={() => setActiveTab('study')}
// // // // //                   />
// // // // //                 </div>
// // // // //               )}
              
// // // // //               {/* Profile Tab */}
// // // // //               {activeTab === 'profile' && (
// // // // //                 <div className="h-full flex items-center justify-center">
// // // // //                   <EmptyState 
// // // // //                     icon="👤"
// // // // //                     title="Profile Settings"
// // // // //                     description="Sign in or create an account to track your progress."
// // // // //                     buttonText="Sign In"
// // // // //                     buttonAction={() => router.push('/signin')}
// // // // //                   />
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
            
// // // // //             {/* Tab Bar Component - Only for mobile */}
// // // // //             <div className="flex-shrink-0 md:hidden fixed bottom-0 left-0 right-0">
// // // // //               <TabBar 
// // // // //                 activeTab={activeTab} 
// // // // //                 setActiveTab={setActiveTab}
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Component for the subject list in Study/Simulator tabs
// // // // // function StudyList({ subjects, onSubjectSelect }) {
// // // // //   return (
// // // // //     <div className="flex flex-col h-full">
// // // // //       <div className="flex justify-between items-center mb-4 pt-2">
// // // // //         <h2 className="text-xl font-bold text-gray-800">Select a Subject</h2>
// // // // //         <button
// // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
// // // // //           onClick={() => onSubjectSelect({
// // // // //             id: 0,
// // // // //             name: "Random Questions",
// // // // //             description: "Mixed questions from all subjects",
// // // // //             questionCount: subjects.reduce((acc, subj) => acc + subj.questionCount, 0),
// // // // //             progress: 0,
// // // // //             status: "mid"
// // // // //           })}
// // // // //         >
// // // // //           Random Mix
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="space-y-3">
// // // // //         {subjects.map(subject => (
// // // // //           <div
// // // // //             key={subject.id}
// // // // //             className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition cursor-pointer"
// // // // //             onClick={() => onSubjectSelect(subject)}
// // // // //           >
// // // // //             <div className="flex items-start">
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex justify-between items-center mb-1">
// // // // //                   <h3 className="text-lg font-medium text-gray-900">{subject.name}</h3>
// // // // //                   <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
// // // // //                     {subject.questionCount} questions
// // // // //                   </span>
// // // // //                 </div>
// // // // //                 <p className="text-gray-600 text-sm mb-3">{subject.description}</p>
                
// // // // //                 {/* Progress bar */}
// // // // //                 <div className="mt-2">
// // // // //                   <div className="flex justify-between text-xs text-gray-500 mb-1">
// // // // //                     <span>Progress</span>
// // // // //                     <span>{subject.progress}%</span>
// // // // //                   </div>
// // // // //                   <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
// // // // //                     <div 
// // // // //                       className={`h-full rounded-full ${
// // // // //                         subject.status === 'good' ? 'bg-green-500' :
// // // // //                         subject.status === 'mid' ? 'bg-yellow-500' :
// // // // //                         'bg-red-500'
// // // // //                       }`}
// // // // //                       style={{ width: `${subject.progress}%` }}
// // // // //                     ></div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="ml-4 flex items-center justify-center">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
// // // // //                   <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Component for subject detail
// // // // // function SubjectDetail({ subject, onBack, onStart, mode }) {
// // // // //   return (
// // // // //     <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 h-full">
// // // // //       <button
// // // // //         onClick={onBack}
// // // // //         className="flex items-center text-blue-600 text-sm font-medium mb-4 hover:text-blue-800"
// // // // //       >
// // // // //         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // // // //         </svg>
// // // // //         Back to subjects
// // // // //       </button>
      
// // // // //       <div className="mb-6">
// // // // //         <h2 className="text-2xl font-bold text-gray-900 mb-2">{subject.name}</h2>
// // // // //         <p className="text-gray-600">{subject.description}</p>
// // // // //       </div>
      
// // // // //       <div className="bg-gray-50 p-4 rounded-lg mb-6">
// // // // //         <div className="grid grid-cols-2 gap-4">
// // // // //           <div>
// // // // //             <p className="text-sm text-gray-500 mb-1">Questions</p>
// // // // //             <p className="text-2xl font-bold text-gray-900">{subject.questionCount}</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-sm text-gray-500 mb-1">Estimated time</p>
// // // // //             <p className="text-2xl font-bold text-gray-900">{Math.ceil(subject.questionCount * 1.5)} min</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       <div className="flex flex-col sm:flex-row gap-3">
// // // // //         <button
// // // // //           onClick={onStart}
// // // // //           className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition flex-1"
// // // // //         >
// // // // //           {mode === 'study' ? 'Start Studying' : 'Start Simulator'}
// // // // //         </button>
// // // // //         <button
// // // // //           onClick={onBack}
// // // // //           className="border border-gray-300 bg-white text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition"
// // // // //         >
// // // // //           Choose Different Subject
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Component for MCQ quiz
// // // // // function McqQuiz({ mcqs, subject, onBack, mcqAnswers, onMcqAnswer, pinnedQuestions, onTogglePin }) {
// // // // //   return (
// // // // //     <div className="h-full flex flex-col">
// // // // //       <div className="flex justify-between items-center mb-4">
// // // // //         <button
// // // // //           onClick={onBack}
// // // // //           className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
// // // // //         >
// // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // // // //           </svg>
// // // // //           Back to subjects
// // // // //         </button>
// // // // //         <div className="text-sm font-medium text-gray-600">
// // // // //           {subject.name} • Question <span className="text-blue-600">1</span> of {mcqs.length}
// // // // //         </div>
// // // // //       </div>
    
// // // // //       <div className="space-y-4 flex-grow">
// // // // //         {mcqs.map((mcq) => (
// // // // //           <div key={mcq.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
// // // // //             <div className="flex justify-between items-start mb-4">
// // // // //               <h3 className="text-base font-medium text-gray-900 pr-8">{mcq.question}</h3>
// // // // //               <button 
// // // // //                 className="text-gray-400 hover:text-blue-500 flex-shrink-0"
// // // // //                 onClick={() => onTogglePin(mcq.id)}
// // // // //               >
// // // // //                 {pinnedQuestions.includes(mcq.id) ? (
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
// // // // //                     <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // // //                   </svg>
// // // // //                 ) : (
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
// // // // //                   </svg>
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
            
// // // // //             <div className="space-y-2">
// // // // //               {mcq.options.map((option, index) => (
// // // // //                 <div 
// // // // //                   key={index} 
// // // // //                   className={`flex items-center p-3 rounded-lg cursor-pointer border ${
// // // // //                     mcqAnswers[mcq.id] === index
// // // // //                       ? option.isCorrect 
// // // // //                         ? 'bg-green-50 border-green-200 text-green-800' 
// // // // //                         : 'bg-red-50 border-red-200 text-red-800'
// // // // //                       : 'border-gray-200 hover:bg-gray-50'
// // // // //                   }`}
// // // // //                   onClick={() => onMcqAnswer(mcq.id, index)}
// // // // //                 >
// // // // //                   <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
// // // // //                     mcqAnswers[mcq.id] === index
// // // // //                       ? option.isCorrect 
// // // // //                         ? 'bg-green-100 text-green-600' 
// // // // //                         : 'bg-red-100 text-red-600'
// // // // //                       : 'bg-gray-100 text-gray-600'
// // // // //                   }`}>
// // // // //                     {['A', 'B', 'C', 'D', 'E'][index]}</div>
// // // // //                   <span className="flex-1 text-sm">{option.text.replace(/^[A-E]\) /, '')}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
            
// // // // //             {mcqAnswers[mcq.id] !== undefined && (
// // // // //               <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
// // // // //                 <h4 className="font-medium text-gray-900 mb-1 text-sm">Explanation:</h4>
// // // // //                 <p className="text-gray-700 text-sm">{mcq.explanation}</p>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Navigation buttons */}
// // // // //       <div className="flex justify-between mt-4 pb-4">
// // // // //         <button
// // // // //           className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium"
// // // // //           disabled
// // // // //         >
// // // // //           Previous
// // // // //         </button>
// // // // //         <button
// // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
// // // // //         >
// // // // //           Next
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Component for Review tab
// // // // // function ReviewTab({ reviewItems, reviewFilter, setReviewFilter, reviewAnswers, toggleReviewAnswer, setActiveTab }) {
// // // // //   return (
// // // // //     <div className="h-full flex flex-col">
// // // // //       {/* Filter controls */}
// // // // //       <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200 mb-3">
// // // // //         <div className="flex flex-wrap gap-2">
// // // // //           <button 
// // // // //             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // //             onClick={() => setReviewFilter('all')}
// // // // //           >
// // // // //             All
// // // // //           </button>
// // // // //           <button 
// // // // //             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'incorrect' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // //             onClick={() => setReviewFilter('incorrect')}
// // // // //           >
// // // // //             Incorrect
// // // // //           </button>
// // // // //           <button 
// // // // //             className={`px-3 py-1 rounded-full text-sm font-medium transition ${reviewFilter === 'pinned' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
// // // // //             onClick={() => setReviewFilter('pinned')}
// // // // //           >
// // // // //             Pinned
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {reviewItems.length > 0 ? (
// // // // //         <div className="space-y-3 flex-grow overflow-auto">
// // // // //           {reviewItems.map((item) => (
// // // // //             <div 
// // // // //               key={item.id} 
// // // // //               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
// // // // //             >
// // // // //               <div 
// // // // //                 className="p-3 cursor-pointer"
// // // // //                 onClick={() => toggleReviewAnswer(item.id)}
// // // // //               >
// // // // //                 <div className="flex items-start">
// // // // //                   <div className="mr-3 mt-1">
// // // // //                     {item.type === 'incorrect' ? (
// // // // //                       <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
// // // // //                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // // // //                         </svg>
// // // // //                       </span>
// // // // //                     ) : (
// // // // //                       <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
// // // // //                           <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// // // // //                         </svg>
// // // // //                       </span>
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div className="flex-1">
// // // // //                     <p className="text-gray-800 font-medium text-sm">{item.question}</p>
// // // // //                     <div className="flex justify-between mt-1 text-xs text-gray-500">
// // // // //                       <span>{item.category}</span>
// // // // //                       <span>{new Date(item.date).toLocaleDateString()}</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div className="ml-2">
// // // // //                     <svg 
// // // // //                       xmlns="http://www.w3.org/2000/svg" 
// // // // //                       className={`h-5 w-5 text-gray-400 transition-transform ${reviewAnswers[item.id] ? 'rotate-180' : ''}`} 
// // // // //                       fill="none" 
// // // // //                       viewBox="0 0 24 24" 
// // // // //                       stroke="currentColor"
// // // // //                     >
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // // //                     </svg>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
              
// // // // //               {reviewAnswers[item.id] && (
// // // // //                 <div className="p-3 bg-gray-50 border-t border-gray-200">
// // // // //                   <p className="text-gray-700 text-sm">{item.answer}</p>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="flex-grow flex items-center justify-center">
// // // // //           <EmptyState 
// // // // //             icon={reviewFilter === 'pinned' ? "📌" : "✅"}
// // // // //             title={reviewFilter === 'all' ? "No Review Items" : 
// // // // //                   reviewFilter === 'pinned' ? "No Pinned Questions" : 
// // // // //                   "No Incorrect Questions"}
// // // // //             description={reviewFilter === 'all' ? "You don't have any questions to review." : 
// // // // //                         reviewFilter === 'pinned' ? "Pin important questions during your study sessions to see them here." : 
// // // // //                         "Answer questions in study mode to see your incorrect answers here."}
// // // // //             buttonText="Practice More"
// // // // //             buttonAction={() => setActiveTab('simulator')}
// // // // //           />
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // 'use client';

// // // // import { useRouter } from 'next/navigation';
// // // // import dynamic from 'next/dynamic';
// // // // import EmptyState from '@/components/EmptyState';
// // // // import ExamDetailLayout from '@/components/v1/ExamDetailLayout';
// // // // import SubjectSelector from '@/components/v1/SubjectSelector';
// // // // import SubjectDetail from '@/components/v1/SubjectDetail';
// // // // import { useExamData } from '@/app/hooks/useExamData';
// // // // import { useExamState } from '@/app/hooks/useExamState';

// // // // // Dynamically import components that might not be used right away
// // // // const QuizSimulator = dynamic(() => import('@/components/v1/QuizSimulator'));
// // // // const StudyTab = dynamic(() => import('@/components/v1/StudyTab'));
// // // // const ReviewTab = dynamic(() => import('@/components/v1/ReviewTab'));
// // // // const ConceptsTabContent = dynamic(() => import('@/components/v1/ConceptsTabContent'));
// // // // const Profile = dynamic(() => import('@/components/v1/Profile'));
// // // // const Chat = dynamic(() => import('@/components/v1/Chat'));

// // // // export default function ExamDetailPage({ params }) {
// // // //   const router = useRouter();
  
// // // //   // Get data and state from custom hooks
// // // //   const {
// // // //     exam,
// // // //     loading,
// // // //     mcqs,
// // // //     subjects,
// // // //     reviewItems,
// // // //     concepts,
// // // //     totalCorrect,
// // // //     totalQuestions,
// // // //     overallPercentage,
// // // //     examContent
// // // //   } = useExamData(params);
  
// // // //   const {
// // // //     activeTab,
// // // //     setActiveTab,
// // // //     pinnedQuestions,
// // // //     togglePinQuestion,
// // // //     selectedSubject,
// // // //     simulatorStarted,
// // // //     mcqAnswers,
// // // //     handleMcqOptionClick,
// // // //     reviewAnswers,
// // // //     toggleReviewAnswer,
// // // //     searchTerm,
// // // //     handleSearchChange,
// // // //     reviewFilter,
// // // //     setReviewFilter,
// // // //     filterReviewItems,
// // // //     handleSubjectClick,
// // // //     handleStartSimulator,
// // // //     handleBackToSubjects
// // // //   } = useExamState();

// // // //   // Loading state
// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center min-h-screen">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // Not found state
// // // //   if (!exam) {
// // // //     return (
// // // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // // //         <button 
// // // //           onClick={() => router.push('/exams')}
// // // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // //         >
// // // //           Back to Exam List
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // Filter review items based on the current filter and search term
// // // //   const filteredReviews = filterReviewItems(reviewItems);

// // // //   return (
// // // //     <ExamDetailLayout
// // // //       examName={exam.name}
// // // //       totalCorrect={totalCorrect}
// // // //       totalQuestions={totalQuestions}
// // // //       overallPercentage={overallPercentage}
// // // //       searchTerm={searchTerm}
// // // //       onSearchChange={handleSearchChange}
// // // //       activeTab={activeTab}
// // // //       setActiveTab={setActiveTab}
// // // //     >
// // // //       {/* Study Tab */}
// // // //       {activeTab === 'study' && (
// // // //         !selectedSubject ? (
// // // //           <SubjectSelector 
// // // //             subjects={subjects} 
// // // //             onSubjectSelect={handleSubjectClick} 
// // // //           />
// // // //         ) : !simulatorStarted ? (
// // // //           <SubjectDetail 
// // // //             subject={selectedSubject} 
// // // //             onBack={handleBackToSubjects} 
// // // //             onStart={handleStartSimulator}
// // // //             mode="study"
// // // //           />
// // // //         ) : (
// // // //           <QuizSimulator 
// // // //             mcqs={mcqs}
// // // //             subject={selectedSubject}
// // // //             onBack={handleBackToSubjects}
// // // //             mcqAnswers={mcqAnswers}
// // // //             onMcqOptionClick={handleMcqOptionClick}
// // // //             pinnedQuestions={pinnedQuestions}
// // // //             onTogglePin={togglePinQuestion}
// // // //           />
// // // //         )
// // // //       )}
      
// // // //       {/* Simulator Tab */}
// // // //       {activeTab === 'simulator' && (
// // // //         !selectedSubject ? (
// // // //           <SubjectSelector 
// // // //             subjects={subjects} 
// // // //             onSubjectSelect={handleSubjectClick} 
// // // //           />
// // // //         ) : !simulatorStarted ? (
// // // //           <SubjectDetail 
// // // //             subject={selectedSubject} 
// // // //             onBack={handleBackToSubjects} 
// // // //             onStart={handleStartSimulator}
// // // //             mode="simulator"
// // // //           />
// // // //         ) : (
// // // //           <QuizSimulator 
// // // //             mcqs={mcqs}
// // // //             subject={selectedSubject}
// // // //             onBack={handleBackToSubjects}
// // // //             mcqAnswers={mcqAnswers}
// // // //             onMcqOptionClick={handleMcqOptionClick}
// // // //             pinnedQuestions={pinnedQuestions}
// // // //             onTogglePin={togglePinQuestion}
// // // //           />
// // // //         )
// // // //       )}
      
// // // //       {/* Review Tab */}
// // // //       {activeTab === 'review' && (
// // // //         <ReviewTab
// // // //           reviewItems={filteredReviews}
// // // //           reviewFilter={reviewFilter}
// // // //           setReviewFilter={setReviewFilter}
// // // //           reviewAnswers={reviewAnswers}
// // // //           toggleReviewAnswer={toggleReviewAnswer}
// // // //           setActiveTab={setActiveTab}
// // // //         />
// // // //       )}
      
// // // //       {/* Concepts Tab */}
// // // //       {activeTab === 'concepts' && (
// // // //         <ConceptsTabContent concepts={concepts} />
// // // //       )}
      
// // // //       {/* Chat Tab */}
// // // //       {activeTab === 'chat' && <Chat />}
      
// // // //       {/* Profile Tab */}
// // // //       {activeTab === 'profile' && <Profile />}
// // // //     </ExamDetailLayout>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useRouter } from 'next/navigation';
// // // import dynamic from 'next/dynamic';
// // // import Link from 'next/link';
// // // import EmptyState from '@/components/EmptyState';
// // // import ExamDetailLayout from '@/components/v1/ExamDetailLayout';
// // // import SubjectSelector from '@/components/v1/SubjectSelector';
// // // import SubjectDetail from '@/components/v1/SubjectDetail';
// // // import { useExamData } from '@/app/hooks/useExamData';
// // // import { useExamState } from '@/app/hooks/useExamState';

// // // // Dynamically import components that might not be used right away
// // // const QuizSimulator = dynamic(() => import('@/components/v1/QuizSimulator'));
// // // const StudyTab = dynamic(() => import('@/components/v1/StudyTab'));
// // // const ReviewTab = dynamic(() => import('@/components/v1/ReviewTab'));
// // // const ConceptsTabContent = dynamic(() => import('@/components/v1/ConceptsTabContent'));
// // // const Profile = dynamic(() => import('@/components/v1/Profile'));
// // // const Chat = dynamic(() => import('@/components/v1/Chat'));

// // // export default function ExamDetailPage({ params }) {
// // //   const router = useRouter();
  
// // //   // Get data and state from custom hooks
// // //   const {
// // //     exam,
// // //     loading,
// // //     mcqs,
// // //     subjects,
// // //     reviewItems,
// // //     concepts,
// // //     totalCorrect,
// // //     totalQuestions,
// // //     overallPercentage,
// // //     examContent
// // //   } = useExamData(params);
  
// // //   const {
// // //     activeTab,
// // //     setActiveTab,
// // //     pinnedQuestions,
// // //     togglePinQuestion,
// // //     selectedSubject,
// // //     simulatorStarted,
// // //     mcqAnswers,
// // //     handleMcqOptionClick,
// // //     reviewAnswers,
// // //     toggleReviewAnswer,
// // //     searchTerm,
// // //     handleSearchChange,
// // //     reviewFilter,
// // //     setReviewFilter,
// // //     filterReviewItems,
// // //     handleSubjectClick,
// // //     handleStartSimulator,
// // //     handleBackToSubjects
// // //   } = useExamState();

// // //   // Loading state
// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // //       </div>
// // //     );
// // //   }

// // //   // Not found state
// // //   if (!exam) {
// // //     return (
// // //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// // //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // //         <button 
// // //           onClick={() => router.push('/exams')}
// // //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // //         >
// // //           Back to Exam List
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   // Filter review items based on the current filter and search term
// // //   const filteredReviews = filterReviewItems(reviewItems);

// // //   return (
// // //     <ExamDetailLayout
// // //       examName={exam.name}
// // //       totalCorrect={totalCorrect}
// // //       totalQuestions={totalQuestions}
// // //       overallPercentage={overallPercentage}
// // //       searchTerm={searchTerm}
// // //       onSearchChange={handleSearchChange}
// // //       activeTab={activeTab}
// // //       setActiveTab={setActiveTab}
// // //     >
// // //       {/* Study Tab */}
// // //       {activeTab === 'study' && (
// // //         !selectedSubject ? (
// // //           <div className="space-y-6">
// // //             {/* Intro card with explanation */}
// // //             <div className="bg-white rounded-lg shadow-sm p-6 border border-blue-100">
// // //               <h2 className="text-xl font-bold text-blue-800 mb-3">Welcome to Your Study Space</h2>
// // //               <p className="text-gray-700 mb-4">
// // //                 This is your personalized study area to prepare for your upcoming exams. Review key concepts, practice with questions, and track your progress.
// // //               </p>
              
// // //               <div className="flex justify-between items-center mt-4">
// // //                 <div className="text-sm text-gray-500">Select a topic below to get started</div>
// // //                 <Link 
// // //                   href="http://localhost:3000/exam-simulator"
// // //                   className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
// // //                 >
// // //                   Go to Exam Simulator
// // //                 </Link>
// // //               </div>
// // //             </div>
          
// // //             <SubjectSelector 
// // //               subjects={subjects} 
// // //               onSubjectSelect={handleSubjectClick} 
// // //             />
// // //           </div>
// // //         ) : !simulatorStarted ? (
// // //           <SubjectDetail 
// // //             subject={selectedSubject} 
// // //             onBack={handleBackToSubjects} 
// // //             onStart={handleStartSimulator}
// // //             mode="study"
// // //           />
// // //         ) : (
// // //           <QuizSimulator 
// // //             mcqs={mcqs}
// // //             subject={selectedSubject}
// // //             onBack={handleBackToSubjects}
// // //             mcqAnswers={mcqAnswers}
// // //             onMcqOptionClick={handleMcqOptionClick}
// // //             pinnedQuestions={pinnedQuestions}
// // //             onTogglePin={togglePinQuestion}
// // //           />
// // //         )
// // //       )}
      
// // //       {/* Simulator Tab */}
// // //       {activeTab === 'simulator' && (
// // //         !selectedSubject ? (
// // //           <div className="space-y-6">
// // //             {/* Intro card with explanation about the simulator */}
// // //             <div className="bg-white rounded-lg shadow-sm p-6 border border-blue-100">
// // //               <h2 className="text-xl font-bold text-blue-800 mb-3">Exam Simulator</h2>
// // //               <p className="text-gray-700 mb-2">
// // //                 Our exam simulator creates a realistic exam environment to help you:
// // //               </p>
// // //               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 ml-2">
// // //                 <li>Assess your current knowledge level</li>
// // //                 <li>Predict your potential exam score</li>
// // //                 <li>Identify knowledge gaps before the real exam</li>
// // //                 <li>Build test-taking stamina and confidence</li>
// // //               </ul>
              
// // //               <div className="flex flex-col sm:flex-row gap-4 mt-6">
// // //                 <Link 
// // //                   href="http://localhost:3000/exam-simulator"
// // //                   className="px-6 py-3 bg-green-600 text-white rounded-md text-center font-medium hover:bg-green-700 transition shadow-sm"
// // //                 >
// // //                   Take Full Exam Simulation
// // //                 </Link>
// // //                 <div className="text-sm text-gray-500 flex items-center sm:ml-2">
// // //                   Or select a topic below for focused practice
// // //                 </div>
// // //               </div>
// // //             </div>
          
// // //             <SubjectSelector 
// // //               subjects={subjects} 
// // //               onSubjectSelect={handleSubjectClick} 
// // //             />
// // //           </div>
// // //         ) : !simulatorStarted ? (
// // //           <SubjectDetail 
// // //             subject={selectedSubject} 
// // //             onBack={handleBackToSubjects} 
// // //             onStart={handleStartSimulator}
// // //             mode="simulator"
// // //           />
// // //         ) : (
// // //           <QuizSimulator 
// // //             mcqs={mcqs}
// // //             subject={selectedSubject}
// // //             onBack={handleBackToSubjects}
// // //             mcqAnswers={mcqAnswers}
// // //             onMcqOptionClick={handleMcqOptionClick}
// // //             pinnedQuestions={pinnedQuestions}
// // //             onTogglePin={togglePinQuestion}
// // //           />
// // //         )
// // //       )}
      
// // //       {/* Review Tab */}
// // //       {activeTab === 'review' && (
// // //         <div className="space-y-6">
// // //           {/* Exam Simulator button at top of Review tab */}
// // //           <div className="flex justify-end">
// // //             <Link 
// // //               href="http://localhost:3000/exam-simulator"
// // //               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm"
// // //             >
// // //               Open Exam Simulator
// // //             </Link>
// // //           </div>
        
// // //           <ReviewTab
// // //             reviewItems={filteredReviews}
// // //             reviewFilter={reviewFilter}
// // //             setReviewFilter={setReviewFilter}
// // //             reviewAnswers={reviewAnswers}
// // //             toggleReviewAnswer={toggleReviewAnswer}
// // //             setActiveTab={setActiveTab}
// // //           />
// // //         </div>
// // //       )}
      
// // //       {/* Concepts Tab */}
// // //       {activeTab === 'concepts' && (
// // //         <div className="space-y-6">
// // //           {/* Exam Simulator button at top of Concepts tab */}
// // //           <div className="flex justify-end">
// // //             <Link 
// // //               href="http://localhost:3000/exam-simulator"
// // //               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm"
// // //             >
// // //               Open Exam Simulator
// // //             </Link>
// // //           </div>
        
// // //           <ConceptsTabContent concepts={concepts} />
// // //         </div>
// // //       )}
      
// // //       {/* Chat Tab */}
// // //       {activeTab === 'chat' && (
// // //         <div className="space-y-6">
// // //           {/* Exam Simulator button at top of Chat tab */}
// // //           <div className="flex justify-end">
// // //             <Link 
// // //               href="http://localhost:3000/exam-simulator"
// // //               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm"
// // //             >
// // //               Open Exam Simulator
// // //             </Link>
// // //           </div>
          
// // //           <Chat />
// // //         </div>
// // //       )}
      
// // //       {/* Profile Tab */}
// // //       {activeTab === 'profile' && (
// // //         <div className="space-y-6">
// // //           {/* Exam Simulator button at top of Profile tab */}
// // //           <div className="flex justify-end">
// // //             <Link 
// // //               href="http://localhost:3000/exam-simulator"
// // //               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm"
// // //             >
// // //               Open Exam Simulator
// // //             </Link>
// // //           </div>
          
// // //           <Profile />
// // //         </div>
// // //       )}
// // //     </ExamDetailLayout>
// // //   );
// // // }
// // 'use client';

// // import { useRouter } from 'next/navigation';
// // import dynamic from 'next/dynamic';
// // import Link from 'next/link';
// // import EmptyState from '@/components/EmptyState';
// // import ExamDetailLayout from '@/components/v1/ExamDetailLayout';
// // import SubjectSelector from '@/components/v1/SubjectSelector';
// // import SubjectDetail from '@/components/v1/SubjectDetail';
// // import { useExamData } from '@/app/hooks/useExamData';
// // import { useExamState } from '@/app/hooks/useExamState';

// // // Dynamically import components that might not be used right away
// // const QuizSimulator = dynamic(() => import('@/components/v1/QuizSimulator'));
// // const StudyTab = dynamic(() => import('@/components/v1/StudyTab'));
// // const ReviewTab = dynamic(() => import('@/components/v1/ReviewTab'));
// // const ConceptsTabContent = dynamic(() => import('@/components/v1/ConceptsTabContent'));
// // const Profile = dynamic(() => import('@/components/v1/Profile'));
// // const Chat = dynamic(() => import('@/components/v1/Chat'));

// // export default function ExamDetailPage({ params }) {
// //   const router = useRouter();
  
// //   // Get data and state from custom hooks
// //   const {
// //     exam,
// //     loading,
// //     mcqs,
// //     subjects,
// //     reviewItems,
// //     concepts,
// //     totalCorrect,
// //     totalQuestions,
// //     overallPercentage,
// //     examContent
// //   } = useExamData(params);
  
// //   const {
// //     activeTab,
// //     setActiveTab,
// //     pinnedQuestions,
// //     togglePinQuestion,
// //     selectedSubject,
// //     simulatorStarted,
// //     mcqAnswers,
// //     handleMcqOptionClick,
// //     reviewAnswers,
// //     toggleReviewAnswer,
// //     searchTerm,
// //     handleSearchChange,
// //     reviewFilter,
// //     setReviewFilter,
// //     filterReviewItems,
// //     handleSubjectClick,
// //     handleStartSimulator,
// //     handleBackToSubjects
// //   } = useExamState();

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //       </div>
// //     );
// //   }

// //   // Not found state
// //   if (!exam) {
// //     return (
// //       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
// //         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// //         <button 
// //           onClick={() => router.push('/exams')}
// //           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// //         >
// //           Back to Exam List
// //         </button>
// //       </div>
// //     );
// //   }

// //   // Filter review items based on the current filter and search term
// //   const filteredReviews = filterReviewItems(reviewItems);

// //   return (
// //     <ExamDetailLayout
// //       examName={exam.name}
// //       totalCorrect={totalCorrect}
// //       totalQuestions={totalQuestions}
// //       overallPercentage={overallPercentage}
// //       searchTerm={searchTerm}
// //       onSearchChange={handleSearchChange}
// //       activeTab={activeTab}
// //       setActiveTab={setActiveTab}
// //     >
// //       {/* Study Tab */}
// //       {activeTab === 'study' && (
// //         !selectedSubject ? (
// //           <SubjectSelector 
// //             subjects={subjects} 
// //             onSubjectSelect={handleSubjectClick} 
// //           />
// //         ) : !simulatorStarted ? (
// //           <SubjectDetail 
// //             subject={selectedSubject} 
// //             onBack={handleBackToSubjects} 
// //             onStart={handleStartSimulator}
// //             mode="study"
// //           />
// //         ) : (
// //           <QuizSimulator 
// //             mcqs={mcqs}
// //             subject={selectedSubject}
// //             onBack={handleBackToSubjects}
// //             mcqAnswers={mcqAnswers}
// //             onMcqOptionClick={handleMcqOptionClick}
// //             pinnedQuestions={pinnedQuestions}
// //             onTogglePin={togglePinQuestion}
// //           />
// //         )
// //       )}
      
// //       {/* Simulator Tab */}
// //       {activeTab === 'simulator' && (
// //         !selectedSubject ? (
// //           <div className="space-y-6">
// //             {/* Intro card with explanation about the simulator */}
// //             <div className="bg-white rounded-lg shadow-sm p-6 border border-blue-100">
// //               <h2 className="text-xl font-bold text-blue-800 mb-3">Exam Simulator</h2>
// //               <p className="text-gray-700 mb-2">
// //                 Our exam simulator creates a realistic exam environment to help you:
// //               </p>
// //               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 ml-2">
// //                 <li>Assess your current knowledge level</li>
// //                 <li>Predict your potential exam score</li>
// //                 <li>Identify knowledge gaps before the real exam</li>
// //                 <li>Build test-taking stamina and confidence</li>
// //               </ul>
              
// //               <div className="flex flex-col sm:flex-row gap-4 mt-6">
// //                 <Link 
// //                   href="http://localhost:3000/exam-simulator"
// //                   className="px-6 py-3 bg-green-600 text-white rounded-md text-center font-medium hover:bg-green-700 transition shadow-sm"
// //                 >
// //                   Take Full Exam Simulation
// //                 </Link>
// //                 <div className="text-sm text-gray-500 flex items-center sm:ml-2">
// //                   Or select a topic below for focused practice
// //                 </div>
// //               </div>
// //             </div>
          
// //             <SubjectSelector 
// //               subjects={subjects} 
// //               onSubjectSelect={handleSubjectClick} 
// //             />
// //           </div>
// //         ) : !simulatorStarted ? (
// //           <SubjectDetail 
// //             subject={selectedSubject} 
// //             onBack={handleBackToSubjects} 
// //             onStart={handleStartSimulator}
// //             mode="simulator"
// //           />
// //         ) : (
// //           <QuizSimulator 
// //             mcqs={mcqs}
// //             subject={selectedSubject}
// //             onBack={handleBackToSubjects}
// //             mcqAnswers={mcqAnswers}
// //             onMcqOptionClick={handleMcqOptionClick}
// //             pinnedQuestions={pinnedQuestions}
// //             onTogglePin={togglePinQuestion}
// //           />
// //         )
// //       )}
      
// //       {/* Review Tab */}
// //       {activeTab === 'review' && (
// //         <ReviewTab
// //           reviewItems={filteredReviews}
// //           reviewFilter={reviewFilter}
// //           setReviewFilter={setReviewFilter}
// //           reviewAnswers={reviewAnswers}
// //           toggleReviewAnswer={toggleReviewAnswer}
// //           setActiveTab={setActiveTab}
// //         />
// //       )}
      
// //       {/* Concepts Tab */}
// //       {activeTab === 'concepts' && (
// //         <ConceptsTabContent concepts={concepts} />
// //       )}
      
// //       {/* Chat Tab */}
// //       {activeTab === 'chat' && <Chat />}
      
// //       {/* Profile Tab */}
// //       {activeTab === 'profile' && <Profile />}
// //     </ExamDetailLayout>
// //   );
// // }
// 'use client';

// import { useRouter } from 'next/navigation';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import EmptyState from '@/components/EmptyState';
// import ExamDetailLayout from '@/components/v1/ExamDetailLayout';
// import SubjectSelector from '@/components/v1/SubjectSelector';
// import SubjectDetail from '@/components/v1/SubjectDetail';
// import { useExamData } from '@/app/hooks/useExamData';
// import { useExamState } from '@/app/hooks/useExamState';

// // Dynamically import components that might not be used right away
// const QuizSimulator = dynamic(() => import('@/components/v1/QuizSimulator'));
// const StudyTab = dynamic(() => import('@/components/v1/StudyTab'));
// const ReviewTab = dynamic(() => import('@/components/v1/ReviewTab'));
// const ConceptsTabContent = dynamic(() => import('@/components/v1/ConceptsTabContent'));
// const Profile = dynamic(() => import('@/components/v1/Profile'));
// const Chat = dynamic(() => import('@/components/v1/Chat'));

// export default function ExamDetailPage({ params }) {
//   const router = useRouter();
  
//   // Get data and state from custom hooks
//   const {
//     exam,
//     loading,
//     mcqs,
//     subjects,
//     reviewItems,
//     concepts,
//     totalCorrect,
//     totalQuestions,
//     overallPercentage,
//     examContent
//   } = useExamData(params);
  
//   const {
//     activeTab,
//     setActiveTab,
//     pinnedQuestions,
//     togglePinQuestion,
//     selectedSubject,
//     simulatorStarted,
//     mcqAnswers,
//     handleMcqOptionClick,
//     reviewAnswers,
//     toggleReviewAnswer,
//     searchTerm,
//     handleSearchChange,
//     reviewFilter,
//     setReviewFilter,
//     filterReviewItems,
//     handleSubjectClick,
//     handleStartSimulator,
//     handleBackToSubjects
//   } = useExamState();

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   // Not found state
//   if (!exam) {
//     return (
//       <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
//         <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
//         <button 
//           onClick={() => router.push('/exams')}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//         >
//           Back to Exam List
//         </button>
//       </div>
//     );
//   }

//   // Filter review items based on the current filter and search term
//   const filteredReviews = filterReviewItems(reviewItems);

//   return (
//     <ExamDetailLayout
//       examName={exam.name}
//       totalCorrect={totalCorrect}
//       totalQuestions={totalQuestions}
//       overallPercentage={overallPercentage}
//       searchTerm={searchTerm}
//       onSearchChange={handleSearchChange}
//       activeTab={activeTab}
//       setActiveTab={setActiveTab}
//     >
//       {/* Study Tab */}
//       {activeTab === 'study' && (
//         !selectedSubject ? (
//           <SubjectSelector 
//             subjects={subjects} 
//             onSubjectSelect={handleSubjectClick} 
//           />
//         ) : !simulatorStarted ? (
//           <SubjectDetail 
//             subject={selectedSubject} 
//             onBack={handleBackToSubjects} 
//             onStart={handleStartSimulator}
//             mode="study"
//           />
//         ) : (
//           <QuizSimulator 
//             mcqs={mcqs}
//             subject={selectedSubject}
//             onBack={handleBackToSubjects}
//             mcqAnswers={mcqAnswers}
//             onMcqOptionClick={handleMcqOptionClick}
//             pinnedQuestions={pinnedQuestions}
//             onTogglePin={togglePinQuestion}
//           />
//         )
//       )}
      
//       {/* Simulator Tab */}
//       {activeTab === 'simulator' && (
//         !selectedSubject ? (
//           <div className="space-y-6">
//             {/* Intro card with explanation about the simulator */}
//             <div className="bg-white rounded-lg shadow-sm p-6 border border-blue-100">
//               <h2 className="text-xl font-bold text-blue-800 mb-3">Exam Simulator</h2>
//               <p className="text-gray-700 mb-2">
//                 Our exam simulator creates a realistic exam environment to help you:
//               </p>
//               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 ml-2">
//                 <li>Assess your current knowledge level</li>
//                 <li>Predict your potential exam score</li>
//                 <li>Identify knowledge gaps before the real exam</li>
//                 <li>Build test-taking stamina and confidence</li>
//               </ul>
              
//               <div className="flex justify-center mt-8">
//                 <Link 
//                   href="http://localhost:3000/exam-simulator"
//                   className="px-8 py-4 bg-green-600 text-white rounded-md text-center font-medium hover:bg-green-700 transition shadow-md text-lg"
//                 >
//                   Take Full Exam Simulation
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ) : !simulatorStarted ? (
//           <SubjectDetail 
//             subject={selectedSubject} 
//             onBack={handleBackToSubjects} 
//             onStart={handleStartSimulator}
//             mode="simulator"
//           />
//         ) : (
//           <QuizSimulator 
//             mcqs={mcqs}
//             subject={selectedSubject}
//             onBack={handleBackToSubjects}
//             mcqAnswers={mcqAnswers}
//             onMcqOptionClick={handleMcqOptionClick}
//             pinnedQuestions={pinnedQuestions}
//             onTogglePin={togglePinQuestion}
//           />
//         )
//       )}
      
//       {/* Review Tab */}
//       {activeTab === 'review' && (
//         <ReviewTab
//           reviewItems={filteredReviews}
//           reviewFilter={reviewFilter}
//           setReviewFilter={setReviewFilter}
//           reviewAnswers={reviewAnswers}
//           toggleReviewAnswer={toggleReviewAnswer}
//           setActiveTab={setActiveTab}
//         />
//       )}
      
//       {/* Concepts Tab */}
//       {activeTab === 'concepts' && (
//         <ConceptsTabContent concepts={concepts} />
//       )}
      
//       {/* Chat Tab */}
//       {activeTab === 'chat' && <Chat />}
      
//       {/* Profile Tab */}
//       {activeTab === 'profile' && <Profile />}
//     </ExamDetailLayout>
//   );
// }
'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import EmptyState from '@/components/EmptyState';
import ExamDetailLayout from '@/components/v1/ExamDetailLayout';
import SubjectSelector from '@/components/v1/SubjectSelector';
import SubjectDetail from '@/components/v1/SubjectDetail';
import ReviewTab from '@/components/v1/ReviewTab';
import { useExamData } from '@/app/hooks/useExamData';
import { useExamState } from '@/app/hooks/useExamState';

// Dynamically import components that might not be used right away
const QuizSimulator = dynamic(() => import('@/components/v1/QuizSimulator'));
const StudyTab = dynamic(() => import('@/components/v1/StudyTab'));
// Import ReviewTab directly above
const ConceptsTabContent = dynamic(() => import('@/components/v1/ConceptsTabContent'));
const Profile = dynamic(() => import('@/components/v1/Profile'));
const Chat = dynamic(() => import('@/components/v1/Chat'));

export default function ExamDetailPage({ params }) {
  const router = useRouter();
  
  // Get data and state from custom hooks
  const {
    exam,
    loading,
    mcqs,
    subjects,
    reviewItems,
    concepts,
    totalCorrect,
    totalQuestions,
    overallPercentage,
    examContent
  } = useExamData(params);
  
  const {
    activeTab,
    setActiveTab,
    pinnedQuestions,
    togglePinQuestion,
    selectedSubject,
    simulatorStarted,
    mcqAnswers,
    handleMcqOptionClick,
    reviewAnswers,
    toggleReviewAnswer,
    searchTerm,
    handleSearchChange,
    reviewFilter,
    setReviewFilter,
    filterReviewItems,
    handleSubjectClick,
    handleStartSimulator,
    handleBackToSubjects
  } = useExamState();

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Not found state
  if (!exam) {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
        <button 
          onClick={() => router.push('/exams')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back to Exam List
        </button>
      </div>
    );
  }

  // Filter review items based on the current filter and search term
  const filteredReviews = filterReviewItems(reviewItems);

  // Mock MCQs data with more questions for testing
  const mockMcqs = mcqs || [
    {
      id: 1,
      question: "A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. What is the most likely diagnosis?",
      options: [
        { text: "Lambert-Eaton Myasthenic Syndrome", isCorrect: false },
        { text: "Multiple Sclerosis", isCorrect: false },
        { text: "Myasthenia Gravis", isCorrect: true },
        { text: "Guillain-Barré Syndrome", isCorrect: false }
      ],
      explanation: "MG is characterized by fluctuating muscle weakness, ptosis, and improvement with rest/cooling (Ice Pack Test).",
      answer: "Myasthenia Gravis is the correct diagnosis. The condition presents with fatigue-induced muscle weakness that improves with rest. Ocular symptoms like ptosis and diplopia are often the first manifestations.",
      type: "incorrect",
      category: "Neurology",
      date: new Date().toISOString()
    },
    {
      id: 2,
      question: "Which of the following is the most accurate diagnostic test for Myasthenia Gravis?",
      options: [
        { text: "Tensilon (Edrophonium) test", isCorrect: false },
        { text: "Electromyography (EMG)", isCorrect: false },
        { text: "Acetylcholine receptor antibody test", isCorrect: true },
        { text: "Muscle biopsy", isCorrect: false }
      ],
      explanation: "The gold standard for MG diagnosis is ACh receptor antibody detection. The Tensilon test is a rapid screen but not definitive.",
      answer: "The Acetylcholine receptor antibody test is the gold standard for diagnosing Myasthenia Gravis, with high specificity for the condition. While the Tensilon test provides rapid results, it is less specific and serves as a screening tool.",
      type: "pinned",
      category: "Diagnostics",
      date: new Date().toISOString()
    },
    {
      id: 3,
      question: "Which of the following medications can worsen Myasthenia Gravis symptoms?",
      options: [
        { text: "Beta-blockers", isCorrect: false },
        { text: "Aminoglycosides", isCorrect: false },
        { text: "Fluoroquinolones", isCorrect: false },
        { text: "All of the above", isCorrect: true }
      ],
      explanation: "Beta-blockers, aminoglycosides, and fluoroquinolones can all exacerbate MG symptoms by interfering with neuromuscular junction transmission.",
      answer: "All of the above. Beta-blockers, aminoglycosides, and fluoroquinolones can exacerbate MG symptoms by interfering with neuromuscular junction transmission. These medications should be used with caution in patients with MG.",
      type: "incorrect",
      category: "Pharmacology",
      date: new Date().toISOString()
    },
    {
      id: 4,
      question: "What is the first-line treatment for Myasthenia Gravis?",
      options: [
        { text: "Pyridostigmine", isCorrect: true },
        { text: "Prednisone", isCorrect: false },
        { text: "Plasmapheresis", isCorrect: false },
        { text: "Thymectomy", isCorrect: false }
      ],
      explanation: "Pyridostigmine (Mestinon) is an acetylcholinesterase inhibitor that is the first-line symptomatic treatment for MG.",
      answer: "Pyridostigmine (Mestinon) is the first-line treatment for Myasthenia Gravis. As an acetylcholinesterase inhibitor, it increases acetylcholine availability at the neuromuscular junction, improving muscle strength in MG patients.",
      type: "pinned",
      category: "Treatment",
      date: new Date().toISOString()
    },
    {
      id: 5,
      question: "A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. What is the most likely diagnosis?",
      options: [
        { text: "Lambert-Eaton Myasthenic Syndrome", isCorrect: false },
        { text: "Multiple Sclerosis", isCorrect: false },
        { text: "Myasthenia Gravis", isCorrect: true },
        { text: "Guillain-Barré Syndrome", isCorrect: false }
      ],
      explanation: "MG is characterized by fluctuating muscle weakness, ptosis, and improvement with rest/cooling (Ice Pack Test).",
      answer: "Myasthenia Gravis is the correct diagnosis. The condition presents with fatigue-induced muscle weakness that improves with rest. Ocular symptoms like ptosis and diplopia are often the first manifestations.",
      type: "incorrect",
      category: "Neurology",
      date: new Date().toISOString()
    },
    {
      id: 6,
      question: "Which of the following is the most accurate diagnostic test for Myasthenia Gravis?",
      options: [
        { text: "Tensilon (Edrophonium) test", isCorrect: false },
        { text: "Electromyography (EMG)", isCorrect: false },
        { text: "Acetylcholine receptor antibody test", isCorrect: true },
        { text: "Muscle biopsy", isCorrect: false }
      ],
      explanation: "The gold standard for MG diagnosis is ACh receptor antibody detection. The Tensilon test is a rapid screen but not definitive.",
      answer: "The Acetylcholine receptor antibody test is the gold standard for diagnosing Myasthenia Gravis, with high specificity for the condition. While the Tensilon test provides rapid results, it is less specific and serves as a screening tool.",
      type: "pinned",
      category: "Diagnostics",
      date: new Date().toISOString()
    }
  ];

  return (
    <ExamDetailLayout
      examName={exam.name}
      totalCorrect={totalCorrect}
      totalQuestions={totalQuestions}
      overallPercentage={overallPercentage}
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {/* Study Tab */}
      {activeTab === 'study' && (
        !selectedSubject ? (
          <SubjectSelector 
            subjects={subjects} 
            onSubjectSelect={handleSubjectClick} 
          />
        ) : !simulatorStarted ? (
          <SubjectDetail 
            subject={selectedSubject} 
            onBack={handleBackToSubjects} 
            onStart={handleStartSimulator}
            mode="study"
          />
        ) : (
          <QuizSimulator 
            mcqs={mcqs}
            subject={selectedSubject}
            onBack={handleBackToSubjects}
            mcqAnswers={mcqAnswers}
            onMcqOptionClick={handleMcqOptionClick}
            pinnedQuestions={pinnedQuestions}
            onTogglePin={togglePinQuestion}
          />
        )
      )}
      
      {/* Simulator Tab */}
      {activeTab === 'simulator' && (
        !selectedSubject ? (
          <div className="space-y-6">
            {/* Intro card with explanation about the simulator */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-blue-100">
              <h2 className="text-xl font-bold text-blue-800 mb-3">Exam Simulator</h2>
              <p className="text-gray-700 mb-2">
                Our exam simulator creates a realistic exam environment to help you:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 ml-2">
                <li>Assess your current knowledge level</li>
                <li>Predict your potential exam score</li>
                <li>Identify knowledge gaps before the real exam</li>
                <li>Build test-taking stamina and confidence</li>
              </ul>
              
              <div className="flex justify-center mt-8">
                <Link 
                  href="http://localhost:3000/exam-simulator"
                  className="px-8 py-4 bg-green-600 text-white rounded-md text-center font-medium hover:bg-green-700 transition shadow-md text-lg"
                >
                  Take Full Exam Simulation
                </Link>
              </div>
            </div>
          </div>
        ) : !simulatorStarted ? (
          <SubjectDetail 
            subject={selectedSubject} 
            onBack={handleBackToSubjects} 
            onStart={handleStartSimulator}
            mode="simulator"
          />
        ) : (
          <QuizSimulator 
            mcqs={mcqs}
            subject={selectedSubject}
            onBack={handleBackToSubjects}
            mcqAnswers={mcqAnswers}
            onMcqOptionClick={handleMcqOptionClick}
            pinnedQuestions={pinnedQuestions}
            onTogglePin={togglePinQuestion}
          />
        )
      )}
      
      {/* Review Tab */}
      {activeTab === 'review' && (
        <ReviewTab
          reviewItems={mockMcqs}
          reviewFilter={reviewFilter}
          setReviewFilter={setReviewFilter}
          reviewAnswers={reviewAnswers}
          toggleReviewAnswer={toggleReviewAnswer}
          setActiveTab={setActiveTab}
        />
      )}
      
      {/* Concepts Tab */}
      {activeTab === 'concepts' && (
        <ConceptsTabContent concepts={concepts} />
      )}
      
      {/* Chat Tab */}
      {activeTab === 'chat' && <Chat />}
      
      {/* Profile Tab */}
      {activeTab === 'profile' && <Profile />}
    </ExamDetailLayout>
  );
}
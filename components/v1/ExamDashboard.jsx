// 'use client';
// import { useState } from 'react';
// import HeroSection from './components/HeroSection';
// import TabBar from './components/TabBar';
// import CategoryList from './components/CategoryList';
// import CategoryDetail from './components/CategoryDetail';
// import EmptyState from '../../components/EmptyState';

// export default function ExamDashboard() {
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
//     }
//   ]);

//   const [assessmentCategory, setAssessmentCategory] = useState({
//     id: 4,
//     name: "Random Assessment Topic",
//     correct: 0,
//     total: 0,
//     percentage: 0,
//     status: "mid"
//   });

//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('study'); // 'study', 'assessment', 'incorrect', 'pinned', 'mynotes'
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const examName = "Medical Board Examination";
  
//   // Overall score calculation
//   const totalCorrect = 16;
//   const totalQuestions = 26;
//   const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

//   // Filter categories based on search term
//   const filteredCategories = examCategories.filter(category =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handler for starting assessment or review
//   const handleStartClick = (category) => {
//     setSelectedCategory(category);
//   };
  
//   // Handler to go back to category selection
//   const handleBackClick = () => {
//     setSelectedCategory(null);
//   };

//   // Handler for search term changes
//   const handleSearchChange = (value) => {
//     setSearchTerm(value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section Component */}
//       <HeroSection 
//         examName={examName} 
//         totalCorrect={totalCorrect} 
//         totalQuestions={totalQuestions} 
//         overallPercentage={overallPercentage}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />

//       <main className="container mx-auto px-4 py-6">
//         {/* Tab Bar Component */}
//         <TabBar 
//           activeTab={activeTab} 
//           setActiveTab={setActiveTab} 
//         />

//         {/* If a category is selected, show the category detail view */}
//         {selectedCategory && (
//           <CategoryDetail 
//             category={selectedCategory}
//             activeTab={activeTab}
//             onBackClick={handleBackClick}
//           />
//         )}

//         {/* If no category is selected, show the category list view */}
//         {!selectedCategory && (
//           <div className="max-w-2xl mx-auto space-y-4">
//             {/* Study Mode Tab */}
//             {activeTab === 'study' && (
//               <CategoryList 
//                 categories={filteredCategories} 
//                 onCategoryClick={handleStartClick}
//                 searchTerm={searchTerm}
//                 onClearSearch={() => setSearchTerm('')}
//               />
//             )}

//             {/* Assessment Tab */}
//             {activeTab === 'assessment' && (
//               <>
//                 <CategoryList 
//                   categories={[assessmentCategory, ...filteredCategories]} 
//                   onCategoryClick={handleStartClick}
//                   variant="assessment"
//                 />
//               </>
//             )}

//             {/* Incorrect Tab */}
//             {activeTab === 'incorrect' && (
//               <EmptyState 
//                 icon="✅"
//                 title="No Incorrect Questions"
//                 description="Answer questions in study mode to see your incorrect answers here."
//                 buttonText="Practice More"
//                 buttonAction={() => setActiveTab('assessment')}
//               />
//             )}

//             {/* Pinned Tab */}
//             {activeTab === 'pinned' && (
//               <EmptyState 
//                 icon="📌"
//                 title="No Pinned Questions"
//                 description="Pin important questions during your study sessions to see them here."
//                 buttonText="Browse Topics"
//                 buttonAction={() => setActiveTab('study')}
//               />
//             )}

//             {/* My Notes Tab */}
//             {activeTab === 'mynotes' && (
//               <EmptyState 
//                 icon="📝"
//                 title="No Notes"
//                 description="You haven't created any notes yet. Notes can help you consolidate your learning."
//                 buttonText="Create Note"
//                 buttonAction={() => console.log('Create note')}
//               />
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
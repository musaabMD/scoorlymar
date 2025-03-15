// // // 'use client';
// // // import React, { useState } from 'react';
// // // import Link from 'next/link';

// // // export default function SubjectContent({ subject, exam, params }) {
// // //   const [activeTab, setActiveTab] = useState('overview');
// // //   const { categorySlug, examSlug, subjectSlug } = params;
  
// // //   const concepts = subject?.concepts || [];
  
// // //   return (
// // //     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
// // //       {/* Tabs */}
// // //       <div className="flex border-b">
// // //         <button
// // //           onClick={() => setActiveTab('overview')}
// // //           className={`px-6 py-3 font-medium text-sm ${
// // //             activeTab === 'overview'
// // //               ? 'border-b-2 border-blue-600 text-blue-600'
// // //               : 'text-gray-500 hover:text-gray-700'
// // //           }`}
// // //         >
// // //           Overview
// // //         </button>
// // //         <button
// // //           onClick={() => setActiveTab('practice')}
// // //           className={`px-6 py-3 font-medium text-sm ${
// // //             activeTab === 'practice'
// // //               ? 'border-b-2 border-blue-600 text-blue-600'
// // //               : 'text-gray-500 hover:text-gray-700'
// // //           }`}
// // //         >
// // //           Practice
// // //         </button>
// // //         <button
// // //           onClick={() => setActiveTab('flashcards')}
// // //           className={`px-6 py-3 font-medium text-sm ${
// // //             activeTab === 'flashcards'
// // //               ? 'border-b-2 border-blue-600 text-blue-600'
// // //               : 'text-gray-500 hover:text-gray-700'
// // //           }`}
// // //         >
// // //           Flashcards
// // //         </button>
// // //       </div>
      
// // //       {/* Tab Content */}
// // //       <div className="p-6">
// // //         {activeTab === 'overview' && (
// // //           <div>
// // //             <h2 className="text-xl font-semibold mb-4">Subject Overview</h2>
// // //             <p className="text-gray-600 mb-6">
// // //               Study materials for {subject.subject} in the {exam.name} exam.
// // //             </p>
            
// // //             {subject.total_questions ? (
// // //               <div className="mb-6">
// // //                 <div className="flex items-center justify-between border-b pb-2 mb-2">
// // //                   <span className="font-medium">Available Questions:</span>
// // //                   <span>{subject.total_questions}</span>
// // //                 </div>
// // //               </div>
// // //             ) : null}
            
// // //             <div className="flex gap-4 mt-8">
// // //               <button 
// // //                 onClick={() => setActiveTab('practice')}
// // //                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// // //               >
// // //                 Start Practice
// // //               </button>
// // //               <button 
// // //                 onClick={() => setActiveTab('flashcards')}
// // //                 className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
// // //               >
// // //                 View Flashcards
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         {activeTab === 'practice' && (
// // //           <div>
// // //             <h2 className="text-xl font-semibold mb-4">Practice Questions</h2>
// // //             <p className="text-gray-600 mb-6">
// // //               Test your knowledge with practice questions for {subject.subject}.
// // //             </p>
            
// // //             {/* Placeholder for practice UI */}
// // //             <div className="text-center py-12 bg-gray-50 rounded-lg">
// // //               <p className="text-lg text-gray-700">Practice questions are coming soon!</p>
// // //               <p className="text-gray-500 mt-2">Check back later for updates.</p>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         {activeTab === 'flashcards' && (
// // //           <div>
// // //             <h2 className="text-xl font-semibold mb-4">Flashcards</h2>
            
// // //             {concepts.length > 0 ? (
// // //               <div className="grid gap-4">
// // //                 {concepts.map((concept, index) => (
// // //                   <div key={concept.id || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
// // //                     <h3 className="font-medium text-lg mb-2">{concept.front || `Concept ${index + 1}`}</h3>
// // //                     <p className="text-gray-600">{concept.back || "No description available."}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="text-center py-12 bg-gray-50 rounded-lg">
// // //                 <p className="text-lg text-gray-700">No flashcards available yet</p>
// // //                 <p className="text-gray-500 mt-2">Check back later for updates.</p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // 'use client';
// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { BookOpen, FileText, ListChecks } from 'lucide-react';

// // export default function SubjectContent({ subject, exam, params }) {
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const { categorySlug, examSlug, subjectSlug } = params;
  
// //   const concepts = subject?.concepts || [];
  
// //   return (
// //     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
// //       {/* Tabs */}
// //       <div className="flex border-b">
// //         <button
// //           onClick={() => setActiveTab('overview')}
// //           className={`px-6 py-3 font-medium text-sm ${
// //             activeTab === 'overview'
// //               ? 'border-b-2 border-blue-600 text-blue-600'
// //               : 'text-gray-500 hover:text-gray-700'
// //           }`}
// //         >
// //           Overview
// //         </button>
// //         <button
// //           onClick={() => setActiveTab('practice')}
// //           className={`px-6 py-3 font-medium text-sm ${
// //             activeTab === 'practice'
// //               ? 'border-b-2 border-blue-600 text-blue-600'
// //               : 'text-gray-500 hover:text-gray-700'
// //           }`}
// //         >
// //           Practice
// //         </button>
// //         <button
// //           onClick={() => setActiveTab('flashcards')}
// //           className={`px-6 py-3 font-medium text-sm ${
// //             activeTab === 'flashcards'
// //               ? 'border-b-2 border-blue-600 text-blue-600'
// //               : 'text-gray-500 hover:text-gray-700'
// //           }`}
// //         >
// //           Flashcards
// //         </button>
// //       </div>
      
// //       {/* Tab Content */}
// //       <div className="p-6">
// //         {activeTab === 'overview' && (
// //           <div>
// //             <div className="flex items-center mb-4">
// //               <BookOpen className="text-blue-600 mr-2" size={24} />
// //               <h2 className="text-xl font-semibold">Subject Overview</h2>
// //             </div>
            
// //             <p className="text-gray-600 mb-6">
// //               Study materials for {subject.subject} in the {exam.name} exam.
// //               {subject.description && (
// //                 <>
// //                   <br /><br />
// //                   {subject.description}
// //                 </>
// //               )}
// //             </p>
            
// //             {subject.total_questions ? (
// //               <div className="mb-6">
// //                 <div className="flex items-center border-b pb-2 mb-2">
// //                   <FileText className="text-gray-500 mr-2" size={16} />
// //                   <span className="font-medium mr-2">Available Questions:</span>
// //                   <span className="font-bold">{subject.total_questions}</span>
// //                 </div>
// //               </div>
// //             ) : null}
            
// //             <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
// //               <h3 className="font-semibold text-blue-800 mb-2">Get Started</h3>
// //               <p className="text-blue-700 text-sm mb-3">
// //                 You can practice with questions specific to this subject or review flashcards to prepare for your exam.
// //               </p>
// //             </div>
            
// //             <div className="flex gap-4 mt-8">
// //               <button 
// //                 onClick={() => setActiveTab('practice')}
// //                 className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //               >
// //                 <ListChecks size={18} className="mr-2" />
// //                 Start Practice
// //               </button>
// //               <button 
// //                 onClick={() => setActiveTab('flashcards')}
// //                 className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
// //               >
// //                 <BookOpen size={18} className="mr-2" />
// //                 View Flashcards
// //               </button>
// //             </div>
// //           </div>
// //         )}
        
// //         {activeTab === 'practice' && (
// //           <div>
// //             <h2 className="text-xl font-semibold mb-4">Practice Questions</h2>
// //             <p className="text-gray-600 mb-6">
// //               Test your knowledge with practice questions for {subject.subject}.
// //             </p>
            
// //             {/* Practice question options */}
// //             <div className="grid md:grid-cols-2 gap-6 mb-8">
// //               <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
// //                 <h3 className="font-semibold text-lg mb-2">Quick Practice</h3>
// //                 <p className="text-gray-600 text-sm mb-4">
// //                   Test your knowledge with a random selection of questions from this subject.
// //                 </p>
// //                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
// //                   Start Quick Practice
// //                 </button>
// //               </div>
              
// //               <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
// //                 <h3 className="font-semibold text-lg mb-2">Full Test</h3>
// //                 <p className="text-gray-600 text-sm mb-4">
// //                   Take a timed test with all questions from this subject.
// //                 </p>
// //                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
// //                   Start Full Test
// //                 </button>
// //               </div>
// //             </div>
            
// //             {/* Placeholder for no questions */}
// //             {!subject.total_questions || subject.total_questions === 0 ? (
// //               <div className="text-center py-12 bg-gray-50 rounded-lg">
// //                 <p className="text-lg text-gray-700">No practice questions available yet</p>
// //                 <p className="text-gray-500 mt-2">Check back later for updates.</p>
// //               </div>
// //             ) : null}
// //           </div>
// //         )}
        
// //         {activeTab === 'flashcards' && (
// //           <div>
// //             <h2 className="text-xl font-semibold mb-4">Flashcards</h2>
            
// //             {concepts.length > 0 ? (
// //               <div className="grid gap-4">
// //                 {concepts.map((concept, index) => (
// //                   <div key={concept.id || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
// //                     <h3 className="font-medium text-lg mb-2">{concept.front || `Concept ${index + 1}`}</h3>
// //                     <p className="text-gray-600">{concept.back || "No description available."}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="text-center py-12 bg-gray-50 rounded-lg">
// //                 <p className="text-lg text-gray-700">No flashcards available yet</p>
// //                 <p className="text-gray-500 mt-2">Check back later for updates.</p>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import React, { useState } from 'react';
// import { BookOpen, FileText, ListChecks } from 'lucide-react';

// export default function SubjectContent({ subject, exam, params }) {
//   const [activeTab, setActiveTab] = useState('practice');
//   const { categorySlug, examSlug, subjectSlug } = params;
  
//   const concepts = subject?.concepts || [];
  
//   return (
//     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//       {/* Tabs */}
//       <div className="flex border-b">
//         <button
//           onClick={() => setActiveTab('practice')}
//           className={`px-6 py-3 font-medium text-sm ${
//             activeTab === 'practice'
//               ? 'border-b-2 border-blue-600 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Questions
//         </button>
//         <button
//           onClick={() => setActiveTab('concepts')}
//           className={`px-6 py-3 font-medium text-sm ${
//             activeTab === 'concepts'
//               ? 'border-b-2 border-blue-600 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Concepts
//         </button>
//       </div>
      
//       {/* Tab Content */}
//       <div className="p-6">
//         {activeTab === 'practice' && (
//           <div>
//             <div className="flex items-center mb-6">
//               <ListChecks className="text-blue-600 mr-2" size={24} />
//               <h2 className="text-xl font-semibold">Practice Questions</h2>
//             </div>
            
//             {/* Practice question options */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
//                 <h3 className="font-semibold text-lg mb-2">Quick Practice</h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Test your knowledge with a random selection of questions.
//                 </p>
//                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
//                   Start Quick Practice
//                 </button>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
//                 <h3 className="font-semibold text-lg mb-2">Full Test</h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Take a timed test with all questions from this section.
//                 </p>
//                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
//                   Start Full Test
//                 </button>
//               </div>
//             </div>
            
//             {/* Placeholder for no questions */}
//             {!subject.total_questions || subject.total_questions === 0 ? (
//               <div className="text-center py-12 bg-gray-50 rounded-lg">
//                 <p className="text-lg text-gray-700">No practice questions available yet</p>
//                 <p className="text-gray-500 mt-2">Check back later for updates.</p>
//               </div>
//             ) : (
//               <div className="bg-gray-50 p-4 rounded-lg mt-6">
//                 <div className="flex items-center">
//                   <FileText className="text-gray-500 mr-2" size={16} />
//                   <span className="text-gray-700">This section contains <span className="font-bold">{subject.total_questions}</span> questions</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
        
//         {activeTab === 'concepts' && (
//           <div>
//             <div className="flex items-center mb-6">
//               <BookOpen className="text-blue-600 mr-2" size={24} />
//               <h2 className="text-xl font-semibold">Key Concepts</h2>
//             </div>
            
//             {concepts.length > 0 ? (
//               <div className="grid gap-4">
//                 {concepts.map((concept, index) => (
//                   <div key={concept.id || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
//                     <h3 className="font-medium text-lg mb-2">{concept.front || `Concept ${index + 1}`}</h3>
//                     <p className="text-gray-600">{concept.back || "No description available."}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12 bg-gray-50 rounded-lg">
//                 <p className="text-lg text-gray-700">No concepts available yet</p>
//                 <p className="text-gray-500 mt-2">Check back later for updates.</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

// ConceptItem Component
const ConceptItem = ({ title, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 bg-white">
      <button
        className="w-full text-left p-4 font-medium flex items-center focus:outline-none bg-white"
        onClick={toggleDescription}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white flex items-center justify-center mr-3">
          {index}
        </div>
        <span>{title}</span>
      </button>
      <div 
        className={`pl-16 pr-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Concept Explorer Component
const ConceptExplorer = ({ searchTerm, concepts = [] }) => {
  const [filteredConcepts, setFilteredConcepts] = useState([]);
  
  React.useEffect(() => {
    // Map concepts to the expected format
    const formattedConcepts = concepts.map(concept => ({
      title: concept.front || "Untitled Concept",
      description: concept.back || "No description available."
    }));
    
    // Filter concepts based on search term
    const filtered = formattedConcepts.filter(concept =>
      concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredConcepts(filtered);
  }, [searchTerm, concepts]);

  return (
    <div className="w-full">
      {/* Concepts List */}
      <div>
        {filteredConcepts.length > 0 ? (
          filteredConcepts.map((concept, index) => (
            <ConceptItem 
              key={index} 
              title={concept.title} 
              description={concept.description} 
              index={index + 1} 
            />
          ))
        ) : (
          <Card className="w-full p-8">
            <CardContent className="flex flex-col items-center justify-center">
              <p className="text-center text-gray-500">No concepts found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// MCQView Component
const MCQView = ({ questions, searchTerm }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState(questions || []);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Sample questions for demo purposes
  const sampleQuestions = [
    {
      id: 'q1',
      text: 'A 65-year-old male presents with crushing chest pain radiating to the left arm, diaphoresis, and shortness of breath. Which of the following ECG findings is most consistent with an acute myocardial infarction?',
      subject: 'Cardiology',
      choices: [
        'ST segment elevation in leads V1-V4',
        'T wave inversion in all leads',
        'Prolonged PR interval',
        'Left bundle branch block with QRS widening'
      ],
      correctAnswer: 0,
      explanation: 'ST segment elevation in leads V1-V4 is characteristic of an anterior wall myocardial infarction. The other findings may be present in various cardiac conditions but are not as specific for acute MI.'
    },
    {
      id: 'q2',
      text: 'A 28-year-old female presents with fatigue, weight loss, and heat intolerance. Physical examination reveals proptosis and a diffusely enlarged thyroid. Which laboratory finding would most likely be present?',
      subject: 'Endocrinology',
      choices: [
        'Decreased TSH, increased T4',
        'Increased TSH, decreased T4',
        'Decreased TSH, decreased T4',
        'Increased TSH, increased T4'
      ],
      correctAnswer: 0,
      explanation: 'These symptoms suggest Graves\' disease, an autoimmune disorder causing hyperthyroidism. The classic laboratory finding is decreased TSH due to negative feedback from elevated thyroid hormones (T3 and T4).'
    },
    {
      id: 'q3',
      text: 'A 52-year-old male with a history of hypertension presents with hematuria and flank pain. CT scan reveals a 4cm mass in the left kidney. What is the most likely diagnosis?',
      subject: 'Oncology',
      choices: [
        'Renal cell carcinoma',
        'Transitional cell carcinoma',
        'Wilms tumor',
        'Renal adenoma'
      ],
      correctAnswer: 0,
      explanation: 'The classic triad for renal cell carcinoma is hematuria, flank pain, and a palpable abdominal mass, though this complete presentation is uncommon. In adults, renal masses are most commonly renal cell carcinoma, especially with risk factors like hypertension.'
    }
  ];
  
  const questionsToUse = questions?.length > 0 ? questions : sampleQuestions;
  
  // Filter questions based on search
  React.useEffect(() => {
    let filtered = [...questionsToUse];
    
    // Apply search filter if provided
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(q => 
        q.text.toLowerCase().includes(query) || 
        q.subject?.toLowerCase().includes(query) ||
        q.explanation?.toLowerCase().includes(query)
      );
    }
    
    setFilteredQuestions(filtered);
    
    // Reset question index if it's out of bounds after filtering
    if (currentQuestionIndex >= filtered.length && filtered.length > 0) {
      setCurrentQuestionIndex(0);
    }
  }, [questionsToUse, searchTerm, currentQuestionIndex]);
  
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  
  const handleSelectAnswer = (questionId, selectedIndex) => {
    if (!currentQuestion) return;
    
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    setUserAnswers({
      ...userAnswers,
      [questionId]: {
        selectedIndex,
        isCorrect
      }
    });
    setShowExplanation(true);
  };
  
  const resetQuestion = () => {
    if (currentQuestion) {
      const updatedAnswers = { ...userAnswers };
      delete updatedAnswers[currentQuestion.id];
      setUserAnswers(updatedAnswers);
      setShowExplanation(false);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex + 1]?.id]);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex - 1]?.id]);
    }
  };
  
  if (!currentQuestion) {
    return (
      <Card className="w-full p-8">
        
        <CardContent className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-medium mb-2">No Questions Available</h3>
          <p className="text-gray-600 mb-4">
            {filteredQuestions.length === 0 && questionsToUse.length > 0 
              ? "No questions match your current search."
              : "There are no questions available yet."}
          </p>
        </CardContent>
      </Card>
    );
  }
  
  const selectedAnswerData = userAnswers[currentQuestion.id];
  
  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardContent className="pt-6">
          {/* Question */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700 mb-2">
                {currentQuestion.subject || 'General'}
              </div>
              <div className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700">
                Question {currentQuestionIndex + 1} of {filteredQuestions.length}
              </div>
            </div>
            <h3 className="text-lg font-medium mb-5">{currentQuestion.text}</h3>
            
            <div className="space-y-3">
              {currentQuestion.choices.map((choice, index) => {
                // Determine styling based on selection and correctness
                let bgColor = "bg-white";
                let borderColor = "border-gray-200";
                let textColor = "text-gray-800";
                
                if (selectedAnswerData) {
                  if (index === currentQuestion.correctAnswer) {
                    bgColor = "bg-green-50";
                    borderColor = "border-green-200";
                    textColor = "text-green-800";
                  } else if (index === selectedAnswerData.selectedIndex) {
                    bgColor = "bg-red-50";
                    borderColor = "border-red-200";
                    textColor = "text-red-800";
                  } else {
                    bgColor = "bg-gray-50";
                    textColor = "text-gray-500";
                  }
                }
                
                return (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} flex items-center justify-between transition-colors ${!selectedAnswerData ? "hover:bg-gray-50" : ""}`}
                    onClick={() => handleSelectAnswer(currentQuestion.id, index)}
                    disabled={selectedAnswerData !== undefined}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                      <span>{choice}</span>
                    </div>
                    
                    {selectedAnswerData && index === currentQuestion.correctAnswer && (
                      <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                    
                    {selectedAnswerData && index === selectedAnswerData.selectedIndex && index !== currentQuestion.correctAnswer && (
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Explanation */}
          {showExplanation && (
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <h4 className="font-medium">Explanation</h4>
              </div>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-3">
          <button 
            className="px-3 sm:px-4 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50 text-sm sm:text-base"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          
          <button 
            className="px-3 sm:px-4 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50 text-sm sm:text-base"
            onClick={resetQuestion}
            disabled={!selectedAnswerData}
          >
            Reset
          </button>
        </div>
        
        <button 
          className="px-3 sm:px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-800 disabled:opacity-50 text-sm sm:text-base mt-3 sm:mt-0"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === filteredQuestions.length - 1}
        >
          Next Question
        </button>
      </div>
      
      {/* Question navigation dots */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {filteredQuestions.map((_, index) => {
            const question = filteredQuestions[index];
            const answer = userAnswers[question?.id];
            let bgColor = "bg-gray-200";
            
            if (answer) {
              bgColor = answer.isCorrect ? "bg-green-500" : "bg-red-500";
            }
            
            if (index === currentQuestionIndex) {
              bgColor = answer 
                ? (answer.isCorrect ? "bg-green-700" : "bg-red-700") 
                : "bg-black";
            }
            
            return (
              <button
                key={index}
                className={`w-8 h-8 rounded-full ${bgColor} text-white text-xs font-medium transition-colors`}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowExplanation(!!userAnswers[question?.id]);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main ConceptQuestionsUI component with tabs
const ConceptQuestionsUI = ({ 
  subjectName,
  examName,
  concepts = [],
  totalQuestions = 0
}) => {
  const [activeTab, setActiveTab] = useState(concepts.length > 0 ? 'concepts' : 'questions');
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Global Search Box */}
      <div className="p-6 pb-2 border-b">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            className="pl-10 pr-3 py-2 w-full bg-white"
            placeholder={`Search ${activeTab === 'concepts' ? 'concepts' : 'questions'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Tabs using shadcn UI */}
      <Tabs defaultValue={concepts.length > 0 ? "concepts" : "questions"} className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-xs mx-auto mt-6 mb-4">
          <TabsTrigger value="concepts">Concepts</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>
        
        <div className="p-6 pt-2">
          <TabsContent value="concepts">
            <ConceptExplorer searchTerm={searchTerm} concepts={concepts} />
          </TabsContent>
          
          <TabsContent value="questions">
            <MCQView questions={[]} searchTerm={searchTerm} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default function SubjectContent({ subject, exam, params }) {
  return (
    <div className="w-full">
      <ConceptQuestionsUI 
        subjectName={subject.subject}
        examName={exam.name}
        examId={exam.id}
        subjectId={subject.id}
        isSection={subject.isSection}
        totalQuestions={subject.total_questions}
        concepts={subject.concepts || []}
      />
    </div>
  );
}
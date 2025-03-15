// import React, { useState, useEffect } from 'react';
// import { Search } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';

// // ConceptItem Component
// const ConceptItem = ({ title, description, index }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDescription = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="mb-2 bg-white">
//       <button
//         className="w-full text-left p-4 font-medium flex items-center focus:outline-none bg-white"
//         onClick={toggleDescription}
//         aria-expanded={isOpen}
//       >
//         <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white flex items-center justify-center mr-3">
//           {index}
//         </div>
//         <span>{title}</span>
//       </button>
//       <div 
//         className={`pl-16 pr-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}
//       >
//         <p className="text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// // Concept Explorer Component
// const ConceptExplorer = ({ searchTerm }) => {
//   const [filteredConcepts, setFilteredConcepts] = useState([]);
  
//   const conceptData = [
//     {
//       title: "Component-Based Architecture",
//       description: "A design approach where the system is divided into reusable, modular components. Each component encapsulates a specific functionality and has a well-defined interface."
//     },
//     {
//       title: "State Management",
//       description: "The process of managing application state and data flow between components. Common solutions include Redux, Context API, and MobX."
//     },
//     {
//       title: "Server-Side Rendering (SSR)",
//       description: "A technique where web pages are rendered on the server before being sent to the client. It improves performance and SEO by delivering pre-rendered HTML to the browser."
//     },
//     {
//       title: "Declarative Programming",
//       description: "A programming paradigm where code describes what should be accomplished rather than how it should be done. React uses this approach for defining UI components."
//     },
//     {
//       title: "Virtual DOM",
//       description: "A lightweight representation of the real DOM in memory. React uses it to improve performance by minimizing direct manipulation of the DOM."
//     }
//   ];

//   useEffect(() => {
//     // Filter concepts based on search term
//     const filtered = conceptData.filter(concept =>
//       concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       concept.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredConcepts(filtered);
//   }, [searchTerm]);

//   return (
//     <div className="w-full">
//       {/* Concepts List */}
//       <div>
//         {filteredConcepts.length > 0 ? (
//           filteredConcepts.map((concept, index) => (
//             <ConceptItem 
//               key={index} 
//               title={concept.title} 
//               description={concept.description} 
//               index={index + 1} 
//             />
//           ))
//         ) : (
//           <Card className="w-full p-8">
//             <CardContent className="flex flex-col items-center justify-center">
//               <p className="text-center text-gray-500">No concepts found matching your search.</p>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };

// // MCQView Component
// const MCQView = ({ questions, searchTerm }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [filteredQuestions, setFilteredQuestions] = useState(questions || []);
//   const [showExplanation, setShowExplanation] = useState(false);
  
//   // Filter questions based on search
//   React.useEffect(() => {
//     let filtered = [...questions];
    
//     // Apply search filter if provided
//     if (searchTerm) {
//       const query = searchTerm.toLowerCase();
//       filtered = filtered.filter(q => 
//         q.text.toLowerCase().includes(query) || 
//         q.subject?.toLowerCase().includes(query) ||
//         q.explanation?.toLowerCase().includes(query)
//       );
//     }
    
//     setFilteredQuestions(filtered);
    
//     // Reset question index if it's out of bounds after filtering
//     if (currentQuestionIndex >= filtered.length && filtered.length > 0) {
//       setCurrentQuestionIndex(0);
//     }
//   }, [questions, searchTerm, currentQuestionIndex]);
  
//   const currentQuestion = filteredQuestions[currentQuestionIndex];
  
//   const handleSelectAnswer = (questionId, selectedIndex) => {
//     if (!currentQuestion) return;
    
//     const isCorrect = selectedIndex === currentQuestion.correctAnswer;
//     setUserAnswers({
//       ...userAnswers,
//       [questionId]: {
//         selectedIndex,
//         isCorrect
//       }
//     });
//     setShowExplanation(true);
//   };
  
//   const resetQuestion = () => {
//     if (currentQuestion) {
//       const updatedAnswers = { ...userAnswers };
//       delete updatedAnswers[currentQuestion.id];
//       setUserAnswers(updatedAnswers);
//       setShowExplanation(false);
//     }
//   };
  
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < filteredQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex + 1]?.id]);
//     }
//   };
  
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex - 1]?.id]);
//     }
//   };
  
//   if (!currentQuestion) {
//     return (
//       <Card className="w-full p-8">
//         <CardContent className="flex flex-col items-center justify-center">
//           <h3 className="text-lg font-medium mb-2">No Questions Available</h3>
//           <p className="text-gray-600 mb-4">
//             {filteredQuestions.length === 0 && questions.length > 0 
//               ? "No questions match your current search."
//               : "There are no questions available yet."}
//           </p>
//         </CardContent>
//       </Card>
//     );
//   }
  
//   const selectedAnswerData = userAnswers[currentQuestion.id];
  
//   return (
//     <div className="w-full">
//       <Card className="mb-6">
//         <CardContent className="pt-6">
//           {/* Question */}
//           <div className="mb-6">
//             <div className="flex justify-between items-start mb-2">
//               <div className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700 mb-2">
//                 {currentQuestion.subject || 'General'}
//               </div>
//               <div className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-700">
//                 Question {currentQuestionIndex + 1} of {filteredQuestions.length}
//               </div>
//             </div>
//             <h3 className="text-lg font-medium mb-5">{currentQuestion.text}</h3>
            
//             <div className="space-y-3">
//               {currentQuestion.choices.map((choice, index) => {
//                 // Determine styling based on selection and correctness
//                 let bgColor = "bg-white";
//                 let borderColor = "border-gray-200";
//                 let textColor = "text-gray-800";
                
//                 if (selectedAnswerData) {
//                   if (index === currentQuestion.correctAnswer) {
//                     bgColor = "bg-green-50";
//                     borderColor = "border-green-200";
//                     textColor = "text-green-800";
//                   } else if (index === selectedAnswerData.selectedIndex) {
//                     bgColor = "bg-red-50";
//                     borderColor = "border-red-200";
//                     textColor = "text-red-800";
//                   } else {
//                     bgColor = "bg-gray-50";
//                     textColor = "text-gray-500";
//                   }
//                 }
                
//                 return (
//                   <button
//                     key={index}
//                     className={`w-full p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} flex items-center justify-between transition-colors ${!selectedAnswerData ? "hover:bg-gray-50" : ""}`}
//                     onClick={() => handleSelectAnswer(currentQuestion.id, index)}
//                     disabled={selectedAnswerData !== undefined}
//                   >
//                     <div className="flex items-center">
//                       <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
//                       <span>{choice}</span>
//                     </div>
                    
//                     {selectedAnswerData && index === currentQuestion.correctAnswer && (
//                       <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12"></polyline>
//                       </svg>
//                     )}
                    
//                     {selectedAnswerData && index === selectedAnswerData.selectedIndex && index !== currentQuestion.correctAnswer && (
//                       <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                       </svg>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
          
//           {/* Explanation */}
//           {showExplanation && (
//             <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
//               <div className="flex items-center gap-2 mb-2">
//                 <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <line x1="12" y1="16" x2="12" y2="12"></line>
//                   <line x1="12" y1="8" x2="12.01" y2="8"></line>
//                 </svg>
//                 <h4 className="font-medium">Explanation</h4>
//               </div>
//               <p className="text-gray-700">{currentQuestion.explanation}</p>
//             </div>
//           )}
//         </CardContent>
//       </Card>
      
//       {/* Action buttons */}
//       <div className="flex flex-col sm:flex-row justify-between gap-4">
//         <div className="flex gap-3">
//           <button 
//             className="px-3 sm:px-4 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50 text-sm sm:text-base"
//             onClick={handlePreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>
          
//           <button 
//             className="px-3 sm:px-4 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50 text-sm sm:text-base"
//             onClick={resetQuestion}
//             disabled={!selectedAnswerData}
//           >
//             Reset
//           </button>
//         </div>
        
//         <button 
//           className="px-3 sm:px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-800 disabled:opacity-50 text-sm sm:text-base mt-3 sm:mt-0"
//           onClick={handleNextQuestion}
//           disabled={currentQuestionIndex === filteredQuestions.length - 1}
//         >
//           Next Question
//         </button>
//       </div>
      
//       {/* Question navigation dots */}
//       <div className="mt-8">
//         <div className="flex flex-wrap gap-2 justify-center">
//           {filteredQuestions.map((_, index) => {
//             const question = filteredQuestions[index];
//             const answer = userAnswers[question?.id];
//             let bgColor = "bg-gray-200";
            
//             if (answer) {
//               bgColor = answer.isCorrect ? "bg-green-500" : "bg-red-500";
//             }
            
//             if (index === currentQuestionIndex) {
//               bgColor = answer 
//                 ? (answer.isCorrect ? "bg-green-700" : "bg-red-700") 
//                 : "bg-black";
//             }
            
//             return (
//               <button
//                 key={index}
//                 className={`w-8 h-8 rounded-full ${bgColor} text-white text-xs font-medium transition-colors`}
//                 onClick={() => {
//                   setCurrentQuestionIndex(index);
//                   setShowExplanation(!!userAnswers[question?.id]);
//                 }}
//               >
//                 {index + 1}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main component with tabs
// const ConceptQuestionsUI = () => {
//   const [activeTab, setActiveTab] = useState('concepts');
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Sample medical exam questions
//   const questions = [
//     {
//       id: 'q1',
//       text: 'A 65-year-old male presents with crushing chest pain radiating to the left arm, diaphoresis, and shortness of breath. Which of the following ECG findings is most consistent with an acute myocardial infarction?',
//       subject: 'Cardiology',
//       choices: [
//         'ST segment elevation in leads V1-V4',
//         'T wave inversion in all leads',
//         'Prolonged PR interval',
//         'Left bundle branch block with QRS widening'
//       ],
//       correctAnswer: 0,
//       explanation: 'ST segment elevation in leads V1-V4 is characteristic of an anterior wall myocardial infarction. The other findings may be present in various cardiac conditions but are not as specific for acute MI.'
//     },
//     {
//       id: 'q2',
//       text: 'A 28-year-old female presents with fatigue, weight loss, and heat intolerance. Physical examination reveals proptosis and a diffusely enlarged thyroid. Which laboratory finding would most likely be present?',
//       subject: 'Endocrinology',
//       choices: [
//         'Decreased TSH, increased T4',
//         'Increased TSH, decreased T4',
//         'Decreased TSH, decreased T4',
//         'Increased TSH, increased T4'
//       ],
//       correctAnswer: 0,
//       explanation: 'These symptoms suggest Graves\' disease, an autoimmune disorder causing hyperthyroidism. The classic laboratory finding is decreased TSH due to negative feedback from elevated thyroid hormones (T3 and T4).'
//     },
//     {
//       id: 'q3',
//       text: 'A 52-year-old male with a history of hypertension presents with hematuria and flank pain. CT scan reveals a 4cm mass in the left kidney. What is the most likely diagnosis?',
//       subject: 'Oncology',
//       choices: [
//         'Renal cell carcinoma',
//         'Transitional cell carcinoma',
//         'Wilms tumor',
//         'Renal adenoma'
//       ],
//       correctAnswer: 0,
//       explanation: 'The classic triad for renal cell carcinoma is hematuria, flank pain, and a palpable abdominal mass, though this complete presentation is uncommon. In adults, renal masses are most commonly renal cell carcinoma, especially with risk factors like hypertension.'
//     },
//     {
//       id: 'q4',
//       text: 'A patient is prescribed warfarin for atrial fibrillation. Which of the following foods should be consumed consistently rather than avoided to maintain stable INR levels?',
//       subject: 'Pharmacology',
//       choices: [
//         'Kale',
//         'Spinach',
//         'Broccoli',
//         'All green vegetables should be avoided'
//       ],
//       correctAnswer: 2,
//       explanation: 'When taking warfarin, patients should maintain consistent intake of vitamin K-containing foods rather than avoiding them completely. Dramatic changes in vitamin K intake affect INR stability. Consistent moderate intake of foods like broccoli helps maintain stable anticoagulation.'
//     },
//     {
//       id: 'q5',
//       text: 'A previously healthy 22-year-old presents with a 2-day history of fever, headache, and neck stiffness. Physical exam reveals photophobia and Kernig\'s sign is positive. What is the most appropriate initial management?',
//       subject: 'Infectious Disease',
//       choices: [
//         'Lumbar puncture after CT scan',
//         'Empiric antibiotics before imaging',
//         'MRI of the brain',
//         'Observation and symptomatic treatment'
//       ],
//       correctAnswer: 1,
//       explanation: 'This presentation is concerning for bacterial meningitis, which is a medical emergency. In suspected bacterial meningitis, empiric antibiotics should be administered before imaging to prevent delays in treatment, as mortality increases with delayed antibiotic administration.'
//     }
//   ];

//   return (
//     <div className="min-h-screen w-full bg-gray-100">
//       <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
//         {/* Global Search Box */}
//         <div className="mb-6 relative w-full max-w-md mx-auto px-4 sm:px-0">
//           <div className="absolute inset-y-0 left-4 sm:left-0 pl-3 flex items-center pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <Input
//             type="text"
//             className="pl-10 pr-3 py-2 w-full bg-white"
//             placeholder={`Search ${activeTab === 'concepts' ? 'concepts' : 'questions'}...`}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
        
//         {/* Tabs using shadcn UI */}
//         <Tabs defaultValue="concepts" className="w-full" onValueChange={setActiveTab}>
//           <TabsList className="grid grid-cols-2 w-full max-w-xs mx-auto mb-6">
//             <TabsTrigger value="concepts">Concepts</TabsTrigger>
//             <TabsTrigger value="questions">Questions</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="concepts">
//             <ConceptExplorer searchTerm={searchTerm} />
//           </TabsContent>
          
//           <TabsContent value="questions">
//             <MCQView questions={questions} searchTerm={searchTerm} />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default ConceptQuestionsUI;
'use client';
import React, { useState, useEffect } from 'react';
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
  
  useEffect(() => {
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
  
  // Filter questions based on search
  React.useEffect(() => {
    let filtered = [...questions];
    
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
  }, [questions, searchTerm, currentQuestionIndex]);
  
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
            {filteredQuestions.length === 0 && questions.length > 0 
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

// Mock sample questions - in a real implementation, these would come from the database
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

// Main component with tabs
const ConceptQuestionsUI = ({ 
  subjectName,
  examName,
  concepts = [],
  totalQuestions = 0
}) => {
  const [activeTab, setActiveTab] = useState('concepts');
  const [searchTerm, setSearchTerm] = useState('');
  
  // In a real implementation, you would fetch actual questions for this subject
  // For now, we'll use the sample questions
  const questions = sampleQuestions;
  
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
            <MCQView questions={questions} searchTerm={searchTerm} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ConceptQuestionsUI;
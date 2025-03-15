import React, { useState } from 'react';
import { Check, X, Info, Book, Filter, Search, ArrowLeft, Pin, Lightbulb, Flag } from 'lucide-react';

// Main App Component
const MedicalQuizApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <QuizHeader />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <ExamContentDemo />
      </div>
    </div>
  );
};

// Header Component
const QuizHeader = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showReviewDropdown, setShowReviewDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <button className="hover:bg-gray-100 p-1.5 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-white">D</span>
              </div>
            </div>
            <span className="hidden md:block text-xl font-bold text-gray-800 ml-2">DrNote</span>
            <span className="text-sm font-medium text-gray-600 ml-2">Medical Quiz</span>
          </div>
        </div>

        <div className="flex items-center">
          <button className="text-sm font-medium px-4 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
            Upgrade
          </button>
        </div>
      </div>

      <div className="px-2 md:px-4 py-2 md:py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="block md:hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border-gray-200 text-sm"
                />
              </div>
              <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex-shrink-0 p-2 bg-white rounded-lg border border-gray-200"
              >
                <Filter className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {showMobileFilters && (
              <div className="space-y-3 mt-2 p-3 bg-white rounded-lg border border-gray-200">
                <div className="w-full flex flex-col gap-2">
                  <div 
                    className="w-full p-2 text-sm bg-white border border-gray-200 rounded-md flex items-center justify-between cursor-pointer"
                    onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                  >
                    <div className="flex items-center">
                      <Book className="w-4 h-4 mr-1.5" />
                      <span>Review All</span>
                    </div>
                    <div className="text-xs text-gray-400">▼</div>
                  </div>
                  {showMobileDropdown && (
                    <div className="w-full mt-1 bg-white border border-gray-200 rounded-md">
                      <div className="p-2 hover:bg-gray-100 text-sm">Review All</div>
                      <div className="p-2 hover:bg-gray-100 text-sm">Review Unused</div>
                      <div className="p-2 hover:bg-gray-100 text-sm">Review Incorrect</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              <div className="relative">
                <div 
                  className="w-40 p-2 text-sm bg-white border border-gray-200 rounded-md flex items-center cursor-pointer justify-between"
                  onClick={() => setShowReviewDropdown(!showReviewDropdown)}
                >
                  <div className="flex items-center">
                    <Book className="w-4 h-4 mr-1.5" />
                    <span>Review All</span>
                  </div>
                  <span className="text-xs text-gray-400">▼</span>
                </div>
                {showReviewDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md z-10 border border-gray-200">
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">Review All</div>
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">Review Unused</div>
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">Review Incorrect</div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border-gray-200"
              />
            </div>
          </div>

          <div className="mt-2 text-right text-xs text-gray-600">
            124 questions
          </div>
        </div>
      </div>
    </div>
  );
};

// Combined Component based on ExamContent and QuizCardsContainer
const ExamContentDemo = () => {
  const sampleCards = [
    {
      id: 1,
      question_text: "A patient with MRSA bacteremia is not responding to vancomycin despite appropriate dosing. Which alternative would be most appropriate?",
      subject: "Infectious Diseases",
      option_a: "Ceftriaxone",
      option_b: "Linezolid",
      option_c: "Piperacillin-tazobactam",
      option_d: "Azithromycin",
      correct_choice: "b",
      rationale: "Linezolid is an appropriate alternative to vancomycin for MRSA infections. It has excellent tissue penetration and is bacteriostatic against MRSA. Ceftriaxone and piperacillin-tazobactam are not active against MRSA. Azithromycin has limited activity against S. aureus and is not indicated for MRSA bacteremia."
    },
    {
      id: 2,
      question_text: "Which antibiotic combination would be most appropriate for empiric treatment of suspected Pseudomonas aeruginosa pneumonia in a critically ill patient?",
      subject: "Pulmonology",
      option_a: "Ampicillin plus gentamicin",
      option_b: "Ceftriaxone plus azithromycin",
      option_c: "Cefepime plus ciprofloxacin",
      option_d: "Doxycycline plus metronidazole",
      correct_choice: "c",
      rationale: "For suspected Pseudomonas pneumonia in a critically ill patient, combination therapy with an antipseudomonal β-lactam (such as cefepime) plus either a fluoroquinolone (ciprofloxacin) or an aminoglycoside is recommended. This combination provides synergistic activity and reduces the emergence of resistance. The other options do not provide adequate Pseudomonas coverage."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Render quiz style questions */}
      {sampleCards.map((question, index) => (
        <QuizQuestionCard key={index} question={question} />
      ))}
    </div>
  );
};

// Quiz Question Card Component
const QuizQuestionCard = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeSheet, setActiveSheet] = useState(null);

  const handleAnswerClick = (choiceId) => {
    if (!showAnswers) {
      setSelectedAnswer(choiceId);
      setShowAnswers(true);
    }
  };

  const getChoiceStyle = (choiceId) => {
    const baseStyle = 'w-full p-4 text-left border rounded-lg transition-all flex justify-between items-center';
    
    if (!showAnswers) {
      return `${baseStyle} bg-gradient-to-r from-[#f5f9ff] to-[#f8faff] border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50 hover:border-blue-200`;
    }
    
    if (choiceId === selectedAnswer) {
      return `${baseStyle} ${choiceId === question.correct_choice ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`;
    }
    if (choiceId === question.correct_choice) {
      return `${baseStyle} bg-green-100 border-green-500`;
    }
    return `${baseStyle} bg-[#f5f9ff] border-blue-100`;
  };

  const renderChoices = () => {
    const choices = ['a', 'b', 'c', 'd', 'e', 'f'];
    return choices.map(choiceId => {
      const optionKey = `option_${choiceId}`;
      if (!question[optionKey]) return null;

      return (
        <button
          key={choiceId}
          onClick={() => handleAnswerClick(choiceId)}
          disabled={showAnswers}
          className={getChoiceStyle(choiceId)}
        >
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#1b2a6f]">{choiceId.toUpperCase()}.</span>
            <span className="text-[#1b2a6f]">{question[optionKey]}</span>
          </div>
        </button>
      );
    });
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-100 mb-6">
      {/* Bookmark Button */}
      <button 
        onClick={() => setIsBookmarked(!isBookmarked)} 
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100"
      >
        <Pin className={`w-5 h-5 ${isBookmarked ? 'text-blue-500 fill-current' : 'text-gray-400'}`} />
      </button>

      {/* Question Subject */}
      {question.subject && (
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-[#697785]">
            {question.subject}
          </span>
        </div>
      )}

      {/* Question Text */}
      <div className="pt-12 px-4 pb-6">
        <h2 className="text-xl font-medium text-[#1b2a6f]">{question.question_text}</h2>
      </div>

      {/* Answer Choices */}
      <div className="px-4 space-y-3 mb-20">
        {renderChoices()}
      </div>

      {/* Show action buttons only after answering */}
      {showAnswers && (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 rounded-b-lg">
          <div className="flex justify-between">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Flag className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </button>
            <button 
              onClick={() => setActiveSheet('explanation')}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Lightbulb className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </button>
          </div>
        </div>
      )}

      {/* Explanation Panel */}
      {activeSheet === 'explanation' && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Explanation</h3>
              <button 
                onClick={() => setActiveSheet(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="prose max-w-none">
              <p className="text-[#1b2a6f]">{question.rationale}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalQuizApp;
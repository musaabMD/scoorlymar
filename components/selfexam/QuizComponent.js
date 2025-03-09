'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import QuizHeader from './QuizHeader';
import Score from './Score';
import SubmitExam from './SubmitExam';
import Sidebar from './Sidebar';
import Explanation from './Explanation';
import Feedback from './Feedback';
import QuizFooter from './QuizFooter';
import Image from 'next/image';

const QuizComponent = ({ questions, examName, testTaker, isSelfExam = false }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [answers, setAnswers] = useState(questions.map(q => q.userAnswer || null));
  const [flaggedQuestions, setFlaggedQuestions] = useState(
    questions.filter(q => q.isBookmarked).map((_, index) => index)
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [crossedOutChoices, setCrossedOutChoices] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const timerRef = useRef(null);

  // Navigation between questions
  const navigateQuestion = useCallback((direction) => {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestionIndex(newIndex);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex, questions.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        navigateQuestion(-1);
      } else if (event.key === 'ArrowRight') {
        navigateQuestion(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateQuestion]);

  // Mock function to simulate saving responses (no backend integration)
  const saveUserResponse = (questionId, userAnswer, isBookmarked) => {
    if (isSelfExam) return; // Don't save responses for self-assessment
    
    console.log('Saving user response:', { 
      questionId, 
      userAnswer, 
      isBookmarked 
    });
    
    // In a real app, this would send data to the backend
    return Promise.resolve({ success: true });
  };

  // Mock function to simulate updating choice statistics
  const updateChoiceVotes = (questionId, choice) => {
    console.log('Updating choice votes:', { questionId, choice });
    // In a real app, this would send data to the backend
    return Promise.resolve({ success: true });
  };

  // Handle answer selection
  const handleAnswer = async (selectedOption) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOption;
      return newAnswers;
    });

    if (!isSelfExam) {
      setShowExplanation(true);
      try {
        await saveUserResponse(
          questions[currentQuestionIndex].id, 
          selectedOption, 
          flaggedQuestions.includes(currentQuestionIndex)
        );
        await updateChoiceVotes(questions[currentQuestionIndex].id, selectedOption);
      } catch (error) {
        console.error('Error in handleAnswer:', error);
      }
    }
  };

  // Handle exam submission
  const handleSubmit = () => {
    setIsSubmitModalOpen(true);
  };

  // End quiz and calculate score
  const endQuiz = useCallback(() => {
    const finalScore = answers.reduce((acc, answer, index) => {
      if (answer === questions[index].correct_choice) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(finalScore);
    setQuizEnded(true);
    setIsSubmitModalOpen(false);
  }, [answers, questions]);

  // Toggle bookmark/flag for a question
  const toggleBookmark = async () => {
    const newFlaggedQuestions = flaggedQuestions.includes(currentQuestionIndex)
      ? flaggedQuestions.filter(q => q !== currentQuestionIndex)
      : [...flaggedQuestions, currentQuestionIndex];
    
    setFlaggedQuestions(newFlaggedQuestions);
    
    if (!isSelfExam) {
      try {
        await saveUserResponse(
          questions[currentQuestionIndex].id, 
          answers[currentQuestionIndex], 
          newFlaggedQuestions.includes(currentQuestionIndex)
        );
      } catch (error) {
        console.error('Error toggling bookmark:', error);
      }
    }
  };

  // Toggle cross-out for an answer choice
  const toggleCrossOut = (letter) => {
    setCrossedOutChoices(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        ...prev[currentQuestionIndex],
        [letter]: !prev[currentQuestionIndex]?.[letter]
      }
    }));
  };

  // Handle feedback submission
  const handleFeedbackSubmit = async (feedback) => {
    if (isSelfExam) return; // Don't submit feedback for self-assessment
  
    console.log('Feedback submitted:', feedback);
    
    // In a real app, this would be stored in a database
    setFeedbacks(prev => ({
      ...prev,
      [feedback.questionId]: [
        ...(prev[feedback.questionId] || []),
        feedback
      ]
    }));
    
    return Promise.resolve({ success: true });
  };

  // Check if we're on the last question
  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1 && !isSelfExam) {
      setIsSubmitModalOpen(true);
    }
  }, [currentQuestionIndex, questions.length, isSelfExam]);

  // Prevent copy-paste for exam security
  useEffect(() => {
    const preventCopyPaste = (e) => {
      e.preventDefault();
    };

    document.addEventListener('copy', preventCopyPaste);
    document.addEventListener('paste', preventCopyPaste);

    return () => {
      document.removeEventListener('copy', preventCopyPaste);
      document.removeEventListener('paste', preventCopyPaste);
    };
  }, []);

  // Show score screen when quiz is ended
  if (quizEnded) {
    return (
      <Score 
        score={score} 
        totalQuestions={questions.length} 
        quizName={examName}
        time={timerRef.current?.getTime()} 
        answers={answers.map((answer, index) => ({
          question: questions[index].question_text,
          selectedAnswer: answer,
          correctAnswer: questions[index].correct_choice,
          isCorrect: answer === questions[index].correct_choice,
          rationale: questions[index].rationale,
          isBookmarked: flaggedQuestions.includes(index),
          subject: questions[index].subject || 'Unknown',
          feedback: feedbacks[questions[index].id]
        }))}
      />
    );
  }

  // Loading state
  if (questions.length === 0) {
    return <div className="bg-white text-black p-8 flex justify-center items-center min-h-screen">
      <div className="animate-pulse text-2xl">Loading questions...</div>
    </div>;
  }

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  // Error state
  if (!currentQuestion) {
    return <div className="bg-white text-black p-8 flex justify-center items-center min-h-screen">
      <div className="text-red-500 text-2xl">Error loading question. Please try again.</div>
    </div>;
  }

  // Format options
  const options = ['A', 'B', 'C', 'D', 'E', 'F']
    .map(letter => ({ 
      letter, 
      text: currentQuestion[`option_${letter.toLowerCase()}`] 
    }))
    .filter(option => option.text !== null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <QuizHeader 
        testTaker={testTaker}
        quizName={examName}
        timerRef={timerRef}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <Sidebar 
        questions={questions}
        currentQuestion={currentQuestionIndex}
        setCurrentQuestion={(index) => {
          setCurrentQuestionIndex(index);
          setShowExplanation(false);
        }}
        flaggedQuestions={flaggedQuestions}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <div className="flex-grow p-8 pb-20">
        <div className="mb-4">
          <p className="text-xl text-black font-semibold mb-2">
            {`${examName} - ${currentQuestion.subject || 'Unknown'}`}
          </p>
          
          {currentQuestion.question_image_url && (
            <div className="my-4">
              <img 
                src={currentQuestion.question_image_url} 
                alt="Question" 
                className="max-w-full h-auto rounded-md"
              />
            </div>
          )}
          
          <div 
            className="text-2xl text-black font-semibold"
            dangerouslySetInnerHTML={{ __html: currentQuestion.question_text }}
          />
        </div>
        
        <div className="space-y-4 mt-6">
          {options.map(({ letter, text }) => {
            const isSelected = answers[currentQuestionIndex] === letter;
            const isCorrect = letter === currentQuestion.correct_choice;
            const isCrossedOut = crossedOutChoices[currentQuestionIndex]?.[letter];
            
            let buttonClass = "block w-full text-left p-4 text-xl border-2 transition-colors rounded-lg ";
            
            if (isSelected) {
              if (isSelfExam) {
                buttonClass += "bg-blue-200 border-blue-500 ";
              } else {
                buttonClass += isCorrect 
                  ? "bg-[#e6fff9] border-[#009875] text-[#009875]" 
                  : "bg-[#ffeded] border-[#DD0000] text-[#DD0000]";
              }
            } else {
              buttonClass += "bg-slate-100 border-slate-300 hover:bg-slate-200 focus:border-slate-500";
            }

            if (isCrossedOut) {
              buttonClass += " line-through opacity-70";
            }

            return (
              <button
                key={letter}
                onClick={() => handleAnswer(letter)}
                className={buttonClass}
              >
                <div className="flex items-start">
                  <span className="font-bold mr-2">{letter}.</span>
                  <span 
                    className="flex-1"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCrossOut(letter);
                    }}
                    className="ml-2 p-1 cursor-pointer hover:bg-gray-200 rounded"
                    title="Cross out this option"
                  >
                    ✕
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        
        {showExplanation && !isSelfExam && (
          <>
            <Explanation 
              rationale={currentQuestion.rationale}
              isVisible={showExplanation}
              explanationImageUrl={currentQuestion.explanation_image_url}
            />
            <Feedback 
              questionId={currentQuestion.id}
              examName={examName}
              currentAnswer={currentQuestion.correct_choice}
              options={options}
              onSubmit={handleFeedbackSubmit}
            />
          </>
        )}
        
        <SubmitExam 
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
          onSubmit={endQuiz}
          unansweredQuestions={answers.filter(a => a === null).length}
        />
      </div>
      
      <QuizFooter 
        onPrevious={() => navigateQuestion(-1)}
        onNext={() => navigateQuestion(1)}
        onSubmit={handleSubmit}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onToggleBookmark={toggleBookmark}
        isBookmarked={flaggedQuestions.includes(currentQuestionIndex)}
      />
    </div>
  );
};

export default QuizComponent;
'use client';

import { useState, useEffect } from 'react';

export function useExamState() {
  const [activeTab, setActiveTab] = useState('study');
  const [pinnedQuestions, setPinnedQuestions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [simulatorStarted, setSimulatorStarted] = useState(false);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [reviewAnswers, setReviewAnswers] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'pinned'
  
  // Reset simulator state when changing tabs
  useEffect(() => {
    if (activeTab !== 'simulator' && activeTab !== 'study') {
      setSelectedSubject(null);
      setSimulatorStarted(false);
    }
  }, [activeTab]);

  // Handler functions
  const togglePinQuestion = (id) => {
    setPinnedQuestions(prevPinned => 
      prevPinned.includes(id) 
        ? prevPinned.filter(qId => qId !== id)
        : [...prevPinned, id]
    );
  };

  const handleMcqOptionClick = (mcqId, optionIndex) => {
    setMcqAnswers(prev => ({
      ...prev,
      [mcqId]: optionIndex
    }));
  };

  const toggleReviewAnswer = (reviewId) => {
    setReviewAnswers(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleStartSimulator = () => {
    setSimulatorStarted(true);
  };

  const handleBackToSubjects = () => {
    setSimulatorStarted(false);
    setSelectedSubject(null);
    // Clear answers when going back to subject selection
    setMcqAnswers({});
  };

  const filterReviewItems = (items) => {
    return items.filter(item => {
      const matchesFilter = reviewFilter === 'all' || item.type === reviewFilter;
      const matchesSearch = !searchTerm || 
                          item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  return {
    activeTab,
    setActiveTab,
    pinnedQuestions,
    togglePinQuestion,
    selectedSubject,
    setSelectedSubject,
    simulatorStarted,
    setSimulatorStarted,
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
  };
}
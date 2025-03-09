'use client';

import React from 'react';
import Header from '@/components/v1/Header';
import TabBar from '@/components/v1/TabBar';

const ExamDetailLayout = ({ 
  children, 
  examName, 
  totalCorrect, 
  totalQuestions, 
  overallPercentage,
  searchTerm,
  onSearchChange,
  activeTab,
  setActiveTab
}) => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Header Component */}
      <div className="flex-shrink-0">
        <Header 
          examName={examName}
          totalCorrect={totalCorrect}
          totalQuestions={totalQuestions}
          overallPercentage={overallPercentage}
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          activeTab={activeTab}
        />
      </div>

      {/* TabBar for desktop - positioned below header */}
      <div className="hidden md:block flex-shrink-0">
        <div className="container mx-auto px-4 pt-2">
          <TabBar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      {/* Main content - Fill all available space */}
      <main className="flex-grow overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Container to limit width on larger screens */}
          <div className="w-full max-w-2xl mx-auto px-1 pt-1 pb-0 h-full">
            {/* Tab content - Fill all remaining space */}
            <div className="flex-grow overflow-auto pb-16 md:pb-0 h-full">
              {children}
            </div>
            
            {/* Tab Bar Component - Only for mobile */}
            <div className="flex-shrink-0 md:hidden fixed bottom-0 left-0 right-0">
              <TabBar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamDetailLayout;
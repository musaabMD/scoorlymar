'use client';

import React from 'react';
import { Search, GraduationCap } from 'lucide-react';

const Header = ({ 
  examName, 
  totalCorrect, 
  totalQuestions, 
  overallPercentage, 
  searchTerm, 
  onSearchChange, 
  activeTab
}) => {
  // Function to get page title based on active tab
  const getPageTitle = (tab) => {
    switch (tab) {
      case 'study': return 'Study Mode';
      case 'assessment': return 'Self Assessment';
      case 'incorrect': return 'Incorrect Questions';
      case 'pinned': return 'Pinned Questions';
      case 'concepts': return 'Concepts';
      case 'chat': return 'Chat';
      case 'profile': return 'Profile';
      default: return 'Dashboard';
    }
  };

  const pageTitle = getPageTitle(activeTab);

  return (
    <div className="bg-white text-gray-800 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        {/* First row: App logo, page title, and score */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo and App Name */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-2">
                <GraduationCap className="text-white" size={16} strokeWidth={2} />
              </div>
              <span className="font-bold text-lg text-gray-900 mr-2">Scoorly</span>
              <span className="text-gray-500 text-sm hidden sm:inline-block">/ {pageTitle}</span>
            </div>
            
            {/* Exam name for desktop only */}
            <div className="ml-4 hidden lg:block border-l border-gray-200 pl-4">
              <span className="text-base text-gray-800">{examName}</span>
            </div>
          </div>
          
          {/* Score display */}
          <div className="flex items-center">
            {/* Exam name for small screens */}
            <div className="mr-3 sm:hidden">
              <span className="text-sm font-medium">{examName}</span>
            </div>
            
            {/* Score pill */}
            <div className="bg-blue-50 rounded-full px-4 py-1.5 flex items-center border border-blue-100">
              <div className="mr-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">
                {Math.round(overallPercentage / 10)}
              </div>
              <div className="text-sm">
                <span className="font-bold text-blue-800">{totalCorrect}/{totalQuestions}</span>
                <span className="text-gray-600 ml-1">({overallPercentage}%)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second row: Search box */}
        <div className="mt-3 relative w-full md:max-w-md md:mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
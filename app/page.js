"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, ChevronDown, LogIn, UserPlus, CreditCard, GraduationCap } from 'lucide-react';
import { examData, tabs } from '@/app/data/allexams';
import Link from 'next/link';

// Navigation Header Component
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo and App Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
            <GraduationCap className="text-white" size={20} strokeWidth={2} />
          </div>
          <span className="text-xl font-bold text-gray-900">Scoorly</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Exams
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
            Pricing
          </Link>
          <Link href="/signin" className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
            <LogIn size={18} className="mr-1" />
            Sign In
          </Link>
          <Link href="/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out flex items-center">
            <UserPlus size={18} className="mr-1" />
            Sign Up Free
          </Link>
        </nav>
        
        {/* Mobile Navigation - Just Sign In and Sign Up for focus */}
        <div className="flex md:hidden items-center space-x-3">
          <Link href="/signin" className="text-gray-700 hover:text-blue-600 p-2">
            <LogIn size={20} />
          </Link>
          <Link href="/signin" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

const ExamList = () => {
  const [activeTab, setActiveTab] = useState('medical');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExams, setFilteredExams] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Initialize filteredExams with examData on component mount
  useEffect(() => {
    setFilteredExams(examData);
  }, []);

  // Filter exams based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredExams(examData);
    } else {
      const query = searchQuery.toLowerCase().trim();
      // Create a single array of all matching exams from all tabs
      const allMatchingExams = [];
      
      // Search through all tabs/categories
      Object.keys(examData).forEach(tabKey => {
        const matchingExamsInTab = examData[tabKey].filter(exam => 
          exam.name.toLowerCase().includes(query) ||
          exam.category.toLowerCase().includes(query)
        );
        
        // Add matching exams to our array with their tab information
        matchingExamsInTab.forEach(exam => {
          allMatchingExams.push({
            ...exam,
            tabKey
          });
        });
      });
      
      // Group exams by their original tab for rendering
      const groupedByTab = {};
      allMatchingExams.forEach(exam => {
        const tabKey = exam.tabKey;
        if (!groupedByTab[tabKey]) {
          groupedByTab[tabKey] = [];
        }
        // Remove the extra tabKey property we added
        const { tabKey: _, ...examWithoutTabKey } = exam;
        groupedByTab[tabKey].push(examWithoutTabKey);
      });
      
      setFilteredExams(groupedByTab);
    }
  }, [searchQuery]);

  // When searching, get all exams that match the search query regardless of active tab
  const isSearching = searchQuery.trim() !== '';
  
  // Get active tab label for dropdown display
  const activeTabLabel = tabs.find(tab => tab.id === activeTab);

  // Handle tab selection from dropdown
  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false);
  };

  // Function to render exams for each category
  const renderExamsForCategory = (exams, category) => (
    <div key={category}>
      <h2 className="text-lg font-semibold mb-4 pl-2 text-gray-800">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-x-4">
        {exams.map(exam => (
          <Link 
            key={exam.id}
            href={`/exams/${exam.id}`}
            className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
          >
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all"
              style={{ background: exam.gradient }}
            >
              {exam.icon}
            </div>
            <div className="w-full px-1">
              <div className="font-medium text-xs sm:text-sm text-gray-900 truncate">{exam.name}</div>
              <div className="text-xs text-gray-500 truncate">{exam.questions} Questions</div>
            </div>
            {/* Premium Indicator for Conversion */}
            {Math.random() > 0.7 && (
              <span className="mt-1 text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">Premium</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
  
  return (
    <>
      <Header />
      <div className="p-2 sm:p-4 max-w-7xl mx-auto bg-white min-h-screen">
        {/* Hero Section with Updated Icon */}
        <div className="text-center mb-6 sm:mb-10 pt-6 sm:pt-10 relative">
          <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-lg">
            <GraduationCap size={40} className="text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ace Your Exams with Scoorly</h1>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">Practice with thousands of questions for professional certifications and exams</p>
          
          {/* CTA for Conversion */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signin" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-150 ease-in-out w-full sm:w-auto"
            >
              Start Practicing Free
            </Link>
            <Link 
              href="/pricing" 
              className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out flex items-center justify-center w-full sm:w-auto"
            >
              <CreditCard size={18} className="mr-2" />
              View Pricing
            </Link>
          </div>
          
          {/* Search Box */}
          <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Search for exams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
      
        
        {/* Tab Navigation - Dropdown on mobile, horizontal tabs on larger screens */}
        <div className="mb-6 sm:mb-8">
          {/* Mobile dropdown */}
          <div className="block sm:hidden" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center">
                {activeTabLabel?.icon}
                <span className="ml-2 font-medium">{activeTabLabel?.label}</span>
              </div>
              <ChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSelect(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left text-sm ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop tabs */}
          <div className="hidden sm:flex overflow-x-auto pb-2 scrollbar-hide justify-center">
            <div className="flex space-x-2 px-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Listings */}
        <div className="space-y-6 sm:space-y-10">
          {isSearching ? (
            // When searching, show all matching exams grouped by tab
            Object.keys(filteredExams).length > 0 ? (
              Object.keys(filteredExams).map(tabKey => {
                // Only render tabs that have matching exams
                if (filteredExams[tabKey].length === 0) return null;
                
                // Group exams by category within this tab
                const groupedByCategory = {};
                filteredExams[tabKey].forEach(exam => {
                  if (!groupedByCategory[exam.category]) {
                    groupedByCategory[exam.category] = [];
                  }
                  groupedByCategory[exam.category].push(exam);
                });
                
                // Render tab section with its categories
                return (
                  <div key={tabKey} className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pl-2 text-gray-800 flex items-center">
                      {tabs.find(t => t.id === tabKey)?.icon}
                      <span className="ml-2">{tabs.find(t => t.id === tabKey)?.label}</span>
                    </h2>
                    <div className="space-y-8">
                      {Object.keys(groupedByCategory).map(category => 
                        renderExamsForCategory(groupedByCategory[category], category)
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No exams match your search criteria</p>
                <Link href="/signup" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
                  Request New Exam
                </Link>
              </div>
            )
          ) : (
            // When not searching, only show the active tab
            (() => {
              // Group active tab exams by category
              const activeExams = filteredExams[activeTab] || [];
              const groupedExams = {};
              
              activeExams.forEach(exam => {
                if (!groupedExams[exam.category]) {
                  groupedExams[exam.category] = [];
                }
                groupedExams[exam.category].push(exam);
              });
              
              return Object.keys(groupedExams).length > 0 ? (
                <>
                  {Object.keys(groupedExams).map(category => 
                    renderExamsForCategory(groupedExams[category], category)
                  )}
                  {/* Call-to-action at end of exam list */}
                  <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-sm border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Premium Exams</h3>
                    <p className="text-gray-600 mb-4">Get unlimited access to all premium exams and detailed explanations</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
                        View Plans
                      </Link>
                      <Link href="/signup" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-5 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
                        Try Free
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No exams available in this category</p>
                </div>
              );
            })()
          )}
        </div>
      </div>
    </>
  );
};

export default function ExamListPage() {
  return <ExamList />;
}
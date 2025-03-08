"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, ChevronDown } from 'lucide-react';
import { examData, tabs } from '@/app/data/allexams';
import Link from 'next/link';

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
            className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md"
              style={{ background: exam.gradient }}
            >
              {exam.icon}
            </div>
            <div className="w-full px-1">
              <div className="font-medium text-xs sm:text-sm text-gray-900 truncate">{exam.name}</div>
              <div className="text-xs text-gray-500 truncate">{exam.questions} Questions</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="p-2 sm:p-4 max-w-7xl mx-auto bg-white min-h-screen">
      {/* Hero Section with Icon */}
      <div className="text-center mb-6 sm:mb-10 pt-6 sm:pt-10 relative">
        <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-full bg-blue-50 border-4 border-blue-100">
          <BookOpen size={32} className="text-blue-600" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Exam Preparation</h1>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">Find and practice thousands of questions for professional certifications and exams</p>
        
        {/* Search Box */}
        <div className="relative max-w-xs sm:max-w-md mx-auto mt-6">
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
              Object.keys(groupedExams).map(category => 
                renderExamsForCategory(groupedExams[category], category)
              )
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No exams available in this category</p>
              </div>
            );
          })()
        )}
      </div>
    </div>
  );
};

export default function ExamListPage() {
  return <ExamList />;
}
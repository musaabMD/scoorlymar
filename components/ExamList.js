// 'use client';
// // components/ExamList.js
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { BookOpen } from 'lucide-react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// export default function ExamList() {
//   const [exams, setExams] = useState([]);
//   const [categories, setCategories] = useState({});
//   const [loading, setLoading] = useState(true);
//   const supabase = createClientComponentClient();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
        
//         // First, try to fetch exam_categories to create a lookup map
//         let categoryMap = {};
//         try {
//           const { data: categoryData } = await supabase
//             .from('exam_categories')
//             .select('id, slug, name');
            
//           if (categoryData) {
//             // Create a map of id to slug
//             categoryData.forEach(cat => {
//               categoryMap[cat.id] = {
//                 slug: cat.slug || 'general',
//                 name: cat.name || 'General'
//               };
//             });
//           }
//         } catch (e) {
//           console.log('Category fetch error (non-critical):', e);
//         }
        
//         setCategories(categoryMap);
        
//         // Now fetch exams
//         const { data, error } = await supabase
//           .from('exams')
//           .select('*');
          
//         if (error) {
//           console.error('Error fetching exams:', error);
//           setExams([]);
//         } else {
//           console.log('Fetched exams:', data);
//           setExams(data || []);
//         }
//       } catch (err) {
//         console.error('Unexpected error:', err);
//         setExams([]);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchData();
//   }, []);

//   // Predefined gradients for app icons
//   const gradients = [
//     'linear-gradient(145deg, #3AA0FF, #1E90FF)',
//     'linear-gradient(145deg, #FFB366, #F6A54C)',
//     'linear-gradient(145deg, #7D3E66, #5D2E46)',
//     'linear-gradient(145deg, #4FA8EB, #3498DB)',
//     'linear-gradient(145deg, #FF79C4, #FF69B4)',
//     'linear-gradient(145deg, #FF7357, #FF6347)',
//     'linear-gradient(145deg, #2F57A8, #1F4788)',
//     'linear-gradient(145deg, #9B5523, #8B4513)',
//     'linear-gradient(145deg, #5C4D4D, #4C3D3D)'
//   ];

//   // Function to get a consistent gradient for an exam
//   const getGradientForExam = (examName) => {
//     const hash = examName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//     return gradients[hash % gradients.length];
//   };

//   if (loading) {
//     return (
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
//         <div className="col-span-full text-center py-8">
//           <p className="text-gray-600">Loading exam preparations...</p>
//         </div>
//       </div>
//     );
//   }

//   if (exams.length === 0) {
//     return (
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
//         <div className="col-span-full text-center py-8">
//           <p className="text-gray-600">No exams available at the moment.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
//       {exams.map((exam) => {
//         const gradient = getGradientForExam(exam.name);
        
//         // Determine the category slug
//         let categorySlug = 'general';
//         let categoryName = exam.category || 'General';
        
//         if (exam.category_id && categories[exam.category_id]) {
//           categorySlug = categories[exam.category_id].slug;
//           categoryName = categories[exam.category_id].name;
//         } else if (exam.category) {
//           // Convert the category name to a slug if no mapping exists
//           categorySlug = exam.category.toLowerCase().replace(/\s+/g, '-');
//         }
        
//         // Use the correct URL pattern with /exam prefix
//         const examUrl = `/exam/${categorySlug}/${exam.slug}`;
        
//         return (
//           <Link
//             key={exam.id}
//             href={examUrl}
//             className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
//           >
//             <div
//               className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white"
//               style={{ background: gradient }}
//             >
//               <BookOpen size={24} />
//             </div>
//             <h2 className="text-xl font-semibold mb-2">{exam.name}</h2>
//             <p className="text-gray-600 text-sm line-clamp-2">
//               {exam.description || `Prepare for the ${exam.name} exam`}
//             </p>
//             <div className="mt-2 text-xs text-gray-500">
//               Category: {categoryName}
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, ChevronDown, LogIn, UserPlus, CreditCard, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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

// Define static tabs
const tabs = [
  { id: 'medical', label: 'Medical', icon: <BookOpen size={16} /> },
  { id: 'technology', label: 'Technology', icon: <BookOpen size={16} /> },
  { id: 'finance', label: 'Finance', icon: <BookOpen size={16} /> },
  { id: 'legal', label: 'Legal', icon: <BookOpen size={16} /> },
  { id: 'education', label: 'Education', icon: <BookOpen size={16} /> }
];

const ExamList = () => {
  const [activeTab, setActiveTab] = useState('medical');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExams, setFilteredExams] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const supabase = createClientComponentClient();

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

  // Fetch exams from Supabase
  useEffect(() => {
    async function fetchExams() {
      try {
        setLoading(true);
        
        // Fetch categories for mapping
        let categoryMap = {};
        try {
          const { data: categoryData } = await supabase
            .from('exam_categories')
            .select('id, slug, name');
            
          if (categoryData) {
            categoryData.forEach(cat => {
              categoryMap[cat.id] = {
                slug: cat.slug || 'general',
                name: cat.name || 'General'
              };
            });
          }
        } catch (e) {
          console.log('Category fetch error:', e);
        }
        
        // Fetch exams
        const { data, error } = await supabase
          .from('exams')
          .select('*');
          
        if (error) {
          console.error('Error fetching exams:', error);
        } else {
          // Transform data to match the expected format
          const processedData = processExamData(data || [], categoryMap);
          setFilteredExams(processedData);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchExams();
  }, []);

  // Process the exam data from Supabase to match the format needed
  const processExamData = (exams, categoryMap) => {
    const gradients = [
      'linear-gradient(135deg, #5A67D8, #3B82F6)', 
      'linear-gradient(135deg, #3B82F6, #2563EB)',
      'linear-gradient(135deg, #4F46E5, #4338CA)', 
      'linear-gradient(135deg, #6366F1, #4F46E5)',
      'linear-gradient(135deg, #8B5CF6, #7C3AED)', 
      'linear-gradient(135deg, #A78BFA, #8B5CF6)',
      'linear-gradient(135deg, #EC4899, #DB2777)', 
      'linear-gradient(135deg, #F472B6, #EC4899)',
      'linear-gradient(135deg, #F87171, #EF4444)'
    ];
    
    // Group by tabs
    const result = {};
    tabs.forEach(tab => {
      result[tab.id] = [];
    });
    
    exams.forEach(exam => {
      // Map category to a tab
      let tabKey = 'medical'; // Default tab
      let categoryName = 'General';
      let categorySlug = 'general';
      
      if (exam.category_id && categoryMap[exam.category_id]) {
        categoryName = categoryMap[exam.category_id].name;
        categorySlug = categoryMap[exam.category_id].slug;
      } else if (exam.category) {
        categoryName = exam.category;
        categorySlug = exam.category.toLowerCase().replace(/\s+/g, '-');
      }
      
      // Determine tab based on category
      if (categoryName.toLowerCase().includes('medical') || categoryName.toLowerCase().includes('health')) {
        tabKey = 'medical';
      } else if (categoryName.toLowerCase().includes('tech') || categoryName.toLowerCase().includes('computer')) {
        tabKey = 'technology';
      } else if (categoryName.toLowerCase().includes('finance') || categoryName.toLowerCase().includes('accounting')) {
        tabKey = 'finance';
      } else if (categoryName.toLowerCase().includes('legal') || categoryName.toLowerCase().includes('law')) {
        tabKey = 'legal';
      } else if (categoryName.toLowerCase().includes('edu') || categoryName.toLowerCase().includes('school')) {
        tabKey = 'education';
      }
      
      // Get a consistent gradient for this exam
      const hash = exam.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const gradient = gradients[hash % gradients.length];
      
      // Format the exam object
      const formattedExam = {
        id: exam.id,
        name: exam.name,
        category: categoryName,
        category_slug: categorySlug,
        slug: exam.slug || '',
        questions: exam.question_count || Math.floor(Math.random() * 300) + 100,
        gradient: gradient,
        icon: <BookOpen size={24} className="text-white" />
      };
      
      // Add to the appropriate tab
      if (result[tabKey]) {
        result[tabKey].push(formattedExam);
      }
    });
    
    return result;
  };

  // Filter exams based on search query
  useEffect(() => {
    if (!Object.keys(filteredExams).length) return;
    
    if (searchQuery.trim() === '') {
      // No need to do anything, we keep the original filtered exams
      return;
    } else {
      const query = searchQuery.toLowerCase().trim();
      // Create a single array of all matching exams from all tabs
      const allMatchingExams = [];
      
      // Search through all tabs/categories
      Object.keys(filteredExams).forEach(tabKey => {
        const matchingExamsInTab = filteredExams[tabKey].filter(exam => 
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
        {exams.map(exam => {
          // Generate the URL in the format /exam/category-slug/exam-slug
          const examUrl = exam.slug 
            ? `/exam/${exam.category_slug}/${exam.slug}` 
            : `/exams/${exam.id}`;
            
          return (
            <Link 
              key={exam.id}
              href={examUrl}
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
            </Link>
          );
        })}
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
        
        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default function ExamListPage() {
  return <ExamList />;
}
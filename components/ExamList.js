// // "use client";
// // import React, { useState, useEffect, useRef } from 'react';
// // import { Search, BookOpen, ChevronDown, CreditCard, GraduationCap } from 'lucide-react';
// // import Link from 'next/link';
// // import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// // import Header from './Header'; // Import the shared Header component

// // // Define static tabs
// // const tabs = [
// //   { id: 'medical', label: 'Medical', icon: <BookOpen size={16} /> },
// //   { id: 'technology', label: 'Technology', icon: <BookOpen size={16} /> },
// //   { id: 'finance', label: 'Finance', icon: <BookOpen size={16} /> },
// //   { id: 'legal', label: 'Legal', icon: <BookOpen size={16} /> },
// //   { id: 'education', label: 'Education', icon: <BookOpen size={16} /> }
// // ];

// // const ExamList = () => {
// //   const [activeTab, setActiveTab] = useState('medical');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [filteredExams, setFilteredExams] = useState({});
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const dropdownRef = useRef(null);
// //   const supabase = createClientComponentClient();

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     function handleClickOutside(event) {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     }
    
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Fetch exams from Supabase
// //   useEffect(() => {
// //     async function fetchExams() {
// //       try {
// //         setLoading(true);
        
// //         // Fetch categories for mapping
// //         let categoryMap = {};
// //         try {
// //           const { data: categoryData } = await supabase
// //             .from('exam_categories')
// //             .select('id, slug, name');
            
// //           if (categoryData) {
// //             categoryData.forEach(cat => {
// //               categoryMap[cat.id] = {
// //                 slug: cat.slug || 'general',
// //                 name: cat.name || 'General'
// //               };
// //             });
// //           }
// //         } catch (e) {
// //           console.log('Category fetch error:', e);
// //         }
        
// //         // Fetch exams
// //         const { data, error } = await supabase
// //           .from('exams')
// //           .select('*');
          
// //         if (error) {
// //           console.error('Error fetching exams:', error);
// //         } else {
// //           // Transform data to match the expected format
// //           const processedData = processExamData(data || [], categoryMap);
// //           setFilteredExams(processedData);
// //         }
// //       } catch (err) {
// //         console.error('Unexpected error:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
    
// //     fetchExams();
// //   }, []);

// //   // Process the exam data from Supabase to match the format needed
// //   const processExamData = (exams, categoryMap) => {
// //     const gradients = [
// //       'linear-gradient(135deg, #5A67D8, #3B82F6)', 
// //       'linear-gradient(135deg, #3B82F6, #2563EB)',
// //       'linear-gradient(135deg, #4F46E5, #4338CA)', 
// //       'linear-gradient(135deg, #6366F1, #4F46E5)',
// //       'linear-gradient(135deg, #8B5CF6, #7C3AED)', 
// //       'linear-gradient(135deg, #A78BFA, #8B5CF6)',
// //       'linear-gradient(135deg, #EC4899, #DB2777)', 
// //       'linear-gradient(135deg, #F472B6, #EC4899)',
// //       'linear-gradient(135deg, #F87171, #EF4444)'
// //     ];
    
// //     // Group by tabs
// //     const result = {};
// //     tabs.forEach(tab => {
// //       result[tab.id] = [];
// //     });
    
// //     exams.forEach(exam => {
// //       // Map category to a tab
// //       let tabKey = 'medical'; // Default tab
// //       let categoryName = 'General';
// //       let categorySlug = 'general';
      
// //       if (exam.category_id && categoryMap[exam.category_id]) {
// //         categoryName = categoryMap[exam.category_id].name;
// //         categorySlug = categoryMap[exam.category_id].slug;
// //       } else if (exam.category) {
// //         categoryName = exam.category;
// //         categorySlug = exam.category.toLowerCase().replace(/\s+/g, '-');
// //       }
      
// //       // Determine tab based on category
// //       if (categoryName.toLowerCase().includes('medical') || categoryName.toLowerCase().includes('health')) {
// //         tabKey = 'medical';
// //       } else if (categoryName.toLowerCase().includes('tech') || categoryName.toLowerCase().includes('computer')) {
// //         tabKey = 'technology';
// //       } else if (categoryName.toLowerCase().includes('finance') || categoryName.toLowerCase().includes('accounting')) {
// //         tabKey = 'finance';
// //       } else if (categoryName.toLowerCase().includes('legal') || categoryName.toLowerCase().includes('law')) {
// //         tabKey = 'legal';
// //       } else if (categoryName.toLowerCase().includes('edu') || categoryName.toLowerCase().includes('school')) {
// //         tabKey = 'education';
// //       }
      
// //       // Get a consistent gradient for this exam
// //       const hash = exam.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
// //       const gradient = gradients[hash % gradients.length];
      
// //       // Format the exam object
// //       const formattedExam = {
// //         id: exam.id,
// //         name: exam.name,
// //         category: categoryName,
// //         category_slug: categorySlug,
// //         slug: exam.slug || '',
// //         questions: exam.question_count || Math.floor(Math.random() * 300) + 100,
// //         gradient: gradient,
// //         icon: <BookOpen size={24} className="text-white" />
// //       };
      
// //       // Add to the appropriate tab
// //       if (result[tabKey]) {
// //         result[tabKey].push(formattedExam);
// //       }
// //     });
    
// //     return result;
// //   };

// //   // Filter exams based on search query
// //   useEffect(() => {
// //     if (!Object.keys(filteredExams).length) return;
    
// //     if (searchQuery.trim() === '') {
// //       // No need to do anything, we keep the original filtered exams
// //       return;
// //     } else {
// //       const query = searchQuery.toLowerCase().trim();
// //       // Create a single array of all matching exams from all tabs
// //       const allMatchingExams = [];
      
// //       // Search through all tabs/categories
// //       Object.keys(filteredExams).forEach(tabKey => {
// //         const matchingExamsInTab = filteredExams[tabKey].filter(exam => 
// //           exam.name.toLowerCase().includes(query) ||
// //           exam.category.toLowerCase().includes(query)
// //         );
        
// //         // Add matching exams to our array with their tab information
// //         matchingExamsInTab.forEach(exam => {
// //           allMatchingExams.push({
// //             ...exam,
// //             tabKey
// //           });
// //         });
// //       });
      
// //       // Group exams by their original tab for rendering
// //       const groupedByTab = {};
// //       allMatchingExams.forEach(exam => {
// //         const tabKey = exam.tabKey;
// //         if (!groupedByTab[tabKey]) {
// //           groupedByTab[tabKey] = [];
// //         }
// //         // Remove the extra tabKey property we added
// //         const { tabKey: _, ...examWithoutTabKey } = exam;
// //         groupedByTab[tabKey].push(examWithoutTabKey);
// //       });
      
// //       setFilteredExams(groupedByTab);
// //     }
// //   }, [searchQuery]);

// //   // When searching, get all exams that match the search query regardless of active tab
// //   const isSearching = searchQuery.trim() !== '';
  
// //   // Get active tab label for dropdown display
// //   const activeTabLabel = tabs.find(tab => tab.id === activeTab);

// //   // Handle tab selection from dropdown
// //   const handleTabSelect = (tabId) => {
// //     setActiveTab(tabId);
// //     setIsDropdownOpen(false);
// //   };

// //   // Function to render exams for each category
// //   const renderExamsForCategory = (exams, category) => (
// //     <div key={category}>
// //       <h2 className="text-lg font-semibold mb-4 pl-2 text-gray-800">{category}</h2>
// //       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-x-4">
// //         {exams.map(exam => {
// //           // Generate the URL in the format /exam/category-slug/exam-slug
// //           const examUrl = exam.slug 
// //             ? `/exam/${exam.category_slug}/${exam.slug}` 
// //             : `/exams/${exam.id}`;
            
// //           return (
// //             <Link 
// //               key={exam.id}
// //               href={examUrl}
// //               className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
// //             >
// //               <div 
// //                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all"
// //                 style={{ background: exam.gradient }}
// //               >
// //                 {exam.icon}
// //               </div>
// //               <div className="w-full px-1">
// //                 <div className="font-medium text-xs sm:text-sm text-gray-900 truncate">{exam.name}</div>
// //                 <div className="text-xs text-gray-500 truncate">{exam.questions} Questions</div>
// //               </div>
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
  
// //   return (
// //     <div className="p-2 sm:p-4 max-w-7xl mx-auto bg-white min-h-screen">
// //       {/* Hero Section with Updated Icon */}
// //       <div className="text-center mb-6 sm:mb-10 pt-6 sm:pt-10 relative">
// //         <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-lg">
// //           <GraduationCap size={40} className="text-white" strokeWidth={1.5} />
// //         </div>
// //         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ace Your Exams with Scoorly</h1>
// //         <p className="text-gray-600 mt-2 max-w-lg mx-auto">Practice with thousands of questions for professional certifications and exams</p>
        
// //         {/* CTA for Conversion */}
// //         <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
// //           <Link 
// //             href="/signin" 
// //             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-150 ease-in-out w-full sm:w-auto"
// //           >
// //             Start Practicing Free
// //           </Link>
// //           <Link 
// //             href="/pricing" 
// //             className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out flex items-center justify-center w-full sm:w-auto"
// //           >
// //             <CreditCard size={18} className="mr-2" />
// //             View Pricing
// //           </Link>
// //         </div>
        
// //         {/* Search Box */}
// //         <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
// //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //             <Search size={18} className="text-gray-400" />
// //           </div>
// //           <input
// //             type="text"
// //             className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
// //             placeholder="Search for exams..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //           />
// //         </div>
// //       </div>
      
// //       {/* Loading state */}
// //       {loading ? (
// //         <div className="flex justify-center py-16">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //         </div>
// //       ) : (
// //         <>
// //           {/* Tab Navigation - Dropdown on mobile, horizontal tabs on larger screens */}
// //           <div className="mb-6 sm:mb-8">
// //             {/* Mobile dropdown */}
// //             <div className="block sm:hidden" ref={dropdownRef}>
// //               <button
// //                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                 className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
// //               >
// //                 <div className="flex items-center">
// //                   {activeTabLabel?.icon}
// //                   <span className="ml-2 font-medium">{activeTabLabel?.label}</span>
// //                 </div>
// //                 <ChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
// //               </button>
              
// //               {isDropdownOpen && (
// //                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
// //                   {tabs.map(tab => (
// //                     <button
// //                       key={tab.id}
// //                       onClick={() => handleTabSelect(tab.id)}
// //                       className={`w-full flex items-center px-4 py-3 text-left text-sm ${
// //                         activeTab === tab.id
// //                           ? 'bg-blue-50 text-blue-600 font-medium'
// //                           : 'text-gray-700 hover:bg-gray-50'
// //                       }`}
// //                     >
// //                       <span className="mr-2">{tab.icon}</span>
// //                       {tab.label}
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
            
// //             {/* Desktop tabs */}
// //             <div className="hidden sm:flex overflow-x-auto pb-2 scrollbar-hide justify-center">
// //               <div className="flex space-x-2 px-1">
// //                 {tabs.map(tab => (
// //                   <button
// //                     key={tab.id}
// //                     onClick={() => setActiveTab(tab.id)}
// //                     className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
// //                       activeTab === tab.id
// //                         ? 'bg-blue-600 text-white'
// //                         : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
// //                     }`}
// //                   >
// //                     <span className="mr-2">{tab.icon}</span>
// //                     {tab.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Exam Listings */}
// //           <div className="space-y-6 sm:space-y-10">
// //             {isSearching ? (
// //               // When searching, show all matching exams grouped by tab
// //               Object.keys(filteredExams).length > 0 ? (
// //                 Object.keys(filteredExams).map(tabKey => {
// //                   // Only render tabs that have matching exams
// //                   if (filteredExams[tabKey].length === 0) return null;
                  
// //                   // Group exams by category within this tab
// //                   const groupedByCategory = {};
// //                   filteredExams[tabKey].forEach(exam => {
// //                     if (!groupedByCategory[exam.category]) {
// //                       groupedByCategory[exam.category] = [];
// //                     }
// //                     groupedByCategory[exam.category].push(exam);
// //                   });
                  
// //                   // Render tab section with its categories
// //                   return (
// //                     <div key={tabKey} className="mb-8">
// //                       <h2 className="text-xl font-bold mb-4 pl-2 text-gray-800 flex items-center">
// //                         {tabs.find(t => t.id === tabKey)?.icon}
// //                         <span className="ml-2">{tabs.find(t => t.id === tabKey)?.label}</span>
// //                       </h2>
// //                       <div className="space-y-8">
// //                         {Object.keys(groupedByCategory).map(category => 
// //                           renderExamsForCategory(groupedByCategory[category], category)
// //                         )}
// //                       </div>
// //                     </div>
// //                   );
// //                 })
// //               ) : (
// //                 <div className="text-center py-10">
// //                   <p className="text-gray-500">No exams match your search criteria</p>
// //                   <Link href="/signup" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
// //                     Request New Exam
// //                   </Link>
// //                 </div>
// //               )
// //             ) : (
// //               // When not searching, only show the active tab
// //               (() => {
// //                 // Group active tab exams by category
// //                 const activeExams = filteredExams[activeTab] || [];
// //                 const groupedExams = {};
                
// //                 activeExams.forEach(exam => {
// //                   if (!groupedExams[exam.category]) {
// //                     groupedExams[exam.category] = [];
// //                   }
// //                   groupedExams[exam.category].push(exam);
// //                 });
                
// //                 return Object.keys(groupedExams).length > 0 ? (
// //                   <>
// //                     {Object.keys(groupedExams).map(category => 
// //                       renderExamsForCategory(groupedExams[category], category)
// //                     )}
// //                     {/* Call-to-action at end of exam list */}
// //                     <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-sm border border-blue-100">
// //                       <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Premium Exams</h3>
// //                       <p className="text-gray-600 mb-4">Get unlimited access to all premium exams and detailed explanations</p>
// //                       <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
// //                         <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
// //                           View Plans
// //                         </Link>
// //                         <Link href="/signup" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-5 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
// //                           Try Free
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <div className="text-center py-10">
// //                     <p className="text-gray-500">No exams available in this category</p>
// //                   </div>
// //                 );
// //               })()
// //             )}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default function ExamListPage() {
// //   return (
// //     <>
// //       <Header />
// //       <ExamList />
// //     </>
// //   );
// // }
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Search, BookOpen, CreditCard, GraduationCap } from 'lucide-react';
// import Link from 'next/link';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import TabFilter from './TabFilter';
// import Header from './Header';

// const ExamList = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [exams, setExams] = useState([]);
//   const [filteredExams, setFilteredExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const supabase = createClientComponentClient();

//   // Fetch exams from Supabase
//   useEffect(() => {
//     async function fetchExams() {
//       try {
//         setLoading(true);
        
//         // Fetch all exams that are not categories
//         const { data, error } = await supabase
//           .from('exams')
//           .select('*')
//           .eq('is_active', true)
//           .eq('is_category', false)
//           .order('display_order', { ascending: true });
          
//         if (error) {
//           console.error('Error fetching exams:', error);
//           return;
//         }
        
//         // Process exams to include necessary display properties
//         const processedExams = data.map(exam => {
//           const gradient = getGradientForExam(exam.name, exam.color);
          
//           // Process tabgroups if present
//           let tabGroups = [];
//           if (exam.tabgroups) {
//             try {
//               tabGroups = typeof exam.tabgroups === 'string' 
//                 ? JSON.parse(exam.tabgroups) 
//                 : exam.tabgroups;
              
//               if (!Array.isArray(tabGroups) && typeof tabGroups === 'string') {
//                 tabGroups = [tabGroups];
//               }
//             } catch (e) {
//               console.error('Error parsing tabgroups:', e);
//               tabGroups = [];
//             }
//           }
          
//           // Generate category slug
//           const categorySlug = exam.category 
//             ? exam.category.toLowerCase().replace(/\s+/g, '-') 
//             : 'general';
          
//           return {
//             ...exam,
//             tabGroups,
//             gradient,
//             categorySlug,
//             icon: <BookOpen size={24} className="text-white" />,
//             questions: exam.question_count || Math.floor(Math.random() * 300) + 100
//           };
//         });
        
//         setExams(processedExams);
//       } catch (err) {
//         console.error('Unexpected error:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchExams();
//   }, []);

//   // Filter exams based on active tab and search query
//   useEffect(() => {
//     if (!exams.length) return;
    
//     let filtered = [...exams];
    
//     // Filter by tab if not "all"
//     if (activeTab !== 'all') {
//       filtered = filtered.filter(exam => {
//         // Check if exam has tabgroups that include the active tab
//         if (exam.tabGroups && exam.tabGroups.length) {
//           return exam.tabGroups.includes(activeTab);
//         }
        
//         // Or check if the exam's category slug matches the active tab
//         return exam.categorySlug === activeTab || 
//                exam.category?.toLowerCase().replace(/\s+/g, '-') === activeTab;
//       });
//     }
    
//     // Filter by search query
//     if (searchQuery.trim() !== '') {
//       const query = searchQuery.toLowerCase().trim();
//       filtered = filtered.filter(exam => 
//         exam.name.toLowerCase().includes(query) ||
//         exam.description?.toLowerCase().includes(query) ||
//         exam.category?.toLowerCase().includes(query)
//       );
//     }
    
//     // Group exams by category
//     const groupedExams = {};
//     filtered.forEach(exam => {
//       const category = exam.category || 'General';
//       if (!groupedExams[category]) {
//         groupedExams[category] = [];
//       }
//       groupedExams[category].push(exam);
//     });
    
//     setFilteredExams(groupedExams);
//   }, [exams, activeTab, searchQuery]);
  
//   // Function to get a consistent gradient for an exam
//   const getGradientForExam = (examName, color) => {
//     // Use provided color if available
//     if (color) {
//       return `linear-gradient(135deg, ${color}, ${adjustColor(color, -20)})`;
//     }
    
//     // Otherwise, generate a gradient based on the exam name
//     const gradients = [
//       'linear-gradient(135deg, #5A67D8, #3B82F6)', 
//       'linear-gradient(135deg, #3B82F6, #2563EB)',
//       'linear-gradient(135deg, #4F46E5, #4338CA)', 
//       'linear-gradient(135deg, #6366F1, #4F46E5)',
//       'linear-gradient(135deg, #8B5CF6, #7C3AED)', 
//       'linear-gradient(135deg, #A78BFA, #8B5CF6)',
//       'linear-gradient(135deg, #EC4899, #DB2777)', 
//       'linear-gradient(135deg, #F472B6, #EC4899)',
//       'linear-gradient(135deg, #F87171, #EF4444)'
//     ];
    
//     const hash = examName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//     return gradients[hash % gradients.length];
//   };
  
//   // Helper to adjust color brightness
//   const adjustColor = (hex, amount) => {
//     try {
//       // Parse the hex color
//       let r = parseInt(hex.substring(1, 3), 16);
//       let g = parseInt(hex.substring(3, 5), 16);
//       let b = parseInt(hex.substring(5, 7), 16);
      
//       // Adjust brightness
//       r = Math.max(0, Math.min(255, r + amount));
//       g = Math.max(0, Math.min(255, g + amount));
//       b = Math.max(0, Math.min(255, b + amount));
      
//       // Convert back to hex
//       return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
//     } catch (e) {
//       console.error('Error adjusting color:', e);
//       return hex;
//     }
//   };

//   // Function to render exams for each category
//   const renderExamsForCategory = (exams, category) => (
//     <div key={category}>
//       <h2 className="text-lg font-semibold mb-4 pl-2 text-gray-800">{category}</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-x-4">
//         {exams.map(exam => {
//           // Generate the URL in the format /exam/category-slug/exam-slug
//           const examUrl = exam.slug 
//             ? `/exam/${exam.categorySlug}/${exam.slug}` 
//             : `/exams/${exam.id}`;
            
//           return (
//             <Link 
//               key={exam.id}
//               href={examUrl}
//               className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
//             >
//               <div 
//                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all"
//                 style={{ background: exam.gradient }}
//               >
//                 {exam.icon}
//               </div>
//               <div className="w-full px-1">
//                 <div className="font-medium text-xs sm:text-sm text-gray-900 truncate">{exam.name}</div>
//                 <div className="text-xs text-gray-500 truncate">{exam.questions} Questions</div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
  
//   return (
//     <div className="p-2 sm:p-4 max-w-7xl mx-auto bg-white min-h-screen">
//       {/* Hero Section with Updated Icon */}
//       <div className="text-center mb-6 sm:mb-10 pt-6 sm:pt-10 relative">
//         <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-lg">
//           <GraduationCap size={40} className="text-white" strokeWidth={1.5} />
//         </div>
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ace Your Exams with Scoorly</h1>
//         <p className="text-gray-600 mt-2 max-w-lg mx-auto">Practice with thousands of questions for professional certifications and exams</p>
        
//         {/* CTA for Conversion */}
//         <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Link 
//             href="/signin" 
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-150 ease-in-out w-full sm:w-auto"
//           >
//             Start Practicing Free
//           </Link>
//           <Link 
//             href="/pricing" 
//             className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out flex items-center justify-center w-full sm:w-auto"
//           >
//             <CreditCard size={18} className="mr-2" />
//             View Pricing
//           </Link>
//         </div>
        
//         {/* Search Box */}
//         <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search size={18} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//             placeholder="Search for exams..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>
      
//       {/* Loading state */}
//       {loading ? (
//         <div className="flex justify-center py-16">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : (
//         <>
//           {/* Tab Filter Component */}
//           <TabFilter 
//             activeTab={activeTab} 
//             setActiveTab={setActiveTab} 
//           />

//           {/* Exam Listings */}
//           <div className="space-y-6 sm:space-y-10">
//             {Object.keys(filteredExams).length > 0 ? (
//               <>
//                 {Object.keys(filteredExams).map(category => 
//                   renderExamsForCategory(filteredExams[category], category)
//                 )}
                
//                 {/* Call-to-action at end of exam list */}
//                 <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-sm border border-blue-100">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Premium Exams</h3>
//                   <p className="text-gray-600 mb-4">Get unlimited access to all premium exams and detailed explanations</p>
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//                     <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
//                       View Plans
//                     </Link>
//                     <Link href="/signup" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-5 rounded-md border border-gray-300 shadow-sm transition duration-150 ease-in-out w-full sm:w-auto">
//                       Try Free
//                     </Link>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-10">
//                 <p className="text-gray-500">
//                   {searchQuery 
//                     ? 'No exams match your search criteria' 
//                     : 'No exams available in this category'}
//                 </p>
//                 <Link href="/signup" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
//                   Request New Exam
//                 </Link>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default function ExamListPage() {
//   return (
//     <>
//       <Header />
//       <ExamList />
//     </>
//   );
// }
"use client";
import React, { useState, useEffect } from 'react';
import { Search, BookOpen, CreditCard, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import TabFilter from './TabFilter';
import Header from './Header';

const ExamList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState({});
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  // Helper function to safely parse tabgroups in any format
  const parseTabgroups = (tabgroups) => {
    if (!tabgroups) return [];
    
    try {
      const parsed = JSON.parse(tabgroups);
      if (Array.isArray(parsed)) return parsed;
      if (parsed.tabs && Array.isArray(parsed.tabs)) return parsed.tabs;
      return [parsed];
    } catch (e) {
      if (typeof tabgroups === 'string' && tabgroups.includes(',')) {
        return tabgroups.split(',').map(s => s.trim());
      }
      return [tabgroups];
    }
  };

  // Fetch exams from Supabase
  useEffect(() => {
    async function fetchExams() {
      try {
        setLoading(true);
        
        // Fetch all exams
        const { data, error } = await supabase
          .from('exams')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });
          
        if (error) {
          console.error('Error fetching exams:', error);
          return;
        }
        
        // Filter out category entries
        const examData = data.filter(item => item.is_category !== true);
        
        // Fetch categories to map category_id to category info
        const { data: categories, error: catError } = await supabase
          .from('exams')
          .select('id, name, slug')
          .eq('is_category', true);
          
        if (catError) {
          console.error('Error fetching categories:', catError);
        }
        
        // Create a map of category IDs to category info
        const categoryMap = {};
        if (categories) {
          categories.forEach(cat => {
            categoryMap[cat.id] = {
              name: cat.name,
              slug: cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-')
            };
          });
        }
        
        // Process exams to include necessary display properties
        const processedExams = examData.map(exam => {
          // Process tabgroups if present
          const tabGroups = exam.tabgroups ? parseTabgroups(exam.tabgroups) : [];
          
          const gradient = getGradientForExam(exam.name, exam.color);
          
          // Get category info from categoryMap if category_id exists
          let categoryName = exam.category || 'General';
          let categorySlug = 'general';
          
          if (exam.category_id && categoryMap[exam.category_id]) {
            categoryName = categoryMap[exam.category_id].name;
            categorySlug = categoryMap[exam.category_id].slug;
          } else if (exam.category) {
            // If no category_id match but category exists, generate slug from it
            categorySlug = exam.category.toLowerCase().replace(/\s+/g, '-');
          }
          
          return {
            ...exam,
            tabGroups,
            gradient,
            category: categoryName,
            categorySlug,
            icon: <BookOpen size={24} className="text-white" />,
            questions: exam.question_count || Math.floor(Math.random() * 300) + 100
          };
        });
        
        setExams(processedExams);
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchExams();
  }, []);

  // Filter exams based on active tab and search query
  useEffect(() => {
    if (!exams.length) return;
    
    let filtered = [...exams];
    
    // Filter by tab if not "all"
    if (activeTab !== 'all') {
      filtered = filtered.filter(exam => {
        // Check if exam's category slug matches the active tab
        if (exam.categorySlug === activeTab) {
          return true;
        }
        
        // Check if exam has tabgroups that include the active tab
        if (exam.tabGroups && exam.tabGroups.length) {
          return exam.tabGroups.includes(activeTab);
        }
        
        return false;
      });
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(exam => 
        exam.name.toLowerCase().includes(query) ||
        (exam.description ? String(exam.description).toLowerCase().includes(query) : false) ||
        (exam.category ? exam.category.toLowerCase().includes(query) : false)
      );
    }
    
    // Group exams by category
    const groupedExams = {};
    filtered.forEach(exam => {
      const category = exam.category || 'General';
      if (!groupedExams[category]) {
        groupedExams[category] = [];
      }
      groupedExams[category].push(exam);
    });
    
    setFilteredExams(groupedExams);
  }, [exams, activeTab, searchQuery]);
  
  // Function to get a consistent gradient for an exam
  const getGradientForExam = (examName, color) => {
    // Use provided color if available
    if (color) {
      return `linear-gradient(135deg, ${color}, ${adjustColor(color, -20)})`;
    }
    
    // Otherwise, generate a gradient based on the exam name
    const gradients = [
      'linear-gradient(145deg, #3AA0FF, #1E90FF)',
      'linear-gradient(145deg, #FFB366, #F6A54C)',
      'linear-gradient(145deg, #7D3E66, #5D2E46)',
      'linear-gradient(145deg, #4FA8EB, #3498DB)',
      'linear-gradient(145deg, #FF79C4, #FF69B4)',
      'linear-gradient(145deg, #FF7357, #FF6347)',
      'linear-gradient(145deg, #2F57A8, #1F4788)',
      'linear-gradient(145deg, #9B5523, #8B4513)',
      'linear-gradient(145deg, #5C4D4D, #4C3D3D)'
    ];
    
    const hash = examName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  };
  
  // Helper to adjust color brightness
  const adjustColor = (hex, amount) => {
    try {
      // Check if hex is in correct format
      if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
        return '#3B82F6'; // Default blue if invalid
      }
      
      // Parse the hex color
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);
      
      // Adjust brightness
      r = Math.max(0, Math.min(255, r + amount));
      g = Math.max(0, Math.min(255, g + amount));
      b = Math.max(0, Math.min(255, b + amount));
      
      // Convert back to hex
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    } catch (e) {
      console.error('Error adjusting color:', e);
      return hex || '#3B82F6';
    }
  };

  // Function to render exams for each category
  const renderExamsForCategory = (exams, category) => (
    <div key={category}>
      <h2 className="text-lg font-semibold mb-4 pl-2 text-gray-800">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-x-4">
        {exams.map(exam => {
          // Generate the URL in the format /exam/category-slug/exam-slug
          const examUrl = exam.slug 
            ? `/exam/${exam.categorySlug}/${exam.slug}` 
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
          {/* Tab Filter Component */}
          <TabFilter 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />

          {/* Exam Listings */}
          <div className="space-y-6 sm:space-y-10">
            {Object.keys(filteredExams).length > 0 ? (
              <>
                {Object.keys(filteredExams).map(category => 
                  renderExamsForCategory(filteredExams[category], category)
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
                <p className="text-gray-500">
                  {searchQuery 
                    ? 'No exams match your search criteria' 
                    : 'No exams available in this category'}
                </p>
                <Link href="/signup" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
                  Request New Exam
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default function ExamListPage() {
  return (
    <>
      <Header />
      <ExamList />
    </>
  );
}
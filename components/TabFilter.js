// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { BookOpen, ChevronDown } from 'lucide-react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// const TabFilter = ({ activeTab, setActiveTab, onTabChange }) => {
//   const [tabs, setTabs] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const dropdownRef = useRef(null);
//   const supabase = createClientComponentClient();

//   // Helper function to safely parse tabgroups in any format
//   const parseTabgroups = (tabgroups) => {
//     if (!tabgroups) return [];
    
//     // First, try parsing as JSON
//     try {
//       const parsed = JSON.parse(tabgroups);
      
//       // If it's an array, return it directly
//       if (Array.isArray(parsed)) return parsed;
      
//       // If it's an object with a 'tabs' property that's an array, return that
//       if (parsed.tabs && Array.isArray(parsed.tabs)) return parsed.tabs;
      
//       // Otherwise, return it wrapped in an array
//       return [parsed];
//     } catch (e) {
//       // If not JSON, check if it's a comma-separated string
//       if (typeof tabgroups === 'string' && tabgroups.includes(',')) {
//         return tabgroups.split(',').map(s => s.trim());
//       }
      
//       // Single value string
//       return [tabgroups];
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     }
    
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Fetch tabgroups from Supabase
//   useEffect(() => {
//     async function fetchTabGroups() {
//       try {
//         setLoading(true);
        
//         // Log the start of the fetch for debugging
//         console.log('Fetching tabgroups from Supabase...');
        
//         // Fetch all exams that have tabgroups
//         const { data, error } = await supabase
//           .from('exams')
//           .select('*')
//           .not('tabgroups', 'is', null);
        
//         if (error) {
//           console.error('Error fetching tabgroups:', error);
//           setLoading(false);
//           return;
//         }
        
//         // Log the fetched data for debugging
//         console.log('Fetched exams with tabgroups:', data);
        
//         // Process and extract unique tabgroups
//         const tabGroupMap = new Map();
        
//         // Default "All" tab
//         tabGroupMap.set('all', {
//           id: 'all',
//           label: 'All Exams',
//           icon: <BookOpen size={16} />,
//           color: '#3B82F6'
//         });
        
//         // Process each exam's tabgroups
//         data.forEach(item => {
//           if (item.tabgroups) {
//             // Log the tabgroups value for debugging
//             console.log(`Processing tabgroups for ${item.name}:`, item.tabgroups);
            
//             // Parse tabgroups using our robust parser
//             const tabGroups = parseTabgroups(item.tabgroups);
//             console.log('Parsed tabgroups:', tabGroups);
            
//             // Add each tabgroup to our map
//             tabGroups.forEach(group => {
//               if (!tabGroupMap.has(group)) {
//                 tabGroupMap.set(group, {
//                   id: group,
//                   label: group.charAt(0).toUpperCase() + group.slice(1).replace(/-/g, ' '),
//                   icon: <BookOpen size={16} />,
//                   color: item.color || '#3B82F6'
//                 });
//               }
//             });
//           }
//         });
        
//         // Log the tabgroups found
//         console.log('Extracted tabgroups:', Array.from(tabGroupMap.keys()));
        
//         // If no tabgroups found other than "all", we'll just use categories from the exams table
//         if (tabGroupMap.size <= 1) {
//           console.log('No tabgroups found, falling back to categories');
          
//           // Fetch categories to use as tabs
//           const { data: categoryData, error: categoryError } = await supabase
//             .from('exams')
//             .select('*')
//             .eq('is_category', true)
//             .order('display_order', { ascending: true });
            
//           if (categoryError) {
//             console.error('Error fetching categories:', categoryError);
//           } else if (categoryData && categoryData.length > 0) {
//             console.log('Found categories to use as tabs:', categoryData);
            
//             // Use categories as tabs
//             categoryData.forEach(category => {
//               // Use the slug as the id
//               const tabId = category.slug || category.name.toLowerCase().replace(/\s+/g, '-');
              
//               tabGroupMap.set(tabId, {
//                 id: tabId,
//                 label: category.name,
//                 icon: <BookOpen size={16} />,
//                 color: category.color || '#3B82F6'
//               });
//             });
//           } else {
//             console.warn('No categories or tabgroups found in the database');
//           }
//         }
        
//         // Convert map to array and sort alphabetically (keeping 'all' first)
//         const tabsArray = Array.from(tabGroupMap.values());
//         const allTab = tabsArray.find(tab => tab.id === 'all');
//         const restTabs = tabsArray.filter(tab => tab.id !== 'all').sort((a, b) => a.label.localeCompare(b.label));
        
//         const sortedTabs = [allTab, ...restTabs];
//         console.log('Final tabs array:', sortedTabs);
        
//         setTabs(sortedTabs);
        
//         // Set default active tab if not already set
//         if (!activeTab || !tabGroupMap.has(activeTab)) {
//           setActiveTab('all');
//         }
//       } catch (err) {
//         console.error('Unexpected error fetching tabgroups:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchTabGroups();
//   }, [setActiveTab, activeTab]);

//   // Handle tab selection
//   const handleTabSelect = (tabId) => {
//     setActiveTab(tabId);
//     setIsDropdownOpen(false);
    
//     if (onTabChange) {
//       onTabChange(tabId);
//     }
//   };

//   // Get active tab label for dropdown display
//   const activeTabLabel = tabs.find(tab => tab.id === activeTab);

//   if (loading) {
//     return (
//       <div className="mb-6 sm:mb-8 animate-pulse">
//         <div className="h-10 bg-gray-200 rounded-lg"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-6 sm:mb-8">
//       {/* Mobile dropdown */}
//       <div className="block sm:hidden" ref={dropdownRef}>
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             {activeTabLabel?.icon}
//             <span className="ml-2 font-medium">{activeTabLabel?.label}</span>
//           </div>
//           <ChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
//         </button>
        
//         {isDropdownOpen && (
//           <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => handleTabSelect(tab.id)}
//                 className={`w-full flex items-center px-4 py-3 text-left text-sm ${
//                   activeTab === tab.id
//                     ? 'bg-blue-50 text-blue-600 font-medium'
//                     : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 <span className="mr-2">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
      
//       {/* Desktop tabs */}
//       <div className="hidden sm:flex overflow-x-auto pb-2 scrollbar-hide justify-center">
//         <div className="flex space-x-2 px-1">
//           {tabs.map(tab => (
//             <button
//               key={tab.id}
//               onClick={() => handleTabSelect(tab.id)}
//               className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
//                 activeTab === tab.id
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//               }`}
//             >
//               <span className="mr-2">{tab.icon}</span>
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabFilter;
"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const TabFilter = ({ activeTab, setActiveTab, onTabChange }) => {
  const [tabs, setTabs] = useState([
    { id: 'all', label: 'All Exams' } // Default tab to show immediately
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
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

  // Fetch tabgroups from Supabase
  useEffect(() => {
    async function fetchTabGroups() {
      try {
        // Fetch all exams that have tabgroups
        const { data, error } = await supabase
          .from('exams')
          .select('*')
          .not('tabgroups', 'is', null);
        
        if (error) {
          console.error('Error fetching tabgroups:', error);
          setIsLoading(false);
          return;
        }
        
        // Process and extract unique tabgroups
        const tabGroupMap = new Map();
        
        // Default "All" tab
        tabGroupMap.set('all', {
          id: 'all',
          label: 'All Exams'
        });
        
        // Process each exam's tabgroups
        data.forEach(item => {
          if (item.tabgroups) {
            // Parse tabgroups using our robust parser
            const tabGroups = parseTabgroups(item.tabgroups);
            
            // Add each tabgroup to our map
            tabGroups.forEach(group => {
              if (!tabGroupMap.has(group)) {
                tabGroupMap.set(group, {
                  id: group,
                  label: group.charAt(0).toUpperCase() + group.slice(1).replace(/-/g, ' ')
                });
              }
            });
          }
        });
        
        // If no tabgroups found other than "all", use categories from the exams table
        if (tabGroupMap.size <= 1) {
          // Fetch categories to use as tabs
          const { data: categoryData, error: categoryError } = await supabase
            .from('exams')
            .select('*')
            .eq('is_category', true)
            .order('display_order', { ascending: true });
            
          if (categoryError) {
            console.error('Error fetching categories:', categoryError);
          } else if (categoryData && categoryData.length > 0) {
            // Use categories as tabs
            categoryData.forEach(category => {
              // Use the slug as the id
              const tabId = category.slug || category.name.toLowerCase().replace(/\s+/g, '-');
              
              tabGroupMap.set(tabId, {
                id: tabId,
                label: category.name
              });
            });
          }
        }
        
        // Convert map to array and sort alphabetically (keeping 'all' first)
        const tabsArray = Array.from(tabGroupMap.values());
        const allTab = tabsArray.find(tab => tab.id === 'all');
        const restTabs = tabsArray.filter(tab => tab.id !== 'all').sort((a, b) => a.label.localeCompare(b.label));
        
        const sortedTabs = [allTab, ...restTabs];
        setTabs(sortedTabs);
        
        // Set default active tab if not already set
        if (!activeTab || !tabGroupMap.has(activeTab)) {
          setActiveTab('all');
        }
      } catch (err) {
        console.error('Unexpected error fetching tabgroups:', err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchTabGroups();
  }, [setActiveTab]);

  // Handle tab selection
  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false);
    
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // Get active tab label for dropdown display
  const activeTabLabel = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div className="mb-6 sm:mb-8">
      {/* Mobile dropdown */}
      <div className="block sm:hidden" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
        >
          <div className="flex items-center">
            <span className="font-medium">{activeTabLabel?.label}</span>
          </div>
          <ChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`w-full px-4 py-3 text-left text-sm ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
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
              onClick={() => handleTabSelect(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabFilter;
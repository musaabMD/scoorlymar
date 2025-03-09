// 'use client';
// import React from 'react';
// import { Search, GraduationCap, Menu, Home } from 'lucide-react';
// import Link from 'next/link';

// const Header = ({
//   examName,
//   totalCorrect,
//   totalQuestions,
//   overallPercentage,
//   searchTerm,
//   onSearchChange,
//   activeTab
// }) => {
//   // Function to get page title based on active tab
//   const getPageTitle = (tab) => {
//     switch (tab) {
//       case 'study': return 'Study Mode';
//       case 'assessment': return 'Self Assessment';
//       case 'review': return 'Review';
//       case 'concepts': return 'Concepts';
//       case 'chat': return 'Chat';
//       case 'profile': return 'Profile';
//       default: return 'Dashboard';
//     }
//   };
  
//   const pageTitle = getPageTitle(activeTab);
  
//   return (
//     <div className="bg-white text-gray-800 shadow-sm border-b border-gray-200 w-full">
//       <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 w-full">
//         {/* Single row that restructures on different viewports */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
//           {/* Logo and App Name */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-1 sm:mr-2">
//                 <GraduationCap className="text-white" size={14} strokeWidth={2} />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-base sm:text-lg text-gray-900">Scoorly</span>
//                 <span className="text-gray-500 text-xs -mt-1">{examName}</span>
//               </div>
//             </Link>
            
//             {/* Page title */}
//             <div className="hidden xs:flex items-center">
//               <span className="mx-1 text-gray-400">/</span>
//               <span className="text-gray-500 text-sm font-medium truncate max-w-[80px] sm:max-w-none">
//                 {pageTitle}
//               </span>
//             </div>
//           </div>

//           {/* Right side elements flexibly arranged */}
//           <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 w-full md:w-auto">
//             {/* Search box - full width on mobile, sized appropriately on desktop */}
//             <div className="relative w-full md:w-64 lg:w-80 md:mr-3">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
//                 <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
//               </div>
//               <input
//                 type="search"
//                 className="block w-full py-1.5 sm:p-2 pl-7 sm:pl-10 text-xs sm:text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
//                 placeholder="Search topics..."
//                 value={searchTerm}
//                 onChange={e => onSearchChange(e.target.value)}
//               />
//             </div>
            
//             {/* Right-side actions row */}
//             <div className="flex items-center space-x-2 mt-2 md:mt-0 self-end md:self-auto">
//               {/* Home button */}
//               <Link href="/" className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//                 <Home className="w-4 h-4 text-gray-700" />
//               </Link>
              
//               {/* Upgrade button with gradient */}
//               <Link href="/" className="flex items-center text-xs sm:text-sm font-medium text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-sm">
//                 <span className="whitespace-nowrap">Upgrade</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
'use client';
import React from 'react';
import { Search, GraduationCap, Menu, Home } from 'lucide-react';
import Link from 'next/link';

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
      case 'review': return 'Review';
      case 'concepts': return 'Concepts';
      case 'chat': return 'Chat';
      case 'profile': return 'Profile';
      default: return 'Dashboard';
    }
  };
  const pageTitle = getPageTitle(activeTab);

  return (
    <div className="bg-white text-gray-800 shadow-sm border-b border-gray-200 w-full">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 w-full">
        {/* Main row */}
        <div className="flex items-center justify-between w-full">
          {/* Logo and App Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-1 sm:mr-2">
                <GraduationCap className="text-white" size={14} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-gray-900">Scoorly</span>
                <span className="text-gray-500 text-xs -mt-1">{examName}</span>
              </div>
            </Link>
            {/* Page title */}
            <div className="hidden xs:flex items-center">
              <span className="mx-1 text-gray-400">/</span>
              <span className="text-gray-500 text-sm font-medium truncate max-w-[80px] sm:max-w-none">
                {pageTitle}
              </span>
            </div>
          </div>

          {/* Right side actions - always in row */}
          <div className="flex items-center">
            {/* Upgrade button with gradient */}
            <Link href="/pricing" className="flex items-center text-xs sm:text-sm font-medium text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-sm">
              <span className="whitespace-nowrap">Upgrade</span>
            </Link>
            
            {/* Home button */}
            <Link href="/" className="hidden sm:flex items-center justify-center w-8 h-8 ml-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Home className="w-4 h-4 text-gray-700" />
            </Link>
          </div>
        </div>
        
        {/* Search row - always separate */}
        <div className="relative w-full mt-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
            <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          </div>
          <input
            type="search"
            className="block w-full py-1.5 sm:p-2 pl-7 sm:pl-10 text-xs sm:text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
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
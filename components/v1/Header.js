// 'use client';
// import React from 'react';
// import { Search, GraduationCap, Menu } from 'lucide-react';

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
//     <div className="bg-white text-gray-800 shadow-sm border-b border-gray-200">
//       <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
//         {/* First row: App logo, page title, and score */}
//         <div className="flex items-center justify-between">
//           {/* Logo and App Name - simplified on mobile */}
//           <div className="flex items-center">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-1 sm:mr-2">
//               <GraduationCap className="text-white" size={14} strokeWidth={2} />
//             </div>
//             <span className="font-bold text-base sm:text-lg text-gray-900">Scoorly</span>
            
//             {/* Page title - hidden on smallest screens */}
//             <div className="hidden xs:flex items-center">
//               <span className="mx-1 text-gray-400">/</span>
//               <span className="text-gray-500 text-sm font-medium truncate max-w-[80px] sm:max-w-none">
//                 {pageTitle}
//               </span>
//             </div>
//           </div>

//           {/* Score display - minimal on mobile */}
//           <div className="flex items-center space-x-1 sm:space-x-3">
//             {/* Score pill - simplified on mobile */}
//             <div className="bg-blue-50 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center border border-blue-100">
//               <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">
//                 {Math.round(overallPercentage / 10)}
//               </div>
//               <div className="text-xs sm:text-sm ml-1 sm:ml-2">
//                 <span className="font-bold text-blue-800">{totalCorrect}/{totalQuestions}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second row: Search box - simplified on mobile */}
//         <div className="mt-2 sm:mt-3 relative w-full md:max-w-md md:mx-auto">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
//             <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
//           </div>
//           <input
//             type="search"
//             className="block w-full py-1.5 sm:p-2 pl-7 sm:pl-10 text-xs sm:text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
//             placeholder="Search topics..."
//             value={searchTerm}
//             onChange={e => onSearchChange(e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
'use client';
import React from 'react';
import { Search, GraduationCap, Menu } from 'lucide-react';

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
    <div className="bg-white text-gray-800 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        {/* First row: App logo, page title, and score */}
        <div className="flex items-center justify-between">
          {/* Logo and App Name - simplified on mobile */}
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-1 sm:mr-2">
              <GraduationCap className="text-white" size={14} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-gray-900">Scoorly</span>
              <span className="text-gray-500 text-xs -mt-1">{examName}</span>
            </div>
            
            {/* Page title - hidden on smallest screens */}
            <div className="hidden xs:flex items-center">
              <span className="mx-1 text-gray-400">/</span>
              <span className="text-gray-500 text-sm font-medium truncate max-w-[80px] sm:max-w-none">
                {pageTitle}
              </span>
            </div>
          </div>

          {/* Score display - minimal on mobile */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Score pill - simplified on mobile */}
            <div className="bg-blue-50 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center border border-blue-100">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">
                {Math.round(overallPercentage / 10)}
              </div>
              <div className="text-xs sm:text-sm ml-1 sm:ml-2">
                <span className="font-bold text-blue-800">{totalCorrect}/{totalQuestions}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second row: Search box - simplified on mobile */}
        <div className="mt-2 sm:mt-3 relative w-full md:max-w-md md:mx-auto">
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
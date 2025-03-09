'use client';

const Header = ({ 
  examName, 
  totalCorrect, 
  totalQuestions, 
  overallPercentage, 
  searchTerm, 
  onSearchChange, 
  activeTab,
  isMobile = false
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

  const bgStyle = "bg-white text-gray-800";
  const scoreCircleStyle = "bg-green-400 text-white";
  const scoreTextStyle = "text-blue-800";
  const scoreContainerStyle = "bg-blue-50 border border-blue-100";
  const pageTitle = getPageTitle(activeTab);

  // Simple logo component
  const Logo = () => (
    <div className="flex items-center">
      <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.002 1.069c0 .54-.18 1.070-.516 1.498a.402.402 0 01-.296.12 1 1 0 00.464 1.879h.528c2.761 0 5-2.239 5-5v-2.07l3.656-1.565a1 1 0 000-1.84l-7-3zM10 10a1 1 0 10-2 0v5a1 1 0 102 0v-5z" />
        </svg>
      </div>
      <span className="font-bold text-blue-600">Scoorly</span>
    </div>
  );

  // Same layout for both mobile and desktop with slight adjustments
  return (
    <div className={`${bgStyle} shadow-md`}>
      <div className="container mx-auto px-4 py-3">
        {/* First row: Logo, Page title, Exam name, and Score */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Logo />
            <span className="text-gray-500 text-xs ml-2 md:text-sm">/ {pageTitle}</span>
            {!isMobile && <span className="hidden lg:inline-block text-base font-medium ml-6">{examName}</span>}
          </div>
          
          <div className="flex items-center">
            {isMobile && <div className="hidden sm:block text-sm font-medium mr-2">{examName}</div>}
            <div className={`${scoreContainerStyle} rounded-full px-2 py-1 md:px-3 md:py-1 flex items-center`}>
              <div className={`mr-1 md:mr-2 w-5 h-5 md:w-6 md:h-6 rounded-full ${scoreCircleStyle} flex items-center justify-center text-xs font-bold`}>
                {Math.round(overallPercentage / 10)}
              </div>
              <div className="text-xs md:text-sm">
                <span className={`font-bold ${scoreTextStyle}`}>{totalCorrect}/{totalQuestions}</span>
                <span className="text-gray-600 ml-1">({overallPercentage}%)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second row: Search box */}
        <div className="relative w-full md:max-w-md md:mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-xs md:text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
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
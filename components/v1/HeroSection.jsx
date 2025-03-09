'use client';

const HeroSection = ({
  examName,
  totalCorrect,
  totalQuestions,
  overallPercentage,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-4">{examName}</h1>
            
            {/* Duolingo-style score pill */}
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
              <div className="mr-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-blue-800 text-xs font-bold">
                {Math.round(overallPercentage / 10)}
              </div>
              <div className="text-sm">
                <span className="font-bold">{totalCorrect}</span>
                <span className="text-blue-100">/{totalQuestions}</span>
              </div>
            </div>
          </div>
          
          {/* Right side: Search */}
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-xs border-0 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={e => onSearchChange(e.target.value)}
            />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-blue-900 bg-opacity-50 rounded-full h-1 mt-2">
          <div
            className="bg-green-400 h-1 rounded-full"
            style={{ width: `${overallPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
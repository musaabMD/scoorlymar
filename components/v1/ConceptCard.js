'use client';

const ConceptCard = ({ category, question, onClick }) => {
  return (
    <div
      className="border border-gray-200 rounded-lg shadow-sm p-5 mb-4 bg-white cursor-pointer hover:shadow-md transition-all hover:border-blue-300 relative overflow-hidden"
      onClick={onClick}
    >
      {/* Category label with improved styling */}
      <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold mb-3">
        {category}
      </div>
      
      {/* Main question with better typography */}
      <p className="text-gray-800 font-medium text-base leading-relaxed">{question}</p>
      
      {/* Subtle indicator icon */}
      <div className="absolute top-3 right-3 text-blue-500 opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Decorative element - subtle left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-60"></div>
    </div>
  );
};

export default ConceptCard;
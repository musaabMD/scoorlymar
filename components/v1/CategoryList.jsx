'use client';
import EmptyState from '@/components/EmptyState';

const CategoryList = ({ 
  categories, 
  onCategoryClick, 
  searchTerm, 
  onClearSearch, 
  variant = 'study' 
}) => {
  // Function to determine the progress bar color
  const getProgressBarColor = (status) => {
    switch (status) {
      case "good": return "bg-emerald-500";
      case "mid": return "bg-amber-400";
      case "fail": return "bg-red-500";
      default: return "bg-gray-300";
    }
  };

  // Fixed icon for all categories
  const getCategoryIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  // If no categories and search is active
  if (categories.length === 0 && searchTerm && variant === 'study') {
    return (
      <EmptyState 
        icon="🔍"
        title="No topics found"
        description="No topics match your search criteria. Try adjusting your search or browse all topics."
        buttonText="Clear Search"
        buttonAction={onClearSearch}
      />
    );
  }

  return (
    <>
      {categories.map(category => (
        <button 
          key={category.id} 
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 w-full text-left cursor-pointer transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => onCategoryClick(category)}
        >
          <div className="flex items-center mb-2">
            <div className="mr-3">
              {getCategoryIcon()}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
                <span className="text-2xl font-bold text-gray-700">{category.percentage}%</span>
              </div>
              <p className="text-sm text-gray-600">{category.correct} of {category.total} Correct</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className={`${getProgressBarColor(category.status)} h-2.5 rounded-full`} 
              style={{ width: `${category.percentage}%` }}
            ></div>
          </div>
          
          {/* Removed the "Start" label as requested */}
        </button>
      ))}
    </>
  );
};

export default CategoryList;
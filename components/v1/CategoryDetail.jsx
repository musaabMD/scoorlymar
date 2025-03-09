'use client';
import EmptyState from '@/components/EmptyState';
import ConceptCard from '@/components/v1/ConceptCard';

const CategoryDetail = ({ category, activeTab, onBackClick }) => {
  // Use the active tab value to determine if we should show the detail view
  // This helps ensure that changing tabs will reset the detail view
  
  // Function to determine the progress bar color
  const getProgressBarColor = (status) => {
    switch (status) {
      case "good": return "bg-emerald-500";
      case "mid": return "bg-amber-400";
      case "fail": return "bg-red-500";
      default: return "bg-gray-300";
    }
  };
  
  // Get tab description and button text based on active tab
  const getTabContent = () => {
    switch (activeTab) {
      case 'study':
        return {
          description: 'Start studying this topic to improve your knowledge.',
          buttonText: 'Start Studying'
        };
      case 'assessment':
        return {
          description: 'Test your knowledge with assessment questions.',
          buttonText: 'Start Assessment'
        };
      case 'incorrect':
        return {
          description: 'Review questions you answered incorrectly.',
          buttonText: 'Review Incorrect'
        };
      case 'pinned':
        return {
          description: 'Review your pinned questions.',
          buttonText: 'Review Pinned'
        };
      case 'concepts':
        return {
          description: 'Review concept cards for this topic.',
          buttonText: 'View Concepts'
        };
      default:
        return {
          description: 'Start your session.',
          buttonText: 'Start Now'
        };
    }
  };

  const { description, buttonText } = getTabContent();

  // Sample concept cards for the concepts tab
  const conceptCards = [
    {
      id: 1,
      category: "Pathology, Contraindications, Areas of Caution, Special Populations",
      question: "A client has weak bones that are prone to fracture. Which of the following conditions does she most likely have?"
    },
    {
      id: 2,
      category: "Pathology, Contraindications, Areas of Caution, Special Populations",
      question: "Which of the following underlying structures could be injured during massage to the ulnar notch?"
    },
    {
      id: 3,
      category: "Guidelines for Professional Practice",
      question: "A therapist is hired to perform weekly massages for the employees of a large corporate office. The company pays the therapist as an independent contractor. In this situation, which of the following is definitely true?"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBackClick}
          className="text-blue-600 hover:text-blue-800 flex items-center focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {activeTab === 'study' ? 'Study Mode' : 
           activeTab === 'assessment' ? 'Assessment' : 
           activeTab === 'incorrect' ? 'Incorrect Questions' : 
           activeTab === 'pinned' ? 'Pinned Questions' : 'Concepts'}
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
      
      {activeTab === 'concepts' ? (
        // Show concept cards for concepts tab
        <div className="space-y-4 mt-4">
          {conceptCards.map(concept => (
            <ConceptCard 
              key={concept.id}
              category={concept.category}
              question={concept.question}
              onClick={() => console.log('Concept clicked:', concept.question)}
            />
          ))}
        </div>
      ) : (
        // Show regular detail view for other tabs
        <>
          {activeTab !== 'incorrect' && activeTab !== 'pinned' && (
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className={`${getProgressBarColor(category.status)} h-2.5 rounded-full`} 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{category.correct} of {category.total} Correct ({category.percentage}%)</p>
              </div>
            </div>
          )}
          
          <EmptyState 
            icon="📚"
            title="Ready to Start"
            description={description}
            buttonText={buttonText}
            buttonAction={() => console.log(`Starting ${activeTab} session for ${category.name}`)}
          />
        </>
      )}
    </div>
  );
};

export default CategoryDetail;
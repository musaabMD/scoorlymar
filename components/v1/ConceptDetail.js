'use client';
import ConceptCard from './ConceptCard';

const ConceptDetail = ({ category, onBackClick }) => {
  // Sample concept data - in a real app, you would fetch this data
  const concepts = [
    {
      id: 1,
      category: "Pathology, Contraindications, Areas of Caution, Special Populations",
      question: "A client has weak bones that are prone to fracture. Which of the following conditions does she most likely have?"
    },
    {
      id: 2,
      category: "Guidelines for Professional Practice",
      question: "A therapist is hired to perform weekly massages for the employees of a large corporate office. The company pays the therapist as an independent contractor. In this situation, which of the following is definitely true?"
    },
    {
      id: 3,
      category: "Ethics, Boundaries, Laws, Regulations",
      question: "Regarding credentialing for massage therapist practice, which term describes the entry level point for career practice, legally defining and limiting the scope of practice for profession, and protects title usage?"
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
          Concepts
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
      <p className="text-gray-600 mb-6">{concepts.length} concept cards in this category</p>
      
      <div className="space-y-4">
        {concepts.map(concept => (
          <ConceptCard 
            key={concept.id}
            category={concept.category}
            question={concept.question}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default ConceptDetail;
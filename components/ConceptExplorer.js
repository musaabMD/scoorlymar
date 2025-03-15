import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

// ConceptItem Component
const ConceptItem = ({ title, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 bg-white">
      <button
        className="w-full text-left p-4 font-medium flex items-center focus:outline-none bg-white"
        onClick={toggleDescription}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white flex items-center justify-center mr-3">
          {index}
        </div>
        <span>{title}</span>
      </button>
      <div 
        className={`pl-16 pr-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main ConceptExplorer Component
const ConceptExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConcepts, setFilteredConcepts] = useState([]);
  
  const conceptData = [
    {
      title: "Component-Based Architecture",
      description: "A design approach where the system is divided into reusable, modular components. Each component encapsulates a specific functionality and has a well-defined interface."
    },
    {
      title: "State Management",
      description: "The process of managing application state and data flow between components. Common solutions include Redux, Context API, and MobX."
    },
    {
      title: "Server-Side Rendering (SSR)",
      description: "A technique where web pages are rendered on the server before being sent to the client. It improves performance and SEO by delivering pre-rendered HTML to the browser."
    },
    {
      title: "Declarative Programming",
      description: "A programming paradigm where code describes what should be accomplished rather than how it should be done. React uses this approach for defining UI components."
    },
    {
      title: "Virtual DOM",
      description: "A lightweight representation of the real DOM in memory. React uses it to improve performance by minimizing direct manipulation of the DOM."
    }
  ];

  useEffect(() => {
    // Filter concepts based on search term
    const filtered = conceptData.filter(concept =>
      concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredConcepts(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Concept Explorer</h2>
        
        {/* Search Box */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Concepts List */}
        <div>
          {filteredConcepts.length > 0 ? (
            filteredConcepts.map((concept, index) => (
              <ConceptItem 
                key={index} 
                title={concept.title} 
                description={concept.description} 
                index={index + 1} 
              />
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No concepts found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptExplorer;
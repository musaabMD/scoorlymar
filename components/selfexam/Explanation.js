'use client';

import React, { Suspense, useMemo } from 'react';

const Explanation = ({ rationale, isVisible, explanationImageUrl }) => {
  if (!isVisible) return null;
  
  // Use useMemo to process the rationale only when it changes
  const { mainExplanation, incorrectAnswers } = useMemo(() => {
    if (!rationale) return { mainExplanation: 'No explanation available.', incorrectAnswers: null };
    
    const parts = rationale.split('<br>The incorrect answers are: <br>');
    return {
      mainExplanation: parts[0],
      incorrectAnswers: parts.length > 1 ? parts[1] : null
    };
  }, [rationale]);

  return (
    <Suspense fallback={<div>Loading explanation...</div>}>
      <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
        <h3 className="font-bold text-2xl mb-4 text-blue-700">Explanation</h3>
        
        <div 
          className="font-sans text-xl mb-4 leading-relaxed prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: mainExplanation }} 
        />
        
        {incorrectAnswers && (
          <>
            <h4 className="font-bold text-xl mb-2 text-red-600">The incorrect answers are:</h4>
            <div 
              className="font-sans text-xl mb-4 leading-relaxed prose max-w-none" 
              dangerouslySetInnerHTML={{ __html: incorrectAnswers }} 
            />
          </>
        )}
        
        {explanationImageUrl && (
          <div className="mt-4">
            <img 
              src={explanationImageUrl} 
              alt="Explanation" 
              className="max-w-full h-auto rounded-md border border-gray-300 shadow-sm" 
            />
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default Explanation;
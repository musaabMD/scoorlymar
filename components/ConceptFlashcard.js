'use client';

import React, { useState } from 'react';

const ConceptFlashcard = ({ concept, onResult }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowButtons(true);
    }
  };

  const handleDifficulty = (difficulty) => {
    onResult(concept.id, difficulty);
    setIsFlipped(false);
    setShowButtons(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto perspective">
      <div
        className={`relative w-full cursor-pointer transition-transform duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ minHeight: '300px' }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-8 ${
            isFlipped ? 'hidden' : 'block'
          }`}
          onClick={handleFlip}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{concept.title}</h3>
          <p className="text-gray-600 text-lg">Click to reveal content</p>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-8 rotate-y-180 ${
            isFlipped ? 'block' : 'hidden'
          }`}
          onClick={() => !showButtons && handleFlip()}
        >
          <div className="prose max-w-none">
            {concept.content.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-4">
                {paragraph.startsWith('- ') ? (
                  <ul className="list-disc pl-4 space-y-2">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          {showButtons && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleDifficulty('again')}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Again (10m)
                </button>
                <button
                  onClick={() => handleDifficulty('hard')}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Hard (1d)
                </button>
                <button
                  onClick={() => handleDifficulty('good')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Good (4d)
                </button>
                <button
                  onClick={() => handleDifficulty('easy')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Easy (7d)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptFlashcard; 
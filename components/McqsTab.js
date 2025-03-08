import React from 'react';
import { Pin } from 'lucide-react';
import McqCard from './McqCard';

const McqsTab = ({
  mcqs,
  showPinned,
  setShowPinned,
  pinnedQuestions,
  togglePinQuestion,
  mcqAnswers,
  handleMcqOptionClick
}) => {
  // Handle showing all MCQs or just pinned ones
  const displayMcqs = showPinned
    ? mcqs.filter(mcq => pinnedQuestions.includes(mcq.id))
    : mcqs;

  if (showPinned && pinnedQuestions.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <Pin size={36} className="mx-auto mb-4 opacity-50" />
        <p>No questions pinned yet</p>
        <button
          onClick={() => setShowPinned(false)}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium px-4 py-2 border border-blue-600 rounded-lg"
        >
          View All MCQs
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Only show header when viewing pinned questions */}
      {showPinned && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Pinned Questions</h2>
          <button
            onClick={() => setShowPinned(false)}
            className="text-blue-600 hover:text-blue-800 font-medium px-2 py-1"
          >
            View All MCQs
          </button>
        </div>
      )}
      
      {/* MCQ Cards */}
      <div>
        {displayMcqs.map((mcq) => (
          <McqCard
            key={mcq.id}
            mcq={mcq}
            isPinned={pinnedQuestions.includes(mcq.id)}
            togglePin={() => togglePinQuestion(mcq.id)}
            selectedOption={mcqAnswers[mcq.id]}
            onSelectOption={(optionIndex) => handleMcqOptionClick(mcq.id, optionIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default McqsTab;
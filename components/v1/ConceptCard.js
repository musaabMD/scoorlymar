'use client';

const ConceptCard = ({ category, question, onClick }) => {
  return (
    <div
      className="border border-gray-200 rounded-lg shadow-sm p-4 mb-4 bg-white cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="text-sm text-blue-600 font-medium mb-2">{category}</div>
      </div>
      <p className="text-gray-800 font-medium">{question}</p>
    </div>
  );
};

export default ConceptCard;
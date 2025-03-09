'use client';

import React from 'react';

const MCQOption = ({ option, index, isSelected, onClick }) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  
  const getStyles = () => {
    if (!isSelected) {
      return {
        containerClasses: 'border-gray-200 hover:bg-gray-50',
        indicatorClasses: 'bg-gray-100 text-gray-600'
      };
    }
    
    if (option.isCorrect) {
      return {
        containerClasses: 'bg-green-50 border-green-200 text-green-800',
        indicatorClasses: 'bg-green-100 text-green-600'
      };
    } else {
      return {
        containerClasses: 'bg-red-50 border-red-200 text-red-800',
        indicatorClasses: 'bg-red-100 text-red-600'
      };
    }
  };
  
  const { containerClasses, indicatorClasses } = getStyles();
  
  return (
    <div 
      className={`flex items-center p-3 rounded-lg cursor-pointer border ${containerClasses}`}
      onClick={onClick}
    >
      <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${indicatorClasses}`}>
        {letters[index]}
      </div>
      <span className="flex-1">{option.text}</span>
    </div>
  );
};

export default MCQOption;
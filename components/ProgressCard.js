import React from 'react';

const ProgressCard = ({ title, correct = 0, total = 0, color = 'blue' }) => {
  // Calculate percentage, handle division by zero
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
  
  // Color mapping for different exam types
  const colorClasses = {
    blue: 'bg-blue-100 border-blue-200',
    red: 'bg-red-100 border-red-200',
    green: 'bg-green-100 border-green-200',
    yellow: 'bg-yellow-100 border-yellow-200',
    purple: 'bg-purple-100 border-purple-200'
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${colorClasses[color] || colorClasses.blue} hover:opacity-80 transition-opacity`}>
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="text-sm text-gray-600">
          {correct}/{total}
        </div>
      </div>
      
      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressCard; 
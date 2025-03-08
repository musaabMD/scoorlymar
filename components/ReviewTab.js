import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ReviewTab = ({ reviewItems, reviewAnswers, toggleReviewAnswer }) => {
  return (
    <div className="space-y-4">
      {reviewItems.map((item) => (
        <div 
          key={item.id} 
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div 
            className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50"
            onClick={() => toggleReviewAnswer(item.id)}
          >
            <h3 className="font-bold text-lg text-gray-800">{item.question}</h3>
            <button className="text-gray-500">
              {reviewAnswers[item.id] ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          {reviewAnswers[item.id] && (
            <div className="p-4 bg-blue-50 border-t border-blue-100">
              <div 
                className="text-blue-800"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewTab;
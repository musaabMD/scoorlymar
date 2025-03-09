import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ReviewTab = ({ reviewItems, reviewAnswers, toggleReviewAnswer }) => {
  return (
    <div className="space-y-4">
      {reviewItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
          onClick={() => toggleReviewAnswer(item.id)}
        >
          <div className="p-4 flex justify-between items-center hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">{item.question}</h3>
            <div className="flex items-center text-sm text-gray-600">
              {reviewAnswers[item.id] ? (
                <>
                  <EyeOff size={16} className="mr-1" />
                  Hide Answer
                </>
              ) : (
                <>
                  <Eye size={16} className="mr-1" />
                  Show Answer
                </>
              )}
            </div>
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
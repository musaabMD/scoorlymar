'use client';

import React from 'react';

const SubjectSelector = ({ subjects, onSubjectSelect }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 pt-2">
        <h2 className="text-xl font-bold text-gray-800">Select a Subject</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          onClick={() => onSubjectSelect({
            id: 0,
            name: "Random Questions",
            description: "Mixed questions from all subjects",
            questionCount: subjects.reduce((acc, subj) => acc + subj.questionCount, 0),
            progress: 0,
            status: "mid"
          })}
        >
          Random Mix
        </button>
      </div>

      <div className="space-y-3">
        {subjects.map(subject => (
          <div
            key={subject.id}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition cursor-pointer"
            onClick={() => onSubjectSelect(subject)}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-gray-900">{subject.name}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                    {subject.questionCount} questions
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{subject.description}</p>
                
                {/* Progress bar */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        subject.status === 'good' ? 'bg-green-500' :
                        subject.status === 'mid' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
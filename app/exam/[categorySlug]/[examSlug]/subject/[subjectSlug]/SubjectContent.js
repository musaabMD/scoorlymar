'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function SubjectContent({ subject, exam, params }) {
  const [activeTab, setActiveTab] = useState('overview');
  const { categorySlug, examSlug, subjectSlug } = params;
  
  const concepts = subject?.concepts || [];
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'overview'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'practice'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Practice
        </button>
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'flashcards'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Flashcards
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Subject Overview</h2>
            <p className="text-gray-600 mb-6">
              Study materials for {subject.subject} in the {exam.name} exam.
            </p>
            
            {subject.total_questions ? (
              <div className="mb-6">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span className="font-medium">Available Questions:</span>
                  <span>{subject.total_questions}</span>
                </div>
              </div>
            ) : null}
            
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setActiveTab('practice')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Practice
              </button>
              <button 
                onClick={() => setActiveTab('flashcards')}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Flashcards
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'practice' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Practice Questions</h2>
            <p className="text-gray-600 mb-6">
              Test your knowledge with practice questions for {subject.subject}.
            </p>
            
            {/* Placeholder for practice UI */}
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-700">Practice questions are coming soon!</p>
              <p className="text-gray-500 mt-2">Check back later for updates.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'flashcards' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Flashcards</h2>
            
            {concepts.length > 0 ? (
              <div className="grid gap-4">
                {concepts.map((concept, index) => (
                  <div key={concept.id || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-lg mb-2">{concept.front || `Concept ${index + 1}`}</h3>
                    <p className="text-gray-600">{concept.back || "No description available."}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-700">No flashcards available yet</p>
                <p className="text-gray-500 mt-2">Check back later for updates.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
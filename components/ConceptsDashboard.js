'use client';

import React from 'react';

const ConceptsDashboard = ({ stats }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Study Progress</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.dueToday}</div>
          <div className="text-sm text-gray-600">Due Today</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">{stats.learned}</div>
          <div className="text-sm text-gray-600">Learned</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.reviewing}</div>
          <div className="text-sm text-gray-600">Reviewing</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">{stats.streak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
      </div>
    </div>
  );
};

export default ConceptsDashboard; 
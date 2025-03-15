'use client';
import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';

export default function SubjectActionButtons() {
  return (
    <div className="flex gap-4">
      <button
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => alert('Practice feature coming soon!')}
      >
        <ListChecks size={18} className="mr-2" />
        Start Practice
      </button>
      <button
        className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        onClick={() => alert('Flashcards feature coming soon!')}
      >
        <BookOpen size={18} className="mr-2" />
        View Flashcards
      </button>
    </div>
  );
}
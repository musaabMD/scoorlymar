'use client';
// app/exam/[categorySlug]/CategoryPageClient.js
import React from 'react';
import Link from 'next/link';
import ClientExamList from './ClientExamList';

export default function CategoryPageClient({ exams, categoryName, categoryDescription }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{categoryName}</h1>
      
      {categoryDescription && (
        <p className="text-gray-600 mb-8">{categoryDescription}</p>
      )}
      
      <h2 className="text-xl mb-6">Exam Preparations</h2>
      
      {exams.length > 0 ? (
        <ClientExamList exams={exams} />
      ) : (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <p className="text-gray-600">
            No exams available in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
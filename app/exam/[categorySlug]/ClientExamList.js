'use client';
// app/exam/[categorySlug]/ClientExamList.js
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function ClientExamList({ exams }) {
  // Predefined gradients for app icons
  const gradients = [
    'linear-gradient(145deg, #3AA0FF, #1E90FF)',
    'linear-gradient(145deg, #FFB366, #F6A54C)',
    'linear-gradient(145deg, #7D3E66, #5D2E46)',
    'linear-gradient(145deg, #4FA8EB, #3498DB)',
    'linear-gradient(145deg, #FF79C4, #FF69B4)',
    'linear-gradient(145deg, #FF7357, #FF6347)',
    'linear-gradient(145deg, #2F57A8, #1F4788)',
    'linear-gradient(145deg, #9B5523, #8B4513)',
    'linear-gradient(145deg, #5C4D4D, #4C3D3D)'
  ];
  
  // Function to get a consistent gradient for an exam
  const getGradientForExam = (examName) => {
    const hash = examName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exams && exams.length > 0 ? (
        exams.map((exam) => {
          const gradient = getGradientForExam(exam.name);
          return (
            <Link
              key={exam.id}
              href={`/exam/${exam.category_slug}/${exam.slug}`}
              className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white"
                style={{ background: gradient }}
              >
                <BookOpen size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{exam.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {exam.description || `Prepare for the ${exam.name} exam`}
              </p>
            </Link>
          );
        })
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600">
            No exams available in this category.
          </p>
        </div>
      )}
    </div>
  );
}
// app/exam/[categorySlug]/[examSlug]/page.js
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function ExamPage({ params }) {
  const { categorySlug, examSlug } = params;
  const supabase = createServerComponentClient({ cookies });

  try {
    // Get the exam by slug
    const { data: exam, error: examError } = await supabase
      .from('exams')
      .select('*')
      .eq('slug', examSlug)
      .single();

    if (examError || !exam) {
      console.error('Error fetching exam:', examError);
      return notFound();
    }

    // Try to get subject data if available
    let subjects = [];
    try {
      // First try the subject_slugs view if it exists
      const { data: subjectData, error: subjectError } = await supabase
        .from('subject_slugs')
        .select('*')
        .eq('exam_id', exam.id);

      if (!subjectError && subjectData) {
        subjects = subjectData;
      } else {
        // Fallback to getting distinct subjects from questions
        const { data: questionSubjects, error: questionError } = await supabase
          .from('questions')
          .select('subject, COUNT(*)')
          .eq('exam_id', exam.id)
          .group('subject');

        if (!questionError && questionSubjects) {
          subjects = questionSubjects.map(item => ({
            subject: item.subject,
            slug: item.subject.toLowerCase().replace(/\s+/g, '-'),
            total_questions: parseInt(item.count)
          }));
        }
      }
    } catch (e) {
      console.error('Error fetching subjects:', e);
    }

    // Get category information
    let categoryName = categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (exam.category_id) {
      try {
        const { data: category } = await supabase
          .from('exam_categories')
          .select('name')
          .eq('id', exam.category_id)
          .single();

        if (category) {
          categoryName = category.name;
        }
      } catch (e) {
        console.log('Error fetching category name:', e);
      }
    } else if (exam.category) {
      categoryName = exam.category;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link href={`/exam/${categorySlug}`} className="text-blue-600 hover:underline">
            ← Back to {categoryName}
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">{exam.name}</h1>
        <p className="text-gray-600 mb-8">{exam.description}</p>
        
        <h2 className="text-2xl font-semibold mb-4">Available Subjects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects && subjects.length > 0 ? (
            subjects.map((subject) => (
              <Link
                key={subject.slug || subject.subject}
                href={`/exam/${categorySlug}/${examSlug}/subject/${subject.slug || encodeURIComponent(subject.subject.toLowerCase().replace(/\s+/g, '-'))}`}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{subject.subject}</h2>
                {subject.total_questions && (
                  <p className="text-gray-600">
                    {subject.total_questions} questions available
                  </p>
                )}
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8 border rounded-lg">
              <p className="text-gray-600">No subjects available for this exam yet.</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}
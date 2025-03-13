// app/exam/[categorySlug]/[examSlug]/subject/[subjectSlug]/page.js
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Use dynamic import for client component if you have one
const SubjectContent = dynamic(() => import('./SubjectContent'), { ssr: false });

export default async function SubjectPage({ params }) {
  const { categorySlug, examSlug, subjectSlug } = params;
  const supabase = createServerComponentClient({ cookies });
  
  try {
    // Get the exam first
    const { data: exam, error: examError } = await supabase
      .from('exams')
      .select('*')
      .eq('slug', examSlug)
      .single();
      
    if (examError || !exam) {
      console.error('Error fetching exam:', examError);
      return notFound();
    }
    
    // Try to get subject data
    let subject = {
      subject: subjectSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      concepts: []
    };
    
    try {
      // Check if subject exists in subject_slugs
      const { data: subjectData } = await supabase
        .from('subject_slugs')
        .select('*')
        .eq('exam_id', exam.id)
        .eq('slug', subjectSlug)
        .single();
        
      if (subjectData) {
        subject.subject = subjectData.subject;
        subject.total_questions = subjectData.total_questions;
      } else {
        // Try to get from questions directly
        const decodedSubject = decodeURIComponent(subjectSlug)
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
          
        const { data: questionCount } = await supabase
          .from('questions')
          .select('count(*)')
          .eq('exam_id', exam.id)
          .eq('subject', decodedSubject)
          .single();
          
        if (questionCount) {
          subject.subject = decodedSubject;
          subject.total_questions = parseInt(questionCount.count);
        }
      }
      
      // Get any concepts if they exist
      try {
        const { data: concepts } = await supabase
          .from('flashcards')
          .select('*')
          .eq('exam_id', exam.id)
          .order('created_at');
          
        if (concepts && concepts.length > 0) {
          subject.concepts = concepts;
        }
      } catch (e) {
        console.log('Error fetching concepts:', e);
      }
    } catch (e) {
      console.log('Error fetching subject details:', e);
    }
    
    // Combine data for the client component
    const combinedData = {
      subject: subject,
      exam: exam,
      params: {
        categorySlug,
        examSlug,
        subjectSlug
      }
    };
    
    // Return either a client component or server-rendered HTML
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4">
          <Link 
            href={`/exam/${categorySlug}/${examSlug}`} 
            className="text-blue-600 hover:underline"
          >
            ← Back to {exam.name}
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">{subject.subject}</h1>
        
        {/* If you have a client component, use it here */}
        {subject.concepts && subject.concepts.length > 0 ? (
          <SubjectContent {...combinedData} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
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
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Practice
              </button>
              <button 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Flashcards
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}
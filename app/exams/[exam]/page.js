'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { examData } from '@/app/data/allexams';

// Import components
import ExamDetailHeader from '@/components/ExamDetailHeader';
import PrepNotesTab from '@/components/PrepNotesTab';
import McqsTab from '@/components/McqsTab';
import ReviewTab from '@/components/ReviewTab';

// Import utilities
import { parseMcqs, parseReviewItems } from './content-parser';

export default function ExamDetailPage({ params }) {
  const router = useRouter();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('prep');
  const [pinnedQuestions, setPinnedQuestions] = useState([]);
  const [showPinned, setShowPinned] = useState(false);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [reviewAnswers, setReviewAnswers] = useState({});
  
  // Find the exam from the URL param
  useEffect(() => {
    if (!params?.exam) return;
    
    const examId = parseInt(params.exam);
    if (isNaN(examId)) {
      setLoading(false);
      return;
    }
    
    // Search for the exam in all categories
    let foundExam = null;
    Object.keys(examData).forEach(tabKey => {
      const matchingExam = examData[tabKey].find(e => e.id === examId);
      if (matchingExam) {
        foundExam = matchingExam;
      }
    });
    
    setExam(foundExam);
    setLoading(false);
  }, [params]);

  // Sample content for demonstration
  const examContent = {
    prep: `
      <h3>Myasthenia Gravis (MG) Overview</h3>
      <ul>
        <li><strong>Definition:</strong> Autoimmune disorder causing <strong>antibody-mediated blockade of neuromuscular transmission</strong> at the <strong>neuromuscular junction (NMJ)</strong>.</li>
        <li><strong>Etiology:</strong> <strong>Anti-ACh receptor antibodies</strong> (most common), <strong>Anti-MuSK antibodies</strong> (less common).</li>
        <li><strong>Pathophysiology:</strong> ↓ ACh receptor availability → <strong>progressive muscle weakness</strong> with repeated use.</li>
        <li><strong>Clinical Features:</strong>
          <ul>
            <li><strong>Muscle weakness</strong> (worsens with activity, improves with rest)</li>
            <li><strong>Ptosis, Diplopia</strong> (ocular symptoms common)</li>
            <li><strong>Bulbar symptoms:</strong> Dysphagia, dysarthria</li>
            <li><strong>Respiratory failure</strong> (Myasthenic crisis)</li>
          </ul>
        </li>
        <li><strong>Associated Conditions:</strong>
          <ul>
            <li><strong>Thymoma</strong> (check CT chest)</li>
            <li>Autoimmune diseases (SLE, RA)</li>
          </ul>
        </li>
        <li><strong>Diagnosis:</strong>
          <ul>
            <li><strong>Edrophonium (Tensilon) test</strong>: Rapid symptom improvement</li>
            <li><strong>Ice pack test</strong>: Improvement of ptosis</li>
            <li><strong>ACh receptor antibody test</strong> (gold standard)</li>
            <li><strong>Repetitive nerve stimulation test</strong> (↓ response with repetitive stimulation)</li>
          </ul>
        </li>
        <li><strong>Treatment:</strong>
          <ul>
            <li><strong>First-line:</strong> Pyridostigmine (AChE inhibitor)</li>
            <li><strong>Corticosteroids & Immunosuppressants</strong> for refractory cases</li>
            <li><strong>Plasmapheresis/IVIG</strong> for myasthenic crisis</li>
            <li><strong>Thymectomy</strong> if thymoma present</li>
          </ul>
        </li>
      </ul>
    `,
    mcqs: `
      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q1: A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Lambert-Eaton Myasthenic Syndrome</li>
          <li class="ml-5">B) Multiple Sclerosis</li>
          <li class="ml-5 text-green-600 font-medium">✅ C) Myasthenia Gravis</li>
          <li class="ml-5">D) Guillain-Barré Syndrome</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> MG is characterized by <strong>fluctuating muscle weakness</strong>, ptosis, and <strong>improvement with rest/cooling</strong> (Ice Pack Test).</p>
        </div>
      </div>

      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q2: Which of the following is the most accurate diagnostic test for Myasthenia Gravis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Tensilon (Edrophonium) test</li>
          <li class="ml-5">B) Electromyography (EMG)</li>
          <li class="ml-5 text-green-600 font-medium">✅ C) Acetylcholine receptor antibody test</li>
          <li class="ml-5">D) Muscle biopsy</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> The <strong>gold standard</strong> for MG diagnosis is <strong>ACh receptor antibody detection</strong>. The <strong>Tensilon test</strong> is a rapid screen but not definitive.</p>
        </div>
      </div>

      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q3: Which of the following medications can worsen Myasthenia Gravis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Beta-blockers</li>
          <li class="ml-5">B) Aminoglycosides</li>
          <li class="ml-5">C) Fluoroquinolones</li>
          <li class="ml-5 text-green-600 font-medium">✅ D) All of the above</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> <strong>Beta-blockers, aminoglycosides, and fluoroquinolones</strong> can exacerbate MG symptoms by interfering with NMJ transmission.</p>
        </div>
      </div>
    `,
    review: `
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border">
          <thead>
            <tr class="bg-gray-100">
              <th class="border p-2 text-left">One-Line Question</th>
              <th class="border p-2 text-left">Key Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">Pathophysiology of MG?</td>
              <td class="border p-2">Autoantibodies against <strong>ACh receptors</strong> at NMJ</td>
            </tr>
            <tr>
              <td class="border p-2">Symptoms of MG?</td>
              <td class="border p-2"><strong>Fluctuating</strong> weakness, ptosis, diplopia, bulbar signs</td>
            </tr>
            <tr>
              <td class="border p-2">Best initial test for MG?</td>
              <td class="border p-2">ACh receptor antibody test</td>
            </tr>
            <tr>
              <td class="border p-2">Gold standard for MG diagnosis?</td>
              <td class="border p-2">ACh receptor antibody test</td>
            </tr>
            <tr>
              <td class="border p-2">Best acute treatment for Myasthenic Crisis?</td>
              <td class="border p-2">Plasmapheresis or IVIG</td>
            </tr>
            <tr>
              <td class="border p-2">Which tumor is associated with MG?</td>
              <td class="border p-2"><strong>Thymoma</strong> (check CT chest)</td>
            </tr>
            <tr>
              <td class="border p-2">Which drugs worsen MG?</td>
              <td class="border p-2">Aminoglycosides, Fluoroquinolones, Beta-blockers</td>
            </tr>
            <tr>
              <td class="border p-2">First-line chronic treatment for MG?</td>
              <td class="border p-2">Pyridostigmine (AChE inhibitor)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  };

  // Parse content for displaying
  const mcqs = parseMcqs(examContent.mcqs);
  const reviewItems = parseReviewItems(examContent.review);

  // Handler functions
  const togglePinQuestion = (id) => {
    if (pinnedQuestions.includes(id)) {
      setPinnedQuestions(pinnedQuestions.filter(qId => qId !== id));
    } else {
      setPinnedQuestions([...pinnedQuestions, id]);
    }
  };

  const handleMcqOptionClick = (mcqId, optionIndex) => {
    setMcqAnswers({
      ...mcqAnswers,
      [mcqId]: optionIndex
    });
  };

  const toggleReviewAnswer = (reviewId) => {
    setReviewAnswers({
      ...reviewAnswers,
      [reviewId]: !reviewAnswers[reviewId]
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
        <button 
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back to Exam List
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Component with Content Type Selection */}
      <ExamDetailHeader 
        examId={exam.id} // Pass the exam ID instead of the full exam object
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        showPinned={showPinned} 
        setShowPinned={setShowPinned} 
        pinnedCount={pinnedQuestions.length}
      />
      
      {/* Tab Content Container */}
      <div className="max-w-5xl mx-auto p-4 pb-20 sm:pb-8">
        {/* Render the appropriate tab content */}
        {activeTab === 'prep' && (
          <PrepNotesTab examContent={examContent} />
        )}
        
        {activeTab === 'mcqs' && (
          <McqsTab 
            mcqs={mcqs}
            showPinned={showPinned}
            setShowPinned={setShowPinned}
            pinnedQuestions={pinnedQuestions}
            togglePinQuestion={togglePinQuestion}
            mcqAnswers={mcqAnswers}
            handleMcqOptionClick={handleMcqOptionClick}
          />
        )}
        
        {activeTab === 'review' && (
          <ReviewTab 
            reviewItems={reviewItems}
            reviewAnswers={reviewAnswers}
            toggleReviewAnswer={toggleReviewAnswer}
          />
        )}
      </div>
    </div>
  );
}
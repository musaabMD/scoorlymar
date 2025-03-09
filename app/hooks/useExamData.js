'use client';

import { useState, useEffect } from 'react';
import { examData } from '@/app/data/allexams';
import { examContent, subjects, reviewItems, concepts } from '@/app/data/data';
import { parseMcqs } from '@/app/exams/[exam]/content-parser';

export function useExamData(params) {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Parse content for displaying
  const mcqs = parseMcqs(examContent.mcqs);
  
  // Calculate stats for the header
  const totalCorrect = 16;
  const totalQuestions = 26;
  const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);
  
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
      examData[tabKey].forEach(e => {
        if (e.id === examId) {
          foundExam = e;
        }
      });
    });
    
    setExam(foundExam);
    setLoading(false);
  }, [params]);

  return {
    exam,
    loading,
    mcqs,
    subjects,
    reviewItems,
    concepts,
    totalCorrect,
    totalQuestions,
    overallPercentage,
    examContent
  };
}
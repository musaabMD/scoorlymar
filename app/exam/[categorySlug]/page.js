// app/exam/[categorySlug]/page.js
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CategoryPageClient from './CategoryPageClient';

export default async function ExamCategoryPage({ params }) {
  const { categorySlug } = params;
  const supabase = createServerComponentClient({ cookies });

  try {
    // Try to find the category first
    let category = null;
    let exams = [];

    try {
      const { data, error } = await supabase
        .from('exam_categories')
        .select('id, name, description')
        .eq('slug', categorySlug)
        .single();

      if (!error && data) {
        category = data;
        
        // Now get exams for this category
        const { data: examsData, error: examsError } = await supabase
          .from('exams')
          .select('*')
          .eq('category_id', category.id);
          
        if (!examsError) {
          exams = examsData || [];
        }
      }
    } catch (e) {
      console.log('Error fetching category:', e);
    }

    // If no category was found, try a fallback approach
    if (!category) {
      // Try to get exams where the category field matches the slug
      const categoryName = categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
      const { data: examsData } = await supabase
        .from('exams')
        .select('*')
        .eq('category', categoryName);
        
      if (examsData && examsData.length > 0) {
        exams = examsData;
        category = {
          name: categoryName,
          description: `Exams in the ${categoryName} category`
        };
      }
    }

    // If still no category or exams, create a placeholder
    if (!category) {
      category = {
        name: categorySlug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        description: 'Exam category'
      };
    }

    // Add category_slug to each exam
    const examsWithSlug = exams.map(exam => ({
      ...exam,
      category_slug: categorySlug
    }));

    return (
      <CategoryPageClient 
        exams={examsWithSlug} 
        categoryName={category.name}
        categoryDescription={category.description}
      />
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}
'use client';
// components/ExamList.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ExamList() {
  const [exams, setExams] = useState([]);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // First, try to fetch exam_categories to create a lookup map
        let categoryMap = {};
        try {
          const { data: categoryData } = await supabase
            .from('exam_categories')
            .select('id, slug, name');
            
          if (categoryData) {
            // Create a map of id to slug
            categoryData.forEach(cat => {
              categoryMap[cat.id] = {
                slug: cat.slug || 'general',
                name: cat.name || 'General'
              };
            });
          }
        } catch (e) {
          console.log('Category fetch error (non-critical):', e);
        }
        
        setCategories(categoryMap);
        
        // Now fetch exams
        const { data, error } = await supabase
          .from('exams')
          .select('*');
          
        if (error) {
          console.error('Error fetching exams:', error);
          setExams([]);
        } else {
          console.log('Fetched exams:', data);
          setExams(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setExams([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600">Loading exam preparations...</p>
        </div>
      </div>
    );
  }

  if (exams.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600">No exams available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-6 gap-x-4">
      {exams.map((exam) => {
        const gradient = getGradientForExam(exam.name);
        
        // Determine the category slug
        let categorySlug = 'general';
        let categoryName = exam.category || 'General';
        
        if (exam.category_id && categories[exam.category_id]) {
          categorySlug = categories[exam.category_id].slug;
          categoryName = categories[exam.category_id].name;
        } else if (exam.category) {
          // Convert the category name to a slug if no mapping exists
          categorySlug = exam.category.toLowerCase().replace(/\s+/g, '-');
        }
        
        // Use the correct URL pattern with /exam prefix
        const examUrl = `/exam/${categorySlug}/${exam.slug}`;
        
        return (
          <Link
            key={exam.id}
            href={examUrl}
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
            <div className="mt-2 text-xs text-gray-500">
              Category: {categoryName}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
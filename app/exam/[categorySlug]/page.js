// // // app/exam/[categorySlug]/page.js
// // import React from 'react';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // import { cookies } from 'next/headers';
// // import CategoryPageClient from './CategoryPageClient';

// // export default async function ExamCategoryPage({ params }) {
// //   const { categorySlug } = params;
// //   const supabase = createServerComponentClient({ cookies });

// //   try {
// //     // Try to find the category first
// //     let category = null;
// //     let exams = [];

// //     try {
// //       const { data, error } = await supabase
// //         .from('exam_categories')
// //         .select('id, name, description')
// //         .eq('slug', categorySlug)
// //         .single();

// //       if (!error && data) {
// //         category = data;
        
// //         // Now get exams for this category
// //         const { data: examsData, error: examsError } = await supabase
// //           .from('exams')
// //           .select('*')
// //           .eq('category_id', category.id);
          
// //         if (!examsError) {
// //           exams = examsData || [];
// //         }
// //       }
// //     } catch (e) {
// //       console.log('Error fetching category:', e);
// //     }

// //     // If no category was found, try a fallback approach
// //     if (!category) {
// //       // Try to get exams where the category field matches the slug
// //       const categoryName = categorySlug
// //         .split('-')
// //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //         .join(' ');
        
// //       const { data: examsData } = await supabase
// //         .from('exams')
// //         .select('*')
// //         .eq('category', categoryName);
        
// //       if (examsData && examsData.length > 0) {
// //         exams = examsData;
// //         category = {
// //           name: categoryName,
// //           description: `Exams in the ${categoryName} category`
// //         };
// //       }
// //     }

// //     // If still no category or exams, create a placeholder
// //     if (!category) {
// //       category = {
// //         name: categorySlug
// //           .split('-')
// //           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //           .join(' '),
// //         description: 'Exam category'
// //       };
// //     }

// //     // Add category_slug to each exam
// //     const examsWithSlug = exams.map(exam => ({
// //       ...exam,
// //       category_slug: categorySlug
// //     }));

// //     return (
// //       <CategoryPageClient 
// //         exams={examsWithSlug} 
// //         categoryName={category.name}
// //         categoryDescription={category.description}
// //       />
// //     );
// //   } catch (error) {
// //     console.error('Unexpected error:', error);
// //     return notFound();
// //   }
// // }
// // app/exam/[categorySlug]/page.js
// import React from 'react';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import CategoryPageClient from './CategoryPageClient';

// export default async function ExamCategoryPage({ params }) {
//   const { categorySlug } = params;
//   const supabase = createServerComponentClient({ cookies });
  
//   try {
//     // Try to find the category first
//     let category = null;
//     let exams = [];
    
//     // First approach: Check exam_categories table
//     const { data: categoryData, error: categoryError } = await supabase
//       .from('exam_categories')
//       .select('id, name, description')
//       .eq('slug', categorySlug)
//       .single();
    
//     if (!categoryError && categoryData) {
//       category = categoryData;
      
//       // Now get exams for this category
//       const { data: examsData, error: examsError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('category_id', category.id)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       if (!examsError) {
//         exams = examsData || [];
//       } else {
//         console.error('Error fetching exams by category_id:', examsError);
//       }
//     } else {
//       console.log('Category not found in exam_categories table, trying alternatives');
//     }
    
//     // Second approach: Check exams table for categories
//     if (!category || exams.length === 0) {
//       const { data: categoryExamData, error: categoryExamError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('slug', categorySlug)
//         .eq('is_category', true)
//         .single();
      
//       if (!categoryExamError && categoryExamData) {
//         category = {
//           id: categoryExamData.id,
//           name: categoryExamData.name,
//           description: categoryExamData.description
//         };
        
//         // Get exams for this category
//         const { data: examsData, error: examsError } = await supabase
//           .from('exams')
//           .select('*')
//           .eq('category_id', category.id)
//           .eq('is_active', true)
//           .eq('is_category', false);
        
//         if (!examsError) {
//           exams = examsData || [];
//         } else {
//           console.error('Error fetching exams by category_id:', examsError);
//         }
//       }
//     }
    
//     // Third approach: Try to get exams where the category field matches the slug
//     if (!category || exams.length === 0) {
//       const categoryName = categorySlug
//         .split('-')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
      
//       const { data: examsData, error: examsError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('category', categoryName)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       if (!examsError && examsData && examsData.length > 0) {
//         exams = examsData;
//         category = {
//           name: categoryName,
//           description: `Exams in the ${categoryName} category`
//         };
//       } else {
//         console.error('Error fetching exams by category field:', examsError);
//       }
//     }
    
//     // Fourth approach: Check if any exams have this category in their tabgroups
//     if (!category || exams.length === 0) {
//       const { data: tabgroupExams, error: tabgroupError } = await supabase
//         .from('exams')
//         .select('*')
//         .not('tabgroups', 'is', null)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       if (!tabgroupError && tabgroupExams && tabgroupExams.length > 0) {
//         // Filter exams that have this category slug in their tabgroups
//         const filteredExams = tabgroupExams.filter(exam => {
//           if (!exam.tabgroups) return false;
          
//           try {
//             // Try to parse as JSON
//             const tabgroups = typeof exam.tabgroups === 'string' 
//               ? JSON.parse(exam.tabgroups) 
//               : exam.tabgroups;
            
//             // Check if categorySlug is in tabgroups
//             if (Array.isArray(tabgroups)) {
//               return tabgroups.includes(categorySlug);
//             } else if (typeof tabgroups === 'string') {
//               return tabgroups === categorySlug;
//             }
//             return false;
//           } catch (e) {
//             // If not valid JSON, check if it's a comma-separated string
//             if (typeof exam.tabgroups === 'string') {
//               return exam.tabgroups.split(',').map(s => s.trim()).includes(categorySlug);
//             }
//             return false;
//           }
//         });
        
//         if (filteredExams.length > 0) {
//           exams = filteredExams;
//           category = {
//             name: categorySlug
//               .split('-')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' '),
//             description: `Exams related to ${categorySlug.replace(/-/g, ' ')}`
//           };
//         }
//       }
//     }
    
//     // If still no category or exams, create a placeholder
//     if (!category) {
//       category = {
//         name: categorySlug
//           .split('-')
//           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(' '),
//         description: 'Exam category'
//       };
//     }
    
//     // Debug output
//     console.log(`Category: ${category.name}, Found ${exams.length} exams`);
    
//     // Process exams to include necessary display properties
//     const examsWithSlug = exams.map(exam => ({
//       ...exam,
//       categorySlug: categorySlug,
//       questionCount: exam.question_count || Math.floor(Math.random() * 300) + 100,
//       // Add any other needed properties for the UI
//       colorSecondary: exam.color_secondary || adjustColor(exam.color, -20)
//     }));
    
//     return (
//       <CategoryPageClient
//         exams={examsWithSlug}
//         categoryName={category.name}
//         categoryDescription={category.description}
//       />
//     );
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     return notFound();
//   }
// }

// // Helper function to adjust color brightness
// function adjustColor(hex, amount) {
//   try {
//     if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
//       return '#2563EB'; // Default secondary blue
//     }
    
//     // Parse the hex color
//     let r = parseInt(hex.substring(1, 3), 16);
//     let g = parseInt(hex.substring(3, 5), 16);
//     let b = parseInt(hex.substring(5, 7), 16);
    
//     // Adjust brightness
//     r = Math.max(0, Math.min(255, r + amount));
//     g = Math.max(0, Math.min(255, g + amount));
//     b = Math.max(0, Math.min(255, b + amount));
    
//     // Convert back to hex
//     return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
//   } catch (e) {
//     console.error('Error adjusting color:', e);
//     return '#2563EB'; // Default secondary blue
//   }
// }


// // app/exam/[categorySlug]/page.js
// import React from 'react';
// import { notFound } from 'next/navigation';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import CategoryPageClient from './CategoryPageClient';

// export default async function ExamCategoryPage({ params }) {
//   const { categorySlug } = params;
//   const supabase = createServerComponentClient({ cookies });
  
//   try {
//     // Debug the incoming slug
//     console.log(`Processing category slug: ${categorySlug}`);
    
//     // Try to find the category first
//     let category = null;
//     let exams = [];
    
//     // First approach: Check exam_categories table with is_active filter
//     const { data: categoryData, error: categoryError } = await supabase
//       .from('exam_categories')
//       .select('id, name, description, color, icon')
//       .eq('slug', categorySlug)
//       .eq('is_active', true)
//       .single();
    
//     console.log('Category query results:', { categoryData, categoryError });
    
//     if (!categoryError && categoryData) {
//       category = categoryData;
      
//       // Now get exams for this category
//       const { data: examsData, error: examsError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('category_id', category.id)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       console.log('Exams by category_id query results:', { 
//         count: examsData?.length, 
//         examsError,
//         categoryId: category.id
//       });
      
//       if (!examsError) {
//         exams = examsData || [];
//       } else {
//         console.error('Error fetching exams by category_id:', examsError);
//       }
//     } else {
//       console.log('Category not found in exam_categories table or not active, trying alternatives');
//     }
    
//     // Second approach: Check exams table for categories
//     if (!category || exams.length === 0) {
//       const { data: categoryExamData, error: categoryExamError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('slug', categorySlug)
//         .eq('is_category', true)
//         .eq('is_active', true)
//         .single();
      
//       console.log('Category as exam query results:', { 
//         categoryExamData, 
//         categoryExamError 
//       });
      
//       if (!categoryExamError && categoryExamData) {
//         category = {
//           id: categoryExamData.id,
//           name: categoryExamData.name,
//           description: categoryExamData.description,
//           color: categoryExamData.color,
//           icon: categoryExamData.icon
//         };
        
//         // Get exams for this category
//         const { data: examsData, error: examsError } = await supabase
//           .from('exams')
//           .select('*')
//           .eq('parent_id', category.id) // Try parent_id first
//           .eq('is_active', true)
//           .eq('is_category', false);
        
//         console.log('Exams by parent_id query results:', { 
//           count: examsData?.length, 
//           examsError 
//         });
        
//         if (!examsError && examsData && examsData.length > 0) {
//           exams = examsData;
//         } else {
//           // Try category_id instead
//           const { data: categoryIdExams, error: categoryIdError } = await supabase
//             .from('exams')
//             .select('*')
//             .eq('category_id', category.id)
//             .eq('is_active', true)
//             .eq('is_category', false);
          
//           console.log('Exams by category_id (second attempt) query results:', { 
//             count: categoryIdExams?.length, 
//             categoryIdError 
//           });
          
//           if (!categoryIdError) {
//             exams = categoryIdExams || [];
//           }
//         }
//       }
//     }
    
//     // Third approach: Try to get exams where the category field matches the slug
//     if (!category || exams.length === 0) {
//       const categoryName = categorySlug
//         .split('-')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
      
//       const { data: examsData, error: examsError } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('category', categoryName)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       console.log('Exams by category name query results:', { 
//         categoryName,
//         count: examsData?.length, 
//         examsError 
//       });
      
//       if (!examsError && examsData && examsData.length > 0) {
//         exams = examsData;
//         category = {
//           name: categoryName,
//           description: `Exams in the ${categoryName} category`,
//           color: examsData[0].color || '#3B82F6'
//         };
//       }
//     }
    
//     // Fourth approach: Check if any exams have this category in their tabgroups
//     if (!category || exams.length === 0) {
//       const { data: tabgroupExams, error: tabgroupError } = await supabase
//         .from('exams')
//         .select('*')
//         .not('tabgroups', 'is', null)
//         .eq('is_active', true)
//         .eq('is_category', false);
      
//       console.log('Tabgroup query results:', { 
//         count: tabgroupExams?.length, 
//         tabgroupError 
//       });
      
//       if (!tabgroupError && tabgroupExams && tabgroupExams.length > 0) {
//         // Filter exams that have this category slug in their tabgroups
//         const filteredExams = tabgroupExams.filter(exam => {
//           if (!exam.tabgroups) return false;
          
//           try {
//             // Try to parse as JSON if it's a string
//             let tabgroups = exam.tabgroups;
//             if (typeof tabgroups === 'string') {
//               // Check if it's valid JSON
//               try {
//                 tabgroups = JSON.parse(tabgroups);
//               } catch {
//                 // Not JSON, treat as comma-separated
//                 return tabgroups
//                   .split(',')
//                   .map(s => s.trim())
//                   .includes(categorySlug);
//               }
//             }
            
//             // Handle array or string
//             if (Array.isArray(tabgroups)) {
//               return tabgroups.includes(categorySlug);
//             } else if (typeof tabgroups === 'string') {
//               return tabgroups === categorySlug;
//             }
//             return false;
//           } catch (e) {
//             console.error(`Error processing tabgroups for exam ${exam.id}:`, e);
//             return false;
//           }
//         });
        
//         console.log('Filtered tabgroup exams:', { count: filteredExams.length });
        
//         if (filteredExams.length > 0) {
//           exams = filteredExams;
//           category = {
//             name: categorySlug
//               .split('-')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' '),
//             description: `Exams related to ${categorySlug.replace(/-/g, ' ')}`,
//             color: filteredExams[0].color || '#3B82F6'
//           };
//         }
//       }
//     }
    
//     // If still no category or exams, create a placeholder
//     if (!category) {
//       category = {
//         name: categorySlug
//           .split('-')
//           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(' '),
//         description: 'Exam category',
//         color: '#3B82F6'
//       };
//     }

//     // Debug output
//     console.log(`Category: ${category.name}, Found ${exams.length} exams`);
    
//     // Process exams to include necessary display properties
//     const examsWithSlug = exams.map(exam => ({
//       ...exam,
//       categorySlug: categorySlug, // Fixed property name to match client component
//       questionCount: exam.question_count || calculateQuestionCount(exam.id),
//       colorSecondary: exam.color_secondary || adjustColor(exam.color || '#3B82F6', -20)
//     }));
    
//     return (
//       <CategoryPageClient
//         exams={examsWithSlug}
//         categoryName={category.name}
//         categoryDescription={category.description}
//         categoryColor={category.color || '#3B82F6'}
//         categoryIcon={category.icon || 'BookOpen'}
      
//       />
//     );
//   } catch (error) {
//     console.error('Unexpected error in ExamCategoryPage:', error);
//     return notFound();
//   }

// }
// // Helper function to adjust color brightness
// function adjustColor(hex, amount) {
//   try {
//     if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
//       return '#2563EB'; // Default secondary blue
//     }
    
//     // Parse the hex color
//     let r = parseInt(hex.substring(1, 3), 16);
//     let g = parseInt(hex.substring(3, 5), 16);
//     let b = parseInt(hex.substring(5, 7), 16);
    
//     // Adjust brightness
//     r = Math.max(0, Math.min(255, r + amount));
//     g = Math.max(0, Math.min(255, g + amount));
//     b = Math.max(0, Math.min(255, b + amount));
    
//     // Convert back to hex
//     return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
//   } catch (e) {
//     console.error('Error adjusting color:', e);
//     return '#2563EB'; // Default secondary blue
//   }
// }

// // Helper function to calculate question count
// function calculateQuestionCount(examId) {
//   // In production, you might want to query this from a questions table
//   // For now, use a deterministic random number based on the exam ID
//   const hash = String(examId).split('').reduce((a, b) => {
//     a = ((a << 5) - a) + b.charCodeAt(0);
//     return a & a;
//   }, 0);
  
//   return Math.abs(hash % 500) + 100; // Between 100 and 599 questions
// }
// app/exam/[categorySlug]/page.js
import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CategoryPageClient from './CategoryPageClient';

export default async function ExamCategoryPage({ params }) {
  const { categorySlug } = params;
  const supabase = createServerComponentClient({ cookies });
  
  try {
    // First, fetch the category info
    const { data: categoryData, error: categoryError } = await supabase
      .from('exam_categories')
      .select('id, name, description, color, icon')
      .eq('slug', categorySlug)
      .eq('is_active', true)
      .single();
    
    if (categoryError) {
      console.error('Error fetching category:', categoryError);
      return notFound();
    }
    
    // Then fetch all exams for this category
    const { data: examsData, error: examsError } = await supabase
      .from('exams')
      .select('*')
      .eq('category_id', categoryData.id)
      .eq('is_active', true)
      .order('display_order', { ascending: true });
      
    if (examsError) {
      console.error('Error fetching exams:', examsError);
      return notFound();
    }
    
    // Process exams to include the category slug for URL building
    const processedExams = examsData.map(exam => ({
      ...exam,
      categorySlug,
      questionCount: exam.question_count || calculateQuestionCount(exam.id)
    }));
    
    return (
      <CategoryPageClient
        initialExams={processedExams}
        categoryName={categoryData.name}
        categoryDescription={categoryData.description}
        categoryColor={categoryData.color || '#3B82F6'}
        categoryIcon={categoryData.icon || 'BookOpen'}
      />
    );
  } catch (error) {
    console.error('Unexpected error in ExamCategoryPage:', error);
    return notFound();
  }
}

// Helper function to calculate question count
function calculateQuestionCount(examId) {
  // In production, you might want to query this from a questions table
  // For now, use a deterministic random number based on the exam ID
  const hash = String(examId).split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return Math.abs(hash % 500) + 100; // Between 100 and 599 questions
}
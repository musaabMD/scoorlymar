// // 'use client';
// // // app/exam/[categorySlug]/CategoryPageClient.js
// // import React from 'react';
// // import Link from 'next/link';
// // import { BookOpen, Search } from 'lucide-react';
// // import ClientExamList from './ClientExamList';
// // import Header from '@/components/Header';

// // export default function CategoryPageClient({ exams, categoryName, categoryDescription }) {
// //   return (
// //     <main className="min-h-screen bg-base-100">
// //       <Header />
      
// //       {/* Hero Section */}
// //       <section className="relative pt-24 pb-12 bg-gradient-to-b from-base-100 to-base-200">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center max-w-3xl mx-auto">
// //             {/* Category Icon */}
// //             <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-focus shadow-lg">
// //               <BookOpen size={32} className="text-primary-content" strokeWidth={1.5} />
// //             </div>
            
// //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
// //               {categoryName}
// //             </h1>
// //             {categoryDescription && (
// //               <p className="text-lg md:text-xl text-base-content/80 mb-8">
// //                 {categoryDescription}
// //               </p>
// //             )}

// //             {/* Search Box */}
// //             <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <Search size={18} className="text-base-content/40" />
// //               </div>
// //               <input
// //                 type="text"
// //                 className="block w-full pl-10 pr-3 py-2 border border-base-300 rounded-full bg-base-100 placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
// //                 placeholder="Search in this category..."
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Exams Grid */}
// //       <section className="py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {exams.length > 0 ? (
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
// //               {exams.map((exam) => (
// //                 <Link
// //                   key={exam.id}
// //                   href={`/exam/${exam.categorySlug}/${exam.slug}`}
// //                   className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
// //                 >
// //                   <div
// //                     className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all"
// //                     style={{
// //                       background: `linear-gradient(145deg, ${exam.color || '#3B82F6'}, ${
// //                         exam.colorSecondary || '#2563EB'
// //                       })`
// //                     }}
// //                   >
// //                     <BookOpen size={24} className="text-white" />
// //                   </div>
// //                   <div className="w-full px-1">
// //                     <div className="font-medium text-xs sm:text-sm text-base-content truncate">
// //                       {exam.name}
// //                     </div>
// //                     <div className="text-xs text-base-content/60 truncate">
// //                       {exam.questionCount || '100+'} Questions
// //                     </div>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="text-center py-12 bg-base-200 rounded-lg">
// //               <h3 className="text-xl font-semibold mb-2">Looking for specific exams?</h3>
// //               <p className="text-base-content/80 mb-4">
// //                 We're constantly adding new exams. Let us know what you need!
// //               </p>
// //               <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
// //                 <Link href="/exam" className="btn btn-primary">
// //                   Browse All Exams
// //                 </Link>
// //                 <Link href="/contact" className="btn btn-outline">
// //                   Request an Exam
// //                 </Link>
// //               </div>
// //             </div>
// //           )}

// //           {/* Premium CTA */}
// //           {exams.length > 0 && (
// //             <div className="mt-16 bg-gradient-to-r from-base-200 to-base-300 rounded-xl p-8 text-center shadow-sm">
// //               <h3 className="text-2xl font-bold text-base-content mb-3">
// //                 Unlock Full Access
// //               </h3>
// //               <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
// //                 Get unlimited access to all practice questions, detailed explanations, and performance tracking
// //               </p>
// //               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //                 <Link href="/pricing" className="btn btn-primary btn-wide">
// //                   View Plans
// //                 </Link>
// //                 <Link href="/signup" className="btn btn-outline btn-wide">
// //                   Try for Free
// //                 </Link>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// 'use client';
// // app/exam/[categorySlug]/CategoryPageClient.js
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { BookOpen, Search, BookCopy, Award, BarChart2 } from 'lucide-react';
// import Header from '@/components/Header';

// export default function CategoryPageClient({ 
//   exams, 
//   categoryName, 
//   categoryDescription,
//   categoryColor = '#3B82F6',
//   categoryIcon = 'BookOpen'
// }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter exams based on search term
//   const filteredExams = searchTerm 
//     ? exams.filter(exam => 
//         exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (exam.description && exam.description.toLowerCase().includes(searchTerm.toLowerCase()))
//       )
//     : exams;

//   // Get icon component based on name
//   const getCategoryIcon = (iconName) => {
//     const icons = {
//       BookOpen: BookOpen,
//       BookCopy: BookCopy,
//       Award: Award,
//       BarChart2: BarChart2
//     };
    
//     const IconComponent = icons[iconName] || BookOpen;
//     return <IconComponent size={32} className="text-primary-content" strokeWidth={1.5} />;
//   };

//   return (
//     <main className="min-h-screen bg-base-100">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-12 bg-gradient-to-b from-base-100 to-base-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             {/* Category Icon */}
//             <div 
//               className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-2xl shadow-lg"
//               style={{
//                 background: `linear-gradient(145deg, ${categoryColor}, ${adjustColor(categoryColor, -20)})`
//               }}
//             >
//               {getCategoryIcon(categoryIcon)}
//             </div>
            
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
//               {categoryName}
//             </h1>
//             {categoryDescription && (
//               <p className="text-lg md:text-xl text-base-content/80 mb-8">
//                 {categoryDescription}
//               </p>
//             )}

//             {/* Search Box */}
//             <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search size={18} className="text-base-content/40" />
//               </div>
//               <input
//                 type="text"
//                 className="block w-full pl-10 pr-3 py-2 border border-base-300 rounded-full bg-base-100 placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
//                 placeholder="Search in this category..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Exams Grid */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredExams.length > 0 ? (
//             <>
//               <h2 className="text-2xl font-semibold mb-6">Available Exams</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//                 {filteredExams.map((exam) => (
//                   <Link
//                     key={exam.id}
//                     href={`/exam/${exam.categorySlug}/${exam.slug}`}
//                     className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
//                   >
//                     <div
//                       className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all"
//                       style={{
//                         background: `linear-gradient(145deg, ${exam.color || '#3B82F6'}, ${
//                           exam.colorSecondary || '#2563EB'
//                         })`
//                       }}
//                     >
//                       <BookOpen size={24} className="text-white" />
//                     </div>
//                     <div className="w-full px-1">
//                       <div className="font-medium text-xs sm:text-sm text-base-content truncate">
//                         {exam.name}
//                       </div>
//                       <div className="text-xs text-base-content/60 truncate">
//                         {exam.questionCount || '100+'} Questions
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-12 bg-base-200 rounded-lg">
//               <h3 className="text-xl font-semibold mb-2">
//                 {searchTerm ? 'No exams match your search' : 'Looking for specific exams?'}
//               </h3>
//               <p className="text-base-content/80 mb-4">
//                 {searchTerm ? 
//                   'Try adjusting your search terms or browse all exams.' : 
//                   'We\'re constantly adding new exams. Let us know what you need!'}
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//                 <Link href="/exam" className="btn btn-primary">
//                   Browse All Exams
//                 </Link>
//                 <Link href="/contact" className="btn btn-outline">
//                   Request an Exam
//                 </Link>
//               </div>
//             </div>
//           )}

//           {/* Premium CTA */}
//           {filteredExams.length > 0 && (
//             <div className="mt-16 bg-gradient-to-r from-base-200 to-base-300 rounded-xl p-8 text-center shadow-sm">
//               <h3 className="text-2xl font-bold text-base-content mb-3">
//                 Unlock Full Access
//               </h3>
//               <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
//                 Get unlimited access to all practice questions, detailed explanations, and performance tracking
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <Link href="/pricing" className="btn btn-primary btn-wide">
//                   View Plans
//                 </Link>
//                 <Link href="/signup" className="btn btn-outline btn-wide">
//                   Try for Free
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// // Helper function to adjust color brightness (duplicated for client component)
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
'use client';
// app/exam/[categorySlug]/CategoryPageClient.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Search, BookCopy, Award, BarChart2 } from 'lucide-react';
import Header from '@/components/Header';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useParams } from 'next/navigation';

export default function CategoryPageClient({ 
  initialExams = [],
  categoryName, 
  categoryDescription,
  categoryColor = '#3B82F6',
  categoryIcon = 'BookOpen'
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [exams, setExams] = useState(initialExams);
  const [loading, setLoading] = useState(initialExams.length === 0);
  const params = useParams();
  const { categorySlug } = params;
  const supabase = createClientComponentClient();

  // Fetch exams for this category if not provided
  useEffect(() => {
    async function fetchExams() {
      if (initialExams.length > 0) {
        setExams(initialExams);
        return;
      }

      try {
        setLoading(true);
        
        // First get the category ID
        const { data: categoryData, error: categoryError } = await supabase
          .from('exam_categories')
          .select('id')
          .eq('slug', categorySlug)
          .single();
        
        if (categoryError) {
          console.error('Error fetching category:', categoryError);
          setLoading(false);
          return;
        }
        
        // Then get all exams for this category
        const { data: examsData, error: examsError } = await supabase
          .from('exams')
          .select('*')
          .eq('category_id', categoryData.id)
          .eq('is_active', true)
          .order('display_order', { ascending: true });
          
        if (examsError) {
          console.error('Error fetching exams:', examsError);
          setLoading(false);
          return;
        }
        
        // Process exams to include necessary display properties
        const processedExams = examsData.map(exam => {
          const gradient = getGradientForExam(exam.name, exam.color);
          
          return {
            ...exam,
            gradient,
            categorySlug,
            icon: <BookOpen size={24} className="text-white" />,
            questions: exam.question_count || Math.floor(Math.random() * 300) + 100
          };
        });
        
        setExams(processedExams);
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchExams();
  }, [categorySlug, initialExams, supabase]);

  // Filter exams based on search term
  const filteredExams = searchTerm 
    ? exams.filter(exam => 
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (exam.description && exam.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : exams;

  // Function to get a consistent gradient for an exam
  const getGradientForExam = (examName, color) => {
    // Use provided color if available
    if (color) {
      return `linear-gradient(135deg, ${color}, ${adjustColor(color, -20)})`;
    }
    
    // Otherwise, generate a gradient based on the exam name
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
    
    const hash = examName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  };

  // Get icon component based on name
  const getCategoryIcon = (iconName) => {
    const icons = {
      BookOpen: BookOpen,
      BookCopy: BookCopy,
      Award: Award,
      BarChart2: BarChart2
    };
    
    const IconComponent = icons[iconName] || BookOpen;
    return <IconComponent size={32} className="text-primary-content" strokeWidth={1.5} />;
  };

  return (
    <main className="min-h-screen bg-base-100">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Category Icon */}
            <div 
              className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: `linear-gradient(145deg, ${categoryColor}, ${adjustColor(categoryColor, -20)})`
              }}
            >
              {getCategoryIcon(categoryIcon)}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {categoryName}
            </h1>
            {categoryDescription && (
              <p className="text-lg md:text-xl text-base-content/80 mb-8">
                {categoryDescription}
              </p>
            )}

            {/* Search Box */}
            <div className="relative max-w-xs sm:max-w-md mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-base-content/40" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-base-300 rounded-full bg-base-100 placeholder-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
                placeholder="Search in this category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredExams.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Available Exams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => {
                  return (
                    <Link
                      key={exam.id}
                      href={`/exam/${categorySlug}/${exam.slug}`}
                      className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <div
                        className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white"
                        style={{ background: exam.gradient || getGradientForExam(exam.name, exam.color) }}
                      >
                        <BookOpen size={24} />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{exam.name}</h2>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {exam.description || `Prepare for the ${exam.name} exam`}
                      </p>
                      <div className="mt-2 text-sm text-gray-500">
                        {exam.questionCount || exam.questions || '100+'} Questions
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-base-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {searchTerm ? 'No exams match your search' : 'Looking for specific exams?'}
              </h3>
              <p className="text-base-content/80 mb-4">
                {searchTerm ? 
                  'Try adjusting your search terms or browse all exams.' : 
                  'We\'re constantly adding new exams. Let us know what you need!'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/exam" className="btn btn-primary">
                  Browse All Exams
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Request an Exam
                </Link>
              </div>
            </div>
          )}

          {/* Premium CTA */}
          {filteredExams.length > 0 && (
            <div className="mt-16 bg-gradient-to-r from-base-200 to-base-300 rounded-xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-base-content mb-3">
                Unlock Full Access
              </h3>
              <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
                Get unlimited access to all practice questions, detailed explanations, and performance tracking
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/pricing" className="btn btn-primary btn-wide">
                  View Plans
                </Link>
                <Link href="/signup" className="btn btn-outline btn-wide">
                  Try for Free
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// Helper function to adjust color brightness
function adjustColor(hex, amount) {
  try {
    if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
      return '#2563EB'; // Default secondary blue
    }
    
    // Parse the hex color
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    // Adjust brightness
    r = Math.max(0, Math.min(255, r + amount));
    g = Math.max(0, Math.min(255, g + amount));
    b = Math.max(0, Math.min(255, b + amount));
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  } catch (e) {
    console.error('Error adjusting color:', e);
    return '#2563EB'; // Default secondary blue
  }
}
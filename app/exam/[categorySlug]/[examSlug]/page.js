// // // // app/exam/[categorySlug]/[examSlug]/page.js
// // // import React from 'react';
// // // import Link from 'next/link';
// // // import { notFound } from 'next/navigation';
// // // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // // import { cookies } from 'next/headers';

// // // export default async function ExamPage({ params }) {
// // //   const { categorySlug, examSlug } = params;
// // //   const supabase = createServerComponentClient({ cookies });

// // //   try {
// // //     // Get the exam by slug
// // //     const { data: exam, error: examError } = await supabase
// // //       .from('exams')
// // //       .select('*')
// // //       .eq('slug', examSlug)
// // //       .single();

// // //     if (examError || !exam) {
// // //       console.error('Error fetching exam:', examError);
// // //       return notFound();
// // //     }

// // //     // Try to get subject data if available
// // //     let subjects = [];
// // //     try {
// // //       // First try the subject_slugs view if it exists
// // //       const { data: subjectData, error: subjectError } = await supabase
// // //         .from('subject_slugs')
// // //         .select('*')
// // //         .eq('exam_id', exam.id);

// // //       if (!subjectError && subjectData) {
// // //         subjects = subjectData;
// // //       } else {
// // //         // Fallback to getting distinct subjects from questions
// // //         const { data: questionSubjects, error: questionError } = await supabase
// // //           .from('questions')
// // //           .select('subject, COUNT(*)')
// // //           .eq('exam_id', exam.id)
// // //           .group('subject');

// // //         if (!questionError && questionSubjects) {
// // //           subjects = questionSubjects.map(item => ({
// // //             subject: item.subject,
// // //             slug: item.subject.toLowerCase().replace(/\s+/g, '-'),
// // //             total_questions: parseInt(item.count)
// // //           }));
// // //         }
// // //       }
// // //     } catch (e) {
// // //       console.error('Error fetching subjects:', e);
// // //     }

// // //     // Get category information
// // //     let categoryName = categorySlug
// // //       .split('-')
// // //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // //       .join(' ');

// // //     if (exam.category_id) {
// // //       try {
// // //         const { data: category } = await supabase
// // //           .from('exam_categories')
// // //           .select('name')
// // //           .eq('id', exam.category_id)
// // //           .single();

// // //         if (category) {
// // //           categoryName = category.name;
// // //         }
// // //       } catch (e) {
// // //         console.log('Error fetching category name:', e);
// // //       }
// // //     } else if (exam.category) {
// // //       categoryName = exam.category;
// // //     }

// // //     return (
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="mb-4">
// // //           <Link href={`/exam/${categorySlug}`} className="text-blue-600 hover:underline">
// // //             ← Back to {categoryName}
// // //           </Link>
// // //         </div>
        
// // //         <h1 className="text-3xl font-bold mb-6">{exam.name}</h1>
// // //         <p className="text-gray-600 mb-8">{exam.description}</p>
        
// // //         <h2 className="text-2xl font-semibold mb-4">Available Subjects</h2>
        
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {subjects && subjects.length > 0 ? (
// // //             subjects.map((subject) => (
// // //               <Link
// // //                 key={subject.slug || subject.subject}
// // //                 href={`/exam/${categorySlug}/${examSlug}/subject/${subject.slug || encodeURIComponent(subject.subject.toLowerCase().replace(/\s+/g, '-'))}`}
// // //                 className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
// // //               >
// // //                 <h2 className="text-xl font-semibold mb-2">{subject.subject}</h2>
// // //                 {subject.total_questions && (
// // //                   <p className="text-gray-600">
// // //                     {subject.total_questions} questions available
// // //                   </p>
// // //                 )}
// // //               </Link>
// // //             ))
// // //           ) : (
// // //             <div className="col-span-full text-center py-8 border rounded-lg">
// // //               <p className="text-gray-600">No subjects available for this exam yet.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     );
// // //   } catch (error) {
// // //     console.error('Unexpected error:', error);
// // //     return notFound();
// // //   }
// // // }
// // // app/exam/[categorySlug]/[examSlug]/page.js
// // import React from 'react';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // import { cookies } from 'next/headers';
// // import Header from '@/components/Header';

// // export default async function ExamPage({ params }) {
// //   const { categorySlug, examSlug } = params;
// //   const supabase = createServerComponentClient({ cookies });

// //   try {
// //     // Get the exam by slug
// //     const { data: exam, error: examError } = await supabase
// //       .from('exams')
// //       .select('*')
// //       .eq('slug', examSlug)
// //       .single();

// //     if (examError || !exam) {
// //       console.error('Error fetching exam:', examError);
// //       return notFound();
// //     }

// //     // Try to get subject data if available
// //     let subjects = [];
// //     try {
// //       // First try the subject_slugs view if it exists
// //       const { data: subjectData, error: subjectError } = await supabase
// //         .from('subject_slugs')
// //         .select('*')
// //         .eq('exam_id', exam.id);

// //       if (!subjectError && subjectData) {
// //         subjects = subjectData;
// //       } else {
// //         // Fallback to getting distinct subjects from questions
// //         const { data: questionSubjects, error: questionError } = await supabase
// //           .from('questions')
// //           .select('subject, COUNT(*)')
// //           .eq('exam_id', exam.id)
// //           .group('subject');

// //         if (!questionError && questionSubjects) {
// //           subjects = questionSubjects.map(item => ({
// //             subject: item.subject,
// //             slug: item.subject.toLowerCase().replace(/\s+/g, '-'),
// //             total_questions: parseInt(item.count)
// //           }));
// //         }
// //       }
// //     } catch (e) {
// //       console.error('Error fetching subjects:', e);
// //     }

// //     // Get category information
// //     let categoryName = categorySlug
// //       .split('-')
// //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //       .join(' ');

// //     if (exam.category_id) {
// //       try {
// //         const { data: category } = await supabase
// //           .from('exam_categories')
// //           .select('name')
// //           .eq('id', exam.category_id)
// //           .single();

// //         if (category) {
// //           categoryName = category.name;
// //         }
// //       } catch (e) {
// //         console.log('Error fetching category name:', e);
// //       }
// //     } else if (exam.category) {
// //       categoryName = exam.category;
// //     }

// //     // Calculate total questions across all subjects
// //     const totalQuestions = subjects.reduce((total, subject) => 
// //       total + (subject.total_questions || 0), 0);

// //     return (
// //       <>
// //         <Header />
        
// //         {/* Hero Section */}
// //         <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
// //           <div className="container mx-auto px-4">
// //             <div className="flex flex-col md:flex-row items-center">
// //               <div className="md:w-1/2 mb-8 md:mb-0">
// //                 <div className="text-sm font-medium text-blue-600 mb-2">
// //                   <Link href="/" className="hover:underline">Exams</Link> {' > '} 
// //                   <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link>
// //                 </div>
// //                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{exam.name}</h1>
// //                 <p className="text-lg text-gray-600 mb-6">{exam.description}</p>
// //                 <div className="flex flex-wrap gap-4">
// //                   <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// //                     <span className="text-2xl font-bold text-blue-600 mr-2">{subjects.length}</span>
// //                     <span className="text-gray-600">Subjects</span>
// //                   </div>
// //                   <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// //                     <span className="text-2xl font-bold text-blue-600 mr-2">{totalQuestions}</span>
// //                     <span className="text-gray-600">Questions</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="md:w-1/2 flex justify-center">
// //                 <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-gray-200">
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to practice?</h3>
// //                   <p className="text-gray-600 mb-4">Take a practice test with random questions from all subjects or select a specific subject below.</p>
// //                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition">
// //                     Start Random Practice Test
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Main Content */}
// //         <div className="container mx-auto px-4 py-12">
// //           <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Subjects</h2>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {subjects && subjects.length > 0 ? (
// //               subjects.map((subject) => (
// //                 <Link
// //                   key={subject.slug || subject.subject}
// //                   href={`/exam/${categorySlug}/${examSlug}/subject/${subject.slug || encodeURIComponent(subject.subject.toLowerCase().replace(/\s+/g, '-'))}`}
// //                   className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
// //                 >
// //                   <h2 className="text-xl font-semibold mb-2 text-gray-800">{subject.subject}</h2>
// //                   {subject.total_questions && (
// //                     <div className="flex items-center mt-auto pt-3 border-t">
// //                       <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
// //                         {subject.total_questions} questions
// //                       </div>
// //                       <div className="ml-auto">
// //                         <span className="text-blue-600">Practice →</span>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </Link>
// //               ))
// //             ) : (
// //               <div className="col-span-full text-center py-12 border rounded-lg bg-gray-50">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 4.5a7.5 7.5 0 017.5 7.5v7a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5v-7a7.5 7.5 0 017.5-7.5z" />
// //                 </svg>
// //                 <p className="text-gray-600 text-lg">No subjects available for this exam yet.</p>
// //                 <p className="text-gray-500 mt-2">Check back soon as we're constantly adding new content.</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </>
// //     );
// //   } catch (error) {
// //     console.error('Unexpected error:', error);
// //     return notFound();
// //   }
// // }
// // app/exam/[categorySlug]/[examSlug]/page.js// app/exam/[categorySlug]/[examSlug]/page.js
// import React from 'react';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import Header from '@/components/Header';
// import ExamDashboard from '@/components/ExamDashboard';

// export default async function ExamPage({ params }) {
//   const { categorySlug, examSlug } = params;
//   const supabase = createServerComponentClient({ cookies });

//   try {
//     // Get the exam by slug
//     const { data: exam, error: examError } = await supabase
//       .from('exams')
//       .select('*')
//       .eq('slug', examSlug)
//       .single();

//     if (examError || !exam) {
//       console.error('Error fetching exam:', examError);
//       return notFound();
//     }

//     // Get exam sections
//     const { data: sections, error: sectionsError } = await supabase
//       .from('exam_sections')
//       .select('*')
//       .eq('exam_id', exam.id)
//       .eq('is_active', true)
//       .order('display_order', { ascending: true, nullsLast: true });

//     if (sectionsError) {
//       console.error('Error fetching exam sections:', sectionsError);
//     }

//     // Try to get subject data as fallback if available
//     let subjects = [];
//     let examContent = sections && sections.length > 0 ? sections : [];
    
//     if (!examContent.length) {
//       try {
//         // Fallback to subject_slugs view
//         const { data: subjectData, error: subjectError } = await supabase
//           .from('subject_slugs')
//           .select('*')
//           .eq('exam_id', exam.id);

//         if (!subjectError && subjectData && subjectData.length > 0) {
//           examContent = subjectData;
//         } else {
//           // Fallback to getting distinct subjects from questions
//           const { data: questionSubjects, error: questionError } = await supabase
//             .from('questions')
//             .select('subject, COUNT(*)')
//             .eq('exam_id', exam.id)
//             .group('subject');

//           if (!questionError && questionSubjects && questionSubjects.length > 0) {
//             examContent = questionSubjects.map(item => ({
//               id: item.subject.toLowerCase().replace(/\s+/g, '-'),
//               name: item.subject,
//               total_questions: parseInt(item.count)
//             }));
//           }
//         }
//       } catch (e) {
//         console.error('Error fetching subjects:', e);
//       }
//     }

//     // For each section, get question count if needed
//     for (let i = 0; i < examContent.length; i++) {
//       const section = examContent[i];
      
//       // If questions count not already available
//       if (!section.total_questions) {
//         try {
//           const { data: questionCount, error: countError } = await supabase
//             .from('questions')
//             .select('id', { count: 'exact' })
//             .eq('exam_id', exam.id)
//             .eq(section.subject ? 'subject' : 'section_id', section.subject || section.id);
            
//           if (!countError) {
//             examContent[i].total_questions = questionCount.length;
//           }
//         } catch (e) {
//           console.error(`Error fetching question count for section ${section.name}:`, e);
//           examContent[i].total_questions = 0;
//         }
//       }
      
//       // Add slug if not exists
//       if (!section.slug) {
//         examContent[i].slug = section.name.toLowerCase().replace(/\s+/g, '-');
//       }
//     }

//     // Get category information
//     let categoryName = categorySlug
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');

//     if (exam.category_id) {
//       try {
//         const { data: category } = await supabase
//           .from('exam_categories')
//           .select('name')
//           .eq('id', exam.category_id)
//           .single();

//         if (category) {
//           categoryName = category.name;
//         }
//       } catch (e) {
//         console.log('Error fetching category name:', e);
//       }
//     } else if (exam.category) {
//       categoryName = exam.category;
//     }

//     // Calculate total questions across all sections
//     const totalQuestions = examContent.reduce((total, section) => 
//       total + (section.total_questions || 0), 0);

//     // Prepare data for ExamDashboard
//     const examData = {
//       name: exam.name,
//       description: exam.description,
//       totalQuestions: totalQuestions,
//       averageScore: "N/A",
//       studyTime: "0 hrs",
//       completionRate: "0%",
//       flaggedCount: 0,
//       notDoneCount: totalQuestions,
//       incorrectCount: 0
//     };

//     return (
//       <>
//         <Header />
        
//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-full">
//                 <div className="text-sm font-medium text-blue-600 mb-2">
//                   <Link href="/" className="hover:underline">Exams</Link> {' > '} 
//                   <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link>
//                 </div>
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{exam.name}</h1>
//                 <p className="text-lg text-gray-600 mb-6">{exam.description}</p>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
//                     <span className="text-2xl font-bold text-blue-600 mr-2">{examContent.length}</span>
//                     <span className="text-gray-600">Sections</span>
//                   </div>
//                   <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
//                     <span className="text-2xl font-bold text-blue-600 mr-2">{totalQuestions}</span>
//                     <span className="text-gray-600">Questions</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* ExamDashboard Component */}
//         <ExamDashboard 
//           examData={examData}
//           categorySlug={categorySlug}
//           examSlug={examSlug}
//           sections={examContent}
//         />
//       </>
//     );
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     return notFound();
//   }
// }
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Header from '@/components/Header';
import ExamDashboard from '@/components/ExamDashboard';
import { TrendingUp, PieChart, Clock, Award } from 'lucide-react';

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

    // Get exam sections
    const { data: sections, error: sectionsError } = await supabase
      .from('exam_sections')
      .select('*')
      .eq('exam_id', exam.id)
      .eq('is_active', true)
      .order('display_order', { ascending: true, nullsLast: true });

    if (sectionsError) {
      console.error('Error fetching exam sections:', sectionsError);
    }

    // Try to get subject data as fallback if available
    let examContent = sections && sections.length > 0 ? sections : [];
    
    if (!examContent.length) {
      try {
        // Fallback to subject_slugs view
        const { data: subjectData, error: subjectError } = await supabase
          .from('subject_slugs')
          .select('*')
          .eq('exam_id', exam.id);

        if (!subjectError && subjectData && subjectData.length > 0) {
          examContent = subjectData;
        } else {
          // Fallback to getting distinct subjects from questions
          const { data: questionSubjects, error: questionError } = await supabase
            .from('questions')
            .select('subject, COUNT(*)')
            .eq('exam_id', exam.id)
            .group('subject');

          if (!questionError && questionSubjects && questionSubjects.length > 0) {
            examContent = questionSubjects.map(item => ({
              id: item.subject.toLowerCase().replace(/\s+/g, '-'),
              name: item.subject,
              total_questions: parseInt(item.count)
            }));
          }
        }
      } catch (e) {
        console.error('Error fetching subjects:', e);
      }
    }

    // For each section, get question count if needed
    for (let i = 0; i < examContent.length; i++) {
      const section = examContent[i];
      
      // If questions count not already available
      if (!section.total_questions) {
        try {
          const { data: questionCount, error: countError } = await supabase
            .from('questions')
            .select('id', { count: 'exact' })
            .eq('exam_id', exam.id)
            .eq(section.subject ? 'subject' : 'section_id', section.subject || section.id);
            
          if (!countError) {
            examContent[i].total_questions = questionCount.length;
          }
        } catch (e) {
          console.error(`Error fetching question count for section ${section.name}:`, e);
          examContent[i].total_questions = 0;
        }
      }
      
      // Add slug if not exists
      if (!section.slug) {
        examContent[i].slug = section.name.toLowerCase().replace(/\s+/g, '-');
      }
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

    // Calculate total questions across all sections
    const totalQuestions = examContent.reduce((total, section) => 
      total + (section.total_questions || 0), 0);

    // Prepare data for ExamDashboard
    const examData = {
      name: exam.name,
      description: exam.description,
      totalQuestions: totalQuestions,
      averageScore: "N/A",
      studyTime: "0 hrs",
      completionRate: "0%",
      flaggedCount: 0,
      notDoneCount: totalQuestions,
      incorrectCount: 0
    };

    // Stats cards
    const stats = [
      { title: "Average Score", value: examData.averageScore, icon: <TrendingUp size={16} />, color: "bg-blue-100 text-blue-600" },
      { title: "Total Questions", value: totalQuestions, icon: <PieChart size={16} />, color: "bg-indigo-100 text-indigo-600" },
      { title: "Study Time", value: examData.studyTime, icon: <Clock size={16} />, color: "bg-green-100 text-green-600" },
      { title: "Completion", value: examData.completionRate, icon: <Award size={16} />, color: "bg-amber-100 text-amber-600" }
    ];

    return (
      <>
        <Header />
        
        {/* Enhanced Hero Section with Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-8">
          <div className="container mx-auto px-4">
            <div className="text-sm font-medium text-blue-600 mb-2">
              <Link href="/" className="hover:underline">Exams</Link> {' > '} 
              <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div className="md:w-3/5">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{exam.name}</h1>
                <p className="text-gray-600 mb-4">{exam.description}</p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white rounded-lg shadow px-3 py-2 flex items-center">
                    <span className="text-xl font-bold text-blue-600 mr-2">{examContent.length}</span>
                    <span className="text-gray-600">Sections</span>
                  </div>
                  <div className="bg-white rounded-lg shadow px-3 py-2 flex items-center">
                    <span className="text-xl font-bold text-blue-600 mr-2">{totalQuestions}</span>
                    <span className="text-gray-600">Questions</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/5 mt-6 md:mt-0 grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-3 flex items-center">
                    <div className={`p-1.5 rounded-full ${stat.color} mr-2`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{stat.title}</div>
                      <div className="font-semibold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* ExamDashboard Component */}
        <ExamDashboard 
          examData={examData}
          categorySlug={categorySlug}
          examSlug={examSlug}
          sections={examContent}
        />
      </>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}
// // // // // app/exam/[categorySlug]/[examSlug]/subject/[subjectSlug]/page.js
// // // // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // // // import { cookies } from 'next/headers';
// // // // import { notFound } from 'next/navigation';
// // // // import dynamic from 'next/dynamic';
// // // // import Link from 'next/link';

// // // // // Use dynamic import for client component if you have one
// // // // const SubjectContent = dynamic(() => import('./SubjectContent'), { ssr: false });

// // // // export default async function SubjectPage({ params }) {
// // // //   const { categorySlug, examSlug, subjectSlug } = params;
// // // //   const supabase = createServerComponentClient({ cookies });
  
// // // //   try {
// // // //     // Get the exam first
// // // //     const { data: exam, error: examError } = await supabase
// // // //       .from('exams')
// // // //       .select('*')
// // // //       .eq('slug', examSlug)
// // // //       .single();
      
// // // //     if (examError || !exam) {
// // // //       console.error('Error fetching exam:', examError);
// // // //       return notFound();
// // // //     }
    
// // // //     // Try to get subject data
// // // //     let subject = {
// // // //       subject: subjectSlug
// // // //         .split('-')
// // // //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // // //         .join(' '),
// // // //       concepts: []
// // // //     };
    
// // // //     try {
// // // //       // Check if subject exists in subject_slugs
// // // //       const { data: subjectData } = await supabase
// // // //         .from('subject_slugs')
// // // //         .select('*')
// // // //         .eq('exam_id', exam.id)
// // // //         .eq('slug', subjectSlug)
// // // //         .single();
        
// // // //       if (subjectData) {
// // // //         subject.subject = subjectData.subject;
// // // //         subject.total_questions = subjectData.total_questions;
// // // //       } else {
// // // //         // Try to get from questions directly
// // // //         const decodedSubject = decodeURIComponent(subjectSlug)
// // // //           .split('-')
// // // //           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // // //           .join(' ');
          
// // // //         const { data: questionCount } = await supabase
// // // //           .from('questions')
// // // //           .select('count(*)')
// // // //           .eq('exam_id', exam.id)
// // // //           .eq('subject', decodedSubject)
// // // //           .single();
          
// // // //         if (questionCount) {
// // // //           subject.subject = decodedSubject;
// // // //           subject.total_questions = parseInt(questionCount.count);
// // // //         }
// // // //       }
      
// // // //       // Get any concepts if they exist
// // // //       try {
// // // //         const { data: concepts } = await supabase
// // // //           .from('flashcards')
// // // //           .select('*')
// // // //           .eq('exam_id', exam.id)
// // // //           .order('created_at');
          
// // // //         if (concepts && concepts.length > 0) {
// // // //           subject.concepts = concepts;
// // // //         }
// // // //       } catch (e) {
// // // //         console.log('Error fetching concepts:', e);
// // // //       }
// // // //     } catch (e) {
// // // //       console.log('Error fetching subject details:', e);
// // // //     }
    
// // // //     // Combine data for the client component
// // // //     const combinedData = {
// // // //       subject: subject,
// // // //       exam: exam,
// // // //       params: {
// // // //         categorySlug,
// // // //         examSlug,
// // // //         subjectSlug
// // // //       }
// // // //     };
    
// // // //     // Return either a client component or server-rendered HTML
// // // //     return (
// // // //       <div className="container mx-auto max-w-4xl px-4 py-8">
       
// // // //         <div className="mb-4">
// // // //           <Link 
// // // //             href={`/exam/${categorySlug}/${examSlug}`} 
// // // //             className="text-blue-600 hover:underline"
// // // //           >
// // // //             ← Back to {exam.name}
// // // //           </Link>
// // // //         </div>
        
// // // //         <h1 className="text-3xl font-bold mb-6">{subject.subject}</h1>
        
// // // //         {/* If you have a client component, use it here */}
// // // //         {subject.concepts && subject.concepts.length > 0 ? (
// // // //           <SubjectContent {...combinedData} />
// // // //         ) : (
// // // //           <div className="bg-white rounded-lg shadow-sm p-6">
// // // //             <h2 className="text-xl font-semibold mb-4">Subject Overview</h2>
// // // //             <p className="text-gray-600 mb-6">
// // // //               Study materials for {subject.subject} in the {exam.name} exam.
// // // //             </p>
            
// // // //             {subject.total_questions ? (
// // // //               <div className="mb-6">
// // // //                 <div className="flex items-center justify-between border-b pb-2 mb-2">
// // // //                   <span className="font-medium">Available Questions:</span>
// // // //                   <span>{subject.total_questions}</span>
// // // //                 </div>
// // // //               </div>
// // // //             ) : null}
            
// // // //             <div className="flex gap-4 mt-8">
// // // //               <button 
// // // //                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// // // //               >
// // // //                 Start Practice
// // // //               </button>
// // // //               <button 
// // // //                 className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
// // // //               >
// // // //                 View Flashcards
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     );
// // // //   } catch (error) {
// // // //     console.error('Unexpected error:', error);
// // // //     return notFound();
// // // //   }
// // // // }
// // // // app/exam/[categorySlug]/[examSlug]/subject/[subjectSlug]/page.js
// // // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // // import { cookies } from 'next/headers';
// // // import { notFound } from 'next/navigation';
// // // import dynamic from 'next/dynamic';
// // // import Link from 'next/link';
// // // import Header from '@/components/Header';
// // // import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
// // // import SubjectActionButtons from './SubjectActionButtons';

// // // // Use dynamic import for client component if you have one
// // // const SubjectContent = dynamic(() => import('./SubjectContent'), { ssr: false });

// // // export default async function SubjectPage({ params }) {
// // //   const { categorySlug, examSlug, subjectSlug } = params;
// // //   const supabase = createServerComponentClient({ cookies });
  
// // //   try {
// // //     // Get the exam first
// // //     const { data: exam, error: examError } = await supabase
// // //       .from('exams')
// // //       .select('*')
// // //       .eq('slug', examSlug)
// // //       .single();
      
// // //     if (examError || !exam) {
// // //       console.error('Error fetching exam:', examError);
// // //       return notFound();
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
    
// // //     // First check if this is actually a section from exam_sections
// // //     let subject = null;
// // //     let isSection = false;
    
// // //     try {
// // //       // Check if it's a section in exam_sections
// // //       const { data: sectionData, error: sectionError } = await supabase
// // //         .from('exam_sections')
// // //         .select('*')
// // //         .eq('exam_id', exam.id)
// // //         .eq('is_active', true)
// // //         .or(`slug.eq.${subjectSlug},name.ilike.%${subjectSlug.replace(/-/g, '%')}%`);
      
// // //       if (!sectionError && sectionData && sectionData.length > 0) {
// // //         subject = {
// // //           id: sectionData[0].id,
// // //           subject: sectionData[0].name,
// // //           description: sectionData[0].description,
// // //           slug: subjectSlug,
// // //           isSection: true
// // //         };
// // //         isSection = true;
// // //       }
// // //     } catch (e) {
// // //       console.log('Error checking for section:', e);
// // //     }
    
// // //     // If not a section, try subject data
// // //     if (!subject) {
// // //       subject = {
// // //         subject: subjectSlug
// // //           .split('-')
// // //           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // //           .join(' '),
// // //         concepts: []
// // //       };
      
// // //       try {
// // //         // Check if subject exists in subject_slugs
// // //         const { data: subjectData } = await supabase
// // //           .from('subject_slugs')
// // //           .select('*')
// // //           .eq('exam_id', exam.id)
// // //           .eq('slug', subjectSlug)
// // //           .single();
          
// // //         if (subjectData) {
// // //           subject.subject = subjectData.subject;
// // //           subject.total_questions = subjectData.total_questions;
// // //           subject.id = subjectData.id;
// // //         } else {
// // //           // Try to get from questions directly
// // //           const decodedSubject = decodeURIComponent(subjectSlug)
// // //             .split('-')
// // //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // //             .join(' ');
            
// // //           const { data: questionCount } = await supabase
// // //             .from('questions')
// // //             .select('count(*)')
// // //             .eq('exam_id', exam.id)
// // //             .eq('subject', decodedSubject)
// // //             .single();
            
// // //           if (questionCount) {
// // //             subject.subject = decodedSubject;
// // //             subject.total_questions = parseInt(questionCount.count);
// // //           }
// // //         }
// // //       } catch (e) {
// // //         console.log('Error fetching subject details:', e);
// // //       }
// // //     }
    
// // //     // Get question count if not available
// // //     if (!subject.total_questions) {
// // //       try {
// // //         const { count, error } = await supabase
// // //           .from('questions')
// // //           .select('*', { count: 'exact', head: true })
// // //           .eq('exam_id', exam.id)
// // //           .eq(isSection ? 'section_id' : 'subject', isSection ? subject.id : subject.subject);
          
// // //         if (!error) {
// // //           subject.total_questions = count;
// // //         }
// // //       } catch (e) {
// // //         console.log('Error getting question count:', e);
// // //         subject.total_questions = 0;
// // //       }
// // //     }
    
// // //     // Get any concepts if they exist
// // //     try {
// // //       const { data: concepts } = await supabase
// // //         .from('flashcards')
// // //         .select('*')
// // //         .eq('exam_id', exam.id)
// // //         .eq(isSection ? 'section_id' : 'subject_id', subject.id)
// // //         .order('created_at');
        
// // //       if (concepts && concepts.length > 0) {
// // //         subject.concepts = concepts;
// // //       }
// // //     } catch (e) {
// // //       console.log('Error fetching concepts:', e);
// // //       subject.concepts = [];
// // //     }
    
// // //     // Combine data for the client component
// // //     const combinedData = {
// // //       subject: subject,
// // //       exam: exam,
// // //       params: {
// // //         categorySlug,
// // //         examSlug,
// // //         subjectSlug
// // //       }
// // //     };
    
// // //     // Return either a client component or server-rendered HTML
// // //     return (
// // //       <>
// // //         <Header />
        
// // //         {/* Hero section */}
// // //         <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-6">
// // //           <div className="container mx-auto px-4">
// // //             <div className="text-sm font-medium text-blue-600 mb-2">
// // //               <Link href="/" className="hover:underline">Exams</Link> {' > '} 
// // //               <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link> {' > '}
// // //               <Link href={`/exam/${categorySlug}/${examSlug}`} className="hover:underline">{exam.name}</Link>
// // //             </div>
            
// // //             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{subject.subject}</h1>
// // //             {subject.description && (
// // //               <p className="text-lg text-gray-600 mb-6">{subject.description}</p>
// // //             )}
            
// // //             <div className="flex flex-wrap gap-4">
// // //               <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// // //                 <span className="text-xl font-bold text-blue-600 mr-2">{subject.total_questions || 0}</span>
// // //                 <span className="text-gray-600">Questions</span>
// // //               </div>
// // //               {subject.concepts && subject.concepts.length > 0 && (
// // //                 <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// // //                   <span className="text-xl font-bold text-blue-600 mr-2">{subject.concepts.length}</span>
// // //                   <span className="text-gray-600">Flashcards</span>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* Main content */}
// // //         <div className="container mx-auto max-w-5xl px-4 py-8 bg-[#F8FAFC]">
// // //           {subject.concepts && subject.concepts.length > 0 ? (
// // //             <SubjectContent {...combinedData} />
// // //           ) : (
// // //             <div className="bg-white rounded-lg shadow-sm p-6">
// // //               <div className="grid md:grid-cols-2 gap-6">
// // //                 <div>
// // //                   <div className="flex items-center mb-4">
// // //                     <BookOpen className="text-blue-600 mr-2" size={24} />
// // //                     <h2 className="text-xl font-semibold">Subject Overview</h2>
// // //                   </div>
// // //                   <p className="text-gray-600 mb-6">
// // //                     Study materials for {subject.subject} in the {exam.name} exam.
// // //                   </p>
                  
// // //                   {subject.total_questions ? (
// // //                     <div className="mb-6">
// // //                       <div className="flex items-center border-b pb-2 mb-2">
// // //                         <FileText className="text-gray-500 mr-2" size={16} />
// // //                         <span className="font-medium mr-2">Available Questions:</span>
// // //                         <span className="font-bold">{subject.total_questions}</span>
// // //                       </div>
// // //                     </div>
// // //                   ) : null}
// // //                 </div>
                
// // //                 <div className="flex flex-col justify-center">
// // //                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
// // //                     <h3 className="font-semibold text-blue-800 mb-2">Ready to test your knowledge?</h3>
// // //                     <p className="text-blue-700 text-sm mb-3">
// // //                       Practice with questions specific to this subject or create flashcards to study.
// // //                     </p>
// // //                   </div>
                  
// // //                   {/* Client component for interactive buttons */}
// // //                   <SubjectActionButtons />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           <div className="mt-8">
// // //             <Link 
// // //               href={`/exam/${categorySlug}/${examSlug}`} 
// // //               className="inline-flex items-center text-blue-600 hover:underline"
// // //             >
// // //               <ArrowLeft size={16} className="mr-1" />
// // //               Back to {exam.name}
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </>
// // //     );
// // //   } catch (error) {
// // //     console.error('Unexpected error:', error);
// // //     return notFound();
// // //   }
// // // }
// // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// // import { cookies } from 'next/headers';
// // import { notFound } from 'next/navigation';
// // import dynamic from 'next/dynamic';
// // import Link from 'next/link';
// // import Header from '@/components/Header';
// // import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
// // import SubjectActionButtons from './SubjectActionButtons';

// // // Use dynamic import for client component if you have one
// // const SubjectContent = dynamic(() => import('./SubjectContent'), { ssr: false });

// // export default async function SubjectPage({ params }) {
// //   const { categorySlug, examSlug, subjectSlug } = params;
// //   const supabase = createServerComponentClient({ cookies });
  
// //   try {
// //     // Get the exam first
// //     const { data: exam, error: examError } = await supabase
// //       .from('exams')
// //       .select('*')
// //       .eq('slug', examSlug)
// //       .single();
      
// //     if (examError || !exam) {
// //       console.error('Error fetching exam:', examError);
// //       return notFound();
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
    
// //     // First check if this is actually a section from exam_sections
// //     let subject = null;
// //     let isSection = false;
    
// //     try {
// //       // Check if it's a section in exam_sections
// //       const { data: sectionData, error: sectionError } = await supabase
// //         .from('exam_sections')
// //         .select('*')
// //         .eq('exam_id', exam.id)
// //         .eq('is_active', true)
// //         .or(`slug.eq.${subjectSlug},name.ilike.%${subjectSlug.replace(/-/g, '%')}%`);
      
// //       if (!sectionError && sectionData && sectionData.length > 0) {
// //         subject = {
// //           id: sectionData[0].id,
// //           subject: sectionData[0].name,
// //           description: sectionData[0].description,
// //           slug: subjectSlug,
// //           isSection: true
// //         };
// //         isSection = true;
// //       }
// //     } catch (e) {
// //       console.log('Error checking for section:', e);
// //     }
    
// //     // If not a section, try subject data
// //     if (!subject) {
// //       subject = {
// //         subject: subjectSlug
// //           .split('-')
// //           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //           .join(' '),
// //         concepts: []
// //       };
      
// //       try {
// //         // Check if subject exists in subject_slugs
// //         const { data: subjectData } = await supabase
// //           .from('subject_slugs')
// //           .select('*')
// //           .eq('exam_id', exam.id)
// //           .eq('slug', subjectSlug)
// //           .single();
          
// //         if (subjectData) {
// //           subject.subject = subjectData.subject;
// //           subject.total_questions = subjectData.total_questions;
// //           subject.id = subjectData.id;
// //         } else {
// //           // Try to get from questions directly
// //           const decodedSubject = decodeURIComponent(subjectSlug)
// //             .split('-')
// //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //             .join(' ');
            
// //           const { data: questionCount } = await supabase
// //             .from('questions')
// //             .select('count(*)')
// //             .eq('exam_id', exam.id)
// //             .eq('subject', decodedSubject)
// //             .single();
            
// //           if (questionCount) {
// //             subject.subject = decodedSubject;
// //             subject.total_questions = parseInt(questionCount.count);
// //           }
// //         }
// //       } catch (e) {
// //         console.log('Error fetching subject details:', e);
// //       }
// //     }
    
// //     // Get question count if not available
// //     if (!subject.total_questions) {
// //       try {
// //         const { count, error } = await supabase
// //           .from('questions')
// //           .select('*', { count: 'exact', head: true })
// //           .eq('exam_id', exam.id)
// //           .eq(isSection ? 'section_id' : 'subject', isSection ? subject.id : subject.subject);
          
// //         if (!error) {
// //           subject.total_questions = count;
// //         }
// //       } catch (e) {
// //         console.log('Error getting question count:', e);
// //         subject.total_questions = 0;
// //       }
// //     }
    
// //     // Get any concepts if they exist
// //     try {
// //       const { data: concepts } = await supabase
// //         .from('flashcards')
// //         .select('*')
// //         .eq('exam_id', exam.id)
// //         .eq(isSection ? 'section_id' : 'subject_id', subject.id)
// //         .order('created_at');
        
// //       if (concepts && concepts.length > 0) {
// //         subject.concepts = concepts;
// //       }
// //     } catch (e) {
// //       console.log('Error fetching concepts:', e);
// //       subject.concepts = [];
// //     }
    
// //     // Combine data for the client component
// //     const combinedData = {
// //       subject: subject,
// //       exam: exam,
// //       params: {
// //         categorySlug,
// //         examSlug,
// //         subjectSlug
// //       }
// //     };
    
// //     // Return either a client component or server-rendered HTML
// //     return (
// //       <>
// //         <Header />
        
// //         {/* Hero section */}
// //         <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-6">
// //           <div className="container mx-auto px-4">
// //             <div className="text-sm font-medium text-blue-600 mb-2">
// //               <Link href="/" className="hover:underline">Exams</Link> {' > '} 
// //               <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link> {' > '}
// //               <Link href={`/exam/${categorySlug}/${examSlug}`} className="hover:underline">{exam.name}</Link>
// //             </div>
            
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{subject.subject}</h1>
// //             {subject.description && (
// //               <p className="text-lg text-gray-600 mb-6">{subject.description}</p>
// //             )}
            
// //             <div className="flex flex-wrap gap-4">
// //               <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// //                 <span className="text-xl font-bold text-blue-600 mr-2">{subject.total_questions || 0}</span>
// //                 <span className="text-gray-600">Questions</span>
// //               </div>
// //               {subject.concepts && subject.concepts.length > 0 && (
// //                 <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
// //                   <span className="text-xl font-bold text-blue-600 mr-2">{subject.concepts.length}</span>
// //                   <span className="text-gray-600">Flashcards</span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Main content */}
// //         <div className="container mx-auto max-w-5xl px-4 py-8 bg-[#F8FAFC]">
// //           {subject.concepts && subject.concepts.length > 0 ? (
// //             <SubjectContent {...combinedData} />
// //           ) : (
// //             <div className="bg-white rounded-lg shadow-sm p-6">
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <div className="flex items-center mb-4">
// //                     <BookOpen className="text-blue-600 mr-2" size={24} />
// //                     <h2 className="text-xl font-semibold">Subject Overview</h2>
// //                   </div>
// //                   <p className="text-gray-600 mb-6">
// //                     Study materials for {subject.subject} in the {exam.name} exam.
// //                   </p>
                  
// //                   {subject.total_questions ? (
// //                     <div className="mb-6">
// //                       <div className="flex items-center border-b pb-2 mb-2">
// //                         <FileText className="text-gray-500 mr-2" size={16} />
// //                         <span className="font-medium mr-2">Available Questions:</span>
// //                         <span className="font-bold">{subject.total_questions}</span>
// //                       </div>
// //                     </div>
// //                   ) : null}
// //                 </div>
                
// //                 <div className="flex flex-col justify-center">
// //                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
// //                     <h3 className="font-semibold text-blue-800 mb-2">Ready to test your knowledge?</h3>
// //                     <p className="text-blue-700 text-sm mb-3">
// //                       Practice with questions specific to this subject or create flashcards to study.
// //                     </p>
// //                   </div>
                  
// //                   {/* Client component for interactive buttons */}
// //                   <SubjectActionButtons />
// //                 </div>
// //               </div>
// //             </div>
// //           )}
          
// //           <div className="mt-8">
// //             <Link 
// //               href={`/exam/${categorySlug}/${examSlug}`} 
// //               className="inline-flex items-center text-blue-600 hover:underline"
// //             >
// //               <ArrowLeft size={16} className="mr-1" />
// //               Back to {exam.name}
// //             </Link>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   } catch (error) {
// //     console.error('Unexpected error:', error);
// //     return notFound();
// //   }
// // }
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { notFound } from 'next/navigation';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import Header from '@/components/Header';
// import { ArrowLeft } from 'lucide-react';

// // Use dynamic import for client component if you have one
// const SubjectContent = dynamic(() => import('./SubjectContent'), { ssr: false });

// export default async function SubjectPage({ params }) {
//   const { categorySlug, examSlug, subjectSlug } = params;
//   const supabase = createServerComponentClient({ cookies });
  
//   try {
//     // Get the exam first
//     const { data: exam, error: examError } = await supabase
//       .from('exams')
//       .select('*')
//       .eq('slug', examSlug)
//       .single();
      
//     if (examError || !exam) {
//       console.error('Error fetching exam:', examError);
//       return notFound();
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
    
//     // First check if this is actually a section from exam_sections
//     let subject = null;
//     let isSection = false;
    
//     try {
//       // Check if it's a section in exam_sections
//       const { data: sectionData, error: sectionError } = await supabase
//         .from('exam_sections')
//         .select('*')
//         .eq('exam_id', exam.id)
//         .eq('is_active', true)
//         .or(`slug.eq.${subjectSlug},name.ilike.%${subjectSlug.replace(/-/g, '%')}%`);
      
//       if (!sectionError && sectionData && sectionData.length > 0) {
//         subject = {
//           id: sectionData[0].id,
//           subject: sectionData[0].name,
//           description: sectionData[0].description,
//           slug: subjectSlug,
//           isSection: true
//         };
//         isSection = true;
//       }
//     } catch (e) {
//       console.log('Error checking for section:', e);
//     }
    
//     // If not a section, try subject data
//     if (!subject) {
//       subject = {
//         subject: decodeURIComponent(subjectSlug)
//           .split('-')
//           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(' '),
//         concepts: []
//       };
      
//       try {
//         // Check if subject exists in subject_slugs
//         const { data: subjectData } = await supabase
//           .from('subject_slugs')
//           .select('*')
//           .eq('exam_id', exam.id)
//           .eq('slug', subjectSlug)
//           .single();
          
//         if (subjectData) {
//           subject.subject = subjectData.subject;
//           subject.total_questions = subjectData.total_questions;
//           subject.id = subjectData.id;
//         } else {
//           // Try to get from questions directly
//           const decodedSubject = decodeURIComponent(subjectSlug)
//             .split('-')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
            
//           const { data: questionCount } = await supabase
//             .from('questions')
//             .select('count(*)')
//             .eq('exam_id', exam.id)
//             .eq('subject', decodedSubject)
//             .single();
            
//           if (questionCount) {
//             subject.subject = decodedSubject;
//             subject.total_questions = parseInt(questionCount.count);
//           }
//         }
//       } catch (e) {
//         console.log('Error fetching subject details:', e);
//       }
//     }
    
//     // Get question count if not available
//     if (!subject.total_questions) {
//       try {
//         const { count, error } = await supabase
//           .from('questions')
//           .select('*', { count: 'exact', head: true })
//           .eq('exam_id', exam.id)
//           .eq(isSection ? 'section_id' : 'subject', isSection ? subject.id : subject.subject);
          
//         if (!error) {
//           subject.total_questions = count;
//         }
//       } catch (e) {
//         console.log('Error getting question count:', e);
//         subject.total_questions = 0;
//       }
//     }
    
//     // Get any concepts if they exist
//     try {
//       const { data: concepts } = await supabase
//         .from('flashcards')
//         .select('*')
//         .eq('exam_id', exam.id)
//         .eq(isSection ? 'section_id' : 'subject_id', subject.id)
//         .order('created_at');
        
//       if (concepts && concepts.length > 0) {
//         subject.concepts = concepts;
//       }
//     } catch (e) {
//       console.log('Error fetching concepts:', e);
//       subject.concepts = [];
//     }
    
//     // Combine data for the client component
//     const combinedData = {
//       subject: subject,
//       exam: exam,
//       params: {
//         categorySlug,
//         examSlug,
//         subjectSlug
//       }
//     };
    
//     // Return either a client component or server-rendered HTML
//     return (
//       <>
//         <Header />
        
//         {/* Hero section with back button */}
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-6">
//           <div className="container mx-auto px-4">
//             <div className="flex items-center mb-2">
//               <Link 
//                 href={`/exam/${categorySlug}/${examSlug}`} 
//                 className="inline-flex items-center text-blue-600 hover:underline mr-4"
//               >
//                 <ArrowLeft size={16} className="mr-1" />
//                 Back to {exam.name}
//               </Link>
              
//               <div className="text-sm font-medium text-blue-600">
//                 <Link href="/" className="hover:underline">Exams</Link> {' > '} 
//                 <Link href={`/exam/${categorySlug}`} className="hover:underline">{categoryName}</Link> {' > '}
//                 <Link href={`/exam/${categorySlug}/${examSlug}`} className="hover:underline">{exam.name}</Link>
//               </div>
//             </div>
            
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{subject.subject}</h1>
//             {subject.description && (
//               <p className="text-lg text-gray-600 mb-6">{subject.description}</p>
//             )}
            
//             <div className="flex flex-wrap gap-4">
//               <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
//                 <span className="text-xl font-bold text-blue-600 mr-2">{subject.total_questions || 0}</span>
//                 <span className="text-gray-600">Questions</span>
//               </div>
//               {subject.concepts && subject.concepts.length > 0 && (
//                 <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center">
//                   <span className="text-xl font-bold text-blue-600 mr-2">{subject.concepts.length}</span>
//                   <span className="text-gray-600">Concepts</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Main content */}
//         <div className="container mx-auto max-w-5xl px-4 py-8 bg-[#F8FAFC]">
//           <SubjectContent {...combinedData} />
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     return notFound();
//   }
// }
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header'; // Import Header component

// Use dynamic import for client component
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
    
    // First check if this is actually a section from exam_sections
    let subject = null;
    let isSection = false;
    
    try {
      // Check if it's a section in exam_sections
      const { data: sectionData, error: sectionError } = await supabase
        .from('exam_sections')
        .select('*')
        .eq('exam_id', exam.id)
        .eq('is_active', true)
        .or(`slug.eq.${subjectSlug},name.ilike.%${subjectSlug.replace(/-/g, '%')}%`);
      
      if (!sectionError && sectionData && sectionData.length > 0) {
        subject = {
          id: sectionData[0].id,
          subject: sectionData[0].name,
          description: sectionData[0].description,
          slug: subjectSlug,
          isSection: true
        };
        isSection = true;
      }
    } catch (e) {
      console.log('Error checking for section:', e);
    }
    
    // If not a section, try subject data
    if (!subject) {
      subject = {
        subject: decodeURIComponent(subjectSlug)
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
          subject.id = subjectData.id;
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
      } catch (e) {
        console.log('Error fetching subject details:', e);
      }
    }
    
    // Get question count if not available
    if (!subject.total_questions) {
      try {
        const { count, error } = await supabase
          .from('questions')
          .select('*', { count: 'exact', head: true })
          .eq('exam_id', exam.id)
          .eq(isSection ? 'section_id' : 'subject', isSection ? subject.id : subject.subject);
          
        if (!error) {
          subject.total_questions = count;
        }
      } catch (e) {
        console.log('Error getting question count:', e);
        subject.total_questions = 0;
      }
    }
    
    // Get any concepts if they exist
    try {
      const { data: concepts } = await supabase
        .from('flashcards')
        .select('*')
        .eq('exam_id', exam.id)
        .eq(isSection ? 'section_id' : 'subject_id', subject.id)
        .order('created_at');
        
      if (concepts && concepts.length > 0) {
        subject.concepts = concepts;
      }
    } catch (e) {
      console.log('Error fetching concepts:', e);
      subject.concepts = [];
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
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Add Header component */}
        <Header />
        
        {/* Fixed header with subject name and back button */}
        <div className="sticky top-0 z-10 bg-white shadow-sm py-3 px-4">
          <div className="container mx-auto max-w-5xl flex items-center">
            <Link 
              href={`/exam/${categorySlug}/${examSlug}`} 
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span className="text-sm">Back</span>
            </Link>
            <h1 className="text-lg font-medium ml-4 truncate">{subject.subject}</h1>
            
            <div className="ml-auto flex items-center">
              <span className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                {subject.total_questions || 0} Questions
              </span>
              {subject.concepts && subject.concepts.length > 0 && (
                <span className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full ml-2">
                  {subject.concepts.length} Concepts
                </span>
              )}
            </div>
          </div>
        </div>
      
        {/* Main content */}
        <div className="container mx-auto max-w-5xl px-4 py-6">
          <SubjectContent {...combinedData} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}
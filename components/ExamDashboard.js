// // "use client"
// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { 
// //   Flag, 
// //   XCircle, 
// //   ClipboardList, 
// //   TrendingUp, 
// //   PieChart, 
// //   Clock, 
// //   Calendar, 
// //   PlayCircle,
// //   ChevronRight,
// //   BookOpen,
// //   Award,
// //   FileText
// // } from 'lucide-react';

// // const ExamDashboard = ({ examData, categorySlug, examSlug, sections = [] }) => {
// //   // State for active tab
// //   const [activeTab, setActiveTab] = useState('all');
  
// //   // Stats for the exam
// //   const stats = [
// //     { title: "Average Score", value: examData.averageScore || "N/A", icon: <TrendingUp size={20} />, color: "text-indigo-600" },
// //     { title: "Total Questions", value: examData.totalQuestions || 0, icon: <PieChart size={20} />, color: "text-indigo-600" },
// //     { title: "Study Time", value: examData.studyTime || "0 hrs", icon: <Clock size={20} />, color: "text-indigo-600" },
// //     { title: "Completion", value: examData.completionRate || "0%", icon: <Award size={20} />, color: "text-indigo-600" }
// //   ];
  
// //   // Review items
// //   const reviewItems = [
// //     { title: "Flagged Questions", count: examData.flaggedCount || 0, icon: <Flag size={24} />, color: "text-amber-600" },
// //     { title: "Questions Not Done", count: examData.notDoneCount || 0, icon: <ClipboardList size={24} />, color: "text-blue-600" },
// //     { title: "Incorrect Questions", count: examData.incorrectCount || 0, icon: <XCircle size={24} />, color: "text-red-600" },
// //     { title: "Take Mock Exam", count: null, icon: <PlayCircle size={24} />, color: "text-indigo-600" }
// //   ];
  
// //   // Format sections for display
// //   const formattedSections = sections.map(section => {
// //     // Handle both section and subject formats
// //     return {
// //       id: section.id || section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
// //       name: section.name || section.subject,
// //       slug: section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
// //       total: section.total_questions || 0,
// //       completed: section.completed_questions || 0,
// //       score: section.score || 0,
// //       description: section.description || ''
// //     };
// //   });
  
// //   // Get color based on score
// //   const getScoreColor = (score) => {
// //     if (score < 60) return "bg-red-500";
// //     if (score < 75) return "bg-amber-500";
// //     return "bg-emerald-500";
// //   };
  
// //   // Sort sections by score for weak tab
// //   const sortedSections = {
// //     all: [...formattedSections],
// //     weak: [...formattedSections].sort((a, b) => a.score - b.score),
// //   };

// //   // Count total sections in each category
// //   const counts = {
// //     all: formattedSections.length,
// //     weak: formattedSections.filter(s => s.score < 60).length,
// //   };

// //   return (
// //     <div className="max-w-7xl mx-auto p-4 bg-slate-50 font-sans">
// //       {/* Stats Cards Row with subtle background color */}
// //       <div className="p-4 bg-indigo-50 rounded-lg mb-6">
// //         <h2 className="text-xl font-semibold text-slate-800 mb-4">Key Statistics</h2>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           {stats.map((stat, index) => (
// //             <div key={index} className="bg-white rounded-lg shadow-sm">
// //               <div className="p-4 h-full">
// //                 <div className="flex items-center">
// //                   <div className={`p-2 rounded-full bg-slate-100 mr-3 ${stat.color}`}>
// //                     {stat.icon}
// //                   </div>
// //                   <div>
// //                     <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
// //                     <p className="text-xl font-semibold text-slate-800">{stat.value}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Tabbed Sections */}
// //       <div className="mb-6">
// //         <div className="flex items-center justify-between mb-4">
// //           <h2 className="text-xl font-semibold text-slate-800">Exam Sections</h2>
// //           <div className="bg-slate-100 rounded-md p-1">
// //             <button 
// //               className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-white shadow-sm' : ''}`} 
// //               onClick={() => setActiveTab('all')}
// //             >
// //               All Sections <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.all}</span>
// //             </button>
// //             {counts.weak > 0 && (
// //               <button 
// //                 className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'weak' ? 'bg-white shadow-sm' : ''}`} 
// //                 onClick={() => setActiveTab('weak')}
// //               >
// //                 Weakest <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.weak}</span>
// //               </button>
// //             )}
// //           </div>
// //         </div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           {formattedSections.length > 0 ? (
// //             (activeTab === 'all' ? sortedSections.all : sortedSections.weak.filter(s => s.score < 60)).map((section, index) => (
// //               <Link
// //                 key={index}
// //                 href={`/exam/${categorySlug}/${examSlug}/section/${section.slug}`}
// //                 className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow block"
// //               >
// //                 <div className="p-4">
// //                   <div className="flex justify-between items-start mb-2">
// //                     <h3 className="font-semibold text-slate-800 text-lg">{section.name}</h3>
// //                     {section.completed > 0 ? (
// //                       <span 
// //                         className={`font-semibold px-2 py-0.5 rounded text-white ${getScoreColor(section.score)}`}
// //                       >
// //                         {section.score}%
// //                       </span>
// //                     ) : (
// //                       <span className="font-semibold px-2 py-0.5 rounded text-white bg-slate-500">
// //                         0%
// //                       </span>
// //                     )}
// //                   </div>
                  
// //                   <div className="flex justify-between items-center text-sm mb-2 mt-3">
// //                     <span className="text-slate-600">{section.completed} of {section.total} questions completed</span>
// //                   </div>
                  
// //                   <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
// //                     <div 
// //                       className={section.completed === 0 ? "bg-slate-400 h-2 rounded-full" : `${getScoreColor(section.score)} h-2 rounded-full`} 
// //                       style={{ width: section.completed === 0 ? '0%' : `${(section.completed / section.total) * 100}%` }}
// //                     ></div>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))
// //           ) : (
// //             <div className="col-span-3 bg-white p-8 rounded-lg shadow-sm text-center">
// //               <FileText size={48} className="mx-auto text-slate-400 mb-4" />
// //               <h3 className="text-xl font-medium text-slate-700 mb-2">No sections available</h3>
// //               <p className="text-slate-500">This exam doesn't have any sections yet.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
      
// //       {/* Review Items */}
// //       <div>
// //         <h2 className="text-xl font-semibold text-slate-800 mb-4">Review & Practice</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {reviewItems.map((item, index) => (
// //             <div 
// //               key={index} 
// //               className="bg-white rounded-lg border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow"
// //               onClick={() => alert(`Feature coming soon: ${item.title}`)}
// //             >
// //               <div className="p-4">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center">
// //                     <div className={`p-2 rounded-full bg-slate-100 mr-4 ${item.color}`}>
// //                       {item.icon}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-slate-800">
// //                         {item.title}
// //                       </h3>
// //                       {item.count !== null ? (
// //                         <p className="text-sm text-slate-500">
// //                           {item.count} questions to review
// //                         </p>
// //                       ) : (
// //                         <p className="text-sm text-slate-500">
// //                           Start a timed exam session
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>
// //                   <ChevronRight size={24} className="text-slate-400" />
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExamDashboard;
// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { 
//   Flag, 
//   XCircle, 
//   ClipboardList, 
//   TrendingUp, 
//   PieChart, 
//   Clock, 
//   Calendar, 
//   PlayCircle,
//   ChevronRight,
//   BookOpen,
//   Award,
//   FileText
// } from 'lucide-react';

// const ExamDashboard = ({ examData, categorySlug, examSlug, sections = [] }) => {
//   // State for active tab
//   const [activeTab, setActiveTab] = useState('all');
  
//   // Review items
//   const reviewItems = [
//     { title: "Flagged Questions", count: examData.flaggedCount || 0, icon: <Flag size={24} />, color: "text-amber-600" },
//     { title: "Questions Not Done", count: examData.notDoneCount || 0, icon: <ClipboardList size={24} />, color: "text-blue-600" },
//     { title: "Incorrect Questions", count: examData.incorrectCount || 0, icon: <XCircle size={24} />, color: "text-red-600" },
//     { title: "Take Mock Exam", count: null, icon: <PlayCircle size={24} />, color: "text-indigo-600" }
//   ];
  
//   // Format sections for display
//   const formattedSections = sections.map(section => {
//     // Handle both section and subject formats
//     return {
//       id: section.id || section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
//       name: section.name || section.subject,
//       slug: section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
//       total: section.total_questions || 0,
//       completed: section.completed_questions || 0,
//       score: section.score || 0,
//       description: section.description || ''
//     };
//   });
  
//   // Get color based on score
//   const getScoreColor = (score) => {
//     if (score < 60) return "bg-red-500";
//     if (score < 75) return "bg-amber-500";
//     return "bg-emerald-500";
//   };
  
//   // Sort sections by score for weak tab
//   const sortedSections = {
//     all: [...formattedSections],
//     weak: [...formattedSections].sort((a, b) => a.score - b.score),
//   };

//   // Count total sections in each category
//   const counts = {
//     all: formattedSections.length,
//     weak: formattedSections.filter(s => s.score < 60).length,
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] font-sans">
//       {/* Tabbed Sections */}
//       <div className="mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold text-slate-800">Exam Sections</h2>
//           <div className="bg-slate-100 rounded-md p-1">
//             <button 
//               className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-white shadow-sm' : ''}`} 
//               onClick={() => setActiveTab('all')}
//             >
//               All Sections <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.all}</span>
//             </button>
//             {counts.weak > 0 && (
//               <button 
//                 className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'weak' ? 'bg-white shadow-sm' : ''}`} 
//                 onClick={() => setActiveTab('weak')}
//               >
//                 Weakest <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.weak}</span>
//               </button>
//             )}
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 gap-4">
//           {formattedSections.length > 0 ? (
//             (activeTab === 'all' ? sortedSections.all : sortedSections.weak.filter(s => s.score < 60)).map((section, index) => (
//               <Link
//                 key={index}
//                 href={`/exam/${categorySlug}/${examSlug}/section/${section.slug}`}
//                 className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow block"
//               >
//                 <div className="p-4">
//                   <div className="flex justify-between items-center">
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-slate-800 text-lg">{section.name}</h3>
//                       <div className="flex items-center mt-2">
//                         <span className="text-sm text-slate-600 mr-4">{section.completed} of {section.total} questions completed</span>
//                         <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-xs">
//                           <div 
//                             className={section.completed === 0 ? "bg-slate-400 h-2 rounded-full" : `${getScoreColor(section.score)} h-2 rounded-full`} 
//                             style={{ width: section.completed === 0 ? '0%' : `${(section.completed / section.total) * 100}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center ml-4">
//                       {section.completed > 0 ? (
//                         <span 
//                           className={`font-semibold px-3 py-1 rounded text-white ${getScoreColor(section.score)}`}
//                         >
//                           {section.score}%
//                         </span>
//                       ) : (
//                         <span className="font-semibold px-3 py-1 rounded text-white bg-slate-500">
//                           0%
//                         </span>
//                       )}
//                       <ChevronRight size={24} className="text-slate-400 ml-2" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <div className="col-span-1 bg-white p-8 rounded-lg shadow-sm text-center">
//               <FileText size={48} className="mx-auto text-slate-400 mb-4" />
//               <h3 className="text-xl font-medium text-slate-700 mb-2">No sections available</h3>
//               <p className="text-slate-500">This exam doesn't have any sections yet.</p>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Review Items */}
//       <div>
//         <h2 className="text-xl font-semibold text-slate-800 mb-4">Review & Practice</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {reviewItems.map((item, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-lg border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow"
//               onClick={() => alert(`Feature coming soon: ${item.title}`)}
//             >
//               <div className="p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className={`p-2 rounded-full bg-slate-100 mr-4 ${item.color}`}>
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-800">
//                         {item.title}
//                       </h3>
//                       {item.count !== null ? (
//                         <p className="text-sm text-slate-500">
//                           {item.count} questions to review
//                         </p>
//                       ) : (
//                         <p className="text-sm text-slate-500">
//                           Start a timed exam session
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   <ChevronRight size={24} className="text-slate-400" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExamDashboard;
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Flag, 
  XCircle, 
  ClipboardList, 
  TrendingUp, 
  PieChart, 
  Clock, 
  Calendar, 
  PlayCircle,
  ChevronRight,
  BookOpen,
  Award,
  FileText
} from 'lucide-react';

const ExamDashboard = ({ examData, categorySlug, examSlug, sections = [] }) => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Review items
  const reviewItems = [
    { title: "Flagged Questions", count: examData.flaggedCount || 0, icon: <Flag size={24} />, color: "text-amber-600" },
    { title: "Questions Not Done", count: examData.notDoneCount || 0, icon: <ClipboardList size={24} />, color: "text-blue-600" },
    { title: "Incorrect Questions", count: examData.incorrectCount || 0, icon: <XCircle size={24} />, color: "text-red-600" },
    { title: "Take Mock Exam", count: null, icon: <PlayCircle size={24} />, color: "text-indigo-600" }
  ];
  
  // Format sections for display
  const formattedSections = sections.map(section => {
    // Handle both section and subject formats
    return {
      id: section.id || section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
      name: section.name || section.subject,
      slug: section.slug || section.name.toLowerCase().replace(/\s+/g, '-'),
      total: section.total_questions || 0,
      completed: section.completed_questions || 0,
      score: section.score || 0,
      description: section.description || ''
    };
  });
  
  // Get color based on score
  const getScoreColor = (score) => {
    if (score < 60) return "bg-red-500";
    if (score < 75) return "bg-amber-500";
    return "bg-emerald-500";
  };
  
  // Sort sections by score for weak tab
  const sortedSections = {
    all: [...formattedSections],
    weak: [...formattedSections].sort((a, b) => a.score - b.score),
  };

  // Count total sections in each category
  const counts = {
    all: formattedSections.length,
    weak: formattedSections.filter(s => s.score < 60).length,
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] font-sans">
      {/* Tabbed Sections */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Exam Sections</h2>
          <div className="bg-slate-100 rounded-md p-1">
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'all' ? 'bg-white shadow-sm' : ''}`} 
              onClick={() => setActiveTab('all')}
            >
              All Sections <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.all}</span>
            </button>
            {counts.weak > 0 && (
              <button 
                className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'weak' ? 'bg-white shadow-sm' : ''}`} 
                onClick={() => setActiveTab('weak')}
              >
                Weakest <span className="ml-1 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-full text-xs">{counts.weak}</span>
              </button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {formattedSections.length > 0 ? (
            (activeTab === 'all' ? sortedSections.all : sortedSections.weak.filter(s => s.score < 60)).map((section, index) => (
              <Link
                key={index}
                href={`/exam/${categorySlug}/${examSlug}/subject/${section.slug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow block"
              >
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 text-lg">{section.name}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-slate-600 mr-4">{section.completed} of {section.total} questions completed</span>
                        <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-xs">
                          <div 
                            className={section.completed === 0 ? "bg-slate-400 h-2 rounded-full" : `${getScoreColor(section.score)} h-2 rounded-full`} 
                            style={{ width: section.completed === 0 ? '0%' : `${(section.completed / section.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      {section.completed > 0 ? (
                        <span 
                          className={`font-semibold px-3 py-1 rounded text-white ${getScoreColor(section.score)}`}
                        >
                          {section.score}%
                        </span>
                      ) : (
                        <span className="font-semibold px-3 py-1 rounded text-white bg-slate-500">
                          0%
                        </span>
                      )}
                      <ChevronRight size={24} className="text-slate-400 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-1 bg-white p-8 rounded-lg shadow-sm text-center">
              <FileText size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 mb-2">No sections available</h3>
              <p className="text-slate-500">This exam doesn't have any sections yet.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Review Items */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Review & Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviewItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => alert(`Feature coming soon: ${item.title}`)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full bg-slate-100 mr-4 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      {item.count !== null ? (
                        <p className="text-sm text-slate-500">
                          {item.count} questions to review
                        </p>
                      ) : (
                        <p className="text-sm text-slate-500">
                          Start a timed exam session
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
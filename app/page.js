// // // // app/page.js
// // // import Header from '@/components/Header'
// // // import Link from 'next/link'
// // // import Image from 'next/image'
// // // import ExamList from '@/components/ExamList'

// // // export default function Home() {
// // //   return (
// // //     <main className="min-h-screen bg-white">
// // //       <Header />
      
// // //       {/* Hero Section */}
// // //       <section className="pt-24 pb-16 text-center relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 z-0"/>
// // //         <div className="container mx-auto px-4 relative z-10">
// // //           <div className="max-w-4xl mx-auto">
// // //             <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block">
// // //               #1 Exam Preparation Platform
// // //             </span>
// // //             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
// // //               Master Your Exams with 
// // //               <span className="text-blue-600"> Confidence</span>
// // //             </h1>
// // //             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
// // //               Join over 50,000 students who have achieved their dream scores using our comprehensive study materials
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
// // //               <Link 
// // //                 href="#exams" 
// // //                 className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
// // //               >
// // //                 Start Preparing Now
// // //               </Link>
// // //               <Link 
// // //                 href="#how-it-works" 
// // //                 className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
// // //               >
// // //                 See How It Works
// // //               </Link>
// // //             </div>
            
// // //             {/* Trust Indicators */}
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-gray-900">50K+</div>
// // //                 <div className="text-gray-600">Active Students</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-gray-900">95%</div>
// // //                 <div className="text-gray-600">Success Rate</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-gray-900">20+</div>
// // //                 <div className="text-gray-600">Exam Types</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-gray-900">4.9/5</div>
// // //                 <div className="text-gray-600">Student Rating</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Exams Section */}
// // //       <section id="exams" className="py-16 bg-gray-50">
// // //         <div className="container mx-auto px-4">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Exam Preparations</h2>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // //               Choose from our wide range of expertly crafted study materials and practice tests
// // //             </p>
// // //           </div>
          
// // //           {/* Updated ExamList component that fetches data directly */}
// // //           <ExamList />
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Scoorly?</h2>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // //               We provide everything you need to succeed in your exams
// // //             </p>
// // //           </div>
          
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {[
// // //               {
// // //                 title: "Expert-Created Content",
// // //                 description: "All our materials are created by subject matter experts with years of experience",
// // //                 icon: "📚"
// // //               },
// // //               {
// // //                 title: "Personalized Learning",
// // //                 description: "Adaptive learning technology that adjusts to your progress",
// // //                 icon: "🎯"
// // //               },
// // //               {
// // //                 title: "Practice Tests",
// // //                 description: "Realistic mock exams with detailed performance analytics",
// // //                 icon: "📊"
// // //               }
// // //             ].map((feature, index) => (
// // //               <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
// // //                 <div className="text-4xl mb-4">{feature.icon}</div>
// // //                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
// // //                 <p className="text-gray-600">{feature.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
// // //         <div className="container mx-auto px-4 text-center">
// // //           <h2 className="text-3xl font-bold text-gray-900 mb-6">
// // //             Ready to Start Your Journey?
// // //           </h2>
// // //           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
// // //             Join thousands of successful students who have achieved their dream scores with Scoorly
// // //           </p>
// // //           <Link 
// // //             href="#exams" 
// // //             className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
// // //           >
// // //             Get Started Now
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   )
// // // }
// // // app/page.js -------
// // import ExamListPage from '@/components/ExamList'

// // export default function Home() {
// //   return <ExamListPage />;
// // }

// ///---------

// // Page.js
// import React, { createElement } from 'react'
// import { AppSidebar } from "@/components/chatsidebar/AppSidebar.js"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb.jsx"
// import { Separator } from "@/components/ui/separator.jsx"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar.jsx"
// import { NavActions } from "@/components/chatsidebar/NavActions.js"

// function Page() {
//   return createElement(SidebarProvider, {
//     children: [
//       createElement(AppSidebar),
//       createElement(SidebarInset, {
//         children: [
//           createElement("header", {
//             className: "flex h-16 shrink-0 items-center gap-2 justify-between px-4"
//           }, [
//             createElement("div", {
//               className: "flex items-center gap-2"
//             }, [
//               createElement(SidebarTrigger, { className: "-ml-1" }),
//               createElement(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
//               createElement(Breadcrumb, {
//                 children: createElement(BreadcrumbList, {
//                   children: [
//                     createElement(BreadcrumbItem, {
//                       className: "hidden md:block",
//                       children: createElement(BreadcrumbLink, {
//                         href: "#",
//                         children: "Building Your Application"
//                       })
//                     }),
//                     createElement(BreadcrumbSeparator, { className: "hidden md:block" }),
//                     createElement(BreadcrumbItem, {
//                       children: createElement(BreadcrumbPage, {
//                         children: "Data Fetching"
//                       })
//                     })
//                   ]
//                 })
//               })
//             ]),
//             // Add NavActions component to the header
//             createElement(NavActions)
//           ]),
//           createElement("div", {
//             className: "flex flex-1 flex-col gap-4 p-4 pt-0"
//           }, [
//             createElement("div", {
//               className: "grid auto-rows-min gap-4 md:grid-cols-3"
//             }, [
//               createElement("div", { className: "aspect-video rounded-xl bg-muted/50" }),
//               createElement("div", { className: "aspect-video rounded-xl bg-muted/50" }),
//               createElement("div", { className: "aspect-video rounded-xl bg-muted/50" })
//             ]),
//             createElement("div", {
//               className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
//             })
//           ])
//         ]
//       })
//     ]
//   })
// }

// export default Page
// app/page.js
import React, { createElement } from 'react'
import { AppSidebar } from "@/components/chatsidebar/AppSidebar.js"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.jsx"
import { Separator } from "@/components/ui/separator.jsx"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar.jsx"
import { NavActions } from "@/components/chatsidebar/NavActions.js"

function Page() {
  return createElement(SidebarProvider, {},
    createElement(AppSidebar),
    createElement(SidebarInset, {},
      createElement("header", {
        className: "flex h-16 shrink-0 items-center gap-2 justify-between px-4 sticky top-0 bg-background z-10"
      },
        createElement("div", {
          className: "flex items-center gap-2"
        },
          createElement(SidebarTrigger, { className: "-ml-1" }),
          createElement(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
          createElement(Breadcrumb, {},
            createElement(BreadcrumbList, {},
              createElement(BreadcrumbItem, {
                className: "hidden md:block"
              },
                createElement(BreadcrumbLink, {
                  href: "#"
                }, "Building Your Application")
              ),
              createElement(BreadcrumbSeparator, { className: "hidden md:block" }),
              createElement(BreadcrumbItem, {},
                createElement(BreadcrumbPage, {}, "Data Fetching")
              )
            )
          )
        ),
        // Add NavActions component to the header
        createElement(NavActions)
      ),
      createElement("div", {
        className: "flex flex-1 flex-col gap-4 p-4 pt-0"
      },
        createElement("div", {
          className: "grid auto-rows-min gap-4 md:grid-cols-3"
        },
          createElement("div", { className: "aspect-video rounded-xl bg-muted/50" }),
          createElement("div", { className: "aspect-video rounded-xl bg-muted/50" }),
          createElement("div", { className: "aspect-video rounded-xl bg-muted/50" })
        ),
        createElement("div", {
          className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
        })
      )
    )
  )
}

export default Page
// // // "use client"
// // // // File: TeamSwitcher.js (maintaining original filename for imports)
// // // import React, { createElement, useState } from "react"
// // // import { ChevronDown, Plus, Search, X, BookOpen, GraduationCap, Stethoscope, Scale, HeartPulse, Calculator } from "lucide-react"
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuLabel,
// // //   DropdownMenuSeparator,
// // //   DropdownMenuShortcut,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu.jsx"
// // // import {
// // //   SidebarMenu,
// // //   SidebarMenuButton,
// // //   SidebarMenuItem,
// // // } from "@/components/ui/sidebar.jsx"
// // // import {
// // //   Sheet,
// // //   SheetContent,
// // //   SheetHeader,
// // //   SheetTitle,
// // //   SheetClose,
// // // } from "@/components/ui/sheet.jsx"
// // // import { Input } from "@/components/ui/input.jsx"
// // // import { Button } from "@/components/ui/button.jsx"
// // // import { Badge } from "@/components/ui/badge.jsx"

// // // // Define exams directly in the client component
// // // const EXAMS = [
// // //   {
// // //     name: "Medical Certification",
// // //     icon: "medical",
// // //     category: "Medical"
// // //   },
// // //   {
// // //     name: "Bar Exam",
// // //     icon: "law",
// // //     category: "Law"
// // //   },
// // //   {
// // //     name: "Nursing Board",
// // //     icon: "nursing",
// // //     category: "Nursing"
// // //   }
// // // ]

// // // // Sample available exams to add
// // // const AVAILABLE_EXAMS = [
// // //   {
// // //     name: "USMLE Step 1",
// // //     icon: "medical",
// // //     category: "Medical"
// // //   },
// // //   {
// // //     name: "NCLEX-RN",
// // //     icon: "nursing",
// // //     category: "Nursing"
// // //   },
// // //   {
// // //     name: "Bar Examination",
// // //     icon: "law",
// // //     category: "Law"
// // //   },
// // //   {
// // //     name: "CPA Examination",
// // //     icon: "accounting",
// // //     category: "Accounting"
// // //   },
// // //   {
// // //     name: "GRE",
// // //     icon: "education",
// // //     category: "Graduate"
// // //   },
// // //   {
// // //     name: "MCAT",
// // //     icon: "medical",
// // //     category: "Medical"
// // //   },
// // //   {
// // //     name: "Multistate Bar",
// // //     icon: "law",
// // //     category: "Law"
// // //   },
// // //   {
// // //     name: "LSAT",
// // //     icon: "law",
// // //     category: "Law"
// // //   }
// // // ]

// // // // Color mapping for categories
// // // const CATEGORY_COLORS = {
// // //   "Medical": "#0ea5e9", // sky-500
// // //   "Law": "#8b5cf6", // violet-500
// // //   "Nursing": "#ec4899", // pink-500
// // //   "Accounting": "#f59e0b", // amber-500
// // //   "Graduate": "#10b981", // emerald-500
// // //   "Default": "#6b7280" // gray-500
// // // }

// // // // Helper function to render icon based on type
// // // const renderIcon = (iconType, className) => {
// // //   switch(iconType) {
// // //     case "medical":
// // //       return createElement(Stethoscope, { className });
// // //     case "law":
// // //       return createElement(Scale, { className });
// // //     case "nursing":
// // //       return createElement(HeartPulse, { className });
// // //     case "accounting":
// // //       return createElement(Calculator, { className });
// // //     case "education":
// // //       return createElement(BookOpen, { className });
// // //     default:
// // //       return createElement(GraduationCap, { className });
// // //   }
// // // }

// // // // Get color for category
// // // const getCategoryColor = (category) => {
// // //   return CATEGORY_COLORS[category] || CATEGORY_COLORS["Default"];
// // // }

// // // export function TeamSwitcher({ initialTeamIndex = 0 }) {
// // //   // Renamed internally to maintain compatibility with imports
// // //   const initialExamIndex = initialTeamIndex;
// // //   const [activeExam, setActiveExam] = useState(EXAMS[initialExamIndex]);
// // //   const [isSheetOpen, setIsSheetOpen] = useState(false);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [myExams, setMyExams] = useState(EXAMS);
// // //   const [selectedCategory, setSelectedCategory] = useState("All");
  
// // //   if (!activeExam) {
// // //     return null
// // //   }

// // //   // Get all unique categories
// // //   const categories = ["All", ...new Set(AVAILABLE_EXAMS.map(exam => exam.category))];

// // //   // Filter exams by search query and category
// // //   const filteredExams = AVAILABLE_EXAMS.filter(exam => {
// // //     const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase());
// // //     const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory;
// // //     return matchesSearch && matchesCategory;
// // //   });

// // //   const handleAddExam = (exam) => {
// // //     if (!myExams.some(e => e.name === exam.name)) {
// // //       const newExams = [...myExams, exam];
// // //       setMyExams(newExams);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <SidebarMenu>
// // //         <SidebarMenuItem>
// // //           <DropdownMenu>
// // //             <DropdownMenuTrigger asChild>
// // //               <SidebarMenuButton className="w-fit px-1.5">
// // //                 <div 
// // //                   className="flex aspect-square size-5 items-center justify-center rounded-md text-white"
// // //                   style={{ backgroundColor: getCategoryColor(activeExam.category) }}
// // //                 >
// // //                   {renderIcon(activeExam.icon, "size-3")}
// // //                 </div>
// // //                 <span className="truncate font-semibold">
// // //                   {activeExam.name}
// // //                 </span>
// // //                 <ChevronDown className="opacity-50" />
// // //               </SidebarMenuButton>
// // //             </DropdownMenuTrigger>
// // //             <DropdownMenuContent
// // //               className="w-64 rounded-lg"
// // //               align="start"
// // //               side="bottom"
// // //               sideOffset={4}
// // //             >
// // //               <DropdownMenuLabel className="text-xs text-muted-foreground">
// // //                 Your Exams
// // //               </DropdownMenuLabel>
// // //               {myExams.map((exam, index) => (
// // //                 <DropdownMenuItem
// // //                   key={exam.name + index}
// // //                   onClick={() => setActiveExam(exam)}
// // //                   className="gap-2 p-2"
// // //                 >
// // //                   <div 
// // //                     className="flex size-6 items-center justify-center rounded-md text-white"
// // //                     style={{ backgroundColor: getCategoryColor(exam.category) }}
// // //                   >
// // //                     {renderIcon(exam.icon, "size-4 shrink-0")}
// // //                   </div>
// // //                   <span>{exam.name}</span>
// // //                   <DropdownMenuShortcut>{`⌘${index + 1}`}</DropdownMenuShortcut>
// // //                 </DropdownMenuItem>
// // //               ))}
// // //               <DropdownMenuSeparator />
// // //               <DropdownMenuItem 
// // //                 className="gap-2 p-2"
// // //                 onClick={() => setIsSheetOpen(true)}
// // //               >
// // //                 <div className="flex size-6 items-center justify-center rounded-md border border-dashed bg-background">
// // //                   <Plus className="size-4" />
// // //                 </div>
// // //                 <div className="font-medium text-muted-foreground">
// // //                   Add New Exam
// // //                 </div>
// // //               </DropdownMenuItem>
// // //             </DropdownMenuContent>
// // //           </DropdownMenu>
// // //         </SidebarMenuItem>
// // //       </SidebarMenu>

// // //       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
// // //         <SheetContent className="w-80 sm:w-96 overflow-y-auto">
// // //           <SheetHeader className="flex justify-between items-center mb-4 border-b pb-4">
// // //             <SheetTitle className="text-xl font-bold">Add New Exam</SheetTitle>
// // //             <SheetClose className="rounded-full p-1.5 hover:bg-gray-100">
// // //               <X className="size-4" />
// // //             </SheetClose>
// // //           </SheetHeader>
          
// // //           <div className="relative mb-6">
// // //             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
// // //             <Input
// // //               placeholder="Search exams..."
// // //               className="pl-8 bg-gray-50 border-gray-200"
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //             />
// // //           </div>
          
// // //           <div className="mb-6 overflow-x-auto">
// // //             <div className="flex gap-2 pb-2">
// // //               {categories.map(category => (
// // //                 <Badge
// // //                   key={category}
// // //                   variant={selectedCategory === category ? "default" : "outline"}
// // //                   className={`cursor-pointer ${selectedCategory === category ? '' : 'hover:bg-gray-100'}`}
// // //                   style={selectedCategory === category && category !== "All" ? 
// // //                     { backgroundColor: getCategoryColor(category), color: "white" } : 
// // //                     {}
// // //                   }
// // //                   onClick={() => setSelectedCategory(category)}
// // //                 >
// // //                   {category}
// // //                 </Badge>
// // //               ))}
// // //             </div>
// // //           </div>
          
// // //           <div className="space-y-2">
// // //             <h3 className="text-sm font-medium mb-3">Available Exams</h3>
// // //             {filteredExams.length === 0 ? (
// // //               <div className="text-center py-6 bg-gray-50 rounded-lg">
// // //                 <GraduationCap className="mx-auto h-10 w-10 text-gray-400 mb-2" />
// // //                 <p className="text-sm text-gray-500">No exams found</p>
// // //                 <p className="text-xs text-gray-400 mt-1">Try adjusting your search</p>
// // //               </div>
// // //             ) : (
// // //               <div className="grid gap-2">
// // //                 {filteredExams.map((exam) => (
// // //                   <div 
// // //                     key={exam.name} 
// // //                     className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
// // //                   >
// // //                     <div className="flex items-center gap-3">
// // //                       <div 
// // //                         className="flex size-8 items-center justify-center rounded-md text-white"
// // //                         style={{ backgroundColor: getCategoryColor(exam.category) }}
// // //                       >
// // //                         {renderIcon(exam.icon, "size-5 shrink-0")}
// // //                       </div>
// // //                       <div className="flex flex-col">
// // //                         <span className="font-medium">{exam.name}</span>
// // //                         <span className="text-xs text-muted-foreground">{exam.category}</span>
// // //                       </div>
// // //                     </div>
// // //                     <Button 
// // //                       size="sm" 
// // //                       variant={myExams.some(e => e.name === exam.name) ? "secondary" : "default"}
// // //                       className={myExams.some(e => e.name === exam.name) ? "opacity-50 cursor-not-allowed" : ""}
// // //                       onClick={() => handleAddExam(exam)}
// // //                       disabled={myExams.some(e => e.name === exam.name)}
// // //                     >
// // //                       {myExams.some(e => e.name === exam.name) ? "Added" : "Add"}
// // //                     </Button>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </SheetContent>
// // //       </Sheet>
// // //     </>
// // //   )
// // // }
// // "use client"
// // // File: TeamSwitcher.js (maintaining original filename for imports)
// // import React, { createElement, useState } from "react"
// // import { ChevronDown, Plus, Search, X, BookOpen, GraduationCap, Stethoscope, Scale, HeartPulse, Calculator } from "lucide-react"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuShortcut,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu.jsx"
// // import {
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar.jsx"
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetClose,
// // } from "@/components/ui/sheet.jsx"
// // import { Input } from "@/components/ui/input.jsx"
// // import { Button } from "@/components/ui/button.jsx"
// // import { Badge } from "@/components/ui/badge.jsx"

// // // Define exams directly in the client component
// // const EXAMS = [
// //   {
// //     name: "Medical Certification",
// //     icon: "medical",
// //     category: "Medical"
// //   },
// //   {
// //     name: "Bar Exam",
// //     icon: "law",
// //     category: "Law"
// //   },
// //   {
// //     name: "Nursing Board",
// //     icon: "nursing",
// //     category: "Nursing"
// //   }
// // ]

// // // Sample available exams to add
// // const AVAILABLE_EXAMS = [
// //   {
// //     name: "USMLE Step 1",
// //     icon: "medical",
// //     category: "Medical"
// //   },
// //   {
// //     name: "NCLEX-RN",
// //     icon: "nursing",
// //     category: "Nursing"
// //   },
// //   {
// //     name: "Bar Examination",
// //     icon: "law",
// //     category: "Law"
// //   },
// //   {
// //     name: "CPA Examination",
// //     icon: "accounting",
// //     category: "Accounting"
// //   },
// //   {
// //     name: "GRE",
// //     icon: "education",
// //     category: "Graduate"
// //   },
// //   {
// //     name: "MCAT",
// //     icon: "medical",
// //     category: "Medical"
// //   },
// //   {
// //     name: "Multistate Bar",
// //     icon: "law",
// //     category: "Law"
// //   },
// //   {
// //     name: "LSAT",
// //     icon: "law",
// //     category: "Law"
// //   }
// // ]

// // // Color mapping for categories
// // const CATEGORY_COLORS = {
// //   "Medical": "#0ea5e9", // sky-500
// //   "Law": "#8b5cf6", // violet-500
// //   "Nursing": "#ec4899", // pink-500
// //   "Accounting": "#f59e0b", // amber-500
// //   "Graduate": "#10b981", // emerald-500
// //   "Default": "#6b7280" // gray-500
// // }

// // // Helper function to render icon based on type
// // const renderIcon = (iconType, className) => {
// //   switch(iconType) {
// //     case "medical":
// //       return createElement(Stethoscope, { className });
// //     case "law":
// //       return createElement(Scale, { className });
// //     case "nursing":
// //       return createElement(HeartPulse, { className });
// //     case "accounting":
// //       return createElement(Calculator, { className });
// //     case "education":
// //       return createElement(BookOpen, { className });
// //     default:
// //       return createElement(GraduationCap, { className });
// //   }
// // }

// // // Get color for category
// // const getCategoryColor = (category) => {
// //   return CATEGORY_COLORS[category] || CATEGORY_COLORS["Default"];
// // }

// // export function TeamSwitcher({ initialTeamIndex = 0 }) {
// //   // Renamed internally to maintain compatibility with imports
// //   const initialExamIndex = initialTeamIndex;
// //   const [activeExam, setActiveExam] = useState(EXAMS[initialExamIndex]);
// //   const [isSheetOpen, setIsSheetOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [myExams, setMyExams] = useState(EXAMS);
// //   const [selectedCategory, setSelectedCategory] = useState("All");
  
// //   if (!activeExam) {
// //     return null
// //   }

// //   // Get all unique categories
// //   const categories = ["All", ...new Set(AVAILABLE_EXAMS.map(exam => exam.category))];

// //   // Filter exams by search query and category
// //   const filteredExams = AVAILABLE_EXAMS.filter(exam => {
// //     const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase());
// //     const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory;
// //     return matchesSearch && matchesCategory;
// //   });

// //   const handleAddExam = (exam) => {
// //     if (!myExams.some(e => e.name === exam.name)) {
// //       const newExams = [...myExams, exam];
// //       setMyExams(newExams);
// //     }
// //   };

// //   return (
// //     <>
// //       <SidebarMenu>
// //         <SidebarMenuItem>
// //           <DropdownMenu>
// //             <DropdownMenuTrigger asChild>
// //               <SidebarMenuButton className="w-fit px-1.5">
// //                 <div 
// //                   className="flex aspect-square size-5 items-center justify-center rounded-md text-white"
// //                   style={{ backgroundColor: getCategoryColor(activeExam.category) }}
// //                 >
// //                   {renderIcon(activeExam.icon, "size-3")}
// //                 </div>
// //                 <span className="truncate font-semibold">
// //                   {activeExam.name}
// //                 </span>
// //                 <ChevronDown className="opacity-50" />
// //               </SidebarMenuButton>
// //             </DropdownMenuTrigger>
// //             <DropdownMenuContent
// //               className="w-64 rounded-lg"
// //               align="start"
// //               side="bottom"
// //               sideOffset={4}
// //             >
// //               <DropdownMenuLabel className="text-xs text-muted-foreground">
// //                 Your Exams
// //               </DropdownMenuLabel>
// //               {myExams.map((exam, index) => (
// //                 <DropdownMenuItem
// //                   key={exam.name + index}
// //                   onClick={() => setActiveExam(exam)}
// //                   className="gap-2 p-2"
// //                 >
// //                   <div 
// //                     className="flex size-6 items-center justify-center rounded-md text-white"
// //                     style={{ backgroundColor: getCategoryColor(exam.category) }}
// //                   >
// //                     {renderIcon(exam.icon, "size-4 shrink-0")}
// //                   </div>
// //                   <span>{exam.name}</span>
// //                   <DropdownMenuShortcut>{`⌘${index + 1}`}</DropdownMenuShortcut>
// //                 </DropdownMenuItem>
// //               ))}
// //               <DropdownMenuSeparator />
// //               <DropdownMenuItem 
// //                 className="gap-2 p-2"
// //                 onClick={() => setIsSheetOpen(true)}
// //               >
// //                 <div className="flex size-6 items-center justify-center rounded-md border border-dashed bg-background">
// //                   <Plus className="size-4" />
// //                 </div>
// //                 <div className="font-medium text-muted-foreground">
// //                   Add New Exam
// //                 </div>
// //               </DropdownMenuItem>
// //             </DropdownMenuContent>
// //           </DropdownMenu>
// //         </SidebarMenuItem>
// //       </SidebarMenu>

// //       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
// //         <SheetContent className="w-80 sm:w-96 overflow-y-auto">
// //           <SheetHeader className="mb-4 border-b pb-4">
// //             <SheetTitle className="text-xl font-bold">Add New Exam</SheetTitle>
// //           </SheetHeader>
          
// //           <div className="relative mb-6">
// //             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
// //             <Input
// //               placeholder="Search exams..."
// //               className="pl-8 bg-gray-50 border-gray-200"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>
          
// //           <div className="mb-6 overflow-x-auto">
// //             <div className="flex gap-2 pb-2">
// //               {categories.map(category => (
// //                 <Badge
// //                   key={category}
// //                   variant={selectedCategory === category ? "default" : "outline"}
// //                   className={`cursor-pointer ${selectedCategory === category ? '' : 'hover:bg-gray-100'}`}
// //                   style={selectedCategory === category && category !== "All" ? 
// //                     { backgroundColor: getCategoryColor(category), color: "white" } : 
// //                     {}
// //                   }
// //                   onClick={() => setSelectedCategory(category)}
// //                 >
// //                   {category}
// //                 </Badge>
// //               ))}
// //             </div>
// //           </div>
          
// //           <div className="space-y-2">
// //             <h3 className="text-sm font-medium mb-3">Available Exams</h3>
// //             {filteredExams.length === 0 ? (
// //               <div className="text-center py-6 bg-gray-50 rounded-lg">
// //                 <GraduationCap className="mx-auto h-10 w-10 text-gray-400 mb-2" />
// //                 <p className="text-sm text-gray-500">No exams found</p>
// //                 <p className="text-xs text-gray-400 mt-1">Try adjusting your search</p>
// //               </div>
// //             ) : (
// //               <div className="grid gap-2">
// //                 {filteredExams.map((exam) => (
// //                   <div 
// //                     key={exam.name} 
// //                     className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <div 
// //                         className="flex size-8 items-center justify-center rounded-md text-white"
// //                         style={{ backgroundColor: getCategoryColor(exam.category) }}
// //                       >
// //                         {renderIcon(exam.icon, "size-5 shrink-0")}
// //                       </div>
// //                       <div className="flex flex-col">
// //                         <span className="font-medium">{exam.name}</span>
// //                         <span className="text-xs text-muted-foreground">{exam.category}</span>
// //                       </div>
// //                     </div>
// //                     <Button 
// //                       size="sm" 
// //                       variant={myExams.some(e => e.name === exam.name) ? "secondary" : "default"}
// //                       className={myExams.some(e => e.name === exam.name) ? "opacity-50 cursor-not-allowed" : ""}
// //                       onClick={() => handleAddExam(exam)}
// //                       disabled={myExams.some(e => e.name === exam.name)}
// //                     >
// //                       {myExams.some(e => e.name === exam.name) ? "Added" : "Add"}
// //                     </Button>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </SheetContent>
// //       </Sheet>
// //     </>
// //   )
// // }
// "use client"
// // File: TeamSwitcher.js (maintaining original filename for imports)
// import React, { createElement, useState } from "react"
// import { ChevronDown, Plus, Search, X, BookOpen, GraduationCap, Stethoscope, Scale, HeartPulse, Calculator } from "lucide-react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu.jsx"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar.jsx"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetClose,
// } from "@/components/ui/sheet.jsx"
// import { Input } from "@/components/ui/input.jsx"
// import { Button } from "@/components/ui/button.jsx"
// import { Badge } from "@/components/ui/badge.jsx"

// // Define exams directly in the client component
// const EXAMS = [
//   {
//     name: "Medical Certification",
//     icon: "medical",
//     category: "Medical"
//   },
//   {
//     name: "Bar Exam",
//     icon: "law",
//     category: "Law"
//   },
//   {
//     name: "Nursing Board",
//     icon: "nursing",
//     category: "Nursing"
//   }
// ]

// // Sample available exams to add
// const AVAILABLE_EXAMS = [
//   {
//     name: "USMLE Step 1",
//     icon: "medical",
//     category: "Medical"
//   },
//   {
//     name: "NCLEX-RN",
//     icon: "nursing",
//     category: "Nursing"
//   },
//   {
//     name: "Bar Examination",
//     icon: "law",
//     category: "Law"
//   },
//   {
//     name: "CPA Examination",
//     icon: "accounting",
//     category: "Accounting"
//   },
//   {
//     name: "GRE",
//     icon: "education",
//     category: "Graduate"
//   },
//   {
//     name: "MCAT",
//     icon: "medical",
//     category: "Medical"
//   },
//   {
//     name: "Multistate Bar",
//     icon: "law",
//     category: "Law"
//   },
//   {
//     name: "LSAT",
//     icon: "law",
//     category: "Law"
//   }
// ]

// // Color mapping for categories
// const CATEGORY_COLORS = {
//   "Medical": "#0ea5e9", // sky-500
//   "Law": "#8b5cf6", // violet-500
//   "Nursing": "#ec4899", // pink-500
//   "Accounting": "#f59e0b", // amber-500
//   "Graduate": "#10b981", // emerald-500
//   "Default": "#6b7280" // gray-500
// }

// // Helper function to render icon based on type
// const renderIcon = (iconType, className) => {
//   switch(iconType) {
//     case "medical":
//       return createElement(Stethoscope, { className });
//     case "law":
//       return createElement(Scale, { className });
//     case "nursing":
//       return createElement(HeartPulse, { className });
//     case "accounting":
//       return createElement(Calculator, { className });
//     case "education":
//       return createElement(BookOpen, { className });
//     default:
//       return createElement(GraduationCap, { className });
//   }
// }

// // Get color for category
// const getCategoryColor = (category) => {
//   return CATEGORY_COLORS[category] || CATEGORY_COLORS["Default"];
// }

// export function TeamSwitcher({ initialTeamIndex = 0 }) {
//   // Renamed internally to maintain compatibility with imports
//   const initialExamIndex = initialTeamIndex;
//   const [activeExam, setActiveExam] = useState(EXAMS[initialExamIndex]);
//   const [isSheetOpen, setIsSheetOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [myExams, setMyExams] = useState(EXAMS);
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   if (!activeExam) {
//     return null
//   }

//   // Get all unique categories
//   const categories = ["All", ...new Set(AVAILABLE_EXAMS.map(exam => exam.category))];

//   // Filter exams by search query and category
//   const filteredExams = AVAILABLE_EXAMS.filter(exam => {
//     const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleAddExam = (exam) => {
//     if (!myExams.some(e => e.name === exam.name)) {
//       const newExams = [...myExams, exam];
//       setMyExams(newExams);
//     }
//   };

//   return (
//     <>
//       <SidebarMenu>
//         <SidebarMenuItem>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <SidebarMenuButton className="w-fit px-1.5">
//                 <div 
//                   className="flex aspect-square size-5 items-center justify-center rounded-md text-white"
//                   style={{ backgroundColor: getCategoryColor(activeExam.category) }}
//                 >
//                   {renderIcon(activeExam.icon, "size-3")}
//                 </div>
//                 <span className="truncate font-semibold">
//                   {activeExam.name}
//                 </span>
//                 <ChevronDown className="opacity-50" />
//               </SidebarMenuButton>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//               className="w-64 rounded-lg"
//               align="start"
//               side="bottom"
//               sideOffset={4}
//             >
//               <DropdownMenuLabel className="text-xs text-muted-foreground">
//                 Your Exams
//               </DropdownMenuLabel>
//               {myExams.map((exam, index) => (
//                 <DropdownMenuItem
//                   key={exam.name + index}
//                   onClick={() => setActiveExam(exam)}
//                   className="gap-2 p-2"
//                 >
//                   <div 
//                     className="flex size-6 items-center justify-center rounded-md text-white"
//                     style={{ backgroundColor: getCategoryColor(exam.category) }}
//                   >
//                     {renderIcon(exam.icon, "size-4 shrink-0")}
//                   </div>
//                   <span>{exam.name}</span>
//                   <DropdownMenuShortcut>{`⌘${index + 1}`}</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//               ))}
//               <DropdownMenuSeparator />
//               <DropdownMenuItem 
//                 className="gap-2 p-2"
//                 onClick={() => setIsSheetOpen(true)}
//               >
//                 <div className="flex size-6 items-center justify-center rounded-md border border-dashed bg-background">
//                   <Plus className="size-4" />
//                 </div>
//                 <div className="font-medium text-muted-foreground">
//                   Add New Exam
//                 </div>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </SidebarMenuItem>
//       </SidebarMenu>

//       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//         <SheetContent className="w-80 sm:w-96 overflow-y-auto">
//           <SheetHeader className="mb-4 border-b pb-4">
//             <SheetTitle className="text-xl font-bold">Add New Exam</SheetTitle>
//           </SheetHeader>
          
//           <div className="relative mb-6">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search exams..."
//               className="pl-8 bg-gray-50 border-gray-200"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
          
//           <div className="mb-6 overflow-x-auto">
//             <div className="flex gap-2 pb-2">
//               {categories.map(category => (
//                 <Badge
//                   key={category}
//                   variant={selectedCategory === category ? "default" : "outline"}
//                   className={`cursor-pointer ${selectedCategory === category ? '' : 'hover:bg-gray-100'}`}
//                   style={selectedCategory === category && category !== "All" ? 
//                     { backgroundColor: getCategoryColor(category), color: "white" } : 
//                     {}
//                   }
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <h3 className="text-sm font-medium mb-3">Available Exams</h3>
//             {filteredExams.length === 0 ? (
//               <div className="text-center py-6 bg-gray-50 rounded-lg">
//                 <GraduationCap className="mx-auto h-10 w-10 text-gray-400 mb-2" />
//                 <p className="text-sm text-gray-500">No exams found</p>
//                 <p className="text-xs text-gray-400 mt-1">Try adjusting your search</p>
//               </div>
//             ) : (
//               <div className="grid gap-2">
//                 {filteredExams.map((exam) => (
//                   <div 
//                     key={exam.name} 
//                     className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div 
//                         className="flex size-8 items-center justify-center rounded-md text-white"
//                         style={{ backgroundColor: getCategoryColor(exam.category) }}
//                       >
//                         {renderIcon(exam.icon, "size-5 shrink-0")}
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="font-medium">{exam.name}</span>
//                         <span className="text-xs text-muted-foreground">{exam.category}</span>
//                       </div>
//                     </div>
//                     <Button 
//                       size="sm" 
//                       variant={myExams.some(e => e.name === exam.name) ? "secondary" : "default"}
//                       className={myExams.some(e => e.name === exam.name) ? "opacity-50 cursor-not-allowed" : ""}
//                       onClick={() => handleAddExam(exam)}
//                       disabled={myExams.some(e => e.name === exam.name)}
//                     >
//                       {myExams.some(e => e.name === exam.name) ? "Added" : "Add"}
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </SheetContent>
//       </Sheet>
//     </>
//   )
// }
"use client"
// File: TeamSwitcher.js (maintaining original filename for imports)
import React, { createElement, useState } from "react"
import { ChevronDown, Plus, Search, X, BookOpen, GraduationCap, Stethoscope, Scale, HeartPulse, Calculator } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.jsx"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Badge } from "@/components/ui/badge.jsx"

// Define exams directly in the client component
const EXAMS = [
  {
    name: "Medical Certification",
    icon: "medical",
    category: "Medical"
  },
  {
    name: "Bar Exam",
    icon: "law",
    category: "Law"
  },
  {
    name: "Nursing Board",
    icon: "nursing",
    category: "Nursing"
  }
]

// Sample available exams to add
const AVAILABLE_EXAMS = [
  {
    name: "USMLE Step 1",
    icon: "medical",
    category: "Medical"
  },
  {
    name: "NCLEX-RN",
    icon: "nursing",
    category: "Nursing"
  },
  {
    name: "Bar Examination",
    icon: "law",
    category: "Law"
  },
  {
    name: "CPA Examination",
    icon: "accounting",
    category: "Accounting"
  },
  {
    name: "GRE",
    icon: "education",
    category: "Graduate"
  },
  {
    name: "MCAT",
    icon: "medical",
    category: "Medical"
  },
  {
    name: "Multistate Bar",
    icon: "law",
    category: "Law"
  },
  {
    name: "LSAT",
    icon: "law",
    category: "Law"
  }
]

// Color mapping for categories
const CATEGORY_COLORS = {
  "Medical": "#0ea5e9", // sky-500
  "Law": "#8b5cf6", // violet-500
  "Nursing": "#ec4899", // pink-500
  "Accounting": "#f59e0b", // amber-500
  "Graduate": "#10b981", // emerald-500
  "Default": "#6b7280" // gray-500
}

// Helper function to render icon based on type
const renderIcon = (iconType, className) => {
  switch(iconType) {
    case "medical":
      return createElement(Stethoscope, { className });
    case "law":
      return createElement(Scale, { className });
    case "nursing":
      return createElement(HeartPulse, { className });
    case "accounting":
      return createElement(Calculator, { className });
    case "education":
      return createElement(BookOpen, { className });
    default:
      return createElement(GraduationCap, { className });
  }
}

// Get color for category
const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS["Default"];
}

export function TeamSwitcher({ initialTeamIndex = 0 }) {
  // Renamed internally to maintain compatibility with imports
  const initialExamIndex = initialTeamIndex;
  const [activeExam, setActiveExam] = useState(EXAMS[initialExamIndex]);
  
  // Notify about initial exam on first render
  React.useEffect(() => {
    notifyExamChange(activeExam);
  }, []);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [myExams, setMyExams] = useState(EXAMS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  if (!activeExam) {
    return null
  }

  // Get all unique categories
  const categories = ["All", ...new Set(AVAILABLE_EXAMS.map(exam => exam.category))];

  // Filter exams by search query and category
  const filteredExams = AVAILABLE_EXAMS.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Function to dispatch event when active exam changes
  const notifyExamChange = (exam) => {
    const event = new CustomEvent('examChanged', { 
      detail: exam 
    });
    window.dispatchEvent(event);
  };

  // Update handlers to notify of exam changes
  const handleExamChange = (exam) => {
    setActiveExam(exam);
    notifyExamChange(exam);
  };

  const handleAddExam = (exam) => {
    if (!myExams.some(e => e.name === exam.name)) {
      const newExams = [...myExams, exam];
      setMyExams(newExams);
    }
  };

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="w-fit px-1.5">
                <div 
                  className="flex aspect-square size-5 items-center justify-center rounded-md text-white"
                  style={{ backgroundColor: getCategoryColor(activeExam.category) }}
                >
                  {renderIcon(activeExam.icon, "size-3")}
                </div>
                <span className="truncate font-semibold">
                  {activeExam.name}
                </span>
                <ChevronDown className="opacity-50" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-64 rounded-lg"
              align="start"
              side="bottom"
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Your Exams
              </DropdownMenuLabel>
              {myExams.map((exam, index) => (
                <DropdownMenuItem
                  key={exam.name + index}
                  onClick={() => handleExamChange(exam)}
                  className="gap-2 p-2"
                >
                  <div 
                    className="flex size-6 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: getCategoryColor(exam.category) }}
                  >
                    {renderIcon(exam.icon, "size-4 shrink-0")}
                  </div>
                  <span>{exam.name}</span>
                  <DropdownMenuShortcut>{`⌘${index + 1}`}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="gap-2 p-2"
                onClick={() => setIsSheetOpen(true)}
              >
                <div className="flex size-6 items-center justify-center rounded-md border border-dashed bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add New Exam
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-80 sm:w-96 overflow-y-auto">
          <SheetHeader className="mb-4 border-b pb-4">
            <SheetTitle className="text-xl font-bold">Add New Exam</SheetTitle>
          </SheetHeader>
          
          <div className="relative mb-6">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search exams..."
              className="pl-8 bg-gray-50 border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mb-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer ${selectedCategory === category ? '' : 'hover:bg-gray-100'}`}
                  style={selectedCategory === category && category !== "All" ? 
                    { backgroundColor: getCategoryColor(category), color: "white" } : 
                    {}
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium mb-3">Available Exams</h3>
            {filteredExams.length === 0 ? (
              <div className="text-center py-6 bg-gray-50 rounded-lg">
                <GraduationCap className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">No exams found</p>
                <p className="text-xs text-gray-400 mt-1">Try adjusting your search</p>
              </div>
            ) : (
              <div className="grid gap-2">
                {filteredExams.map((exam) => (
                  <div 
                    key={exam.name} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex size-8 items-center justify-center rounded-md text-white"
                        style={{ backgroundColor: getCategoryColor(exam.category) }}
                      >
                        {renderIcon(exam.icon, "size-5 shrink-0")}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{exam.name}</span>
                        <span className="text-xs text-muted-foreground">{exam.category}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={myExams.some(e => e.name === exam.name) ? "secondary" : "default"}
                      className={myExams.some(e => e.name === exam.name) ? "opacity-50 cursor-not-allowed" : ""}
                      onClick={() => handleAddExam(exam)}
                      disabled={myExams.some(e => e.name === exam.name)}
                    >
                      {myExams.some(e => e.name === exam.name) ? "Added" : "Add"}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
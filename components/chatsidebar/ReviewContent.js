// "use client";

// import React, { createElement, useState, useEffect } from "react";
// import {
//   Flag,
//   XCircle,
//   CheckCircle,
//   BarChart2,
//   Clock,
//   Filter,
//   Search,
//   ChevronDown,
//   Plus,
// } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
// import { Button } from "@/components/ui/button.jsx";
// import { Input } from "@/components/ui/input.jsx";
// import { ScrollArea } from "@/components/ui/scroll-area.jsx";
// import { Badge } from "@/components/ui/badge.jsx";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.jsx";
// import { Label } from "@/components/ui/label.jsx";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card.jsx";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu.jsx";

// // Sample MCQ data (should be fetched from API in real app)
// const sampleMCQs = [
//   {
//     id: 1,
//     question: "Which of the following is a characteristic of living organisms?",
//     options: [
//       "A. Ability to conduct electricity",
//       "B. Ability to reproduce",
//       "C. Ability to dissolve in water",
//       "D. Ability to reflect light"
//     ],
//     correctAnswer: "B",
//     userAnswer: "B",
//     status: "correct",
//     flagged: false,
//     subject: "Biology",
//     topic: "Characteristics of Life",
//     timestamp: "2 days ago"
//   },
//   {
//     id: 2,
//     question: "What is the chemical formula for glucose?",
//     options: [
//       "A. C6H12O6",
//       "B. C12H22O11",
//       "C. CO2",
//       "D. H2O"
//     ],
//     correctAnswer: "A",
//     userAnswer: "B",
//     status: "incorrect",
//     flagged: true,
//     subject: "Chemistry",
//     topic: "Carbohydrates",
//     timestamp: "1 day ago"
//   },
//   {
//     id: 3,
//     question: "Which force keeps planets in orbit around the sun?",
//     options: [
//       "A. Electromagnetic force",
//       "B. Strong nuclear force",
//       "C. Gravitational force",
//       "D. Weak nuclear force"
//     ],
//     correctAnswer: "C",
//     userAnswer: "C",
//     status: "correct",
//     flagged: false,
//     subject: "Physics",
//     topic: "Newton's Laws",
//     timestamp: "3 days ago"
//   }
// ];

// // Generate more sample questions to have a total of 23
// for (let i = 4; i <= 23; i++) {
//   const isCorrect = Math.random() > 0.4;
//   sampleMCQs.push({
//     id: i,
//     question: `Sample question #${i} for testing pagination`,
//     options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
//     correctAnswer: "A",
//     userAnswer: isCorrect ? "A" : "B",
//     status: isCorrect ? "correct" : "incorrect",
//     flagged: Math.random() > 0.8,
//     subject: ["Biology", "Chemistry", "Physics", "Mathematics"][Math.floor(Math.random() * 4)],
//     topic: "Sample Topic",
//     timestamp: "Recently"
//   });
// }

// // Count totals
// const counts = {
//   all: sampleMCQs.length,
//   flagged: sampleMCQs.filter(q => q.flagged).length,
//   incorrect: sampleMCQs.filter(q => q.status === "incorrect").length,
//   correct: sampleMCQs.filter(q => q.status === "correct").length
// };

// export function ReviewContent({ initialTab = "all" }) {
//   const [activeTab, setActiveTab] = useState(initialTab);
//   const [selectedMCQ, setSelectedMCQ] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterSubject, setFilterSubject] = useState("All");
  
//   // Update active tab when initialTab prop changes
//   useEffect(() => {
//     setActiveTab(initialTab);
//     setSelectedMCQ(null);
//   }, [initialTab]);
  
//   // Filter MCQs based on active tab, search query, and subject filter
//   const getFilteredMCQs = () => {
//     let filtered = sampleMCQs;
    
//     // Filter by tab
//     switch (activeTab) {
//       case "flagged":
//         filtered = filtered.filter(q => q.flagged);
//         break;
//       case "incorrect":
//         filtered = filtered.filter(q => q.status === "incorrect");
//         break;
//       case "correct":
//         filtered = filtered.filter(q => q.status === "correct");
//         break;
//     }
    
//     // Filter by search query
//     if (searchQuery) {
//       filtered = filtered.filter(q => 
//         q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         q.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         q.topic.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Filter by subject
//     if (filterSubject !== "All") {
//       filtered = filtered.filter(q => q.subject === filterSubject);
//     }
    
//     return filtered;
//   };
  
//   const handleTabChange = (value) => {
//     setActiveTab(value);
//     setSelectedMCQ(null);
//   };
  
//   const handleSelectMCQ = (mcq) => {
//     setSelectedMCQ(mcq);
//   };
  
//   const toggleFlag = (mcq) => {
//     // In a real app, this would call an API to update the flag status
//     mcq.flagged = !mcq.flagged;
//     setSelectedMCQ({...mcq});
//   };
  
//   const statusIcons = {
//     correct: CheckCircle,
//     incorrect: XCircle,
//     flagged: Flag
//   };
  
//   const statusColors = {
//     correct: "text-green-600",
//     incorrect: "text-red-600",
//     flagged: "text-amber-500"
//   };
  
//   // Get unique subjects for filtering
//   const subjects = ["All", ...new Set(sampleMCQs.map(q => q.subject))];

//   return createElement("div", { className: "h-full flex flex-col p-4" },
//     // Review Header
//     createElement("div", { className: "border-b pb-4 mb-4" },
//       createElement("div", { className: "flex flex-col gap-4" },
//         createElement("div", { className: "flex items-center justify-between" },
//           createElement("h1", { className: "text-2xl font-bold" }, "Review Questions"),
//           createElement("div", { className: "flex items-center gap-2" },
//             createElement(Button, {
//               variant: "outline",
//               size: "sm",
//               className: "hidden md:flex"
//             }, "Study Guide"),
//             createElement(DropdownMenu, {},
//               createElement(DropdownMenuTrigger, { asChild: true },
//                 createElement(Button, {
//                   variant: "outline",
//                   size: "sm",
//                   className: "gap-1"
//                 },
//                   "Actions",
//                   createElement(ChevronDown, { className: "h-4 w-4 opacity-50" })
//                 )
//               ),
//               createElement(DropdownMenuContent, { align: "end" },
//                 createElement(DropdownMenuItem, {}, "Reset Progress"),
//                 createElement(DropdownMenuItem, {}, "Export Questions"),
//                 createElement(DropdownMenuItem, {}, "Create Flashcards")
//               )
//             )
//           )
//         ),
        
//         // Search and filter
//         createElement("div", { className: "flex flex-col md:flex-row gap-3" },
//           createElement("div", { className: "relative flex-1" },
//             createElement(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
//             createElement(Input, {
//               type: "search",
//               placeholder: "Search questions...",
//               className: "pl-8",
//               value: searchQuery,
//               onChange: (e) => setSearchQuery(e.target.value)
//             })
//           ),
//           createElement(DropdownMenu, {},
//             createElement(DropdownMenuTrigger, { asChild: true },
//               createElement(Button, {
//                 variant: "outline",
//                 size: "sm",
//                 className: "gap-1 w-full md:w-auto"
//               },
//                 createElement(Filter, { className: "h-4 w-4" }),
//                 "Subject: " + filterSubject
//               )
//             ),
//             createElement(DropdownMenuContent, {},
//               subjects.map((subject, index) => 
//                 createElement(DropdownMenuItem, {
//                   key: index,
//                   onClick: () => setFilterSubject(subject)
//                 }, subject)
//               )
//             )
//           )
//         )
//       ),
    
//       // Review Tabs
//       createElement("div", { className: "flex justify-center mt-4" },
//         createElement(TabsList, {
//           className: "my-2"
//         },
//           createElement(TabsTrigger, { 
//             value: "all",
//             onClick: () => handleTabChange("all"),
//             className: "flex items-center gap-2"
//           }, 
//             "All",
//             createElement(Badge, { variant: "secondary" }, counts.all)
//           ),
//           createElement(TabsTrigger, { 
//             value: "flagged",
//             onClick: () => handleTabChange("flagged"),
//             className: "flex items-center gap-2"
//           }, 
//             createElement(Flag, { className: "h-3.5 w-3.5" }),
//             "Flagged",
//             createElement(Badge, { variant: "secondary" }, counts.flagged)
//           ),
//           createElement(TabsTrigger, { 
//             value: "incorrect",
//             onClick: () => handleTabChange("incorrect"),
//             className: "flex items-center gap-2"
//           }, 
//             createElement(XCircle, { className: "h-3.5 w-3.5" }),
//             "Incorrect",
//             createElement(Badge, { variant: "secondary" }, counts.incorrect)
//           ),
//           createElement(TabsTrigger, { 
//             value: "correct",
//             onClick: () => handleTabChange("correct"),
//             className: "flex items-center gap-2"
//           }, 
//             createElement(CheckCircle, { className: "h-3.5 w-3.5" }),
//             "Correct",
//             createElement(Badge, { variant: "secondary" }, counts.correct)
//           )
//         )
//       )
//     ),
    
//     // Main content area - split view
//     createElement("div", { className: "flex-1 flex overflow-hidden border rounded-lg" },
//       // Questions list (left side)
//       createElement("div", { 
//         className: `w-full ${selectedMCQ && window.innerWidth >= 768 ? "md:w-2/5" : "w-full"} border-r`
//       },
//         createElement("div", { className: "p-4 border-b flex items-center justify-between" },
//           createElement("h3", { className: "font-medium text-sm" }, 
//             `Showing ${getFilteredMCQs().length} Questions`
//           ),
//           createElement(Button, { 
//             variant: "outline",
//             size: "sm",
//             className: "gap-1"
//           },
//             createElement(Plus, { className: "h-3.5 w-3.5" }),
//             "Create Quiz"
//           )
//         ),
//         createElement(ScrollArea, { className: "h-[calc(100vh-20rem)]" },
//           getFilteredMCQs().length === 0 ?
//             createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" },
//               createElement("div", { className: "rounded-full bg-muted p-3" },
//                 createElement(Search, { className: "h-6 w-6" })
//               ),
//               createElement("h3", { className: "mt-3 font-medium" }, "No questions found"),
//               createElement("p", { className: "text-sm text-muted-foreground mt-1" }, 
//                 "Try adjusting your filters or search term"
//               )
//             )
//           :
//             createElement("div", { className: "divide-y" },
//               getFilteredMCQs().map((mcq) => 
//                 createElement("div", { 
//                   key: mcq.id,
//                   className: `p-4 hover:bg-gray-50 cursor-pointer ${selectedMCQ?.id === mcq.id ? "bg-blue-50" : ""}`,
//                   onClick: () => handleSelectMCQ(mcq)
//                 },
//                   createElement("div", { className: "flex justify-between items-start mb-2" },
//                     createElement("div", { className: "text-sm font-medium line-clamp-2 pr-2" }, 
//                       mcq.question
//                     ),
//                     createElement("div", { className: "flex items-center gap-1 shrink-0" },
//                       mcq.flagged && createElement(Flag, { 
//                         className: "h-4 w-4 text-amber-500" 
//                       }),
//                       createElement(statusIcons[mcq.status], { 
//                         className: `h-5 w-5 ${statusColors[mcq.status]}` 
//                       })
//                     )
//                   ),
//                   createElement("div", { className: "flex items-center justify-between text-xs text-gray-500" },
//                     createElement("div", { className: "flex items-center gap-1" },
//                       createElement(BarChart2, { className: "h-3.5 w-3.5" }),
//                       mcq.subject
//                     ),
//                     createElement("div", { className: "flex items-center gap-1" },
//                       createElement(Clock, { className: "h-3.5 w-3.5" }),
//                       mcq.timestamp
//                     )
//                   )
//                 )
//               )
//             )
//         )
//       ),
      
//       // Question details (right side or full screen on mobile when selected)
//       selectedMCQ && createElement("div", { 
//         className: "w-full md:w-3/5 overflow-auto"
//       },
//         createElement(Card, { className: "border-0 rounded-none h-full" },
//           createElement(CardHeader, { className: "pb-4" },
//             // Back button on mobile
//             createElement("div", { className: "md:hidden mb-4" },
//               createElement(Button, {
//                 variant: "outline",
//                 size: "sm",
//                 onClick: () => setSelectedMCQ(null),
//                 className: "gap-1"
//               }, "← Back to list")
//             ),
//             // Status badges
//             createElement("div", { className: "flex items-center gap-2 mb-2" },
//               createElement(Badge, {
//                 variant: selectedMCQ.status === "correct" ? "success" : "destructive",
//                 className: selectedMCQ.status === "correct" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//               }, selectedMCQ.status === "correct" ? "Correct" : "Incorrect"),
//               selectedMCQ.flagged && createElement(Badge, {
//                 variant: "outline",
//                 className: "bg-amber-100 text-amber-800 border-amber-300"
//               }, "Flagged")
//             ),
//             // Question & metadata
//             createElement(CardTitle, { className: "text-lg font-medium mb-2" },
//               selectedMCQ.question
//             ),
//             createElement(CardDescription, { className: "flex items-center gap-4 text-xs" },
//               createElement("span", { className: "flex items-center gap-1" },
//                 createElement(BarChart2, { className: "h-3.5 w-3.5" }),
//                 selectedMCQ.subject + " > " + selectedMCQ.topic
//               ),
//               createElement("span", { className: "flex items-center gap-1" },
//                 createElement(Clock, { className: "h-3.5 w-3.5" }),
//                 selectedMCQ.timestamp
//               )
//             )
//           ),
//           createElement(CardContent, { className: "space-y-4" },
//             // Answer options
//             createElement(RadioGroup, {
//               defaultValue: selectedMCQ.userAnswer,
//               className: "space-y-3"
//             },
//               selectedMCQ.options.map((option, index) => {
//                 const optionLabel = option.split('.')[0];
//                 const optionText = option.split('.').slice(1).join('.').trim();
//                 const isCorrect = optionLabel === selectedMCQ.correctAnswer;
//                 const isUserSelected = optionLabel === selectedMCQ.userAnswer;
                
//                 return createElement("div", {
//                   key: index,
//                   className: `flex items-start space-x-3 rounded-lg border p-4 ${
//                     isCorrect ? "border-green-300 bg-green-50" : 
//                     (isUserSelected && !isCorrect) ? "border-red-300 bg-red-50" : 
//                     "border-gray-200"
//                   }`
//                 },
//                   createElement(RadioGroupItem, {
//                     value: optionLabel,
//                     id: `option-${selectedMCQ.id}-${optionLabel}`,
//                     disabled: true,
//                     checked: isUserSelected,
//                     className: isCorrect ? "text-green-600" : (isUserSelected ? "text-red-600" : "")
//                   }),
//                   createElement(Label, {
//                     htmlFor: `option-${selectedMCQ.id}-${optionLabel}`,
//                     className: "flex-1 cursor-pointer font-normal"
//                   },
//                     createElement("div", { className: "flex items-start justify-between" },
//                       createElement("div", null,
//                         createElement("span", { 
//                           className: "font-semibold mr-2",
//                         }, 
//                           optionLabel + "."
//                         ),
//                         optionText
//                       ),
//                       isCorrect && createElement(CheckCircle, { className: "h-5 w-5 text-green-600 shrink-0" }),
//                       (isUserSelected && !isCorrect) && createElement(XCircle, { className: "h-5 w-5 text-red-600 shrink-0" })
//                     )
//                   )
//                 );
//               })
//             ),
            
//             // Explanation section
//             createElement("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-100 mt-6" },
//               createElement("h3", { className: "font-semibold mb-2" }, "Explanation"),
//               createElement("p", { className: "text-sm text-gray-700" },
//                 selectedMCQ.status === "correct"
//                   ? "Great job! You answered this question correctly."
//                   : "This question was answered incorrectly. The correct answer is " + 
//                     selectedMCQ.correctAnswer + ". " +
//                     (selectedMCQ.correctAnswer === "A" ? "Glucose has the chemical formula C6H12O6." 
//                     : selectedMCQ.correctAnswer === "C" ? "Gravitational force keeps planets in orbit around the sun."
//                     : selectedMCQ.correctAnswer === "B" ? "Reproduction is a key characteristic of living organisms."
//                     : "Insulin is the hormone that regulates blood glucose levels.")
//               )
//             )
//           ),
//           createElement(CardFooter, { className: "gap-3 border-t pt-4 mt-4" },
//             createElement(Button, {
//               variant: "outline",
//               className: "flex-1"
//             }, 
//               "Similar Questions"
//             ),
//             createElement(Button, {
//               className: "flex-1",
//               onClick: () => toggleFlag(selectedMCQ)
//             },
//               selectedMCQ.flagged ? "Remove Flag" : "Flag Question"
//             )
//           )
//         )
//       )
//     )
//   );
// }
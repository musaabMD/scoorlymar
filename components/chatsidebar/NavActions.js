// // // // NavActions.js
// // // "use client"
// // // import React, { createElement, useState, useEffect } from "react"
// // // import {
// // //   ArrowDown,
// // //   ArrowUp,
// // //   Bell,
// // //   Copy,
// // //   CornerUpLeft,
// // //   CornerUpRight,
// // //   FileText,
// // //   GalleryVerticalEnd,
// // //   LineChart,
// // //   Link,
// // //   MoreHorizontal,
// // //   Settings2,
// // //   Star,
// // //   Trash,
// // //   Trash2,
// // // } from "lucide-react"
// // // import { Button } from "@/components/ui/button.jsx"
// // // import {
// // //   Popover,
// // //   PopoverContent,
// // //   PopoverTrigger,
// // // } from "@/components/ui/popover.jsx"
// // // import {
// // //   Sidebar,
// // //   SidebarContent,
// // //   SidebarGroup,
// // //   SidebarGroupContent,
// // //   SidebarMenu,
// // //   SidebarMenuButton,
// // //   SidebarMenuItem,
// // // } from "@/components/ui/sidebar.jsx"

// // // const data = [
// // //   [
// // //     {
// // //       label: "Customize Page",
// // //       icon: Settings2,
// // //     },
// // //     {
// // //       label: "Turn into wiki",
// // //       icon: FileText,
// // //     },
// // //   ],
// // //   [
// // //     {
// // //       label: "Copy Link",
// // //       icon: Link,
// // //     },
// // //     {
// // //       label: "Duplicate",
// // //       icon: Copy,
// // //     },
// // //     {
// // //       label: "Move to",
// // //       icon: CornerUpRight,
// // //     },
// // //     {
// // //       label: "Move to Trash",
// // //       icon: Trash2,
// // //     },
// // //   ],
// // //   [
// // //     {
// // //       label: "Undo",
// // //       icon: CornerUpLeft,
// // //     },
// // //     {
// // //       label: "View analytics",
// // //       icon: LineChart,
// // //     },
// // //     {
// // //       label: "Version History",
// // //       icon: GalleryVerticalEnd,
// // //     },
// // //     {
// // //       label: "Show delete pages",
// // //       icon: Trash,
// // //     },
// // //     {
// // //       label: "Notifications",
// // //       icon: Bell,
// // //     },
// // //   ],
// // //   [
// // //     {
// // //       label: "Import",
// // //       icon: ArrowUp,
// // //     },
// // //     {
// // //       label: "Export",
// // //       icon: ArrowDown,
// // //     },
// // //   ],
// // // ]

// // // export function NavActions() {
// // //   const [isOpen, setIsOpen] = useState(false)
  
// // //   return createElement("div", 
// // //     { className: "flex items-center gap-2 text-sm" },
// // //     createElement("div", 
// // //       { className: "hidden font-medium text-muted-foreground md:inline-block" },
// // //       "Upgrade | Score "
// // //     ),
// // //     createElement(Button, 
// // //       {
// // //         variant: "ghost",
// // //         size: "icon",
// // //         className: "h-7 w-7"
// // //       },
// // //       createElement(Star)
// // //     ),
// // //     createElement(Popover, 
// // //       {
// // //         open: isOpen,
// // //         onOpenChange: setIsOpen
// // //       },
// // //       createElement(PopoverTrigger, 
// // //         { asChild: true },
// // //         createElement(Button, 
// // //           {
// // //             variant: "ghost",
// // //             size: "icon",
// // //             className: "h-7 w-7 data-[state=open]:bg-accent"
// // //           },
// // //           createElement(MoreHorizontal)
// // //         )
// // //       ),
// // //       createElement(PopoverContent, 
// // //         {
// // //           className: "w-56 overflow-hidden rounded-lg p-0",
// // //           align: "end"
// // //         },
// // //         createElement(Sidebar, 
// // //           {
// // //             collapsible: "none",
// // //             className: "bg-transparent"
// // //           },
// // //           createElement(SidebarContent, null,
// // //             data.map((group, index) =>
// // //               createElement(SidebarGroup, 
// // //                 {
// // //                   key: index,
// // //                   className: "border-b last:border-none"
// // //                 },
// // //                 createElement(SidebarGroupContent, 
// // //                   { className: "gap-0" },
// // //                   createElement(SidebarMenu, null,
// // //                     group.map((item, itemIndex) =>
// // //                       createElement(SidebarMenuItem, 
// // //                         { key: itemIndex },
// // //                         createElement(SidebarMenuButton, null,
// // //                           createElement(item.icon),
// // //                           createElement("span", null, item.label)
// // //                         )
// // //                       )
// // //                     )
// // //                   )
// // //                 )
// // //               )
// // //             )
// // //           )
// // //         )
// // //       )
// // //     )
// // //   )
// // // }
// // "use client"
// // import React, { createElement, useState } from "react"
// // import {
// //   ArrowDown,
// //   ArrowUp,
// //   Bell,
// //   Copy,
// //   CornerUpLeft,
// //   CornerUpRight,
// //   FileText,
// //   GalleryVerticalEnd,
// //   LineChart,
// //   Link,
// //   MoreHorizontal,
// //   Settings2,
// //   Trash,
// //   Trash2,
// //   ChevronRight,
// //   PieChart,
// //   BookOpen,
// //   Check,
// //   BookMarked,
// //   Clock,
// //   XCircle,
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button.jsx"
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover.jsx"
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarGroup,
// //   SidebarGroupContent,
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar.jsx"
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetHeader,
// //   SheetTitle,
// // } from "@/components/ui/sheet.jsx"
// // import { Progress } from "@/components/ui/progress.jsx"

// // const data = [
// //   [
// //     {
// //       label: "Customize Page",
// //       icon: Settings2,
// //     },
// //     {
// //       label: "Turn into wiki",
// //       icon: FileText,
// //     },
// //   ],
// //   [
// //     {
// //       label: "Copy Link",
// //       icon: Link,
// //     },
// //     {
// //       label: "Duplicate",
// //       icon: Copy,
// //     },
// //     {
// //       label: "Move to",
// //       icon: CornerUpRight,
// //     },
// //     {
// //       label: "Move to Trash",
// //       icon: Trash2,
// //     },
// //   ],
// //   [
// //     {
// //       label: "Undo",
// //       icon: CornerUpLeft,
// //     },
// //     {
// //       label: "View analytics",
// //       icon: LineChart,
// //     },
// //     {
// //       label: "Version History",
// //       icon: GalleryVerticalEnd,
// //     },
// //     {
// //       label: "Show delete pages",
// //       icon: Trash,
// //     },
// //     {
// //       label: "Notifications",
// //       icon: Bell,
// //     },
// //   ],
// //   [
// //     {
// //       label: "Import",
// //       icon: ArrowUp,
// //     },
// //     {
// //       label: "Export",
// //       icon: ArrowDown,
// //     },
// //   ],
// // ]

// // // Sample score data
// // const scoreData = {
// //   overall: 35,
// //   sections: [
// //     { 
// //       name: "Biology", 
// //       score: 42, 
// //       questions: 50, 
// //       completed: 35,
// //       correct: 15,
// //       color: "#10b981" // emerald
// //     },
// //     { 
// //       name: "Chemistry", 
// //       score: 28, 
// //       questions: 40, 
// //       completed: 25,
// //       correct: 7,
// //       color: "#8b5cf6" // violet
// //     },
// //     { 
// //       name: "Physics", 
// //       score: 35, 
// //       questions: 45, 
// //       completed: 30,
// //       correct: 10,
// //       color: "#0ea5e9" // sky
// //     },
// //   ],
// //   recentActivity: [
// //     { action: "Completed", section: "Biology Quiz 3", time: "2 hours ago", icon: Check, color: "#10b981" },
// //     { action: "Started", section: "Chemistry Module 2", time: "Yesterday", icon: BookOpen, color: "#8b5cf6" },
// //     { action: "Failed", section: "Physics Challenge", time: "3 days ago", icon: XCircle, color: "#ef4444" },
// //   ]
// // }

// // export function NavActions() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [isScoreSheetOpen, setIsScoreSheetOpen] = useState(false)
  
// //   return createElement("div",
// //     { className: "flex items-center gap-2 text-sm" },
    
// //     // Upgrade button with gradient
// //     createElement("a",
// //       { 
// //         href: "/pricing",
// //         className: "hidden md:block" 
// //       },
// //       createElement("button", 
// //         { 
// //           className: "text-xs font-medium px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all" 
// //         },
// //         "Upgrade"
// //       )
// //     ),
    
// //     // Score percentage button
// //     createElement(Popover, 
// //       {
// //         open: isScoreSheetOpen,
// //         onOpenChange: setIsScoreSheetOpen
// //       },
// //       createElement(PopoverTrigger,
// //         { asChild: true },
// //         createElement("button", 
// //           { 
// //             className: "hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 font-medium text-sm transition-colors" 
// //           },
// //           createElement("div", { className: "flex items-center gap-1" },
// //             createElement(PieChart, { className: "h-4 w-4 text-blue-600" }),
// //             createElement("span", { className: "font-semibold" }, `${scoreData.overall}%`),
// //           ),
// //           createElement(ChevronRight, { className: "h-3 w-3 text-gray-400" })
// //         )
// //       ),
      
// //       // Score details sheet
// //       createElement(Sheet, 
// //         {
// //           open: isScoreSheetOpen,
// //           onOpenChange: setIsScoreSheetOpen
// //         },
// //         createElement(SheetContent, 
// //           { className: "w-full sm:max-w-md overflow-y-auto" },
// //           createElement(SheetHeader, 
// //             { className: "text-left mb-6 pb-4 border-b" },
// //             createElement(SheetTitle, 
// //               { className: "text-xl font-bold" },
// //               "Performance Dashboard"
// //             )
// //           ),
          
// //           // Overall score
// //           createElement("div", 
// //             { className: "mb-8" },
// //             createElement("h3", 
// //               { className: "text-sm font-medium mb-3" },
// //               "Overall Performance"
// //             ),
// //             createElement("div", 
// //               { className: "flex items-center justify-between mb-2" },
// //               createElement("span", { className: "text-sm" }, "Average score"),
// //               createElement("span", { className: "text-2xl font-bold text-blue-600" }, `${scoreData.overall}%`)
// //             ),
// //             createElement(Progress, 
// //               { 
// //                 value: scoreData.overall,
// //                 className: "h-2 bg-gray-100"
// //               }
// //             ),
// //             createElement("p", 
// //               { className: "text-xs text-gray-500 mt-2" },
// //               "Based on all your completed assessments"
// //             )
// //           ),
          
// //           // Section scores
// //           createElement("div", 
// //             { className: "mb-8" },
// //             createElement("h3", 
// //               { className: "text-sm font-medium mb-3" },
// //               "Section Performance"
// //             ),
// //             createElement("div", 
// //               { className: "space-y-4" },
// //               scoreData.sections.map((section, index) => 
// //                 createElement("div", 
// //                   { key: index, className: "rounded-lg border p-3" },
// //                   createElement("div", 
// //                     { className: "flex justify-between items-center mb-2" },
// //                     createElement("h4", { className: "font-medium" }, section.name),
// //                     createElement("span", 
// //                       { 
// //                         className: "font-semibold",
// //                         style: { color: section.color } 
// //                       }, 
// //                       `${section.score}%`
// //                     )
// //                   ),
// //                   createElement(Progress, 
// //                     { 
// //                       value: section.score,
// //                       className: "h-1.5 mb-2",
// //                       style: { 
// //                         backgroundColor: "rgba(229, 231, 235, 0.5)",
// //                       },
// //                       indicatorStyle: {
// //                         backgroundColor: section.color
// //                       }
// //                     }
// //                   ),
// //                   createElement("div", 
// //                     { className: "grid grid-cols-3 gap-2 text-xs text-gray-500 mt-3" },
// //                     createElement("div", {}, 
// //                       createElement("div", { className: "font-medium text-gray-700" }, section.questions),
// //                       createElement("div", {}, "Questions")
// //                     ),
// //                     createElement("div", {}, 
// //                       createElement("div", { className: "font-medium text-gray-700" }, section.completed),
// //                       createElement("div", {}, "Attempted")
// //                     ),
// //                     createElement("div", {}, 
// //                       createElement("div", { className: "font-medium text-gray-700" }, section.correct),
// //                       createElement("div", {}, "Correct")
// //                     )
// //                   )
// //                 )
// //               )
// //             )
// //           ),
          
// //           // Recent activity
// //           createElement("div", 
// //             { className: "mb-4" },
// //             createElement("h3", 
// //               { className: "text-sm font-medium mb-3" },
// //               "Recent Activity"
// //             ),
// //             createElement("div", 
// //               { className: "space-y-3" },
// //               scoreData.recentActivity.map((activity, index) => 
// //                 createElement("div", 
// //                   { 
// //                     key: index, 
// //                     className: "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50" 
// //                   },
// //                   createElement("div", 
// //                     { 
// //                       className: "flex items-center justify-center size-8 rounded-full",
// //                       style: { backgroundColor: `${activity.color}15` }
// //                     },
// //                     createElement(activity.icon, { 
// //                       className: "size-4",
// //                       style: { color: activity.color }
// //                     })
// //                   ),
// //                   createElement("div", 
// //                     { className: "flex-1" },
// //                     createElement("div", 
// //                       { className: "flex items-center gap-1" },
// //                       createElement("span", 
// //                         { 
// //                           className: "text-sm font-medium",
// //                           style: { color: activity.color }
// //                         }, 
// //                         activity.action
// //                       ),
// //                       createElement("span", { className: "text-sm" }, activity.section)
// //                     ),
// //                     createElement("div", 
// //                       { className: "flex items-center gap-1 text-xs text-gray-500" },
// //                       createElement(Clock, { className: "size-3" }),
// //                       activity.time
// //                     )
// //                   )
// //                 )
// //               )
// //             )
// //           ),
          
// //           // Action buttons
// //           createElement("div", 
// //             { className: "mt-6 grid grid-cols-2 gap-2" },
// //             createElement(Button, 
// //               { variant: "outline", className: "w-full" },
// //               createElement(BookOpen, { className: "mr-2 size-4" }),
// //               "Study Plan"
// //             ),
// //             createElement(Button, 
// //               { className: "w-full" },
// //               createElement(BookMarked, { className: "mr-2 size-4" }),
// //               "Practice Tests"
// //             )
// //           )
// //         )
// //       )
// //     ),
    
// //     // Actions menu (now hidden)
// //     createElement(Popover,
// //       {
// //         open: isOpen,
// //         onOpenChange: setIsOpen,
// //         className: "hidden" // Hidden as requested
// //       },
// //       createElement(PopoverTrigger,
// //         { asChild: true },
// //         createElement(Button,
// //           {
// //             variant: "ghost",
// //             size: "icon",
// //             className: "h-7 w-7 data-[state=open]:bg-accent"
// //           },
// //           createElement(MoreHorizontal)
// //         )
// //       ),
// //       createElement(PopoverContent,
// //         {
// //           className: "w-56 overflow-hidden rounded-lg p-0",
// //           align: "end"
// //         },
// //         createElement(Sidebar,
// //           {
// //             collapsible: "none",
// //             className: "bg-transparent"
// //           },
// //           createElement(SidebarContent, null,
// //             data.map((group, index) =>
// //               createElement(SidebarGroup,
// //                 {
// //                   key: index,
// //                   className: "border-b last:border-none"
// //                 },
// //                 createElement(SidebarGroupContent,
// //                   { className: "gap-0" },
// //                   createElement(SidebarMenu, null,
// //                     group.map((item, itemIndex) =>
// //                       createElement(SidebarMenuItem,
// //                         { key: itemIndex },
// //                         createElement(SidebarMenuButton, null,
// //                           createElement(item.icon),
// //                           createElement("span", null, item.label)
// //                         )
// //                       )
// //                     )
// //                   )
// //                 )
// //               )
// //             )
// //           )
// //         )
// //       )
// //     )
// //   )
// // }
// "use client";

// import React, { createElement, useState } from "react";
// import {
//   ChevronRight,
//   PieChart,
//   BookOpen,
//   Check,
//   BookMarked,
//   Clock,
//   XCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button.jsx";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover.jsx";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet.jsx";
// import { Progress } from "@/components/ui/progress.jsx";

// // Sample score data
// const scoreData = {
//   overall: 35,
//   sections: [
//     { 
//       name: "Biology", 
//       score: 42, 
//       questions: 50, 
//       completed: 35,
//       correct: 15,
//       color: "#10b981" // emerald
//     },
//     { 
//       name: "Chemistry", 
//       score: 28, 
//       questions: 40, 
//       completed: 25,
//       correct: 7,
//       color: "#8b5cf6" // violet
//     },
//     { 
//       name: "Physics", 
//       score: 35, 
//       questions: 45, 
//       completed: 30,
//       correct: 10,
//       color: "#0ea5e9" // sky
//     },
//   ],
//   recentActivity: [
//     { action: "Completed", section: "Biology Quiz 3", time: "2 hours ago", icon: Check, color: "#10b981" },
//     { action: "Started", section: "Chemistry Module 2", time: "Yesterday", icon: BookOpen, color: "#8b5cf6" },
//     { action: "Failed", section: "Physics Challenge", time: "3 days ago", icon: XCircle, color: "#ef4444" },
//   ]
// };

// export function NavActions() {
//   const [isScoreSheetOpen, setIsScoreSheetOpen] = useState(false);
  
//   return createElement("div",
//     { className: "flex items-center gap-2 text-sm" },
    
//     // Score percentage button
//     createElement(Popover, 
//       {
//         open: isScoreSheetOpen,
//         onOpenChange: setIsScoreSheetOpen
//       },
//       createElement(PopoverTrigger,
//         { asChild: true },
//         createElement("button", 
//           { 
//             className: "flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 font-medium text-sm transition-colors" 
//           },
//           createElement("div", { className: "flex items-center gap-1" },
//             createElement(PieChart, { className: "h-4 w-4 text-blue-600" }),
//             createElement("span", { className: "font-semibold" }, `${scoreData.overall}%`),
//           ),
//           createElement(ChevronRight, { className: "h-3 w-3 text-gray-400" })
//         )
//       ),
      
//       // Score details sheet
//       createElement(Sheet, 
//         {
//           open: isScoreSheetOpen,
//           onOpenChange: setIsScoreSheetOpen
//         },
//         createElement(SheetContent, 
//           { className: "w-full sm:max-w-md overflow-y-auto" },
//           createElement(SheetHeader, 
//             { className: "mb-4 border-b pb-4" },
//             createElement(SheetTitle, 
//               { className: "text-xl font-bold" },
//               "Performance Dashboard"
//             )
//           ),
          
//           // Overall score
//           createElement("div", 
//             { className: "mb-8" },
//             createElement("h3", 
//               { className: "text-sm font-medium mb-3" },
//               "Overall Performance"
//             ),
//             createElement("div", 
//               { className: "flex items-center justify-between mb-2" },
//               createElement("span", { className: "text-sm" }, "Average score"),
//               createElement("span", { className: "text-2xl font-bold text-blue-600" }, `${scoreData.overall}%`)
//             ),
//             createElement(Progress, 
//               { 
//                 value: scoreData.overall,
//                 className: "h-2 bg-gray-100"
//               }
//             ),
//             createElement("p", 
//               { className: "text-xs text-gray-500 mt-2" },
//               "Based on all your completed assessments"
//             )
//           ),
          
//           // Section scores
//           createElement("div", 
//             { className: "mb-8" },
//             createElement("h3", 
//               { className: "text-sm font-medium mb-3" },
//               "Section Performance"
//             ),
//             createElement("div", 
//               { className: "space-y-4" },
//               scoreData.sections.map((section, index) => 
//                 createElement("div", 
//                   { key: index, className: "rounded-lg border p-3" },
//                   createElement("div", 
//                     { className: "flex justify-between items-center mb-2" },
//                     createElement("h4", { className: "font-medium" }, section.name),
//                     createElement("span", 
//                       { 
//                         className: "font-semibold",
//                         style: { color: section.color } 
//                       }, 
//                       `${section.score}%`
//                     )
//                   ),
//                   createElement(Progress, 
//                     { 
//                       value: section.score,
//                       className: "h-1.5 mb-2",
//                       style: { 
//                         backgroundColor: "rgba(229, 231, 235, 0.5)"
//                       },
//                       indicatorStyle: {
//                         backgroundColor: section.color
//                       }
//                     }
//                   ),
//                   createElement("div", 
//                     { className: "grid grid-cols-3 gap-2 text-xs text-gray-500 mt-3" },
//                     createElement("div", null, 
//                       createElement("div", { className: "font-medium text-gray-700" }, section.questions),
//                       createElement("div", null, "Questions")
//                     ),
//                     createElement("div", null, 
//                       createElement("div", { className: "font-medium text-gray-700" }, section.completed),
//                       createElement("div", null, "Attempted")
//                     ),
//                     createElement("div", null, 
//                       createElement("div", { className: "font-medium text-gray-700" }, section.correct),
//                       createElement("div", null, "Correct")
//                     )
//                   )
//                 )
//               )
//             )
//           ),
          
//           // Recent activity
//           createElement("div", 
//             { className: "mb-4" },
//             createElement("h3", 
//               { className: "text-sm font-medium mb-3" },
//               "Recent Activity"
//             ),
//             createElement("div", 
//               { className: "space-y-3" },
//               scoreData.recentActivity.map((activity, index) => 
//                 createElement("div", 
//                   { 
//                     key: index, 
//                     className: "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50" 
//                   },
//                   createElement("div", 
//                     { 
//                       className: "flex items-center justify-center size-8 rounded-full",
//                       style: { backgroundColor: `${activity.color}15` }
//                     },
//                     createElement(activity.icon, { 
//                       className: "size-4",
//                       style: { color: activity.color }
//                     })
//                   ),
//                   createElement("div", 
//                     { className: "flex-1" },
//                     createElement("div", 
//                       { className: "flex items-center gap-1" },
//                       createElement("span", 
//                         { 
//                           className: "text-sm font-medium",
//                           style: { color: activity.color }
//                         }, 
//                         activity.action
//                       ),
//                       createElement("span", { className: "text-sm" }, activity.section)
//                     ),
//                     createElement("div", 
//                       { className: "flex items-center gap-1 text-xs text-gray-500" },
//                       createElement(Clock, { className: "size-3" }),
//                       activity.time
//                     )
//                   )
//                 )
//               )
//             )
//           ),
          
//           // Action buttons
//           createElement("div", 
//             { className: "mt-6 grid grid-cols-2 gap-2" },
//             createElement(Button, 
//               { variant: "outline", className: "w-full" },
//               createElement(BookOpen, { className: "mr-2 size-4" }),
//               "Study Plan"
//             ),
//             createElement(Button, 
//               { className: "w-full" },
//               createElement(BookMarked, { className: "mr-2 size-4" }),
//               "Practice Tests"
//             )
//           )
//         )
//       )
//     ),
    
//     // Upgrade button with gradient (last)
//     createElement("a",
//       { 
//         href: "/pricing"
//       },
//       createElement("button", 
//         { 
//           className: "text-xs font-medium px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all" 
//         },
//         "Upgrade"
//       )
//     )
//   );
// }
"use client";

import React, { createElement, useState } from "react";
import {
  ChevronRight,
  PieChart,
  BookOpen,
  Check,
  BookMarked,
  Clock,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { SidePrice } from "./SidePrice.js";

// Sample score data
const scoreData = {
  overall: 35,
  sections: [
    { 
      name: "Biology", 
      score: 42, 
      questions: 50, 
      completed: 35,
      correct: 15,
      color: "#10b981" // emerald
    },
    { 
      name: "Chemistry", 
      score: 28, 
      questions: 40, 
      completed: 25,
      correct: 7,
      color: "#8b5cf6" // violet
    },
    { 
      name: "Physics", 
      score: 35, 
      questions: 45, 
      completed: 30,
      correct: 10,
      color: "#0ea5e9" // sky
    },
  ],
  recentActivity: [
    { action: "Completed", section: "Biology Quiz 3", time: "2 hours ago", icon: Check, color: "#10b981" },
    { action: "Started", section: "Chemistry Module 2", time: "Yesterday", icon: BookOpen, color: "#8b5cf6" },
    { action: "Failed", section: "Physics Challenge", time: "3 days ago", icon: XCircle, color: "#ef4444" },
  ]
};

export function NavActions() {
  const [isScoreSheetOpen, setIsScoreSheetOpen] = useState(false);
  
  return createElement("div",
    { className: "flex items-center gap-2 text-sm" },
    
    // Score percentage button
    createElement(Popover, 
      {
        open: isScoreSheetOpen,
        onOpenChange: setIsScoreSheetOpen
      },
      createElement(PopoverTrigger,
        { asChild: true },
        createElement("button", 
          { 
            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 font-medium text-sm transition-colors" 
          },
          createElement("div", { className: "flex items-center gap-1" },
            createElement(PieChart, { className: "h-4 w-4 text-blue-600" }),
            createElement("span", { className: "font-semibold" }, `${scoreData.overall}%`),
          ),
          createElement(ChevronRight, { className: "h-3 w-3 text-gray-400" })
        )
      ),
      
      // Score details sheet
      createElement(Sheet, 
        {
          open: isScoreSheetOpen,
          onOpenChange: setIsScoreSheetOpen
        },
        createElement(SheetContent, 
          { className: "w-full sm:max-w-md overflow-y-auto" },
          createElement(SheetHeader, 
            { className: "mb-4 border-b pb-4" },
            createElement(SheetTitle, 
              { className: "text-xl font-bold" },
              "Performance Dashboard"
            )
          ),
          
          // Overall score
          createElement("div", 
            { className: "mb-8" },
            createElement("h3", 
              { className: "text-sm font-medium mb-3" },
              "Overall Performance"
            ),
            createElement("div", 
              { className: "flex items-center justify-between mb-2" },
              createElement("span", { className: "text-sm" }, "Average score"),
              createElement("span", { className: "text-2xl font-bold text-blue-600" }, `${scoreData.overall}%`)
            ),
            createElement(Progress, 
              { 
                value: scoreData.overall,
                className: "h-2 bg-gray-100"
              }
            ),
            createElement("p", 
              { className: "text-xs text-gray-500 mt-2" },
              "Based on all your completed assessments"
            )
          ),
          
          // Section scores
          createElement("div", 
            { className: "mb-8" },
            createElement("h3", 
              { className: "text-sm font-medium mb-3" },
              "Section Performance"
            ),
            createElement("div", 
              { className: "space-y-4" },
              scoreData.sections.map((section, index) => 
                createElement("div", 
                  { key: index, className: "rounded-lg border p-3" },
                  createElement("div", 
                    { className: "flex justify-between items-center mb-2" },
                    createElement("h4", { className: "font-medium" }, section.name),
                    createElement("span", 
                      { 
                        className: "font-semibold",
                        style: { color: section.color } 
                      }, 
                      `${section.score}%`
                    )
                  ),
                  createElement(Progress, 
                    { 
                      value: section.score,
                      className: "h-1.5 mb-2",
                      style: { 
                        backgroundColor: "rgba(229, 231, 235, 0.5)"
                      },
                      indicatorStyle: {
                        backgroundColor: section.color
                      }
                    }
                  ),
                  createElement("div", 
                    { className: "grid grid-cols-3 gap-2 text-xs text-gray-500 mt-3" },
                    createElement("div", null, 
                      createElement("div", { className: "font-medium text-gray-700" }, section.questions),
                      createElement("div", null, "Questions")
                    ),
                    createElement("div", null, 
                      createElement("div", { className: "font-medium text-gray-700" }, section.completed),
                      createElement("div", null, "Attempted")
                    ),
                    createElement("div", null, 
                      createElement("div", { className: "font-medium text-gray-700" }, section.correct),
                      createElement("div", null, "Correct")
                    )
                  )
                )
              )
            )
          ),
          
          // Recent activity
          createElement("div", 
            { className: "mb-4" },
            createElement("h3", 
              { className: "text-sm font-medium mb-3" },
              "Recent Activity"
            ),
            createElement("div", 
              { className: "space-y-3" },
              scoreData.recentActivity.map((activity, index) => 
                createElement("div", 
                  { 
                    key: index, 
                    className: "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50" 
                  },
                  createElement("div", 
                    { 
                      className: "flex items-center justify-center size-8 rounded-full",
                      style: { backgroundColor: `${activity.color}15` }
                    },
                    createElement(activity.icon, { 
                      className: "size-4",
                      style: { color: activity.color }
                    })
                  ),
                  createElement("div", 
                    { className: "flex-1" },
                    createElement("div", 
                      { className: "flex items-center gap-1" },
                      createElement("span", 
                        { 
                          className: "text-sm font-medium",
                          style: { color: activity.color }
                        }, 
                        activity.action
                      ),
                      createElement("span", { className: "text-sm" }, activity.section)
                    ),
                    createElement("div", 
                      { className: "flex items-center gap-1 text-xs text-gray-500" },
                      createElement(Clock, { className: "size-3" }),
                      activity.time
                    )
                  )
                )
              )
            )
          ),
          
          // Action buttons
          createElement("div", 
            { className: "mt-6 grid grid-cols-2 gap-2" },
            createElement(Button, 
              { variant: "outline", className: "w-full" },
              createElement(BookOpen, { className: "mr-2 size-4" }),
              "Study Plan"
            ),
            createElement(Button, 
              { className: "w-full" },
              createElement(BookMarked, { className: "mr-2 size-4" }),
              "Practice Tests"
            )
          )
        )
      )
    ),
    
    // Upgrade button with SidePrice component
    createElement(SidePrice)
  );
}
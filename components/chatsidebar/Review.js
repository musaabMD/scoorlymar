"use client";

import React, { createElement, useState } from "react";
import {
  BookOpenCheck,
  Flag,
  XCircle,
  CheckCircle,
  ChevronRight,
  Clock,
  BarChart2,
  Filter,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.jsx";
import { Label } from "@/components/ui/label.jsx";

// Sample MCQ data
const sampleMCQs = [
  {
    id: 1,
    question: "Which of the following is a characteristic of living organisms?",
    options: [
      "A. Ability to conduct electricity",
      "B. Ability to reproduce",
      "C. Ability to dissolve in water",
      "D. Ability to reflect light"
    ],
    correctAnswer: "B",
    userAnswer: "B",
    status: "correct",
    flagged: false,
    subject: "Biology",
    topic: "Characteristics of Life",
    timestamp: "2 days ago"
  },
  {
    id: 2,
    question: "What is the chemical formula for glucose?",
    options: [
      "A. C6H12O6",
      "B. C12H22O11",
      "C. CO2",
      "D. H2O"
    ],
    correctAnswer: "A",
    userAnswer: "B",
    status: "incorrect",
    flagged: true,
    subject: "Chemistry",
    topic: "Carbohydrates",
    timestamp: "1 day ago"
  },
  {
    id: 3,
    question: "Which force keeps planets in orbit around the sun?",
    options: [
      "A. Electromagnetic force",
      "B. Strong nuclear force",
      "C. Gravitational force",
      "D. Weak nuclear force"
    ],
    correctAnswer: "C",
    userAnswer: "C",
    status: "correct",
    flagged: false,
    subject: "Physics",
    topic: "Newton's Laws",
    timestamp: "3 days ago"
  },
  {
    id: 4,
    question: "Which hormone regulates blood glucose levels?",
    options: [
      "A. Estrogen",
      "B. Testosterone",
      "C. Insulin",
      "D. Growth hormone"
    ],
    correctAnswer: "C",
    userAnswer: "D",
    status: "incorrect",
    flagged: true,
    subject: "Biology",
    topic: "Endocrine System",
    timestamp: "4 hours ago"
  },
  {
    id: 5,
    question: "What is the value of π (pi) to two decimal places?",
    options: [
      "A. 3.14",
      "B. 3.16",
      "C. 3.12",
      "D. 3.18"
    ],
    correctAnswer: "A",
    userAnswer: "A",
    status: "correct",
    flagged: false,
    subject: "Mathematics",
    topic: "Constants",
    timestamp: "1 week ago"
  }
];

// Generate more sample questions to have a total of 23
for (let i = 6; i <= 23; i++) {
  const isCorrect = Math.random() > 0.4;
  sampleMCQs.push({
    id: i,
    question: `Sample question #${i} for testing pagination`,
    options: [
      "A. Option A",
      "B. Option B",
      "C. Option C",
      "D. Option D"
    ],
    correctAnswer: "A",
    userAnswer: isCorrect ? "A" : "B",
    status: isCorrect ? "correct" : "incorrect",
    flagged: Math.random() > 0.8,
    subject: ["Biology", "Chemistry", "Physics", "Mathematics"][Math.floor(Math.random() * 4)],
    topic: "Sample Topic",
    timestamp: "Recently"
  });
}

export function Review() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMCQ, setSelectedMCQ] = useState(null);
  
  // Count totals
  const counts = {
    all: sampleMCQs.length,
    flagged: sampleMCQs.filter(q => q.flagged).length,
    incorrect: sampleMCQs.filter(q => q.status === "incorrect").length,
    correct: sampleMCQs.filter(q => q.status === "correct").length
  };
  
  // Filter MCQs based on active tab
  const getFilteredMCQs = () => {
    switch (activeTab) {
      case "flagged":
        return sampleMCQs.filter(q => q.flagged);
      case "incorrect":
        return sampleMCQs.filter(q => q.status === "incorrect");
      case "correct":
        return sampleMCQs.filter(q => q.status === "correct");
      default:
        return sampleMCQs;
    }
  };
  
  const handleTabChange = (value) => {
    setActiveTab(value);
    setSelectedMCQ(null);
  };
  
  const handleOpenReview = () => {
    setIsReviewOpen(true);
  };
  
  const handleSelectMCQ = (mcq) => {
    setSelectedMCQ(mcq);
  };
  
  const statusIcons = {
    correct: CheckCircle,
    incorrect: XCircle,
    flagged: Flag
  };
  
  const statusColors = {
    correct: "text-green-600",
    incorrect: "text-red-600",
    flagged: "text-amber-500"
  };
  
  return createElement(React.Fragment, null,
    // Review button
    createElement("button", 
      { 
        className: "flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 font-medium text-sm transition-colors",
        onClick: handleOpenReview
      },
      createElement(BookOpenCheck, { className: "h-4 w-4 text-blue-600" }),
      createElement("span", { className: "font-semibold" }, "Review"),
      createElement(ChevronRight, { className: "h-3 w-3 text-gray-400" })
    ),
    
    // Review Sheet
    createElement(Sheet, {
      open: isReviewOpen,
      onOpenChange: setIsReviewOpen
    },
      createElement(SheetContent, {
        side: "right",
        className: "w-full sm:max-w-md md:max-w-xl lg:max-w-3xl overflow-hidden p-0"
      },
        createElement("div", { className: "h-full flex flex-col" },
          createElement(SheetHeader, {
            className: "px-6 pt-6 pb-4 border-b"
          },
            createElement(SheetTitle, {
              className: "text-2xl font-bold"
            }, "Review Questions")
          ),
          
          createElement(Tabs, {
            defaultValue: "all",
            value: activeTab,
            onValueChange: handleTabChange,
            className: "h-full flex flex-col"
          },
            // Tabs List - Centered
            createElement("div", { className: "flex justify-center border-b" },
              createElement(TabsList, {
                className: "my-2"
              },
                createElement(TabsTrigger, { 
                  value: "all",
                  className: "flex items-center gap-2"
                }, 
                  "All",
                  createElement(Badge, { variant: "secondary" }, counts.all)
                ),
                createElement(TabsTrigger, { 
                  value: "flagged",
                  className: "flex items-center gap-2"
                }, 
                  createElement(Flag, { className: "h-3.5 w-3.5" }),
                  "Flagged",
                  createElement(Badge, { variant: "secondary" }, counts.flagged)
                ),
                createElement(TabsTrigger, { 
                  value: "incorrect",
                  className: "flex items-center gap-2"
                }, 
                  createElement(XCircle, { className: "h-3.5 w-3.5" }),
                  "Incorrect",
                  createElement(Badge, { variant: "secondary" }, counts.incorrect)
                ),
                createElement(TabsTrigger, { 
                  value: "correct",
                  className: "flex items-center gap-2"
                }, 
                  createElement(CheckCircle, { className: "h-3.5 w-3.5" }),
                  "Correct",
                  createElement(Badge, { variant: "secondary" }, counts.correct)
                )
              )
            ),
            
            // Tab content with split view 
            createElement("div", { className: "flex-1 flex overflow-hidden" },
              // Question list (left side)
              createElement("div", { 
                className: `w-full ${selectedMCQ ? "hidden md:block md:w-2/5" : "w-full"} border-r`
              },
                createElement("div", { className: "p-4 border-b flex items-center justify-between" },
                  createElement("h3", { className: "font-medium text-sm" }, 
                    `Showing ${getFilteredMCQs().length} Questions`
                  ),
                  createElement(Button, { 
                    variant: "outline",
                    size: "sm",
                    className: "flex items-center gap-1"
                  },
                    createElement(Filter, { className: "h-3.5 w-3.5" }),
                    "Filter"
                  )
                ),
                createElement(ScrollArea, { className: "h-[calc(100vh-12rem)]" },
                  createElement("div", { className: "divide-y" },
                    getFilteredMCQs().map((mcq) => 
                      createElement("div", { 
                        key: mcq.id,
                        className: `p-4 hover:bg-gray-50 cursor-pointer ${selectedMCQ?.id === mcq.id ? "bg-blue-50" : ""}`,
                        onClick: () => handleSelectMCQ(mcq)
                      },
                        createElement("div", { className: "flex justify-between items-start mb-2" },
                          createElement("div", { className: "text-sm font-medium line-clamp-2 pr-2" }, 
                            mcq.question
                          ),
                          createElement("div", { className: "flex items-center gap-1 shrink-0" },
                            mcq.flagged && createElement(Flag, { 
                              className: "h-4 w-4 text-amber-500" 
                            }),
                            createElement(statusIcons[mcq.status], { 
                              className: `h-5 w-5 ${statusColors[mcq.status]}` 
                            })
                          )
                        ),
                        createElement("div", { className: "flex items-center justify-between text-xs text-gray-500" },
                          createElement("div", { className: "flex items-center gap-1" },
                            createElement(BarChart2, { className: "h-3.5 w-3.5" }),
                            mcq.subject
                          ),
                          createElement("div", { className: "flex items-center gap-1" },
                            createElement(Clock, { className: "h-3.5 w-3.5" }),
                            mcq.timestamp
                          )
                        )
                      )
                    )
                  )
                )
              ),
              
              // Question details (right side)
              selectedMCQ && createElement("div", { 
                className: "w-full md:w-3/5 p-6 overflow-auto"
              },
                createElement("div", { className: "md:hidden mb-4" },
                  createElement(Button, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setSelectedMCQ(null)
                  }, "← Back to list")
                ),
                createElement("div", { className: "flex items-center gap-2 mb-6" },
                  createElement(Badge, {
                    variant: selectedMCQ.status === "correct" ? "success" : "destructive",
                    className: selectedMCQ.status === "correct" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }, selectedMCQ.status === "correct" ? "Correct" : "Incorrect"),
                  selectedMCQ.flagged && createElement(Badge, {
                    variant: "outline",
                    className: "bg-amber-100 text-amber-800 border-amber-300"
                  }, "Flagged")
                ),
                createElement("h2", { className: "text-lg font-medium mb-6" },
                  selectedMCQ.question
                ),
                createElement(RadioGroup, {
                  defaultValue: selectedMCQ.userAnswer,
                  className: "space-y-3"
                },
                  selectedMCQ.options.map((option, index) => {
                    const optionLabel = option.split('.')[0];
                    const optionText = option.split('.').slice(1).join('.').trim();
                    const isCorrect = optionLabel === selectedMCQ.correctAnswer;
                    const isUserSelected = optionLabel === selectedMCQ.userAnswer;
                    
                    return createElement("div", {
                      key: index,
                      className: `flex items-start space-x-3 rounded-lg border p-4 ${
                        isCorrect ? "border-green-300 bg-green-50" : 
                        (isUserSelected && !isCorrect) ? "border-red-300 bg-red-50" : 
                        "border-gray-200"
                      }`
                    },
                      createElement(RadioGroupItem, {
                        value: optionLabel,
                        id: `option-${selectedMCQ.id}-${optionLabel}`,
                        disabled: true,
                        checked: isUserSelected,
                        className: isCorrect ? "text-green-600" : (isUserSelected ? "text-red-600" : "")
                      }),
                      createElement(Label, {
                        htmlFor: `option-${selectedMCQ.id}-${optionLabel}`,
                        className: "flex-1 cursor-pointer font-normal"
                      },
                        createElement("div", { className: "flex items-start justify-between" },
                          createElement("div", null,
                            createElement("span", { 
                              className: "font-semibold mr-2",
                            }, 
                              optionLabel + "."
                            ),
                            optionText
                          ),
                          isCorrect && createElement(CheckCircle, { className: "h-5 w-5 text-green-600 shrink-0" }),
                          (isUserSelected && !isCorrect) && createElement(XCircle, { className: "h-5 w-5 text-red-600 shrink-0" })
                        )
                      )
                    );
                  })
                ),
                
                // Explanation section
                createElement("div", { className: "mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100" },
                  createElement("h3", { className: "font-semibold mb-2" }, "Explanation"),
                  createElement("p", { className: "text-sm text-gray-700" },
                    selectedMCQ.status === "correct"
                      ? "Great job! You answered this question correctly."
                      : "This question was answered incorrectly. The correct answer is " + 
                        selectedMCQ.correctAnswer + ". " +
                        selectedMCQ.correctAnswer === "A" ? "Glucose has the chemical formula C6H12O6." 
                        : selectedMCQ.correctAnswer === "C" ? "Gravitational force keeps planets in orbit around the sun."
                        : selectedMCQ.correctAnswer === "B" ? "Reproduction is a key characteristic of living organisms."
                        : "Insulin is the hormone that regulates blood glucose levels."
                  )
                ),
                
                // Action buttons
                createElement("div", { className: "mt-6 flex gap-3" },
                  createElement(Button, {
                    variant: "outline",
                    className: "flex-1"
                  }, 
                    "Similar Questions"
                  ),
                  createElement(Button, {
                    className: "flex-1"
                  },
                    selectedMCQ.flagged ? "Remove Flag" : "Flag Question"
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
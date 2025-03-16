"use client"
import React, { createElement, useEffect, useState } from 'react'
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
import { Review } from "@/components/chatsidebar/Review.js"
import { MockTests } from "@/components/chatsidebar/MockTests.js"

function Page() {
  // State to track the current exam
  const [currentExam, setCurrentExam] = useState({ name: "Loading..." });
  // State to track if review should be shown
  const [showReview, setShowReview] = useState(false);
  const [showMockTests, setShowMockTests] = useState(false);

  // Listen for custom event from TeamSwitcher
  useEffect(() => {
    const handleExamChange = (event) => {
      setCurrentExam(event.detail);
    };

    // Add event listener
    window.addEventListener('examChanged', handleExamChange);
    
    // Listen for review button click from sidebar
    const handleReviewClick = () => {
      setShowReview(true);
    };
    window.addEventListener('showReview', handleReviewClick);

    // Listen for mock tests button click
    const handleMockTestsClick = () => {
      setShowMockTests(true);
    };
    window.addEventListener('showMockTests', handleMockTestsClick);

    // Listen for generated mock tests
    const handleMockTestGenerated = (event) => {
      const mockTest = event.detail;
      // Handle the new mock test - you can store it in state or send to backend
      console.log('New mock test generated:', mockTest);
    };
    window.addEventListener('mockTestGenerated', handleMockTestGenerated);

    // Clean up
    return () => {
      window.removeEventListener('examChanged', handleExamChange);
      window.removeEventListener('showReview', handleReviewClick);
      window.removeEventListener('showMockTests', handleMockTestsClick);
      window.removeEventListener('mockTestGenerated', handleMockTestGenerated);
    };
  }, []);

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
                }, "Scoorly")
              ),
              createElement(BreadcrumbSeparator, { className: "hidden md:block" }),
              createElement(BreadcrumbItem, {},
                createElement(BreadcrumbPage, {}, currentExam.name)
              )
            )
          )
        ),
        createElement(NavActions)
      ),
      createElement("div", {
        className: "flex flex-1 flex-col gap-4 p-4 pt-0"
      },
        showMockTests ? createElement(MockTests, {
          onClose: () => setShowMockTests(false)
        }) :
        showReview ? createElement(Review, {
          inMainContent: true,
          onClose: () => setShowReview(false)
        }) :
        // Show default content when showReview is false
        createElement(React.Fragment, {},
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
  )
}

export default Page
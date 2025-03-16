"use client";

import React, { createElement, useState } from "react";
import {
  Check,
  CreditCard,
  Gem,
  Shield,
  Zap,
  Award,
  BookOpen,
  Clock,
  BarChart3,
  Smartphone,
  Timer,
  Monitor,
  LineChart,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";

// Pricing plans data
const plans = [
  {
    name: "Free",
    description: "Basic exam preparation",
    price: {
      value: 0,
      label: "Free Forever"
    },
    icon: Shield,
    iconClass: "bg-gray-100 text-gray-600",
    features: [
      "Limited questions per exam",
      "Basic performance analytics",
      "Exam-like UI experience",
      "Find weakest subject",
      "Mobile & Web access",
      "Timed exams",
    ],
    buttonText: "Continue with Free",
    buttonVariant: "outline",
  },
  {
    name: "Monthly",
    description: "Recurring subscription",
    price: {
      value: 20,
      label: "/month"
    },
    icon: Zap,
    iconClass: "bg-blue-100 text-blue-600",
    features: [
      "All Free features",
      "Unlimited questions",
      "Performance by subject",
      "Review mode (bookmarked, wrong)",
      "Study mode for learning",
      "Comprehensive analytics",
      "Priority support",
    ],
    buttonText: "Subscribe Monthly",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Lifetime",
    description: "One-time payment",
    price: {
      value: 99,
      label: "one-time"
    },
    icon: Gem,
    iconClass: "bg-purple-100 text-purple-600",
    features: [
      "Everything in Monthly plan",
      "No recurring charges",
      "Lifetime updates",
      "Unlimited mock exams",
      "Preparation with 1000s of questions",
      "Don't memorize, understand approach",
      "Premium study materials",
    ],
    buttonText: "Purchase Lifetime",
    buttonVariant: "default",
  }
];

// Feature explanation details
const featureDetails = {
  "Unlimited questions": "Access our complete database of exam questions with no restrictions",
  "Performance by subject": "Detailed analytics showing your performance broken down by subject areas",
  "Review mode": "Easily review bookmarked questions or ones you got wrong",
  "Study mode": "Focus on learning with detailed explanations and concept breakdowns",
  "Mock exams": "Take unlimited full-length practice exams simulating the real testing experience",
  "Don't memorize understand": "Our system focuses on helping you understand concepts rather than memorizing answers",
  "Timed exams": "Practice under timed conditions just like the real exam",
  "Find Weakest Subject": "AI-powered analysis to identify and prioritize your weakest areas",
};

export function SidePrice() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  
  // Function to handle upgrade button click
  const handleOpenPricing = () => {
    setIsPricingOpen(true);
  };

  return createElement(React.Fragment, null,
    // Upgrade button
    createElement("button", 
      { 
        className: "text-xs font-medium px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all",
        onClick: handleOpenPricing
      },
      "Upgrade"
    ),
    
    // Pricing Sheet
    createElement(Sheet, {
      open: isPricingOpen,
      onOpenChange: setIsPricingOpen
    },
      createElement(SheetContent, {
        side: "right",
        className: "w-full sm:max-w-md md:max-w-xl lg:max-w-2xl overflow-y-auto p-0"
      },
        createElement("div", { className: "h-full flex flex-col" },
          createElement(SheetHeader, {
            className: "text-left px-6 pt-6 pb-4 border-b"
          },
            createElement(SheetTitle, {
              className: "text-2xl font-bold"
            }, "Upgrade Your Learning Experience"),
            createElement("p", { className: "text-gray-500 mt-2 text-sm" },
              "Choose the perfect plan for your exam preparation needs"
            )
          ),

          createElement("div", { className: "flex-1 overflow-y-auto px-6 py-6" },
            // Vertical layout for plans
            createElement("div", { className: "space-y-6" },
              plans.map((plan, index) => 
                createElement("div", { 
                  key: index,
                  className: `relative flex flex-col md:flex-row rounded-xl border p-5 ${plan.popular ? "border-blue-200 bg-blue-50/50" : "border-gray-200"}`,
                },
                  plan.popular && createElement("div", { 
                    className: "absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white"
                  }, "Most Popular"),
                  
                  // Plan header section (left side on desktop)
                  createElement("div", { className: "md:w-1/3 pr-0 md:pr-6 mb-4 md:mb-0 md:border-r" },
                    createElement("div", { className: "mb-4 flex items-center gap-3" },
                      createElement("div", { 
                        className: `rounded-lg p-2 ${plan.iconClass}`
                      },
                        createElement(plan.icon, { className: "h-5 w-5" })
                      ),
                      createElement("h3", { className: "font-semibold text-lg" }, plan.name)
                    ),
                    createElement("p", { className: "text-sm text-muted-foreground mb-4" }, plan.description),
                    createElement("div", { className: "mb-6" },
                      createElement("div", { className: "flex items-baseline gap-1" },
                        createElement("span", { className: "text-3xl font-bold" }, 
                          plan.price.value === 0 ? "Free" : `$${plan.price.value}`
                        ),
                        plan.price.value > 0 && createElement("span", { className: "text-muted-foreground" },
                          plan.price.label
                        )
                      )
                    ),
                    createElement(Button, { 
                      variant: plan.buttonVariant,
                      className: "w-full",
                    },
                      plan.name !== "Free" && createElement(CreditCard, { className: "mr-2 h-4 w-4" }),
                      plan.buttonText
                    )
                  ),
                  
                  // Features section (right side on desktop)
                  createElement("div", { className: "md:w-2/3 md:pl-6" },
                    createElement("h4", { className: "font-medium text-sm mb-3 text-gray-500" }, "Features included:"),
                    createElement("ul", { className: "space-y-2 text-sm" },
                      plan.features.map((feature, featureIndex) => 
                        createElement("li", { 
                          key: featureIndex,
                          className: "flex items-start gap-2"
                        },
                          createElement(Check, { className: "h-4 w-4 mt-0.5 text-green-600 shrink-0" }),
                          createElement("span", { className: "text-gray-700" }, feature)
                        )
                      )
                    )
                  )
                )
              )
            ),
            
            // Feature highlights section
            createElement("div", { className: "mt-10 border-t pt-8" },
              createElement("h3", { className: "text-lg font-semibold mb-6" }, "Why Choose Scoorly?"),
              
              createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                [
                  {
                    icon: BookOpen,
                    title: "Don't Memorize, Understand",
                    description: "Our approach focuses on concept mastery, not just memorization of answers"
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Analytics",
                    description: "Track your progress with detailed performance metrics by subject area"
                  },
                  {
                    icon: Clock,
                    title: "Timed Exam Practice",
                    description: "Practice under realistic time constraints with our exam-like interface"
                  },
                  {
                    icon: Smartphone,
                    title: "Access Anywhere",
                    description: "Study on any device with our responsive web and mobile interfaces"
                  },
                  {
                    icon: LineChart,
                    title: "Find Your Weakest Areas",
                    description: "AI-powered analysis identifies your knowledge gaps for targeted study"
                  },
                  {
                    icon: Timer,
                    title: "Unlimited Mock Exams",
                    description: "Take as many full-length practice exams as you need with lifetime access"
                  }
                ].map((feature, index) => 
                  createElement("div", { 
                    key: index,
                    className: "flex items-start gap-3"
                  },
                    createElement("div", { 
                      className: "rounded-lg p-2 bg-blue-50 text-blue-600 mt-1"
                    },
                      createElement(feature.icon, { className: "h-5 w-5" })
                    ),
                    createElement("div", null,
                      createElement("h4", { className: "font-semibold mb-1" }, feature.title),
                      createElement("p", { className: "text-sm text-muted-foreground" }, feature.description)
                    )
                  )
                )
              )
            ),
            
            // Trust indicators
            createElement("div", { className: "mt-10 pt-6 border-t" },
              createElement("div", { className: "flex items-center justify-center gap-6 flex-wrap" },
                [
                  { icon: Shield, text: "Secure Payment" },
                  { icon: Award, text: "30-Day Money-Back Guarantee" },
                  { icon: Monitor, text: "Exam-Like Interface" }
                ].map((item, index) => 
                  createElement("div", { 
                    key: index,
                    className: "flex items-center gap-2 text-sm text-muted-foreground"
                  },
                    createElement(item.icon, { className: "h-4 w-4" }),
                    createElement("span", null, item.text)
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
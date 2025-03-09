// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Check, Clock, GraduationCap, CreditCard, Shield, Zap, Award, LogIn, UserPlus, ChevronRight, Gift } from 'lucide-react';

// // Header Component
// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
//         {/* Logo and App Name */}
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
//             <GraduationCap className="text-white" size={20} strokeWidth={2} />
//           </div>
//           <span className="text-xl font-bold text-gray-900">Scoorly</span>
//         </Link>
        
//         {/* Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
//             Exams
//           </Link>
//           <Link href="/signin" className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
//             <LogIn size={18} className="mr-1" />
//             Sign In
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// // Sample exam data for display purposes
// const sampleExams = [
//   { id: 1, name: "USMLE Step 1", category: "Medical" },
//   { id: 2, name: "NCLEX-RN", category: "Nursing" },
//   { id: 3, name: "PMP Certification", category: "Project Management" },
//   { id: 4, name: "CompTIA A+", category: "IT" },
//   { id: 5, name: "CPA Exam", category: "Accounting" },
//   { id: 6, name: "AWS Solutions Architect", category: "Cloud Computing" },
// ];

// // Calculate time remaining for offer
// const calculateTimeRemaining = (endDate) => {
//   const difference = new Date(endDate) - new Date();
  
//   if (difference <= 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }
  
//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
//   return { days, hours, minutes, seconds };
// };

// const LimitedOfferPricingPage = () => {
//   // End date for the limited time offer (3 days from now)
//   const offerEndDate = new Date();
//   offerEndDate.setDate(offerEndDate.getDate() + 3);
  
//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(offerEndDate));
  
//   // Update countdown timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining(offerEndDate));
//     }, 1000); // Update every second for more urgency
    
//     return () => clearInterval(timer);
//   }, []);
  
//   return (
//     <>
//       <Header />
      
//       {/* Sticky "Limited Time" alert at the top */}
//       <div className="bg-amber-600 text-white text-center py-2 sticky top-16 z-40">
//         <div className="container mx-auto px-4 flex items-center justify-center">
//           <Clock className="mr-2" size={18} />
//           <span className="font-medium">Limited time offer! Expires in: </span>
//           <div className="ml-2 font-mono font-bold">
//             {String(timeRemaining.days).padStart(2, '0')}:{String(timeRemaining.hours).padStart(2, '0')}:
//             {String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen pt-10 pb-20">
//         <div className="max-w-3xl mx-auto px-4">
//           {/* Main Offer */}
//           <div className="text-center mb-10">
//             <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
//               LIMITED TIME SPECIAL OFFER
//             </span>
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Lifetime Access to Any 3 Exams
//             </h1>
//             <p className="text-xl text-gray-600 mb-6">
//               Get unlimited access to all questions, answers, and study materials
//             </p>
            
//             {/* Price Box */}
//             <div className="bg-white rounded-xl shadow-md p-8 border border-blue-200 mb-8 max-w-lg mx-auto">
//               <div className="flex justify-center items-baseline mb-4">
//                 <span className="text-5xl font-bold text-blue-600">$59</span>
//                 <span className="ml-2 text-2xl text-gray-400 line-through">$199</span>
//                 <span className="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold">
//                   70% OFF
//                 </span>
//               </div>
              
//               <p className="text-gray-600 mb-6">One-time payment, lifetime access</p>
              
//               <Link 
//                 href="/signup" 
//                 className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 text-lg mb-4"
//               >
//                 <span className="flex items-center justify-center">
//                   <CreditCard size={20} className="mr-2" />
//                   Secure Your Lifetime Access Now
//                   <ChevronRight size={20} className="ml-2" />
//                 </span>
//               </Link>
              
//               <div className="flex items-center justify-center text-gray-500 text-sm">
//                 <Shield size={16} className="mr-1" />
//                 <span>30-day money-back guarantee</span>
//               </div>
//             </div>
            
//             <div className="text-red-600 font-medium mb-8">
//               ⚠️ After this offer expires, we'll switch to monthly subscription pricing
//             </div>
//           </div>
          
//           {/* What's Included */}
//           <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-200">
//             <h2 className="text-xl font-bold mb-4 text-center">What's Included:</h2>
            
//             <ul className="space-y-4">
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">Access to any 3 exam preparation courses</span>
//                   <p className="text-gray-600 text-sm mt-1">Choose from our complete library of professional certification exams</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">Thousands of practice questions</span>
//                   <p className="text-gray-600 text-sm mt-1">Comprehensive question bank covering all exam topics</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">Detailed answer explanations</span>
//                   <p className="text-gray-600 text-sm mt-1">Understand concepts behind each question for better retention</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">Performance tracking</span>
//                   <p className="text-gray-600 text-sm mt-1">Monitor your progress and identify weak areas</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">All future updates</span>
//                   <p className="text-gray-600 text-sm mt-1">New questions and materials added regularly at no extra cost</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
//                 <div>
//                   <span className="font-medium">Mobile and desktop access</span>
//                   <p className="text-gray-600 text-sm mt-1">Study anywhere, anytime, on any device</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//           {/* Popular Exams */}
//           <div className="mb-10">
//             <h2 className="text-xl font-bold mb-4 text-center">Popular Exam Preparations</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {sampleExams.map(exam => (
//                 <div key={exam.id} className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition">
//                   <h3 className="font-medium text-gray-900">{exam.name}</h3>
//                   <p className="text-sm text-gray-500">{exam.category}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-4">
//               <span className="text-sm text-gray-500">...and many more!</span>
//             </div>
//           </div>
          
//           {/* Testimonials */}
//           <div className="mb-10">
//             <h2 className="text-xl font-bold mb-6 text-center">What Our Students Say</h2>
//             <div className="grid gap-6 sm:grid-cols-2">
//               <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
//                 <div className="flex text-amber-400 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-3">"I passed my NCLEX-RN on the first try! The practice questions were incredibly similar to the actual exam."</p>
//                 <p className="font-medium text-gray-800">- Sarah K.</p>
//               </div>
//               <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
//                 <div className="flex text-amber-400 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-3">"The detailed explanations helped me understand concepts I'd been struggling with for months. Worth every penny!"</p>
//                 <p className="font-medium text-gray-800">- Michael T.</p>
//               </div>
//             </div>
//           </div>
          
//           {/* FAQ Section */}
//           <div className="mb-10">
//             <h2 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//               <div className="bg-white p-5 rounded-lg border border-gray-200">
//                 <h3 className="font-medium text-gray-900">Is this really a one-time payment?</h3>
//                 <p className="mt-2 text-gray-600">
//                   Yes! This special pre-launch offer gives you lifetime access to your selected exams for a single payment of $59. No recurring charges or hidden fees.
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-lg border border-gray-200">
//                 <h3 className="font-medium text-gray-900">Can I change my selected exams later?</h3>
//                 <p className="mt-2 text-gray-600">
//                   Yes, you can change one exam every 6 months at no additional cost. This gives you flexibility as your career goals evolve.
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-lg border border-gray-200">
//                 <h3 className="font-medium text-gray-900">When does this offer expire?</h3>
//                 <p className="mt-2 text-gray-600">
//                   This pre-launch offer is only available for a limited time as shown in the countdown timer. After that, we'll switch to a monthly subscription model.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Final CTA */}
//           <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg">
//             <Gift size={40} className="mx-auto mb-4" />
//             <h2 className="text-2xl font-bold mb-3">Secure Your Lifetime Access Today</h2>
//             <p className="mb-6 text-blue-100">Invest in your future now and never pay again</p>
//             <div className="flex justify-center items-baseline mb-4">
//               <span className="text-4xl font-bold">$59</span>
//               <span className="ml-2 text-xl text-blue-200 line-through">$199</span>
//             </div>
//             <Link 
//               href="/signup" 
//               className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-lg"
//             >
//               Get Lifetime Access Now
//             </Link>
//             <p className="mt-4 text-sm text-blue-100">
//               <Shield size={14} className="inline mr-1" />
//               30-day money-back guarantee
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LimitedOfferPricingPage;
'use client';

// Import only the icons you actually use
import { CheckCircle2, X, /* Remove unused: Zap, Award, UserPlus */ } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showCountdown, setShowCountdown] = useState(true);
  
  // Set your offer end date
  const offerEndDate = new Date("2025-05-01T00:00:00");

  // Calculate the countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = offerEndDate - now;

      if (difference <= 0) {
        setShowCountdown(false);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndDate]); // Added dependency here

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const features = {
    free: [
      { name: "5 practice exams per month", included: true },
      { name: "Basic analytics", included: true },
      { name: "Community support", included: true },
      { name: "Study notes for common topics", included: false },
      { name: "Detailed explanations", included: false },
      { name: "1-on-1 tutoring sessions", included: false },
    ],
    pro: [
      { name: "Unlimited practice exams", included: true },
      { name: "Advanced performance analytics", included: true },
      { name: "Priority email support", included: true },
      { name: "Study notes for all topics", included: true },
      { name: "Detailed explanations for all questions", included: true },
      { name: "2 hours of 1-on-1 tutoring per month", included: true },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Plans for Every Student&apos;s Journey
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that&apos;s right for your study goals and budget.
          </p>
        </div>

        {/* Limited time offer countdown timer */}
        {showCountdown && (
          <div className="mt-10 max-w-2xl mx-auto px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl text-center shadow-lg">
            <p className="text-white text-sm font-medium">
              Limited Time Offer: 25% OFF Annual Plans
            </p>
            <div className="mt-2 flex justify-center space-x-3 text-white">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{countdown.days}</span>
                <span className="text-xs">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{countdown.hours}</span>
                <span className="text-xs">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{countdown.minutes}</span>
                <span className="text-xs">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{countdown.seconds}</span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
            <p className="mt-2 text-blue-100 text-xs">
              Use code <span className="font-bold">STUDY25</span> at checkout
            </p>
          </div>
        )}

        {/* Billing toggle */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="relative bg-white p-0.5 rounded-lg flex self-center">
            <button
              type="button"
              className={`relative py-2 px-6 border border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 ${
                selectedPlan === "monthly"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`relative py-2 px-6 border border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 ${
                selectedPlan === "annual"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => handlePlanChange("annual")}
            >
              Annual billing
              <span className="absolute -top-3 -right-12 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Free plan */}
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Free</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  $0
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Perfect for beginners starting their exam preparation journey.
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-4">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      {feature.included ? (
                        <CheckCircle2
                          className="h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <X
                          className="h-6 w-6 text-gray-300"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p
                      className={`ml-3 text-base ${
                        feature.included ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/signup"
              className="mt-8 block w-full bg-gray-100 border border-gray-200 rounded-md py-3 px-4 text-center text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Start Free
            </Link>
          </div>

          {/* Pro plan */}
          <div className="relative p-8 bg-white border border-blue-200 rounded-2xl shadow-sm flex flex-col">
            <div className="absolute -top-5 left-0 right-0 mx-auto w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full px-3 py-1 text-center text-white text-sm font-semibold">
              POPULAR
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${selectedPlan === "monthly" ? "29" : "279"}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  /{selectedPlan === "monthly" ? "month" : "year"}
                </span>
              </p>
              {selectedPlan === "annual" && (
                <p className="mt-1 text-sm text-green-600 font-medium">
                  Billed annually (save ${29 * 12 - 279})
                </p>
              )}
              <p className="mt-6 text-gray-500">
                For dedicated students who want comprehensive prep materials and support.
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-4">
                {features.pro.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      {feature.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/signup"
              className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-center text-sm font-medium text-white hover:bg-blue-700"
            >
              Get Pro Access
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Can I switch between plans?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can upgrade from Free to Pro at any time. If you&apos;re on an annual plan and need to downgrade, you can do so when your current billing period ends.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Is there a student discount?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes! We offer a 15% discount for verified students. Contact our support team with your student ID to receive your discount code.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Do you offer a money-back guarantee?
              </h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We&apos;re confident you&apos;ll love Scoorly, but if you&apos;re not satisfied for any reason, we offer a 30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to ace your exams?
              </h2>
              <p className="mt-3 max-w-2xl text-blue-100">
                Join thousands of students who have improved their exam scores with Scoorly.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
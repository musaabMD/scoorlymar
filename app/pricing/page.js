"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, Clock, GraduationCap, CreditCard, Shield, Zap, Award, LogIn, UserPlus, ChevronRight, Gift } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo and App Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
            <GraduationCap className="text-white" size={20} strokeWidth={2} />
          </div>
          <span className="text-xl font-bold text-gray-900">Scoorly</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Exams
          </Link>
          <Link href="/signin" className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
            <LogIn size={18} className="mr-1" />
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

// Sample exam data for display purposes
const sampleExams = [
  { id: 1, name: "USMLE Step 1", category: "Medical" },
  { id: 2, name: "NCLEX-RN", category: "Nursing" },
  { id: 3, name: "PMP Certification", category: "Project Management" },
  { id: 4, name: "CompTIA A+", category: "IT" },
  { id: 5, name: "CPA Exam", category: "Accounting" },
  { id: 6, name: "AWS Solutions Architect", category: "Cloud Computing" },
];

// Calculate time remaining for offer
const calculateTimeRemaining = (endDate) => {
  const difference = new Date(endDate) - new Date();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};

const LimitedOfferPricingPage = () => {
  // End date for the limited time offer (3 days from now)
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 3);
  
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(offerEndDate));
  
  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(offerEndDate));
    }, 1000); // Update every second for more urgency
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      <Header />
      
      {/* Sticky "Limited Time" alert at the top */}
      <div className="bg-amber-600 text-white text-center py-2 sticky top-16 z-40">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Clock className="mr-2" size={18} />
          <span className="font-medium">Limited time offer! Expires in: </span>
          <div className="ml-2 font-mono font-bold">
            {String(timeRemaining.days).padStart(2, '0')}:{String(timeRemaining.hours).padStart(2, '0')}:
            {String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen pt-10 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Main Offer */}
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              LIMITED TIME SPECIAL OFFER
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lifetime Access to Any 3 Exams
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Get unlimited access to all questions, answers, and study materials
            </p>
            
            {/* Price Box */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-blue-200 mb-8 max-w-lg mx-auto">
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-5xl font-bold text-blue-600">$59</span>
                <span className="ml-2 text-2xl text-gray-400 line-through">$199</span>
                <span className="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold">
                  70% OFF
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">One-time payment, lifetime access</p>
              
              <Link 
                href="/signup" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 text-lg mb-4"
              >
                <span className="flex items-center justify-center">
                  <CreditCard size={20} className="mr-2" />
                  Secure Your Lifetime Access Now
                  <ChevronRight size={20} className="ml-2" />
                </span>
              </Link>
              
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Shield size={16} className="mr-1" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
            
            <div className="text-red-600 font-medium mb-8">
              ⚠️ After this offer expires, we'll switch to monthly subscription pricing
            </div>
          </div>
          
          {/* What's Included */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-center">What's Included:</h2>
            
            <ul className="space-y-4">
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Access to any 3 exam preparation courses</span>
                  <p className="text-gray-600 text-sm mt-1">Choose from our complete library of professional certification exams</p>
                </div>
              </li>
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Thousands of practice questions</span>
                  <p className="text-gray-600 text-sm mt-1">Comprehensive question bank covering all exam topics</p>
                </div>
              </li>
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Detailed answer explanations</span>
                  <p className="text-gray-600 text-sm mt-1">Understand concepts behind each question for better retention</p>
                </div>
              </li>
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Performance tracking</span>
                  <p className="text-gray-600 text-sm mt-1">Monitor your progress and identify weak areas</p>
                </div>
              </li>
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">All future updates</span>
                  <p className="text-gray-600 text-sm mt-1">New questions and materials added regularly at no extra cost</p>
                </div>
              </li>
              <li className="flex">
                <Check size={24} className="text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Mobile and desktop access</span>
                  <p className="text-gray-600 text-sm mt-1">Study anywhere, anytime, on any device</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Popular Exams */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-center">Popular Exam Preparations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sampleExams.map(exam => (
                <div key={exam.id} className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-gray-900">{exam.name}</h3>
                  <p className="text-sm text-gray-500">{exam.category}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">...and many more!</span>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-6 text-center">What Our Students Say</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"I passed my NCLEX-RN on the first try! The practice questions were incredibly similar to the actual exam."</p>
                <p className="font-medium text-gray-800">- Sarah K.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"The detailed explanations helped me understand concepts I'd been struggling with for months. Worth every penny!"</p>
                <p className="font-medium text-gray-800">- Michael T.</p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">Is this really a one-time payment?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! This special pre-launch offer gives you lifetime access to your selected exams for a single payment of $59. No recurring charges or hidden fees.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">Can I change my selected exams later?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, you can change one exam every 6 months at no additional cost. This gives you flexibility as your career goals evolve.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">When does this offer expire?</h3>
                <p className="mt-2 text-gray-600">
                  This pre-launch offer is only available for a limited time as shown in the countdown timer. After that, we'll switch to a monthly subscription model.
                </p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg">
            <Gift size={40} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Secure Your Lifetime Access Today</h2>
            <p className="mb-6 text-blue-100">Invest in your future now and never pay again</p>
            <div className="flex justify-center items-baseline mb-4">
              <span className="text-4xl font-bold">$59</span>
              <span className="ml-2 text-xl text-blue-200 line-through">$199</span>
            </div>
            <Link 
              href="/signup" 
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-lg"
            >
              Get Lifetime Access Now
            </Link>
            <p className="mt-4 text-sm text-blue-100">
              <Shield size={14} className="inline mr-1" />
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitedOfferPricingPage;
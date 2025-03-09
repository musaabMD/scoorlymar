'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Clock, CreditCard, Shield, ChevronRight, Award } from 'lucide-react';
import Header from '@/components/v1/Header';

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

const LifetimeAccessPricingPage = () => {
  // End date for the limited time offer (3 days from now)
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 3);
  
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(offerEndDate));
  const [selectedPlan, setSelectedPlan] = useState('multi');
  
  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(offerEndDate));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Plan features
  const planFeatures = [
    { 
      name: "Exam Simulator", 
      description: "Take the exam with confidence. Unlimited attempts with exam-like interface." 
    },
    { 
      name: "Time Management", 
      description: "Multi-format timing options to match real exam conditions." 
    },
    { 
      name: "Performance Prediction", 
      description: "Get an accurate prediction of your actual exam score." 
    },
    { 
      name: "In-depth Analysis", 
      description: "Detailed performance breakdown by topics and question types." 
    },
    { 
      name: "Study Mode", 
      description: "Learn at your own pace with immediate feedback." 
    },
    { 
      name: "Review Mode", 
      description: "Focus on bookmarked and incorrect questions to improve weak areas." 
    },
    { 
      name: "Concept Learning", 
      description: "Master high-yield concepts crucial for exam success." 
    },
  ];
  
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
        <div className="max-w-5xl mx-auto px-4">
          {/* Main Offer */}
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              LIFETIME ACCESS - NO SUBSCRIPTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Invest Once, Succeed Forever
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Get unlimited lifetime access to our comprehensive exam prep platform
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Single Exam Plan */}
            <div 
              className={`bg-white rounded-xl shadow-md p-8 border ${selectedPlan === 'single' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'} transition-all duration-200 hover:shadow-lg`}
              onClick={() => setSelectedPlan('single')}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Single Exam</h2>
                <p className="text-gray-600 mb-4">Lifetime access to one exam of your choice</p>
                
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-5xl font-bold text-blue-600">$59</span>
                  <span className="ml-2 text-2xl text-gray-400 line-through">$129</span>
                  <span className="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold">
                    54% OFF
                  </span>
                </div>
                
                <Link 
                  href="/checkout?plan=single"
                  className={`block w-full ${selectedPlan === 'single' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-bold py-3 px-4 rounded-lg transition-colors duration-200 mb-4`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
            
            {/* Multi Exam Plan */}
            <div 
              className={`bg-white rounded-xl shadow-md p-8 border ${selectedPlan === 'multi' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'} transition-all duration-200 hover:shadow-lg relative`}
              onClick={() => setSelectedPlan('multi')}
            >
              <div className="absolute -top-4 right-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  BEST VALUE
                </span>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Triple Bundle</h2>
                <p className="text-gray-600 mb-4">Lifetime access to any 3 exams of your choice</p>
                
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-5xl font-bold text-blue-600">$99</span>
                  <span className="ml-2 text-2xl text-gray-400 line-through">$249</span>
                  <span className="ml-2 bg-red-100 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold">
                    60% OFF
                  </span>
                </div>
                
                <Link 
                  href="/checkout?plan=multi"
                  className={`block w-full ${selectedPlan === 'multi' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-bold py-3 px-4 rounded-lg transition-colors duration-200 mb-4`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>
          
          {/* Feature List */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center">All Plans Include:</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex">
                  <CheckCircle2 size={24} className="text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center text-blue-700 font-medium">
                <Award size={20} className="mr-2" />
                <span>All features included with Lifetime Access - Never pay again!</span>
              </div>
            </div>
          </div>
          
          {/* Popular Exams */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Available Exam Preparations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sampleExams.map(exam => (
                <div key={exam.id} className="bg-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-gray-900">{exam.name}</h3>
                  <p className="text-sm text-gray-500">{exam.category}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/exams" className="text-blue-600 hover:text-blue-800 font-medium">
                View all available exams →
              </Link>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What Our Students Say</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"The exam simulator is incredibly realistic. After completing all the practice exams, I felt confident and passed with flying colors!"</p>
                <p className="font-medium text-gray-800">- Alex M., Medical Student</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"I love the concept learning feature. It helped me understand core principles rather than just memorizing answers. Worth every penny!"</p>
                <p className="font-medium text-gray-800">- Jessica T., IT Professional</p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">What does "lifetime access" mean?</h3>
                <p className="mt-2 text-gray-600">
                  Once you purchase, you'll have unlimited access to all selected exam materials for as long as our platform exists. No recurring fees or subscriptions ever.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">Can I change my exam selection later?</h3>
                <p className="mt-2 text-gray-600">
                  For the Triple Bundle plan, you can change one of your exam selections every 12 months. Single exam purchases cannot be changed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900">Do I get access to future updates?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! Your lifetime access includes all future updates to question banks, features, and content for your selected exams at no additional cost.
                </p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto">Invest in your future with our lifetime access plans. Study confidently with our comprehensive exam preparation platform.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href={`/checkout?plan=${selectedPlan}`}
                className="flex items-center bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
              >
                <CreditCard size={20} className="mr-2" />
                Get Lifetime Access
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-blue-100 flex items-center justify-center">
              <Shield size={16} className="mr-1" />
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifetimeAccessPricingPage;
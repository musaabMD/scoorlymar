'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/v1/Header';
import UpgradeModal from '@/components/selfexam/UpgradeModal';
import blueprints from '@/components/selfexam/blueprints';
import { Suspense } from 'react';
import Link from 'next/link';

// This is sample static data to use instead of Supabase
const staticExams = [
  "SDLE",
  "SMLE",
  "SNLE",
  "SLLE",
  "SPLE"
];

export default function ExamSimulatorPage() {
  const [exams] = useState(staticExams);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null); // 'mix' or 'subject'
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Handle exam selection
  const handleExamSelect = (exam) => {
    setSelectedExam(exam);
  };

  // Handle mode selection
  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  // Start simulation and redirect to quiz page
  const handleStartSimulation = () => {
    if (selectedExam && selectedMode) {
      setLoading(true);
      
      // Create URL with parameters
      const simulationUrl = `/exam-simulator/${selectedExam}?mode=${selectedMode}`;
      
      // Navigate to the simulation page
      router.push(simulationUrl);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <UpgradeModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="container mx-auto p-4 max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-3xl font-bold mb-3 text-blue-700">Exam Simulator</h1>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-lg text-blue-800 mb-2">Welcome to your Exam Simulator!</p>
              <p className="text-gray-700">This simulator helps you prepare for your upcoming exams by:</p>
              <ul className="list-disc list-inside ml-2 mt-2 text-gray-700">
                <li>Creating a realistic exam environment</li>
                <li>Self-assessing your current knowledge</li>
                <li>Predicting your potential exam score</li>
                <li>Identifying knowledge gaps before the real exam</li>
              </ul>
              <div className="mt-3">
                <Link 
                  href="http://localhost:3000/exam-simulator" 
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more about our exam simulator
                </Link>
              </div>
            </div>
          
            {!selectedExam ? (
              <>
                <p className="mb-4 text-lg">Select an exam to start your simulation:</p>
                <p className="mb-4 font-sans font-bold text-2xl text-gray-800">Available Exams</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {exams.map((exam, index) => (
                    <div 
                      key={index} 
                      className="bg-slate-100 border-2 border-slate-500 text-2xl shadow rounded p-3 pt-7 pb-7 hover:bg-slate-200 hover:border-blue-600 cursor-pointer transition-all"
                      onClick={() => handleExamSelect(exam)}
                    >
                      <h3 className="font-bold text-center">{exam}</h3>
                      <p className="text-sm text-center mt-2 text-gray-600">Click to prepare for this exam</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Link 
                    href="http://localhost:3000/exam-simulator" 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
                  >
                    Ready to Excel? Get Started Now!
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setSelectedExam(null)}
                    className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 mr-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <h2 className="text-2xl font-semibold text-blue-700">Simulation Mode for {selectedExam}</h2>
                </div>
                
                <div className="mb-8">
                  <p className="mb-4 text-lg">Choose how you want to practice:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div 
                      className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        selectedMode === 'mix' 
                          ? 'border-blue-500 shadow-md' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleModeSelect('mix')}
                    >
                      <h3 className="text-xl font-semibold mb-2">Mixed Questions</h3>
                      <p className="text-gray-600">Practice with questions from all subjects mixed together, similar to the real exam.</p>
                    </div>
                    
                    <div 
                      className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        selectedMode === 'subject' 
                          ? 'border-blue-500 shadow-md' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleModeSelect('subject')}
                    >
                      <h3 className="text-xl font-semibold mb-2">Subject by Subject</h3>
                      <p className="text-gray-600">Focus on one subject at a time to strengthen your knowledge in specific areas.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Exam Blueprint:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ul className="list-disc list-inside">
                      {Object.entries(blueprints[selectedExam] || {}).map(([subject, weight]) => (
                        <li key={subject} className="mb-1">{subject}: <span className="font-medium">{weight}%</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <button 
                    onClick={handleStartSimulation}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg w-full md:w-auto transition-colors"
                    disabled={loading || !selectedMode}
                  >
                    {loading ? 'Loading...' : 'Start Simulation'}
                  </button>
                  
                  {!selectedMode && (
                    <p className="text-red-500 mt-2">Please select a simulation mode to continue.</p>
                  )}
                  
                  <p className="mt-4 text-gray-600 text-center max-w-md">
                    Ready to test your knowledge and predict your score? This simulation closely mirrors the real exam experience.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
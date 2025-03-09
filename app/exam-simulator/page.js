'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/v1/Header';
import QuizComponent from '@/components/selfexam/QuizComponent';
import blueprints from '@/components/selfexam/blueprints';
import { Suspense } from 'react';

// Import shadcn components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, BookOpen, Award, ArrowRight } from "lucide-react";

// This is sample static data to use instead of Supabase
const staticExams = [
  {
    id: "SDLE",
    name: "SDLE",
    description: "Specialty Dental Licensing Examination",
    count: 200,
    time: "3 hours"
  },
  {
    id: "SMLE",
    name: "SMLE",
    description: "Specialty Medical Licensing Examination",
    count: 180,
    time: "3 hours" 
  },
  {
    id: "SNLE",
    name: "SNLE",
    description: "Specialty Nursing Licensing Examination",
    count: 150,
    time: "2.5 hours"
  },
  {
    id: "SLLE",
    name: "SLLE",
    description: "Specialty Legal Licensing Examination",
    count: 175,
    time: "3 hours"
  },
  {
    id: "SPLE",
    name: "SPLE",
    description: "Specialty Pharmacy Licensing Examination",
    count: 160,
    time: "2.5 hours"
  },
  {
    id: "CUSTOM1",
    name: "CPALE",
    description: "Certified Public Accountant Licensing Exam",
    count: 190,
    time: "3 hours"
  },
  {
    id: "CUSTOM2",
    name: "PSLE", 
    description: "Psychology Specialty Licensing Examination",
    count: 165,
    time: "2.5 hours"
  }
];

// Sample questions for demonstration purposes
const generateSampleQuestions = (examName, count = 20) => {
  const blueprint = blueprints[examName] || {};
  const subjects = Object.keys(blueprint);
  
  return Array.from({ length: count }, (_, i) => {
    const subject = subjects[i % subjects.length] || 'General';
    const correctChoice = ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];
    
    return {
      id: `${examName}-Q${i+1}`,
      examname: examName,
      subject: subject,
      question_text: `Sample question ${i+1} for ${examName}. This is a question about ${subject}.`,
      option_a: `Option A for question ${i+1}`,
      option_b: `Option B for question ${i+1}`,
      option_c: `Option C for question ${i+1}`,
      option_d: `Option D for question ${i+1}`,
      option_e: null,
      option_f: null,
      correct_choice: correctChoice,
      rationale: `The correct answer is ${correctChoice}. <br>This is an explanation of why ${correctChoice} is correct.<br>The incorrect answers are: <br>The other options are incorrect because they do not accurately reflect the principles of ${subject}.`,
      userAnswer: null,
      isBookmarked: false,
    };
  });
};

export default function SelfAssessmentPage() {
  const [exams] = useState(staticExams);
  const [selectedExam, setSelectedExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Handle exam selection
  const handleExamSelect = (exam) => {
    setSelectedExam(exam);
  };

  // Start exam with selected questions
  const handleStartExam = () => {
    if (selectedExam) {
      setLoading(true);
      // Generate sample questions for the selected exam
      const examQuestions = generateSampleQuestions(selectedExam.id, 30);
      setQuestions(examQuestions);
      setExamStarted(true);
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show quiz component when exam has started
  if (examStarted) {
    return (
      <QuizComponent 
        questions={questions} 
        examName={selectedExam.name}
        testTaker="Demo User"
        isSelfExam={true}
      />
    );
  }

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <div className="min-h-screen bg-slate-50">
        <Header />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Self Assessment</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Test your knowledge with our comprehensive self-assessment exams designed to help you prepare for certification.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {!selectedExam ? (
            <>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-2">Your Exams</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Select an exam below to begin your self-assessment. Each exam simulates the official testing environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                  <Card 
                    key={exam.id} 
                    className="hover:shadow-lg transition-all duration-200 hover:border-blue-300 cursor-pointer"
                    onClick={() => handleExamSelect(exam)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl font-bold text-blue-700">{exam.name}</CardTitle>
                        <Badge variant="outline" className="bg-blue-50">{exam.count} questions</Badge>
                      </div>
                      <CardDescription className="text-base">{exam.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-slate-600 mb-2">
                        <Clock className="h-4 w-4 mr-2" /> 
                        <span>{exam.time} duration</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <BookOpen className="h-4 w-4 mr-2" /> 
                        <span>Comprehensive blueprint coverage</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="default" 
                        className="w-full justify-between group bg-blue-600 hover:bg-blue-700 font-semibold text-white"
                      >
                        Start Assessment
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Exam Instructions for {selectedExam.name}</CardTitle>
                <CardDescription>{selectedExam.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Time Limit: {selectedExam.time}
                  </AlertTitle>
                  <AlertDescription>
                    Once started, you cannot pause the exam. Please ensure you have adequate time to complete it.
                  </AlertDescription>
                </Alert>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instructions:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Answer all questions to the best of your ability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>You can review and change your answers within the time limit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>Your results will be available immediately after completion.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span>This is a fresh assessment - no previous answers or bookmarks will be shown.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Blueprint:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(blueprints[selectedExam.id] || {}).map(([subject, weight]) => (
                      <div key={subject} className="flex items-center">
                        <Badge variant="outline" className="mr-2">{weight}%</Badge>
                        <span>{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedExam(null)}
                >
                  Back to Exams
                </Button>
                <Button 
                  variant="default" 
                  onClick={handleStartExam}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? 'Loading...' : 'Start Exam'}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        {/* Upgrade modal as Dialog from shadcn */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upgrade Your Account</DialogTitle>
              <DialogDescription>
                Get access to all premium features and unlimited practice exams.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                <span>Full access to all exam types</span>
              </div>
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                <span>Detailed performance analytics</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                <span>Personalized study plans</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={closeModal}>Later</Button>
              <Button onClick={closeModal}>Upgrade Now</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Suspense>
  );
}
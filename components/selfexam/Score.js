'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import Header from '@/components/v1/Header';
import Review from './Review';

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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Clock,
  Award,
  FileText,
  BarChart3,
  ChevronRight,
  BookOpen,
  AlertCircle,
  Home
} from "lucide-react";

const Score = ({ score, totalQuestions, quizName, time, answers }) => {
  const router = useRouter();

  const formatTime = (seconds) => {
    if (typeof seconds !== 'number' || isNaN(seconds)) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formattedResponses = answers.map(answer => ({
    qs: {
      question_text: answer.question,
      correct_choice: answer.correctAnswer,
      rationale: answer.rationale,
      subject: answer.subject || 'Unknown',
      choices: answer.choices || []
    },
    user_answer: answer.selectedAnswer,
    is_bookmarked: answer.isBookmarked,
    feedback: answer.feedback
  }));

  // Calculate scores per subject
  const subjectScores = formattedResponses.reduce((acc, response) => {
    const subject = response.qs.subject;
    if (!acc[subject]) {
      acc[subject] = { correct: 0, total: 0 };
    }
    acc[subject].total += 1;
    if (response.user_answer === response.qs.correct_choice) {
      acc[subject].correct += 1;
    }
    return acc;
  }, {});

  // Calculate the overall score percentage
  const overallScorePercentage = Math.round((score / totalQuestions) * 100);

  // Get performance level based on score
  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: 'Excellent', color: 'bg-green-500' };
    if (percentage >= 80) return { level: 'Good', color: 'bg-blue-500' };
    if (percentage >= 70) return { level: 'Average', color: 'bg-yellow-500' };
    if (percentage >= 60) return { level: 'Below Average', color: 'bg-orange-500' };
    return { level: 'Needs Improvement', color: 'bg-red-500' };
  };

  const performanceInfo = getPerformanceLevel(overallScorePercentage);

  // Sort subjects by performance
  const sortedSubjects = Object.entries(subjectScores).sort((a, b) => {
    const aPercentage = Math.round((a[1].correct / a[1].total) * 100);
    const bPercentage = Math.round((b[1].correct / b[1].total) * 100);
    return bPercentage - aPercentage;
  });

  // Statistics
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;
  const bookmarkedQuestions = formattedResponses.filter(r => r.is_bookmarked).length;

  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading results...</div>}>
        <Header />
        <div className="min-h-screen bg-slate-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border shadow-md mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold">{quizName} Results</h2>
                    <p className="text-blue-100 flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-2" />
                      Completed in {formatTime(time)}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-white flex flex-col items-center justify-center text-blue-700">
                        <span className="text-3xl font-bold">{overallScorePercentage}%</span>
                        <Badge className={`${performanceInfo.color} hover:${performanceInfo.color} mt-1 text-white`}>
                          {performanceInfo.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                        Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {score} / {totalQuestions}
                      </div>
                      <Progress value={overallScorePercentage} className="mt-2 h-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Award className="h-5 w-5 mr-2 text-amber-500" />
                        Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="text-3xl font-bold">{performanceInfo.level}</div>
                      </div>
                      <div className="flex mt-2 space-x-1">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{correctAnswers} correct</Badge>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{incorrectAnswers} incorrect</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                        Focus Areas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {sortedSubjects.length > 0 && (
                        <div>
                          <div className="text-sm font-medium mb-1">Needs Improvement:</div>
                          <div className="text-lg font-semibold">
                            {sortedSubjects
                              .filter(([_, { correct, total }]) => (correct / total) * 100 < 70)
                              .slice(0, 2)
                              .map(([subject]) => subject)
                              .join(', ') || "None"}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Subject Performance</CardTitle>
                    <CardDescription>Detailed breakdown by subject area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sortedSubjects.map(([subject, { correct, total }]) => {
                        const percentage = Math.round((correct / total) * 100);
                        let progressColor = "bg-red-500";
                        if (percentage >= 80) progressColor = "bg-green-500";
                        else if (percentage >= 70) progressColor = "bg-blue-500";
                        else if (percentage >= 60) progressColor = "bg-yellow-500";
                        
                        return (
                          <div key={subject}>
                            <div className="flex justify-between mb-1">
                              <div className="font-medium">{subject}</div>
                              <div className="text-sm">
                                {correct}/{total} ({percentage}%)
                              </div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full">
                              <div
                                className={`h-2 rounded-full ${progressColor}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Performance Summary</CardTitle>
                    <CardDescription>Overall analysis of your test performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Strengths</h4>
                        <div className="pl-3 border-l-2 border-green-500">
                          {sortedSubjects.length > 0 ? (
                            sortedSubjects
                              .filter(([_, { correct, total }]) => (correct / total) * 100 >= 80)
                              .slice(0, 2)
                              .map(([subject, { correct, total }]) => (
                                <div key={subject} className="mb-2">
                                  <div className="font-medium">{subject}</div>
                                  <div className="text-sm text-slate-600">
                                    You answered {correct} out of {total} questions correctly ({Math.round((correct / total) * 100)}%)
                                  </div>
                                </div>
                              ))
                          ) : (
                            <div className="text-sm text-slate-600">No data available</div>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Areas for Improvement</h4>
                        <div className="pl-3 border-l-2 border-red-500">
                          {sortedSubjects.length > 0 ? (
                            sortedSubjects
                              .filter(([_, { correct, total }]) => (correct / total) * 100 < 70)
                              .slice(0, 2)
                              .map(([subject, { correct, total }]) => (
                                <div key={subject} className="mb-2">
                                  <div className="font-medium">{subject}</div>
                                  <div className="text-sm text-slate-600">
                                    You answered {correct} out of {total} questions correctly ({Math.round((correct / total) * 100)}%)
                                  </div>
                                </div>
                              ))
                          ) : (
                            <div className="text-sm text-slate-600">No data available</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline" onClick={() => router.push('/dashboard')}>
                      <Home className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button onClick={() => router.push('/dashboard/review')} className="bg-blue-600 hover:bg-blue-700">
                      Review All Questions
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Card>
            
            {/* Review section outside the card */}
            <Card>
              <CardHeader>
                <CardTitle>Review Your Answers</CardTitle>
                <CardDescription>Detailed breakdown of all questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Review 
                  responses={formattedResponses} 
                  activeTab="all" 
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Score;
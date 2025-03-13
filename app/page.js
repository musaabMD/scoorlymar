// app/page.js
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import ExamList from '@/components/ExamList'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 z-0"/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block">
              #1 Exam Preparation Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your Exams with 
              <span className="text-blue-600"> Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join over 50,000 students who have achieved their dream scores using our comprehensive study materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="#exams" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Preparing Now
              </Link>
              <Link 
                href="#how-it-works" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-gray-600">Exam Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section id="exams" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Exam Preparations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of expertly crafted study materials and practice tests
            </p>
          </div>
          
          {/* Updated ExamList component that fetches data directly */}
          <ExamList />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Scoorly?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in your exams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert-Created Content",
                description: "All our materials are created by subject matter experts with years of experience",
                icon: "📚"
              },
              {
                title: "Personalized Learning",
                description: "Adaptive learning technology that adjusts to your progress",
                icon: "🎯"
              },
              {
                title: "Practice Tests",
                description: "Realistic mock exams with detailed performance analytics",
                icon: "📊"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of successful students who have achieved their dream scores with Scoorly
          </p>
          <Link 
            href="#exams" 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  )
}
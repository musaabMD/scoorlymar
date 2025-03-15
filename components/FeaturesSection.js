"use client";

import { 
  Infinity, 
  Clock, 
  BookOpen, 
  Bookmark, 
  BarChart2, 
  Monitor, 
  Smartphone, 
  Target, 
  Zap
} from 'lucide-react';

const FeaturesSection = () => {
  const featuresList = [
    {
      icon: <Infinity className="h-6 w-6 text-blue-600" />,
      title: "Unlimited Mock Exams",
      description: "Take as many practice tests as you need with our comprehensive question bank covering all exam topics."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "1000s of Questions",
      description: "Access our ever-growing library of exam questions with detailed explanations to master every concept."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Don't Memorize, Understand",
      description: "Our study mode focuses on comprehension, not rote memorization, for better long-term retention."
    },
    {
      icon: <Bookmark className="h-6 w-6 text-blue-600" />,
      title: "Review Mode",
      description: "Easily revisit bookmarked questions and those you answered incorrectly to strengthen weak areas."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Performance by Subject",
      description: "Track your progress across different topics and identify areas needing more attention."
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      title: "Mobile & Web Access",
      description: "Study seamlessly across all your devices with our responsive platform that syncs your progress."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Timed Exams",
      description: "Practice under exam-like conditions with our customizable timer to improve your time management."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Find Your Weakest Subject",
      description: "Our analytics pinpoint exactly where you need to focus, making your study time more efficient."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Ace Your Exams
          </h2>
          <p className="text-xl text-gray-600">
            Scoorly gives you all the tools and resources to prepare effectively and confidently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* One-time Payment Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                One-time Payment, Lifetime Access
              </h3>
              <p className="text-lg text-gray-700">
                No subscriptions or hidden fees. Pay once and get lifetime access to all our features and content updates.
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all whitespace-nowrap">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
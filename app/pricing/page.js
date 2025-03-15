import Header from "@/components/Header";

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <Header />
      
      {/* Countdown Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="font-bold text-lg mb-2 md:mb-0">Limited Time Offer: 30% OFF</p>
            <div className="flex items-center gap-3">
              <span>Offer ends in:</span>
              <div className="flex gap-1">
                <div className="bg-white text-red-600 rounded px-2 py-1 font-mono font-bold">23</div>
                <span>:</span>
                <div className="bg-white text-red-600 rounded px-2 py-1 font-mono font-bold">12</div>
                <span>:</span>
                <div className="bg-white text-red-600 rounded px-2 py-1 font-mono font-bold">45</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Value Proposition */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-indigo-600 opacity-5 pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Pass Your Exam
              </span>
              <span> on the First Try</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful students who mastered their exams with our proven system.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="flex items-center gap-2 text-sm font-medium bg-white py-2 px-4 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>One-time payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-white py-2 px-4 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One Price, Complete Preparation
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to pass your exam with confidence
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
              <div className="bg-indigo-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Complete Exam Prep</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-gray-300 text-xl line-through mr-2">$199</span>
                  <span className="text-5xl font-extrabold text-white">$139</span>
                  <span className="ml-1 text-xl text-gray-200">/once</span>
                </div>
                <p className="mt-2 text-indigo-100">One-time payment, lifetime access</p>
              </div>

              <div className="p-6 border-b border-gray-200">
                <ul className="space-y-4">
                  {[
                    "1,000+ practice questions & full explanations",
                    "Unlimited mock exams with exam-like UI",
                    "Smart study mode: Learn, don't memorize",
                    "Performance tracking by subject",
                    "Review bookmarked & incorrect questions",
                    "Identify your weakest subjects",
                    "Mobile & web access",
                    "Timed exam mode",
                    "Lifetime updates",
                  ].map((feature, i) => (
                    <li key={i} className="flex">
                      <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6">
                <button className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-lg shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300">
                  Get Started Now
                </button>
                <p className="text-center mt-4 text-sm text-gray-500">
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    30-day money-back guarantee (if you've consumed less than 10% of content)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful exam-takers who achieved their certification with our program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I passed my exam on the first try with a score of 92%. The practice questions were almost identical to what I saw on the actual exam. Worth every penny!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold">SS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Smith</h4>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The analytics feature helped me identify my weak subjects so I could focus my study time. The timed exams helped build my confidence. Passed with flying colors!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I struggled with traditional study methods. The way this platform explains concepts made everything click. Now I understand the material rather than just memorizing it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section with Icons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Pass</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system is designed to give you the best possible preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">1,000+ Practice Questions</h3>
              <p className="text-gray-600">
                Comprehensive question bank covering every exam topic with detailed explanations for each answer.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timed Exam Mode</h3>
              <p className="text-gray-600">
                Practice under real exam conditions with our timer and exam-like interface to build confidence.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Track your progress by subject, identify weak areas, and focus your study time effectively.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Mode</h3>
              <p className="text-gray-600">
                Learn at your own pace with clear concept explanations, helping you understand rather than memorize.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Review Mode</h3>
              <p className="text-gray-600">
                Easily review bookmarked questions and those you answered incorrectly to reinforce learning.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile & Web Access</h3>
              <p className="text-gray-600">
                Study anywhere, anytime with full access on all your devices - desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our exam prep program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: "How long do I have access to the materials?",
                answer: "You get lifetime access to all materials with your one-time payment. This includes all future updates and improvements we make to the content for your specific exam."
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes, we offer a 30-day money-back guarantee if you've consumed less than 10% of the content. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund."
              },
              {
                question: "How often is the content updated?",
                answer: "We continuously update our question bank and explanations to reflect the latest exam patterns and topics. All updates are included in your one-time purchase."
              },
              {
                question: "Can I access the materials on multiple devices?",
                answer: "Yes, you can access your exam prep materials on any device including desktop computers, laptops, tablets, and smartphones. Your progress will sync across all devices."
              },
              {
                question: "What if I need to prepare for multiple exams?",
                answer: "Each exam package is sold separately. If you need to prepare for multiple exams, you'll need to purchase each one individually."
              },
              {
                question: "How does the performance tracking work?",
                answer: "Our system automatically tracks your performance across different subjects and topics. You'll get detailed analytics showing your strengths and weaknesses, helping you focus your study time more effectively."
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Pass Your Exam?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who passed their exams on the first try.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg text-lg shadow-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
              Get Started Today
            </button>
          </div>
          <p className="mt-6 text-indigo-200 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            30-day money-back guarantee (if you've consumed less than 10% of content) • Lifetime access • No subscription
          </p>
        </div>
      </section>
    </main>
  );
}
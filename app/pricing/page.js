import Pricing from "@/components/Pricing";
import Header from "@/components/Header";
export default function PricingPage() {
  return (
    <main>
        <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Master Your Exam with Confidence
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto mb-8">
            One-time payment. Lifetime access. Everything you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Lifetime updates included
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Unlimited practice exams
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* Features Grid Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-base-content/80">Comprehensive exam preparation tools at your fingertips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timed Quiz Mode</h3>
              <p className="text-base-content/80">Practice under exam conditions with our timed quiz mode</p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Mode</h3>
              <p className="text-base-content/80">Learn at your own pace with detailed explanations</p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-base-content/80">Monitor your improvement with detailed analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
                What's included in the exam package?
              </div>
              <div className="collapse-content">
                <p>Your one-time payment includes lifetime access to all exam materials, unlimited practice tests, study mode, timed quizzes, progress tracking, and all future updates for your chosen exam.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How long do I have access?
              </div>
              <div className="collapse-content">
                <p>You get lifetime access to all materials for your chosen exam. This includes all future updates and improvements we make to the content.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What if I need to study for multiple exams?
              </div>
              <div className="collapse-content">
                <p>You can purchase access to each exam separately. Each purchase gives you lifetime access to that specific exam's content and materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

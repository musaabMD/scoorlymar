import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  const examFeatures = [
    { name: "Lifetime access to exam content" },
    { name: "Free lifetime updates" },
    { name: "Unlimited mock exams" },
    { name: "Unlimited bookmarks" },
    { name: "Timed Quiz Mode" },
    { name: "Study Mode" },
    { name: "High-quality study notes" },
    { name: "Detailed concept explanations" },
    { name: "Comprehensive review mode" },
    { name: "Progress tracking dashboard" },
  ];

  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Simple Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            One exam. One payment. Lifetime access.
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg border-2 border-primary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-semibold">
                BEST VALUE
              </div>

              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-2xl font-bold">Per Exam Package</p>
                  <p className="text-base-content/80 mt-2">
                    Everything you need to master your exam
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-2">
                <p className="text-6xl tracking-tight font-extrabold">$49</p>
                <div className="flex flex-col justify-end mb-2">
                  <p className="text-sm text-base-content/60 uppercase font-semibold">
                    ONE-TIME
                  </p>
                </div>
              </div>

              <ul className="space-y-4 leading-relaxed text-base flex-1">
                {examFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] text-primary shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <ButtonCheckout priceId={config.stripe.plans[0].priceId} />
                <div className="flex items-center justify-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-success"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base-content/80">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

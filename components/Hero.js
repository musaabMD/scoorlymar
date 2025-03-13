import Image from "next/image";
import Link from "next/link";

const Hero = ({
  title = "Master Your Certification Journey",
  subtitle = "Comprehensive exam preparation with unlimited practice tests and lifetime access.",
  image = "/hero-image.jpg",
  imageAlt = "Hero Image",
  showImage = true,
  primaryAction,
  secondaryAction,
  children,
}) => {
  return (
    <>

    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left lg:w-1/2">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
                {title}
              </h1>
              <p className="text-lg text-base-content/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="btn btn-primary btn-wide sm:btn-large"
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="btn btn-outline btn-wide sm:btn-large"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium">Free Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>

            {/* Optional additional content */}
            {children}
          </div>

          {/* Image */}
          {showImage && (
            <div className="lg:w-1/2">
              <Image
                src={image}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-xl"
                priority={true}
              />
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;

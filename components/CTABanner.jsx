import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-8 md:p-16">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Experience Professional Home Care?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
              Let us take care of your loved ones with the compassion and
              expertise they deserve. Contact us today for a free consultation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9567859200"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card text-foreground rounded-full text-lg font-semibold hover:bg-card/90 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call 95678 59200</span>
              </a>
              {/* <a
                href="https://sevanadharahomecare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20"
              >
                <span>Visit Website</span>
                <ArrowRight className="w-5 h-5" />
              </a> */}
            </div>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

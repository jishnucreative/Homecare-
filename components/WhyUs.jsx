import {
  GraduationCap,
  Clock,
  ShieldCheck,
  Wallet,
  Zap,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Trained Staff",
    description:
      "All our caregivers undergo rigorous training and certification programs.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock availability for emergencies and support whenever you need.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Caregivers",
    description:
      "Background verified, experienced professionals you can rely on.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Quality care at competitive rates with transparent pricing.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Fast service deployment with caregivers available within hours.",
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description:
      "Serving Chengannur, Thiruvalla, Haripad, and Mavelikkara.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              The <span className="text-primary">Sevanadhara</span> Difference
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We go above and beyond to ensure your loved ones receive the best
              care possible. Our commitment to quality, transparency, and
              compassion sets us apart from other home care providers.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    100% Satisfaction Guaranteed
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&#39;re committed to your complete satisfaction. If you&#39;re not
                    happy with our service, we&#39;ll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

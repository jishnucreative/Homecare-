import { MessageSquare, ClipboardCheck, UserCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Enquiry",
    description:
      "Reach out to us via phone or our website to discuss your care requirements.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Assessment",
    description:
      "Our team evaluates your needs and creates a personalized care plan.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Caregiver Assigned",
    description:
      "We match you with the perfect caregiver based on your requirements.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description:
      "Regular check-ins and continuous support to ensure quality care.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Getting Started is{" "}
            <span className="text-primary">Simple</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our streamlined process ensures you get the care you need quickly
            and efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                {/* Step Number */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {step.step}
                </span>

                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mt-4 mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:9567859200"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}

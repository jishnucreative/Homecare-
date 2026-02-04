import {
  Heart,
  Baby,
  Home,
  Stethoscope,
  Bed,
  Building2,
  Truck,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Elderly Care",
    description:
      "Compassionate care for seniors including daily assistance, companionship, and medical support.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Baby,
    title: "Delivery Care",
    description:
      "Pre and post-natal care for mothers, ensuring a smooth recovery and healthy transition.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Home,
    title: "House Maids",
    description:
      "Reliable domestic help for household chores, cooking, and maintaining a clean environment.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Users,
    title: "Baby Care",
    description:
      "Professional infant care services including feeding, bathing, and developmental support.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Home Nurses",
    description:
      "Qualified nurses providing medical care, medication management, and health monitoring.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Building2,
    title: "Hospital Bystander",
    description:
      "Trained attendants to stay with patients during hospital stays, providing comfort and assistance.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Bed,
    title: "Patient Care",
    description:
      "Comprehensive care for bedridden or recovering patients, including wound care and therapy support.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Truck,
    title: "Non Emergency Transportation",
    description:
      "Safe and comfortable patient transportation for medical appointments and hospital visits.",
    color: "bg-secondary/10 text-secondary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Comprehensive Home Care{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We offer a wide range of professional home care services tailored to
            meet your family&#39;s unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">
            Need a customized care plan?
          </p>
          <a
            href="tel:9567859200"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}

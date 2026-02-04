import { Heart, Shield, Users, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient like family, providing care with empathy and respect.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All our caregivers are thoroughly vetted, trained, and verified.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We work closely with families to create personalized care plans.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We maintain the highest standards of professional healthcare.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Dedicated to Providing{" "}
              <span className="text-primary">Quality Home Care</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sevanadhara Home Care Service was founded with a simple mission: to
              provide professional, compassionate healthcare services in the
              comfort of your own home. We understand that home is where healing
              happens best.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of trained caregivers, nurses, and support staff are
              committed to delivering personalized care that meets the unique needs
              of each patient. From elderly care to post-operative support, we are
              here to help your loved ones thrive.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Background Verified</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Trained Professionals</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

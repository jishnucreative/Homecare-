import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Son of Patient",
    location: "Chengannur",
    content:
      "Sevanadhara provided exceptional care for my elderly mother. The caregivers are professional, compassionate, and treat her like family. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Daughter",
    location: "Thiruvalla",
    content:
      "After my father's surgery, we needed 24/7 care. Sevanadhara's home nurses were outstanding. They managed medications, wound care, and provided emotional support.",
    rating: 5,
  },
  {
    name: "Suresh Nair",
    role: "Family Member",
    location: "Haripad",
    content:
      "The baby care service was a blessing for our family. The caregiver was experienced, gentle, and helped my wife tremendously during her recovery period.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    role: "Patient Family",
    location: "Mavelikkara",
    content:
      "We used their patient transportation service multiple times. Always on time, the staff is caring, and they ensure complete comfort during the journey.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            What <span className="text-primary">Families Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hear from families who have experienced our compassionate care
            services firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary/40" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <div className="flex -space-x-2">
              {["R", "P", "S", "L"].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full border-2 border-card flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-primary">
                    {initial}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              500+ families trust us
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 fill-accent text-accent" />
            <span className="text-sm">4.9/5 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Chengannur",
    description: "Our headquarters with full service availability",
    available: true,
  },
  {
    name: "Thiruvalla",
    description: "Complete home care services available",
    available: true,
  },
  {
    name: "Haripad",
    description: "All services including transportation",
    available: true,
  },
  {
    name: "Mavelikkara",
    description: "Full range of care services",
    available: true,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Serving <span className="text-primary">Your Community</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We proudly serve families across multiple locations in Kerala,
            bringing professional home care closer to you.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {location.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {location.description}
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                Services Available
              </span>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Not in our service area?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Contact us to discuss your needs. We&#39;re constantly expanding our
            service coverage to help more families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9567859200"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-semibold hover:bg-card/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              95678 59200
            </a>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full font-medium">
              <Clock className="w-5 h-5" />
              Available 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

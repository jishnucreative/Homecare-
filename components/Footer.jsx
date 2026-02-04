import {
  Phone,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Locations", href: "#locations" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Elderly Care",
    "Home Nurses",
    "Baby Care",
    "Patient Care",
    "Hospital Bystander",
    "Patient Transportation",
  ];

  const locations = ["Chengannur", "Thiruvalla", "Haripad", "Mavelikkara"];

  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-card/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                <img src="/images/logo.webp" alt="" />
              </div>
              <div>
                <span className="text-lg font-bold text-card">Sevanadhara</span>
                <p className="text-xs text-card/60">Home Care Service</p>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              Professional home care services you can trust. Compassionate
              caregivers dedicated to your family&#39;s well-being.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:9567859200"
                className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">95678 59200</span>
              </a>
              <a
                href="https://sevanadharahomecare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">sevanadharahomecare.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-card font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-card font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-card/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-card font-semibold mb-4">Service Locations</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-card/70 text-sm">{location}</span>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-card font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-card" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-card" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-card" />
                </a>
                <a
                  href="mailto:info@sevanadharahomecare.com"
                  className="w-9 h-9 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-card" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-sm text-center md:text-left">
            &copy; {currentYear} Sevanadhara Home Care Service. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-card/60 hover:text-card transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-card/60 hover:text-card transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

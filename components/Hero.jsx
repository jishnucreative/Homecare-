"use client";

import { Phone, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="text-center p-4 bg-card/60 backdrop-blur rounded-2xl border border-border/50"
    >
      <p className="text-2xl md:text-3xl font-bold text-primary">
        {label.includes("+")
          ? `${count}+`
          : label.includes("/")
            ? label
            : count}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Trusted Home Care Services
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Home Care <span className="text-primary">You Can Trust</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sevanadhara Home Care Service provides compassionate, professional
              healthcare right at your doorstep. Our trained caregivers ensure
              your loved ones receive the best care in the comfort of home.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                <Calendar className="w-5 h-5" />
                Book a Caregiver
              </a>

              <a
                href="tel:9567859200"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card text-foreground border-2 border-primary/20 rounded-full text-base font-semibold hover:border-primary/40 transition-all"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call Now
              </a>
            </div>

            {/* Phone Card */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-5 py-3 bg-card rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">24/7 Helpline</p>
                  <p className="text-xl font-bold text-foreground">
                    95678 59200
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative Blobs */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl"
            />

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[320px] h-[320px] bg-secondary/10 rounded-full blur-2xl"
            />

            {/* Main Circle Container */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 p-4 shadow-2xl">
              {/* Inner Circle */}
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  src="/images/heroo.webp"
                  alt="Home Care Service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white px-4 py-2 rounded-xl shadow-lg border border-border text-sm font-medium"
              >
                Trusted Care
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white px-4 py-2 rounded-xl shadow-lg border border-border text-sm font-medium"
              >
                24/7 Support
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* COUNTERS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Counter end={500} label="Happy Families +" />
          <Counter end={50} label="Expert Caregivers +" />
          <Counter end={4} label="Service Locations" />
          <Counter end={24} label="24/7 Support" />
        </motion.div>
      </div>
    </section>
  );
}

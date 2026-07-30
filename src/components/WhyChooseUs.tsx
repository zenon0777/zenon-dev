"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Purpose-built solutions — no templates, no shortcuts",
  "Flat-fee pricing — you know what you're paying upfront",
  "5+ years of engineering expertise behind every project",
  "We don't just build and disappear — ongoing support included",
  "AI-powered automation to scale your operations",
  "Results-driven approach focused on your ROI",
];

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Why Zenon Dev?" />
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Businesses Trust Us to Build Their{" "}
              <span className="text-gold-gradient">Digital Future</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              We&apos;re not just developers — we&apos;re digital architects.
              Every project starts with understanding your business, your
              customers, and your growth goals. We build with purpose, deliver
              on time, and charge flat fees so you always know what you&apos;re
              paying.
            </p>

            {/* Reasons list */}
            <ul className="mt-8 space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Value proposition cards */}
            {[
              {
                icon: "💰",
                title: "Flat-Fee Pricing",
                description:
                  "No hourly billing surprises. You get a clear scope, a fixed price, and a finished product — every time.",
              },
              {
                icon: "📈",
                title: "Built to Grow With You",
                description:
                  "Every project is architected for scale. When your business grows, your digital infrastructure grows with it.",
              },
              {
                icon: "🤝",
                title: "We Don't Disappear",
                description:
                  "Post-launch support is not an upsell — it's how we work. Your success is our reputation.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group rounded-2xl border border-gray-700/50 bg-bg-secondary p-6 transition-all duration-500 hover:border-gold/30 hover:bg-bg-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-muted border border-gold/20 text-xl transition-all duration-300 group-hover:bg-gold/20 group-hover:border-gold/40">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Philosophy quote */}
            <div className="rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-gold/10 p-6 text-center">
              <p className="text-gold font-semibold text-lg font-heading">
                &ldquo;We build something that matters for them.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">
                — The Zenon Dev Philosophy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

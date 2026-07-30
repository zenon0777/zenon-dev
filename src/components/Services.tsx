"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Our Services" />
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Everything You Need to
              <br />
              <span className="text-gold-gradient">Dominate Online</span>
            </h2>
            <p className="mt-4 max-w-xl text-gray-400 text-lg">
              End-to-end digital solutions, from your first website to
              AI-powered automation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium group"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl border border-gray-700/50 bg-bg-secondary p-8 transition-all duration-500 hover:border-gold/30 hover:bg-bg-card-hover hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-muted border border-gold/20 transition-all duration-300 group-hover:bg-gold/20 group-hover:border-gold/40">
                  <Icon className="h-7 w-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="absolute top-8 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                  <ArrowRight className="h-5 w-5 text-gold" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

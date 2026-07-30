"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Stethoscope,
  SmilePlus,
  Building2,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const industries = [
  { name: "Law Firms", icon: Scale },
  { name: "Medical Practices", icon: Stethoscope },
  { name: "Dental Clinics", icon: SmilePlus },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail & E-commerce", icon: ShoppingBag },
  { name: "Consulting", icon: Briefcase },
];

// Duplicate for seamless infinite scroll
const allIndustries = [...industries, ...industries];

export function ClientLogos() {
  return (
    <section className="relative py-16 border-y border-gray-700/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-gold uppercase tracking-wider">
          Trusted by businesses across industries
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -960] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {allIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={`${industry.name}-${i}`}
                className="flex items-center gap-3 shrink-0 text-gray-500 hover:text-gold transition-colors duration-300 group cursor-default"
              >
                <Icon className="h-6 w-6 transition-colors duration-300 group-hover:text-gold" />
                <span className="text-base font-medium whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

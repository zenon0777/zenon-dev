"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

export function CTABanner() {
  return (
    <section className="relative py-32 md:py-48 bg-bg-secondary">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background with gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-bg-primary to-gold/5" />
          <div className="absolute inset-[1px] rounded-3xl bg-bg-primary" />
          
          {/* Content */}
          <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/3 rounded-full blur-[60px]" />

            <h2 className="relative font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Build Your
              <br />
              <span className="text-gold-gradient">Digital Presence?</span>
            </h2>
            <p className="relative mt-6 max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
              Let&apos;s start with a free consultation — no obligations, just
              honest advice about what your business needs.
            </p>
            <div className="relative mt-10">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowUpRight className="h-5 w-5" />}
              >
                Book Your Free Call
              </Button>
            </div>
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}

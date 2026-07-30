"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 mb-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(200,167,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,167,78,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold-muted px-5 py-2 text-sm text-gold">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Digital Studio for Growing Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          We Build What
          <br />
          <span className="text-gold-gradient">Matters.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed mb-10"
        >
          High-ROI websites, mobile apps, and AI-powered automation — engineered
          to grow your business. Flat fees. Real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            See Our Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#contact"
            icon={<Play className="h-4 w-4" />}
          >
            Book a Call
          </Button>
        </motion.div>

        {/* Hero Visual — Website Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-bg-secondary shadow-2xl shadow-gold/5">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-tertiary border-b border-gray-700/50">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-bg-primary/50 border border-gray-700/30 flex items-center px-3">
                  <span className="text-xs text-gray-500">zenon.dev</span>
                </div>
              </div>
            </div>
            {/* Mockup image */}
            <Image
              src="/images/website-mockup.jpg"
              alt="Zenon Dev — Premium website built for growing businesses"
              width={1920}
              height={1080}
              className="w-full h-auto"
              preload
            />
          </div>
          {/* Glow under the mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gold/10 blur-[60px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

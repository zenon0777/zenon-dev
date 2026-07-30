"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-48 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Our Projects" />
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What We&apos;ve Built for
              <br />
              <span className="text-gold-gradient">Businesses Like Yours</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium group"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl overflow-hidden border border-gray-700/50 bg-bg-primary transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              {/* Image Area */}
              <div className="relative h-64 sm:h-72 bg-bg-tertiary overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-gold font-medium"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-bg-tertiary border border-gray-700/50 px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User, ExternalLink } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import Image from "next/image";

const MEDIUM_PROFILE = "https://zenon0777.medium.com";

const blogPosts = [
  {
    id: 1,
    title: "Why Every Law Firm Needs a Website in 2026",
    excerpt:
      "In the digital age, your online presence is your first impression. Discover why a professional website is no longer optional for legal practices.",
    category: "Digital Strategy",
    readTime: "5 min read",
    author: "Zenon Dev",
    url: `${MEDIUM_PROFILE}/why-every-law-firm-needs-a-website-in-2026-cf0435a336c9`,
    image: "/images/blog/law-firm.jpg",
  },
  {
    id: 2,
    title: "5 Ways AI Can Automate Your Medical Practice",
    excerpt:
      "From patient scheduling to triage bots, explore how artificial intelligence is transforming healthcare operations.",
    category: "AI & Automation",
    readTime: "7 min read",
    author: "Zenon Dev",
    url: `${MEDIUM_PROFILE}/5-ways-ai-can-automate-your-medical-practice-and-save-your-staff-from-burnout-e506c7700c6c`,
    image: "/images/blog/medical.jpg",
  },
  {
    id: 3,
    title: "The Real Cost of Not Having an Online Presence",
    excerpt:
      "Every day without a website is a day your competitors capture your potential clients. Here's what the data says.",
    category: "Business Growth",
    readTime: "4 min read",
    author: "Zenon Dev",
    url: `${MEDIUM_PROFILE}/the-real-cost-of-not-having-an-online-presence-912225944e34`,
    image: "/images/blog/business.jpg",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="relative mb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Blog" />
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Insights & <span className="text-gold-gradient">Resources</span>
            </h2>
          </div>
          <a
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium group"
          >
            View All Posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block rounded-2xl border border-gray-700/50 bg-bg-secondary overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  width={1000}
                  height={600}
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(${35 + index * 20}, 25%, 12%), 
                      hsl(${35 + index * 20}, 35%, 8%))`,
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-bg-primary/80 backdrop-blur-sm border border-gray-700/50 px-3 py-1 text-xs text-gold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read on Medium */}
                <span className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                  Read on Medium
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

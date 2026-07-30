"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";

const businessTypes = [
  "Law Firm",
  "Medical Practice",
  "Dental Clinic",
  "Retail / E-commerce",
  "Real Estate",
  "Consulting",
  "Restaurant / Hospitality",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Contact Us" />
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gold-gradient">Great Together</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Ready to take your business online? Tell us about your project and
              we&apos;ll get back to you within 24 hours with a tailored
              proposal.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gold-muted border border-gold/20 flex items-center justify-center">
                  <span className="text-gold text-lg">✉</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white font-medium">dev@adaifi.tech</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gold-muted border border-gold/20 flex items-center justify-center">
                  <span className="text-gold text-lg">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone/WhatsApp</div>
                  <div className="text-white font-medium">+212 619054801</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gold-muted border border-gold/20 flex items-center justify-center">
                  <span className="text-gold text-lg">📍</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white font-medium">
                    Remote — Worldwide
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-700/50 bg-bg-secondary p-8 sm:p-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-700/50 bg-bg-primary px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-700/50 bg-bg-primary px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone & Business Type — 2 column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-700/50 bg-bg-primary px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Business Type <span className="text-gold">*</span>
                  </label>
                  <select
                    id="businessType"
                    required
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-700/50 bg-bg-primary px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-bg-primary">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-700/50 bg-bg-primary px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-sm text-green-400">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  Message sent successfully! We&apos;ll get back to you within
                  24 hours.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-bg-primary font-semibold py-4 text-sm transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,167,78,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

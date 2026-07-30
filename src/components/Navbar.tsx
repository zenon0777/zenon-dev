"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Zenon Dev"
              width={200}
              height={44}
              className="h-11 w-50 transition-opacity duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gold transition-all duration-300 -translate-x-1/2 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Book a Free Call
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-gray-700/50 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-bg-tertiary rounded-lg transition-all duration-300"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

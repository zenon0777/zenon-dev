import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI & Automation", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Branding", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

// const socialLinks = [
//   {
//     label: "LinkedIn",
//     icon: <Linkedin />,
//     href: "https://www.linkedin.com/in/abderrahmane-daifi-2170721b8/",
//   },
// ];

export function Footer() {
  return (
    <footer className="border-t border-gray-700/30 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Zenon Dev"
                width={160}
                height={40}
                className=" transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              We&apos;re a digital studio dedicated to building high-ROI
              websites, mobile apps, and AI automation for growing businesses.
            </p>

            {/* Social links */}
            {/* <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="h-10 w-10 rounded-lg bg-bg-primary border border-gray-700/50 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <span className="text-xs font-bold">{link.label[0]}</span>
                </a>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            {/* Newsletter mini CTA */}
            <div className="mt-1">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Get in Touch
              </h4>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light transition-colors"
              >
                Book a free call
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Zenon Dev. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & Developed by Zenon Dev
          </p>
        </div>
      </div>
    </footer>
  );
}

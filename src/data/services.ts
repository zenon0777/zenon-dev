import { Globe, Smartphone, Bot, ShoppingBag, Palette, BarChart3, type LucideIcon } from "lucide-react";

export type Service = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 1,
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites engineered to convert visitors into clients. From law firms to dental practices — we build your digital storefront to win.",
    features: ["Next.js", "SEO-ready", "Mobile-first"],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps that extend your business into your customers' pockets. Built for reliability and designed for delight.",
    features: ["React Native", "iOS & Android", "Offline-ready"],
  },
  {
    id: 3,
    icon: Bot,
    title: "AI & Automation",
    description:
      "Eliminate repetitive work and capture leads 24/7. We integrate AI chatbots, booking assistants, and workflow automations that run while you sleep.",
    features: ["AI Chatbots", "Workflow Automation", "Lead Capture"],
  },
  {
    id: 4,
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with seamless checkout, inventory management, and payment integration — built to scale from day one.",
    features: ["Shopify", "Custom Cart", "Payment Gateways"],
  },
  {
    id: 5,
    icon: Palette,
    title: "Branding & UI/UX Design",
    description:
      "Your brand is your first impression. We craft visual identities and user experiences that make your business unforgettable and trusted.",
    features: ["Logo Design", "Design Systems", "User Research"],
  },
  {
    id: 6,
    icon: BarChart3,
    title: "SEO & Digital Growth",
    description:
      "Get found online by the clients actively searching for your services. We build and optimize your digital presence for long-term organic growth.",
    features: ["On-page SEO", "Local SEO", "Analytics"],
  },
];

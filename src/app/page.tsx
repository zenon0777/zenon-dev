import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        <BlogPreview />
        <div className="section-divider" />
        {/* <CTABanner /> */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

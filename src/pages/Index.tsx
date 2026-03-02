import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsCarousel from "@/components/PillarsCarousel";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PillarsCarousel />
      <Services />
      <AboutUs />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;

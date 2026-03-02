import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsCarousel from "@/components/PillarsCarousel";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import CompanyPhoto from "@/components/CompanyPhoto";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
            <PillarsCarousel />

      <AboutUs />
      <MissionVision />
      <CompanyPhoto />
      <CTASection />
      <ContactForm />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;

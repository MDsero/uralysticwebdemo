import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="problem">
          <ProblemSection />
        </section>
        
        <section id="about">
          <SolutionSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="why-us">
          <WhyChooseUsSection />
        </section>
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

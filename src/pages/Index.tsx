import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ShowcaseGallery } from "@/components/ShowcaseGallery";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import About from "@/components/About.tsx";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onContactClick={scrollToContact} />
      <ValueProposition />
      <ShowcaseGallery onContactClick={scrollToContact} />
      <ServicesOverview onContactClick={scrollToContact} />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

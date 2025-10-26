import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ShowcaseGallery } from "@/components/ShowcaseGallery";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onContactClick={scrollToContact} />
      <ValueProposition />
      <ShowcaseGallery />
      <ServicesOverview onContactClick={scrollToContact} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

import AboutSection from "@/components/organisms/AboutSection";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
    </div>
  );
}

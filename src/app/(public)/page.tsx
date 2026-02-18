import AboutSection from "@/components/organisms/AboutSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <FeatureSection/>
    </div>
  );
}

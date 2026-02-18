import AboutSection from "@/components/organisms/AboutSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <FeatureSection/>
      <TestimonialsSection/>
    </div>
  );
}

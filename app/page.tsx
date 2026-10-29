import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesHighlight from "@/components/ServicesHighlight/ServicesHighlight";
import AboutSection from "@/components/AboutSection/AboutSection";
import ComprehensiveServices from "@/components/ComprehensiveServices/ComprehensiveServices";
import IndustrySolutions from "@/components/IndustrySolutions/IndustrySolutions";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import CaseStudiesSection from "@/components/CaseStudiesSection/CaseStudiesSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ArticlesSection from "@/components/ArticlesSection/ArticlesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesHighlight />
      <AboutSection />
      <ComprehensiveServices />
      <IndustrySolutions />
      <WhyChooseUs />
      <CaseStudiesSection />
      <CtaBanner />
      <WorkProcessSection />
      <ConsultationSection />
      <TrustedBrandsSection />
      <TestimonialsSection />
      <ArticlesSection />
    </main>
  );
}

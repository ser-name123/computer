import PageEnhancements from "@/components/PageEnhancements/PageEnhancements";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesHighlight from "@/components/ServicesHighlight/ServicesHighlight";
import AboutSection from "@/components/AboutSection/AboutSection";
import ComprehensiveServices from "@/components/ComprehensiveServices/ComprehensiveServices";
import IndustrySolutions from "@/components/IndustrySolutions/IndustrySolutions";
import PricingSection from "@/components/PricingSection/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import CaseStudiesSection from "@/components/CaseStudiesSection/CaseStudiesSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ArticlesSection from "@/components/ArticlesSection/ArticlesSection";
import FooterSection from "@/components/FooterSection/FooterSection";

export default function Home() {
  return (
    <main>
      <PageEnhancements />
      <HeroSection />
      <ServicesHighlight />
      <AboutSection />
      <ComprehensiveServices />
      <IndustrySolutions />
      <PricingSection />
      <WhyChooseUs />
      <CaseStudiesSection />
      <CtaBanner />
      <WorkProcessSection />
      <ConsultationSection />
      <TrustedBrandsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FooterSection />
    </main>
  );
}

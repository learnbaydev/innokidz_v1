import FinalCTASection from "./components/Final-cta-section";
import HeroSection from "./components/Hero-section";
import LearningTrackSection from "./components/Learning-track-section";
import SkillsCombinationSection from "./components/Skills-combination-section";
import TestimonialsCompleteSection from "./components/Testimonials-complete-section";
import ThreeStepJourneySection from "./components/Three-step-journey-section";
import WhyCreativityMattersSection from "./components/Why-creativity-matters-section";
import CertificateSection from "./components/CertificateSection";
import HandsOnProject from "./components/HandsOnProject";

export default function Home() {
  return (
    <>
      {" "}
      <HeroSection />
      <HandsOnProject />
      <ThreeStepJourneySection />
      <SkillsCombinationSection />
      <WhyCreativityMattersSection />
      <LearningTrackSection />
      <CertificateSection />
      <TestimonialsCompleteSection />
      <FinalCTASection />
    </>
  );
}

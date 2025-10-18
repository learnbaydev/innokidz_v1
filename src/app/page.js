import FinalCTASection from "./components/Final-cta-section";
import HeroSection from "./components/Hero-section";
import LearningTrackSection from "./components/Learning-track-section";
import SkillsCombinationSection from "./components/Skills-combination-section";
import TestimonialsCompleteSection from "./components/Testimonials-complete-section";
import ThreeStepJourneySection from "./components/Three-step-journey-section";
import WhyCreativityMattersSection from "./components/Why-creativity-matters-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreeStepJourneySection />
      <SkillsCombinationSection />
      <WhyCreativityMattersSection />
      <LearningTrackSection />
      <TestimonialsCompleteSection />
      <FinalCTASection />
    </>
  );
}

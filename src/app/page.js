import FinalCTASection from "./components/Final-cta-section";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero-section";
import LearningTrackSection from "./components/Learning-track-section";
import Navigation from "./components/navigation";
import SkillsCombinationSection from "./components/Skills-combination-section";
import TestimonialsCompleteSection from "./components/Testimonials-complete-section";
import ThreeStepJourneySection from "./components/Three-step-journey-section";
import WhyCreativityMattersSection from "./components/Why-creativity-matters-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ThreeStepJourneySection />
      <SkillsCombinationSection />
      <WhyCreativityMattersSection />
      <LearningTrackSection />
      <TestimonialsCompleteSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}

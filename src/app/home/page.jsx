import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import ThreeStepJourneySection from "../components/three-step-journey-section";
import SkillsCombinationSection from "../components/skills-combination-section";
import WhyCreativityMattersSection from "../components/why-creativity-matters-section";
import LearningTrackSection from "../components/learning-track-section";
import TestimonialsCompleteSection from "../components/testimonials-complete-section";
import FinalCTASection from "../components/final-cta-section";
import Footer from "../components/footer";
// import { DemoModalProvider, useDemoModal } from "./DemoModalContext";
// import DemoBookingModal from "./DemoBookingModal";

function HomeContent() {
  // const { isOpen, closeModal } = useDemoModal();

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* <HeroSection /> */}
      <ThreeStepJourneySection />
      <SkillsCombinationSection />
      <WhyCreativityMattersSection />
      <LearningTrackSection />
      <TestimonialsCompleteSection />
      <FinalCTASection />
      <Footer />

      {/* Global Demo Booking Modal */}
      {/* <DemoBookingModal isOpen={isOpen} onClose={closeModal} /> */}
    </div>
  );
}

export default function Home() {
  return (
    // <DemoModalProvider>
    <HomeContent />
    //   </DemoModalProvider>
  );
}

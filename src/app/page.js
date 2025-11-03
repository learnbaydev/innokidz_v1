import Image from "next/image";
import HeroSection from "./components/Hero-section";
import ThreeStepJourneySection from "./components/Three-step-journey-section";
import SkillsCombinationSection from "./components/Skills-combination-section";
import WhyCreativityMattersSection from "./components/Why-creativity-matters-section";
import LearningTrackSection from "./components/Learning-track-section";
import TestimonialsCompleteSection from "./components/Testimonials-complete-section";
import FinalCTASection from "./components/Final-cta-section";

import CertificateSection from "./components/CertificateSection";
import { Hand } from "lucide-react";
import HandsOnProject from "./components/HandsOnProject";
import DashboardPage from "./dashboard/page";

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
      <DashboardPage />
    </>
  );
}

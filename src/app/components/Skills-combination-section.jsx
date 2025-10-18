"use client";
import {
  Monitor,
  Brain,
  Mic,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Star,
} from "lucide-react";
import { useState } from "react";
import codingKidsImage from "../../../public/codingKidsImage.png";
import aiThinkingImage from "../../../public/aiThinkingImage.png";
import presentingImage from "../../../public/presentingImage.png";
import Image from "next/image";

export default function SkillsCombinationSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const skills = [
    {
      icon: Monitor,
      title: "Master AI Tools",
      description:
        "Start with ChatGPT, Midjourney, and coding assistants - become an AI power user in days",
      stat: "8+ AI Tools Mastered",
      features: [
        "ChatGPT for Research",
        "Midjourney for Graphics",
        "GitHub Copilot for Code",
        "Claude for Writing",
      ],
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      rightContent: {
        headline: "AI-First Generation",
        subtext:
          "Your child will learn tools that 90% of adults don't know how to use",
        image: codingKidsImage,
        timeline: "Week 1",
        metric: "AI Fluency",
      },
    },
    {
      icon: Brain,
      title: "Build Real Products",
      description:
        "Code working apps, design stunning websites, and create games people actually want to play",
      stat: "3 Complete Projects",
      features: [
        "Interactive Web Apps",
        "Mobile-Ready Games",
        "Professional Websites",
        "API Integrations",
      ],
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      rightContent: {
        headline: "Portfolio Before High School",
        subtext:
          "Graduate with a GitHub portfolio that impresses college admissions and employers",
        image: aiThinkingImage,
        timeline: "Week 2-3",
        metric: "Real Projects",
      },
    },
    {
      icon: Mic,
      title: "Launch Like a Startup",
      description:
        "Present your startup idea to real mentors, get feedback, and learn what it takes to go viral",
      stat: "Live Investor Pitch",
      features: [
        "Pitch Deck Creation",
        "Demo Day Presentation",
        "Mentor Feedback",
        "Marketing Strategy",
      ],
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      rightContent: {
        headline: "Real Startup Experience",
        subtext:
          "Your child presents to actual entrepreneurs and investors - not just teachers",
        image: presentingImage,
        timeline: "Week 4",
        metric: "Live Pitch",
      },
    },
  ];

  const goToSlide = (index) => {
    if (index === activeSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide(index);
      setIsAnimating(false);
    }, 150);
  };

  const nextSlide = () => {
    const next = (activeSlide + 1) % skills.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (activeSlide - 1 + skills.length) % skills.length;
    goToSlide(prev);
  };

  const getColorClasses = (color) => {
    switch (color) {
      case "cyan":
        return {
          bg: "from-cyan-500 to-blue-500",
          icon: "bg-cyan-500",
          bullet: "text-cyan-500",
        };
      case "purple":
        return {
          bg: "from-purple-500 to-pink-500",
          icon: "bg-purple-500",
          bullet: "text-purple-500",
        };
      case "orange":
        return {
          bg: "from-orange-500 to-red-500",
          icon: "bg-orange-500",
          bullet: "text-orange-500",
        };
      default:
        return {
          bg: "from-slate-500 to-slate-600",
          icon: "bg-slate-500",
          bullet: "text-slate-500",
        };
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight font-poppins mb-6">
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              4 Weeks.
            </span>{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
              Real Results.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Real skills and confidence, not just certificates.
          </p>
        </div>

        {/* Compact Interactive Slider */}
        <div className="max-w-5xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Animated Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skills[activeSlide].bgGradient} transition-all duration-700 ease-in-out`}
            ></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[420px]">
              {/* Left Side - Main Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Animated Icon */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      skills[activeSlide].gradient
                    } rounded-xl flex items-center justify-center shadow-lg ${
                      isAnimating ? "scale-110" : "scale-100"
                    } transition-transform duration-300`}
                  >
                    {(() => {
                      const Icon = skills[activeSlide].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 font-poppins mb-4 leading-tight">
                  {skills[activeSlide].title}
                </h3>
                <p className="text-slate-700 text-base lg:text-lg mb-6 leading-relaxed">
                  {skills[activeSlide].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {skills[activeSlide].features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 opacity-0 animate-[fadeInUp_0.5s_ease-out_${
                        index * 0.1
                      }s_forwards]`}
                    >
                      <Star
                        className={`w-3.5 h-3.5 text-${skills[activeSlide].color}-500 flex-shrink-0`}
                      />
                      <span className="text-slate-600 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat Badge */}
                <div
                  className={`inline-flex items-center bg-gradient-to-r ${skills[activeSlide].gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg max-w-fit`}
                >
                  <Zap className="w-3.5 h-3.5 mr-1.5" />
                  {skills[activeSlide].stat}
                </div>
              </div>

              {/* Right Side - Compelling Copy & Visuals */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/50 to-transparent">
                {/* Main Content */}
                <div className="text-center">
                  {/* Real Image */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`w-56 h-40 rounded-2xl shadow-xl ${
                        isAnimating ? "scale-105" : "scale-100"
                      } transition-all duration-500 relative overflow-hidden`}
                    >
                      <Image
                        src={skills[activeSlide].rightContent.image}
                        alt={skills[activeSlide].rightContent.headline}
                        className="w-full h-full object-cover"
                      />

                      {/* Floating sparkles */}
                      <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-500"></div>
                    </div>
                  </div>

                  {/* Compelling Headlines */}
                  <h4 className="text-xl lg:text-2xl font-black text-slate-900 font-poppins mb-3 leading-tight">
                    {skills[activeSlide].rightContent.headline}
                  </h4>

                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-4 max-w-md mx-auto">
                    {skills[activeSlide].rightContent.subtext}
                  </p>

                  {/* Timeline and Milestone stats only */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200">
                      <div className="text-base font-bold text-slate-900">
                        {skills[activeSlide].rightContent.timeline}
                      </div>
                      <div className="text-xs text-slate-600">Timeline</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200">
                      <div className="text-base font-bold text-slate-900">
                        {skills[activeSlide].rightContent.metric}
                      </div>
                      <div className="text-xs text-slate-600">Milestone</div>
                    </div>
                  </div>
                </div>

                {/* Background accent elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows Below Cards */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-slate-800" />
            </button>

            <div className="flex space-x-3">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? `bg-gradient-to-r ${skills[index].gradient} shadow-lg scale-125`
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-slate-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

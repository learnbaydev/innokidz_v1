"use client";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import heroImage from "../../../public/hero-section-four-kids.png";
import InnoKidzForm from "../components/demo-booking-modal";

export default function HeroSection() {
  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpen = () => {
    setIsFormOpen(true);
  };
  // ----------------------z--------------------

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-6">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
            {/* Dark Badge */}
            <div className="inline-flex items-center bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg max-w-fit hover:scale-105 transition-all duration-300 hover:bg-black/40">
              <Rocket className="w-5 h-5 text-white/90 mr-3" />
              <span className="text-white/95 text-base font-semibold">
                Building Future Entrepreneurs
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-poppins font-black text-[2.6rem] sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-4 sm:mb-6">
                <span className="text-white block">Kids Who</span>
                <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text block">
                  Code & Create
                </span>
                <span className="text-white block">Rule Tomorrow</span>
              </h1>

              <p className="text-[0.9375rem] sm:text-lg lg:text-xl text-white/85 font-medium leading-relaxed max-w-xl font-poppins">
                Turn your child into an AI entrepreneur building real startups.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 sm:pt-4">
              {/* Button 1 - Opens Form */}
              <button
                onClick={handleOpen}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-2xl font-bold text-base sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform glow-pink font-poppins"
              >
                Learn More
              </button>

              <InnoKidzForm open={isFormOpen} onOpenChange={setIsFormOpen} />

              {/* Button 2 - Scrolls to Curriculum */}
              <button
                onClick={() => {
                  const section = document.getElementById("curriculum");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-2xl font-bold text-base sm:text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:glow-blue font-poppins"
              >
                View Program
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-2xl mx-auto p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-4 border-2 border-purple-400/30 shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Young entrepreneurs learning coding and AI skills"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

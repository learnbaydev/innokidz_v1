"use client";
import { useState } from "react";
import { Menu, X, Calendar, Code, Star, User } from "lucide-react";
// import { useDemoModal } from "@/hooks/use-demo-modal";
// import { button } from "@radix-ui/themes";

import logoPath from "../../../public/innokidz-logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { openModal } = useDemoModal();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* InnoKidz Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              <Image
                src={logoPath}
                alt="InnoKidz"
                className="h-8 lg:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Right side: Navigation + CTA button and Mobile Menu */}
          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("curriculum")}
                className="flex items-center space-x-2 px-5 py-2.5 text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 rounded-xl font-semibold text-lg font-poppins border border-transparent hover:border-purple-200 group"
              >
                <Star
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span>AI Tech Entrepreneurship Program</span>
              </button>
              <Link
                href="/about"
                className="px-5 py-2.5 text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 rounded-xl font-semibold text-lg font-poppins border border-transparent hover:border-purple-200"
              >
                <span>About Us</span>
              </Link>
            </div>

            {/* CTA button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA button - Rounded Square */}
              <button
                // onClick={openModal}
                className="hidden md:inline-flex relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/40 font-bold px-6 py-6 text-base transform hover:scale-105 transition-all duration-300 font-poppins overflow-hidden group rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                <Calendar
                  className="mr-2 relative z-10"
                  size={18}
                  strokeWidth={2.5}
                />
                <span className="relative z-10">Book Free Demo</span>
              </button>

              {/* Login Text */}
              <div className="hidden md:block">
                <span className="text-gray-600 hover:text-purple-600 cursor-pointer font-medium text-base font-poppins transition-colors duration-300">
                  Login
                </span>
              </div>

              {/* Mobile Menu button */}
              <button
                // variant="ghost"
                // size="icon"
                className="md:hidden text-gray-700 hover:bg-purple-50 ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-6">
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollToSection("curriculum")}
                className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-all duration-300 text-left py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-semibold text-base font-poppins border border-transparent hover:border-purple-200 group"
              >
                <Star
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span>AI Tech Entrepreneurship Program</span>
              </button>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-all duration-300 text-left py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-semibold text-base font-poppins border border-transparent hover:border-purple-200 group"
              >
                <Code
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span>About Us</span>
              </Link>

              {/* Mobile CTA button - Rounded Square */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <button
                  // onClick={openModal}
                  className="w-full relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/40 font-bold px-8 py-4 text-base transform hover:scale-105 transition-all duration-300 font-poppins overflow-hidden group rounded-2xl mb-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                  <Calendar
                    className="mr-2.5 relative z-10"
                    size={20}
                    strokeWidth={2.5}
                  />
                  <span className="relative z-10">Book Free Demo</span>
                </button>

                {/* Mobile Login */}
                <div className="text-center">
                  <span className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-all duration-300 text-left py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-semibold text-base font-poppins border border-transparent hover:border-purple-200 group">
                    Login
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

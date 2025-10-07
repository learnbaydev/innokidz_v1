"use client";
import { useState } from "react";
import {
  Menu,
  X,
  Calendar,
  Code,
  Star,
  Users,
  Rocket, // Added a placeholder icon for the "About Us" link
} from "lucide-react";

// --- Mocking External Dependencies for Single-File Environment ---

// Mock Button Component (Replaces "@/components/ui/button")
const Button = ({ children, onClick, className, variant, size, ...props }) => {
  const baseClasses =
    "flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none";
  let variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  // Custom class for the main CTA button
  if (className.includes("bg-gradient-to-r")) {
    variantClasses = "text-white"; // Overridden by Tailwind classes in className
  } else if (variant === "ghost") {
    variantClasses = "bg-transparent hover:bg-purple-50";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Mock useDemoModal Hook (Replaces "@/hooks/use-demo-modal")
const useDemoModal = () => ({
  openModal: () => {
    // In a real app, this would open a custom modal UI.
    console.log("Action: Book Free Demo modal simulated to open.");
  },
});

// Mock wouter for single-file environment (Replaces "wouter")
// Since wouter is only used for tracking location (unused state) and Link, we simplify it.
const useLocation = () => {
  // Mock the required hook structure: [location, setLocation]
  const [location] = useState("/");
  return [location, () => {}];
};
const Link = ({ href, children, ...props }) => {
  // Use an anchor tag and log the navigation attempt
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        console.log(`Navigation attempt to: ${href}`);
        props.onClick && props.onClick(); // Execute original onClick if present (e.g., closing mobile menu)
      }}
      {...props}
    >
      {children}
    </a>
  );
};
// --- End Mocking ---

export default function App() {
  // Renamed from Navigation to App
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useDemoModal();
  const [location] = useLocation(); // Unused but keeps the structure

  // Replaced external image path with a text logo for compliance
  const logoPath = "InnoKidz";

  const scrollToSection = (sectionId) => {
    // In this single-file context, we just simulate the scroll
    console.log(`Simulating scroll to section: ${sectionId}`);
    // A real implementation would look up the element by ID

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
              {/* Using a text logo as a placeholder for the imported image */}
              <span className="text-3xl font-extrabold text-purple-600 tracking-tight">
                {logoPath}
              </span>
            </Link>
          </div>

          {/* Right side: Navigation + CTA Button and Mobile Menu */}
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

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA Button - Rounded Square */}
              <Button
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
              </Button>

              {/* Login Text */}
              <div className="hidden md:block">
                <span
                  className="text-gray-600 hover:text-purple-600 cursor-pointer font-medium text-base font-poppins transition-colors duration-300"
                  onClick={() => console.log("Action: Login clicked.")}
                >
                  Login
                </span>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 hover:bg-purple-50 ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
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
                  className="group-hover:scale-110 transition-transform duration-200 text-yellow-500"
                />
                <span>AI Tech Entrepreneurship Program</span>
              </button>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-all duration-300 text-left py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-semibold text-base font-poppins border border-transparent hover:border-purple-200 group"
              >
                <Rocket
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-200 text-pink-500"
                />
                <span>About Us</span>
              </Link>

              {/* Mobile CTA Button - Rounded Square */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Button
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
                </Button>

                {/* Mobile Login */}
                <div className="text-center">
                  <span
                    className="text-gray-600 hover:text-purple-600 cursor-pointer font-medium text-base font-poppins transition-colors duration-300"
                    onClick={() => console.log("Action: Mobile Login clicked.")}
                  >
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

import { Rocket, Shield, Award, Users, ArrowRight, Star } from "lucide-react";
// import { useDemoModal } from '@/hooks/use-demo-modal';

export default function FinalCTASection() {
  // const { openModal } = useDemoModal();
  const trustBadges = [
    {
      icon: Award,
      text: "Built by IIT/IIM Alumni",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Users,
      text: "Backed by Real Startup Mentors",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      text: "100% Safe Learning Environment",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      icon: Star,
      text: "500+ Success Stories",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-cyan-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-pink-400/20 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
              <Rocket className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-sm font-poppins">
                Ready to Launch Your Child's Future?
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-poppins">
              Transform Your Child Into a
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-cyan-400 to-pink-400 bg-clip-text">
                Future Entrepreneur
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
              Join hundreds of families who've already given their kids the
              ultimate competitive advantage. Your child's entrepreneurial
              journey starts with a single click.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center max-w-2xl mx-auto">
            <button
              // onClick={openModal}
              className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-poppins">Book Free Demo Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Brain,
  Rocket,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Code2,
  Megaphone,
  AlertTriangle,
  Clock,
  TrendingDown,
  Target,
  Zap,
  Award,
} from "lucide-react";
// import { useDemoModal } from '@/hooks/use-demo-modal';

export default function WhyCreativityMattersSection() {
  // const { openModal } = useDemoModal();

  const parentChallenges = [
    {
      number: "1",
      icon: AlertTriangle,
      title: "Screen Time Feels Wasted",
      description:
        "Your child spends hours gaming or on YouTube, but you worry they're not learning anything valuable for their future.",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      borderGradient: "border-red-200 hover:border-red-300",
    },
    {
      number: "2",
      icon: Clock,
      title: "Falling Behind Tech Trends",
      description:
        "AI is everywhere, but traditional schools aren't teaching these skills. You want your child prepared for tomorrow's world.",
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50",
      borderGradient: "border-amber-200 hover:border-amber-300",
    },
    {
      number: "3",
      icon: TrendingDown,
      title: "Lacks Confidence & Direction",
      description:
        "Your child is smart but struggles with problem-solving and presenting ideas. They need skills that build real confidence.",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      borderGradient: "border-blue-200 hover:border-blue-300",
    },
  ];

  const ourSolutions = [
    {
      icon: Target,
      title: "Productive Screen Time",
      description:
        "Transform passive consumption into active creation. Build real projects while having fun.",
      skills: ["Project-Based Learning", "Hands-On Building"],
      gradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-500",
      metrics: "3+ hours daily → Real skills",
      outcome: "Portfolio of working projects",
    },
    {
      icon: Zap,
      title: "Future-Ready Skills",
      description:
        "Master AI tools, coding fundamentals, and entrepreneurship - the exact skills for tomorrow's world.",
      skills: ["AI Literacy", "Modern Tech Stack"],
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500",
      metrics: "6-year head start on peers",
      outcome: "Job-ready skills by age 16",
    },
    {
      icon: Award,
      title: "Build Real Confidence",
      description:
        "Present startup ideas to actual entrepreneurs and investors. Watch shy kids become confident leaders.",
      skills: ["Public Speaking", "Problem Solving"],
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500",
      metrics: "Live pitch to real mentors",
      outcome: "Leadership skills for life",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight font-poppins mb-6">
            Problems.{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text">
              Solutions.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Screen time to skill time.
          </p>
        </div>

        {/* Improved Layout with Better Alignment */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* LEFT PANEL - Parent Challenges (3 columns) */}
          <div className="lg:col-span-3">
            {/* Enhanced Panel Header */}
            <div className="text-center lg:text-left mb-12">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg shadow-red-500/30 mb-4">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm font-poppins tracking-wide">
                  PARENT CHALLENGES
                </span>
              </div>
              <p className="text-slate-600 text-base font-medium">
                Common concerns every parent has about their child's future
              </p>
            </div>

            {/* Improved Cards with Better Visual Hierarchy */}
            <div className="space-y-4">
              {parentChallenges.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className={`group relative bg-gradient-to-r ${card.bgGradient} rounded-2xl p-6 lg:p-8 border ${card.borderGradient} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="relative">
                      <div className="flex items-start space-x-6">
                        {/* Enhanced Number Badge */}
                        <div
                          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-white font-black text-2xl">
                            {card.number}
                          </span>
                        </div>

                        {/* Improved Content Layout */}
                        <div className="flex-1 min-w-0 pt-2">
                          <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 font-poppins mb-4 leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-slate-700 text-lg leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL - Our Solutions (2 columns) */}
          <div className="lg:col-span-2">
            {/* Enhanced Panel Header - Left Aligned */}
            <div className="text-left mb-12">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-500/30 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold text-sm font-poppins tracking-wide">
                  HOW WE SOLVE IT
                </span>
              </div>
              <p className="text-slate-600 text-base font-medium">
                Proven solutions that work for thousands of families
              </p>
            </div>

            {/* Extended Solutions Box - Matching Left Side Height */}
            <div className="group relative bg-gradient-to-r from-white to-emerald-50/50 rounded-2xl p-8 lg:p-10 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[580px] flex flex-col justify-center">
              <div className="relative">
                {/* All 3 Solution Points in One Box */}
                <div className="space-y-8">
                  {ourSolutions.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex items-start space-x-6">
                        {/* Larger Icon */}
                        <div
                          className={`flex-shrink-0 w-16 h-16 ${step.iconBg} rounded-xl flex items-center justify-center shadow-md`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Enhanced Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl lg:text-2xl font-bold text-slate-900 font-poppins mb-3 leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Horizontal Layout */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - OUR SOLUTIONS Badge and Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full shadow-lg shadow-yellow-400/30 mb-4">
                <span className="font-bold text-sm font-poppins tracking-wide">
                  OUR SOLUTIONS
                </span>
              </div>
              <p className="text-slate-700 text-lg font-medium">
                Turn every challenge into measurable growth and real skills
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex-shrink-0">
              <button
                // onClick={openModal}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Start Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-xs text-slate-500 font-medium mt-2 text-center">
                Book a 15-minute demo • See exactly how your child will learn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Code, Lightbulb, Rocket, ArrowRight, Star, Users } from "lucide-react";

export default function ProgramHighlightsSection() {
  const highlights = [
    {
      icon: Code,
      title: "Build",
      subtitle: "Real Apps & Games",
      description: "Create real apps and games",
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Lightbulb,
      title: "Learn", 
      subtitle: "AI & Coding Skills",
      description: "Master AI tools and coding fundamentals",
      color: "from-indigo-600 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50", 
      borderColor: "border-indigo-200"
    },
    {
      icon: Rocket,
      title: "Launch",
      subtitle: "Your Own Startup",
      description: "Turn ideas into real businesses",
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 font-poppins">
            Three Steps to 
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text"> Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            From beginner to entrepreneur in 4 weeks
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative group">
              {/* Connection Line - Only on desktop */}
              {index < highlights.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
              )}
              
              {/* Card */}
              <div className={`bg-gradient-to-br ${highlight.bgColor} rounded-3xl p-8 border-2 ${highlight.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full relative`}>
                
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-gray-300/80 select-none pointer-events-none">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1 font-poppins">
                      {highlight.title}
                    </h3>
                    <p className={`text-lg font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                      {highlight.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {highlight.description}
                  </p>
                  
                  {/* Success Indicators */}
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="flex items-center space-x-1">
                      <Star className={`w-4 h-4 text-emerald-500`} />
                      <span className="text-sm text-gray-600 font-semibold">Proven</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className={`w-4 h-4 text-emerald-500`} />
                      <span className="text-sm text-gray-600 font-semibold">Guided</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-3 border border-purple-200">
            <span className="text-purple-800 font-semibold">
              ✨ Complete all three phases in our 4-week program
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
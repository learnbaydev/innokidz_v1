import { Code2, Lightbulb, Gamepad2, Users, Presentation, Target, Sparkles, Brain } from "lucide-react";

export default function AboutSection() {
  const futureProfessions = [
    {
      icon: Code2,
      title: "Future Software Engineer",
      description: "By 2030, coding will be as essential as reading. Your child gets a 6-year head start.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["$150K+ Average Salary", "Remote Work Flexibility"],
      stats: "92% Job Growth by 2030"
    },
    {
      icon: Lightbulb,
      title: "AI Product Manager",
      description: "The fastest-growing role in tech. Companies desperately need people who understand both AI and business.",
      gradient: "from-purple-500 to-pink-500",
      features: ["$200K+ Starting Salary", "Shape Future Technology"],
      highlighted: true,
      stats: "500% Growth Since 2020"
    },
    {
      icon: Users,
      title: "Tech Entrepreneur",
      description: "Young founders are taking over. Mark Zuckerberg, Evan Spiegel, and others started as teenagers.",
      gradient: "from-orange-500 to-red-500",
      features: ["Unlimited Earning Potential", "Change the World"],
      stats: "65% of Unicorns Founded by Under 30s"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2MSwxNjEsMTcwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm font-poppins">Transform Your Child's Future</span>
          </div>
          
          <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight font-poppins">
            Your Child's Future Career
            <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 bg-clip-text">
              Starts Today
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            High-paying jobs of 2030. Your child can be ready now.
          </p>
        </div>

        {/* Career Path Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {futureProfessions.map((career, index) => {
            const Icon = career.icon;
            return (
              <div key={index} className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden ${career.highlighted ? 'border-2 border-purple-400 transform -translate-y-2 shadow-2xl' : ''}`}>
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${career.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Growth Stats Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {career.stats}
                </div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${career.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-purple-700 transition-colors duration-300">
                    {career.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-poppins mb-6">
                    {career.description}
                  </p>
                  
                  {/* Salary & Benefits */}
                  <div className="space-y-3">
                    {career.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-base text-gray-600">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${career.gradient} mr-3`}></div>
                        <span className="font-semibold font-poppins">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${career.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Banner */}
        <div className="relative mt-20">
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            
            {/* Floating Effects */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black mb-6 font-poppins">
                Don't Let Your Child Fall Behind
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-12 font-poppins leading-relaxed">
                While other kids play games, your child could be building the skills that create millionaires.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => {
                    const ctaSection = document.getElementById('cta');
                    if (ctaSection) {
                      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform font-poppins"
                >
                  Start Free Trial
                </button>
                <button 
                  onClick={() => {
                    const curriculumSection = document.getElementById('curriculum');
                    if (curriculumSection) {
                      curriculumSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 font-poppins"
                >
                  View Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Brain, Wrench, Rocket, Briefcase } from 'lucide-react';
import kidImage from '@assets/ChatGPT Image Jun 29, 2025, 10_55_16 PM_1751218062651.png';

export default function WhyAIEarlySection() {
  const benefits = [
    {
      icon: Brain,
      heading: "AI-Powered Innovation",
      description: "Master AI tools to solve real-world problems faster than ever.",
      color: "from-purple-600 to-pink-600",
      highlight: "Innovation"
    },
    {
      icon: Rocket,
      heading: "Launch Real Startups",
      description: "Build and deploy actual products that people use and love.",
      color: "from-cyan-500 to-blue-500",
      highlight: "Create"
    }
  ];

  return (
    <section className="pt-8 pb-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSJyZ2JhKDEyOCwgOTAsIDIxMywgMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins leading-relaxed mb-4">
            <span className="text-gray-900 block mb-2">Why Should Kids Learn to</span>
            <span className="text-transparent bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 bg-clip-text block">
              Build with AI Early?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-poppins leading-relaxed max-w-2xl mx-auto">
            Prepare your child for tomorrow's startup world.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon size={32} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Highlight Badge */}
                      <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${benefit.color} text-white text-sm font-semibold rounded-full mb-4 opacity-90`}>
                        {benefit.highlight}
                      </div>
                      
                      <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                        {benefit.heading}
                      </h3>
                      <p className="text-lg text-gray-600 font-poppins leading-relaxed font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="lg:order-last order-first">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={kidImage}
                  alt="Young entrepreneur working on laptop"
                  className="w-full h-auto object-cover rounded-3xl"
                  loading="lazy"
                  decoding="async"
                  style={{
                    aspectRatio: '4/3'
                  }}
                />
                
                {/* Floating Tech Elements */}
                <div className="absolute top-8 right-8 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 left-6 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-bounce delay-1000"></div>
                
                {/* Success Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Future Ready</span>
                  </div>
                </div>
              </div>
              
              {/* Multiple Decorative Glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl -z-10 transform scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/15 to-blue-400/15 rounded-3xl blur-xl -z-20 transform scale-125 animate-pulse delay-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
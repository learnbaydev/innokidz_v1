import { useState } from 'react';
import { BookOpen, Code2, Rocket, CheckCircle, Star, Target, Users, TrendingUp, ArrowRight, Clock, Award, Palette, Globe, Smartphone, BarChart3, Video, Zap } from 'lucide-react';
import { SiChatbot, SiCanva, SiReplit, SiGoogleforms, SiGooglesheets, SiNotion } from 'react-icons/si';
import { useDemoModal } from '@/hooks/use-demo-modal';

export default function LearningTrackSection() {
  const { openModal } = useDemoModal();
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weeklyProgram = {
    1: {
      title: "Foundation & Orientation",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      days: [
        {
          day: 1,
          title: "Orientation",
          goal: "Introduction to AI, startups, and tools",
          icon: Rocket,
          techLogos: [SiChatbot, SiCanva, SiReplit],
          activities: [
            "Icebreaker + workshop overview",
            "Demo of key tools (ChatGPT, Canva, Replit)",
            "Explain project expectations (website + app in 4 days)"
          ]
        },
        {
          day: 2,
          title: "Team Formation & Startup Selection",
          goal: "Form teams, pick ideas, learn prompt engineering",
          icon: Users,
          techLogos: [SiChatbot, SiCanva],
          activities: [
            "Team formation (5 teams of 2)",
            "Pick 1 startup idea from a list (e.g., 'AI Homework Helper')",
            "Use ChatGPT to draft: Product name, 1-line pitch, 3-line description",
            "Ideogram demo (generate logo concepts)"
          ]
        }
      ]
    },
    2: {
      title: "Design & Branding",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      days: [
        {
          day: 3,
          title: "Logo & Branding",
          goal: "Create brand identity (logo, colors, social bios)",
          icon: Palette,
          techLogos: [SiCanva, SiChatbot],
          activities: [
            "Finalize logo using Ideogram",
            "Create brand colors (Coolors.co)",
            "Design social media bios (ChatGPT-assisted)",
            "Mock up a 'Brand Board' in Canva"
          ]
        },
        {
          day: 4,
          title: "Website Building (Front End)",
          goal: "Build a landing page with AI assistance",
          icon: Globe,
          techLogos: [SiReplit, SiChatbot, SiCanva],
          activities: [
            "Start with a Replit template (pre-made HTML/CSS)",
            "Add: Logo + hero section",
            "ChatGPT-generated 'About Us'",
            "Canva-made banners",
            "Publish first version"
          ]
        }
      ]
    },
    3: {
      title: "Development & Features",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      days: [
        {
          day: 5,
          title: "App/Feature Expansion",
          goal: "Add functionality (app or website features)",
          icon: Smartphone,
          techLogos: [SiGoogleforms, SiReplit],
          activities: [
            "Option 1: Build app with MIT App Inventor (if time allows)",
            "Option 2: Add website features (Google Forms, new pages)",
            "Integrate interactive elements",
            "Test functionality across devices"
          ]
        },
        {
          day: 6,
          title: "Marketing Creatives",
          goal: "Design promo content (posters, videos)",
          icon: Video,
          techLogos: [SiCanva],
          activities: [
            "Create in Canva: 1 poster, 3-slide carousel",
            "Use D-ID to generate a 20-sec AI video pitch",
            "Edit promo reels with CapCut",
            "Develop social media content strategy"
          ]
        }
      ]
    },
    4: {
      title: "Launch & Analytics",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      days: [
        {
          day: 7,
          title: "Automation & Analytics",
          goal: "Add simple AI automation + mock analytics",
          icon: Zap,
          techLogos: [SiGoogleforms, SiGooglesheets, SiNotion],
          activities: [
            "Set up: Google Form → Sheets (feedback tracker)",
            "n8n demo (e.g., 'Notify team on new signups')",
            "Create mock 'user metrics' in Sheets",
            "Implement basic automation workflows"
          ]
        },
        {
          day: 8,
          title: "Presentations",
          goal: "Demo websites/apps + reflect on AI tools",
          icon: BarChart3,
          techLogos: [SiCanva, SiReplit],
          activities: [
            "Each team presents: Live website/app demo",
            "2-min pitch (use D-ID avatar if pre-recorded)",
            "Vote for 'Best AI Startup' (fun incentive!)",
            "Reflection and next steps discussion"
          ]
        }
      ]
    }
  };

  return (
    <section id="curriculum" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight font-poppins mb-4 sm:mb-6 px-4">
            Your Child's{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              4-Week Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed px-4">
            From beginner to young entrepreneur in 4 weeks
          </p>
        </div>

        {/* Week Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-2xl p-3 gap-3">
            {[1, 2, 3, 4].map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedWeek === week
                    ? `bg-gradient-to-r ${weeklyProgram[week as keyof typeof weeklyProgram].gradient} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
        </div>

        {/* Week Content */}
        <div className="relative">
          <div className={`bg-gradient-to-br ${weeklyProgram[selectedWeek as keyof typeof weeklyProgram].bgGradient} rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-200`}>
            {/* Week Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-poppins">
                Week {selectedWeek}: {weeklyProgram[selectedWeek as keyof typeof weeklyProgram].title}
              </h3>
            </div>

            {/* Day Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {weeklyProgram[selectedWeek as keyof typeof weeklyProgram].days.map((day, index) => {
                const Icon = day.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
                  >
                    {/* Day Number Badge */}
                    <div className="absolute -top-4 left-8">
                      <div className={`w-8 h-8 bg-gradient-to-r ${weeklyProgram[selectedWeek as keyof typeof weeklyProgram].gradient} text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg`}>
                        {day.day}
                      </div>
                    </div>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-purple-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${weeklyProgram[selectedWeek as keyof typeof weeklyProgram].gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 font-poppins mb-3 leading-tight">
                        Day {day.day}: {day.title}
                      </h4>
                      <p className="text-slate-600 text-base lg:text-lg font-medium mb-6 leading-relaxed">
                        <strong>Goal:</strong> {day.goal}
                      </p>

                      {/* Tech Logos Section */}
                      {day.techLogos && day.techLogos.length > 0 && (
                        <div className="mb-6">
                          <h5 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                            Tools Used
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {day.techLogos.map((TechIcon, logoIndex) => (
                              <div 
                                key={logoIndex}
                                className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                              >
                                <TechIcon className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-200" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Activities List */}
                      <div>
                        <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          Activities
                        </h5>
                        <ul className="space-y-3">
                          {day.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${weeklyProgram[selectedWeek as keyof typeof weeklyProgram].gradient} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-slate-600 text-sm lg:text-base leading-relaxed">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 font-poppins">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join our program and watch your child build real projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={openModal}
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
                View Full Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
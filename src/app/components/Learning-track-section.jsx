"use client";

import { useState } from "react";
import {
  BookOpen,
  Rocket,
  Users,
  Palette,
  Globe,
  Smartphone,
  Video,
  Zap,
  BarChart3,
} from "lucide-react";
import {
  SiChatbot,
  SiCanva,
  SiReplit,
  SiGoogleforms,
  SiGooglesheets,
  SiNotion,
} from "react-icons/si";

export default function LearningTrackSection() {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weeklyProgram = {
    1: {
      title: "Foundation & Orientation",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      days: [
        {
          day: 1,
          title: "Introduction to AI ",
          goal: "Grasp what AI is, how it’s changing the world, and the basics of LLMs and prompt engineering",
          icon: Rocket,
          techLogos: [SiChatbot, SiCanva, SiReplit],
          activities: [
            "what is AI",
            "How AI is taking over the world",
            "what are LLMs, Prompt engineering",
          ],
        },
        {
          day: 2,
          title: "Bringing AI to life ",
          goal: "Master the art of creating images, videos and build comics exercising prompt based creativity",
          icon: Users,
          techLogos: [SiChatbot, SiCanva],
          activities: [
            "Generating videos and images using AI",
            "Generating comics",
            "Prompt based creativity",
          ],
        },
      ],
    },
    2: {
      title: "Design & Branding",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      days: [
        {
          day: 3,
          title: "Homework Genie ",
          goal: "Create smart presentations and sharpen public speaking with AI",
          icon: Palette,
          techLogos: [SiCanva, SiChatbot],
          activities: [
            "Create presentations",
            "Learn presenting and public speaking",
          ],
        },
        {
          day: 4,
          title: "Lights, Camera, Action ",
          goal: "Learn to showcase your marketing ideas through posters and carousels using AI",
          icon: Globe,
          techLogos: [SiReplit, SiChatbot, SiCanva],
          activities: ["Generate posters", "Carousels"],
        },
      ],
    },
    3: {
      title: "Development & Features",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      days: [
        {
          day: 5,
          title: "Reels and more ",
          goal: "Generate voices, avatars, and short videos with AI",
          icon: Smartphone,
          techLogos: [SiGoogleforms, SiReplit],
          activities: ["voice generaration", "AI video avatars"],
        },
        {
          day: 6,
          title: "Google who? ",
          goal: "Design promo content (posters, videos)",
          icon: Video,
          techLogos: [SiCanva],
          activities: ["Build your own website", "App", "Project planning"],
        },
      ],
    },
    4: {
      title: "Launch & Analytics",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      days: [
        {
          day: 7,
          title: "Shh! Secret study hacks ",
          goal: "Use AI to study smarter, stay organized, and automate daily tasks",
          icon: Zap,
          techLogos: [SiGoogleforms, SiGooglesheets, SiNotion],
          activities: [
            "Use AI for daily tasks",
            "Studies",
            "Create Smart Assistant",
          ],
        },
        {
          day: 8,
          title: "Congratulaions! ",
          goal: "Review your work, showcase projects, and celebrate your progress",
          icon: BarChart3,
          techLogos: [SiCanva, SiReplit],
          activities: ["Final review", "Discussion"],
        },
      ],
    },
  };

  return (
    <section
      id="curriculum"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
            Your Child&apos;s{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              4-Week Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
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
                className={`px-4 py-1 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedWeek === week
                    ? `bg-gradient-to-r ${weeklyProgram[week].gradient} text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
        </div>

        {/* Week Content */}
        <div
          className={`bg-gradient-to-br ${weeklyProgram[selectedWeek].bgGradient} rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-200`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Week {selectedWeek}: {weeklyProgram[selectedWeek].title}
            </h3>
          </div>

          {/* Days Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {weeklyProgram[selectedWeek].days.map((day, index) => {
              const Icon = day.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
                >
                  {/* Day Badge */}
                  <div className="absolute -top-4 left-8">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${weeklyProgram[selectedWeek].gradient} text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg`}
                    >
                      {day.day}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${weeklyProgram[selectedWeek].gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                    Day {day.day}: {day.title}
                  </h4>
                  <p className="text-slate-600 text-base lg:text-lg font-medium mb-6 leading-relaxed">
                    <strong>Goal:</strong> {day.goal}
                  </p>

                  {/* Tools */}
                  {day.techLogos?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        Tools Used
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {day.techLogos.map((TechIcon, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            <TechIcon className="w-6 h-6 text-slate-600" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Activities */}
                  <div>
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Activities
                    </h5>
                    <ul className="space-y-3">
                      {day.activities.map((activity, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${weeklyProgram[selectedWeek].gradient} rounded-full mt-2`}
                          ></div>
                          <span className="text-slate-600 text-sm lg:text-base leading-relaxed">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
              Ready to Start Your Child&apos;s Journey?
            </h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join our program and watch your child build real projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:scale-105">
                Start Free Trial
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("curriculum")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
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

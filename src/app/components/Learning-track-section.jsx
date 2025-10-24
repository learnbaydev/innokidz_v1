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
  const [levelUnlocked, setLevelUnlocked] = useState(false);

  const weeklyProgram = {
    1: {
      title: "Foundation & Orientation",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      days: [
        {
          day: 1,
          title: "Introduction to AI",
          goal: "Grasp what AI is, how it’s changing the world, and the basics of LLMs and prompt engineering.",
          icon: Rocket,
          techLogos: [SiChatbot, SiCanva, SiReplit],
          activities: [
            "What is AI",
            "How AI is taking over the world",
            "What are LLMs, Prompt engineering",
          ],
        },
        {
          day: 2,
          title: "Bringing AI to Life",
          goal: "Master the art of creating images, videos, and comics using AI creativity.",
          icon: Users,
          techLogos: [SiChatbot, SiCanva],
          activities: [
            "Generating videos and images using AI",
            "Generating comics",
            "Prompt-based creativity",
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
          title: "Homework Genie",
          goal: "Create smart presentations and sharpen public speaking with AI.",
          icon: Palette,
          techLogos: [SiCanva, SiChatbot],
          activities: [
            "Create AI presentations",
            "Learn presenting and public speaking",
          ],
        },
        {
          day: 4,
          title: "Lights, Camera, Action",
          goal: "Showcase your marketing ideas through posters and carousels using AI.",
          icon: Globe,
          techLogos: [SiReplit, SiChatbot, SiCanva],
          activities: ["Generate posters", "Create AI carousels"],
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
          title: "Reels and More",
          goal: "Generate voices, avatars, and short videos with AI.",
          icon: Smartphone,
          techLogos: [SiGoogleforms, SiReplit],
          activities: ["Voice generation", "AI video avatars"],
        },
        {
          day: 6,
          title: "Google Who?",
          goal: "Design promo content like posters and videos using AI tools.",
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
          title: "Shh! Secret Study Hacks",
          goal: "Use AI to study smarter, stay organized, and automate daily tasks.",
          icon: Zap,
          techLogos: [SiGoogleforms, SiGooglesheets, SiNotion],
          activities: [
            "Use AI for daily tasks",
            "AI for smarter studies",
            "Create Smart Assistant",
          ],
        },
        {
          day: 8,
          title: "Congratulations!",
          goal: "Review your work, showcase projects, and celebrate progress.",
          icon: BarChart3,
          techLogos: [SiCanva, SiReplit],
          activities: ["Final review", "Discussion"],
        },
      ],
    },
    5: {
      title: "Startup Creation & Prototype",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      days: [
        {
          day: 9,
          title:
            "Branding(choose a startup idea, choose a name, design a logo)",
          // goal: "Brainstorm a real-world AI-powered idea and plan its features.",
          icon: Rocket,
          techLogos: [SiNotion, SiGooglesheets],
          activities: [
            "Provide a reason on why you’re choosing this idea",
            "what problem do you wish to solve through this idea",
            "what is your target audience",
            "how do you plan to sell the solution?",
          ],
        },
        {
          day: 10,
          title:
            "Social Media presence (Build social media pages/handles, basics of promotion)",
          goal: "Build a mini prototype and prepare to pitch it like a young entrepreneur.",
          icon: BarChart3,
          techLogos: [SiReplit, SiCanva],
          activities: [
            "Submit your marketing strategy for 30 days across social media",
            "Share links of your social media handles",
            "Visit different websites that are close to your startup idea",
            "Observe the various elements/buttons on the website",
          ],
        },
      ],
    },
    6: {
      title: "Showtime & Graduation",
      gradient: "from-green-500 to-lime-500",
      bgGradient: "from-green-50 to-lime-50",
      days: [
        {
          day: 11,
          title: "Marketing (create carousels, posters, reels)",
          goal: "Present your startup and showcase your journey.",
          icon: Users,
          techLogos: [SiCanva, SiChatbot],
          activities: [
            "Draft a budget for implementing the marketing strategy",
            "Submit your pitch script and the presentation (make sure it is data backed and has all the relevant information)",
          ],
        },
        {
          day: 12,
          title: "Pitch ",
          // goal: "Celebrate achievements and receive your certificate!",
          icon: Zap,
          techLogos: [SiGoogleforms],
          activities: ["Graduation ceremony", "Certificate distribution"],
        },
      ],
    },
  };

  const handleLevelUp = () => {
    setLevelUnlocked(true);
    setSelectedWeek(5);
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
              Learning Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From beginner to young entrepreneur in 6 weeks
          </p>
        </div>

        {/* Week Selector */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          <div className="flex bg-gray-100 rounded-2xl p-3 gap-3 flex-wrap justify-center">
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

            {/* Level Up Button */}
            <button
              onClick={handleLevelUp}
              className={`px-4 py-1 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105`}
            >
              ⚡ Level Up
            </button>

            {/* Locked Weeks */}
            {[5, 6].map((week) => (
              <button
                key={week}
                onClick={() => levelUnlocked && setSelectedWeek(week)}
                disabled={!levelUnlocked}
                className={`px-4 py-1 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedWeek === week
                    ? `bg-gradient-to-r ${weeklyProgram[week].gradient} text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                } ${
                  !levelUnlocked ? "blur-sm opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
        </div>

        {/* Week Content */}
        {weeklyProgram[selectedWeek] && (
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
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Brain, Palette, Globe, Mic } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function HandsOnProject() {
  const projects = [
    {
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      title: "Future-Ready Leader",
      description: "Understands how AI will impact their future career",
      bgColor: "bg-blue-50",
    },
    {
      icon: Palette,
      color: "from-emerald-500 to-teal-600",
      title: "Creative Builder",
      description: "Designs websites, explainer videos, games, memes",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
      title: "AI Explorer",
      description:
        "Uses 20+ AI tools across design, research, and storytelling",
      bgColor: "bg-purple-50",
    },
    {
      icon: Mic,
      color: "from-pink-500 to-rose-600",
      title: "Confident Speaker",
      description: "Presents final projects on video using Loom",
      bgColor: "bg-pink-50",
    },
  ];

  const loopProjects = [...projects, ...projects];
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // ✅ Start animation only after component mounts
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20, // adjust speed
      },
    });
  }, [controls]);

  const togglePause = async () => {
    if (paused) {
      // Resume
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      });
    } else {
      // Pause
      await controls.stop();
    }
    setPaused(!paused);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
          Hands-On Experience with{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
            Real-Time Projects
          </span>
        </h2>
      </div>

      {/* Scrolling Section */}
      <div
        onClick={togglePause}
        className="relative overflow-hidden cursor-pointer"
      >
        <motion.div className="flex gap-6" animate={controls}>
          {loopProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="min-w-[350px] bg-white rounded-2xl p-6 shadow-lg flex-shrink-0 flex items-start gap-4"
              >
                <div
                  className={`${project.bgColor} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <div
                    className={`bg-gradient-to-br ${project.color} p-2.5 rounded-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Fade edges for a nice look */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// import { Code2, Brain, Rocket } from 'lucide-react';

// export default function ThreeStepJourneySection() {
//   const steps = [
//     {
//       number: "1",
//       icon: Brain,
//       title: "Learn AI",
//       description: "Master ChatGPT, Python, and machine learning. Create AI-powered apps that can think, learn, and solve problems like magic.",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       number: "2",
//       icon: Code2,
//       title: "Build Projects",
//       description: "Build actual mobile apps, interactive games, and stunning websites. Code real projects that friends and family will love using.",
//       gradient: "from-cyan-500 to-blue-500"
//     },
//     {
//       number: "3",
//       icon: Rocket,
//       title: "Launch Brand",
//       description: "Pitch your startup ideas to real entrepreneurs and investors. Transform from shy kid to confident young leader ready for anything.",
//       gradient: "from-orange-500 to-red-500"
//     }
//   ];

//   return (
//     <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 lg:mb-20">
//           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight font-poppins mb-6">
//             Curious.{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
//               Confident.
//             </span>
//             <br />
//             <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
//               Founder.
//             </span>
//           </h2>
//           <p className="text-lg lg:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
//             3 steps to young entrepreneur.
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
//               >
//                 {/* Step Number */}
//                 <div className="absolute -top-4 left-8">
//                   <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-sm">
//                     {step.number}
//                   </div>
//                 </div>

//                 {/* Hover background effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-purple-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 <div className="relative">
//                   {/* Icon */}
//                   <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 font-poppins mb-4 leading-tight">
//                     {step.title}
//                   </h3>
//                   <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

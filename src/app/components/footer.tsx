// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { MapPin, Phone, MessageCircle, Mail, Send, Facebook, Instagram, Youtube } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import logoImage from "@assets/Frame 2_1753447624775.png";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const { toast } = useToast();

//   const handleNewsletterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       toast({
//         title: "Success!",
//         description: "You've been subscribed to our newsletter.",
//       });
//       setEmail("");
//     }
//   };

//   return (
//     <footer className="bg-dark-purple text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="md:col-span-2">
//             <div className="mb-6">
//               <img
//                 src={logoImage}
//                 alt="InnoKidz Logo"
//                 className="h-16 w-auto mb-4"
//               />
//             </div>
//             <p className="text-purple-200 text-lg mb-6 leading-relaxed">
//               Empowering kids aged 8-17 to become future entrepreneurs through AI, coding, and real-world startup skills. Building tomorrow's innovators today.
//             </p>
//             <div className="flex space-x-4">
//               <Button variant="ghost" size="icon" className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110">
//                 <Facebook size={20} />
//               </Button>
//               <a
//                 href="https://www.instagram.com/innokidzofficial/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block"
//               >
//                 <Button variant="ghost" size="icon" className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110">
//                   <Instagram size={20} />
//                 </Button>
//               </a>
//               <a
//                 href="https://www.youtube.com/@Innokidzofficial"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block"
//               >
//                 <Button variant="ghost" size="icon" className="bg-gradient-to-r from-red-600 to-red-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110">
//                   <Youtube size={20} />
//                 </Button>
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-nunito font-bold text-xl mb-6 text-light-purple">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <MapPin className="text-neon-cyan mr-3 flex-shrink-0" size={16} />
//                 <span className="text-purple-200">HSR Layout, Bangalore</span>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="text-electric-pink mr-3 flex-shrink-0" size={16} />
//                 <span className="text-purple-200">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center">
//                 <MessageCircle className="text-bright-orange mr-3 flex-shrink-0" size={16} />
//                 <span className="text-purple-200">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="text-primary-purple mr-3 flex-shrink-0" size={16} />
//                 <span className="text-purple-200">hello@innokidz.in</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-nunito font-bold text-xl mb-6 text-light-purple">Stay Updated</h3>
//             <p className="text-purple-200 mb-4">Get updates on new batches and coding tips for young innovators.</p>
//             <form onSubmit={handleNewsletterSubmit} className="flex">
//               <Input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="flex-1 rounded-l-full bg-white/10 backdrop-blur-sm text-white placeholder-purple-300 border-0 focus:ring-2 focus:ring-primary-purple"
//                 required
//               />
//               <Button
//                 type="submit"
//                 className="bg-gradient-to-r from-primary-purple to-electric-pink px-6 py-3 rounded-r-full hover:shadow-lg transition-all duration-300 border-0"
//               >
//                 <Send size={16} />
//               </Button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-purple-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-purple-300 text-center md:text-left">
//             © 2025 InnoKidz. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="text-purple-300 hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="text-purple-300 hover:text-white transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

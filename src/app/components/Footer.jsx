"use client";
import { useState } from "react";
// import { button } from "@/components/ui/button";
// import { input } from "@/components/ui/input";
// import { input, button } from "@radix-ui/themes";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import logoImage from "../../../public/innokidz-footer-logo.png";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  // const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // toast({
      //   title: "Success!",
      //   description: "You've been subscribed to our newsletter.",
      // });
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark-purple text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src={logoImage}
                alt="InnoKidz Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-purple-200 text-lg mb-6 leading-relaxed">
              Empowering kids aged 8-17 to become future entrepreneurs through
              AI, coding, and real-world startup skills. Building
              tomorrow&apos;s innovators today.
            </p>
            <div className="flex space-x-4">
              <button
                variant="ghost"
                size="icon"
                className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </button>
              <Link
                href="https://www.instagram.com/innokidzofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  variant="ghost"
                  size="icon"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </button>
              </Link>
              <Link
                href="https://www.youtube.com/@Innokidzofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  variant="ghost"
                  size="icon"
                  className="bg-gradient-to-r from-red-600 to-red-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={20} />
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-nunito font-bold text-xl mb-6 text-light-purple">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin
                  className="text-neon-cyan mr-3 flex-shrink-0"
                  size={16}
                />
                <span className="text-purple-200">HSR Layout, Bangalore</span>
              </div>
              <div className="flex items-center">
                <Phone
                  className="text-electric-pink mr-3 flex-shrink-0"
                  size={16}
                />
                <span className="text-purple-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MessageCircle
                  className="text-bright-orange mr-3 flex-shrink-0"
                  size={16}
                />
                <span className="text-purple-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail
                  className="text-primary-purple mr-3 flex-shrink-0"
                  size={16}
                />
                <span className="text-purple-200">hello@innokidz.in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-nunito font-bold text-xl mb-6 text-light-purple">
              Stay Updated
            </h3>
            <p className="text-purple-200 mb-4">
              Get updates on new batches and coding tips for young innovators.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center rounded-full w-[80px] h-[40px]"
            >
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-full bg-white/10 text-white placeholder-white/40 rounded-l-full px-4 outline-none focus:ring-2 focus:ring-[#5f6fff]"
                required
              />
              <button
                type="submit"
                className="h-full aspect-square bg-[#2d9eff] hover:bg-[#2489e8] transition-all duration-300 rounded-r-full flex items-center justify-center"
              >
                <Send size={18} color="white" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-center md:text-left">
            © 2025 InnoKidz. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-purple-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

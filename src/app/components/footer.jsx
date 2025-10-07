"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Send,
  Facebook,
  Instagram,
  Youtube,
  X, // For closing the notification
} from "lucide-react";

// The main application component, acting as the Footer component content
export default function App() {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    visible: false,
    type: "success",
  });

  // Function to show the custom notification
  const showNotification = (message, type = "success") => {
    setNotification({ message, visible: true, type });
    // Auto-hide the notification after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 5000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Replaced alert() with custom notification
      showNotification(`Thank you! Subscribed with ${email}!`, "success");
      setEmail("");
    } else {
      showNotification("Please enter a valid email address.", "error");
    }
  };

  const notificationClasses =
    notification.type === "success"
      ? "bg-green-500 text-white"
      : "bg-red-500 text-white";

  return (
    <div className="min-h-screen flex flex-col justify-end bg-gray-100 font-sans">
      {/* Custom Notification Message Box */}
      {notification.visible && (
        <div
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl transition-opacity duration-300 z-50 ${notificationClasses} flex items-center space-x-3 max-w-sm w-11/12 md:max-w-md`}
        >
          <p className="flex-grow text-sm font-medium">
            {notification.message}
          </p>
          <button
            onClick={() =>
              setNotification((prev) => ({ ...prev, visible: false }))
            }
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}

      <main className="flex-grow p-8 text-center text-gray-700">
        <h1 className="text-3xl font-bold mb-4">InnoKidz Sample Page</h1>
        <p className="text-gray-500">
          Scroll down to view the responsive footer component.
        </p>
      </main>

      {/* Footer Component Start */}
      <footer className="bg-purple-900 text-white py-16 rounded-t-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo + About */}
            <div className="md:col-span-2">
              <div className="mb-6">
                {/* Placeholder Logo - Use text logo for simplicity in single-file mandate */}
                <span className="text-4xl font-extrabold tracking-widest text-cyan-400">
                  InnoKidz
                </span>
              </div>
              <p className="text-purple-200 text-lg mb-6 leading-relaxed">
                Empowering kids aged 8-17 to become future entrepreneurs through
                AI, coding, and real-world startup skills.
              </p>
              <div className="flex space-x-4">
                {/* Social Buttons */}
                <a
                  href="#"
                  className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-transform hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-transform hover:scale-110 shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-extrabold text-xl mb-6 text-cyan-400 border-b-2 border-purple-700 pb-2">
                Get In Touch
              </h3>
              <div className="space-y-4 text-purple-200">
                <div className="flex items-center">
                  <MapPin
                    size={18}
                    className="mr-4 text-cyan-400 flex-shrink-0"
                  />
                  <span>HSR Layout, Bangalore, India</span>
                </div>
                <div className="flex items-center">
                  <Phone
                    size={18}
                    className="mr-4 text-pink-400 flex-shrink-0"
                  />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle
                    size={18}
                    className="mr-4 text-orange-400 flex-shrink-0"
                  />
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail
                    size={18}
                    className="mr-4 text-purple-400 flex-shrink-0"
                  />
                  <span>hello@innokidz.in</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-extrabold text-xl mb-6 text-cyan-400 border-b-2 border-purple-700 pb-2">
                Stay Updated
              </h3>
              <p className="text-purple-200 mb-4">
                Get updates on new batches, events, and coding tips for young
                innovators.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex rounded-full shadow-lg overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 placeholder-purple-300 text-white border-none focus:ring-4 focus:ring-cyan-500/50 focus:bg-white/20 transition-all duration-300 px-5 py-3 text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-5 bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center text-white"
                  aria-label="Subscribe"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-purple-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-purple-300 text-sm">
              © 2025 InnoKidz. All rights reserved. Built with passion for
              future founders.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a
                href="#"
                className="text-purple-300 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-cyan-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Component End */}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import {
  X,
  Star,
  User,
  Phone,
  Heart,
  Monitor,
  ChevronDown,
} from "lucide-react";

export default function InnoKidzForm({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    classGrade: "",
    schoolName: "",
    whatsapp: "",
    email: "",
    interest: "",
    learningMode: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Successfully joined the program!");
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 p-8 text-center relative flex-shrink-0">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-400/30 p-3 rounded-full">
                <Star
                  className="text-yellow-300"
                  size={32}
                  fill="currentColor"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Join InnoKidz Program!
            </h1>
            <p className="text-white/90 text-lg">
              Start your child's entrepreneurship journey today
            </p>
          </div>

          {/* Form Content - Scrollable */}
          <div className="p-6 overflow-y-auto flex-1">
            {/* About Your Child Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  About Your Child
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter child's full name"
                    value={formData.childName}
                    onChange={(e) => handleChange("childName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age / Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 11 years or 15/02/2014"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class / Grade <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 6th Grade, Class 10"
                    value={formData.classGrade}
                    onChange={(e) => handleChange("classGrade", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter school name"
                    value={formData.schoolName}
                    onChange={(e) => handleChange("schoolName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Parent Contact Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Parent Contact
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="parent@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* What Excites Your Child Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Heart className="text-pink-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  What excites your child most?
                </h2>
              </div>

              <div className="relative">
                <select
                  value={formData.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none cursor-pointer text-gray-700"
                >
                  <option value="" disabled>
                    Choose your child&apos;s main interest
                  </option>
                  <option value="technology">Technology & Coding</option>
                  <option value="business">Business & Entrepreneurship</option>
                  <option value="arts">Arts & Creativity</option>
                  <option value="science">Science & Innovation</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Preferred Learning Mode Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Monitor className="text-purple-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Preferred Learning Mode
                </h2>
              </div>

              <div className="relative">
                <select
                  value={formData.learningMode}
                  onChange={(e) => handleChange("learningMode", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none cursor-pointer text-gray-700"
                >
                  <option value="" disabled>
                    Choose learning mode
                  </option>
                  <option value="online">Online Learning</option>
                  <option value="offline">Offline Learning</option>
                  <option value="hybrid">Hybrid (Both)</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Submit Button - Fixed at bottom */}
          <div className="p-6 pt-0 flex-shrink-0 bg-white border-t border-gray-100">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Star size={20} />
              Join the Program
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

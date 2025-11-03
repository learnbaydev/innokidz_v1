"use client";
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

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    alert("Successfully joined the program!");
    onOpenChange(false);
  };

  const handleClose = () => onOpenChange(false);

  // disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [open]);

  // close on escape
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && open && handleClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-lg z-51"
        onClick={handleClose}
      />
      {/* modal */}
      <div className="fixed inset-0 flex items-center justify-center z-52 p-4 mt-12">
        <div
          className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-8 text-center relative flex-shrink-0">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Star
                  className="text-yellow-300"
                  size={32}
                  fill="currentColor"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Join InnoKidz Program!
            </h1>
            <p className="text-white/90 text-lg mt-1">
              Start your child&apos;s entrepreneurship journey today
            </p>
          </div>

          {/* content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {/* /* about child */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  About Your Child
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md text-black">
                <InputField
                  label="Child's Full Name"
                  placeholder="Enter child's full name"
                  required
                  value={formData.childName}
                  onChange={(e) => handleChange("childName", e.target.value)}
                />
                <InputField
                  label="Date of Birth"
                  placeholder="e.g.15/02/2014"
                  required
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
                <InputField
                  label="Class "
                  placeholder="e.g.Class 10"
                  required
                  value={formData.class}
                  onChange={(e) => handleChange("class", e.target.value)}
                />
                <InputField
                  label="School Name"
                  placeholder="Enter school name"
                  required
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Parent Contact
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md text-black">
                <InputField
                  label="WhatsApp Number"
                  placeholder="e.g., 9876543210"
                  required
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a 10 digit mobile number"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    handleChange(
                      "whatsapp",
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                />
                <InputField
                  label="Email Address"
                  placeholder="parent@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Heart className="text-pink-600" size={24} />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  What excites your child most?
                </h2>
              </div>
              <SelectField
                value={formData.interest}
                onChange={(e) => handleChange("interest", e.target.value)}
                options={[
                  { value: "", label: "Choose your child's main interest" },
                  { value: "technology", label: "Technology & Coding" },
                  { value: "business", label: "Business & Entrepreneurship" },
                  { value: "arts", label: "Arts & Creativity" },
                  { value: "science", label: "Science & Innovation" },
                ]}
              />
            </div>

            {/* learning mode */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm text-md text-black">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Monitor className="text-purple-600" size={24} />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Preferred Learning Mode
                </h2>
              </div>
              <SelectField
                value={formData.learningMode}
                onChange={(e) => handleChange("learningMode", e.target.value)}
                options={[
                  { value: "", label: "Choose learning mode" },
                  { value: "online", label: "Online Learning" },
                  { value: "offline", label: "Offline Learning" },
                  { value: "hybrid", label: "Hybrid (Both)" },
                ]}
              />
            </div>
          </div>

          {/* submit */}
          <div className="p-6 pt-0 bg-white border-t border-gray-100">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:opacity-90 text-black font-semibold text-lg py-4 rounded-2xl flex justify-center items-center gap-2 shadow-lg transition-all"
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

/* helper components */
function InputField({ label, required, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6a11cb] focus:outline-none placeholder-gray-400"
      />
    </div>
  );
}

function SelectField({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6a11cb] focus:outline-none appearance-none cursor-pointer text-gray-700 bg-white"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={!opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  );
}

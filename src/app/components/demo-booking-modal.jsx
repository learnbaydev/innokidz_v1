import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Star, CheckCircle } from "lucide-react";

// Simple Button, Input, Label, Select components
const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-purple-600 text-white rounded">
    {children}
  </button>
);

const Input = (props) => (
  <input {...props} className="w-full px-4 py-2 border rounded" />
);

const Label = ({ children }) => (
  <label className="block mb-1">{children}</label>
);

const Select = ({ children, onValueChange }) => (
  <select
    className="w-full px-4 py-2 border rounded"
    onChange={(e) => onValueChange(e.target.value)}
  >
    {children}
  </select>
);

const SelectTrigger = ({ placeholder }) => (
  <option value="" disabled>
    {placeholder}
  </option>
);

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// Zod schema
const formSchema = z.object({
  childName: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z.string().min(10, "Enter a valid WhatsApp number"),
  interests: z.array(z.string()).optional(),
});

const interestOptions = [
  "Learning AI tools like ChatGPT, Canva, etc.",
  "Creating YouTube videos or Reels",
  "Building websites or apps",
  "Designing logos, videos & posts",
  "Starting a brand or product",
  "Learning public speaking & leadership",
];

export default function DemoBookingModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      whatsappNumber: "",
      interests: [],
    },
  });

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-6 rounded-t-2xl text-center text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Join InnoKidz Program!</h2>
          <p>Start your child's entrepreneurship journey today</p>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {isSubmitted ? (
            <div className="text-center py-12 bg-white rounded-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Registration Successful! 🎉
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Welcome to InnoKidz! We'll contact you within 24 hours.
              </p>
              <Button onClick={handleClose} className="px-10 py-4">
                Awesome!
              </Button>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <Label>Child's Full Name *</Label>
                <Input
                  {...form.register("childName")}
                  placeholder="Child's name"
                />
                {form.formState.errors.childName && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.childName.message}
                  </p>
                )}
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <Label>WhatsApp Number *</Label>
                <Input
                  {...form.register("whatsappNumber")}
                  placeholder="+91 98765 43210"
                />
                {form.formState.errors.whatsappNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.whatsappNumber.message}
                  </p>
                )}
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <Label>Interest</Label>
                <Select
                  onValueChange={(value) => form.setValue("interests", [value])}
                >
                  <SelectTrigger placeholder="Select interest" />
                  {interestOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <Button type="submit" className="w-full h-14">
                Join Program
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

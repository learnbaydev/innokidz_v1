"use client";

import Image from "next/image";
import certificateImage from "../../../public/CERTIFICATE.png"; // Update path accordingly

export default function CertificateComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Certified By <span className="text-indigo-600">Innokidz</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your child receives a certificate from Innokidz—recognizing their AI
            skills, creativity, and commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Certificate Preview with Image */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-indigo-200">
              <Image
                src={certificateImage}
                alt="Innokidz AI Masterclass Certificate Preview"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Why This Certification Matters
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Prestigious Recognition",
                    desc: "A certificate from Innokidz, a trusted name in children's AI education and innovation",
                  },
                  {
                    title: "Digital Feature",
                    desc: "Opportunity for your child to be featured on Innokidz's digital platforms",
                  },
                  {
                    title: "Skill Validation",
                    desc: "Confirms your child's proficiency in using AI tools for learning and creativity",
                  },
                  {
                    title: "Portfolio Builder",
                    desc: "Adds value to your child's academic profile and future applications",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

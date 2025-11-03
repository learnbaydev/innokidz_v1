"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !image) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(
        `✅ Submitted successfully! Your User ID: ${data.data.userId}`
      );
      setText("");
      setImage(null);
      setPreview(null);
    } else {
      setMessage("❌ Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 font-poppins">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Assignment
          <span className="text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text">
            {" "}
            Submission{" "}
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-40 h-40 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Text Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (max 3000 chars)
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength="3000"
              placeholder="Write something..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {text.length}/3000 characters
            </p>
          </div>

          <div className="flex justify-center max-w-3xl mx-auto relative">
            <button
              type="submit"
              className="relative w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none px-12 py-5 rounded-2xl font-bold text-xl transition-transform duration-300 transform hover:scale-105 focus:outline-none"
            >
              <span className="font-poppins">Submit</span>
            </button>
          </div>
        </form>

        {message && (
          <p className="text-center mt-4 font-medium text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

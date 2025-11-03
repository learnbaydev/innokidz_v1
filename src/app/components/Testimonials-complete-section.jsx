import { Quote, Star } from "lucide-react";

export default function TestimonialsCompleteSection() {
  const testimonials = [
    {
      type: "parent",
      name: "Priya Sharma",
      role: "IT Manager & Mom of 2",
      image: "👩‍💼",
      content:
        "My 12-year-old built her first app in just 3 weeks! She's not just learning to code - she's learning to think like an entrepreneur. The confidence boost has been incredible.",
      rating: 5,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      type: "kid",
      name: "Arjun, Age 14",
      role: "Student & Future Founder",
      image: "👦",
      content:
        "I used to think coding was boring, but now I'm building my own social media app! The AI stuff is super cool - it's like having a coding buddy that never gets tired.",
      rating: 5,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      type: "parent",
      name: "Rajesh Kumar",
      role: "Software Engineer & Dad",
      image: "👨‍💻",
      content:
        "As a developer myself, I'm impressed by the curriculum. It's not just teaching syntax - it's teaching problem-solving and entrepreneurial thinking. My daughter is already pitching me startup ideas!",
      rating: 5,
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
            What Parents{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              & Kids Are Saying
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            Real stories from families who&#39;ve transformed their futures
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}
                >
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Type badge */}
              <div className="absolute -top-3 right-8">
                <span
                  className={`px-3 py-1 text-xs font-bold text-white bg-gradient-to-r ${testimonial.gradient} rounded-full`}
                >
                  {testimonial.type === "parent" ? "Parent" : "Student"}
                </span>
              </div>

              {/* Content */}
              <div className="pt-6 space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-gray-700 leading-relaxed font-poppins italic">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-poppins">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-poppins">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

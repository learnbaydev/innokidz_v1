import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import DemoBookingModal from "@/app/components/demo-booking-modal";
import { DemoModalProvider, useDemoModal } from "@/app/hooks/use-demo-modal";
import { Target, Eye, Users, Lightbulb, Rocket, Heart } from "lucide-react";

function AboutContent() {
  const { isOpen, closeModal } = useDemoModal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight font-poppins mb-6">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                InnoKidz
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation of innovators and entrepreneurs
              through AI, coding, and creative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 font-poppins ml-4">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To bridge the gap between traditional education and future
                skills by teaching kids aged 8-17 how to leverage AI tools,
                build real projects, and develop entrepreneurial thinking.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We believe every child has the potential to be an innovator and
                creator, not just a consumer of technology.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 font-poppins ml-4">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To create a generation of confident, creative, and tech-savvy
                young entrepreneurs who use AI and technology to solve
                real-world problems.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We envision a future where every child graduates with practical
                skills, a portfolio of projects, and the confidence to turn
                ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight font-poppins mb-6">
              What We{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                Believe
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we do at InnoKidz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Belief 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">
                Every Child is Creative
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We believe creativity isn't limited to art or music. Every child
                can think creatively about technology, business, and
                problem-solving.
              </p>
            </div>

            {/* Belief 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">
                Learning by Building
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The best way to learn is by creating real projects. Theory comes
                alive when kids build apps, websites, and launch their own
                ideas.
              </p>
            </div>

            {/* Belief 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">
                Confidence Through Success
              </h3>
              <p className="text-slate-600 leading-relaxed">
                When kids successfully complete projects and see their ideas
                come to life, they develop unshakeable confidence in their
                abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight font-poppins mb-8">
              Why{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Now?
              </span>
            </h2>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-yellow-200 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
                We're living through the biggest technological revolution in
                human history. AI and automation are changing how we work,
                create, and solve problems.
              </p>

              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
                Traditional education isn't keeping up. Most schools still teach
                skills from the industrial age, while the future belongs to
                creators, innovators, and entrepreneurs.
              </p>

              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-semibold">
                The window of opportunity is now. Kids who learn these skills
                today will have a massive advantage tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Demo Booking Modal */}
      <DemoBookingModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default function About() {
  return (
    <DemoModalProvider>
      <AboutContent />
    </DemoModalProvider>
  );
}

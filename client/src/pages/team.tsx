import Navigation from "@/components/sections/navigation";
import Team from "@/components/sections/team";
import Footer from "@/components/sections/footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving AI transformation across industries with deep strategic insights and proven implementation experience.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
}
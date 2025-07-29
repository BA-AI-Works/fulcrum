import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import Solution from "@/components/sections/solution";
import Journey from "@/components/sections/journey";
import ModularProof from "@/components/sections/modular-proof";
import Tools from "@/components/sections/tools";
import Projects from "@/components/sections/projects";
import Team from "@/components/sections/team";
import Banner from "@/components/sections/banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solution />
      <Journey />
      <ModularProof />
      <Tools />
      <Projects />
      <Team />
      <Banner />
      <Footer />
    </div>
  );
}

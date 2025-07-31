import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import Solution from "@/components/sections/solution";
import Journey from "@/components/sections/journey";
import AILayers from "@/components/sections/ai-layers";
import ModularProof from "@/components/sections/modular-proof";
import Tools from "@/components/sections/tools";
import Projects from "@/components/sections/projects";
import Team from "@/components/sections/team";
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
      <AILayers />
      <Team />
      <Footer />
    </div>
  );
}

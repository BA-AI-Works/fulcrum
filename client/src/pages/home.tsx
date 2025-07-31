import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import Solution from "@/components/sections/solution";
import Journey from "@/components/sections/journey";
import AILayers from "@/components/sections/ai-layers";
import ModularProof from "@/components/sections/modular-proof";
import Tools from "@/components/sections/tools";
import Projects from "@/components/sections/projects";
import SelectedClients from "@/components/sections/selected-clients";
import AIInfrastructure from "@/components/sections/ai-infrastructure";
import Team from "@/components/sections/team";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solution />
      <Journey />
      <AILayers />
      <ModularProof />
      <Tools />
      <Projects />
      <SelectedClients />
      <AIInfrastructure />
      <Team />
      <Footer />
    </div>
  );
}

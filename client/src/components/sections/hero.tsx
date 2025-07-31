import { Button } from "@/components/ui/button";
import fulcrumBackgroundPath from "@assets/fulcrum-background_1753804782085.jpg";

export default function Hero() {
  const scrollToSolution = () => {
    const element = document.getElementById('solution');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fulcrumBackgroundPath})`
        }}
      />
      
      <div className="relative z-10 px-6 max-w-2xl ml-8 md:ml-16">
        <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
          <span style={{ color: '#7A0000' }}>We're Building</span>
          <br />
          <span style={{ color: '#3a3a3a' }}>Tomorrow</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
          We Are Building AI Powered Organizations from Strategy to Execution
        </p>
        <Button 
          onClick={scrollToSolution}
          className="bg-fulcrum-red hover:bg-fulcrum-red-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          size="lg"
        >
          Start Your AI Journey
        </Button>
      </div>
    </section>
  );
}

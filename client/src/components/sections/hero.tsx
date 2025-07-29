import { Button } from "@/components/ui/button";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          We're Building Tomorrow
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          From vision to execution, Fulcrum helps you design and deliver AI-powered transformation.
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

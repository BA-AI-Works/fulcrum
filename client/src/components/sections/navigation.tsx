import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import FulcrumLogo from "@/components/fulcrum-logo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 border-b border-fulcrum-gray transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('contact')}
          className="fulcrum-text hover:text-fulcrum-red transition-colors"
        >
          Contact
        </button>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <FulcrumLogo />
        </div>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="fulcrum-text hover:text-fulcrum-red transition-colors"
        >
          Projects
        </button>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-fulcrum-gray">
          <div className="px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('projects')}
              className="block fulcrum-text hover:text-fulcrum-red transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block fulcrum-text hover:text-fulcrum-red transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

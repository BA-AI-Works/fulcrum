import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import FulcrumLogo from "@/components/fulcrum-logo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`} style={{ borderBottom: '1px solid #DBDBDB' }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-12">
          <Link href="/">
            <button className="fulcrum-text hover:text-fulcrum-red transition-colors">
              Home
            </button>
          </Link>
          
          <Link href="/projects">
            <button className="fulcrum-text hover:text-fulcrum-red transition-colors">
              Projects
            </button>
          </Link>
          
          <Link href="/">
            <FulcrumLogo />
          </Link>
          
          
          <Link href="/blog">
            <button className="fulcrum-text hover:text-fulcrum-red transition-colors">
              Blog
            </button>
          </Link>
          
          <Link href="/contact">
            <button className="fulcrum-text hover:text-fulcrum-red transition-colors">
              Contact
            </button>
          </Link>
        </div>

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
            <Link href="/">
              <button 
                onClick={() => setIsOpen(false)}
                className="block fulcrum-text hover:text-fulcrum-red transition-colors"
              >
                Home
              </button>
            </Link>
            <Link href="/projects">
              <button 
                onClick={() => setIsOpen(false)}
                className="block fulcrum-text hover:text-fulcrum-red transition-colors"
              >
                Projects
              </button>
            </Link>

            <Link href="/blog">
              <button 
                onClick={() => setIsOpen(false)}
                className="block fulcrum-text hover:text-fulcrum-red transition-colors"
              >
                Blog
              </button>
            </Link>
            <Link href="/contact">
              <button 
                onClick={() => setIsOpen(false)}
                className="block fulcrum-text hover:text-fulcrum-red transition-colors"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

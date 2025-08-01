import { MapPin, Linkedin } from "lucide-react";
import fulcrumWhiteLogoPath from "@assets/fulcrum-logo-white_1753956849387.png";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const openNewsletterForm = () => {
    window.open('https://form567.typeform.com/to/HUWNUHXg', '_blank');
  };

  return (
    <footer id="contact" className="py-16" style={{ backgroundColor: '#1C1C1C', color: 'white' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img src={fulcrumWhiteLogoPath} alt="Fulcrum" className="h-12" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              We Are Building AI Powered Organizations from Strategy to Execution
            </p>
            <a 
              href="https://www.linkedin.com/company/fulcrummanagementconsulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>

          {/* Page Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <div className="space-y-3">
              <a 
                href="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="/projects"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>

              <a 
                href="/blog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Connected</h3>
            
            {/* Newsletter Form */}
            <div className="mb-6">
              <Button 
                onClick={openNewsletterForm}
                className="bg-fulcrum-red hover:bg-fulcrum-red-light text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 w-full"
              >
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Address */}
            <div className="text-gray-400 text-sm">
              <p className="mb-2 flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Unit 2, 15/F Glenealy Tower
              </p>
              <p className="ml-6">No.1 Glenealy Central</p>
              <p className="ml-6">Hong Kong</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Fulcrum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

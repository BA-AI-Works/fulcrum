import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your organization with AI? Get in touch with our team to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[#F9FAFB] rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold fulcrum-text mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            {/* Typeform Embed */}
            <div 
              data-tf-live="01K1G0FAW34C188FGY84E1XH4E" 
              style={{ width: '100%', height: '600px' }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
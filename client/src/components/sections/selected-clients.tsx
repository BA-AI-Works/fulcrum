import { useEffect, useState } from 'react';

// Sample client logos - you can replace with real logos later
const clientLogos = [
  { name: "LogoIpsum 1", logo: "https://logoipsum.com/logo/logo-1.svg" },
  { name: "LogoIpsum 2", logo: "https://logoipsum.com/logo/logo-2.svg" },
  { name: "LogoIpsum 3", logo: "https://logoipsum.com/logo/logo-3.svg" },
  { name: "LogoIpsum 4", logo: "https://logoipsum.com/logo/logo-4.svg" },
  { name: "LogoIpsum 5", logo: "https://logoipsum.com/logo/logo-5.svg" },
  { name: "LogoIpsum 6", logo: "https://logoipsum.com/logo/logo-6.svg" },
  { name: "LogoIpsum 7", logo: "https://logoipsum.com/logo/logo-7.svg" },
  { name: "LogoIpsum 8", logo: "https://logoipsum.com/logo/logo-8.svg" },
  { name: "LogoIpsum 9", logo: "https://logoipsum.com/logo/logo-9.svg" },
  { name: "LogoIpsum 10", logo: "https://logoipsum.com/logo/logo-10.svg" },
];

export default function SelectedClients() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            We've partnered with:
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 min-w-max">
              {clientLogos.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 min-w-max ml-16">
              {clientLogos.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
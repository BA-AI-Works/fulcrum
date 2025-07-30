// Sample client logos using simple SVG icons
const clientLogos = [
  { 
    name: "Company A", 
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-600">
        <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.7"/>
        <circle cx="35" cy="20" r="10" fill="currentColor" opacity="0.5"/>
        <circle cx="45" cy="20" r="8" fill="currentColor" opacity="0.3"/>
        <text x="60" y="25" fontSize="12" fill="currentColor">LOGO</text>
      </svg>
    )
  },
  { 
    name: "Company B", 
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-600">
        <rect x="5" y="10" width="15" height="20" fill="currentColor" opacity="0.8"/>
        <rect x="25" y="5" width="15" height="30" fill="currentColor" opacity="0.6"/>
        <rect x="45" y="15" width="15" height="15" fill="currentColor" opacity="0.4"/>
        <text x="70" y="25" fontSize="14" fill="currentColor" fontWeight="bold">logoipsum</text>
      </svg>
    )
  },
  { 
    name: "Company C", 
    svg: (
      <svg width="110" height="40" viewBox="0 0 110 40" className="text-gray-600">
        <polygon points="10,30 25,10 40,30" fill="currentColor" opacity="0.7"/>
        <circle cx="60" cy="20" r="12" fill="currentColor" opacity="0.5"/>
        <text x="80" y="25" fontSize="12" fill="currentColor">logoipsum</text>
      </svg>
    )
  },
  { 
    name: "Company D", 
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-600">
        <rect x="5" y="10" width="30" height="20" rx="10" fill="currentColor" opacity="0.6"/>
        <text x="45" y="25" fontSize="14" fill="currentColor" fontWeight="bold">LOGO</text>
      </svg>
    )
  },
  { 
    name: "Company E", 
    svg: (
      <svg width="130" height="40" viewBox="0 0 130 40" className="text-gray-600">
        <path d="M10 20 L25 10 L40 20 L25 30 Z" fill="currentColor" opacity="0.7"/>
        <rect x="50" y="15" width="20" height="10" fill="currentColor" opacity="0.5"/>
        <text x="80" y="25" fontSize="12" fill="currentColor">logoipsum</text>
      </svg>
    )
  },
  { 
    name: "Company F", 
    svg: (
      <svg width="90" height="40" viewBox="0 0 90 40" className="text-gray-600">
        <circle cx="15" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7"/>
        <circle cx="30" cy="20" r="5" fill="currentColor" opacity="0.8"/>
        <text x="45" y="25" fontSize="12" fill="currentColor">logo</text>
      </svg>
    )
  },
  { 
    name: "Company G", 
    svg: (
      <svg width="115" height="40" viewBox="0 0 115 40" className="text-gray-600">
        <rect x="5" y="8" width="25" height="4" fill="currentColor" opacity="0.8"/>
        <rect x="5" y="16" width="20" height="4" fill="currentColor" opacity="0.6"/>
        <rect x="5" y="24" width="25" height="4" fill="currentColor" opacity="0.4"/>
        <text x="40" y="25" fontSize="14" fill="currentColor" fontWeight="bold">logoipsum</text>
      </svg>
    )
  },
  { 
    name: "Company H", 
    svg: (
      <svg width="105" height="40" viewBox="0 0 105 40" className="text-gray-600">
        <ellipse cx="20" cy="20" rx="15" ry="10" fill="currentColor" opacity="0.6"/>
        <rect x="40" y="15" width="15" height="10" fill="currentColor" opacity="0.8"/>
        <text x="65" y="25" fontSize="12" fill="currentColor">logo</text>
      </svg>
    )
  },
  { 
    name: "Company I", 
    svg: (
      <svg width="125" height="40" viewBox="0 0 125 40" className="text-gray-600">
        <path d="M10 10 Q20 5 30 10 Q20 25 10 30 Q5 20 10 10" fill="currentColor" opacity="0.7"/>
        <circle cx="45" cy="20" r="8" fill="currentColor" opacity="0.5"/>
        <text x="65" y="25" fontSize="13" fill="currentColor">logoipsum</text>
      </svg>
    )
  },
  { 
    name: "Company J", 
    svg: (
      <svg width="95" height="40" viewBox="0 0 95 40" className="text-gray-600">
        <rect x="5" y="12" width="8" height="16" fill="currentColor" opacity="0.8"/>
        <rect x="18" y="8" width="8" height="24" fill="currentColor" opacity="0.6"/>
        <rect x="31" y="14" width="8" height="12" fill="currentColor" opacity="0.4"/>
        <text x="50" y="25" fontSize="12" fill="currentColor">LOGO</text>
      </svg>
    )
  },
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
        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 min-w-max">
              {clientLogos.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {client.svg}
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {clientLogos.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {client.svg}
                </div>
              ))}
            </div>
            
            {/* Third set for more seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {clientLogos.map((client, index) => (
                <div key={`third-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {client.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import adobeLogo from "@assets/Adobe_Corporate_logo_1753998094041.png";
import akbankLogo from "@assets/akbank_1753998094043.png";
import allianzLogo from "@assets/Allianz-logo_1753998094043.png";
import anadoluSigortaLogo from "@assets/anadolu-sig_1753998094043.png";
import fordLogo from "@assets/ford_1753998094043.png";
import googleLogo from "@assets/Google_2015_logo.svg_1753998094043.webp";
import isbankLogo from "@assets/isbank_1753998094043.png";
import sonyLogo from "@assets/sony_1753998094043.png";

// Client logos using provided images
const clientLogos = [
  { 
    name: "Adobe", 
    image: adobeLogo,
    width: "120px"
  },
  { 
    name: "Akbank", 
    image: akbankLogo,
    width: "140px"
  },
  { 
    name: "Allianz", 
    image: allianzLogo,
    width: "120px"
  },
  { 
    name: "Anadolu Sigorta", 
    image: anadoluSigortaLogo,
    width: "160px"
  },
  { 
    name: "Ford", 
    image: fordLogo,
    width: "100px"
  },
  { 
    name: "Google", 
    image: googleLogo,
    width: "120px"
  },
  { 
    name: "İş Bankası", 
    image: isbankLogo,
    width: "140px"
  },
  { 
    name: "Sony", 
    image: sonyLogo,
    width: "100px"
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
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`}
                    style={{ width: client.width, height: "40px", objectFit: "contain" }}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {clientLogos.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`}
                    style={{ width: client.width, height: "40px", objectFit: "contain" }}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Third set for more seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {clientLogos.map((client, index) => (
                <div key={`third-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`}
                    style={{ width: client.width, height: "40px", objectFit: "contain" }}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
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
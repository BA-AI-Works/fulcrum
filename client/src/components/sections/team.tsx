import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Murat Dikmen",
    title: "Partner",
    bio: "Global consulting leader with 25+ years in AI strategy transformation.",
    image: "/team-photos/murat-dikmen.jpg",
    linkedin: "https://www.linkedin.com/in/murat-dikmen-829141/",
    cv: "/Murat-Dikmen-cv.pdf"
  },
  {
    name: "Koray Yitmen",
    title: "Partner",
    bio: "Multi-domain expert, UXPA president, and software testing pioneer.",
    image: "/team-photos/koray-yitmen.jpg",
    linkedin: "https://www.linkedin.com/in/korayyitmen/",
    cv: "/Koray-Yitmen-cv.pdf"
  },
  {
    name: "Meltem Bayrak",
    title: "AI Projects Lead",
    bio: "Innovation strategist bridging AI, design, and enterprise transformation.",
    image: "/team-photos/meltem-bayrak.jpg",
    linkedin: "https://www.linkedin.com/in/meltembayrak/",
    cv: "/Meltem-Bayrak-cv.pdf"
  },
  {
    name: "Emrah Yayıcı",
    title: "Partner",
    bio: "Amazon bestselling author and AI-driven business design visionary.",
    image: "/team-photos/emrah-yayici.jpg",
    linkedin: "https://www.linkedin.com/in/emrah-yay%C4%B1c%C4%B1-655b622/",
    cv: "/Emrah-Yayici-cv.pdf"
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert leaders driving AI transformation across enterprises
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl p-8" style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group h-full">
                <div 
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => window.open(member.cv, '_blank')}
                >
                  <div className="relative mb-6 mx-auto">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - Leadership team member`}
                      className="w-full aspect-square rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div 
                      className="absolute bottom-3 right-3 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full p-2 transition-all duration-300 cursor-pointer z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(member.linkedin, '_blank');
                      }}
                    >
                      <Linkedin className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold fulcrum-text mb-1">{member.name}</h3>
                      <p className="fulcrum-red font-semibold mb-3 text-sm">{member.title}</p>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

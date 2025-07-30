import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Murat Dikmen",
    title: "Chief Executive Officer",
    bio: "Strategic AI transformation leader with extensive enterprise consulting experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Koray Yitmen",
    title: "Chief Technology Officer",
    bio: "AI technology expert specializing in enterprise integration and scalable solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Meltem Bayrak",
    title: "Head of Operations",
    bio: "Operations excellence expert focused on AI process optimization and implementation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Emrah Yayıcı",
    title: "Head of Strategy",
    bio: "Strategic planning expert driving AI transformation roadmaps for global enterprises.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
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

        <div className="max-w-6xl mx-auto bg-stone-200 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative mb-6 mx-auto">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - Leadership team member`}
                      className="w-full aspect-square rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full p-2 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold fulcrum-text mb-1">{member.name}</h3>
                  <p className="fulcrum-red font-semibold mb-3 text-sm">{member.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

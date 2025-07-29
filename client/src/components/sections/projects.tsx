import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Learning Experience Design",
    description: "Client is a leading AI trainings company aiming to build an intelligent, end-to-end learning platform.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "AI-Based Talent Matching Engine",
    description: "Efficiently match CVs to job openings with contextual analysis.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "AI-Driven Sales Platform for Food Distributor",
    description: "Designed & deployed intelligent quotation/order flows.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Marketing Automation AI Agents",
    description: "SEO, content publishing, multilingual conversational agents.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(projects.length / 2);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleProjects = projects.slice(currentIndex * 2, (currentIndex * 2) + 2);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successful AI transformations across industries
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleProjects.map((project, index) => (
              <Card key={currentIndex * 2 + index} className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-xl">
                <div className="h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold fulcrum-text mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button className="bg-fulcrum-red hover:bg-fulcrum-red-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    See More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fixed Position Carousel Controls */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-fulcrum-red hover:bg-fulcrum-red hover:text-white transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-fulcrum-red hover:bg-fulcrum-red hover:text-white transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-fulcrum-red hover:bg-fulcrum-red-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

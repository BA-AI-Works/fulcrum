import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "AI-Powered Learning Experience Design for a Leading Learning Solutions Provider",
    description: "Client is a leading AI trainings company aiming to build an intelligent, end-to-end learning platform.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "Client is a leading AI trainings company aiming to build an intelligent, end-to-end learning platform.",
      scope: [
        "Analyzed learning requirements and user personas",
        "Designed AI-powered content recommendation system",
        "Implemented adaptive learning algorithms",
        "Created personalized learning pathways",
        "Delivered comprehensive training platform"
      ]
    }
  },
  {
    title: "AI-Based Talent Matching Engine for an IT Outsourcing Company",
    description: "Efficiently match CVs to job openings with contextual analysis for streamlined recruitment processes.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "Efficiently match CVs to job openings with contextual analysis for streamlined recruitment processes.",
      scope: [
        "Developed CV parsing and analysis algorithms",
        "Created job requirement matching system",
        "Implemented contextual ranking algorithms",
        "Built automated screening workflows",
        "Delivered enhanced recruitment platform"
      ]
    }
  },
  {
    title: "AI Strategy Dev. & Intelligent Sales Platform Implementation for a Leading Food Distributor",
    description: "Designed & deployed intelligent quotation/order flows with comprehensive AI strategy development.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "Client is a regional B2B food distribution company, leader in frozen food distribution, distributing food to primarily hotels, restaurants and cafes",
      scope: [
        "Reviewed company strategy and vision, identified primary pain points",
        "Identified the AI use cases custom designed for the company",
        "Designed AI use case prioritization criteria considering company strategic priorities, pain points, use case potential efficiency and effectiveness contribution",
        "Analyzed and redesigned company's request for quotation, quotation and order management processes",
        "Designed an end-to-end intelligent sales platform, including functionality, UI/UX, database architecture and integration with legacy systems",
        "Implemented the designed intelligent sales platform",
        "Delivered trainings and run systems tests",
        "Deployed the platform"
      ]
    }
  },
  {
    title: "AI Agent for Marketing Automation and Intelligence",
    description: "SEO optimization, content publishing, and multilingual conversational agents for enhanced marketing intelligence.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "SEO optimization, content publishing, and multilingual conversational agents for enhanced marketing intelligence.",
      scope: [
        "Developed AI-powered SEO optimization tools",
        "Created automated content publishing systems",
        "Built multilingual conversational agents",
        "Implemented marketing intelligence dashboards",
        "Delivered comprehensive marketing automation platform"
      ]
    }
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [dialogProjectIndex, setDialogProjectIndex] = useState(0);
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
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleProjects = projects.slice(currentIndex * 2, (currentIndex * 2) + 2);

  const openProjectDialog = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setDialogProjectIndex(projectIndex);
  };

  const nextProject = () => {
    setDialogProjectIndex((dialogProjectIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDialogProjectIndex((dialogProjectIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Select Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successful AI transformations across industries
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleProjects.map((project, index) => (
              <Card 
                key={currentIndex * 2 + index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-500 rounded-xl group cursor-pointer"
                onClick={() => openProjectDialog(currentIndex * 2 + index)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold fulcrum-text mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
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

        {/* Project Details Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left side - Project Details */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl font-bold fulcrum-text">
                    {projects[dialogProjectIndex]?.title}
                  </DialogTitle>
                  <p className="text-gray-600 mt-2">
                    {projects[dialogProjectIndex]?.details.subtitle}
                  </p>
                </DialogHeader>

                <div>
                  <h4 className="text-lg font-semibold fulcrum-red mb-4">Scope:</h4>
                  <ul className="space-y-2">
                    {projects[dialogProjectIndex]?.details.scope.map((item, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="fulcrum-red mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carousel Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevProject}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <span className="text-sm text-gray-500">
                    {dialogProjectIndex + 1} of {projects.length}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextProject}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Right side - Project Image */}
              <div className="relative">
                <img 
                  src={projects[dialogProjectIndex]?.image} 
                  alt={projects[dialogProjectIndex]?.title}
                  className="w-full h-full object-cover rounded-r-lg"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

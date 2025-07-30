import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectDetails {
  subtitle: string;
  scope: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Strategy Dev. & Intelligent Sales Platform Implementation for a Leading Food Distributor",
    description: "Client is a regional B2B food distribution company, leader in frozen food distribution, distributing food to primarily hotels, restaurants and cafes",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
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
    id: 2,
    title: "Digital Transformation & AI Integration for Manufacturing Excellence",
    description: "Comprehensive digital transformation project for a leading automotive parts manufacturer, focusing on production optimization and quality control",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800",
    details: {
      subtitle: "Comprehensive digital transformation project for a leading automotive parts manufacturer, focusing on production optimization and quality control",
      scope: [
        "Conducted comprehensive digital readiness assessment",
        "Designed AI-powered predictive maintenance system",
        "Implemented real-time production monitoring dashboard",
        "Developed quality control automation using computer vision",
        "Created data integration layer for legacy systems",
        "Established AI governance framework",
        "Delivered comprehensive training programs",
        "Ongoing support and optimization"
      ]
    }
  },
  {
    id: 3,
    title: "Smart Healthcare Analytics Platform for Regional Hospital Network",
    description: "Advanced analytics and AI implementation for a regional hospital network to improve patient outcomes and operational efficiency",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    details: {
      subtitle: "Advanced analytics and AI implementation for a regional hospital network to improve patient outcomes and operational efficiency",
      scope: [
        "Analyzed existing healthcare data infrastructure",
        "Designed patient flow optimization algorithms",
        "Implemented predictive analytics for resource planning",
        "Created real-time clinical decision support system",
        "Developed patient risk stratification models",
        "Established HIPAA-compliant data governance",
        "Integrated with existing EMR systems",
        "Delivered clinical staff training programs"
      ]
    }
  },
  {
    id: 4,
    title: "Financial Services AI Modernization Initiative",
    description: "Complete AI strategy and implementation for a mid-size financial services firm focusing on risk management and customer experience",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    details: {
      subtitle: "Complete AI strategy and implementation for a mid-size financial services firm focusing on risk management and customer experience",
      scope: [
        "Conducted regulatory compliance assessment",
        "Designed AI-powered fraud detection system",
        "Implemented intelligent customer service chatbot",
        "Created personalized investment recommendation engine",
        "Developed real-time risk monitoring dashboard",
        "Established model governance and validation framework",
        "Integrated with core banking systems",
        "Ongoing model performance monitoring"
      ]
    }
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [dialogProjectIndex, setDialogProjectIndex] = useState<number>(0);

  const openProjectDialog = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setDialogProjectIndex(projectIndex);
  };

  const nextProject = () => {
    if (dialogProjectIndex < projects.length - 1) {
      setDialogProjectIndex(dialogProjectIndex + 1);
    }
  };

  const prevProject = () => {
    if (dialogProjectIndex > 0) {
      setDialogProjectIndex(dialogProjectIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped organizations transform their operations through strategic AI implementation and digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 rounded-xl group cursor-pointer"
              onClick={() => openProjectDialog(index)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <div>
                    <h3 className="text-2xl font-bold fulcrum-text mb-4 group-hover:text-fulcrum-red transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center text-fulcrum-red font-semibold group-hover:underline">
                      <span>View Project Details</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Container */}
          <div className="relative z-60 w-full max-w-5xl mx-4">
            {/* Navigation Arrows - Outside the modal */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-fulcrum-red hover:bg-fulcrum-red hover:text-white transition-all duration-300 z-70"
              disabled={dialogProjectIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg text-fulcrum-red hover:bg-fulcrum-red hover:text-white transition-all duration-300 z-70"
              disabled={dialogProjectIndex === projects.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left side - Project Image, Title, Subtitle */}
                <div className="p-8 flex flex-col">
                  <div className="mb-6">
                    <img 
                      src={projects[dialogProjectIndex]?.image} 
                      alt={projects[dialogProjectIndex]?.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <div>
                      <h2 className="text-2xl font-bold fulcrum-text mb-4">
                        {projects[dialogProjectIndex]?.title}
                      </h2>
                      <p className="text-gray-600">
                        {projects[dialogProjectIndex]?.details.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Project Counter */}
                  <div className="mt-auto text-center">
                    <span className="text-sm text-gray-500">
                      {dialogProjectIndex + 1} of {projects.length}
                    </span>
                  </div>
                </div>

                {/* Right side - Scope */}
                <div className="p-8 overflow-y-auto max-h-[90vh] bg-gray-50">
                  <div>
                    <h4 className="text-xl font-semibold fulcrum-red mb-6">Scope:</h4>
                    <ul className="space-y-4">
                      {projects[dialogProjectIndex]?.details.scope.map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="fulcrum-red mr-3 mt-1.5 text-sm">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
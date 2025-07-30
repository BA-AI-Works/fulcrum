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

const projects = [
  {
    title: "AI-Powered Learning Experience Design for a Leading Learning Solutions Provider",
    description: "Client is a leading AI trainings company aiming to build an intelligent, end-to-end learning platform.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "Client is a leading AI trainings company aiming to build an intelligent, end-to-end learning platform. The objective was to design an AI-powered LMS that could autonomously detect individual learning needs and manage the entire learning journey.",
      scope: [
        "Defined the end-to-end learning experience vision and the role of AI across user touchpoints",
        "Designed the decision architecture to assess employee skill gaps, learning history, and role-specific needs",
        "Developed a recommendation engine logic to match users with tailored content, learning paths and programs",
        "Created a modular, user-centered interface structure for discovery, planning, purchasing, and continuous learning",
        "Integrated feedback loops to refine suggestions based on learning outcomes and behavioral data",
        "Delivered product blueprint, user flows, and experience principles to guide future development phases"
      ]
    }
  },
  {
    title: "AI-Based Talent Matching Engine for an IT Outsourcing Company",
    description: "Efficiently match CVs to job openings with contextual analysis for streamlined recruitment processes.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    details: {
      subtitle: "Client is an IT outsourcing services provider aiming to optimize its talent placement processes. The objective was to design an AI-powered matching engine that could efficiently analyze incoming CVs and match them to open roles based on relevance and fit.",
      scope: [
        "Defined the end-to-end use case, from CV intake to job-role matching, in alignment with internal recruitment workflows",
        "Designed the matching algorithm logic to assess skills, experience, and contextual indicators in both candidate profiles and open positions",
        "Developed a scoring model to prioritize fit between applicants and roles, enabling faster and more accurate placement decisions",
        "Integrated human-in-the-loop mechanisms to validate model outputs and fine-tune learning over time",
        "Delivered user flows and interface guidelines for recruiters to review, compare, and act on AI-generated matches",
        "Designed the data architecture to support scalability and performance"
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
      subtitle: "The client wanted to streamline marketing operations - ranging from customer support to content publishing, performance analysis, and SEO/AIEO optimization - across multiple languages and social media platforms",
      scope: [
        "Built multilingual conversational agents integrated into WhatsApp and Telegram to provide automated, accurate product support with live-agent fallback",
        "Developed an AI-assisted publishing agent to manage multi-channel content scheduling and distribution, ensuring platform compatibility and format validation",
        "Embedded planning intelligence to optimize content calendars and surface actionable recommendations based on content gaps and posting rhythm",
        "Created a performance analytics agent that interprets channel data and generates weekly insights on content impact, trends, and engagement patterns",
        "Implemented a dual-mode SEO/AIEO agent that assesses content visibility for both search engines and LLMs (e.g., ChatGPT), and delivers GPT-powered improvement suggestions",
        "Integrated human-in-the-loop checkpoints for editorial oversight, transparency, and strategic control"
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
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 rounded-xl group cursor-pointer"
              onClick={() => openProjectDialog(index)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px]">
                {/* Left side - Project Image, Title, Subtitle */}
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <div>
                      <h2 className="text-2xl font-bold fulcrum-text mb-4 group-hover:text-fulcrum-red transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-gray-600">
                        {project.details.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Scope */}
                <div className="bg-gray-50 h-full flex flex-col">
                  <div className="p-8 pb-4">
                    <h4 className="text-xl font-semibold fulcrum-red mb-6">Scope:</h4>
                  </div>
                  <div className="flex-1 overflow-y-auto px-8 pb-8">
                    <ul className="space-y-4">
                      {project.details.scope.map((item, scopeIndex) => (
                        <li key={scopeIndex} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="fulcrum-red mr-3 mt-1.5 text-sm">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
            <div className="bg-white rounded-lg shadow-2xl h-[80vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left side - Project Image, Title, Subtitle */}
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1">
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
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">
                      {dialogProjectIndex + 1} of {projects.length}
                    </span>
                  </div>
                </div>

                {/* Right side - Scope */}
                <div className="bg-gray-50 h-full flex flex-col">
                  <div className="p-8 pb-4">
                    <h4 className="text-xl font-semibold fulcrum-red mb-6">Scope:</h4>
                  </div>
                  <div className="flex-1 overflow-y-auto px-8 pb-8">
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
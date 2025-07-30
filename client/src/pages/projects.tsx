import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

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
    tags: ["AI", "LMS", "Machine Learning", "EdTech"],
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
    tags: ["AI", "HR Tech", "Recruitment"],
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
    tags: ["AI Strategy", "Sales Platform", "B2B", "Food Industry"],
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
    tags: ["AI Agent", "Marketing Automation", "SEO", "Content Management"],
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
  },
  {
    title: "AI Agent for End-to-End Product Requirements Design",
    description: "Clients needed a domain-specific AI agent to support business analysts and product teams in defining high-quality product requirements with speed and consistency.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["AI Agent", "Product Requirements", "Business Analysis"],
    details: {
      subtitle: "Clients needed a domain-specific AI agent to support business analysts and product teams in defining high-quality product requirements with speed and consistency.",
      scope: [
        "Designed the agentic workflow to for the full lifecycle; from capturing business needs to generating complete, IIBA-compliant PRD documents",
        "Embedded capabilities to define goals, user personas, use cases, user stories, feature sets, MVP scopes, and test scenarios",
        "Developed modular AI functions aligned with common analyst tasks, structured as guided workflows within a unified interface",
        "Enabled real-time generation of diagrams and visual artifacts to support communication and documentation",
        "Integrated human-in-the-loop checkpoints to ensure transparency, control, and context-aware decision-making",
        "Delivered interface logic and usability flows optimized for adoption by analysts, product owners, and teams",
        "Positioned the AI agent as a co-pilot that accelerates analysis while preserving expert judgment and stakeholder alignment"
      ]
    }
  },
  {
    title: "AI-Integrated Digital Factory for A Digital Product Delivery House",
    description: "Client wanted to reduce coordination overhead, shorten iteration cycles, and ensure continuous visibility and automation across the stack. The team established a fully digital software factory.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Digital Factory", "DevOps", "Automation", "AI Integration"],
    details: {
      subtitle: "Client wanted to reduce coordination overhead, shorten iteration cycles, and ensure continuous visibility and automation across the stack. The team established a fully digital software factory.",
      scope: [
        "Adopted Cursor as an AI-augmented development environment for faster code generation, refactoring, and inline problem-solving",
        "Structured product development work in Linear with clear ticket hierarchies, linked PRs, and automated progress tracking",
        "Enabled real-time collaboration and notifications through Slack, integrating issue, PR, and events",
        "Implemented GitHub automation for pull request validation, branching strategy enforcement, and changelog generation",
        "Embedded Playwright for end-to-end testing, connected to CI pipelines for auto-triggered test runs",
        "Created workflow automations across tools to minimize context switching and ensure traceable, audit-ready releases",
        "Delivered a modular, extensible setup adaptable to various team sizes, tech stacks, and release cadences"
      ]
    }
  },
  {
    title: "Talent Strategy Design for a Global Pharmaceutical Company",
    description: "Client is a multinational pharmaceutical company looking to strengthen its position as an employer of choice by designing an HR strategy focused on talent attraction, engagement, and a consistent organizational identity",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Talent Strategy", "HR", "Pharmaceutical", "Employer Branding"],
    details: {
      subtitle: "Client is a multinational pharmaceutical company looking to strengthen its position as an employer of choice by designing an HR strategy focused on talent attraction, engagement, and a consistent organizational identity",
      scope: [
        "Reviewed existing HR priorities and talent-related pain points across regions and functions",
        "Defined the company's distinctive employee value proposition (EVP) aligned with business vision and cultural attributes",
        "Designed the core talent messaging framework to be reflected across internal and external HR touchpoints",
        "Structured the communication pillars and content guidelines for different employee segments and candidate personas",
        "Integrated the strategy into recruitment, onboarding, internal communications, and leadership development initiatives",
        "Benchmarked leading practices across peer industries and synthesized actionable recommendations"
      ]
    }
  },
  {
    title: "AI Strategy Development for a Technology Company",
    description: "Client wanted streamline its workforce base to transform into a leaner organization. It wanted to identify the most relevant areas for AI implementations and workforce competency improvement requirements",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["AI Strategy", "Workforce Transformation", "Technology"],
    details: {
      subtitle: "Client wanted streamline its workforce base to transform into a leaner organization. It wanted to identify the most relevant areas for AI implementations and workforce competency improvement requirements",
      scope: [
        "Developed AI use cases custom developed for the organization",
        "Identified the use cases that can alternatively be delivered by alternative technologies to AI",
        "Identified the potential efficiency and effectiveness gains for the organization and prioritized use cases",
        "Reviewed the feasibility (technologic maturity, data availability, implementation complexity, etc.) of the use cases, prioritized use cases",
        "Identified potential FTE impact of the prioritized use cases",
        "Defined the new roles needed and existing roles to be transformed",
        "Developed an implementation roadmap"
      ]
    }
  },
  {
    title: "Global Engagement on Emerging Technologies for a Pharmaceutical Company",
    description: "Client is a global pharmaceutical company seeking to explore the role of AI and other emerging technologies in the future of pharma. We facilitated a strategic program bringing together medical experts from across the world to co-develop insights and use cases",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Emerging Technologies", "Pharmaceutical", "Global Strategy", "Healthcare AI"],
    details: {
      subtitle: "Client is a global pharmaceutical company seeking to explore the role of AI and other emerging technologies in the future of pharma. We facilitated a strategic program bringing together medical experts from across the world to co-develop insights and use cases",
      scope: [
        "Curated and facilitated multi-region workshops with physicians, researchers, and healthcare stakeholders",
        "Explored real-world applications of AI and data-driven decision-making in clinical and pharmaceutical settings",
        "Designed interactive sessions blending education, use-case development, and collaborative foresight",
        "Captured region-specific opportunities, unmet needs, and adoption barriers across markets",
        "Delivered strategic outputs to inform the client's technology roadmap and external engagement strategy",
        "Created reusable formats for future expert panels and innovation roundtables",
        "Synthesized workshop insights into a consolidated concept framework and implementation roadmap for emerging technology adoption"
      ]
    }
  },
  {
    title: "AI-Powered Personal Art Assistant & Art Engagement Platform Development",
    description: "Client is a global art and technology initiative aiming to create a personalized, interactive journey for art enthusiasts. The objective was to design an AI and machine learning-powered platform that acts as a personal art assistant.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "Art Technology", "Personalization", "Machine Learning"],
    details: {
      subtitle: "Client is a global art and technology initiative aiming to create a personalized, interactive journey for art enthusiasts. The objective was to design an AI and machine learning-powered platform that acts as a personal art assistant.",
      scope: [
        "Defined the user experience strategy to guide individuals through personalized artistic discovery and interaction",
        "Designed the AI- and ML-based engine to understand user interests, suggest artworks, and build contextual content feeds",
        "Structured a reward system that recognizes engagement through curated challenges and community-driven interactions",
        "Developed gamified mechanisms to promote recurring participation and peer-based sharing",
        "Delivered the platform architecture, experience flows, and interaction models across mobile and web interfaces"
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
      <Navigation />
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
              <div className="grid grid-cols-1 lg:grid-cols-2 h-[600px]">
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
                      <p className="text-gray-600 mb-4">
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
                  <div className="flex-1 overflow-y-auto px-8 pb-8" style={{ maxHeight: "420px" }}>
                    <div className="pr-2"> {/* Add padding for scrollbar */}
                      <ul className="space-y-4">
                        {project.details.scope.map((item, scopeIndex) => (
                          <li key={scopeIndex} className="text-gray-700 flex items-start leading-relaxed">
                            <span className="fulcrum-red mr-3 mt-1.5 text-sm">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tags - Below scope items, left aligned */}
                    <div className="px-8 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-full border"
                            style={{ 
                              borderColor: '#7A0000',
                              color: '#7A0000',
                              backgroundColor: 'rgba(122, 0, 0, 0.05)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
            <div className="bg-white rounded-lg shadow-2xl h-[85vh] overflow-hidden">
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
                  <div className="flex-1 overflow-y-auto px-8 pb-8" style={{ maxHeight: "calc(80vh - 120px)" }}>
                    <div className="pr-2"> {/* Add padding for scrollbar */}
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
            
            {/* Project Counter - Outside modal */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm text-gray-500">
                  {selectedProject + 1} of {projects.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
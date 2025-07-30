import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface JourneyStep {
  id: number;
  stepLabel: string;
  title: string;
  description: string;
  buttonText: string;
}

interface StepDetail {
  title: string;
  activities: string[];
  deliverables: string[];
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    stepLabel: "1st step",
    title: "What business priorities can AI serve?",
    description: "What is my business strategy and goals? Which business metrics do I want to improve? Which areas can I benefit from AI the most to realize my business objectives?",
    buttonText: "Uncover AI Value"
  },
  {
    id: 2,
    stepLabel: "2nd step", 
    title: "Where will I use it?",
    description: "Is my infrastructure capable of delivering what AI-powered intelligent processes demand? How ready is my culture to embrace AI? Which processes should I prioritize?",
    buttonText: "Scan for Readiness"
  },
  {
    id: 3,
    stepLabel: "3rd step",
    title: "How will I use it?",
    description: "What can I improve in the prioritized processes? What AI tools are relevant to further enrich intelligent business processes? How will I integrate AI to my existing infrastructure?",
    buttonText: "Design Workflows"
  },
  {
    id: 4,
    stepLabel: "4th step",
    title: "I use it!",
    description: "Implement AI powered intelligent business processes and train end-users to maximize the transformation impact across your organization.",
    buttonText: "Launch Your Solution"
  }
];

const stepDetails: Record<number, StepDetail> = {
  1: {
    title: "What business priorities can AI serve?",
    activities: [
      "Review company strategy, vision and business goals, as well as HR business goals & plans",
      "Identify key business challenges where AI can add value",
      "Define AI goals (e.g. automation, decision support, user experience, etc.)",
      "Discuss the target AI autonomy levels",
      "Set AI related success metrics"
    ],
    deliverables: [
      "Key Areas AI can add Value",
      "AI Related Success Metrics"
    ]
  },
  2: {
    title: "Where specifically can I use AI?",
    activities: [
      "Identify potential AI agent & intelligent process use cases",
      "Assess data availability, quality and accessibility, and supporting technology stack",
      "Identify needs for machine learning to enhance data quality",
      "Review available talent and culture",
      "Prioritize & select use cases (business processes) based on alignment with business strategy, data availability, technical feasibly, talent readiness and cost",
      "Develop AI process automation roadmap"
    ],
    deliverables: [
      "AI Readiness Assessment",
      "Prioritized Business Processes",
      "AI Business Process Automation Roadmap"
    ]
  },
  3: {
    title: "How will I use it?",
    activities: [
      "Analyze the prioritized business processes & identify improvement areas",
      "Re-design processes and map the relevant AI technologies (ML, NLP, RPA, CV, etc.) to each process step",
      "Design UX and data integrations with legacy systems and other data sources",
      "Set AI autonomy levels by process",
      "Document workflows",
      "Define the AI governance structure and roles"
    ],
    deliverables: [
      "Workflows of Re-designed Business Processes",
      "AI Governance Structure"
    ]
  },
  4: {
    title: "I use it!",
    activities: [
      "Build AI models",
      "Integrate the models with back-end legacy systems and other data sources",
      "Train and test AI models",
      "Train end users",
      "Launch AI models"
    ],
    deliverables: [
      "Trainings",
      "Operational AI Models"
    ]
  }
};

export default function Journey() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedStepDetail, setSelectedStepDetail] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardAnimations, setCardAnimations] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stepRefs.current.length) return;

      const sectionTop = sectionRef.current.offsetTop - window.innerHeight * 0.3;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      
      // Calculate scroll progress within the section
      const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / (sectionHeight * 0.8)));
      setScrollProgress(progress);
      
      // Determine active step based on progress
      const stepProgress = progress * (journeySteps.length - 1);
      const currentActiveStep = Math.floor(stepProgress) + 1;
      setActiveStep(Math.min(currentActiveStep, journeySteps.length));

      // Calculate card animations
      const newCardAnimations: { [key: number]: number } = {};
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const rect = stepRef.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const cardCenter = rect.top + rect.height / 2;
          
          // Start animation when card is 90% visible from bottom
          const animationStart = windowHeight * 0.9;
          const animationEnd = windowHeight * 0.1;
          
          if (cardCenter <= animationStart && cardCenter >= animationEnd) {
            // Card is in animation range - calculate progress (0 to 1)
            const animationProgress = (animationStart - cardCenter) / (animationStart - animationEnd);
            newCardAnimations[index + 1] = Math.max(0, Math.min(1, animationProgress));
          } else if (cardCenter < animationEnd) {
            // Card is fully animated
            newCardAnimations[index + 1] = 1;
          } else {
            // Card hasn't started animating
            newCardAnimations[index + 1] = 0;
          }
        }
      });
      
      setCardAnimations(newCardAnimations);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Transformation Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate your AI transformation with our proven 4-step methodology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Continuous Timeline */}
            <div className="absolute left-8 top-20 w-0.5 bg-gray-300" style={{ height: 'calc(100% - 200px)' }}></div>
            {/* Continuous Progress Line */}
            <div 
              className="absolute left-8 top-20 w-0.5 transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * (100 - 12)}%`,
                backgroundColor: '#7A0000',
                maxHeight: 'calc(100% - 200px)'
              }}
            ></div>

            <div className="space-y-16">
              {journeySteps.map((step, index) => (
                <div 
                  key={step.id}
                  ref={(el) => stepRefs.current[index] = el}
                  className="flex items-start relative"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 mr-8 relative z-10">
                    <div className="text-6xl font-bold text-gray-300 bg-white pr-4">
                      {step.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div 
                    className="flex-1 transition-all duration-700 ease-out"
                    style={{
                      transform: `translateY(${30 - (cardAnimations[step.id] || 0) * 30}px)`,
                      opacity: 0.6 + (cardAnimations[step.id] || 0) * 0.4
                    }}
                  >
                    <Card 
                      className={`transition-all duration-300 rounded-2xl hover:border-fulcrum-red hover:shadow-lg ${
                        activeStep === step.id 
                          ? 'border-2 border-fulcrum-red' 
                          : 'border-2 border-gray-200'
                      }`}
                    >
                      <CardContent className="p-8 relative">
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            {step.stepLabel}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold fulcrum-text mb-4">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <button 
                          className="px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:text-white"
                          style={{
                            borderColor: '#7A0000',
                            color: '#7A0000'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#7A0000';
                            e.currentTarget.style.color = '#FFFFFF';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#7A0000';
                          }}
                          onClick={() => setSelectedStepDetail(step.id)}
                        >
                          {step.buttonText}
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step Detail Modal */}
      {selectedStepDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setSelectedStepDetail(null)}
          />
          
          {/* Modal Container */}
          <div className="relative z-60 w-full max-w-4xl mx-4">
            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedStepDetail(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg text-fulcrum-red hover:bg-fulcrum-red hover:text-white transition-all duration-300 z-80"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold fulcrum-text mb-6">
                  {stepDetails[selectedStepDetail]?.title}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Activities */}
                  <div>
                    <h3 className="text-xl font-semibold fulcrum-red mb-4">Activities</h3>
                    <ul className="space-y-3">
                      {stepDetails[selectedStepDetail]?.activities.map((activity, index) => (
                        <li key={index} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="fulcrum-red mr-3 mt-1.5 text-sm">▪</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xl font-semibold fulcrum-red mb-4">Deliverables</h3>
                    <ul className="space-y-3">
                      {stepDetails[selectedStepDetail]?.deliverables.map((deliverable, index) => (
                        <li key={index} className="text-gray-700 flex items-start leading-relaxed">
                          <span className="fulcrum-red mr-3 mt-1.5 text-sm">▪</span>
                          <span>{deliverable}</span>
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
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface JourneyStep {
  id: number;
  stepLabel: string;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    stepLabel: "1st step",
    title: "What business priorities can AI serve?",
    description: "What is my business strategy and goals? Which business metrics do I want to improve? Which areas can I benefit from AI the most to realize my business objectives?"
  },
  {
    id: 2,
    stepLabel: "2nd step", 
    title: "Where will I use it?",
    description: "Is my infrastructure capable of delivering what AI-powered intelligent processes demand? How ready is my culture to embrace AI? Which processes should I prioritize?"
  },
  {
    id: 3,
    stepLabel: "3rd step",
    title: "How will I use it?",
    description: "What can I improve in the prioritized processes? What AI tools are relevant to further enrich intelligent business processes? How will I integrate AI to my existing infrastructure?"
  },
  {
    id: 4,
    stepLabel: "4th step",
    title: "I use it!",
    description: "Implement AI powered intelligent business processes and train end-users to maximize the transformation impact across your organization."
  }
];

export default function Journey() {
  const [activeStep, setActiveStep] = useState<number>(1);
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
          
          // Start animation when card is 80% visible from bottom
          const animationStart = windowHeight * 0.8;
          const animationEnd = windowHeight * 0.2;
          
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
                      transform: `translateY(${50 - (cardAnimations[step.id] || 0) * 50}px)`,
                      opacity: 0.3 + (cardAnimations[step.id] || 0) * 0.7
                    }}
                  >
                    <Card 
                      className={`transition-all duration-300 rounded-2xl ${
                        activeStep === step.id 
                          ? 'border-2 border-fulcrum-red' 
                          : 'border-2 border-gray-200'
                      }`}
                    >
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
                            {step.stepLabel}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold fulcrum-text mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

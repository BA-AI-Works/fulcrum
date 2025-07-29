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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stepRefs.current.length) return;

      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      
      // Find which step is currently in view
      let currentActiveStep = 1;
      stepRefs.current.forEach((stepRef, index) => {
        if (stepRef) {
          const stepTop = stepRef.offsetTop;
          const stepBottom = stepTop + stepRef.offsetHeight;
          
          if (viewportMiddle >= stepTop && viewportMiddle <= stepBottom) {
            currentActiveStep = index + 1;
          }
        }
      });
      
      setActiveStep(currentActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate progress height - stops at step 4, doesn't go beyond
  const progressHeight = Math.min(((activeStep - 1) / (journeySteps.length - 1)) * 100, 100);

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
            <div className="space-y-16">
              {journeySteps.map((step, index) => (
                <div 
                  key={step.id}
                  ref={(el) => stepRefs.current[index] = el}
                  className="flex items-start relative"
                >
                  {/* Timeline Line - only show if not the last step */}
                  {index < journeySteps.length - 1 && (
                    <>
                      {/* Background line */}
                      <div className="absolute left-8 top-20 w-0.5 bg-gray-300" style={{ height: '120px' }}></div>
                      {/* Progress line - only show if this step is active or completed */}
                      {activeStep > step.id && (
                        <div className="absolute left-8 top-20 w-0.5 bg-fulcrum-red transition-all duration-500" style={{ height: '120px' }}></div>
                      )}
                    </>
                  )}

                  {/* Step Number */}
                  <div className="flex-shrink-0 mr-8 relative z-10">
                    <div className="text-6xl font-bold text-gray-300 bg-white pr-4">
                      {step.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <Card 
                      className={`transition-all duration-300 rounded-2xl ${
                        activeStep === step.id 
                          ? 'border-2 border-fulcrum-red shadow-lg' 
                          : 'border border-gray-200'
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

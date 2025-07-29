import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface JourneyStep {
  id: number;
  title: string;
  content: string[];
  bgColor: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "What business priorities can AI serve?",
    content: [
      "What is my business strategy and goals?",
      "Which business metrics do I want to improve?",
      "Which areas can I benefit from AI the most to realize my business objectives?"
    ],
    bgColor: "bg-fulcrum-red"
  },
  {
    id: 2,
    title: "Where will I use it?",
    content: [
      "Is my infrastructure capable of delivering what AI-powered intelligent processes demand?",
      "How ready is my culture to embrace AI?",
      "Which processes should I prioritize? How will my roadmap look like?"
    ],
    bgColor: "bg-fulcrum-red"
  },
  {
    id: 3,
    title: "How will I use it?",
    content: [
      "What can I improve in the prioritized processes?",
      "What AI tools are relevant to further enrich intelligent business processes?",
      "How will I integrate AI to my existing infrastructure?",
      "Who will do what in managing new processes?"
    ],
    bgColor: "bg-fulcrum-red"
  },
  {
    id: 4,
    title: "I use it!",
    content: [
      "Implement AI powered intelligent business processes",
      "Train end-users"
    ],
    bgColor: "bg-fulcrum-red"
  }
];

export default function Journey() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setExpandedCard(id);
  };

  const handleMouseLeave = () => {
    setExpandedCard(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Transformation Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate your AI transformation with our proven 4-step methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 w-full ${
                  expandedCard === step.id ? 'border-fulcrum-red shadow-xl' : 'border-transparent'
                }`}
                onMouseEnter={() => handleMouseEnter(step.id)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </div>
                    <h3 className="text-lg font-bold fulcrum-text">{step.title}</h3>
                  </div>
                  
                  {expandedCard === step.id && (
                    <div className="mt-4">
                      <ul className="text-gray-600 space-y-2 text-sm">
                        {step.content.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {index < journeySteps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mx-4">
                  <ArrowRight className="fulcrum-red w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

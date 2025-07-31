import { useState } from "react";
import { CheckCircle, Lightbulb, Search, Layers, Cog } from "lucide-react";

interface LayerOption {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  color: string;
}

interface ExecutionItem {
  title: string;
  description: string;
}

interface TrainingItem {
  title: string;
  image: string;
}

const layerOptions: LayerOption[] = [
  {
    id: "vision",
    title: "Vision",
    subtitle: "Executive Alignment for AI Transformation",
    icon: <div className="w-12 h-12 bg-[#7A0000] rounded-full flex items-center justify-center"><Lightbulb className="w-6 h-6 text-white" /></div>,
    color: "bg-gray-50 border-gray-200"
  },
  {
    id: "exploration", 
    title: "Exploration",
    subtitle: "Organization-Wide AI Awareness",
    icon: <div className="w-12 h-12 bg-[#7A0000] rounded-full flex items-center justify-center"><Search className="w-6 h-6 text-white" /></div>,
    color: "bg-gray-50 border-gray-200"
  },
  {
    id: "solution",
    title: "Solution Modeling", 
    subtitle: "Designing AI-Driven Solutions",
    icon: <div className="w-12 h-12 bg-[#7A0000] rounded-full flex items-center justify-center"><Layers className="w-6 h-6 text-white" /></div>,
    color: "bg-gray-50 border-gray-200"
  },
  {
    id: "execution",
    title: "Execution Layer",
    subtitle: "AI-Powered Solution Implementation", 
    icon: <div className="w-12 h-12 bg-[#7A0000] rounded-full flex items-center justify-center"><Cog className="w-6 h-6 text-white" /></div>,
    color: "bg-gray-50 border-gray-200"
  }
];

const executionItems: Record<string, ExecutionItem[]> = {
  vision: [
    { title: "Strategic AI Roadmap", description: "" },
    { title: "Executive Alignment", description: "" },
    { title: "Investment Planning", description: "" }
  ],
  exploration: [
    { title: "AI Awareness Programs", description: "" },
    { title: "Use Case Discovery", description: "" },
    { title: "Readiness Assessment", description: "" }
  ],
  solution: [
    { title: "Solution Architecture", description: "" },
    { title: "Proof of Concept", description: "" },
    { title: "Integration Planning", description: "" }
  ],
  execution: [
    { title: "Code / no-codesolution building", description: "" },
    { title: "AI tool & workflow prototyping", description: "" },
    { title: "Testing & iterationpracticesWe", description: "" }
  ]
};

const trainingItems: Record<string, TrainingItem[]> = {
  vision: [
    { title: "Executive AI Leadership Training", image: "/api/placeholder/200/120" },
    { title: "Strategic AI Planning Workshop", image: "/api/placeholder/200/120" },
    { title: "AI Governance & Ethics Seminar", image: "/api/placeholder/200/120" }
  ],
  exploration: [
    { title: "AI Awareness for Teams", image: "/api/placeholder/200/120" },
    { title: "AI Use Case Discovery Workshop", image: "/api/placeholder/200/120" },
    { title: "AI Readiness Assessment Training", image: "/api/placeholder/200/120" }
  ],
  solution: [
    { title: "AI Solution Design Workshop", image: "/api/placeholder/200/120" },
    { title: "Prototype Development Training", image: "/api/placeholder/200/120" },
    { title: "AI Integration Planning Seminar", image: "/api/placeholder/200/120" }
  ],
  execution: [
    { title: "Vibe Coding: AI-Accelerated Development Training", image: "/api/placeholder/200/120" },
    { title: "Vibe Coding: AI-Accelerated Development Training", image: "/api/placeholder/200/120" },
    { title: "Vibe Coding: AI-Accelerated Development Training", image: "/api/placeholder/200/120" }
  ]
};

export default function AILayers() {
  const [selectedLayer, setSelectedLayer] = useState("execution");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6 leading-tight">
            We structure AI learning into layers:<br />
            from strategy to execution
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-12">
          {/* Left Side - Layer Options in Single Column */}
          <div className="space-y-6">
            {layerOptions.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-lg ${
                  selectedLayer === layer.id 
                    ? "bg-[#7A0000] text-white border-[#7A0000]" 
                    : "bg-gray-50 border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-start space-y-4">
                  <div>
                    {selectedLayer === layer.id ? (
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#7A0000] rounded-full"></div>
                      </div>
                    ) : (
                      layer.icon
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className={`text-lg font-bold mb-2 ${
                      selectedLayer === layer.id 
                        ? "text-white" 
                        : "text-gray-900"
                    }`}>
                      {layer.title}
                    </h3>
                    <p className={`text-sm ${
                      selectedLayer === layer.id
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}>
                      {layer.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="col-span-3 bg-[#F6F7F9] rounded-xl p-6">
            <div className="grid grid-cols-5 gap-6">
              {/* Their Transformation Section */}
              <div className="col-span-2 bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Their Transformation
                </h3>
                <div className="space-y-3">
                  {executionItems[selectedLayer]?.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                      <div>
                        <span className="text-gray-700 text-sm">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey of Trainings Section */}
              <div className="col-span-3 bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Journey of Trainings, Workshops & Seminars
                </h3>
                <div className="space-y-4">
                  {trainingItems[selectedLayer]?.map((training, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="w-16 h-12 bg-gray-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <div className="text-green-400 text-xs font-mono leading-tight">
                          <div>03</div>
                          <div>04</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {training.title}
                        </h4>
                      </div>
                      <div className="w-1 h-8 bg-red-500 rounded-full flex-shrink-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
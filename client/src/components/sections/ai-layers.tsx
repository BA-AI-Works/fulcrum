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
    { title: "End-to-end AI simulation for leadership", description: "" },
    { title: "Strategy-to execution walkthrough", description: "" },
    { title: "Shared strategic language and approach", description: "" }
  ],
  exploration: [
    { title: "Inspiration-led AI awareness sessions", description: "" },
    { title: "Real-world examples & mindset shifts", description: "" },
    { title: "Creative & contextual thinking", description: "" }
  ],
  solution: [
    { title: "Role-based product thinking", description: "" },
    { title: "Insight generation & problem framing", description: "" },
    { title: "PM, UX, BA, data roles alignment", description: "" }
  ],
  execution: [
    { title: "Code / no-codesolution building", description: "" },
    { title: "AI tool & workflow prototyping", description: "" },
    { title: "Testing & iterationpracticesWe", description: "" }
  ]
};

const trainingItems: Record<string, TrainingItem[]> = {
  vision: [
    { title: "Building the AI-Powered Organization Workshops", image: "/api/placeholder/200/120" }
  ],
  exploration: [
    { title: "AI Inspiration & Upskilling Seminars Across the Organization", image: "/api/placeholder/200/120" }
  ],
  solution: [
    { title: "AI-Powered Business Analysis & Product Ownership Training", image: "/api/placeholder/200/120" },
    { title: "AI-Powered Project & Product Management Training", image: "/api/placeholder/200/120" },
    { title: "AI-Powered User/Customer Experience Design Training", image: "/api/placeholder/200/120" },
    { title: "AI-Powered Data Analysis Training", image: "/api/placeholder/200/120" }
  ],
  execution: [
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

        <div className="grid grid-cols-3 gap-8">
          {/* Left Side - Layer Options in Single Column */}
          <div className="space-y-4">
            {layerOptions.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-lg h-20 ${
                  selectedLayer === layer.id 
                    ? "bg-[#7A0000] text-white border-[#7A0000]" 
                    : "bg-gray-50 border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-4 h-full">
                  <div className="w-10 h-10 bg-[#7A0000] rounded-full flex items-center justify-center flex-shrink-0">
                    {layer.id === 'vision' && <Lightbulb className="w-5 h-5 text-white" />}
                    {layer.id === 'exploration' && <Search className="w-5 h-5 text-white" />}
                    {layer.id === 'solution' && <Layers className="w-5 h-5 text-white" />}
                    {layer.id === 'execution' && <Cog className="w-5 h-5 text-white" />}
                  </div>
                  <div className="text-left">
                    <h3 className={`text-base font-bold mb-1 ${
                      selectedLayer === layer.id 
                        ? "text-white" 
                        : "text-gray-900"
                    }`}>
                      {layer.title}
                    </h3>
                    <p className={`text-xs ${
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
          <div className="col-span-2 bg-[#F6F7F9] rounded-xl p-8 h-80">
            <div className="grid grid-cols-5 gap-8 h-full">
              {/* Their Transformation Section */}
              <div className="col-span-2 bg-white rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Their Transformation
                </h3>
                <div className="flex-1 overflow-y-auto space-y-3">
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
              <div className="col-span-3 bg-white rounded-xl p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Journey of Trainings, Workshops & Seminars
                </h3>
                <div className="flex-1 overflow-y-auto space-y-4">
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
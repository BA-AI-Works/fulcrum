import { Card, CardContent } from "@/components/ui/card";

const infrastructureCategories = [
  {
    title: "Learning and Memory",
    tools: [
      { 
        name: "memO", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="60" height="30" viewBox="0 0 60 30" className="text-gray-600">
              <circle cx="8" cy="15" r="6" fill="currentColor" opacity="0.8"/>
              <text x="18" y="19" fontSize="11" fill="currentColor" fontWeight="bold">memO</text>
            </svg>
          </div>
        )
      },
      { 
        name: "H2O.ai", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="70" height="30" viewBox="0 0 70 30" className="text-gray-600">
              <circle cx="8" cy="12" r="4" fill="currentColor" opacity="0.6"/>
              <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.8"/>
              <text x="25" y="19" fontSize="11" fill="currentColor" fontWeight="bold">H2O.ai</text>
            </svg>
          </div>
        )
      },
      { 
        name: "Learn", 
        logo: (
          <div className="bg-orange-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="65" height="30" viewBox="0 0 65 30" className="text-orange-600">
              <circle cx="10" cy="15" r="8" fill="currentColor" opacity="0.8"/>
              <text x="22" y="19" fontSize="11" fill="currentColor" fontWeight="bold">Learn</text>
            </svg>
          </div>
        )
      },
      { 
        name: "PyTorch", 
        logo: (
          <div className="bg-red-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="75" height="30" viewBox="0 0 75 30" className="text-red-500">
              <path d="M6 15 L14 8 L14 22 Z" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">PyTorch</text>
            </svg>
          </div>
        )
      }
    ]
  },
  {
    title: "Processing & Decision Making",
    tools: [
      { 
        name: "Langflow", 
        logo: (
          <div className="bg-blue-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="80" height="30" viewBox="0 0 80 30" className="text-blue-600">
              <rect x="4" y="12" width="12" height="6" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">Langflow</text>
            </svg>
          </div>
        )
      },
      { 
        name: "LangChain", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="85" height="30" viewBox="0 0 85 30" className="text-gray-700">
              <circle cx="10" cy="15" r="6" fill="currentColor" opacity="0.6"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">LangChain</text>
            </svg>
          </div>
        )
      },
      { 
        name: "LangGraph", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="85" height="30" viewBox="0 0 85 30" className="text-gray-700">
              <polygon points="6,18 14,10 22,18 14,22" fill="currentColor" opacity="0.7"/>
              <text x="28" y="19" fontSize="9" fill="currentColor" fontWeight="bold">LangGraph</text>
            </svg>
          </div>
        )
      },
      { 
        name: "LangSmith", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="85" height="30" viewBox="0 0 85 30" className="text-gray-700">
              <rect x="4" y="10" width="16" height="10" rx="2" fill="currentColor" opacity="0.6"/>
              <text x="25" y="19" fontSize="9" fill="currentColor" fontWeight="bold">LangSmith</text>
            </svg>
          </div>
        )
      },
      { 
        name: "CrewAI", 
        logo: (
          <div className="bg-red-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="70" height="30" viewBox="0 0 70 30" className="text-red-600">
              <path d="M6 15 Q12 8 18 15 Q12 22 6 15" fill="currentColor" opacity="0.7"/>
              <text x="24" y="19" fontSize="10" fill="currentColor" fontWeight="bold">CrewAI</text>
            </svg>
          </div>
        )
      }
    ]
  },
  {
    title: "Language and Communication",
    tools: [
      { 
        name: "OpenAI", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="75" height="30" viewBox="0 0 75 30" className="text-gray-700">
              <circle cx="10" cy="15" r="6" fill="currentColor" opacity="0.8"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">OpenAI</text>
            </svg>
          </div>
        )
      },
      { 
        name: "Gemini", 
        logo: (
          <div className="bg-blue-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="70" height="30" viewBox="0 0 70 30" className="text-blue-500">
              <path d="M6 12 L14 8 L14 16 L6 20 Z" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">Gemini</text>
            </svg>
          </div>
        )
      },
      { 
        name: "Claude", 
        logo: (
          <div className="bg-orange-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="70" height="30" viewBox="0 0 70 30" className="text-orange-600">
              <ellipse cx="10" cy="15" rx="6" ry="4" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">Claude</text>
            </svg>
          </div>
        )
      },
      { 
        name: "ElevenLabs", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="85" height="30" viewBox="0 0 85 30" className="text-gray-600">
              <rect x="4" y="12" width="12" height="6" fill="currentColor" opacity="0.6"/>
              <text x="20" y="19" fontSize="9" fill="currentColor" fontWeight="bold">ElevenLabs</text>
            </svg>
          </div>
        )
      },
      { 
        name: "deepseek", 
        logo: (
          <div className="bg-blue-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="80" height="30" viewBox="0 0 80 30" className="text-blue-700">
              <circle cx="10" cy="15" r="5" fill="currentColor" opacity="0.6"/>
              <text x="20" y="19" fontSize="9" fill="currentColor" fontWeight="bold">deepseek</text>
            </svg>
          </div>
        )
      },
      { 
        name: "HeyGen", 
        logo: (
          <div className="bg-purple-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="75" height="30" viewBox="0 0 75 30" className="text-purple-600">
              <path d="M6 15 L14 9 L14 21 Z" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="10" fill="currentColor" fontWeight="bold">HeyGen</text>
            </svg>
          </div>
        )
      },
      { 
        name: "D-ID", 
        logo: (
          <div className="bg-gray-100 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="65" height="30" viewBox="0 0 65 30" className="text-gray-600">
              <rect x="6" y="12" width="10" height="6" rx="1" fill="currentColor" opacity="0.7"/>
              <text x="20" y="19" fontSize="11" fill="currentColor" fontWeight="bold">D-ID</text>
            </svg>
          </div>
        )
      },
      { 
        name: "Firecrwal", 
        logo: (
          <div className="bg-orange-50 rounded-lg p-3 h-16 flex items-center justify-center">
            <svg width="80" height="30" viewBox="0 0 80 30" className="text-orange-500">
              <path d="M6 20 L10 12 L14 20 L10 24 Z" fill="currentColor" opacity="0.8"/>
              <text x="18" y="19" fontSize="9" fill="currentColor" fontWeight="bold">Firecrwal</text>
            </svg>
          </div>
        )
      }
    ]
  },
  {
    title: "Sensory Perception",
    tools: [
      { 
        name: "Google Vertex AI Studio", 
        description: "Google Vertex AI Studio for vision, speech, touch, and other modalities",
        logo: (
          <div className="bg-blue-50 rounded-lg p-4 h-24 flex flex-col justify-center">
            <div className="flex items-center mb-2">
              <svg width="40" height="30" viewBox="0 0 40 30" className="text-blue-500 mr-2">
                <circle cx="8" cy="12" r="2" fill="currentColor" opacity="0.8"/>
                <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.6"/>
                <circle cx="24" cy="16" r="2" fill="currentColor" opacity="0.7"/>
                <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.5"/>
                <circle cx="20" cy="22" r="2" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <div className="text-xs text-gray-700 leading-tight">
              Google Vertex AI Studio for vision, speech, touch,<br/>
              and other modalities
            </div>
          </div>
        )
      }
    ]
  }
];

export default function AIInfrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Our AI Infrastructure Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While delivering our solution, we use the most powerful artificial intelligence infrastructures in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {infrastructureCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="w-full">
                    {tool.logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
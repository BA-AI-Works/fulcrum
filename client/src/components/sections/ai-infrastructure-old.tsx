import { Card, CardContent } from "@/components/ui/card";

interface Logo {
  name: string;
  bgColor: string;
  description?: string;
}

interface InfrastructureCategory {
  title: string;
  logos: Logo[];
}

const infrastructureCategories: InfrastructureCategory[] = [
  {
    title: "Learning and Memory",
    logos: [
      { name: "mem0", bgColor: "bg-gray-100" },
      { name: "H2O.ai", bgColor: "bg-blue-50" },
      { name: "Levam", bgColor: "bg-orange-50" },
      { name: "PyTorch", bgColor: "bg-red-50" }
    ]
  },
  {
    title: "Processing & Decision Making", 
    logos: [
      { name: "Langflow", bgColor: "bg-gray-100" },
      { name: "LangChain", bgColor: "bg-green-50" },
      { name: "LangGraph", bgColor: "bg-gray-100" },
      { name: "LangSmith", bgColor: "bg-gray-100" },
      { name: "CrewAI", bgColor: "bg-red-50" }
    ]
  },
  {
    title: "Language and Communication",
    logos: [
      { name: "OpenAI", bgColor: "bg-gray-100" },
      { name: "Gemini", bgColor: "bg-blue-50" },
      { name: "Claude", bgColor: "bg-orange-50" },
      { name: "11ElevenLabs", bgColor: "bg-gray-100" },
      { name: "deepseek", bgColor: "bg-blue-50" },
      { name: "HeyGen", bgColor: "bg-purple-50" },
      { name: "DHD", bgColor: "bg-gray-100" },
      { name: "Firecrawl", bgColor: "bg-orange-50" }
    ]
  },
  {
    title: "Sensory Perception",
    logos: [
      { name: "Google Vertex AI", bgColor: "bg-blue-50", description: "Studio for vision, speech, touch, and other modalities" }
    ]
  }
];

export default function AIInfrastructure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Our AI Infrastructure Ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While delivering our solution, we use the most powerful artificial intelligence infrastructures in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {infrastructureCategories.map((category, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-fulcrum-red"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold fulcrum-text mb-6 text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className={`${logo.bgColor} rounded-lg p-3 text-center`}>
                      <span className="text-sm font-medium text-gray-700">{logo.name}</span>
                      {logo.description && (
                        <p className="text-xs text-gray-500 mt-1">{logo.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
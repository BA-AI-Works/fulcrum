import { TrendingUp, Users, FileText, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  {
    title: "AI Process Maturity Assessment",
    description: "Assesses the existing level of AI automation of business processes and identifies the gap between existing state and what is possible.",
    icon: TrendingUp,
    bgColor: "bg-fulcrum-red",
    link: null
  },
  {
    title: "AI Readiness Assessment",
    description: "Assesses functions and individuals to identify which functions are more ready in terms of capability and culture to use AI.",
    icon: Users,
    bgColor: "bg-fulcrum-red",
    link: null
  },
  {
    title: "POwerBA",
    description: "Crafting product requirements documents faster and better, from business needs to test scenarios.",
    icon: FileText,
    bgColor: "bg-fulcrum-red",
    link: "https://powerba.ai/"
  },
  {
    title: "AI Competency-based Assessment",
    description: "Evaluates employee competencies for AI roles and generates capability development reports tailored by role.",
    icon: Brain,
    bgColor: "bg-fulcrum-red",
    link: null
  }
];

export default function Tools() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Our Assessment Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation tools to guide your AI transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const handleClick = () => {
              if (tool.link) {
                window.open(tool.link, '_blank');
              }
            };
            
            return (
              <Card 
                key={index}
                className={`hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-fulcrum-red ${tool.link ? 'cursor-pointer' : ''}`}
                onClick={handleClick}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${tool.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold fulcrum-text mb-4">{tool.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

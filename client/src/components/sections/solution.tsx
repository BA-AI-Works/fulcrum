import { Lightbulb, Settings, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">End-to-End Transformation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fulcrum provides comprehensive solutions that transform your business from strategic vision to successful execution, 
            delivering measurable results across every phase of your transformation journey.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
          <Card className="flex-1 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-fulcrum-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold fulcrum-text mb-4">Strategy Consulting</h3>
              <p className="text-gray-600">Strategic vision and roadmap development for AI transformation initiatives</p>
            </CardContent>
          </Card>

          <div className="hidden md:block fulcrum-red text-3xl">
            <ArrowRight className="w-8 h-8" />
          </div>

          <Card className="flex-1 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-fulcrum-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold fulcrum-text mb-4">Operation & Process Consulting</h3>
              <p className="text-gray-600">Operational excellence and process optimization for AI integration</p>
            </CardContent>
          </Card>

          <div className="hidden md:block fulcrum-red text-3xl">
            <ArrowRight className="w-8 h-8" />
          </div>

          <Card className="flex-1 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-fulcrum-red-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold fulcrum-text mb-4">Process Automation with AI Agents</h3>
              <p className="text-gray-600">AI-powered tools and agents for recruitment, claim management, chatbots, and more</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

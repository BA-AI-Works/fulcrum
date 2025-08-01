import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function ModularProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Customizing Your AI Journey</h2>
        </div>

        {/* Module 1 Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold fulcrum-text mb-4">
                Will my organization be able to timely adapt to the major change?
              </h3>
              <h4 className="text-xl font-semibold fulcrum-red mb-6">Iterative Approach</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                First implement easier processes (e.g. batch processes). Have your organization gain confidence 
                in the new way of working. Then scale up including more complex processes (e.g. real-time processes).
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Team collaborating on AI implementation" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Module 2 Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Human-AI collaboration dashboard interface" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold fulcrum-text mb-4">
                Will I lose control over business processes?
              </h3>
              <h4 className="text-xl font-semibold fulcrum-red mb-6">Human-in-the-loop</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                You will always be at the helm and have the liberty to set the AI autonomy level.
              </p>
            </div>
          </div>
        </div>

        {/* Data Privacy Module */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="bg-gray-900 rounded-3xl p-16 text-center relative overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Will I share my data with<br />
                <span className="text-gray-400">3rd parties?</span>
              </h3>
              <div className="mt-8">
                <span className="inline-flex items-center gap-3 text-white text-lg">
                  <Lock className="w-6 h-6" />
                  <strong>Secure Data Privacy</strong>
                </span>
                <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                  Your data stays completely private and secure. We never share your information with third parties - everything remains under your control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

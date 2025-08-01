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
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Will my organization be able to timely adapt to the major change?
              </h3>
              <h4 className="text-xl font-semibold text-fulcrum-red mb-6">Iterative Approach</h4>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                First implement easier processes (e.g. batch processes). Have your organization gain confidence 
                in the new way of working. Then scale up including more complex processes (e.g. real-time processes).
              </p>
            </div>
          </div>
        </div>

        {/* Module 2 Container */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Will I lose control over business processes?
              </h3>
              <h4 className="text-xl font-semibold text-fulcrum-red mb-6">Human-in-the-loop</h4>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
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
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Will I share my data with 3rd parties?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="inline-flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <strong>Secure Data Privacy</strong>
                </span> — You keep your data locally and never share with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

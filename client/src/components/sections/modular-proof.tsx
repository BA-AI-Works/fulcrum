import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function ModularProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Customizing Your AI Journey</h2>
        </div>

        {/* Two Module Container */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="border border-gray-200 rounded-2xl p-4 bg-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Module 1 - Dark Theme */}
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Dot pattern background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Will my organization be able to timely adapt to the major change?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    First implement easier processes (e.g. batch processes). Have your organization gain confidence 
                    in the new way of working. Then scale up including more complex processes (e.g. real-time processes).
                  </p>
                </div>
              </div>

              {/* Module 2 - Dark Theme */}
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Dot pattern background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Will I lose control over business processes?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You will always be at the helm and have the liberty to set the AI autonomy level.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Data Privacy Module */}
        <div className="max-w-4xl mx-auto -mt-4">
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Will I share my data with 3rd parties?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <span className="inline-flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <strong>Secure Data Privacy</strong>
              </span> — You keep your data locally and never share with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

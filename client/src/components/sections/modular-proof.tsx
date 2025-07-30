import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function ModularProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">Customizing Your AI Journey</h2>
        </div>

        {/* Module Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm mb-16">
          {/* Module 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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

          {/* Module 2 */}
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
          <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-fulcrum-red">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold fulcrum-text mb-4">Will I share my data with 3rd parties?</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="inline-flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <strong>Data Privacy</strong>
                </span> — You can keep your data locally and do not share
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

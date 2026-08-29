import React from 'react';
import { Users, TrendingUp } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green rounded-full blur-3xl opacity-10 -ml-20 -mb-20"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Leadership & Activities</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-green/20 text-brand-green rounded-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold">Key Roles</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                  <span className="text-brand-softblue">Director of Internal Affairs, SPE Student Chapter</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                  <span className="text-brand-softblue">Treasurer, Sudanese Students Association</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                  <span className="text-brand-softblue">Deputy Logistics Director, SPE Student Chapter</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:block w-px bg-white/10"></div>

            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-blue/30 text-brand-softblue rounded-lg">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold">Achievements & Impact</h3>
              </div>
              <p className="text-lg text-brand-softblue/90 leading-relaxed">
                Organized <span className="text-white font-bold">20+ professional development events</span>, established <span className="text-white font-bold">3 industry partnerships</span>, managed budgets, coordinated logistics, and supported cross-team collaboration to drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

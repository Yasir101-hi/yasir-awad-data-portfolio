import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-brand-lightgray">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Education</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-softblue flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
          <div className="p-4 bg-brand-softblue/30 rounded-full text-brand-blue shrink-0">
            <GraduationCap size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">Bachelor of Engineering (Honours) – Petroleum Engineering</h3>
            <p className="text-lg text-brand-blue font-medium mt-1">UCSI University, Malaysia <span className="text-brand-gray font-normal mx-2">|</span> <span className="text-brand-gray">2016 – 2021</span></p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green font-semibold rounded-lg">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              Dean’s Honour List for Academic Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { Target, BarChart2, Briefcase, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">About Me</h2>
            <div className="w-20 h-1 bg-brand-green mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed text-justify">
              <p>
                I am a Data Analyst with a background in Petroleum Engineering and practical experience in analyzing business, production, and operational data. I use Python, SQL, Power BI, and Excel to transform raw data into clear dashboards, meaningful insights, and practical business decisions.
              </p>
              <p>
                My work focuses on Business Intelligence, KPI reporting, data visualization, and performance analysis. I am especially interested in applying data analytics across business and energy domains, with the flexibility to work on healthcare, operations, sales, and education-related datasets.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-brand-lightgray p-8 rounded-2xl border border-brand-softblue shadow-sm">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">What I Do</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-brand-green/10 text-brand-green rounded-lg shrink-0 mt-1">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Dashboards & Reports</h4>
                    <p className="text-brand-gray">Build interactive dashboards and reports.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-brand-navy/10 text-brand-navy rounded-lg shrink-0 mt-1">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Data Analysis</h4>
                    <p className="text-brand-gray">Analyze business, operational, and production data.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-lg shrink-0 mt-1">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Performance Tracking</h4>
                    <p className="text-brand-gray">Track KPIs and performance trends.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-brand-softblue text-brand-blue rounded-lg shrink-0 mt-1">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Actionable Insights</h4>
                    <p className="text-brand-gray">Turn complex data into clear insights.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

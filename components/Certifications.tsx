import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const certs = [
  {
    title: "Data Analysis Diploma",
    details: "MEC Academy",
    image: "/assets/certificates/mec-data-analysis-diploma.webp"
  },
  {
    title: "Introduction to Power BI",
    details: "DataCamp",
    image: "/assets/certificates/datacamp-introduction-to-power-bi.webp"
  },
  {
    title: "SQL for Data Analysis",
    details: "LinkedIn",
    image: "/assets/certificates/linkedin-sql-for-data-analysis.webp"
  },
  {
    title: "Business Analysis Basics",
    details: "Great Learning",
    image: "/assets/certificates/great-learning-business-analysis-basics.webp"
  },
  {
    title: "Data Analytics Job Simulation",
    details: "Deloitte / Forage, Oct 2025",
    image: "/assets/certificates/deloitte-data-analytics-job-simulation.webp"
  },
  {
    title: "Excel Basics for Data Analysis",
    details: "IBM / Coursera, Feb 2025",
    image: "/assets/certificates/ibm-excel-basics-for-data-analysis.webp"
  },
  {
    title: "Oil & Gas Industry Operations and Markets",
    details: "Duke University / Coursera, Jan 2025",
    image: "/assets/certificates/duke-oil-gas-industry-operations-markets.webp"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, index) => {
            return (
              <div key={index} className="bg-brand-lightgray p-6 rounded-xl border border-brand-softblue hover:border-brand-blue/30 transition-colors flex flex-col gap-4">
                <div className="bg-[#f5f2ea] p-4 rounded-lg w-full flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full aspect-[16/11] object-contain object-center"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full aspect-[16/11] flex flex-col items-center justify-center text-brand-slate text-sm border-2 border-dashed border-brand-softblue rounded">
                    <Award size={32} className="text-brand-softblue mb-2" />
                    <span>Certificate image unavailable</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-brand-green">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy leading-tight">{cert.title}</h4>
                    {cert.details && <p className="text-sm text-brand-slate mt-1">{cert.details}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';

const experiences = [
  {
    title: "Freelance Data Analyst",
    company: "Self-Employed",
    location: "Remote",
    period: "Apr 2025 – Present",
    points: [
      "Delivered Power BI dashboards and data analysis solutions for retail and business clients across Saudi Arabia and Egypt.",
      "Built KPI dashboards to track sales performance, operational performance, and business trends.",
      "Analyzed datasets using Python to identify trends, patterns, and decision-support insights.",
      "Automated reporting workflows to improve efficiency and reduce manual reporting work.",
      "Worked with stakeholders to translate business needs into clear data solutions and actionable dashboards."
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Elevvo Pathways",
    location: "Remote",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Built Power BI dashboards to monitor KPIs, revenue trends, and sales performance.",
      "Applied RFM segmentation to identify high-value customers and support customer analysis.",
      "Conducted exploratory data analysis using Python and SQL to extract business insights.",
      "Delivered clear analytical summaries to support performance tracking and decision-making."
    ]
  },
  {
    title: "Telesales Representative",
    company: "Altibbi",
    location: "Cairo, Egypt",
    period: "Dec 2023 – Aug 2024",
    points: [
      "Handled high-volume customer interactions, service inquiries, and activation requests.",
      "Identified recurring customer objections, behavior patterns, and service-related issues.",
      "Contributed to improving conversion approaches through better understanding of customer needs.",
      "Maintained strong client communication, follow-up, and issue resolution.",
      "Gained practical exposure to customer behavior, conversion patterns, and service performance."
    ]
  },
  {
    title: "Reservoir & Core Analysis Intern",
    company: "Orogenic Resources",
    location: "Hulu Langat, Selangor, Malaysia",
    period: "Sep 2018 – Dec 2018",
    points: [
      "Assisted in laboratory analysis of core and fluid samples for reservoir evaluation.",
      "Supported data collection and interpretation of geological and reservoir-related data.",
      "Contributed to sample preparation, testing workflows, and technical documentation.",
      "Gained exposure to data-driven reservoir evaluation and oil & gas analysis workflows."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-brand-lightgray/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-[3px] border-brand-softblue/50 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-14 relative pl-8 md:pl-14">
              {/* Timeline dot */}
              <div className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-brand-green border-[3px] border-white shadow-[0_0_0_3px_rgba(240,249,255,1)]"></div>
              
              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-softblue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand-softblue/60 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 md:gap-0">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy">{exp.title}</h3>
                    <p className="text-brand-blue font-medium mt-1.5 text-base md:text-lg">
                      {exp.company} <span className="text-brand-gray/80 font-normal px-1">|</span> <span className="text-brand-gray font-normal text-sm md:text-base">{exp.location}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center self-start bg-brand-lightgray/80 px-4 py-1.5 rounded-full border border-brand-softblue/40 shadow-sm shrink-0 mt-1 md:mt-0">
                    <span className="text-sm font-semibold text-brand-navy">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="list-disc list-outside ml-6 text-brand-gray space-y-3 text-justify text-[15px] md:text-base">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed pl-1">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

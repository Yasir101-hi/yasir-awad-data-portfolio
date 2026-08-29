import React from 'react';
import { PieChart, LineChart, Database, FileSpreadsheet, Code2, Activity, Droplet, Stethoscope } from 'lucide-react';

const services = [
  {
    title: 'Power BI Dashboard Development',
    description: 'Design and build interactive Power BI dashboards for KPIs, sales, operations, and business performance tracking.',
    icon: <PieChart className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Business Data Analysis',
    description: 'Analyze business datasets to identify trends, patterns, performance issues, and decision-making opportunities.',
    icon: <LineChart className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'SQL Reporting & Database Analysis',
    description: 'Write SQL queries, analyze databases, prepare reports, and extract useful insights from structured data.',
    icon: <Database className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Excel Reporting & Automation',
    description: 'Create Excel reports, dashboards, pivot tables, and automated reporting workflows to reduce manual work.',
    icon: <FileSpreadsheet className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Python Data Analysis',
    description: 'Use Python for data cleaning, exploratory analysis, visualization, and insight generation.',
    icon: <Code2 className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'KPI Tracking & Performance Reporting',
    description: 'Build KPI dashboards and reporting systems that help teams monitor performance clearly.',
    icon: <Activity className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Energy / Oil & Gas Data Analytics',
    description: 'Analyze production, reservoir, and operational energy data using data analytics tools and visualization.',
    icon: <Droplet className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Healthcare, Operations & Sales Analytics',
    description: 'Apply data analysis techniques to healthcare, operations, sales, and service-related datasets.',
    icon: <Stethoscope className="w-8 h-8 text-brand-green" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Services</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-brand-lightgray border border-brand-softblue hover:border-brand-blue/50 transition-all hover:-translate-y-1 hover:shadow-lg duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white border border-brand-softblue inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3 leading-snug">{service.title}</h4>
              <p className="text-brand-gray leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

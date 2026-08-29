import React from 'react';

const skillCategories = [
  {
    title: "Data Analysis & Programming",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Exploratory Data Analysis"]
  },
  {
    title: "SQL & Databases",
    skills: ["SQL Joins", "Window Functions", "CTEs", "Query Optimization", "Database Analysis"]
  },
  {
    title: "BI & Visualization",
    skills: ["Power BI", "DAX", "Power Query", "Dashboards", "KPI Tracking", "Data Visualization", "Data Storytelling"]
  },
  {
    title: "Tools",
    skills: ["Excel", "Pivot Tables", "Advanced Formulas", "Google Colab", "VS Code", "tNavigator"]
  },
  {
    title: "Analytics Domains",
    skills: ["Business Analytics", "Energy Analytics", "Oil & Gas Data Analysis", "Healthcare Analytics", "Operations Analytics", "Sales Analytics", "Education / Data Research"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-brand-lightgray" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-softblue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-brand-navy mb-6 pb-2 border-b-2 border-brand-softblue/50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-brand-lightgray border border-brand-softblue text-brand-gray text-sm font-medium rounded-md hover:bg-brand-softblue/30 hover:text-brand-blue transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

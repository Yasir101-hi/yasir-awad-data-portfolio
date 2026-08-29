import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "Retail Business Intelligence Dashboard – Saudi Arabia",
    subtitle: "Freelance Power BI Project",
    description: "Developed an interactive Power BI dashboard for a Saudi retail business to analyze sales performance, customer behavior, inventory risks, and branch-level operations. The dashboard provides executive KPI reporting and actionable insights to support data-driven decision-making.",
    domain: "BUSINESS INTELLIGENCE / RETAIL ANALYTICS",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel/CSV", "KPI Design", "Data Visualization"],
    highlights: [
      "Executive KPI overview",
      "Sales performance analysis",
      "Customer behavior segmentation",
      "Inventory and operations monitoring",
      "Branch-level performance insights",
      "Business recommendations for inventory and customer retention"
    ],
    github: "https://github.com/Yasir101-hi/retail-business-intelligence-dashboard",
    linkText: "View on GitHub"
  },
  {
    title: "Oil Well #807 Production & EOR Analysis",
    subtitle: "Python Data Analysis Project",
    description: "This project analyzes the production performance of Oil Well #807 using historical operational data. The analysis focuses on long-term oil production decline, increasing water cut, reservoir pressure reduction, gas-oil ratio behavior, and late-life well performance. The project applies Python-based data analysis and visualization to support technical interpretation and reservoir performance decision-making.",
    domain: "ENERGY / OIL & GAS ANALYTICS",
    tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "CSV", "Data Visualization", "Decline Curve Analysis"],
    highlights: [
      "Oil production trend analysis",
      "Water cut behavior evaluation",
      "Reservoir pressure decline analysis",
      "Gas-oil ratio review",
      "Decline curve interpretation",
      "EOR potential assessment",
      "Mature well performance summary"
    ],
    github: "https://github.com/Yasir101-hi/oil-well-807-analysis",
    linkText: "View on GitHub"
  },
  {
    title: "Global Data Science Survey Analysis 2017–2021",
    subtitle: "Python Exploratory Data Analysis Project",
    description: "This project analyzes multi-year Kaggle Data Science Survey data to identify patterns across the global data science community. The analysis focuses on age distribution, top participating countries, common job titles, gender representation, and the relationship between demographics and professional roles. The project applies Python-based data cleaning, exploratory data analysis, and visualization to transform survey data into clear workforce insights.",
    domain: "DATA SCIENCE / PYTHON ANALYTICS",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Data Cleaning", "EDA", "Data Visualization"],
    highlights: [
      "Multi-year survey data analysis",
      "Age group distribution analysis",
      "Top countries by respondent count",
      "Job title distribution analysis",
      "Gender representation analysis",
      "Age group analysis by job title",
      "Gender distribution by job role",
      "Visual insight generation using Python"
    ],
    github: "https://github.com/Yasir101-hi/global-data-science-survey-analysis",
    linkText: "View on GitHub"
  },
  {
    title: "University Database Analysis | SQL, Python & Power BI",
    subtitle: "End-to-End Academic Analytics Project",
    description: "Analyzed a normalized university database using SQL Server, Python, and Power BI to evaluate student success, course capacity, teaching quality, prerequisite compliance, and academic performance. This project presents an end-to-end analysis covering students, departments, majors, courses, enrollments, classrooms, assessments, and teaching evaluations.",
    domain: "EDUCATION ANALYTICS / DATABASE ANALYSIS",
    tools: ["SQL Server", "Python", "Pandas", "Matplotlib", "Power BI", "DAX", "Excel/CSV", "Data Modeling", "Data Validation"],
    highlights: [
      "SQL Server database analysis",
      "Student success and GPA analysis",
      "Course capacity and utilization monitoring",
      "Teaching evaluation analysis",
      "Prerequisite compliance checks",
      "Scheduling and data quality validation",
      "Interactive Power BI dashboards",
      "Academic performance recommendations"
    ],
    github: "https://github.com/Yasir101-hi/university-database-analysis-sql-python-powerbi",
    linkText: "View on GitHub"
  },
  {
    title: "Development of PVT Correlation for Sudanese Oil Fields",
    subtitle: "Using Alternating Conditional Expectation (ACE) Algorithm",
    description: "Developed predictive PVT correlation models for Sudanese oil fields using the Alternating Conditional Expectation (ACE) algorithm. The project analyzed 139 reservoir fluid data points to estimate Bubble Point Pressure (Pb) and Oil Formation Volume Factor (Bo), with model validation using AARE, MSE, and R² metrics.",
    domain: "FINAL YEAR RESEARCH PROJECT / PETROLEUM DATA ANALYTICS",
    tools: ["GRACE Software", "Excel", "ACE Algorithm", "Statistical Modeling", "Petroleum Engineering", "Data Analysis"],
    highlights: ["139 PVT data points", "Pb & Bo prediction", "Model validation", "R² up to 0.97"],
    link: "https://drive.google.com/file/d/1DW0T6u_XRctOFmRUVWzwSZJKXiPGpEkx/view?usp=drive_link",
    linkText: "View Research Paper"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-brand-lightgray" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-brand-softblue hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col group h-full">
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-5 inline-flex">
                  <span className="px-3 py-1.5 bg-brand-softblue/50 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-md">
                    {project.domain}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold text-brand-navy ${project.subtitle ? 'mb-1' : 'mb-4'} group-hover:text-brand-blue transition-colors`}>
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 className="text-[15px] font-semibold text-brand-gray/80 mb-4 leading-snug">
                    {project.subtitle}
                  </h4>
                )}
                
                <p className="text-brand-gray leading-relaxed mb-6 flex-grow text-justify">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="mb-6 flex-grow">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-brand-gray">
                          <span className="text-brand-green mt-1">•</span> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-brand-lightgray text-brand-navy rounded-md border border-brand-softblue">
                      <Code size={14} className="text-brand-green" /> {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.github || project.link ? (
                <div className="px-8 py-5 bg-brand-lightgray/50 border-t border-brand-softblue flex justify-end mt-auto">
                  <a 
                    href={project.github || project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                  >
                    {project.github && <Github size={18} />}
                    {project.linkText || "View on GitHub"} <ExternalLink size={14} />
                  </a>
                </div>
              ) : (
                <div className="px-8 py-5 border-t border-transparent mt-auto opacity-0 pointer-events-none">
                  {/* Invisible placeholder to maintain equal card heights for cards without github links */}
                  <div className="h-5"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <a 
            href="https://github.com/Yasir101-hi" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors shadow-sm"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

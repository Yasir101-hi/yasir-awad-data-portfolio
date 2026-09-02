import React from "react";
import portfolioData from "./portfolio-projects.json";

type Project = typeof portfolioData.projects[number];

const experienceGroups = [
  {
    title: "Data & Analytics Experience",
    items: [
      {
        date: "April 2025 — Present",
        role: "Freelance Data Analyst",
        company: "Self-employed · Remote",
        copy: "Developing Power BI dashboards, KPI reports, and analytical solutions for business and operational use cases.",
        highlights: [
          "Built data models, DAX measures, and Power Query workflows",
          "Developed reporting for sales, operations, and customer performance",
          "Used SQL, Python, and Excel to produce decision-focused insights"
        ]
      },
      {
        date: "August 2025 — September 2025",
        role: "Data Analyst Intern",
        company: "Elevvo Pathways · Remote",
        copy: "Completed practical analysis assignments focused on sales performance, customer segmentation, and reporting.",
        highlights: [
          "Built Power BI dashboards tracking eight business KPIs",
          "Applied RFM analysis to identify four customer segments",
          "Cleaned datasets with Python and SQL and presented five recommendations"
        ]
      },
      {
        date: "May 2025 — October 2025",
        role: "Data Analysis Trainee",
        company: "MEC Academy · Giza, Egypt",
        copy: "Completed a six-month Data Analysis Diploma covering SQL, Excel, Python, statistics, databases, data warehousing, and Power BI.",
        highlights: [
          "Completed more than 25 practical analytics projects",
          "Developed Power BI dashboards and SQL database projects",
          "Converted raw datasets into structured reports and visual analysis"
        ]
      }
    ]
  },
  {
    title: "Additional Experience",
    items: [
      {
        date: "December 2023 — August 2024",
        role: "Telesales Representative",
        company: "Altibbi · Cairo, Egypt",
        copy: "Worked with customer interactions, follow-ups, objections, and service-performance processes.",
        highlights: [
          "Managed daily customer interactions and follow-ups",
          "Documented recurring customer objections and feedback",
          "Developed practical understanding of customer behavior and conversion"
        ]
      },
      {
        date: "September 2018 — December 2018",
        role: "Reservoir & Core Analysis Intern",
        company: "Orogenic Resources · Malaysia",
        copy: "Supported reservoir evaluation and structured laboratory data-collection activities.",
        highlights: [
          "Reviewed core and fluid samples and technical reports",
          "Supported reservoir-characterization workflows",
          "Strengthened technical-data interpretation skills"
        ]
      }
    ]
  }
];

const skillGroups = [
  {
    title: "Data Analysis",
    icon: "analysis",
    description: "Explore, clean, and analyze data to uncover insights and validate business questions.",
    items: ["Python", "Pandas", "Data Cleaning", "EDA"]
  },
  {
    title: "SQL & Databases",
    icon: "database",
    description: "Query relational data and build clear, reliable datasets for analysis.",
    items: ["SQL", "Joins", "Aggregations", "CTEs", "Window Functions"]
  },
  {
    title: "Business Intelligence",
    icon: "bi",
    description: "Build semantic models and dashboards that turn data into actionable insights.",
    items: ["Power BI", "DAX", "Power Query", "Data Modeling", "KPI Design"]
  },
  {
    title: "Reporting & Excel",
    icon: "reporting",
    description: "Create clear reports and visual summaries that support business decisions.",
    items: ["Excel", "Pivot Tables", "XLOOKUP", "Data Visualization", "Dashboard Reporting"]
  }
];

const platforms = [
  { name: "Power BI", icon: "/assets/tools/power-bi.svg", short: "PBI" },
  { name: "Microsoft Excel", icon: "/assets/tools/microsoft-excel.svg", short: "XL" },
  { name: "SQL Server", icon: "/assets/tools/sql-server.svg", short: "SQL" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", short: "Py" },
  { name: "Jupyter Notebook", icon: "https://cdn.simpleicons.org/jupyter/F37626", short: "JN" },
  { name: "VS Code", icon: "/assets/tools/vs-code.svg", short: "VS" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", short: "GH" },
  { name: "Kaggle", icon: "https://cdn.simpleicons.org/kaggle/20BEFF", short: "K" }
];

const certificatesData = [
  {
    title: "Data Analysis Diploma",
    provider: "MEC Academy",
    year: "2025",
    image: "/assets/certificates/mec-data-analysis-diploma.webp",
    alt: "Data Analysis Diploma certificate awarded to Yasir Awad by MEC Academy"
  },
  {
    title: "Introduction to Power BI",
    provider: "DataCamp",
    year: "2026",
    image: "/assets/certificates/datacamp-introduction-to-power-bi.webp",
    alt: "Introduction to Power BI certificate awarded to Yasir Awad by DataCamp"
  },
  {
    title: "SQL for Data Analysis",
    provider: "LinkedIn Learning",
    year: "2025",
    image: "/assets/certificates/linkedin-sql-for-data-analysis.webp",
    alt: "SQL for Data Analysis certificate awarded to Yasir Awad by LinkedIn Learning"
  },
  {
    title: "Business Analysis Basics",
    provider: "Great Learning",
    year: "2026",
    image: "/assets/certificates/great-learning-business-analysis-basics.webp",
    alt: "Business Analysis Basics certificate awarded to Yasir Awad by Great Learning"
  },
  {
    title: "Data Analytics Job Simulation",
    provider: "Deloitte / Forage",
    year: "2025",
    image: "/assets/certificates/deloitte-data-analytics-job-simulation.webp",
    alt: "Data Analytics Job Simulation certificate awarded to Yasir Awad by Deloitte and Forage"
  },
  {
    title: "Excel Basics for Data Analysis",
    provider: "IBM / Coursera",
    year: "2025",
    image: "/assets/certificates/ibm-excel-basics-for-data-analysis.webp",
    alt: "Excel Basics for Data Analysis certificate awarded to Yasir Awad by IBM and Coursera"
  },
  {
    title: "Oil & Gas Industry Operations and Markets",
    provider: "Duke University / Coursera",
    year: "2025",
    image: "/assets/certificates/duke-oil-gas-industry-operations-markets.webp",
    alt: "Oil and Gas Industry Operations and Markets certificate awarded to Yasir Awad by Duke University and Coursera"
  }
];

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return <span aria-hidden="true">{direction === "right" ? "↗" : "↓"}</span>;
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'inline-block' }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function CertificateModal({ certificate, onClose }: { certificate: any; onClose: () => void }) {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = modalRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="certificate-modal"
      onCancel={handleClose}
      onClick={(e) => {
        if (e.target === modalRef.current) handleClose();
      }}
    >
      <div className="cert-modal-content">
        <button
          className="cert-modal-close"
          onClick={handleClose}
          aria-label="Close certificate"
        >
          ✕
        </button>
        <div className="cert-modal-body">
          <div className="cert-modal-image-container" style={{ padding: '24px', background: 'var(--cream)', width: '100%', aspectRatio: '16/11' }}>
            <img 
              src={certificate.image} 
              alt={certificate.alt} 
              loading="lazy" 
              width="1600" 
              height="1100" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="certificate-fallback" style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--slate)', border: '2px dashed var(--line)', borderRadius: '8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>Image not available</span>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function CertificateCard({ certificate, onClick }: { certificate: any; onClick: () => void }) {
  return (
    <button className="certificate-card" onClick={onClick} aria-label={`View ${certificate.title} certificate`}>
      <div className="certificate-preview" style={{ padding: '16px', background: 'var(--cream)', width: '100%', aspectRatio: '16/11' }}>
        <img 
          src={certificate.image} 
          alt={certificate.alt} 
          loading="lazy" 
          width="1600" 
          height="1100" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        <div className="certificate-fallback" style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--slate)', border: '2px dashed var(--line)', borderRadius: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Image not available</span>
        </div>
      </div>
      <div className="certificate-info">
        <time>{certificate.year}</time>
        <h3>{certificate.title}</h3>
        <p>{certificate.provider}</p>
        <span className="view-btn">View Certificate <ExternalLinkIcon /></span>
      </div>
    </button>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = modalRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="case-study-modal"
      onCancel={handleClose}
      onClick={(e) => {
        if (e.target === modalRef.current) handleClose();
      }}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close case study"
        >
          ✕
        </button>
        <div className="modal-header">
          <p className="project-eyebrow">{project.category}</p>
          <h2>{project.title}</h2>
          <div className="tags modal-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        
        {project.caseStudy && (
          <div className="modal-body">
            <section>
              <h3>Business Problem</h3>
              <p>{project.caseStudy.businessProblem}</p>
            </section>
            <section>
              <h3>Dataset</h3>
              <p>{project.caseStudy.dataset}</p>
            </section>
            <section>
              <h3>Analytical Approach</h3>
              <ul>
                {project.caseStudy.analyticalApproach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Key Findings</h3>
              <ul>
                {project.caseStudy.keyFindings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Business Implications</h3>
              <p>{project.caseStudy.businessImplications}</p>
            </section>
            <section>
              <h3>Limitations</h3>
              <p>{project.caseStudy.limitations}</p>
            </section>
          </div>
        )}
        
        <div className="modal-footer">
          <a
            className="button primary"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub <Arrow />
          </a>
        </div>
      </div>
    </dialog>
  );
}

function ProjectImageModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = modalRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="certificate-modal"
      onCancel={handleClose}
      onClick={(e) => {
        if (e.target === modalRef.current) handleClose();
      }}
    >
      <div className="cert-modal-content project-image-modal-content">
        <button
          className="cert-modal-close"
          onClick={handleClose}
          aria-label="Close image preview"
        >
          ✕
        </button>
        <div className="cert-modal-body">
          <div className="cert-modal-image-container">
            <img src={project.imageUrl} alt={`${project.title} dashboard`} loading="lazy" />
          </div>
        </div>
      </div>
    </dialog>
  );
}

function ProjectVisual({ project, onClick }: { project: Project; onClick: () => void }) {
  if (project.imageUrl) {
    return (
      <button
        className={`project-visual dashboard-preview`}
        onClick={onClick}
        aria-label={`Open large image preview of ${project.title}`}
      >
        <img
          src={project.imageUrl}
          alt={`${project.title} dashboard showing ${project.category} insights by Yasir Awad`}
          loading="lazy"
        />
        <span className="dashboard-preview-label">View Image Preview <Arrow /></span>
      </button>
    );
  }
  return null;
}

const contactLinks = [
  {
    name: "Email",
    href: "mailto:yasir.petro.analytics@outlook.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Yasir%20Awad",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#159b74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3.5 7 7.3 5.1a2 2 0 0 0 2.4 0L20.5 7" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yasirawad",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "https://github.com/Yasir101-hi",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#0b2031" aria-hidden="true">
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .3Z" />
      </svg>
    )
  },
  {
    name: "Cairo, Egypt",
    href: "https://www.google.com/maps/search/?api=1&query=Cairo%2C%20Egypt",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#159b74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.7" />
      </svg>
    )
  }
];

function SkillIcon({ type }: { type: string }) {
  if (type === "analysis") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 36V10h25v18"/><path d="m12 29 6-7 5 4 7-10"/><circle cx="34" cy="34" r="8"/><path d="m40 40 5 5"/></svg>;
  if (type === "database") return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="22" cy="11" rx="14" ry="6"/><path d="M8 11v19c0 4 6 7 14 7 3 0 6-.4 8-1.2"/><path d="M8 20c0 4 6 7 14 7 3 0 6-.4 8-1.2"/><circle cx="36" cy="33" r="9"/><path d="M32 33h8"/></svg>;
  if (type === "bi") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="7" width="38" height="28" rx="2"/><path d="M16 29v-8M24 29V13M32 29V18M18 41h12M24 35v6"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 5h20l8 8v30H10z"/><path d="M30 5v9h8M16 23h16M16 30h9"/><circle cx="32" cy="32" r="6"/><path d="M32 26v6h6"/></svg>;
}

function ExperienceItem({ item, index }: { item: typeof experienceGroups[0]["items"][0], index: number }) {
  return (
    <article>
      <span className="timeline-index">0{index + 1}</span>
      <time>{item.date}</time>
      <div>
        <h3>{item.role}</h3>
        <p className="company">{item.company}</p>
        <p className="text-justify">{item.copy}</p>
        {item.highlights && (
          <ul className="timeline-highlights">
            {item.highlights.map((highlight, hIndex) => (
              <li key={hIndex}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function ResumePage() {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = "Yasir Awad | Data Analyst Resume";
    const robots = document.querySelector('meta[name="robots"]');
    robots?.setAttribute("content", "noindex, follow");
    return () => {
      document.title = previousTitle;
      robots?.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <a href="/">← Back to Portfolio</a>
        <button type="button" onClick={() => window.print()}>Print / Save as PDF</button>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Data · Business Intelligence · Operations</p>
            <h1>Yasir Awad</h1>
            <h2>Data Analyst &amp; Business Intelligence</h2>
          </div>
          <address>
            <span>Cairo, Egypt</span>
            <a href="mailto:yasir.petro.analytics@outlook.com">yasir.petro.analytics@outlook.com</a>
            <a href="https://www.linkedin.com/in/yasirawad">linkedin.com/in/yasirawad</a>
            <a href="https://github.com/Yasir101-hi">github.com/Yasir101-hi</a>
          </address>
        </header>

        <section className="resume-section resume-summary">
          <h2>Professional Summary</h2>
          <p>Data Analyst with hands-on experience using Power BI, SQL, Python, and Excel to develop dashboards, reports, and analytical solutions for business and operational use cases. Petroleum Engineering graduate with a strong foundation in technical analysis and data-driven decision-making.</p>
        </section>

        <section className="resume-section">
          <h2>Core Skills</h2>
          <div className="resume-skills">
            <p><strong>Power BI:</strong> DAX, Power Query, Data Modeling, KPI Design</p>
            <p><strong>SQL:</strong> Joins, CTEs, Window Functions, Query Optimization</p>
            <p><strong>Python:</strong> Pandas, NumPy, Data Cleaning, Exploratory Analysis</p>
            <p><strong>Excel:</strong> PivotTables, XLOOKUP, Reporting and Analysis</p>
            <p><strong>Reporting:</strong> Data Visualization, Data Storytelling, Stakeholder Reporting</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {experienceGroups.map((group) => (
            <div className="resume-experience-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <article className="resume-role" key={`${group.title}-${item.role}`}>
                  <div className="resume-role-heading">
                    <div><h4>{item.role}</h4><p>{item.company}</p></div>
                    <time>{item.date}</time>
                  </div>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </article>
              ))}
            </div>
          ))}
        </section>

        <section className="resume-section resume-projects">
          <h2>Selected Projects</h2>
          {portfolioData.projects.map((project) => (
            <article key={project.id}>
              <div><h3>{project.title}</h3><span>{project.tools.join(" · ")}</span></div>
              <p>{project.highlights[0]}</p>
              <a href={project.repositoryUrl}>View on GitHub ↗</a>
            </article>
          ))}
        </section>

        <div className="resume-bottom-grid">
          <section className="resume-section">
            <h2>Education</h2>
            <article className="resume-education">
              <time>2016 — 2021</time>
              <h3>Bachelor of Engineering (Honours)</h3>
              <p>Petroleum Engineering<br />UCSI University, Malaysia</p>
            </article>
          </section>
          <section className="resume-section">
            <h2>Selected Certifications</h2>
            <ul className="resume-certifications">
              <li><strong>Microsoft Power BI Data Analyst (PL-300)</strong><span>Exam preparation in progress · 2026</span></li>
              <li><strong>Data Analysis Diploma</strong><span>MEC Academy · 2025</span></li>
              <li><strong>Data Analytics Job Simulation</strong><span>Deloitte / Forage · 2025</span></li>
              <li><strong>Business Analysis Basics</strong><span>Great Learning · 2025</span></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/resume") {
    return <ResumePage />;
  }

  const [activeCaseStudy, setActiveCaseStudy] = React.useState<Project | null>(null);
  const [activeProjectImage, setActiveProjectImage] = React.useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = React.useState<any | null>(null);
  const [showAllCertificates, setShowAllCertificates] = React.useState(false);

  return (
    <main>
      {activeProjectImage && (
        <ProjectImageModal
          project={activeProjectImage}
          onClose={() => setActiveProjectImage(null)}
        />
      )}
      {activeCaseStudy && (
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
      <header className="site-header">
        <a className="brand coordinate-brand" href="#home" aria-label="Yasir Awad — home">
          <span className="coordinate-signature" aria-hidden="true">
            <span className="coordinate-name coordinate-yasir">Yasir</span>
            <span className="coordinate-name coordinate-awad">Awad</span>
            <span className="coordinate-origin" />
            <small className="coordinate-business">Business</small>
            <small className="coordinate-data">Data</small>
          </span>
          <span className="sr-only">Yasir Awad</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:yasir.petro.analytics@outlook.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Yasir%20Awad&body=Hello%20Yasir%2C%0A%0AI%20viewed%20your%20data%20analytics%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0ABest%20regards%2C">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker"><span /> Data, business &amp; operations</p>
          <h1 aria-label="Data Analyst and Business Intelligence">Data Analyst &amp;<br />{" "}Business Intelligence</h1>
          <p className="hero-intro text-justify">I turn complex business and operational data into clear dashboards, reliable reports, and decision-ready insights using Power BI, SQL, Python, and Excel.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore Projects <Arrow /></a>
            <a className="button secondary" href="/resume" aria-label="View Yasir Awad’s online resume">View Resume <Arrow /></a>
          </div>
          <p className="hero-availability">Based in Cairo · Open to remote, relocation, and visa-sponsored opportunities</p>
          <div className="tool-strip" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual hero-portrait-visual" aria-label="Professional portrait of Yasir Awad">
          <img
            className="hero-portrait-image"
            src="/assets/hero/yasir-hero-navy-v4.webp"
            alt="Yasir Awad, Data Analyst and Business Intelligence professional"
            width="1254"
                height="1254"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-label">01 · Profile</p>
        <div>
          <h2>I connect technical analysis with <em>business context.</em></h2>
          <p className="text-justify">Data Analyst with a background in Petroleum Engineering and hands-on experience using Power BI, SQL, Python, and Excel. I build dashboards, reports, and analytical solutions that help stakeholders understand performance, identify operational issues, and make informed decisions.</p>
        </div>
        <dl>
          <div><dt>Focus</dt><dd>Business intelligence and KPI reporting</dd></div>
          <div><dt>Domains</dt><dd>Business, operations, education, and energy</dd></div>
          <div><dt>Based in</dt><dd>Cairo, Egypt</dd></div>
          <div><dt>Availability</dt><dd>Open to remote, relocation, and visa sponsorship opportunities</dd></div>
        </dl>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <div><p className="section-label">02 · Selected work</p><h2>Analysis with a clear<br />{" "}<em>decision at the end.</em></h2></div>
          <p className="text-justify">Selected projects demonstrating business intelligence, end-to-end data analysis, operational thinking, and evidence-based recommendations.</p>
        </div>
        <div className="project-list">
          {portfolioData.projects.map((project) => (
            <article className="project" key={project.id}>
              <div className="project-copy">
                <span className="project-number">{String(project.order).padStart(2, '0')}</span>
                <p className="project-eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="text-justify">{project.description}</p>
                <p className="project-results-label">Key results</p>
                <ul className="project-results">{project.highlights.map((item) => <li className="text-justify" key={item}>{item}</li>)}</ul>
                <div className="tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setActiveCaseStudy(project)}
                  >
                    View Case Study <Arrow />
                  </button>
                  <a
                    className="text-link project-github-link"
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <Arrow />
                  </a>
                </div>
              </div>
              <ProjectVisual project={project} onClick={() => setActiveProjectImage(project)} />
            </article>
          ))}
        </div>
        <a className="all-work" href="https://github.com/Yasir101-hi" target="_blank" rel="noopener noreferrer">Explore all work on GitHub <Arrow /></a>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading">
          <div><p className="section-label">03 · Experience</p><h2>Experience across data,<br />{" "}<em>business, and operations.</em></h2></div>
          <p className="text-justify">A combination of analytics projects, structured training, business experience, and engineering exposure.</p>
        </div>
        <div className="experience-groups">
          {experienceGroups.map((group) => (
            <div key={group.title} className="experience-group">
              <h3 className="experience-group-title">{group.title}</h3>
              <div className="timeline">
                {group.items.map((item, index) => (
                  <ExperienceItem key={`${item.role}-${index}`} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="skills-heading">
          <p className="section-label light">04 · Skills</p>
          <h2>Technical skills, applied to <em>real business questions.</em></h2>
          <p>A focused toolkit for analysis, modeling, visualization, and decision-ready reporting.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-icon"><SkillIcon type={group.icon} /></div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="platforms">
          <div className="platforms-title"><span />Tools &amp; Platforms<span /></div>
          <ul>
            {platforms.map((tool) => (
              <li key={tool.name}>
                <span className="platform-icon">
                  <img
                    src={tool.icon}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      display: "none",
                      width: "27px",
                      height: "27px",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid currentColor",
                      borderRadius: "4px",
                      color: "var(--emerald-bright)",
                      fontSize: "9px",
                      fontWeight: 800
                    }}
                  >
                    {tool.short}
                  </span>
                </span>
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="credentials section" id="education">
        <div className="education-overview">
          <div className="credentials-intro">
            <p className="section-label">05 · Credentials</p>
            <h2>Petroleum Engineering,<br />{" "}<em>analytical by design.</em></h2>
            <article>
              <time className="education-date">2016 — 2021</time>
              <h3>Bachelor of Engineering (Honours)</h3>
              <p className="education-field">Petroleum Engineering</p>
              <div className="university-identity">
                <img
                  className="university-logo"
                  src="https://cdn.brandfetch.io/idSoVuR0Xz/w/300/h/63/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1778397416464"
                  alt="UCSI University"
                  loading="lazy"
                  width="300"
                  height="63"
                />
              </div>
              <p className="education-location">
                <span aria-hidden="true">⌖</span>
                Kuala Lumpur, Malaysia
              </p>
            </article>
          </div>

          <figure className="university-visual">
            <img
              className="university-campus"
              src="/assets/education/ucsi-campus.webp"
              alt="UCSI University campus in Kuala Lumpur, Malaysia"
              loading="lazy"
              width="900"
              height="700"
            />
          </figure>
        </div>
        
        <article className="certification-progress" aria-labelledby="pl300-title">
          <div className="certification-progress-copy">
            <p className="certification-progress-status"><span aria-hidden="true" /> Certification in progress</p>
            <p className="certification-progress-kicker">Microsoft certification preparation</p>
            <h3 id="pl300-title">Microsoft Power BI Data Analyst <span>(PL-300)</span></h3>
            <p>Currently preparing for the PL-300 exam, with focused practice in data preparation, modeling, DAX, visualization, and Power BI Service.</p>
            <ul aria-label="PL-300 preparation focus areas">
              <li>Data preparation</li>
              <li>Data modeling</li>
              <li>DAX</li>
              <li>Power BI Service</li>
            </ul>
          </div>
          <div className="certification-progress-visual" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <rect x="8" y="35" width="12" height="21" rx="2" />
              <rect x="25" y="22" width="12" height="34" rx="2" />
              <rect x="42" y="8" width="12" height="48" rx="2" />
            </svg>
            <strong>PL-300</strong>
            <span>Exam preparation</span>
            <small>In progress</small>
          </div>
        </article>

        <div className="certificates-gallery" id="certificates-gallery">
          {(showAllCertificates ? certificatesData : certificatesData.slice(0, 3)).map((cert, idx) => (
            <CertificateCard key={cert.title} certificate={cert} onClick={() => setActiveCertificate(cert)} />
          ))}
        </div>
        <div className="certificates-actions">
          <button
            type="button"
            className="certificates-toggle"
            aria-expanded={showAllCertificates}
            aria-controls="certificates-gallery"
            onClick={() => setShowAllCertificates((current) => !current)}
          >
            {showAllCertificates ? "Show fewer certificates" : `View all ${certificatesData.length} certificates`}
            <span aria-hidden="true">{showAllCertificates ? "↑" : "↓"}</span>
          </button>
        </div>
      </section>

      <section className="community section" id="community">
        <div className="community-heading">
          <p className="section-label">06 · Professional Community</p>
          <h2>Connected to the regional<br />{" "}<em>data community.</em></h2>
        </div>
        <article className="membership-card">
          <div className="membership-badge">
            <img
              src="/assets/community/arab-data-hub-badge.webp"
              alt="Arab Data Hub community badge"
              loading="lazy"
              width="320"
              height="360"
            />
          </div>
          <div className="membership-copy">
            <p className="membership-status"><span aria-hidden="true" /> Active Member</p>
            <h3>Arab Data Hub</h3>
            <p className="membership-role">Professional Community Member</p>
            <time>Member since 2026</time>
            <p>Member of an Arab professional community focused on data analytics, knowledge sharing, continuous learning, and professional networking.</p>
          </div>
          <a className="membership-link" href="https://arabdatahub.org/" target="_blank" rel="noopener noreferrer">
            Visit Community <Arrow />
          </a>
        </article>
      </section>

      <section className="contact" id="contact">
        <p className="section-label light">07 · Contact</p>
        <h2>Let&apos;s turn data into clear decisions.</h2>
        <p className="text-justify">I am open to Data Analyst, BI Analyst, Reporting Analyst, and Operations Analyst opportunities with remote, relocation, or visa-sponsorship options.</p>
        <a href="mailto:yasir.petro.analytics@outlook.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Yasir%20Awad&body=Hello%20Yasir%2C%0A%0AI%20viewed%20your%20data%20analytics%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0ABest%20regards%2C" className="button primary contact-button">Email Me <Arrow /></a>
        <div className="contact-links">
          <a href="mailto:yasir.petro.analytics@outlook.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            yasir.petro.analytics@outlook.com
          </a>
          <a href="https://www.linkedin.com/in/yasirawad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/Yasir101-hi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <span aria-label="Location">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Cairo, Egypt
          </span>
        </div>
      </section>

      <footer><span>© 2026 Yasir Awad</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}

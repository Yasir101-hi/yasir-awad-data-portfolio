import React from "react";

export default function Resume() {
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
            <h2>Data Analyst | Power BI | SQL | Python | Business Intelligence</h2>
          </div>
          <address>
            <span>6th of October City, Giza, Egypt</span>
            <span>Open to international relocation and visa-sponsored opportunities</span>
            <span>+20 150 715 1549</span>
            <a href="mailto:yasir.m.ahmed10@gmail.com">yasir.m.ahmed10@gmail.com</a>
            <a href="https://www.linkedin.com/in/yasirawad">linkedin.com/in/yasirawad</a>
            <a href="https://github.com/Yasir101-hi">github.com/Yasir101-hi</a>
          </address>
        </header>

        <section className="resume-section resume-summary">
          <h2>Professional Summary</h2>
          <p className="text-justify">Data Analyst with hands-on experience using Power BI, SQL, Python, and Excel to build dashboards, automate reporting, and turn complex datasets into actionable business insights. Delivered 6 Power BI reports for clients in Egypt and Saudi Arabia and completed 25+ analytics projects across business, operational, and energy use cases.</p>
        </section>

        <section className="resume-section">
          <h2>Core Skills</h2>
          <div className="resume-skills">
            <p><strong>Power BI:</strong> DAX, Power Query, Data Modeling, KPI Reporting, Executive Dashboards</p>
            <p><strong>SQL:</strong> SQL Server, Joins, CTEs, Window Functions, Query Optimization</p>
            <p><strong>Python:</strong> Pandas, NumPy, Matplotlib, Exploratory Data Analysis</p>
            <p><strong>Data &amp; Reporting:</strong> ETL, Data Cleaning, Data Validation, Excel, Pivot Tables, Stakeholder Reporting</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>

          <article className="resume-role">
            <div className="resume-role-heading">
              <div><h4>Freelance Data Analyst</h4><p>Self-Employed · Remote</p></div>
              <time>Apr 2025 – Present</time>
            </div>
            <ul>
              <li>Delivered 6 Power BI reports for clients in Saudi Arabia and Egypt, translating stakeholder requirements into KPI tracking and management reporting solutions.</li>
              <li>Reduced recurring reporting effort by approximately 4 hours per week through Power Query ETL workflows and structured dashboard refresh processes.</li>
              <li>Built data models, DAX measures, and 3 executive dashboards, producing 12 insight-driven outputs and recommendations for decision-makers.</li>
            </ul>
          </article>

          <article className="resume-role">
            <div className="resume-role-heading">
              <div><h4>Data Analyst Intern</h4><p>Elevvo Pathways · Remote</p></div>
              <time>Aug 2025 – Sep 2025</time>
            </div>
            <ul>
              <li>Built interactive Power BI dashboards tracking 8 KPIs and applied RFM analysis to identify 4 customer segments.</li>
              <li>Cleaned and transformed 3 datasets using Python and SQL and presented 5 recommendations based on revenue and customer behavior trends.</li>
            </ul>
          </article>

          <article className="resume-role">
            <div className="resume-role-heading">
              <div><h4>Data Analysis Trainee</h4><p>MEC Academy · Giza, Egypt</p></div>
              <time>May 2025 – Oct 2025</time>
            </div>
            <ul>
              <li>Completed a 6-month Data Analysis Diploma with 25+ hands-on projects covering SQL, Excel, Python, databases, data warehousing, and Power BI.</li>
              <li>Developed 8 Power BI dashboards and 5 SQL database projects and analyzed 15 datasets for reporting and business insights.</li>
            </ul>
          </article>
        </section>

        <section className="resume-section resume-projects">
          <h2>Selected Projects</h2>

          <article>
            <div><h3>Retail Business Intelligence Dashboard — Saudi Arabia</h3><span>Power BI · DAX · Power Query · Data Modeling</span></div>
            <ul>
              <li>Built a four-page executive dashboard integrating sales, customer, inventory, and branch data.</li>
              <li>Identified customer segments, fast-moving products, low-stock risks, and branch performance opportunities.</li>
            </ul>
            <a href="https://github.com/Yasir101-hi/retail-business-intelligence-dashboard">View on GitHub ↗</a>
          </article>

          <article>
            <div><h3>University Database Analysis</h3><span>SQL Server · Python · Pandas · Power BI</span></div>
            <ul>
              <li>Analyzed a normalized database covering 15+ academic entities and developed reporting for student success, course capacity, classroom utilization, and teaching quality.</li>
              <li>Detected prerequisite, missing-value, and capacity issues through SQL and Python validation and translated findings into recommendations.</li>
            </ul>
            <a href="https://github.com/Yasir101-hi/university-database-analysis-sql-python-powerbi">View on GitHub ↗</a>
          </article>

          <article>
            <div><h3>Oil Well #807 Production &amp; EOR Analysis</h3><span>Python · Pandas · Matplotlib · Decline Curve Analysis</span></div>
            <ul>
              <li>Analyzed more than 8 years of production data covering oil decline, water cut, pressure depletion, and gas-oil ratio behavior.</li>
              <li>Identified approximately 90% production decline from peak levels and assessed indicators relevant to mature-well optimization and EOR decisions.</li>
            </ul>
            <a href="https://github.com/Yasir101-hi/oil-well-807-analysis">View on GitHub ↗</a>
          </article>
        </section>

        <section className="resume-section">
          <h2>Additional Experience</h2>
          <article className="resume-role">
            <div className="resume-role-heading">
              <div><h4>Telesales Representative</h4><p>Altibbi · Cairo, Egypt</p></div>
              <time>Dec 2023 – Aug 2024</time>
            </div>
            <p className="text-justify">Managed 35+ daily customer interactions and 20+ follow-ups while documenting recurring objections and customer feedback for weekly reporting.</p>
          </article>

          <article className="resume-role">
            <div className="resume-role-heading">
              <div><h4>Reservoir &amp; Core Analysis Intern</h4><p>Orogenic Resources · Malaysia</p></div>
              <time>Sep 2018 – Dec 2018</time>
            </div>
            <p className="text-justify">Reviewed 20+ core and fluid samples, 6 technical reports, and 30+ observations while supporting reservoir evaluation and technical data interpretation.</p>
          </article>
        </section>

        <div className="resume-bottom-grid">
          <section className="resume-section">
            <h2>Education</h2>
            <article className="resume-education">
              <time>2016 – 2021</time>
              <h3>Bachelor of Engineering (Honours) — Petroleum Engineering</h3>
              <p>UCSI University, Malaysia<br />Dean&apos;s Honour List for Academic Excellence</p>
            </article>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <ul className="resume-certifications">
              <li><strong>Data Analysis Diploma</strong><span>MEC Academy · 2025</span></li>
              <li><strong>Python for Data Science, AI &amp; Development</strong><span>IBM, Coursera · 2025</span></li>
              <li><strong>Data Analytics Job Simulation</strong><span>Deloitte, Forage · 2025</span></li>
              <li><strong>Oil &amp; Gas Operations &amp; Markets</strong><span>Duke University, Coursera · 2025</span></li>
              <li><strong>Graduate Engineer Registration</strong><span>Board of Engineers Malaysia · 2021</span></li>
            </ul>
          </section>
        </div>

        <section className="resume-section">
          <h2>Leadership</h2>
          <article className="resume-role">
            <div className="resume-role-heading"><div><h4>Director of Internal Affairs — SPE Student Chapter</h4></div></div>
            <p className="text-justify">Organized 20+ professional development events and supported 3 industry partnerships.</p>
          </article>
          <article className="resume-role">
            <div className="resume-role-heading"><div><h4>Treasurer — Sudanese Students Association</h4></div></div>
            <p className="text-justify">Managed annual budget activities and improved financial transparency through structured expense tracking and reporting.</p>
          </article>
        </section>

        <section className="resume-section">
          <h2>Languages</h2>
          <p>Arabic — Native | English — Professional</p>
        </section>
      </article>
    </main>
  );
}

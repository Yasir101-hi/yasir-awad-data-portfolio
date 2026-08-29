import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-28 lg:pt-52 lg:pb-40 overflow-x-hidden bg-brand-lightgray">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="lg:w-1/2 xl:w-3/5 z-10 text-center lg:text-left">
            <h2 className="text-brand-navy font-semibold text-2xl md:text-[26px] lg:text-[28px] tracking-tight mb-3 animate-fade-in-up opacity-0 py-1" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Yasir Awad
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy mb-4 leading-[1.2] py-2 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Data Analyst
            </h1>

            <h3 className="text-xl md:text-2xl lg:text-3xl text-brand-blue font-light mb-6 py-1 animate-fade-in-up opacity-0" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
              Business Intelligence <span className="text-brand-gray/50 px-2 font-medium">|</span> <span className="text-brand-green font-medium">Energy & Operations</span>
            </h3>

            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-center lg:text-left animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              I help businesses turn raw data into clear dashboards, actionable insights, and better decisions using Power BI, SQL, Python, and Excel.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              {[
                "Business Analytics", 
                "Energy & Oil & Gas", 
                "Healthcare Analytics", 
                "Operations Analytics", 
                "Sales Analytics", 
                "KPI Reporting"
              ].map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-white border border-brand-softblue/60 text-brand-navy text-[13px] font-medium rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-navy transition-colors shadow-lg shadow-brand-blue/20 flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-colors flex items-center gap-2"
              >
                Contact Me <Mail size={18} />
              </a>
              <a 
                href="#" 
                className="px-8 py-3.5 rounded-full bg-white border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                Download CV <Download size={18} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-2/5 relative animate-fade-in-up opacity-0 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:pr-8" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative w-80 h-96 md:w-96 md:h-[420px] lg:w-[400px] lg:h-[460px]">
              {/* Refined abstract glow behind the portrait */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-gradient-to-tr from-brand-softblue/30 via-brand-green/20 to-brand-navy/10 rounded-full blur-3xl opacity-70"></div>
              
              {/* Clean frameless portrait container with drop shadow */}
              <div className="relative z-10 w-full h-full flex items-end justify-center drop-shadow-2xl overflow-visible">
                <img 
                  src="https://i.postimg.cc/T3C3NfQv/Chat-GPT-Image-Jun-27-2026-01-34-37-AM-removebg-preview.png" 
                  alt="Yasir Awad" 
                  className="w-full h-full object-contain object-bottom scale-[1.10]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

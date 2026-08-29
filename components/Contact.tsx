import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpqgpbll", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Let’s Work Together</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="lg:w-5/12">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Get in Touch</h3>
            <p className="text-brand-gray leading-relaxed mb-8 text-lg">
              If you are looking for support with dashboards, reporting, data analysis, business intelligence, or analytics projects across business, energy, healthcare, operations, or sales, feel free to contact me.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-softblue/30 text-brand-blue rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Email</h4>
                  <a href="mailto:yasir.m.ahmed10@gmail.com" className="text-brand-gray hover:text-brand-blue block mt-1 transition-colors">yasir.m.ahmed10@gmail.com</a>
                  <a href="mailto:yasir.petro.analytics@outlook.com" className="text-brand-gray hover:text-brand-blue block mt-1 transition-colors">yasir.petro.analytics@outlook.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Phone</h4>
                  <a href="tel:+201507151549" className="text-brand-gray hover:text-brand-blue block mt-1 transition-colors">+20 150 715 1549</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-lightgray border border-brand-softblue text-brand-navy rounded-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Location</h4>
                  <p className="text-brand-gray mt-1">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-brand-softblue flex gap-4">
              <a href="https://www.linkedin.com/in/yasirawad" target="_blank" rel="noreferrer" className="p-3 bg-brand-navy text-white rounded-lg hover:bg-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Yasir101-hi" target="_blank" rel="noreferrer" className="p-3 bg-brand-lightgray border border-brand-softblue text-brand-navy rounded-lg hover:border-brand-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-brand-lightgray p-8 rounded-2xl border border-brand-softblue shadow-sm">
              <form action="https://formspree.io/f/mpqgpbll" method="POST" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-semibold text-brand-navy mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" id="full_name" name="full_name" required className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-navy mb-2">Company / Organization</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="preferred_contact_method" className="block text-sm font-semibold text-brand-navy mb-2">Preferred Contact Method</label>
                    <select id="preferred_contact_method" name="preferred_contact_method" className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all">
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project_type" className="block text-sm font-semibold text-brand-navy mb-2">Project Type <span className="text-red-500">*</span></label>
                    <select id="project_type" name="project_type" required className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all">
                      <option value="">Select a project type</option>
                      <option value="Power BI Dashboard">Power BI Dashboard</option>
                      <option value="Business Data Analysis">Business Data Analysis</option>
                      <option value="SQL Reporting">SQL Reporting</option>
                      <option value="Excel Reporting">Excel Reporting</option>
                      <option value="Python Data Analysis">Python Data Analysis</option>
                      <option value="KPI Reporting">KPI Reporting</option>
                      <option value="Energy / Oil & Gas Analytics">Energy / Oil & Gas Analytics</option>
                      <option value="Healthcare Analytics">Healthcare Analytics</option>
                      <option value="Operations Analytics">Operations Analytics</option>
                      <option value="Sales Analytics">Sales Analytics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget_range" className="block text-sm font-semibold text-brand-navy mb-2">Budget Range (optional)</label>
                    <input type="text" id="budget_range" name="budget_range" className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="e.g. $500 - $1000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-softblue bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-navy transition-colors shadow-lg shadow-brand-blue/20">
                  Send Message
                </button>
                
                {status === "success" && (
                  <div className="p-4 bg-brand-green/10 text-brand-green rounded-xl border border-brand-green/20 text-center font-medium">
                    Thank you. Your message has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-center font-medium">
                    Something went wrong. Please try again or contact me directly by email.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

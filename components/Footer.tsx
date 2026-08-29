import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-green">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-white/10 pb-12">
          
          <div className="text-center md:text-left max-w-sm">
            <div className="flex justify-center md:justify-start mb-6">
              <Logo className="h-10 w-auto" showText={true} isDark={true} />
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/yasirawad" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Yasir101-hi" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:yasir.m.ahmed10@gmail.com" className="text-white/60 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-brand-softblue/70 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-brand-softblue/70 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#services" className="text-brand-softblue/70 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#projects" className="text-brand-softblue/70 hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="#contact" className="text-brand-softblue/70 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="text-center text-brand-softblue/50 text-sm">
          <p>&copy; 2026 Yasir Awad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

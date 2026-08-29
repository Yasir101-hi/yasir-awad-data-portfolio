import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('http')) {
        return;
    }

    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-b border-brand-softblue/30' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-brand-lightgray shadow-[0_4px_20px_rgb(0,0,0,0.02)]'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6 xl:gap-12">
        
        <h1 className="logo m-0 shrink-0">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group no-underline"
          >
            <Logo showText={true} />
          </a>
        </h1>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 justify-end w-full">
          <ul className="flex space-x-7 xl:space-x-9 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[14px] xl:text-[15px] font-medium text-brand-navy/80 hover:text-brand-blue hover:drop-shadow-sm transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 border-l border-brand-softblue/40 pl-6 ml-2">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 rounded-full bg-brand-navy text-white font-medium hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/20 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-3">
              <a 
                  href="https://www.linkedin.com/in/yasirawad" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-brand-navy/60 hover:text-brand-blue transition-colors duration-300"
              >
                  <Linkedin size={18} strokeWidth={2.5} />
              </a>
              <a 
                  href="https://github.com/Yasir101-hi" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-brand-navy/60 hover:text-brand-blue transition-colors duration-300"
              >
                  <Github size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </nav>

        <button
            className="lg:hidden text-brand-navy focus:outline-none ml-auto"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-brand-softblue shadow-xl py-4 animate-in slide-in-from-top-5">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-brand-gray hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-brand-softblue">
                <a 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block w-full text-center py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-blue transition-colors"
                >
                    Contact Me
                </a>
            </li>
            <li className="flex justify-center gap-6 pt-4">
                <a href="https://www.linkedin.com/in/yasirawad" target="_blank" rel="noreferrer" className="text-brand-gray hover:text-brand-blue"><Linkedin size={24}/></a>
                <a href="https://github.com/Yasir101-hi" target="_blank" rel="noreferrer" className="text-brand-gray hover:text-brand-blue"><Github size={24}/></a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

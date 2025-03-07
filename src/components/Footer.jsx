import React from 'react';
import * as LucideIcons from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 md:px-8 lg:px-16 border-t-4 border-cyan-500" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Logo and Intro */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white p-3 rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="Hi-Teck Engineering Works Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-white text-center md:text-left">
            Hi-Teck Engineering Works
          </h2>
          <div className="flex items-center mt-2 bg-slate-800 px-4 py-2 rounded-full">
            <LucideIcons.Cpu className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-slate-200 font-medium">Auto Parts Manufacturing</span>
          </div>
          <p className="text-slate-400 mt-3 text-center md:text-left">
            Precision Engineering | Innovative Solutions
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-6 text-cyan-400 uppercase tracking-wider">
            Contact Information
          </h3>
          <div className="space-y-4 w-full">
            <div className="flex items-start text-slate-300 border-b border-slate-700 pb-3 group hover:border-cyan-500 transition-colors duration-300">
              <LucideIcons.MapPin className="w-6 h-6 mr-3 text-cyan-500 flex-shrink-0 mt-1" />
              <span className="group-hover:text-white transition-colors duration-300">139, Sector 58, Faridabad, Haryana 121004</span>
            </div>
            <div className="flex items-center text-slate-300 border-b border-slate-700 pb-3 group hover:border-cyan-500 transition-colors duration-300">
              <LucideIcons.Phone className="w-6 h-6 mr-3 text-cyan-500 flex-shrink-0" />
              <a 
                href="tel:+919810838600" 
                className="group-hover:text-white transition-colors duration-300"
              >
                098108 38600
              </a>
            </div>
            <div className="flex items-center text-slate-300 group hover:text-white transition-colors duration-300">
              <LucideIcons.Mail className="w-6 h-6 mr-3 text-cyan-500 flex-shrink-0" />
              <a 
                href="mailto:contact@hiteckengineering.com" 
                className="group-hover:text-white transition-colors duration-300"
              >
                contact@hiteckengineering.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-6 text-cyan-400 uppercase tracking-wider">
            Quick Links
          </h3>
          <div className="space-y-3 w-full">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block text-slate-300 hover:text-white transition-colors border-b border-slate-700 pb-3 last:border-b-0 group hover:border-cyan-500"
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full mr-3 group-hover:bg-cyan-500 transition-colors duration-300">
                    <LucideIcons.ChevronRight className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                  </span>
                  {link.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Social */}
      <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-300 group"
          >
            <LucideIcons.Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-300 group"
          >
            <LucideIcons.Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-300 group"
          >
            <LucideIcons.Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
          </a>
        </div>
        <p className="text-slate-400">
          © {new Date().getFullYear()} Hi-Teck Engineering Works. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
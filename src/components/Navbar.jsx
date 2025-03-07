import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Enhanced link click handler with smooth scrolling
  const handleLinkClick = (name, href) => {
    setActiveLink(name);
    setIsOpen(false);
    
    // Smooth scroll to the element
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add scroll padding to account for navbar
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-padding-top: 80px; /* Adjust based on your navbar height */
        scroll-behavior: smooth;
      }
      section {
        padding-top: 100px; /* Consistent section padding */
        padding-bottom: 40px;
      }
    `;
    
    // Append to head
    document.head.appendChild(style);
    
    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'lg:bg-white/90 lg:shadow-md lg:backdrop-blur-sm' 
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Home', '#home');
              }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Hi-Teck Engineering Works Logo" 
                className="h-12 lg:h-16 w-auto cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 lg:space-x-8 ml-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`
                  text-base lg:text-lg font-extrabold tracking-wider uppercase
                  relative overflow-hidden group
                  transition-all duration-500 ease-in-out
                  ${activeLink === link.name 
                    ? 'text-blue-600' 
                    : isScrolled 
                      ? 'text-black hover:text-blue-600' 
                      : 'text-white hover:text-blue-600'}
                `}
              >
                <span 
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 
                  transform -translate-x-full group-hover:translate-x-0 
                  transition-transform duration-500 ease-in-out"
                />
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-black hover:text-blue-600 focus:outline-none 
              transition-colors duration-300 ease-in-out"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden transform transition-all duration-500 ease-in-out 
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 backdrop-blur-md bg-black/30 rounded-b-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`
                  block px-3 py-2 rounded-md text-lg font-bold 
                  transition-all duration-500 ease-in-out
                  ${activeLink === link.name 
                    ? 'bg-blue-600/20 text-blue-400' 
                    : 'text-white hover:bg-blue-500/20 hover:text-blue-300'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
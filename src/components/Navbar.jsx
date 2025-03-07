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

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
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
        absolute lg:fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'lg:bg-white/90 lg:shadow-md lg:backdrop-blur-sm bg-transparent' 
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
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
                onClick={() => handleLinkClick(link.name)}
                className={`
                  text-base lg:text-lg font-extrabold tracking-wider uppercase
                  relative overflow-hidden group
                  transition-all duration-500 ease-in-out
                  ${activeLink === link.name 
                    ? 'text-blue-600' 
                    : 'text-white lg:text-black hover:text-blue-600'}
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
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/90 rounded-b-lg shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`
                  block px-3 py-2 rounded-md text-lg font-bold 
                  transition-all duration-500 ease-in-out
                  ${activeLink === link.name 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-black hover:bg-blue-50 hover:text-blue-600'}
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
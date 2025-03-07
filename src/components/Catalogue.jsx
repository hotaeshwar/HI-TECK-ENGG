import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCogs, faIndustry } from '@fortawesome/free-solid-svg-icons';

// Import PDF files
import BSPP from '../assets/files/Catalogo BSPP HYFIT June 2023.pdf';
import Series1 from '../assets/files/Catalogue (Series-1).pdf';
import DNP from '../assets/files/Catalogue_DNP_2019.pdf';

const Catalogue = () => {
  const catalogueItems = [
    {
      id: 'bspp',
      title: 'BSPP HYFIT Catalogue',
      description: 'Hydraulic Fitting Catalogue - June 2023',
      file: BSPP,
      fileName: 'BSPP_HYFIT_Catalogue_June_2023.pdf',
      icon: faWrench,
      color: 'from-blue-500 to-cyan-500',
      fileSize: '4.2MB'
    },
    {
      id: 'series1',
      title: 'Series-1 Catalogue',
      description: 'Product Series-1 Comprehensive Catalogue',
      file: Series1,
      fileName: 'Series_1_Catalogue.pdf',
      icon: faCogs,
      color: 'from-purple-500 to-indigo-500',
      fileSize: '3.8MB'
    },
    {
      id: 'dnp',
      title: 'DNP Catalogue',
      description: 'DNP Product Catalogue - 2019 Edition',
      file: DNP,
      fileName: 'DNP_Catalogue_2019.pdf',
      icon: faIndustry,
      color: 'from-emerald-500 to-teal-500',
      fileSize: '5.1MB'
    }
  ];

  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedCards = document.querySelectorAll('.card-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation with increased delay between cards
          setTimeout(() => {
            entry.target.classList.add('card-visible');
          }, 300 * index); // 300ms between each card for noticeable staggering
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      animatedCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const handleDownload = (file, fileName) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Header Section - Reduced vertical margins */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Catalogues
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Download our comprehensive product catalogues to explore our full range of industrial solutions
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Catalogue Grid - Reduced height and padding */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {catalogueItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-reveal opacity-0 transform translate-y-8 border border-gray-100 flex flex-col w-full md:w-1/3"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                visibility: 'visible', // Ensures the card is visible before animation
                minHeight: '480px' // Reduced minimum height from 680px to 480px
              }}
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6 flex flex-col items-center text-center h-full">
                {/* Icon Section - Smaller size */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-xl"
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                
                {/* File Type Icon - Reduced height */}
                <div className="w-full h-28 bg-gray-100 mb-6 rounded-lg flex flex-col items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-400 mb-2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 15h6"></path>
                    <path d="M9 11h6"></path>
                  </svg>
                  <span className="text-gray-500 text-sm font-medium">{item.title}</span>
                </div>
                
                {/* Push download button to bottom and ensure it stays within card */}
                <div className="mt-auto w-full">
                  <button 
                    onClick={() => handleDownload(item.file, item.fileName)}
                    className={`download-btn w-full flex items-center justify-center 
                      bg-gradient-to-r ${item.color} text-white 
                      py-2 px-4
                      text-sm font-medium
                      rounded-lg
                      transition-all duration-300
                      hover:shadow-lg
                      transform hover:scale-102
                      active:scale-98`}
                  >
                    <Download className="mr-2 download-icon" size={16} />
                    Download Catalogue
                  </button>
                  
                  <p className="text-xs text-gray-400 mt-3">
                    PDF • {item.fileSize}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info Section - Reduced padding and size */}
        <div className="mt-10 bg-white rounded-xl shadow-sm p-6 max-w-5xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Download size={20} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Need More Information?</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Contact our team for customized product catalogues or specific product information.
              </p>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-300 font-medium text-sm">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-reveal {
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .download-btn {
          position: relative;
          overflow: hidden;
        }
        
        .download-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: transform 0.6s ease;
        }
        
        .download-btn:hover:before {
          transform: translateX(100%);
        }
        
        .download-btn:hover .download-icon {
          animation: bounce 0.7s ease infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .transform.hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .transform.active\\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default Catalogue;
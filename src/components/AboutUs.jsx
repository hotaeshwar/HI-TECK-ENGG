import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Enhanced Intersection Observer with improved thresholds
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-active');
          }, parseInt(entry.target.dataset.delay) || 0);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 ease-out" data-delay="100">
          <div className="inline-block px-6 py-2 border-b-2 border-cyan-500 mb-6">
            <p className="text-cyan-400 text-lg uppercase tracking-widest font-medium">About Us</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-white animate-on-scroll opacity-0 transition-all duration-700 ease-out transform translate-y-3" data-delay="300">
              Where Innovation
            </span>
            <span className="block mt-2 text-cyan-400 animate-on-scroll opacity-0 transition-all duration-700 ease-out transform translate-y-3" data-delay="500">
              Fuels Performance
            </span>
          </h1>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image Section in wide format on left */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0 transition-all duration-1000 ease-out" data-delay="300">
            <div className="relative overflow-hidden rounded-lg border border-slate-700 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1661964291917-b20c2648fac6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D" 
                alt="HI TECK Engineering Works"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <div className="h-1 w-16 bg-cyan-500 mb-3"></div>
                <p className="text-lg font-medium">Engineering Excellence</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="200">
              Welcome to <strong className="text-cyan-400 font-semibold">HI TECK ENGINEERING WORKS</strong>, 
              the powerhouse behind precision-crafted automobile parts that keep the world moving. 
              We are not just manufacturers—we are pioneers, reimagining the future of automotive 
              engineering with every component we create.
            </p>

            <div className="border-l-4 border-cyan-500 pl-6 py-2 my-8 animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="400">
              <p className="text-xl font-light italic text-slate-200">
                With a legacy of unmatched craftsmanship and cutting-edge technology, we 
                design and deliver parts that redefine performance, durability, and efficiency.
              </p>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="600">
              Our expertise powers some of the most trusted names in the automotive industry, 
              ensuring seamless integration and exceptional results. At the core of HI TECK ENGINEERING WORKS 
              lies a relentless pursuit of innovation. Our state-of-the-art facilities, combined with a 
              passionate team of experts, push boundaries to produce revolutionary solutions tailored to your needs.
            </p>
            
            <div className="pt-8 animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-y-4" data-delay="700">
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">Precision Engineering</p>
                </div>
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">Innovation Excellence</p>
                </div>
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">Quality Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-800 ease-out transform translate-y-3" data-delay="800">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Engineering Brilliance.</span>
              <span className="text-cyan-400 ml-2">Powering Progress.</span>
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-active {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        .animate-on-scroll {
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        
        @keyframes pageLoad {
          from { opacity: 0.8; }
          to { opacity: 1; }
        }
        
        body {
          animation: pageLoad 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
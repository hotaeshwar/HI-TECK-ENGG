import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Car, 
  Users, 
  Target, 
  Briefcase, 
  ChevronRight 
} from 'lucide-react';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Engineering & Design');

  const departmentData = {
    'Engineering & Design': [
      {
        title: 'Mechanical Engineers',
        description: 'Design and develop innovative automotive mechanical systems and components.',
        skills: ['CAD Design', 'Prototype Development', 'Systems Engineering'],
        icon: <Wrench className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Electrical Engineers',
        description: 'Create advanced electrical and electronic systems for modern vehicles.',
        skills: ['Circuit Design', 'EV Technologies', 'Embedded Systems'],
        icon: <Car className="text-green-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Automotive Designers',
        description: 'Craft visionary vehicle designs that blend aesthetics and functionality.',
        skills: ['3D Modeling', 'Conceptual Design', 'User Experience'],
        icon: <Target className="text-purple-600 w-10 h-10 md:w-12 md:h-12" />
      }
    ],
    'Manufacturing & Production': [
      {
        title: 'Factory Workers',
        description: 'Execute critical manufacturing processes with precision and care.',
        skills: ['Assembly', 'Quality Control', 'Machinery Operation'],
        icon: <Users className="text-red-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Production Technicians',
        description: 'Maintain and optimize manufacturing equipment and processes.',
        skills: ['Technical Maintenance', 'Troubleshooting', 'Process Optimization'],
        icon: <Wrench className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />
      }
    ],
    'Quality & Safety': [
      {
        title: 'Quality Assurance Specialists',
        description: 'Ensure highest standards of product quality and safety.',
        skills: ['Inspection Protocols', 'Safety Standards', 'Precision Measurement'],
        icon: <Target className="text-teal-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Safety Compliance Experts',
        description: 'Develop and implement comprehensive safety strategies.',
        skills: ['Regulatory Compliance', 'Risk Assessment', 'Safety Training'],
        icon: <Briefcase className="text-indigo-600 w-10 h-10 md:w-12 md:h-12" />
      }
    ],
    'Sales & Marketing': [
      {
        title: 'Sales Professionals',
        description: 'Drive business growth through strategic sales approaches.',
        skills: ['Customer Engagement', 'Product Knowledge', 'Negotiation'],
        icon: <ChevronRight className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Marketing Specialists',
        description: 'Create compelling marketing strategies and campaigns.',
        skills: ['Digital Marketing', 'Brand Management', 'Market Research'],
        icon: <Users className="text-green-600 w-10 h-10 md:w-12 md:h-12" />
      }
    ],
    'Customer Relations': [
      {
        title: 'Customer Support Representatives',
        description: 'Provide exceptional support and enhance customer experience.',
        skills: ['Communication', 'Problem Solving', 'Customer Satisfaction'],
        icon: <Car className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />
      },
      {
        title: 'Customer Experience Managers',
        description: 'Design and implement strategies to improve customer interactions.',
        skills: ['Service Design', 'Feedback Analysis', 'Relationship Management'],
        icon: <Briefcase className="text-purple-600 w-10 h-10 md:w-12 md:h-12" />
      }
    ]
  };

  const departments = Object.keys(departmentData);

  useEffect(() => {
    // Animation for header elements
    const headerElements = document.querySelectorAll('.animate-fade-in');
    const departmentButtons = document.querySelectorAll('.animate-slide-in');
    const jobCards = document.querySelectorAll('.animate-job-card');
    const noticeSection = document.querySelector('.animate-notice');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Observer for header animations
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          headerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer for department buttons with staggered animation
    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('slide-in-visible');
          }, 100 * index);
          buttonObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer for job cards with staggered animation
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('job-card-visible');
          }, 150 * index);
          cardObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer for notice section
    const noticeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('notice-visible');
          noticeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all elements
    headerElements.forEach(el => headerObserver.observe(el));
    departmentButtons.forEach(el => buttonObserver.observe(el));
    jobCards.forEach(el => cardObserver.observe(el));
    if (noticeSection) noticeObserver.observe(noticeSection);
    
    // Cleanup function
    return () => {
      headerElements.forEach(el => headerObserver.unobserve(el));
      departmentButtons.forEach(el => buttonObserver.unobserve(el));
      jobCards.forEach(el => cardObserver.unobserve(el));
      if (noticeSection) noticeObserver.unobserve(noticeSection);
    };
  }, [selectedDepartment]); // Re-run when department changes to animate new job cards

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with animation */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 animate-fade-in opacity-0 transform -translate-y-4">
            Career Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 animate-fade-in opacity-0 transform -translate-y-4">
            Join our team and drive the future of automotive innovation
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Department Selector with animation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-2 sm:px-0">
          {departments.map((dept, index) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`
                px-4 py-2 md:px-6 md:py-3 
                rounded-full text-sm md:text-base font-semibold 
                transition-all duration-300 ease-in-out
                animate-slide-in opacity-0 transform translate-x-4
                ${selectedDepartment === dept 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 hover:text-blue-700'}
              `}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings with animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
          {departmentData[selectedDepartment].map((job, index) => (
            <div 
              key={job.title} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-2 
              flex flex-col justify-between p-6 md:p-8
              border border-gray-100 hover:border-blue-200
              animate-job-card opacity-0 scale-95"
            >
              <div>
                <div className="flex items-center mb-4 md:mb-5">
                  <div className="p-3 rounded-full bg-blue-50">
                    {job.icon}
                  </div>
                  <h3 className="ml-4 text-xl md:text-2xl font-bold text-gray-800">
                    {job.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  {job.description}
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 md:pt-5">
                <h4 className="text-base md:text-lg font-semibold mb-3 text-gray-800">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 
                      rounded-full text-xs md:text-sm border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="mt-5 w-full py-2 rounded-lg bg-transparent hover:bg-blue-50 
                  text-blue-600 font-medium border border-blue-200 hover:border-blue-300 
                  transition-colors duration-300 text-sm md:text-base flex items-center justify-center">
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Positions Notice with animation */}
        <div className="mt-16 md:mt-20 text-center bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200 rounded-2xl p-8 md:p-10 mx-2 sm:mx-0 animate-notice opacity-0 transform translate-y-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto flex items-center justify-center mb-4">
            <Target className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4 md:mb-5">
            Stay Tuned for More Opportunities!
          </h3>
          <p className="text-base md:text-lg text-yellow-700 max-w-3xl mx-auto mb-6 md:mb-8 px-2 sm:px-0">
            We are continuously expanding our team. Keep an eye out for exciting new positions 
            that will be added soon. Your dream career might be just around the corner!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#subscribe" 
              className="text-base px-6 py-3 md:px-8 md:py-4
              rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white 
              hover:from-yellow-500 hover:to-amber-600 transition-colors
              shadow-md hover:shadow-lg transform hover:scale-105 font-semibold"
            >
              Subscribe for Updates
            </a>
            <a 
              href="#contact" 
              className="text-base px-6 py-3 md:px-8 md:py-4
              rounded-full bg-white text-yellow-600 
              hover:bg-yellow-50 transition-colors border border-yellow-300
              shadow-sm hover:shadow-md transform hover:scale-105 font-semibold"
            >
              Contact Recruitment
            </a>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        /* Fade-in animation for header */
        .animate-fade-in {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        /* Slide-in animation for department buttons */
        .animate-slide-in {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-in-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        /* Scale-in animation for job cards */
        .animate-job-card {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        
        .job-card-visible {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        
        /* Bottom-up animation for notice section */
        .animate-notice {
          transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }
        
        .notice-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default CareerPage;
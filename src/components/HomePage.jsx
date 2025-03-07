import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Attempt to play video with muted attribute
      video.muted = true;
      video.play().catch(error => {
        console.log("Autoplay was prevented", error);
      });
    }

    // Initially hide the elements
    if (titleRef.current && taglineRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(50px)";
      taglineRef.current.style.opacity = "0";
      taglineRef.current.style.transform = "translateY(50px)";
    }

    // Create intersection observer to detect when user scrolls to the section
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only need to trigger once
      }
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe the hero section
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Apply animations when elements become visible
  useEffect(() => {
    if (isVisible && titleRef.current && taglineRef.current) {
      // Animate title after a small delay
      setTimeout(() => {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }, 300);

      // Animate tagline with a slightly longer delay
      setTimeout(() => {
        taglineRef.current.style.opacity = "1";
        taglineRef.current.style.transform = "translateY(0)";
      }, 600);
    }
  }, [isVisible]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://videos.pexels.com/video-files/30288948/12984031_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 hero-section">
        <h1 
          ref={titleRef}
          className="text-xl md:text-6xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg"
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
           HI TECK ENGINEERING WORKS
        </h1>
        <p 
          ref={taglineRef}
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md"
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          Turning Visions into Reality with Engineering Mastery
        </p>
      </div>
    </div>
  );
};

export default HomePage;
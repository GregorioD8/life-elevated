import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div className="hero-container">
      <div className="gradient-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>LIFE ELEVATED Coaching</h1>
        <p>
          Transform your mindset, overcome self-doubt, and create sustainable high performance with personalized coaching tailored for you.
        </p>
        <div className="hero-buttons">
          <motion.button
            className="start-now-btn"
            whileHover={{ scale: 1.05 }}
            onClick={() => (window.location.href = "/contact")}
          >
            Start Now
          </motion.button>
          <motion.button
            className="learn-more-btn"
            whileHover={{ scale: 1.05 }}
            onClick={() => (window.location.href = "/services")}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Trusted by Professionals Section */}
      <div className="trusted-section" data-aos="fade-up">
        <div className="container">
          <h2 className="trusted-title">Trusted by Professionals from Top Companies</h2>
          <p className="trusted-text">
          Jeff has delivered keynote speeches at major corporate events for: Amazon, IBM, and Novartis Pharmaceuticals. 
            <span className="company-name"> Amazon</span>, 
            <span className="company-name"> IBM</span>, 
            <span className="company-name"> Novartis Pharmaceuticals</span>, and more. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div>
      {/* Hero Section */}
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
            Transform your mindset, overcome self-doubt, and create sustainable
            high performance with personalized coaching tailored for you.
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
      </div>


    </div>
  );
};

export default HeroSection;
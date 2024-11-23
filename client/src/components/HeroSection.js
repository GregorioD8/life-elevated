import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            onClick={() => window.location.href = "#services"}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
// src/components/AboutSection.js
import React from 'react';
import '../styles.css'; // Import the styles

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-title">Meet Jeff: Your Partner in Performance</h2>
        <p className="about-text">
          After 35 years in the American Fire Service, Jeff transitioned into Executive Performance Coaching. For the last 5 years, he’s been empowering professionals from corporations like Amazon, IBM, and Novartis Pharmaceuticals, along with athletes and Special Forces soldiers. Jeff’s mission is to help you achieve sustainable high performance by leveraging tools, skills and behavioral strategies we will strengthen
your mindset, improve nutritional choices, help you effectively recover to
enhance performance and be your best for moments that matter the most.
        </p>
        <button
          className="learn-more-btn"
          onClick={() => (window.location.href = '/about')}
        >
          Learn More About Jeff
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
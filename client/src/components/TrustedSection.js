// src/components/TrustedSection.js
import React, { useEffect, useState } from 'react';
import '../styles.css'; // Import styles

const TrustedSection = () => {
  const [visible, setVisible] = useState(false); // Track visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true); // Show when user scrolls down
      } else {
        setVisible(false); // Hide when user is at the top
      }
    };

    window.addEventListener('scroll', handleScroll); // Listen to scroll events
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div className={`trusted-section ${visible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <h2 className="trusted-title">Trusted by Professionals from Top Companies</h2>
        <p className="trusted-text">
          Jeff has delivered keynote speeches at major corporate events for:{" "}
          <span className="company-name">Amazon</span>,{" "}
          <span className="company-name">IBM</span>,{" "}
          <span className="company-name">Novartis Pharmaceuticals</span>, and
          more.
        </p>
      </div>
    </div>
  );
};

export default TrustedSection;
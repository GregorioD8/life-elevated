import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>© 2024 LIFE ELEVATED. All rights reserved.</p>
        <p>
          Follow us: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Twitter</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
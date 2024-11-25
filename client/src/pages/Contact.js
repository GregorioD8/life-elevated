// /src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  return (
    <section className="contact-section">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h2
          className="contact-title"
          variants={contentVariants}
        >
          Ready to Elevate Your Life?
        </motion.h2>
        <motion.p
          className="contact-tagline"
          variants={contentVariants}
        >
          Take the first step towards high performance and lasting impact.
          Connect with Jeff today to get started on your journey.
        </motion.p>
        <motion.div
          className="contact-buttons"
          variants={contentVariants}
        >
          <a href="tel:6024486896" className="contact-btn">
            Call Now
          </a>
          <a href="mailto:jeffcaselifeelevated@gmail.com" className="contact-btn">
            Send an Email
          </a>
        </motion.div>
        <motion.p
          className="contact-info"
          variants={contentVariants}
        >
          
          <strong>Phone:</strong> 602-448-6896 <br />
          <strong>Email:</strong> jeffcaselifeelevated@gmail.com
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
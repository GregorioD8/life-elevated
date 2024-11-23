import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description }) => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="col-md-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <div className="service-card">
        <div className="card-gradient"></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
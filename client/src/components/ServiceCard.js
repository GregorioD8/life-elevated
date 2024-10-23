/**
 * ServiceCard component is a reusable UI element that can be used to display any service.
 * Props:
 * - title: Title of the service.
 * - description: Description of the service.
 */

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
        type: "spring",
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
      <div className="service-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
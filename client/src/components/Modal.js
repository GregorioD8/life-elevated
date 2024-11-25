// src/components/Model.js
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ title, description, onClose }) => {
  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
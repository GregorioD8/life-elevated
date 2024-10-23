import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { UserPerformanceContext } from './UserPerformanceContext';
import { Button } from 'react-bootstrap'; // Import Bootstrap Button
import QuizPopup from './QuizPopup'; // Import QuizPopup component

const HeroSection = () => {
  const { performance } = useContext(UserPerformanceContext);
  const [showQuiz, setShowQuiz] = useState(false); // State for controlling modal

  const getMessage = () => {
    if (performance.score < 5) {
      return "Feeling low on energy? Our 1-on-1 coaching can help you regain vitality.";
    } else if (performance.score < 8) {
      return "You're on the right track! Let's boost your energy to new heights.";
    } else {
      return "You're performing at your best! Let's keep you at peak performance.";
    }
  };

  // Function to handle quiz button click
  const handleQuizOpen = () => {
    setShowQuiz(true);
  };

  const handleQuizClose = () => {
    setShowQuiz(false);
  };

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
        <p>{getMessage()}</p>
        <div className="hero-buttons">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            Start Your Journey
          </motion.button>

          {/* Adding the Quiz Button with Icon */}
          <motion.button
            className="btn-quiz"
            whileHover={{ scale: 1.1 }}
            onClick={handleQuizOpen} // Set quiz open on button click
          >
            <i className="bi bi-arrow-right-circle-fill"></i> Take the Quiz
          </motion.button>
        </div>
      </motion.div>

      {/* Render QuizPopup if showQuiz is true */}
      {showQuiz && <QuizPopup closeOnNav={handleQuizClose} />}
    </div>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Keep the import
import Quiz from './Quiz';

const QuizPopup = ({ closeOnNav }) => {
  const [showQuiz, setShowQuiz] = useState(true);

  const handleQuizClose = () => {
    setShowQuiz(false);
    if (closeOnNav) closeOnNav(); // Ensure that the close on nav also happens
  };

  return (
    <div className="quiz-popup">
      {showQuiz && (
        <motion.div 
          className="quiz-modal"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
        >
          <Quiz onClose={handleQuizClose} />
        </motion.div>
      )}
    </div>
  );
};

export default QuizPopup;
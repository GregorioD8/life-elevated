import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          <div className="quiz-modal">
            <button className="close-btn" onClick={handleQuizClose}>×</button>
            <Quiz onClose={handleQuizClose} /> {/* Render the Quiz component */}
          </div>
        )}
      </div>
    );
  };
  export default QuizPopup;
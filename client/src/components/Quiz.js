import React, { useState, useContext } from 'react';
import { UserPerformanceContext } from './UserPerformanceContext';
import PostQuizServices from './PostQuizServices';

const Quiz = ({ onClose }) => {
  const { setPerformance } = useContext(UserPerformanceContext);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState(0); // Default value set to 0
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, question: "How would you rate your energy levels on a typical day?", type: "energy" },
    { id: 2, question: "How often do you feel motivated to complete your daily tasks?", type: "motivation" },
    { id: 3, question: "Do you often feel stressed or fatigued throughout the day?", type: "stress" },
    { id: 4, question: "How clear are your long-term goals?", type: "goals" },
    { id: 5, question: "Do you feel you maintain a healthy work-life balance?", type: "work-life balance" },
  ];

  const handleInputChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questions[currentQuestionIndex].id]: currentAnswer }));
    setCurrentAnswer(0); // Reset current answer to 0 for the next question

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    } else {
      handleSubmit(); // Submit when the last question is answered
    }
  };

  const handleSubmit = () => {
    const totalScore = Object.values(answers).reduce((acc, score) => acc + parseInt(score), 0) / questions.length;
    setPerformance({ score: totalScore });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="post-quiz-section">
        <h2>Thank you for completing the quiz!</h2>
        <PostQuizServices />
        <button className="btn btn-quiz" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4" style={{ fontSize: '2rem' }}>Energy Multiplier Quiz</h2>
      <h4 className="mb-4" style={{ fontSize: '1.2rem' }}>On a scale of 1-10, please rate the following:</h4>

      {/* Display the current question */}
      <div>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{questions[currentQuestionIndex].question}</p>
        <input
          type="number"
          min="1"
          max="10"
          value={currentAnswer} // Default value is 0
          onChange={handleInputChange}
          className="form-control"
          style={{ width: '100px', margin: '0 auto', textAlign: 'center', fontSize: '1.5rem' }}
        />
      </div>

      {/* Next button for each question */}
      <button className="btn btn-primary submit-btn mt-4" onClick={handleNextQuestion}>
        {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Quiz;
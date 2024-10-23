import React, { useState, useContext } from 'react';
import { UserPerformanceContext } from './UserPerformanceContext';
import PostQuizServices from './PostQuizServices';

const Quiz = ({ onClose }) => {
  const { setPerformance } = useContext(UserPerformanceContext);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, question: "On a scale of 1-10, how would you rate your energy levels on a typical day?", type: "energy" },
    { id: 2, question: "How often do you feel motivated to complete your daily tasks (scale of 1-10)?", type: "motivation" },
    { id: 3, question: "Do you often feel stressed or fatigued throughout the day (scale of 1-10)?", type: "stress" },
    { id: 4, question: "How clear are your long-term goals (scale of 1-10)?", type: "goals" },
    { id: 5, question: "Do you feel you maintain a healthy work-life balance (scale of 1-10)?", type: "work-life balance" },
  ];

  const handleAnswer = (questionId, score) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: score }));
  };

  const handleSubmit = () => {
    // Calculate score based on answers
    const totalScore = Object.values(answers).reduce((acc, score) => acc + parseInt(score), 0) / questions.length;
    setPerformance({ score: totalScore });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="post-quiz-section">
        <h2>Thank you for completing the quiz!</h2>
        <PostQuizServices /> {/* This component will show personalized services */}
        <button className="btn btn-quiz" onClick={onClose}>Close</button> {/* Close button */}
      </div>
    );
  }

  return (
    <div>
      <h2>Energy Multiplier Quiz</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          <input type="number" min="1" max="10" onChange={(e) => handleAnswer(q.id, e.target.value)} />
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
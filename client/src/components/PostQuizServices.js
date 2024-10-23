import React, { useContext } from 'react';
import { UserPerformanceContext } from './UserPerformanceContext';
import ServiceCard from './ServiceCard';

const PostQuizServices = ({ onClose }) => {
  const { performance } = useContext(UserPerformanceContext);

  const getMessage = () => {
    if (performance.score < 5) {
      return "You're feeling low on energy. Let's boost your vitality with personalized 1-on-1 coaching.";
    } else if (performance.score < 8) {
      return "You're on the right track! Our Energy Multiplier program can help you reach new heights.";
    } else {
      return "You're performing at your best! Let's maintain your peak performance with advanced coaching.";
    }
  };

  const getServiceRecommendations = () => {
    if (performance.score < 5) {
      return [
        { title: "1-on-1 Coaching", description: "Boost your energy with tailored coaching." },
        { title: "Stress Management", description: "Learn how to manage stress effectively." }
      ];
    } else if (performance.score < 8) {
      return [
        { title: "Energy Multiplier Program", description: "Boost your energy with our comprehensive program." },
        { title: "Time Management", description: "Optimize your daily focus and efficiency." }
      ];
    } else {
      return [
        { title: "Advanced Coaching", description: "Stay at peak performance with advanced coaching." },
        { title: "Leadership Development", description: "Become a leader in your industry." }
      ];
    }
  };

  return (
    <div className="post-quiz-section">
      <button className="close-btn" onClick={onClose}>X</button>  {/* Close button */}
      <h2>{getMessage()}</h2>
      <div className="service-recommendations">
        {getServiceRecommendations().map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default PostQuizServices;
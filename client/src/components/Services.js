import React, { useContext } from 'react';
import { UserPerformanceContext } from './UserPerformanceContext';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { performance } = useContext(UserPerformanceContext);

  const getRecommendedServices = () => {
    if (performance.score < 5) {
      return [
        { title: "1-on-1 Coaching", description: "Personalized coaching to regain your energy." },
        { title: "Stress Management", description: "Learn techniques to manage stress effectively." },
      ];
    } else if (performance.score < 8) {
      return [
        { title: "Energy Multiplier Program", description: "Boost your energy levels with our proven program." },
        { title: "Time Management", description: "Optimize your focus and efficiency." },
      ];
    } else {
      return [
        { title: "Advanced Coaching", description: "Maintain your high performance with leadership coaching." },
        { title: "Seminars", description: "Public speaking and leadership development seminars." },
      ];
    }
  };

  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="text-center mb-4">Services</h2>
        <div className="row">
          {getRecommendedServices().map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
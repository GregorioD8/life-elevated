// /src/pages/Services.js
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "1-on-1 Executive Coaching",
      description:
        "Tailored coaching to enhance mental focus, resilience, and adaptability, helping leaders perform under pressure and achieve sustainable high performance.",
    },
    {
      title: "Critical Moment Preparation",
      description:
        "Master the mental, physical, and emotional strategies to perform effectively during high-stakes situations such as interviews, presentations, and emergency responses.",
    },
    {
      title: "Personal Vision and Life Plans",
      description:
        "Design actionable life plans and personal visions to align your goals, values, and actions for a fulfilling future, empowering you to take decisive steps with clarity and confidence.",
    },
    {
      title: "Team Leadership and Development",
      description:
        "Workshops and coaching to strengthen leadership skills, enhance collaboration, and build a resilient team dynamic.",
    },
    {
      title: "Keynote Speaking",
      description:
        "Inspiring talks on creating high-performance mindsets, leveraging stress for growth, and thriving in critical moments, tailored for corporate events and conferences.",
    },
    {
      title: "Building Intentional Relationships",
      description:
        "Strengthen personal and professional relationships through strategies rooted in awareness, intentionality, and emotional intelligence.",
    },
  ];

  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="services-intro">
  At <span style={{ color: '#007bff' }}>LIFE ELEVATED Coaching</span>, we empower individuals and teams to achieve peak performance and unlock their full potential through innovative coaching methods and actionable strategies.
</div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
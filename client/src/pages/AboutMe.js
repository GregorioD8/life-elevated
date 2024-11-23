import React from 'react';
import { motion } from 'framer-motion';
import CareerTimeline from '../components/CareerTimeline.js';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="about-section"
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="text-center mb-4" variants={textVariants}>
          About Me
        </motion.h2>
        <motion.p variants={textVariants}>
        <p>
          With over 33 years of service in the Phoenix Fire Department, Jeff has dedicated his career to helping others perform at their best under the most challenging circumstances. He worked as a Paramedic, Firefighter, Captain, Battalion Chief, Shift Commander, and Deputy Chief, later serving as the Fire Chief for Avondale Fire and Medical Department.
        </p>
        <p>
          Throughout his career, Jeff responded to thousands of Emergency Medical, Fire, Hazardous Materials, and Technical Rescue calls. He created and implemented training programs focused on mental performance, health, fitness, and recovery strategies for firefighters to prepare them for their most critical moments.
        </p>
        <p>
          Jeff was a Residential Faculty member at Mesa Community College for 20 years and is currently an Adjunct Instructor for Texas A&M University's WMD/EMS terrorism response preparedness program. His innovative work includes designing a Virtual Incident Command Center to immerse Fire Commanders in real-time scenarios, enhancing their command agility and adaptability.
        </p>
        <p>
          Four years ago, Jeff transitioned into his role as a Performance Specialist, working with corporate executives, professional and college athletes, elite military units, and individuals striving for personal and professional growth. Through LIFE ELEVATED Consulting, Jeff focuses on helping clients create and become the best versions of themselves.
        </p>
        <p>
          Jeff holds a Bachelor’s degree in Fire Service Management and a Master’s degree in Educational Leadership. He is currently a consultant for TIGNUM LLC, providing executive performance training and coaching. Jeff has also delivered keynote speeches at major corporate events for Amazon, IBM, and Novartis Pharmaceuticals.
        </p>
        <p>
          Jeff has been married to his wife for 35 years and is a proud father of four adult children and grandfather to 13 grandchildren.
        </p>
        <h3 className="text-center mt-5">A Journey of Leadership</h3>
        <CareerTimeline />
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutMe;


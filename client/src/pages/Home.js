// /src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import EnergyMultiplier from '../components/EnergyMultiplier';
import Footer from '../components/Footer';
import TrustedSection from '../components/TrustedSection'; // Import TrustedSection

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EnergyMultiplier />
      <Footer />
      <TrustedSection /> 
    </div>
  );
};

export default Home;
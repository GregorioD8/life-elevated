import React from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <Services />
      <AboutMe />
      <Footer /> 
    </>
  );
}

export default App;
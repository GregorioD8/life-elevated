import React, { Suspense, lazy } from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { UserPerformanceProvider } from './components/UserPerformanceContext';

const Services = lazy(() => import('./components/Services'));
const AboutMe = lazy(() => import('./components/AboutMe'));

function App() {
  return (
    <UserPerformanceProvider>
      <MyNavbar />
      <HeroSection />
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading About Me...</div>}>
        <AboutMe />
      </Suspense>
      <Footer />
    </UserPerformanceProvider>
  );
}

export default App;
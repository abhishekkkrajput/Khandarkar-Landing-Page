
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChinar from './components/FloatingChinar';
import Home from './src/pages/Home';
import AboutUs from './src/pages/AboutUs';
import Contact from './src/pages/Contact';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import Terms from './src/pages/Terms';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll could be added here
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <FloatingChinar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import BrandingDesign from './pages/services/BrandingDesign';
import SEOAndSEM from './pages/services/SEOAndSEM';
import TraditionalMarketing from './pages/services/TraditionalMarketing';
import VideoProduction from './pages/services/VideoProduction';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/social-media" element={<SocialMediaMarketing />} />
            <Route path="/services/branding-design" element={<BrandingDesign />} />
            <Route path="/services/seo-sem" element={<SEOAndSEM />} />
            <Route path="/services/traditional-marketing" element={<TraditionalMarketing />} />
            <Route path="/services/video-production" element={<VideoProduction />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
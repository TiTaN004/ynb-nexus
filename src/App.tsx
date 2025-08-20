import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import BrandingDesign from "./pages/services/BrandingDesign";
import SEOAndSEM from "./pages/services/SEOAndSEM";
import {BrandingAndDesignData, DigitalMarketingData, SocialMediaMarketingData, TraditionalMarketingData, VideoProductionData } from './pages/services/servicesData.ts';
import TraditionalMarketing from "./pages/services/TraditionalMarketing";
import VideoProduction from "./pages/services/VideoProduction";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ServiceTemplate from "./components/Common/ServiceTemplate";
import { serviceRoutes } from "./pages/services/servicesRoutes.ts";
import ScrollComponent from "./components/Common/ScrollComponent.tsx";

function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollComponent/>
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
            {serviceRoutes.map(({ path, prop }) => (
              <Route
                key={path}
                path={path}
                element={<ServiceTemplate {...prop} />}
              />
            ))}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
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

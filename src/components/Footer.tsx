import React from 'react';
import { href, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/NEXUS.svg'
const Footer = () => {
  return (
    <footer className="footer-container relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="footer-brand group">
              
              <div className="flex flex-col items-center">
               <img src={logo} alt="ynb logo" className="w-[50%] brightness-150" />
              </div>
            </div>
            <p className="footer-text mt-4">
              Your One-Stop Marketing Partner – We help brands grow, connect, and succeed with 360° marketing solutions.
            </p>
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com/ynbnexus/?hl=en", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/ynb-nexus/?viewAsMember=true", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/YNBNEXUS", label: "Twitter" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target='_blanc'
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="space-y-1">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Testimonials', href: '/testimonials'},
                { name: 'About Us', href: '/about' },
                // { name: 'Careers', href: '/careers' }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="footer-heading">Services</h3>
            <nav className="space-y-1">
              {[
                { name: 'Digital Marketing', href: '/services/digital-marketing' },
                { name: 'Social Media', href: 'services/social-media-marketing' },
                { name: 'Branding & Design', href: 'services/branding-and-designing' },
                { name: 'SEO & SEM', href: '/services/seo-sem' },
                { name: 'End To End Development', href: '/services/end-to-end-development' }
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <Link to={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="footer-heading">Contact Info</h3>
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  text: "ynbnexus@gmail.com",
                  href: "mailto:ynbnexus@gmail.com"
                },
                {
                  icon: Phone,
                  text: "+91 76986 38389",
                  href: "tel:+917698638389"
                },
                {
                  icon: MapPin,
                  text: "202 - Radium square, Bhakti Nagar station plot,Gondal road, Rajkot, Gujarat 360002",
                  href: "https://maps.google.com"
                }
              ].map(({ icon: Icon, text, href }, index) => (
                <motion.a
                  key={text}
                  href={href}
                  className="footer-contact-item group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Icon className="footer-contact-icon" />
                  <span className={`footer-contact-text ${text.length > 20 ? 'flex-1' : ''}`}>{text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="footer-bottom-text">
            © 2024 YNB Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-bottom-link">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
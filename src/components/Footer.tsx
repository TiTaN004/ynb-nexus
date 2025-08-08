import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">YN</span>
              </div>
              <span className="text-xl font-bold">YNB Nexus</span>
            </div>
            <p className="text-gray-300">
              Your One-Stop Marketing Partner – We help brands grow, connect, and succeed with 360° marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-yellow-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-yellow-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/social-media" className="text-gray-300 hover:text-yellow-400 transition-colors">Social Media</Link></li>
              <li><Link to="/services/branding-design" className="text-gray-300 hover:text-yellow-400 transition-colors">Branding & Design</Link></li>
              <li><Link to="/services/seo-sem" className="text-gray-300 hover:text-yellow-400 transition-colors">SEO & SEM</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-gray-300">contact@ynbnexus.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-gray-300">+1 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-400" />
                <span className="text-gray-300">123 Business Ave, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 YNB Nexus. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bg from '../assets/hero.png';

interface OldHeroSectionProps {
    stats: Array<{ number: string; label: string }>;
}

export default function OldHeroSection({stats}: OldHeroSectionProps) {
  return (
    <section style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=" relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your One-Stop
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent block">
                Marketing Partner
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto"
            >
              We serve infinite business solution
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105 "
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-white/10 backdrop-blur-sm border-t border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
  )
}

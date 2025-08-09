import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
// import { Button } from '@/components/ui/button';
import heroBg from "../assets/infinity-hero-bg.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { number: "250+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Enhanced Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Particle Effects */}
      <div className="particles-bg" />

      {/* Floating Geometric Elements */}

      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(25)].map((_, i) => {
          const left = Math.random() * 100; // random percentage from 0–100
          const top = Math.random() * 100;
          
          // get random colors
          const hax = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
          const color = `#${hax}`;
          console.log(color);
          return (
            <motion.div
            key={i}
            className={`absolute w-2 h-2 opacity-25 rounded-full`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: color,
            }}
            animate={{
              rotate: [0, 360],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 8 + Math.random() * 4, // random duration
              repeat: Infinity,
              ease: "easeInOut",
            }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
            <Sparkles size={20} className="text-infinity-cyan" />
            <span className="text-white font-medium shadow-sm">
              Your Infinite Marketing Partner
            </span>
          </motion.div>

          {/* Main Headline with Better Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
            <span className="text-white block mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Transform Your
            </span>
            <span className="hero-text-gradient block mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Digital Presence
            </span>
            <span className="text-white block text-4xl lg:text-5xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Into Infinite Success
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl mb-10 text-white max-w-4xl mx-auto font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
            We create data-driven marketing strategies that deliver measurable
            results, combining creativity with cutting-edge technology to fuel
            your business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-infinity-cyan to-infinity-blue hover:from-infinity-blue hover:to-infinity-purple text-white px-8 py-6 text-lg font-semibold infinity-glow transition-all duration-300 shadow-xl rounded-full flex items-center space-x-2"
              >
              <span>Get a Free Quote</span>
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
                />
            </Link>

            <Link
              to="/services"
              className="holographic-border bg-white/15 backdrop-blur-md text-white border-white/40 hover:bg-white/25 px-8 py-6 text-lg font-semibold shadow-lg rounded-full"
              >
              <span>Explore Services</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

{/* Stats Section */}
{/* <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl"
  >
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map((stat, index) => (
    <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
    className="text-center"
    >
    <div className="text-3xl lg:text-4xl font-bold text-infinity-cyan mb-2 drop-shadow-sm">
    {stat.number}
    </div>
    <div className="text-white text-sm lg:text-base drop-shadow-sm">{stat.label}</div>
    </motion.div>
  ))}
  </div>
  </motion.div> */}

  // old particle effect
  {/* <div className="absolute inset-0 overflow-hidden z-10">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-7 h-7 border border-infinity-cyan/30 rounded-full"
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + (i % 3) * 20}%`,
        }}
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div> */}
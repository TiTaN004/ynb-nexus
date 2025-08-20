import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Building2,
  Car,
  Utensils,
  Laptop,
  Shirt,
  DollarSign,
  Dumbbell,
  Plane,
  Sparkles,
} from "lucide-react";
import DIL from '../../assets/DIL png.png'
import KALA from '../../assets/KALA.png'
import NGOI from '../../assets/NGOI.png'
import NST from '../../assets/NST png.png'
import balaji from '../../assets/balaji.png'

const IndustriesSection = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: GraduationCap,
      title: "Education",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Building2,
      title: "Real Estate",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      icon: Car,
      title: "Automotive",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Laptop,
      title: "Technology",
      gradient: "from-purple-400 to-violet-500",
    },
    {
      icon: Shirt,
      title: "Fashion",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: DollarSign,
      title: "Finance",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Dumbbell,
      title: "Fitness",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Plane,
      title: "Travel",
      gradient: "from-sky-400 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Beauty",
      gradient: "from-fuchsia-400 to-purple-500",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, we deliver tailored marketing solutions across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="industry-card group"
            >
              <div className="industry-icon-wrapper">
                <industry.icon 
                  size={24}
                  className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-900 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="industry-title">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses of every size, we partner with clients across industries to create impactful solutions that drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 justify-items-center items-center">
          <img src={DIL} className="w-[70%]" alt="company1"  />
          <img src={KALA} className="w-[100%]" alt="company1"  />
          <img src={NGOI} className="w-[100%]" alt="company1"  />
          <img src={NST} className="w-[100%]" alt="company1"  />
          <img src={balaji} className="w-[100%]" alt="company1"  />
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default IndustriesSection;
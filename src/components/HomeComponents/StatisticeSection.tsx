import React from 'react';
import { motion } from 'framer-motion';

const StatisticsSection = () => {
  const stats = [
    {
      number: "100M+",
      label: "Products brought to life",
      description: "Tikuave brings dreams to life with 50,000 daily visualizer users"
    },
    {
      number: "6x",
      label: "Increase in Conversions", 
      description: "Purchasing flowing, walls, print, and rugs more confidently with Tikuave"
    },
    {
      number: "50%",
      label: "Decrease in Product Returns",
      description: "Ensures confident and informed visualization, resulting in fewer product returns"
    },
    {
      number: "3x",
      label: "3x Faster Sales Cycle",
      description: "Accelerate your sales process with smoother and faster customer interactions"
    }
  ];

  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 1.2 }}
      // viewport={{ once: false, margin: "-10%" }}
      style={{
        background: 'linear-gradient(135deg, hsl(220, 45%, 12%) 0%, hsl(217, 60%, 8%) 25%, hsl(225, 70%, 15%) 50%, hsl(217, 60%, 8%) 75%, hsl(220, 45%, 12%) 100%)'
      }}
    >
      {/* Enhanced Deep Blue Background with cosmic gradients */}
      <div className="absolute inset-0">
        {/* Primary deep blue gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, hsl(217, 91%, 25%) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(262, 83%, 25%) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(198, 93%, 20%) 0%, transparent 50%)'
          }}
        ></div>
        
        {/* Overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        ></div>
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-primary-foreground bg-clip-text">
              Our Impact in Numbers
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto">
            Delivering measurable results that drive business growth and customer satisfaction
          </p>
        </motion.div>

        <motion.div
          className="relative"
        >
          {/* Enhanced glass container with deep blue theme */}
          <div 
            className="rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto relative backdrop-blur-xl"
            style={{
              background: 'rgba(25, 50, 120, 0.3)',
              border: '1px solid rgba(100, 150, 255, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 20, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Inner glow */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(66, 165, 245, 0.1) 0%, transparent 70%)'
              }}
            ></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  // initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  // whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  // exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  // transition={{ 
                  //   duration: 0.6, 
                  //   delay: 0.6 + index * 0.1,
                  //   type: "spring",
                  //   stiffness: 100
                  // }}
                  // viewport={{ once: false, margin: "-10%" }}
                  className="text-center group"
                >
                  <div className="mb-4 relative">
                    {/* Enhanced glow effect behind number */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, rgba(66, 165, 245, 0.3) 0%, rgba(139, 69, 219, 0.2) 50%, rgba(34, 197, 244, 0.1) 100%)'
                      }}
                    ></div>
                    
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-infinity-blue via-infinity-cyan to-infinity-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {stat.number}
                    </div>
                    <div className="text-lg lg:text-xl font-semibold text-white/90 mb-3">
                      {stat.label}
                    </div>
                    <div className="text-sm lg:text-base text-blue-100/70 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Decorative elements with blue theme */}
        <motion.div 
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(66, 165, 245, 0.3), rgba(34, 197, 244, 0.2))',
            border: '1px solid rgba(66, 165, 245, 0.4)',
            boxShadow: '0 0 30px rgba(66, 165, 245, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 69, 219, 0.3), rgba(124, 58, 237, 0.2))',
            border: '1px solid rgba(139, 69, 219, 0.4)',
            boxShadow: '0 0 25px rgba(139, 69, 219, 0.3)',
            animationDelay: '1s'
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 244, 0.3), rgba(66, 165, 245, 0.2))',
            border: '1px solid rgba(34, 197, 244, 0.4)',
            boxShadow: '0 0 20px rgba(34, 197, 244, 0.3)',
            animationDelay: '0.5s'
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: false }}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default StatisticsSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette,
  Package,
  Image,
  FileText,
  Building,
  Printer,
  Megaphone,
  MapPin,
  TrendingUp,
  Hash,
  Globe,
  Search,
  Video,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const DarkServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    { icon: Palette, title: 'Brand Identity', description: 'Craft powerful brand identities that resonate with your audience and drive recognition', category: 'Creative' },
    { icon: Package, title: 'Packaging Design', description: 'Eye-catching packaging solutions that captivate customers and boost sales', category: 'Creative' },
    { icon: Image, title: 'Logo Design', description: 'Memorable logos that perfectly capture your brand essence and values', category: 'Creative' },
    { icon: FileText, title: 'Print Design', description: 'Professional brochures and materials that inform, engage, and convert', category: 'Creative' },
    { icon: Building, title: 'Corporate Identity', description: 'Complete corporate identity systems that establish market presence', category: 'Creative' },
    { icon: Printer, title: 'Premium Printing', description: 'High-quality printing services for all your marketing materials', category: 'Traditional' },
    { icon: Megaphone, title: 'Strategic Advertising', description: 'Data-driven advertising campaigns that maximize ROI and reach', category: 'Traditional' },
    { icon: MapPin, title: 'Outdoor Campaigns', description: 'Impactful outdoor advertising that captures attention and drives action', category: 'Traditional' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'Comprehensive digital strategies that accelerate business growth', category: 'Digital' },
    { icon: Hash, title: 'Social Media', description: 'Engaging social media campaigns that build communities and drive engagement', category: 'Digital' },
    { icon: Globe, title: 'Web Development', description: 'Stunning websites that convert visitors into loyal customers', category: 'Digital' },
    { icon: Search, title: 'SEO Optimization', description: 'Advanced SEO strategies that get you found by your ideal customers', category: 'Digital' },
    { icon: Video, title: 'Video Production', description: 'Professional video content that tells your story and drives results', category: 'Production' },
    { icon: Sparkles, title: 'Animation & VFX', description: 'Stunning animations and visual effects that captivate audiences', category: 'Production' },
    { icon: Users, title: 'Public Relations', description: 'Strategic PR campaigns that build reputation and manage communications', category: 'Strategic' },
  ];

  const categories = ['All', 'Creative', 'Digital', 'Traditional', 'Production', 'Strategic'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const servicesPerSlide = 6;
  const totalSlides = Math.ceil(filteredServices.length / servicesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * servicesPerSlide;
    return filteredServices.slice(startIndex, startIndex + servicesPerSlide);
  };

  // Reset slide when category changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="glass-logo px-6 py-2 rounded-full">
              <span className="text-sm font-semibold text-white">WHAT WE DO</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            Marketing Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We provide end-to-end marketing services that transform your brand vision into 
            reality, driving engagement, growth, and lasting customer relationships through 
            innovative strategies and creative excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-pill px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category ? 'active text-white' : 'text-foreground hover:text-white'
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid Container */}
        <div className="relative px-4 md:px-16 lg:px-20">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 nav-control w-14 h-14 rounded-2xl items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} className="text-foreground" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 nav-control w-14 h-14 rounded-2xl items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} className="text-foreground" />
              </motion.button>
            </>
          )}

          {/* Services Grid */}
          <motion.div
            key={`${activeCategory}-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={`${service.title}-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group service-card service-float rounded-3xl p-8 cursor-pointer relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Service Icon */}
                <div className="service-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Category Badge */}
                <div className="service-badge inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {service.category}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronRight size={16} className="text-primary" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-12 space-x-3"
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`slide-indicator w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'active' : ''
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          )}

          {/* Mobile Navigation */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex md:hidden justify-center items-center mt-8 space-x-6"
            >
              <motion.button
                onClick={prevSlide}
                className="nav-control w-12 h-12 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} className="text-foreground" />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground font-medium">
                  {currentSlide + 1}
                </span>
                <div className="w-8 h-0.5 bg-muted rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {totalSlides}
                </span>
              </div>
              
              <motion.button
                onClick={nextSlide}
                className="nav-control w-12 h-12 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} className="text-foreground" />
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Services Count & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-8">
            Displaying {getCurrentServices().length} of {filteredServices.length} services
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
          
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkServicesSection;
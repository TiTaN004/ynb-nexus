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

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    { icon: Palette, title: 'Branding', description: 'Build powerful brand identities that resonate', category: 'Creative' },
    { icon: Package, title: 'Packaging Design', description: 'Eye-catching packaging that sells products', category: 'Creative' },
    { icon: Image, title: 'Logo Designing', description: 'Memorable logos that define your brand', category: 'Creative' },
    { icon: FileText, title: 'Brochure Designing', description: 'Professional materials that inform and engage', category: 'Creative' },
    { icon: Building, title: 'Corporate Designing', description: 'Complete corporate identity solutions', category: 'Creative' },
    { icon: Printer, title: 'Printing', description: 'High-quality printing for all your needs', category: 'Traditional' },
    { icon: Megaphone, title: 'Advertising', description: 'Strategic campaigns that drive results', category: 'Traditional' },
    { icon: MapPin, title: 'Outdoor Publicity', description: 'Outdoor campaigns that capture attention', category: 'Traditional' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'Data-driven digital growth strategies', category: 'Digital' },
    { icon: Hash, title: 'Social Media Marketing', description: 'Engage audiences across all platforms', category: 'Digital' },
    { icon: Globe, title: 'Website Designing', description: 'Beautiful, functional websites that convert', category: 'Digital' },
    { icon: Search, title: 'SEO', description: 'Get found by your ideal customers online', category: 'Digital' },
    { icon: Video, title: 'Video Production', description: 'Professional videos that tell your story', category: 'Production' },
    { icon: Sparkles, title: 'Animation & 3D', description: 'Stunning animations that captivate', category: 'Production' },
    { icon: Users, title: 'Public Relations', description: 'Build relationships and manage reputation', category: 'Strategic' },
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide comprehensive marketing services that help businesses attract, engage, and convert their ideal customers.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid with Slider */}
        <div className="relative px-4 md:px-12 lg:px-16">
          {/* Navigation Arrows - Hidden on mobile, positioned better on desktop */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 lg:-translate-x-8 z-10 bg-white rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <ChevronLeft size={20} className="text-gray-700 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 lg:translate-x-8 z-10 bg-white rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <ChevronRight size={20} className="text-gray-700 lg:w-6 lg:h-6" />
              </button>
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
                <div className=" w-24 h-w-24 rounded-2xl flex items-center justify-left mb-6 relative z-10 ml-5">
                  <service.icon size={28} className="text-gray-950" />
                </div>

                {/* Category Badge */}
                <div className="service-badge inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {service.category}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-background mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-background/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  {/* <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronRight size={16} className="text-primary" />
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-blue-900'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mobile Navigation - Show arrows below on mobile */}
          {totalSlides > 1 && (
            <div className="flex md:hidden justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <span className="text-sm text-gray-500 px-4">
                {currentSlide + 1} of {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          )}
        </div>

        {/* Services Count */}
        {/* <div className="text-center mt-8">
          <p className="text-gray-500">
            Showing {getCurrentServices().length} of {filteredServices.length} services
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
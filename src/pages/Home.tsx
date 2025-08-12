import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Megaphone,
  Search,
  Hash,
  Paintbrush,
  Video,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Target,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Car,
  Utensils,
} from "lucide-react";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import StatisticsSection from "../components/HomeComponents/StatisticeSection";
import PortfolioComponent from "../components/HomeComponents/PortfolioComponent";
import TestimonialsCarousel from "../components/HomeComponents/TestimonialsCarousel";
import IndustriesSection from "../components/HomeComponents/IndustriesSection";
import CtaSection from "../components/Common/CtaSection";

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that boost ROI",
    },
    {
      icon: Hash,
      title: "Social Media Marketing",
      description: "Engage audiences across all platforms",
    },
    {
      icon: Paintbrush,
      title: "Branding & Design",
      description: "Create memorable brand identities",
    },
    {
      icon: Search,
      title: "SEO & Paid Ads",
      description: "Get found by your ideal customers",
    },
    {
      icon: Megaphone,
      title: "Traditional Marketing",
      description: "Offline solutions that work",
    },
    {
      icon: Video,
      title: "Video & Content Production",
      description: "High-quality content that converts",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "360° Marketing Solutions",
      description: "Complete marketing ecosystem",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Marketers & creatives who deliver",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Strategies",
      description: "Results backed by analytics",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistent success stories",
    },
  ];

  const stats = [
    { number: "250+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection />

      {/* New Services Section */}
      <ServicesSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* statistics section */}
      <StatisticsSection />

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-ld md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another marketing agency. We're your strategic
              partners in growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 service-icon rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioComponent />
            
      <TestimonialsCarousel />

      {/* Hero Section */}
      <CtaSection />
    </div>
  );
};

export default Home;

{
  /* Featured Testimonial */
}
{
  /* <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-8">
              "YNB Nexus transformed our marketing approach completely. Sales tripled within 6 months, and our brand recognition soared. They're not just service providers – they're true partners in our success."
            </blockquote>
            <cite className="text-lg">
              <strong>Sarah Johnson</strong>
              <span className="block text-blue-200">CEO, Fashion Forward Inc.</span>
            </cite>
          </motion.div>
        </div>
      </section> */
}

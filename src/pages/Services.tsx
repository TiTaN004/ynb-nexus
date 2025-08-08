import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Hash, 
  Paintbrush, 
  Search, 
  Megaphone, 
  Video,
  Mail,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Drive leads and boost ROI with performance-based digital marketing strategies.',
      features: ['Google Ads & PPC', 'Performance Analytics', 'Conversion Optimization', 'Lead Generation'],
      link: '/services/digital-marketing'
    },
    {
      icon: Hash,
      title: 'Social Media Marketing',
      description: 'Engage your audience with targeted social media strategies across all platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Social Campaigns', 'Influencer Partnerships'],
      link: '/services/social-media'
    },
    {
      icon: Paintbrush,
      title: 'Branding & Design',
      description: 'Build a memorable brand identity with custom logos, brand guides, and visual content.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Packaging Design'],
      link: '/services/branding-design'
    },
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Improve your search rankings and get found by the right audience.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
      link: '/services/seo-sem'
    },
    {
      icon: Megaphone,
      title: 'Traditional Marketing',
      description: 'Offline solutions like print ads, billboards, radio spots, and more.',
      features: ['Print Advertising', 'Billboard Campaigns', 'Radio & TV Spots', 'Direct Mail'],
      link: '/services/traditional-marketing'
    },
    {
      icon: Video,
      title: 'Video & Content Production',
      description: 'Create high-quality video ads, product demos, and branded content.',
      features: ['Video Production', 'Content Creation', 'Animation', 'Photography'],
      link: '/services/video-production'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build relationships and drive conversions with targeted email campaigns.',
      features: ['Campaign Design', 'Automation', 'Segmentation', 'Analytics'],
      link: '/services'
    },
    {
      icon: Calendar,
      title: 'Event Marketing',
      description: 'Plan and execute memorable events that showcase your brand.',
      features: ['Event Planning', 'Promotion Strategy', 'Venue Management', 'Follow-up Campaigns'],
      link: '/services'
    },
    {
      icon: Star,
      title: 'Influencer Marketing',
      description: 'Partner with influencers to expand your reach and credibility.',
      features: ['Influencer Matching', 'Campaign Management', 'Content Oversight', 'ROI Tracking'],
      link: '/services'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              From SEO to billboards – we cover it all with comprehensive marketing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive marketing services that help businesses attract, engage, and convert their ideal customers across all channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <Link
                    to={service.link}
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your marketing success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'We develop a customized marketing strategy for your needs' },
              { step: '03', title: 'Execute', description: 'We implement campaigns across chosen channels' },
              { step: '04', title: 'Optimize', description: 'We monitor performance and optimize for better results' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss which services are right for your business and create a custom strategy.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
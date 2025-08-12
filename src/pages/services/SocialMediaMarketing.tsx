import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hash, Users, Heart, BarChart3, Camera, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import CtaSection from '../../components/Common/CtaSection';

const SocialMediaMarketing = () => {
  const platforms = [
    { name: 'Facebook', users: '2.9B+', icon: Users },
    { name: 'Instagram', users: '2.0B+', icon: Camera },
    { name: 'LinkedIn', users: '900M+', icon: MessageCircle },
    { name: 'TikTok', users: '1.0B+', icon: Heart },
  ];

  const services = [
    {
      icon: Users,
      title: 'Content Strategy',
      description: 'Develop engaging content calendars that resonate with your audience and drive engagement.'
    },
    {
      icon: MessageCircle,
      title: 'Community Management',
      description: 'Build and nurture online communities through active engagement and customer support.'
    },
    {
      icon: BarChart3,
      title: 'Paid Social Campaigns',
      description: 'Targeted advertising campaigns that reach your ideal customers and drive conversions.'
    },
    {
      icon: Heart,
      title: 'Influencer Partnerships',
      description: 'Connect with relevant influencers to expand your reach and build credibility.'
    }
  ];

  const benefits = [
    'Increased brand awareness and visibility',
    'Higher engagement with target audience',
    'Improved customer loyalty and retention',
    'Enhanced customer support and communication',
    'Greater website traffic and lead generation',
    'Competitive advantage in your industry'
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <Hash size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Social Media Marketing</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Engage your audience with targeted social media strategies on platforms like Facebook, Instagram, LinkedIn, and TikTok.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Master Every Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Facebook to TikTok, we know how to create content that resonates with each platform's unique audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <platform.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.users} users</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Social Media Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management that builds communities and drives business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Social Media Marketing Works</h2>
              <p className="text-lg text-gray-700 mb-8">
                Social media isn't just about posting content – it's about building relationships, 
                creating communities, and turning followers into customers.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social media engagement"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Social Media Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from our social media campaigns across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">400%</div>
              <div className="text-blue-100 mb-4">Average Engagement Increase</div>
              <p className="text-sm text-blue-200">Across all client accounts in first 6 months</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2.5M+</div>
              <div className="text-blue-100 mb-4">Monthly Impressions Generated</div>
              <p className="text-sm text-blue-200">Combined reach across all managed accounts</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">150%</div>
              <div className="text-blue-100 mb-4">Follower Growth Rate</div>
              <p className="text-sm text-blue-200">Quality followers who engage with content</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default SocialMediaMarketing;
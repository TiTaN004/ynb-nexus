import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Camera, Film, Play, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

const VideoProduction = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video creation from concept to final edit, including scripting and post-production.'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Engaging video content for social media, websites, and marketing campaigns.'
    },
    {
      icon: Film,
      title: 'Animation',
      description: 'Eye-catching animated videos that explain complex concepts simply and memorably.'
    },
    {
      icon: Play,
      title: 'Photography',
      description: 'Professional photography for products, events, and brand storytelling needs.'
    }
  ];

  const videoTypes = [
    {
      title: 'Product Demos',
      description: 'Showcase your products in action and highlight key features and benefits.',
      icon: Play
    },
    {
      title: 'Brand Stories',
      description: 'Tell your company story and connect emotionally with your audience.',
      icon: Film
    },
    {
      title: 'Social Media Content',
      description: 'Short-form videos optimized for different social media platforms.',
      icon: Users
    },
    {
      title: 'Training Videos',
      description: 'Educational content that helps customers and employees learn effectively.',
      icon: Zap
    }
  ];

  const benefits = [
    'Increase engagement rates by up to 1200%',
    'Improve website conversion rates significantly',
    'Boost social media reach and shares',
    'Enhance brand trust and credibility',
    'Explain complex products or services clearly',
    'Create memorable brand experiences'
  ];

  const process = [
    { step: '01', title: 'Strategy & Planning', description: 'Define goals, audience, and creative approach for your video' },
    { step: '02', title: 'Pre-Production', description: 'Script writing, storyboarding, and planning all production details' },
    { step: '03', title: 'Production', description: 'Professional filming with high-quality equipment and experienced crew' },
    { step: '04', title: 'Post-Production', description: 'Editing, color correction, sound design, and final delivery' }
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
              <Video size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Video & Content Production</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Create high-quality video ads, product demos, interviews, and branded content that tell your story and convert viewers into customers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Power of Video Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Video content consistently outperforms other formats across all digital platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '87%', description: 'of marketers use video content' },
              { stat: '88%', description: 'increased dwell time on websites with video' },
              { stat: '64%', description: 'more likely to buy after watching product video' },
              { stat: '1200%', description: 'more shares than text and image posts combined' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-900 mb-4">{item.stat}</div>
                <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Video Production Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of video production to bring your vision to life.
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Video Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Videos We Create</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business has unique video needs. We create content that aligns with your goals and resonates with your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Video Works</h2>
              <p className="text-lg text-gray-700 mb-8">
                Video content creates emotional connections, explains complex concepts clearly, and drives action like no other medium. 
                It's the most engaging way to tell your brand story and showcase your products or services.
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
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Video production setup"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Production Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that ensures your video project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
            <h2 className="text-4xl font-bold mb-4">Video Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our video productions consistently deliver exceptional results for our clients across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5M+</div>
              <div className="text-blue-100 mb-4">Video Views Generated</div>
              <p className="text-sm text-blue-200">Across all client video content</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-blue-100 mb-4">Average Engagement Increase</div>
              <p className="text-sm text-blue-200">Compared to non-video content</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">80%</div>
              <div className="text-blue-100 mb-4">Conversion Rate Improvement</div>
              <p className="text-sm text-blue-200">On pages with product videos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default VideoProduction;
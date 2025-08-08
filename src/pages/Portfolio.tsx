import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'Fashion Brand Transformation',
      client: 'Fashion Forward Inc.',
      industry: 'E-commerce Fashion',
      challenge: 'Increase online sales and brand awareness',
      strategy: 'Facebook & Google Ads + Influencer Campaign + Email Marketing',
      results: [
        { metric: '250%', description: 'Increase in sales' },
        { metric: '180%', description: 'Growth in website traffic' },
        { metric: '320%', description: 'Social media engagement' }
      ],
      timeline: '3 months',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Digital Marketing', 'Social Media', 'E-commerce']
    },
    {
      title: 'Tech Startup Launch',
      client: 'InnovateTech Solutions',
      industry: 'Technology',
      challenge: 'Build brand awareness from zero and generate leads',
      strategy: 'Full branding + video production + digital launch campaign',
      results: [
        { metric: '10K', description: 'Social media followers' },
        { metric: '500+', description: 'Qualified leads' },
        { metric: '85%', description: 'Brand recognition increase' }
      ],
      timeline: '2 months',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Video Production', 'Lead Generation']
    },
    {
      title: 'Restaurant Chain Expansion',
      client: 'Gourmet Bistro Group',
      industry: 'Food & Hospitality',
      challenge: 'Expand to new markets and increase foot traffic',
      strategy: 'Local SEO + Traditional advertising + Event marketing',
      results: [
        { metric: '400%', description: 'Increase in local searches' },
        { metric: '150%', description: 'More reservations' },
        { metric: '5', description: 'New locations opened' }
      ],
      timeline: '6 months',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Traditional Marketing', 'Event Marketing']
    },
    {
      title: 'Healthcare Practice Growth',
      client: 'WellCare Medical Center',
      industry: 'Healthcare',
      challenge: 'Increase patient acquisition and online reputation',
      strategy: 'SEO optimization + Reputation management + Content marketing',
      results: [
        { metric: '300%', description: 'Increase in online appointments' },
        { metric: '4.9★', description: 'Average review rating' },
        { metric: '200%', description: 'Website organic traffic' }
      ],
      timeline: '4 months',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Reputation Management', 'Content Marketing']
    }
  ];

  const stats = [
    { icon: TrendingUp, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '250+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' },
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Real strategies. Real results. Explore success stories from our satisfied clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Speaks Volumes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers don't lie. Here's what we've achieved for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into how we've helped businesses transform their marketing and achieve remarkable growth.
            </p>
          </motion.div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-blue-900 font-medium mb-4">{study.client} • {study.industry}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Strategy:</h4>
                        <p className="text-gray-600">{study.strategy}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Timeline:</h4>
                        <p className="text-gray-600">{study.timeline}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors group">
                      View Full Case Study
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
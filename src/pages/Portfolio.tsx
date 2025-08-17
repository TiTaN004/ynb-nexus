import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Clock, Target } from 'lucide-react';
import CtaSection from '../components/Common/CtaSection';
import Hero from '../components/Common/Hero';
import { background } from '../assets/Background/bgExport';

const { portfolio } = background

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
    <div className="">
      {/* Hero Section */}
      <Hero title="Our Portfolio" img={portfolio} description="Real strategies. Real results. Explore success stories from our satisfied clients." />

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
                <div className="w-20 h-20 service-icon rounded-full flex items-center justify-center mx-auto mb-4">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-portfolio-surface rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-smooth overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[600px] ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-overlay z-10"></div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-smooth group-hover:scale-105"
                    />
                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {study.timeline}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-portfolio-tag text-portfolio-tag-foreground rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title and Client */}
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Users className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 text-lg">
                          Challenge
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 text-lg">
                          Strategy
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.strategy}
                        </p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className={`text-center p-4 bg-portfolio-metric rounded-xl hover:bg-primary/5 transition-colors duration-smooth 
                           ${
                             resultIndex === 2 ? "col-span-2" : ""
                           } sm:col-span-1`}
                        >
                          <div className="text-2xl font-bold text-portfolio-metric-foreground mb-2">
                            {result.metric}
                          </div>
                          <div
                            style={{ overflowWrap: "anywhere" }}
                            className="sm:text-sm md:text-sm text-muted-foreground leading-tight"
                          >
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA button */}
                    {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto group/btn bg-gradient-primary hover:shadow-primary transition-all duration-smooth">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-smooth" />
                    </button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Portfolio;
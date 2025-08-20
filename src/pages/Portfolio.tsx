import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Clock, Target } from 'lucide-react';
import CtaSection from '../components/Common/CtaSection';
import Hero from '../components/Common/Hero';
import { background } from '../assets/Background/bgExport';
import DIL from '../assets/DIL png.png'
import KALA from '../assets/KALA.png'
import NGOI from '../assets/NGOI.png'
import NST from '../assets/NST png.png'
import balaji from '../assets/balaji.png'
import stone from '../assets/stone.webp'
import steel from '../assets/steel.webp'


const { portfolio } = background

const Portfolio = () => {
const caseStudies = [
  {
    title: 'Brand Identity & Market Reach',
    client: 'DIL Decoded Innovation LLP',
    logo: DIL,
    industry: 'Business Consulting & Innovation',
    challenge: 'Build a strong digital presence to attract enterprise clients',
    strategy: 'Complete brand revamp + LinkedIn campaigns + Thought-leadership content',
    results: [
      { metric: '200%', description: 'Increase in B2B inquiries' },
      { metric: '95%', description: 'Positive engagement on LinkedIn posts' },
      { metric: '3X', description: 'Growth in client acquisition pipeline' }
    ],
    timeline: '5 months',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'B2B Marketing', 'Content Strategy']
  },
  {
    title: 'Digital Showcase for Natural Stone',
    client: 'KALA Stone',
    logo: KALA,
    industry: 'Natural Stone & Construction Materials',
    challenge: 'Expand reach to architects and interior designers globally',
    strategy: 'High-quality product photography + SEO optimization + Catalog website',
    results: [
      { metric: '150%', description: 'Increase in website traffic' },
      { metric: '60+', description: 'New B2B partnerships with dealers and designers' },
      { metric: '80%', description: 'More international inquiries received' }
    ],
    timeline: '4 months',
    image: stone,
    tags: ['Website Development', 'SEO', 'Product Marketing']
  },
  {
    title: 'Corporate Growth & Visibility',
    client: 'Nilkanth Group of Industries',
    logo: NGOI,
    industry: 'Manufacturing & Industrial',
    challenge: 'Strengthen corporate visibility and investor confidence',
    strategy: 'Corporate website + Investor pitch design + PR coverage',
    results: [
      { metric: '2X', description: 'Growth in investor interest' },
      { metric: '500+', description: 'Leads generated from digital campaigns' },
      { metric: '40%', description: 'Increase in brand search volume' }
    ],
    timeline: '6 months',
    image: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Corporate Branding', 'PR Strategy', 'Digital Presence']
  },
  {
    title: 'Digital Transformation for Tiles Business',
    client: 'Balaji Tiles',
    logo: balaji,
    industry: 'Ceramics & Construction',
    challenge: 'Compete with larger brands and grow dealer network',
    strategy: 'Social media campaigns + Catalog design + WhatsApp marketing',
    results: [
      { metric: '120%', description: 'Increase in distributor engagement' },
      { metric: '75%', description: 'Boost in dealer inquiries' },
      { metric: '3X', description: 'Growth in product sample requests' }
    ],
    timeline: '3 months',
    image: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Social Media', 'B2B Marketing', 'WhatsApp Campaigns']
  },
  {
  title: 'Stronger Digital Presence for Steel Industry',
  client: 'Navrang Steel',
  logo: NST,
  industry: 'Steel & Metal Manufacturing',
  challenge: 'Enhance brand credibility and reach new B2B buyers online',
  strategy: 'Corporate website redesign + SEO optimization + LinkedIn outreach',
  results: [
    { metric: '2.5X', description: 'Increase in qualified B2B inquiries' },
    { metric: '70%', description: 'Improvement in search engine visibility' },
    { metric: '150+', description: 'New dealer and distributor connections' }
  ],
  timeline: '5 months',
  image: steel,
  tags: ['Website Development', 'SEO', 'B2B Marketing']
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
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-500">
                  <stat.icon size={32} className="text-gray-900" />
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
                    <div className="mb-6 flex justify-evenly items-center flex-col md:flex-row">
                      <img src={study.logo} alt="logo" className="w-[15%] min-w-[30%] md:min-w-[15%]" />
                      <div>
                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-3">
                          {study.title}
                        </h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium">
                          <Users className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
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
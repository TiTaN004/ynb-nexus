import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, TrendingUp, Coffee, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Career development programs and skill advancement'
    },
    {
      icon: Coffee,
      title: 'Great Environment',
      description: 'Modern office space with flexible work arrangements'
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Work with passionate, creative professionals'
    }
  ];

  const openings = [
    {
      title: 'Social Media Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'New York, NY / Remote',
      description: 'Lead social media strategy and content creation across multiple platforms. Develop engaging campaigns that drive brand awareness and community growth.',
      requirements: [
        '3+ years of social media management experience',
        'Strong understanding of all major social platforms',
        'Creative thinking and excellent writing skills',
        'Experience with social media analytics tools'
      ]
    },
    {
      title: 'Graphic Designer',
      department: 'Creative',
      type: 'Full-time',
      location: 'New York, NY',
      description: 'Create stunning visual designs for digital and print campaigns. Work closely with our creative team to develop brand identities and marketing materials.',
      requirements: [
        'Bachelor\'s degree in Graphic Design or related field',
        'Proficiency in Adobe Creative Suite',
        '2+ years of design experience',
        'Strong portfolio showcasing diverse design work'
      ]
    },
    {
      title: 'SEO Specialist',
      department: 'Digital Marketing',
      type: 'Full-time',
      location: 'Remote',
      description: 'Optimize websites and content to improve search engine rankings. Conduct keyword research and implement SEO best practices.',
      requirements: [
        'Proven experience in SEO and SEM',
        'Knowledge of Google Analytics and SEO tools',
        'Understanding of technical SEO',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      title: 'Content Marketing Intern',
      department: 'Marketing',
      type: 'Internship',
      location: 'New York, NY',
      description: 'Support our content marketing efforts by creating blog posts, social media content, and marketing copy. Great opportunity for students or recent graduates.',
      requirements: [
        'Currently pursuing or recently completed degree in Marketing or Communications',
        'Excellent writing and communication skills',
        'Basic understanding of digital marketing',
        'Enthusiasm for learning and growth'
      ]
    }
  ];

  const values = [
    { title: 'Creativity', description: 'We encourage innovative thinking and creative solutions' },
    { title: 'Collaboration', description: 'Teamwork makes the dream work - we succeed together' },
    { title: 'Growth', description: 'Continuous learning and professional development' },
    { title: 'Impact', description: 'Make a real difference in our clients\' success' }
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Work with a passionate and creative marketing team that's shaping the future of digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why YNB Nexus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values creativity, growth, and making a real impact for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our work culture and how we collaborate every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our available positions and find the perfect role to grow your career.
            </p>
          </motion.div>

          <div className="space-y-8">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="lg:flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      <span>Apply Now</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Future Team</h2>
            <p className="text-xl text-gray-600">
              Join a diverse group of creative professionals who are passionate about marketing excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="YNB Nexus team working together"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Don't See the Perfect Role?</h2>
            <p className="text-xl text-blue-100 mb-10">
              We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </Link>
              <a
                href="mailto:careers@ynbnexus.com"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Send Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
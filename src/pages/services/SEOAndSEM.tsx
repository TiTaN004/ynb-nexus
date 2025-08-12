import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from '../../assets/seo-banner.jpg';
import { Search, TrendingUp, Target, BarChart3, MapPin, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import CtaSection from '../../components/Common/CtaSection';

const SEOAndSEM = () => {
  const services = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Identify high-value keywords that your target audience is searching for.'
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description: 'Optimize your website content, meta tags, and structure for better rankings.'
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Improve site speed, mobile responsiveness, and technical performance.'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers to your business.'
    }
  ];

  const benefits = [
    'Increase organic website traffic by 150-300%',
    'Improve search engine rankings for target keywords',
    'Reduce customer acquisition costs',
    'Build long-term, sustainable online visibility',
    'Outrank competitors in search results',
    'Generate high-quality leads from search traffic'
  ];

  const seoStats = [
    { stat: '68%', description: 'of online experiences begin with a search engine' },
    { stat: '53%', description: 'of website traffic comes from organic search' },
    { stat: '10x', description: 'more traffic to websites on the first page of Google' },
    { stat: '75%', description: 'of users never scroll past the first page of results' }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">SEO & SEM</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Improve your search rankings and get found by the right audience through organic and paid search strategies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get SEO Audit</span>
              <ArrowRight size={20} />
            </Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why SEO Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search engines are the primary way people discover new businesses and make purchasing decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoStats.map((item, index) => (
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive search engine optimization that improves your visibility and drives qualified traffic.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SEO Benefits for Your Business</h2>
              <p className="text-lg text-gray-700 mb-8">
                Search engine optimization provides long-term value by building organic visibility that compounds over time, 
                unlike paid advertising that stops working when you stop paying.
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
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO analytics dashboard"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to improving your search rankings and online visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'SEO Audit', description: 'Comprehensive analysis of your current SEO performance' },
              { step: '02', title: 'Keyword Strategy', description: 'Research and target high-value keywords for your business' },
              { step: '03', title: 'Optimization', description: 'Implement on-page and technical SEO improvements' },
              { step: '04', title: 'Monitor & Refine', description: 'Track rankings and continuously optimize for better results' },
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
            <h2 className="text-4xl font-bold mb-4">SEO Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from our SEO campaigns across different industries and business sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-blue-100 mb-4">Average Traffic Increase</div>
              <p className="text-sm text-blue-200">Organic website traffic growth within 6 months</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">#1</div>
              <div className="text-blue-100 mb-4">First Page Rankings</div>
              <p className="text-sm text-blue-200">85% of target keywords ranking on page 1</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">200%</div>
              <div className="text-blue-100 mb-4">Lead Generation Increase</div>
              <p className="text-sm text-blue-200">More qualified leads from search traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default SEOAndSEM;
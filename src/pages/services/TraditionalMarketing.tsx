import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Megaphone, FileText, Radio, MapPin, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const TraditionalMarketing = () => {
  const services = [
    {
      icon: FileText,
      title: 'Print Advertising',
      description: 'Eye-catching newspaper, magazine, and direct mail campaigns that drive response.'
    },
    {
      icon: MapPin,
      title: 'Billboard Campaigns',
      description: 'Strategic outdoor advertising that maximizes visibility and brand awareness.'
    },
    {
      icon: Radio,
      title: 'Radio & TV Spots',
      description: 'Compelling audio and video advertisements that reach mass audiences.'
    },
    {
      icon: Users,
      title: 'Direct Mail',
      description: 'Targeted postal campaigns that deliver personalized messages directly to prospects.'
    }
  ];

  const benefits = [
    'Reach audiences who may not be online',
    'Build trust through tangible marketing materials',
    'Create lasting impressions with physical presence',
    'Target specific geographic areas effectively',
    'Complement digital marketing for maximum impact',
    'Stand out in an increasingly digital world'
  ];

  const mediaTypes = [
    {
      title: 'Print Media',
      description: 'Newspapers, magazines, brochures, and flyers',
      reach: 'High credibility and detailed messaging'
    },
    {
      title: 'Outdoor Advertising',
      description: 'Billboards, transit ads, and signage',
      reach: 'Maximum visibility and brand awareness'
    },
    {
      title: 'Broadcast Media',
      description: 'Television and radio advertisements',
      reach: 'Wide audience reach and emotional connection'
    },
    {
      title: 'Direct Marketing',
      description: 'Mail campaigns and promotional materials',
      reach: 'Personalized targeting and measurable response'
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
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <Megaphone size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Traditional Marketing</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Offline solutions like print ads, billboards, radio spots, flyers, and more that create tangible connections with your audience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Plan Your Campaign</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Traditional Marketing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Traditional Marketing Still Works</h2>
              <p className="text-lg text-gray-700 mb-8">
                In our digital age, traditional marketing offers unique advantages by creating tangible experiences 
                and reaching audiences through trusted, established channels that digital can't replicate.
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
                src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional marketing materials"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Traditional Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From print to broadcast, we create compelling offline campaigns that complement your digital strategy.
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

      {/* Media Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional Media Channels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each traditional media channel offers unique advantages for reaching and engaging your target audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaTypes.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{media.title}</h3>
                <p className="text-gray-600 mb-4">{media.description}</p>
                <div className="text-sm text-blue-900 font-medium">{media.reach}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional marketing works best when integrated with digital strategies, creating a cohesive brand experience across all touchpoints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Consistency</h3>
              <p className="text-gray-600">Maintain consistent messaging and visual identity across all traditional media channels.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Channel Synergy</h3>
              <p className="text-gray-600">Combine traditional and digital efforts to amplify your message and increase reach.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h3>
              <p className="text-gray-600">Track traditional marketing effectiveness through unique codes, landing pages, and surveys.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Traditional Marketing Success</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our traditional marketing campaigns deliver measurable results and lasting brand impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-blue-100 mb-4">Brand Recall Increase</div>
              <p className="text-sm text-blue-200">From integrated traditional campaigns</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">40%</div>
              <div className="text-blue-100 mb-4">Response Rate Improvement</div>
              <p className="text-sm text-blue-200">Compared to digital-only campaigns</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
              <div className="text-blue-100 mb-4">Local Market Penetration</div>
              <p className="text-sm text-blue-200">In targeted geographic areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Go Beyond Digital?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's create a traditional marketing strategy that complements your digital efforts and maximizes your brand impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Plan Traditional Campaign</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-900 hover:text-blue-900 transition-all duration-300"
              >
                View Campaign Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalMarketing;
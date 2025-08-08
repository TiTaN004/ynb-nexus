import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Paintbrush, Palette, Eye, Package, FileText, ArrowRight, CheckCircle } from 'lucide-react';

const BrandingDesign = () => {
  const services = [
    {
      icon: Paintbrush,
      title: 'Logo Design',
      description: 'Create memorable logos that capture your brand essence and stand out in the market.'
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Develop comprehensive brand positioning and messaging that resonates with your audience.'
    },
    {
      icon: Eye,
      title: 'Visual Identity',
      description: 'Design cohesive visual systems including colors, typography, and graphic elements.'
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Create packaging that attracts customers and communicates your brand values effectively.'
    }
  ];

  const deliverables = [
    'Custom logo design with multiple variations',
    'Complete brand style guide and guidelines',
    'Color palette and typography selection',
    'Business card and stationery design',
    'Social media templates and assets',
    'Brand application examples and mockups'
  ];

  const industries = [
    { name: 'Technology', description: 'Modern, innovative brand identities' },
    { name: 'Healthcare', description: 'Trustworthy, professional designs' },
    { name: 'Fashion', description: 'Stylish, trend-forward branding' },
    { name: 'Food & Beverage', description: 'Appetizing, memorable visuals' },
    { name: 'Real Estate', description: 'Sophisticated, reliable imagery' },
    { name: 'Education', description: 'Approachable, inspiring designs' }
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
              <Paintbrush size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Branding & Design</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build a memorable brand identity with custom logos, brand guides, packaging design, and visual content that tells your story.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Brand</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branding Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we create brand identities that capture attention and drive recognition.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures your brand perfectly represents your vision and values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, audience, and competitors' },
              { step: '02', title: 'Strategy', description: 'Developing brand positioning and creative direction' },
              { step: '03', title: 'Design', description: 'Creating logo concepts and visual identity elements' },
              { step: '04', title: 'Refinement', description: 'Perfecting designs based on your feedback' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
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

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Receive</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our comprehensive branding packages include everything you need to launch and maintain a consistent brand identity across all touchpoints.
              </p>
              <ul className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
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
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Brand design materials"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every industry has unique branding needs. We understand the nuances and create designs that resonate with your specific market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Brand Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Strong branding creates lasting impressions and drives business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-blue-100 mb-4">Brand Recognition Increase</div>
              <p className="text-sm text-blue-200">Average improvement in brand recall after rebranding</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-blue-100 mb-4">Brands Created</div>
              <p className="text-sm text-blue-200">Successful brand identities launched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-100 mb-4">Client Satisfaction</div>
              <p className="text-sm text-blue-200">Clients who love their new brand identity</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Brand?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's create a brand identity that captures your essence and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Your Brand Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-900 hover:text-blue-900 transition-all duration-300"
              >
                View Brand Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandingDesign;
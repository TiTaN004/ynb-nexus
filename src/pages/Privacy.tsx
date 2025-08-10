import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal information you provide (name, email, phone number)',
        'Usage data and website analytics',
        'Communication preferences',
        'Business information for service delivery'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our marketing services',
        'Communicate about projects and updates',
        'Send relevant marketing content (with consent)',
        'Analyze website performance and user experience'
      ]
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: [
        'We never sell your personal information',
        'Limited sharing with trusted service providers',
        'Legal compliance when required by law',
        'Business transfers (with advance notice)'
      ]
    },
    {
      icon: Users,
      title: 'Your Rights',
      content: [
        'Access and update your personal information',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Data portability upon request'
      ]
    }
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trust and privacy matter. Learn how we protect and use your information.
            </p>
            <div className="mt-8 text-sm text-blue-200">
              Last updated: January 1, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-gray-800 mb-0">
                At YNB Nexus, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our services or visit our website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key points about how we handle your information and protect your privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                  <section.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Privacy Policy</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Information Collection</h3>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you contact us for services, 
                  subscribe to our newsletter, or fill out a form on our website. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information (company name, industry, website)</li>
                  <li>Project details and marketing goals</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Information</h3>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Delivering marketing services and support</li>
                  <li>Communicating with you about projects and updates</li>
                  <li>Sending relevant marketing content (with your consent)</li>
                  <li>Analyzing and improving our website and services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking</h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h3>
                <p className="text-gray-700 mb-4">
                  We may use trusted third-party services to help us provide our services. These partners 
                  are bound by confidentiality agreements and are prohibited from using your information 
                  for any other purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@ynbnexus.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 123-456-7890</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Business Avenue, Suite 100, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Privacy;
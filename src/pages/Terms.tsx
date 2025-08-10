import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Service Agreement',
      description: 'Terms governing our marketing services and client relationships'
    },
    {
      icon: Scale,
      title: 'Rights & Responsibilities',
      description: 'Your rights as a client and our mutual responsibilities'
    },
    {
      icon: Shield,
      title: 'Limitation of Liability',
      description: 'Understanding liability limits and service guarantees'
    },
    {
      icon: AlertCircle,
      title: 'Important Notices',
      description: 'Key legal notices and policy updates'
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Read our terms and conditions for using our services and website.
            </p>
            <div className="mt-8 text-sm text-blue-200">
              Last updated: January 1, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
                Welcome to YNB Nexus. These Terms of Service ("Terms") govern your use of our website and services. 
                By using our services, you agree to these terms. Please read them carefully.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important aspects of our terms and conditions explained simply.
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
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Terms of Service</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">
                  By accessing and using YNB Nexus services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h3>
                <p className="text-gray-700 mb-4">
                  YNB Nexus provides comprehensive marketing services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Digital marketing campaigns</li>
                  <li>Social media management</li>
                  <li>Branding and design services</li>
                  <li>SEO and content marketing</li>
                  <li>Traditional marketing solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h3>
                <p className="text-gray-700 mb-4">As our client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Respond promptly to requests for feedback or approval</li>
                  <li>Make timely payments according to agreed terms</li>
                  <li>Provide necessary access to accounts and platforms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h3>
                <p className="text-gray-700 mb-4">
                  Payment terms are specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for overdue accounts</li>
                  <li>Refunds are subject to individual agreement terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  Upon full payment, clients receive rights to marketing materials created specifically for their campaign. 
                  YNB Nexus retains rights to methodologies, processes, and general marketing strategies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  While we strive for excellence, marketing results can vary based on numerous factors. 
                  Our liability is limited to the amount paid for services. We do not guarantee specific 
                  results or outcomes from marketing campaigns.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h3>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with written notice as specified in individual agreements. 
                  Upon termination, final invoices become due and all work products are delivered.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Confidentiality</h3>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality of client information and business details. 
                  Our privacy practices are detailed in our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website 
                  with an updated effective date. Continued use of our services constitutes acceptance of revised terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h3>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@ynbnexus.com</p>
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

export default Terms;
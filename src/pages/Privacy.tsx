import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users } from 'lucide-react';
import CtaSection from '../components/Common/CtaSection';
import Hero from '../components/Common/Hero';

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
      <Hero title="Privacy Policy" description="Your trust and privacy matter. Learn how we protect and use your information." />

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
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}

      {/* Detailed Policy */}
      <section className="">
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
                  We may collect personal information that you voluntarily provide to us when you interact with our website. This may include your name, email address, phone number, and any other information you provide when filling out forms on our site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Information</h3>
                <p className="text-gray-700 mb-4">
                 The personal information we collect may be used to respond to your inquiries, provide you with requested services, process transactions, and improve our website's user experience. We may also use your information to send you promotional emails about our services or updates about our company, but you will always have the option to opt-out of such communications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h3>
                <p className="text-gray-700 mb-4">
                 We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or conducting our business, as long as they agree to keep your information confidential.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h3>
                <p className="text-gray-700 mb-4">
                  Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your computer's hard drive that help us analyze web traffic or recognize you when you visit our site. You can choose to accept or decline cookies through your browser settings, but this may limit some functionalities of the website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h3>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites that are not operated by us. We have no control over the content, privacy policies, or practices of these websites and encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h3>
                <p className="text-gray-700 mb-4">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will promptly delete such information from our records.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to this Policy</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on this page, and your continued use of our website after such modifications will constitute your acknowledgment of the modified policy.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Area of Jurisdiction</h3>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy and any disputes arising out of your use of our website shall be governed by the laws of Rajkot, Gujarat, India.
                </p>
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about our Privacy Policy, please contact us at hello@ynbnexus.in.
                </p>
                <p className="text-gray-500 mb-4">
                  Last updated: 16 August, 2025
                </p>
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
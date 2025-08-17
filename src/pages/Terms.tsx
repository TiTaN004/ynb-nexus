import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertCircle } from "lucide-react";
import CtaSection from "../components/Common/CtaSection";
import Hero from "../components/Common/Hero";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Service Agreement",
      description:
        "Terms governing our marketing services and client relationships",
    },
    {
      icon: Scale,
      title: "Rights & Responsibilities",
      description: "Your rights as a client and our mutual responsibilities",
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      description: "Understanding liability limits and service guarantees",
    },
    {
      icon: AlertCircle,
      title: "Important Notices",
      description: "Key legal notices and policy updates",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <Hero
        title="Terms of Service"
        description="Read our terms and conditions for using our services and website."
        lastUpdated="January 1, 2024"
      />

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
                Welcome to YNB Nexus. These Terms of Service ("Terms") govern
                your use of our website and services. By using our services, you
                agree to these terms. Please read them carefully.
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
      </section> */}

      {/* Detailed Terms */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Terms of Service
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-700 mb-4">
                  By accessing this website, you agree to be bound by these
                  Terms of Use, all applicable laws, and regulations, and agree
                  that you are responsible for compliance with any applicable
                  local laws.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Use License
                </h3>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on YNB Nexus
                  Agency's website for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer
                  of title.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Disclaimer
                </h3>
                <p className="text-gray-700 mb-4">
                  The materials on YNB Nexus Agency's website are
                  provided on an 'as is' basis. YNB Nexus Agency makes no
                  warranties, expressed or implied, and hereby disclaims and
                  negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Limitations
                </h3>
                <p className="text-gray-700 mb-4">
                  In no event shall YNB Nexus Agency or its suppliers be
                  liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  YNB Nexus Agency's website, even if YNB Nexus
                  Agency or a YNB Nexus Agency authorized representative
                  has been notified orally or in writing of the possibility of
                  such damage.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Revisions and Errata
                </h3>
                <p className="text-gray-700 mb-4">
                  The materials appearing on YNB Nexus Agency's website
                  could include technical, typographical, or photographic
                  errors. YNB Nexus Agency does not warrant that any of
                  the materials on its website are accurate, complete, or
                  current.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Links
                </h3>
                <p className="text-gray-700 mb-4">
                  YNB Nexus Agency has not reviewed all of the sites
                  linked to its website and is not responsible for the contents
                  of any such linked site. The inclusion of any link does not
                  imply endorsement by YNB Nexus Agency of the site. Use
                  of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Modifications
                </h3>
                <p className="text-gray-700 mb-4">
                  YNB Nexus Agency may revise these terms of service for
                  its website at any time without notice. By using this website,
                  you are agreeing to be bound by the then current version of
                  these Terms of Use.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Governing Law
                </h3>
                <p className="text-gray-700 mb-4">
                  Any claim relating to YNB Nexus Agency's website shall
                  be governed by the laws of the State of Gujarat without regard
                  to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Area of Jurisdiction
                </h3>
                <p className="text-gray-700 mb-4">
                  The area of jurisdiction for any legal disputes or claims
                  shall be Rajkot, Gujarat, India.
                </p>
              </div>

              <p className="text-gray-700 ">
                By accessing or using YNB Nexus Agency’s website, you
                signify your acceptance of these Terms of Use. If you do not
                agree to these terms, please refrain from using our website.
              </p>
              <p className="text-gray-700 ">
                For any queries regarding these Terms of Use, please contact us
                at hello@ynbnexus.com.
              </p>
              <p className="text-gray-500 pb-20">Last updated: 16 August, 2025</p>
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

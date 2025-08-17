import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import CtaSection from '../components/Common/CtaSection';
import Hero from '../components/Common/Hero';
import { background } from '../assets/Background/bgExport';

const { faq } = background;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What type of businesses do you work with?",
      answer: "We work with startups, SMEs, and large enterprises across various industries including e-commerce, healthcare, technology, fashion, food & beverage, and more. Our strategies are tailored to each business's unique needs and goals."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Yes, all our solutions are tailored based on your specific needs, goals, and budget. We don't believe in one-size-fits-all approaches. After an initial consultation, we create a customized strategy and package that aligns with your business objectives."
    },
    {
      question: "How long does it take to see results?",
      answer: "It depends on the service and your specific goals. Digital campaigns often show initial results within 1-3 months, while SEO and brand building may take 3-6 months for significant impact. We provide regular reports so you can track progress throughout our partnership."
    },
    {
      question: "What's included in your digital marketing services?",
      answer: "Our digital marketing services include Google Ads & PPC management, SEO optimization, social media marketing, email campaigns, content creation, analytics and reporting, and conversion optimization. We create integrated campaigns across multiple channels."
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer: "Absolutely! We work with clients globally. Many of our services are delivered remotely, and we use modern communication tools to ensure seamless collaboration regardless of location."
    },
    {
      question: "What makes YNB Nexus different from other agencies?",
      answer: "We combine creativity with data-driven strategies, offer transparent reporting, maintain a high client retention rate, and provide 360° marketing solutions under one roof. Our team brings diverse expertise and we're committed to your long-term success."
    },
    {
      question: "How do you measure the success of campaigns?",
      answer: "We use various KPIs depending on your goals: website traffic, conversion rates, lead generation, ROI, brand awareness, engagement rates, and revenue growth. We provide detailed monthly reports and regular strategy reviews."
    },
    {
      question: "Can you help with both online and offline marketing?",
      answer: "Yes! We offer both digital and traditional marketing services. This includes online campaigns, social media, SEO, and PPC, as well as print advertising, billboard campaigns, radio spots, and event marketing."
    },
    {
      question: "What information do you need to get started?",
      answer: "We'll need information about your business goals, target audience, current marketing efforts, budget range, and any specific challenges you're facing. We'll gather this information during our initial consultation call."
    },
    {
      question: "Do you provide ongoing support after launching campaigns?",
      answer: "Absolutely! We provide ongoing campaign management, optimization, reporting, and support. Marketing is an ongoing process, and we're committed to continuously improving your results and adapting to market changes."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <Hero img={faq} title="Frequently Asked Questions" description="Got questions? We've got answers." />
      

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to the most frequently asked questions about our services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={24} className="text-blue-900" />
                    ) : (
                      <Plus size={24} className="text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CtaSection />
    </div>
  );
};

export default FAQ;
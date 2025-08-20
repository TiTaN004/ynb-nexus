import React from 'react'
import bg from "../../assets/hero.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function CtaSection() {
  return (
    <>
    {/* CTA Section */}
      <section
        className="py-20 bg-gray-50 relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-sm md:text-xl text-gray-200 mb-10">
              Let's discuss how we can help you achieve your marketing goals.
            </p>
            <Link
              to="/contact#form"
              className="inline-flex items-center space-x-2 cta-button text-white px-8 py-4 rounded-lg font-semibold text-sm md:text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

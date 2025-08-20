import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import CtaSection from '../components/Common/CtaSection';
import Hero from '../components/Common/Hero';
import { background } from '../assets/Background/bgExport';

const { bgTestimonials } = background

const Testimonials = () => {

  const testimonials = [
  // --- Creative ---
  {
    name: "Aarav Mehta",
    role: "Founder, FreshFoods",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    content: "The branding and logo design gave our startup a professional identity. Customers now instantly recognize us — a complete game changer!",
    rating: 5
  },
  {
    name: "Sophia Patel",
    role: "Marketing Manager, UrbanWear",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    content: "Their packaging design was both stylish and functional. Sales increased noticeably after the launch of our new line.",
    rating: 5
  },
  {
    name: "Kabir Desai",
    role: "CEO, InspireTech",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    content: "The brochure design captured our services perfectly. Clients were impressed with how clear and attractive our presentation looked.",
    rating: 5
  },

  // --- Traditional ---
  {
    name: "Rajiv Sharma",
    role: "Director, BuildRight Constructions",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    content: "From corporate designing to high-quality printing, the team handled everything seamlessly. Truly professional service.",
    rating: 5
  },
  {
    name: "Emily Carter",
    role: "CEO, BrightAds Agency",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    content: "Their outdoor publicity and advertising campaigns helped us capture huge attention across the city. Incredible reach!",
    rating: 5
  },
];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Review Score' },
    { number: '250+', label: 'Happy Clients' },
    { number: '95%', label: 'Client Retention Rate' },
  ];
  return (
    <div className="">
      {/* Hero Section */}
      <Hero  title="Client Testimonials" img={bgTestimonials} description="Hear what our clients have to say about working with YNB Nexus." />

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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our client satisfaction scores.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who've experienced the YNB Nexus difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
              >
                <div className="absolute top-4 right-4">
                  <Quote size={32} className="text-blue-100" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">
                      {testimonial.name}
                    </cite>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    {/* <div className="text-sm text-blue-900 font-medium">
                      {testimonial.company}
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
              "YNB Nexus doesn't just deliver marketing services – they deliver results. Our partnership with them has been transformational for our business growth."
            </blockquote>
            <cite className="text-xl">
              <strong>Alex Thompson</strong>
              <span className="block text-blue-200 mt-2">CEO, Growth Enterprises</span>
            </cite>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Testimonials;
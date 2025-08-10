import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "They handled our entire launch campaign flawlessly. Sales tripled within 6 months! Their strategic approach and attention to detail made all the difference.",
      author: "Sarah Johnson",
      role: "Fashion Brand Owner",
      company: "Fashion Forward Inc.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      quote: "Their SEO work helped us rank #1 for key terms in our industry. The increase in organic traffic has been phenomenal. Highly recommend their services!",
      author: "David Chen",
      role: "E-commerce Owner",
      company: "TechGadgets Plus",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      quote: "Professional, creative, and strategic. YNB Nexus is a true partner for growth. They understand our business and consistently deliver outstanding results.",
      author: "Priya Patel",
      role: "Startup Founder",
      company: "InnovateTech Solutions",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      quote: "The branding work they did for us was exceptional. Our new brand identity perfectly captures who we are and has significantly improved our market presence.",
      author: "Michael Rodriguez",
      role: "Restaurant Chain Owner",
      company: "Gourmet Bistro Group",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      quote: "Working with YNB Nexus transformed our digital presence. Their social media campaigns increased our engagement by 400% and brought in countless new customers.",
      author: "Emily Watson",
      role: "Fitness Studio Owner",
      company: "PowerFit Studios",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      quote: "Their traditional marketing approach combined with digital strategies gave us the perfect mix. We saw immediate results and sustained growth over months.",
      author: "James Thompson",
      role: "Healthcare Practice Owner",
      company: "WellCare Medical Center",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    }
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Hear what our clients have to say about working with YNB Nexus.
            </p>
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
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-900 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
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
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Testimonials;
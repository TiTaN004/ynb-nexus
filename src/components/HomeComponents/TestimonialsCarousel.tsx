import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "The marketing team transformed our brand presence completely. Our revenue increased by 300% in just 6 months. Outstanding results!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "Professional, creative, and results-driven. They understood our vision and delivered beyond expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, InnovateCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "Their strategic approach and attention to detail is unmatched. We saw a 250% increase in qualified leads within the first quarter.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "CTO, NextGen Solutions",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "Exceptional service and incredible ROI. The team's expertise in digital marketing helped us reach new heights in our industry.",
    rating: 5
  },
  {
    name: "Lisa Park",
    role: "VP Marketing, CloudTech",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "The creativity and innovation they bring to every campaign is remarkable. Our brand engagement has never been stronger.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "CEO, RetailPro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    content: "From strategy to execution, they delivered flawlessly. Our customer acquisition cost dropped by 40% while doubling our conversions.",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our marketing expertise.
          </p>
        </motion.div>

        <div className="relative carousel-wrapper overflow-hidden">
          <div className="carousel-container">
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-20 -z-10"
                    style={{ 
                      background: 'var(--gradient-primary)'
                    }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{testimonial.name}</h3>
                <p className="text-blue-900 font-medium mb-3">{testimonial.role}</p>
                <p className="text-gray-600 text-sm w-[70%] mx-auto">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
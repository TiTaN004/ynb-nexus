// import { motion } from "framer-motion";
// import { Star, Quote, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const testimonials = [
//   // --- Creative ---
//   {
//     name: "Aarav Mehta",
//     role: "Founder, FreshFoods",
//     image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
//     content: "The branding and logo design gave our startup a professional identity. Customers now instantly recognize us — a complete game changer!",
//     rating: 5
//   },
//   {
//     name: "Sophia Patel",
//     role: "Marketing Manager, UrbanWear",
//     image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
//     content: "Their packaging design was both stylish and functional. Sales increased noticeably after the launch of our new line.",
//     rating: 5
//   },
//   {
//     name: "Kabir Desai",
//     role: "CEO, InspireTech",
//     image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
//     content: "The brochure design captured our services perfectly. Clients were impressed with how clear and attractive our presentation looked.",
//     rating: 5
//   },

//   // --- Traditional ---
//   {
//     name: "Rajiv Sharma",
//     role: "Director, BuildRight Constructions",
//     image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
//     content: "From corporate designing to high-quality printing, the team handled everything seamlessly. Truly professional service.",
//     rating: 5
//   },
//   {
//     name: "Emily Carter",
//     role: "CEO, BrightAds Agency",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
//     content: "Their outdoor publicity and advertising campaigns helped us capture huge attention across the city. Incredible reach!",
//     rating: 5
//   },
// ];


// const TestimonialsCarousel = () => {
//   // Duplicate testimonials for seamless infinite scroll
//   const duplicatedTestimonials = [...testimonials];

//   return (
//     <section className="py-20 overflow-hidden bg-gray-50">
//       <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Don't just take our word for it. Here's what industry leaders say about our marketing expertise.
//           </p>
//         </motion.div>

//         <div className="relative carousel-wrapper overflow-hidden">
//           <div className="carousel-container">
//             {duplicatedTestimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
//                 viewport={{ once: true }}
//                 className="testimonial-card text-center group"
//               >
//                 <div className="relative mb-6">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
//                   />
//                   <div 
//                     className="absolute inset-0 rounded-full opacity-20 -z-10"
//                     style={{ 
//                       background: 'var(--gradient-primary)'
//                     }}
//                   ></div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{testimonial.name}</h3>
//                 <p className="text-blue-900 font-medium mb-3">{testimonial.role}</p>
//                 <p className="text-gray-600 text-sm w-[70%] mx-auto">"{testimonial.content}"</p>
//               </motion.div>
//             ))}
//           </div>
//           {/* Section Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <Link to="/testimonials">
//             <button
//               // variant="outline"
//               // size="lg"
//               className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 bg-background/80 backdrop-blur-sm hover:bg-portfolio-surface-hover border-primary/20 hover:border-primary/40 transition-all duration-smooth"
//             >
//               View All Testimonials
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </button>
//           </Link>
//         </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsCarousel;

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

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

const TestimonialsCarousel = () => {
  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative overflow-hidden">
          {/* Infinite Scroll Container */}
          <div 
            className="flex space-x-8 animate-scroll"
            style={{
              width: `${testimonials.length * 350}px`,
              animation: 'scroll 30s linear infinite'
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 testimonial-card text-center group"
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
            
            {/* Second set of testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 testimonial-card text-center group"
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

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/testimonials">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 bg-background/80 backdrop-blur-sm hover:bg-portfolio-surface-hover border-primary/20 hover:border-primary/40 transition-all duration-smooth">
              View All Testimonials
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </motion.div>
      </div>

      <style>{`
        .testimonial-card {
          flex-shrink: 0;
          width: 320px;
          padding: 2rem;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${testimonials.length * 350}px);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
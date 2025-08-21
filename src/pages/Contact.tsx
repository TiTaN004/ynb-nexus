// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
// import Hero from '../components/Common/Hero';
// import { background } from '../assets/Background/bgExport';

// const { contact } = background

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We\'ll get back to you soon.');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="">
//       {/* Hero Section */}
//       <Hero title="Contact Us" img={contact} description="Let's bring your vision to life. Contact us today." />

//       {/* Contact Section */}
//       <section className="py-20" id='form'>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together!</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Have a project in mind or need marketing help? Get in touch and let's discuss how we can help your business grow.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail size={24} className="text-gray-900" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
//                     <p className="text-gray-600">ynbnexus@gmail.com</p>
//                     <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone size={24} className="text-gray-900" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
//                     <p className="text-gray-600">+91 76986 38389</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin size={24} className="text-gray-900" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
//                     <p className="text-gray-600">202 - Radium square, Bhakti Nagar station plot,<br />Gondal road, Rajkot,<br /> Gujarat 360002</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MessageCircle size={24} className="text-gray-900"  />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
//                     <p className="text-gray-600">+91 76986 38389</p>
//                     <a
//                       href="https://wa.me/+917698638389"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
//                     >
//                       Start Chat
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* <div className="pt-8">
//                 <a
//                   href="#"
//                   className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
//                 >
//                   <span>Book a Call</span>
//                 </a>
//               </div> */}
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
//             >
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your phone number"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                     placeholder="Tell us about your project or how we can help..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full cta-button text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <Send size={20} />
//                   <span>Send Message</span>
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
//             <p className="text-lg text-gray-600">Located in the heart of New York's business district</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gray-300 h-96 rounded-xl flex items-center justify-center"
//           >
//             <p className="text-gray-600 text-lg">Interactive Map Would Go Here</p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import Hero from "../components/Common/Hero";
import { background } from "../assets/Background/bgExport";
import axios from "axios";
import { API_ENDPOINT } from "../utils/api";

const { contact } = background;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const res = axios.post(`${API_ENDPOINT}/response`,formData)

    console.log(res)

    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      {/* Hero Section */}
      <Hero title="Contact Us" img={contact} description="Let's bring your vision to life. Contact us today." />

      {/* Contact Section */}
      <section className="py-20 pt-44" id="form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let's Work Together!
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Have a project in mind or need marketing help? Get in touch
                  and let's discuss how we can help your business grow.
                </p>

                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-10 text-left">
                  We don’t just work on projects—we build partnerships. By
                  combining your vision with our expertise, we create strategies
                  that deliver long-term impact.
                </p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4 text-left">
                  Let’s collaborate to bring fresh ideas, innovative solutions,
                  and measurable growth to your business journey.
                </p>
              </motion.div>

              {/* <div className="pt-8">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Book a Call</span>
                </a>
              </div> */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cta-button text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
          <div className="w-[100%] bg-gray-50 py-20">
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
>
  <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
    Get in Touch
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Email */}
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-lg flex service-icon mr-5 items-center justify-center flex-shrink-0">
        <Mail size={24} className="text-white" />
      </div>
      <div className="min-w-0">
        <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
        <p className="text-gray-600 break-words truncate sm:whitespace-normal">
          <a
            href="mailto:ynbnexus@gmail.com"
            className="text-gray-600"
          >
            ynbnexus@gmail.com
          </a>
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-lg flex service-icon mr-5 items-center justify-center flex-shrink-0">
        <Phone size={24} className="text-white" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
        <p className="text-gray-600">+91 76986 38389</p>
      </div>
    </div>

    {/* Visit */}
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-lg flex service-icon mr-5 items-center justify-center flex-shrink-0">
        <MapPin size={24} className="text-white" />
      </div>
      <div className="min-w-0">
        <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
        <p className="text-gray-600 break-words">
          202 - Radium Square, Bhakti Nagar Station Plot,<br />
          Gondal Road, Rajkot, Gujarat 360002
        </p>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-lg flex service-icon mr-5 items-center justify-center flex-shrink-0">
        <MessageCircle size={24} className="text-white" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
        <p className="text-gray-600">+91 76986 38389</p>
        <a
          href="https://wa.me/+917698638389"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
        >
          Start Chat
        </a>
      </div>
    </div>
  </div>
</motion.div>

          </div>

      {/* Map Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of New York's business district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-300 h-96 rounded-xl flex items-center justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.1669435346195!2d70.79926111843129!3d22.28214066366673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb997a6f6111%3A0x20bae724022b4189!2sRadium%20Square!5e1!3m2!1sen!2sin!4v1755763380834!5m2!1sen!2sin"
              width={"100%"}
              height={"100%"}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

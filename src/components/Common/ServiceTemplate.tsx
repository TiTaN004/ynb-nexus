import React from "react";
import CtaSection from "./CtaSection";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  Search,
  MousePointer,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import img from "../../assets/hero.png";

export interface ServiceTemplateProps {
  title: string;
  img: string;
  description: string;
  services: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

const stats = [
  {
    number: "250%",
    label: "Average ROI Increase",
    description: "",
  },
  {
    number: "180%",
    label: "Increase in Conversions",
    description: "",
  },
  {
    number: "95%",
    label: "Client Retention Rate",
    description: "",
  },
];

export default function ServiceTemplate({
  title,
  img,
  description,
  services,
  benefits,
  process,
}: ServiceTemplateProps) {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative service-icon text-white py-20 pt-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {img.match('mp4') && <video
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={img} type="video/mp4" />
          Your browser does not support the video tag.
        </video>}
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <TrendingUp size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {title ? title : "Service Title"}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              {description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our {title ? title : "Services"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description
                ? description
                : "We offer a range of services to help you achieve your business goals."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our {title ? title : "Service"}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our data-driven approach ensures every dollar spent on{" "}
                {title ? title.toLowerCase() : "Service"} delivers measurable
                results for your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital marketing analytics"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our{" "}
              {title ? title.toLowerCase() : "Service"} clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 service-icon rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our {title ? title.toLowerCase() : 'Service'} campaigns consistently deliver measurable growth for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">250%</div>
              <div className="text-blue-100">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">180%</div>
              <div className="text-blue-100">Lead Generation Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      <motion.section
        className="py-20 relative overflow-hidden"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 1.2 }}
        // viewport={{ once: false, margin: "-10%" }}
        style={{
          background:
            "linear-gradient(135deg, hsl(220, 45%, 12%) 0%, hsl(217, 60%, 8%) 25%, hsl(225, 70%, 15%) 50%, hsl(217, 60%, 8%) 75%, hsl(220, 45%, 12%) 100%)",
        }}
      >
        {/* Enhanced Deep Blue Background with cosmic gradients */}
        <div className="absolute inset-0">
          {/* Primary deep blue gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, hsl(217, 91%, 25%) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(262, 83%, 25%) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(198, 93%, 20%) 0%, transparent 50%)",
            }}
          ></div>

          {/* Overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
            }}
          ></div>

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-primary-foreground bg-clip-text">
                Proven Results
              </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto">
              Our {title ? title.toLowerCase() : "Service"} campaigns
              consistently deliver measurable growth for our clients.
            </p>
          </motion.div>

          <motion.div className="relative">
            {/* Enhanced glass container with deep blue theme */}
            <div
              className="rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto relative backdrop-blur-xl"
              style={{
                background: "rgba(25, 50, 120, 0.3)",
                border: "1px solid rgba(100, 150, 255, 0.2)",
                boxShadow:
                  "0 25px 50px rgba(0, 20, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(66, 165, 245, 0.1) 0%, transparent 70%)",
                }}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    // initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    // whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    // exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    // transition={{
                    //   duration: 0.6,
                    //   delay: 0.6 + index * 0.1,
                    //   type: "spring",
                    //   stiffness: 100
                    // }}
                    // viewport={{ once: false, margin: "-10%" }}
                    className="text-center group"
                  >
                    <div className="mb-4 relative">
                      {/* Enhanced glow effect behind number */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(66, 165, 245, 0.3) 0%, rgba(139, 69, 219, 0.2) 50%, rgba(34, 197, 244, 0.1) 100%)",
                        }}
                      ></div>

                      <div className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-infinity-blue via-infinity-cyan to-infinity-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        {stat.number}
                      </div>
                      <div className="text-lg lg:text-xl font-semibold text-white/90 mb-3">
                        {stat.label}
                      </div>
                      <div className="text-sm lg:text-base text-blue-100/70 leading-relaxed">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Decorative elements with blue theme */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(135deg, rgba(66, 165, 245, 0.3), rgba(34, 197, 244, 0.2))",
              border: "1px solid rgba(66, 165, 245, 0.4)",
              boxShadow: "0 0 30px rgba(66, 165, 245, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
          ></motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 69, 219, 0.3), rgba(124, 58, 237, 0.2))",
              border: "1px solid rgba(139, 69, 219, 0.4)",
              boxShadow: "0 0 25px rgba(139, 69, 219, 0.3)",
              animationDelay: "1s",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false }}
          ></motion.div>

          <motion.div
            className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(135deg, rgba(34, 197, 244, 0.3), rgba(66, 165, 245, 0.2))",
              border: "1px solid rgba(34, 197, 244, 0.4)",
              boxShadow: "0 0 20px rgba(34, 197, 244, 0.3)",
              animationDelay: "0.5s",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: false }}
          ></motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}

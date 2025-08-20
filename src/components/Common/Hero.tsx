import React from 'react'
import { motion } from 'framer-motion';
import img from "../../assets/hero.png";

interface HeroProps {
    title: string;
    img: string;
    description: string;
    lastUpdated?: string;
}

export default function Hero({ title,img, description, lastUpdated }: HeroProps) {
  return (
    // <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-40">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="text-center"
    //       >
    //         <h1 className="text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
    //         <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
    //           {description}
    //         </p>
    //       </motion.div>
    //     </div>
    //   </section>
      <section
  className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 pt-[210px]"
  style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
      <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
        {description}
      </p>
      <div className="mt-8 text-sm text-blue-200">
        {lastUpdated && (
          <span>
            Last Updated: <strong>{lastUpdated}</strong>
          </span>
        )}
      </div>
    </motion.div>
  </div>
</section>

  )
}

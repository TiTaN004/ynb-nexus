// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { 
//       name: 'Services', 
//       href: '/services',
//       submenu: [
//         { name: 'Digital Marketing', href: '/services/digital-marketing' },
//         { name: 'Social Media Marketing', href: '/services/social-media' },
//         { name: 'Branding & Design', href: '/services/branding-design' },
//         { name: 'Packaging Design', href: '/services/branding-design' },
//         { name: 'Brochure Designing', href: '/services/branding-design' },
//         { name: 'Corporate Designing', href: '/services/branding-design' },
//         { name: 'SEO & SEM', href: '/services/seo-sem' },
//         { name: 'Website Designing', href: '/services/website-designing' },
//         { name: 'Traditional Marketing', href: '/services/traditional-marketing' },
//         { name: 'Animation & 3D', href: '/services/animation-3d' },
//         { name: 'Public Relations', href: '/services/public-relations' },
//         { name: 'Advertising', href: '/services/advertising' },
//         { name: 'Outdoor Publicity', href: '/services/outdoor-publicity' },
//         { name: 'Video Production', href: '/services/video-production' },
//         { name: 'Printing', href: '/services/printing' },
//       ]
//     },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'Contact', href: '/contact' },
//   ];

//         //  Branding
//         //  Packaging Design
//         //  Logo Designing
//         //  Brochure Designing
//         //  Corporate Designing

//         //  Printing
//         //  Advertising
//         //  Outdoor Publicity
//         //  Digital Marketing
//         //  Social Media Marketing
//         //  Website Designing
//         //  SEO
//         //  Video Production
//         //  Animation & 3D
//         //  Public Relations


//   return (
//     <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">YN</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900">YNB Nexus</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <div key={item.name} className="relative">
//                 {item.submenu ? (
//                   <div
//                     className="relative"
//                     onMouseEnter={() => setIsServicesOpen(true)}
//                     onMouseLeave={() => setIsServicesOpen(false)}
//                   >
//                     <Link
//                       to={item.href}
//                       className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                         location.pathname.startsWith('/services')
//                           ? 'text-blue-900 bg-blue-50'
//                           : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
//                       }`}
//                     >
//                       <span>{item.name}</span>
//                       <ChevronDown size={16} />
//                     </Link>
//                     <AnimatePresence>
//                       {isServicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
//                         >
//                           {item.submenu.map((subItem) => (
//                             <Link
//                               key={subItem.name}
//                               to={subItem.href}
//                               className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
//                             >
//                               {subItem.name}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                       location.pathname === item.href
//                         ? 'text-blue-900 bg-blue-50'
//                         : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <Link
//               to="/contact"
//               className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
//             >
//               Get Free Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden border-t border-gray-100 py-4"
//             >
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   <Link
//                     to={item.href}
//                     className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                   {item.submenu && (
//                     <div className="ml-4 space-y-1">
//                       {item.submenu.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           to={subItem.href}
//                           className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <Link
//                 to="/contact"
//                 className="mt-4 block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-blue-800 hover:to-blue-700 transition-all duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Free Quote
//               </Link>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceRoutes } from '../pages/services/servicesRoutes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: serviceRoutes
    },
    //   submenu: [
    //     { name: 'Digital Marketing', href: '/services/digital-marketing' },
    //     { name: 'Social Media Marketing', href: '/services/social-media' },
    //     { name: 'Branding & Design', href: '/services/branding-design' },
    //     { name: 'Packaging Design', href: '/services/packaging-design' },
    //     { name: 'Brochure Designing', href: '/services/brochure-design' },
    //     { name: 'Corporate Designing', href: '/services/corporate-design' },
    //     { name: 'SEO & SEM', href: '/services/seo-sem' },
    //     { name: 'Website Designing', href: '/services/website-designing' },
    //     { name: 'Traditional Marketing', href: '/services/traditional-marketing' },
    //     { name: 'Animation & 3D', href: '/services/animation-3d' },
    //     { name: 'Public Relations', href: '/services/public-relations' },
    //     { name: 'Advertising', href: '/services/advertising' },
    //     { name: 'Outdoor Publicity', href: '/services/outdoor-publicity' },
    //     { name: 'Video Production', href: '/services/video-production' },
    //     { name: 'Printing', href: '/services/printing' },
    //   ]
    // },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },

    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 z-[100] p-3 sm:p-4 lg:p-6"
    >
      <motion.div
        className={`header-container max-w-7xl mx-auto transition-all duration-500 ${
          scrolled ? 'bg-opacity-95 shadow-2xl scale-[0.98]' : 'bg-opacity-80'
        }`}
        initial={{ scale: 1 }}
      >
        <nav className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group z-10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="glass-logo w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden"
              >
                <Sparkles size={24} className="text-white relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  YNB Nexus
                </span>
                <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">
                  Infinite Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`nav-item flex items-center space-x-1 ${
                          location.pathname.startsWith('/services') ? 'active' : ''
                        }`}
                      >
                        <span className="text-foreground">{item.name}</span>
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-primary-foreground" />
                        </motion.div>
                      </Link>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 30,
                              duration: 0.2 
                            }}
                            className="absolute top-full left-0 mt-2 w-80 glass-dropdown rounded-2xl py-4"
                            style={{ zIndex: 9999 }}
                          >
                            <div className="max-h-96 overflow-y-auto custom-scrollbar">
                              <div className="grid grid-cols-1 gap-1 px-3">
                                {item.submenu.map((subItem, index) => (
                                  <motion.div
                                    key={subItem.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                  >
                                    <Link
                                      to={subItem.path}
                                      className="block px-4 py-3 text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-200 group font-medium"
                                    >
                                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                        {subItem.title}
                                      </span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-item ${
                        location.pathname === item.href ? 'active' : ''
                      }`}
                    >
                      <span className="text-foreground">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link to="/contact" className="cta-button-h">
                  <span className="relative z-10">Get Free Quote</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="nav-item p-3"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/20 mt-4 overflow-hidden rounded-b-2xl"
            >
              <div className="mobile-menu-backdrop rounded-b-2xl  -mx-6 px-6 pb-6 pt-4">
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <Link
                        to={item.href}
                        className={`nav-item block font-medium text-base w-[80%] m-auto mb-1 ${
                          location.pathname === item.href || 
                          (item.submenu && location.pathname.startsWith('/services')) 
                            ? 'active' : ''
                        }`}
                      >
                        <span className="text-foreground">{item.name}</span>
                      </Link>
                      {item.submenu && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="ml-4 space-y-1 max-h-60 overflow-y-auto custom-scrollbar bg-black/10 rounded-xl p-3"
                          style={{ width: '75%', margin: '0 auto' }}
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.title}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (subIndex * 0.03) }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="w-[80%] block px-3 py-2.5 text-sm text-primary-foreground font-light hover:text-foreground hover:bg-accent/20 rounded-lg transition-all "
                                >
                                  {subItem.title}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                    className="pt-4 mt-4 border-t border-border/20 "
                  >
                    <Link to="/contact" className="cta-button block text-center w-[50%] m-auto">
                      <span className="relative z-10">Get Free Quote</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;
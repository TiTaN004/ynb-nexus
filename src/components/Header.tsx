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

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Social Media Marketing', href: '/services/social-media' },
        { name: 'Branding & Design', href: '/services/branding-design' },
        { name: 'Packaging Design', href: '/services/packaging-design' },
        { name: 'Brochure Designing', href: '/services/brochure-design' },
        { name: 'Corporate Designing', href: '/services/corporate-design' },
        { name: 'SEO & SEM', href: '/services/seo-sem' },
        { name: 'Website Designing', href: '/services/website-designing' },
        { name: 'Traditional Marketing', href: '/services/traditional-marketing' },
        { name: 'Animation & 3D', href: '/services/animation-3d' },
        { name: 'Public Relations', href: '/services/public-relations' },
        { name: 'Advertising', href: '/services/advertising' },
        { name: 'Outdoor Publicity', href: '/services/outdoor-publicity' },
        { name: 'Video Production', href: '/services/video-production' },
        { name: 'Printing', href: '/services/printing' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 glass-header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-12 h-12 glass-logo rounded-2xl flex items-center justify-center relative overflow-hidden"
            >
              <Sparkles size={24} className="text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-infinity-cyan/20 to-infinity-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-infinity-blue to-infinity-purple bg-clip-text text-transparent">
                YNB Nexus
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Infinite Solutions</span>
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
                      className={`glass-nav-item flex items-center space-x-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        location.pathname.startsWith('/services') ? 'active' : ''
                      }`}
                    >
                      <span className="text-foreground">{item.name}</span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} className="text-muted-foreground" />
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
                            stiffness: 400, 
                            damping: 25,
                            duration: 0.2 
                          }}
                          className="absolute top-full left-0 mt-2 w-64 glass-dropdown rounded-2xl py-3 z-50"
                        >
                          <div className="grid grid-cols-1 gap-1 px-2">
                            {item.submenu.map((subItem, index) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/50 rounded-xl transition-all duration-200 group"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`glass-nav-item px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
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
              <Link
                to="/contact"
                className="glass-cta text-white px-6 py-3 rounded-xl font-semibold text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-infinity-cyan/20 to-infinity-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-nav-item p-3 rounded-xl transition-all"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-white/10 py-6 mt-4"
            >
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`glass-nav-item block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                        location.pathname === item.href || 
                        (item.submenu && location.pathname.startsWith('/services')) 
                          ? 'active' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-foreground">{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                          >
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-lg transition-all"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="glass-cta block text-white px-6 py-3 rounded-xl font-semibold text-center transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
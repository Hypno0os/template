import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from './AnimatedSection';

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: 'Accueil', href: '#accueil' },
  { 
    name: 'Services', 
    href: '#services',
    submenu: [
      { name: 'Communication Animale', href: '#communication-animale' },
      { name: 'Soins Énergétiques', href: '#soins-energetiques' },
      { name: 'Accompagnement', href: '#accompagnement' }
    ]
  },
  { name: 'À Propos', href: '#a-propos' },
  { name: 'Tarifs', href: '#tarifs' },
  { name: 'Témoignages', href: '#temoignages' },
  { name: 'Contact', href: '#contact' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-2xl"
      key="modern-header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Moderne */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <motion.div 
              className="relative w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden group"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Cercle intérieur */}
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-2xl">✨</span>
              </div>
              
              {/* Particules flottantes */}
              <motion.div
                className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full"
                animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full"
                animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-sky-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                ✨ Du Cœur à l'Âme ✨
              </motion.span>
              <motion.span 
                className="text-sm text-slate-600 font-medium tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                COMMUNICATION INTUITIVE
              </motion.span>
            </div>
          </motion.div>

          {/* Navigation Desktop Moderne */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="relative"
                >
                  <motion.a
                    href={item.href}
                    className="relative px-6 py-3 text-slate-700 font-medium transition-all duration-300 cursor-pointer group rounded-2xl"
                    whileHover={{ y: -2 }}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Fond animé au survol */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredItem === item.name ? 1 : 0,
                        opacity: hoveredItem === item.name ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Bordure animée */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent"
                      animate={{ 
                        borderColor: hoveredItem === item.name ? "rgb(14, 165, 233)" : "transparent"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Ligne permanente toujours visible */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-200 rounded-full" />
                    
                    {/* Ligne animée sous le bouton */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-white to-sky-400 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sky-400 via-white to-sky-400"
                        animate={{ x: [-100, 100] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </motion.a>
                  
                  {/* Sous-menu moderne */}
                  {item.submenu && (
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                        >
                          <div className="p-4">
                            {item.submenu.map((subItem, subIndex) => (
                                                              <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="relative flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-sky-600 transition-all duration-200 cursor-pointer rounded-2xl group"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                  whileHover={{ x: 5, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(subItem.href)?.scrollIntoView({
                                      behavior: 'smooth',
                                    });
                                  }}
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                                  <span className="font-medium">{subItem.name}</span>
                                  
                                  {/* Ligne fine sous-menu */}
                                  <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full overflow-hidden"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-sky-400 via-white to-sky-400"
                                      animate={{ x: [-100, 100] }}
                                      transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        ease: "linear"
                                      }}
                                    />
                                  </motion.div>
                                </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              </div>
            ))}
          </nav>

          {/* Bouton CTA Ultra-moderne */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-lg opacity-75"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.75, 0.5, 0.75]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.button
                className="relative px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-sky-500/25 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Prendre RDV</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Menu Mobile Moderne */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/50 shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-sm"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    className="w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-sm"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-sm"
                  />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Menu Mobile Overlay Moderne */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-2xl shadow-inner"
            >
              <nav className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                                          <motion.a
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-center space-x-3 px-6 py-4 text-slate-700 hover:text-sky-600 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 rounded-2xl transition-all duration-200 group"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(item.href)?.scrollIntoView({
                            behavior: 'smooth',
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                        <span className="font-medium">{item.name}</span>
                        
                        {/* Ligne fine mobile */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full overflow-hidden"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-sky-400 via-white to-sky-400"
                            animate={{ x: [-100, 100] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </motion.a>
                    
                    {/* Sous-menu mobile */}
                    {item.submenu && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                                                      <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + 0.1 + (subIndex * 0.05) }}
                              className="relative flex items-center space-x-3 px-6 py-2 text-sm text-slate-600 hover:text-sky-600 hover:bg-gradient-to-r hover:from-sky-50/50 hover:to-blue-50/50 rounded-xl transition-all duration-200"
                              onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(subItem.href)?.scrollIntoView({
                                  behavior: 'smooth',
                                });
                                setIsMenuOpen(false);
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full" />
                              <span>{subItem.name}</span>
                              
                              {/* Ligne fine sous-menu mobile */}
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full overflow-hidden"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-sky-400 via-white to-sky-400"
                                  animate={{ x: [-100, 100] }}
                                  transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    ease: "linear"
                                  }}
                                />
                              </motion.div>
                            </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Bouton CTA Mobile */}
                <div className="px-6 pt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                                         <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-lg opacity-50"
                       animate={{ 
                         scale: [1, 1.05, 1],
                         opacity: [0.5, 0.3, 0.5]
                       }}
                       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     />
                     <motion.button
                       className="relative w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg"
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                      Prendre RDV
                    </motion.button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}; 
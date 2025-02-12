import React from 'react';
import { motion } from 'framer-motion';
import { MenuSection } from './components/MenuSection';
import { menuItems } from './data/menuItems';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  const mainDishes = menuItems.filter(item => item.category === 'mains');
  const appetizers = menuItems.filter(item => item.category === 'appetizers');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-amber-400"
          >
            Sawsiri Restaurant
          </motion.div>
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:054-7726600"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              <FaPhone /> 054-7726600
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/971547726600"
              className="flex items-center gap-2 text-green-500 hover:text-green-400"
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop')] 
          bg-cover bg-center bg-fixed"
        />
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Sawsiri Restaurant <span className="text-amber-400">Fujairah</span>
            </h1>
            <p className="text-2xl text-amber-200 mb-8">
              Authentic Sri Lankan & Indian Cuisine
            </p>
            <motion.div
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold 
                hover:bg-amber-400 transition-colors duration-300 shadow-lg"
              >
                View Menu
              </motion.button>
              <motion.a
                href="tel:054-7726600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold 
                hover:bg-green-400 transition-colors duration-300 shadow-lg flex items-center gap-2"
              >
                <FaPhone /> Order Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Menu Sections */}
      <main className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-400 mb-4">Our Specialties</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>
        <MenuSection title="Main Dishes" items={mainDishes} />
        <MenuSection title="Appetizers" items={appetizers} />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-amber-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Visit Us</h3>
              <p className="text-amber-200 flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-amber-400" />
                Behind thomascook Rosthamani exchange opposite gulf flower bakery
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Contact</h3>
              <p className="text-amber-200">
                <a href="tel:054-7726600" className="hover:text-amber-400">054-7726600</a>
              </p>
              <p className="text-amber-200">
                <a href="tel:050-5192492" className="hover:text-amber-400">050-5192492</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Hours</h3>
              <p className="text-amber-200">Monday - Sunday</p>
              <p className="text-amber-200">11:00 AM - 11:00 PM</p>
              <div className="mt-4">
                <motion.a
                  href="https://wa.me/971547726600"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full 
                  hover:bg-green-500 transition-colors shadow-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  Order on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
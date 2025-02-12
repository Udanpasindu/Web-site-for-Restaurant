import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem as MenuItemType } from '../types';
import { FaWhatsapp } from 'react-icons/fa';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const handleOrderClick = () => {
    const message = `Hi, I would like to order ${item.name}`;
    const whatsappUrl = `https://wa.me/971547726600?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-amber-900/30"
    >
      <div className="relative overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">{item.name}</h3>
        <p className="text-gray-300 mb-4 min-h-[3rem]">{item.description}</p>
        <div className="flex justify-between items-center">
          <motion.span 
            className="text-2xl font-bold text-amber-500"
            whileHover={{ scale: 1.1 }}
          >
            AED {item.price}
          </motion.span>
          <motion.button
            onClick={handleOrderClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full 
            hover:bg-green-500 transition-colors shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
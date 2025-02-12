import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { MenuItem as MenuItemType } from '../types';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-amber-400 mb-4">{title}</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <MenuItem item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
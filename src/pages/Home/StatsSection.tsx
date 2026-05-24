import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, Layers, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '45+', icon: Code },
    { label: 'Happy Clients', value: '30+', icon: Star },
    { label: 'Tech Stacks', value: '25+', icon: Layers },
    { label: 'Years Exp', value: '5+', icon: Zap },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
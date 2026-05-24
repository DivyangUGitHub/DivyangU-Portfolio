import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ValuesSection: React.FC = () => {
  const values = ['ER-Friendly', 'Adaptive', 'Fluid', 'Future-Proof', 'SEO-Ready', 'Immersive', 'Protected', 'Dependable', 'Captivating'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-8"
    >
      <h3 className="text-2xl font-bold text-center mb-8">Core Values</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {values.map((value) => (
          <div key={value} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-cyan-400" />
            <span className="text-gray-300">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ValuesSection;
import React from 'react';
import { motion } from 'framer-motion';

const PhilosophySection: React.FC = () => {
  const philosophies = ['Motion', 'Type', 'Feedback', 'Craft', 'Micro-interactions', 'Subtle movement'];

  return (
    <section className="border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Interfaces you can feel.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I sweat spacing, timing, and feedback — the tiny stuff that turns ordinary interfaces into memorable experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Philosophy</h3>
            <div className="flex flex-wrap gap-3">
              {philosophies.map((item) => (
                <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
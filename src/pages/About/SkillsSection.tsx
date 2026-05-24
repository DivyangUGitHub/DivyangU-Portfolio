import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma', 'Framer Motion', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold text-center mb-8">Tech Arsenal</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.02 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-full text-sm font-medium hover:border-purple-500/50 transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
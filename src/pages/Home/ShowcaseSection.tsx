// FILE: src/components/ShowcaseSection.tsx

import React from "react";
import { motion } from "framer-motion";

const cards = [1, 2, 3, 4, 5];

const ShowcaseSection = () => {
  return (
    <section className="min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">

      {/* MAIN WRAPPER */}
      <div className="w-full max-w-[1700px]">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="h-[520px] rounded-[40px] border border-white/10 bg-[#050505]"
          />

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="h-[520px] rounded-[40px] border border-white/10 bg-[#050505]"
          />

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="h-[520px] rounded-[40px] border border-white/10 bg-[#050505]"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          {/* BOTTOM LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="h-[420px] rounded-[40px] border border-white/10 bg-[#050505]"
          />

          {/* BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="h-[420px] rounded-[40px] border border-white/10 bg-[#050505]"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
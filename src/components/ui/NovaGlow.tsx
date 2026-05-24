"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const WavyGlow = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] bg-emerald-500/20 blur-[120px] rounded-full" />

      {/* Animated Shape */}
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={
          hovered
            ? {
                borderRadius: [
                  "55% 45% 60% 40% / 40% 60% 40% 60%",
                  "40% 60% 35% 65% / 65% 35% 65% 35%",
                  "60% 40% 55% 45% / 45% 55% 45% 55%",
                  "50% 50% 50% 50% / 50% 50% 50% 50%",
                ],
                rotate: [0, 90, 180, 270, 360],
              }
            : {
                borderRadius:
                  "50% 50% 50% 50% / 50% 50% 50% 50%",
                rotate: 0,
              }
        }
        transition={{
          duration: 8,
          repeat: hovered ? Infinity : 0,
          ease: "linear",
        }}
        className="
          relative
          w-[320px]
          h-[320px]
          border-[10px]
          border-transparent
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(135deg, #6ee7ff, #3b82f6, #22c55e)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "8px",
          filter: "blur(2px)",
          boxShadow:
            "0 0 40px rgba(34,197,94,0.7), 0 0 80px rgba(59,130,246,0.5)",
        }}
      >
        {/* Inner Black */}
        <div className="absolute inset-[18px] bg-black rounded-full" />
      </motion.div>
    </div>
  );
};

export default WavyGlow;
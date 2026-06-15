"use client";
import { motion } from "framer-motion";

export default function VentureShowcase() {
  return (
    <section className="relative bg-black text-white overflow-hidden mt-32">
      {/* HEADING */}
<div className="pt-20 pb-10 mt-10">
  <p
    className="
      text-center
      text-xs
      tracking-[0.25em]
      uppercase
      text-zinc-400
      mb-4
    "
  >
    Crafting Modern Experiences
  </p>

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      flex
      items-center
      justify-center
      gap-2
      md:gap-4
      text-center
      leading-none
    "
  >
    <span
      className="
        text-white
        font-black
        uppercase
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
      "
    >
      VENTURE
    </span>

    <motion.span
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="text-transparent bg-clip-text"
      style={{
        fontFamily: "'Bodoni Moda', serif",
        fontStyle: "italic",
        backgroundImage:
          "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899,#ff2fb3,#7c3aed)",
        backgroundSize: "300% 100%",
        filter: "drop-shadow(0 8px 18px rgba(236,72,153,0.35))",
      }}
    >
      <span
        className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
          font-bold
        "
      >
        SHOWCASE
      </span>
    </motion.span>
  </motion.h1>
</div>
    </section>
  );
}
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
} from "lucide-react";

// ✅ YEH LINE ADD KARO - Props accept karo
const SectionThird = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/about1.jpg",
    "/about2.jpg",
    "/about3.jpg",
    "/about4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getImage = (offset: number) => {
    return images[(activeIndex + offset) % images.length];
  };

  return (
    <div className="relative bg-black overflow-hidden px-4 sm:px-6 md:px-12 pt-0 pb-20 mt-80">
      <div className="relative z-10 max-w-[1450px] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[720px] order-2 lg:order-1"
        >
          <p className="uppercase tracking-[6px] text-zinc-500 text-xs mb-8">
            A QUICK GLANCE
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-[-2px] md:tracking-[-4px] text-white">
            Building the bridge between ideas and
            <br />
            <span className="inline-flex items-center mt-3 overflow-visible flex-wrap">
              I&apos;m{" "}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 25px rgba(59,130,246,0.5)",
                    "0 0 45px rgba(217,70,239,0.9)",
                    "0 0 25px rgba(236,72,153,0.6)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="ml-3 sm:ml-4 inline-block pb-2 sm:pb-5 pr-3 leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-pink-500"
                style={{ fontFamily: "'Quintessential', serif" }}
              >
                experiences
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 md:mt-10 space-y-6 md:space-y-8 text-zinc-400 text-sm sm:text-base lg:text-lg leading-[1.9] max-w-[650px]">
            <p>
              I'm Divyang Upreti, an engineering-driven developer who turns complex
              technical challenges into high-speed web products. I manage the entire stack
              with a focus on clean, reusable code and seamless performance. I excel in
              AI/ML and full-stack architecture, always delivering modern solutions that
              actually solve problems for every user.
            </p>
            <p>My code is built to last, helping your startup reach the next level!</p>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <a href="https://www.linkedin.com/in/divyang-upreti/" className="text-zinc-500 hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/DivyangUGitHub" className="text-zinc-500 hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://x.com/Divyang_Upreti_" className="text-zinc-500 hover:text-white transition-all duration-300">
              <Twitter size={20} />
            </a>
          </div>

          {/* ✅ BUTTON - WORKING NOW */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage('about')}
            className="flex items-center gap-4 mt-12 md:mt-14 text-white font-semibold cursor-pointer group"
          >
            Dive in deeper
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative h-[340px] sm:h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden w-full order-1 lg:order-2">
          <motion.img
            key={getImage(0)}
            src={getImage(0)}
            animate={{
              x: typeof window !== "undefined" && window.innerWidth < 768 ? -75 : -185,
              scale: typeof window !== "undefined" && window.innerWidth < 768 ? 0.58 : 0.68,
              rotateY: 35,
              opacity: 0.3,
            }}
            transition={{ duration: 1 }}
            className="absolute z-10 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-[160px] sm:h-[230px] md:h-[300px] lg:h-[360px] rounded-[18px] md:rounded-[24px] object-cover blur-[1px]"
          />

          <motion.div
            key={getImage(1)}
            initial={{ rotateY: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={getImage(1)}
              className="w-[190px] sm:w-[250px] md:w-[320px] lg:w-[380px] h-[260px] sm:h-[360px] md:h-[460px] lg:h-[560px] rounded-[22px] sm:rounded-[28px] lg:rounded-[36px] object-cover border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            />
            <div className="absolute inset-0 rounded-[22px] sm:rounded-[28px] lg:rounded-[36px] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.06)]" />
          </motion.div>

          <motion.img
            key={getImage(2)}
            src={getImage(2)}
            animate={{
              x: typeof window !== "undefined" && window.innerWidth < 768 ? 75 : 185,
              scale: typeof window !== "undefined" && window.innerWidth < 768 ? 0.58 : 0.68,
              rotateY: -35,
              opacity: 0.3,
            }}
            transition={{ duration: 1 }}
            className="absolute z-10 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-[160px] sm:h-[230px] md:h-[300px] lg:h-[360px] rounded-[18px] md:rounded-[24px] object-cover blur-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThird;
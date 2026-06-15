import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SocialBadge from "../../components/common/SocialBadge";
interface HeroSectionProps {
  setActivePage: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  setActivePage: _setActivePage  // ← Underscore laga do
}) => {
  return (
    <section className="relative h-screen bg-black overflow-hidden text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-20%] right-[5%] w-[500px] h-[500px] bg-zinc-700/10 blur-[160px] rounded-full" />

      </div>


{/* BOTTOM LEFT */}
<div
  className="
    absolute

    bottom-3
    sm:bottom-4
    md:bottom-5
    lg:bottom-6

    left-6
    sm:left-10
    md:left-16
    lg:left-24
    xl:left-32
    2xl:left-40

    z-20
    flex
    flex-col
    items-center
    text-center
  "
>

  <MapPin
    className="text-green-400 mb-2"
    size={20}
  />

  <h4 className="font-bold uppercase text-sm sm:text-base leading-none">
    Based in Noida,
  </h4>

  <p className="text-zinc-500 uppercase text-sm sm:text-base mt-2">
    India
  </p>

</div>

{/* BOTTOM RIGHT */}
<div
  className="
    absolute

    bottom-3
    sm:bottom-4
    md:bottom-5
    lg:bottom-6

    right-6
    sm:right-10
    md:right-16
    lg:right-24
    xl:right-32
    2xl:right-40

    z-20
    flex
    flex-col
    items-center
    text-center
  "
>

  <div className="text-blue-500 text-xl mb-2">
    ⛁
  </div>

  <h4 className="font-bold uppercase text-sm sm:text-base leading-none">
    Software Developer ,
  </h4>

  <p className="text-zinc-500 uppercase text-sm sm:text-base mt-2">
    & Designer
  </p>

</div>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 -translate-y-8 sm:-translate-y-10">

        {/* BADGE */}
        <SocialBadge />

        {/* NAME */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-[4rem]
            sm:text-[6rem]
            md:text-[9rem]
            lg:text-[12rem]
            xl:text-[14rem]
            leading-none
            font-black
            tracking-[-8px]
            sm:tracking-[-10px]
            uppercase
            text-white
          "
          style={{
            fontFamily:
              "Inter, sans-serif",
          }}
        >
          DIVYANG
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            uppercase
            tracking-[6px]
            sm:tracking-[12px]
            text-zinc-500
            text-[10px]
            sm:text-sm
            mt-4
            sm:mt-5
          "
        >
          I DEVELOP AND BUILD PRODUCTS THAT
        </motion.p>

        {/* QUOTE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            text-white
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            mt-4
            sm:mt-5
            quintessential-regular
          "
        >
          deliver real impact.
        </motion.h2>

      </div>

    </section>
  );
};

export default HeroSection;
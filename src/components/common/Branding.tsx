import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Branding = () => {

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  return (

    <div
      className="
        fixed
        top-5
        left-5
        z-[60]
        flex
        items-center
      "
    >

      {/* LOGO */}
      <motion.img
        src="/logo.png"
        alt="DU Logo"

        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.35,
        }}

        className="
          w-8
          sm:w-9
          h-auto
          object-contain
        "
      />

      {/* DIVIDER */}
      <div className="w-px h-10 bg-white/10 mx-5" />

      {/* TEXT */}
      <AnimatePresence>

        {!isScrolled && (

          <motion.div

            initial={{
              opacity: 0,
              x: 20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: -20,
            }}

            transition={{
              duration: 0.15,
              ease: [0.4, 0, 0.2, 1],
            }}

          >

            <div className="flex items-center gap-3">

              {/* GREEN DOT */}
              <div className="w-[4px] h-[4px] rounded-full bg-green-400 mt-[2px]" />

              {/* TEXT BLOCK */}
              <div className="flex flex-col">

                <h3
                  className="
                    text-[8px]
                    sm:text-[9px]
                    tracking-[5px]
                    text-zinc-500
                    uppercase
                    leading-none
                  "
                >
                  Creative Engineer
                </h3>

                <p
                  className="
                    text-green-400
                    text-[8px]
                    sm:text-[9px]
                    tracking-[2px]
                    mt-2
                    uppercase
                    font-semibold
                    leading-none
                  "
                >
                  Building The Future
                </p>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default Branding;
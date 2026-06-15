import { motion } from "framer-motion";

const WorksHero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black

        flex
        items-center
        justify-center
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          opacity-30

          bg-[radial-gradient(circle_at_top,#1e3a8a20,transparent_35%),radial-gradient(circle_at_bottom,#7c3aed20,transparent_35%)]
        "
      />

      {/* RGB LIGHTS */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[20%]
            top-0

            h-full
            w-[20vw]

            max-w-[180px]
            min-w-[80px]

            blur-3xl

            bg-blue-500/20
          "
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[20%]
            top-0

            h-full
            w-[20vw]

            max-w-[180px]
            min-w-[80px]

            blur-3xl

            bg-fuchsia-500/20
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-20

          flex
          flex-col
          items-center
          justify-center

          text-center

          px-4
          sm:px-6
          md:px-10

          w-full
        "
      >
        {/* BIG TEXT */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-black
            text-white

            leading-none

            tracking-[-2px]
            sm:tracking-[-4px]
            md:tracking-[-6px]

            text-[18vw]
            sm:text-[16vw]
            md:text-[14vw]
            lg:text-[12vw]
            xl:text-[10vw]

            max-text

            whitespace-nowrap
          "
        >
          MY WORKS
        </motion.h1>

        {/* SMALL TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="
            mt-6
            sm:mt-8

            uppercase

            tracking-[4px]
            sm:tracking-[8px]

            text-zinc-500

            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-base

            font-semibold
          "
        >
          Crafting Digital Experiences
        </motion.p>

        {/* ITALIC TEXT */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="
            text-white
            leading-none

            mt-3
            sm:mt-4

            text-[8vw]
            sm:text-[6vw]
            md:text-[5vw]
            lg:text-[4vw]

            max-w-full
          "
          style={{
            fontFamily: "Quintessential",
          }}
        >
          with passion & code.
        </motion.h2>
      </div>
    </section>
  );
};

export default WorksHero;
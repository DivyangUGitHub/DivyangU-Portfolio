"use client";

import GithubHeatmap from "./GithubHeatmap";

import { motion } from "framer-motion";

export default function GithubActivity() {
  return (
    <section className="bg-black py-32 text-white">
      {/* HEADING */}
      <div className="text-center">

        {/* TOP TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-6

            text-center

            text-xs

            uppercase

            tracking-[5px]

            text-zinc-500
          "
        >
          MY CODE JOURNEY
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
          font-black
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          "
        >
          GitHub Activity
        </motion.h1>

        {/* OPEN SOURCE TEXT */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
         className="
  mt-2

  pb-5

  leading-[1.5]

    sm:text-4xl
    md:text-5xl
    lg:text-6xl
  quintessential-regular
"
          style={{
            background:
              "linear-gradient(to right, rgb(217,70,239), rgb(255,0,128), rgb(0,170,255), rgb(255,200,70))",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          && Open Source
        </motion.h2>
      </div>

      {/* CALENDAR */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
        className="
          mt-24

          flex

          justify-center

          overflow-x-auto

          px-5
        "
      >
<GithubHeatmap />
      </motion.div>
    </section>
  );
}
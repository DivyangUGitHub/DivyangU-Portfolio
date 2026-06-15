"use client";

import {
  ArrowRight,
  Figma,
  Github,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const tools = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    link: "https://openai.com",
  },

  {
    icon: <Github className="w-7 h-7" />,
    link: "https://github.com",
  },

  {
    icon: <Figma className="w-7 h-7" />,
    link: "https://figma.com",
  },
];

export default function FavoriteToolsCard() {

  return (

    <motion.a

      href="https://github.com"

      target="_blank"

      whileHover={{
        boxShadow:
          "0 0 0 0.5px rgba(120,120,255,0.9)",
      }}

      transition={{
        duration: 0.12,
      }}

      className="
        group

        relative

        block

        overflow-hidden

        rounded-[34px]

        border
        border-white/[0.07]

        hover:border-[#6d6dff]

        bg-[#050505]

        h-[320px]

        p-8

        transition-all
        duration-300
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500

          bg-[radial-gradient(circle_at_center,rgba(80,80,255,0.12),transparent_65%)]
        "
      />

      {/* TOP ICON ROW */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-center

          gap-6
        "
      >

        {tools.map((tool, i) => (

          <motion.a

            key={i}

            href={tool.link}

            target="_blank"

            whileHover={{
              y: -4,
            }}

            className="
              group/tool

              relative

              flex
              items-center
              justify-center

              w-[92px]
              h-[92px]

              rounded-[26px]

              border
              border-white/[0.08]

              bg-[#0c0c0c]

              transition-all
              duration-300

              hover:border-[#7272ff]
            "
          >

            {/* INNER SHADOW */}
            <div
              className="
                absolute
                inset-[6px]

                rounded-[20px]

                border
                border-white/[0.05]
              "
            />

            {/* ICON */}
            <div
              className="
                relative
                z-10

                text-[#ff8a65]

                group-hover/tool:scale-110

                transition-all
                duration-300
              "
            >
              {tool.icon}
            </div>

          </motion.a>

        ))}

      </div>

      {/* TEXT */}
      <div
        className="
          absolute
          bottom-8
          left-0
          right-0

          z-10

          text-center
        "
      >

        <p
          className="
            text-white/35

            text-xs

            tracking-[0.25em]
            uppercase

            font-semibold
          "
        >
          Uses
        </p>

        <h2
          className="
            mt-3

            text-white

            text-[32px]

            leading-none

            font-bold
          "
        >
          Check out my
          <br />
          favorite tools
        </h2>

      </div>

      {/* HOVER BUTTON */}
      <motion.div

        initial={{
          opacity: 0,
          scale: 0.7,
        }}

        whileHover={{
          opacity: 1,
          scale: 1,
        }}

        className="
          absolute
          bottom-8
          right-8

          z-20

          flex
          items-center
          justify-center

          w-12
          h-12

          rounded-full

          bg-white/10

          backdrop-blur-xl

          border
          border-white/10
        "
      >

        <ArrowRight
          className="
            w-5
            h-5

            text-white
          "
        />

      </motion.div>

    </motion.a>
  );
}
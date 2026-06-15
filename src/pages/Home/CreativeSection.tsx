"use client";

import GithubCard from "../../components/GithubCard";
import LeetcodeCard from "../../components/LeetcodeCard";
import SpotifyCard from "../../components/SpotifyCard";

import {
  motion,
} from "framer-motion";

export default function CreativeSection() {

  return (

    <section
      className="
        relative

        w-full

        overflow-hidden

        bg-black
        mt-40

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24

        pt-0 pb-24
      "
    >

      {/* BG */}
      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[radial-gradient(circle_at_top,#1d4ed840,transparent_30%),radial-gradient(circle_at_bottom,#9333ea30,transparent_30%)]
        "
      />

      {/* CONTAINER */}
      <div
        className="
          relative
          z-10

          max-w-[1700px]

          mx-auto
        "
      >

        {/* TOP TEXT */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
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
            text-center

            mb-20
          "
        >

          <p
            className="
              uppercase

              tracking-[6px]

              text-zinc-500

              text-xs
              sm:text-sm
            "
          >
            BEHIND THE CURTAINS
          </p>

          <h1
            className="
              mt-6

              font-black

              leading-[0.9]

              text-white
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
            "
          >

            Decoding logic

            <br />

          <span
  className="
    relative

    top-5

    bg-gradient-to-r
    from-violet-500
    via-fuchsia-500
    to-pink-500

    bg-clip-text

    text-transparent
  "

  style={{
    fontFamily:
      "'Quintessential', serif",
  }}
>
  && the lyrics
</span>

          </h1>

        </motion.div>

{/* GRID */}
<div
  className="
    grid

    grid-cols-1
    lg:grid-cols-3

    gap-4
    xl:gap-5

    items-stretch
  "
>

          {/* GITHUB */}
  <motion.div

    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.6,
      delay: 0.1,
    }}

    viewport={{
      once: true,
    }}

   className="
  h-full

  [&>*]:h-[450px]
"
  >

    <GithubCard />

  </motion.div>


          {/* LEETCODE */}
        
  <motion.div

    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.6,
      delay: 0.2,
    }}

    viewport={{
      once: true,
    }}

   className="
  h-full

  [&>*]:h-[450px]
"
  >

    <LeetcodeCard />

  </motion.div>

          {/* SPOTIFY */}
<motion.div

    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.6,
      delay: 0.3,
    }}

    viewport={{
      once: true,
    }}

   className="
  h-full

  [&>*]:h-[430px]
"
  >

    <SpotifyCard />

  </motion.div>

</div>

      </div>

    </section>
  );
}
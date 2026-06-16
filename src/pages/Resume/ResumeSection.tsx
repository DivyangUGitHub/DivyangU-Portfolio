import { motion } from "framer-motion";
import {
  Download,
  Eye,
  FileText,
} from "lucide-react";

const ResumeSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden

        px-4
        sm:px-6
        md:px-10
        lg:px-16

        py-20
        md:py-28
        lg:py-36
      "
    >
      {/* RGB BG */}
      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[radial-gradient(circle_at_top_left,#2563eb30,transparent_30%),radial-gradient(circle_at_bottom_right,#a21caf30,transparent_30%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20

          max-w-[1600px]
          mx-auto
        "
      >
        {/* TOP */}
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
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            mb-16
            md:mb-24
          "
        >
          <p
            className="
              uppercase

              tracking-[4px]
              sm:tracking-[8px]

              text-zinc-500

              text-[10px]
              sm:text-xs
              md:text-sm

              mb-4
              md:mb-6
            "
          >
            MY RESUME
          </p>

          <h1
            className="
              font-black
              text-white

              leading-[0.9]

              tracking-[-2px]
              sm:tracking-[-4px]
              md:tracking-[-6px]

              text-[14vw]
              sm:text-[12vw]
              md:text-[9vw]
              lg:text-[7vw]
            "
          >
            Resume
          </h1>

          <h2
            className="
              text-zinc-400

              mt-3
              md:mt-4

              leading-none

              text-[6vw]
              sm:text-[5vw]
              md:text-[4vw]
              lg:text-[3vw]
            "
            style={{
              fontFamily: "Quintessential",
            }}
          >
            built with passion & skills.
          </h2>
        </motion.div>

        {/* RESUME CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
          whileHover={{
            y: -8,
          }}
          className="
            relative

            max-w-[1400px]
            mx-auto

            rounded-[24px]
            md:rounded-[40px]

            border
            border-white/10

            bg-[#050505]

            overflow-hidden

            p-5
            sm:p-8
            md:p-12
            lg:p-16
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0

              opacity-10

              bg-[radial-gradient(circle_at_top_right,#3b82f6,transparent_35%),radial-gradient(circle_at_bottom_left,#d946ef,transparent_35%)]
            "
          />

          <div
            className="
              relative
              z-10

              grid
              grid-cols-1
              lg:grid-cols-2

              gap-10
              md:gap-16

              items-center
            "
          >
            {/* LEFT */}
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4

                  mb-6
                  md:mb-8
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    md:w-16
                    md:h-16

                    rounded-2xl

                    bg-white/5

                    flex
                    items-center
                    justify-center

                    border
                    border-white/10
                  "
                >
                  <FileText
                    size={30}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-5xl

                      font-black

                      text-white
                    "
                  >
                    My Resume
                  </h3>

                  <p
                    className="
                      text-zinc-500

                      mt-1
                      md:mt-2

                      text-sm
                      md:text-base
                    "
                  >
                    Experience, Skills & Projects
                  </p>
                </div>
              </div>

              <p
                className="
                  text-zinc-400

                  leading-[1.8]

                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                Explore my professional journey,
                development experience,
                AI projects, design skills,
                and creative engineering work.
              </p>

              {/* BUTTONS */}
              <div
                className="
                  flex
                  flex-wrap

                  gap-4

                  mt-8
                  md:mt-10
                "
              >
                {/* VIEW */}
                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="/DivynagU.Resume.pdf"
                  target="_blank"
                  className="
                    flex
                    items-center
                    justify-center

                    gap-2
                    md:gap-3

                    px-5
                    sm:px-6
                    md:px-8

                    py-3
                    md:py-4

                    rounded-full

                    bg-white
                    text-black

                    text-sm
                    md:text-base

                    font-semibold
                  "
                >
                  <Eye size={18} />
                  View Resume
                </motion.a>

                {/* DOWNLOAD */}
                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="/DU.Resume.pdf"
                  download
                  className="
                    flex
                    items-center
                    justify-center

                    gap-2
                    md:gap-3

                    px-5
                    sm:px-6
                    md:px-8

                    py-3
                    md:py-4

                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    text-white

                    text-sm
                    md:text-base

                    font-semibold

                    hover:bg-white
                    hover:text-black

                    transition-all
                    duration-300
                  "
                >
                  <Download size={18} />
                  Download
                </motion.a>
              </div>
            </div>

            {/* RIGHT PREVIEW */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
                relative

                rounded-[20px]
                md:rounded-[30px]

                overflow-hidden

                border
                border-white/10

                bg-black

                w-full
              "
            >
              <img
                src="/DU.Resume.png"
                alt="Resume"
                className="
                  w-full

                  object-cover

                  aspect-[4/5]
                  md:aspect-auto
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  md:bottom-6

                  left-4
                  md:left-6
                "
              >
                <p
                  className="
                    text-white

                    text-lg
                    sm:text-xl
                    md:text-2xl

                    font-bold
                  "
                >
                  Resume Preview
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
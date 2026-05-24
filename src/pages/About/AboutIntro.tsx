import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  MapPin,
  Briefcase,
} from "lucide-react";

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg",
  "/about4.jpg",
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) =>
          (prev + 1) % images.length
      );
    }, 2000);

    return () =>
      clearInterval(interval);
  }, []);

  const { scrollYProgress } =
    useScroll();

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const getImage = (
    index: number
  ) => {
    return images[
      (activeIndex + index) %
        images.length
    ];
  };

  return (
    <section
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden

        px-6
        sm:px-10
        md:px-16
        lg:px-24
        xl:px-32

        py-24
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-10%]
            left-[10%]

            w-[500px]
            h-[500px]

            bg-indigo-500/10

            blur-[180px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            right-[10%]

            w-[500px]
            h-[500px]

            bg-fuchsia-500/10

            blur-[180px]
            rounded-full
          "
        />
      </div>

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

      {/* HERO */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          items-center
          justify-center

          text-center

          min-h-screen
        "
      >
        {/* BIG TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
          }}
          className="
            text-[5rem]
            sm:text-[7rem]
            md:text-[10rem]
            lg:text-[14rem]
            xl:text-[17rem]

            leading-[0.9]

            font-black

            tracking-[-6px]
            sm:tracking-[-10px]

            uppercase

            text-white
          "
        >
          ABOUT ME
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-6

            uppercase

            tracking-[8px]
            sm:tracking-[12px]

            text-zinc-500

            text-[10px]
            sm:text-sm
          "
        >
          GET TO KNOW MORE ABOUT
        </motion.p>

        {/* ITALIC */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-white

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl

            mt-4

            italic
            font-light
          "
          style={{
            fontFamily:
              "'quintessential-regular', serif",
          }}
        >
          who i am.
        </motion.h2>
      </div>

      {/* SECOND SECTION */}
      <div
        className="
          relative
          z-10

          max-w-[1450px]
          mx-auto

          min-h-screen

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-20
          xl:gap-28

          items-center
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            max-w-[720px]
          "
        >
          <p
            className="
              uppercase

              tracking-[6px]

              text-zinc-500

              text-xs

              mb-8
            "
          >
            A LITTLE ABOUT ME
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl

              font-black

              leading-[1.05]
              tracking-[-4px]

              text-white
            "
          >
            Nice to meet you.
            <br />

            <span
              className="
                inline-flex
                items-center

                mt-3

                overflow-visible
              "
            >
              I&apos;m{" "}

              <motion.span
                animate={{
                  textShadow: [
                    "0 0 25px rgba(59,130,246,0.5)",
                    "0 0 45px rgba(217,70,239,0.9)",
                    "0 0 25px rgba(236,72,153,0.6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  ml-4

                  inline-block

                  pb-5
                  pr-3

                  leading-[1.2]

                  text-transparent
                  bg-clip-text

                  bg-gradient-to-r
                  from-blue-500
                  via-fuchsia-500
                  to-pink-500
                "
                style={{
                 fontFamily: 
                 "'Quintessential', serif",
                  }}
              >
                Divyang Upreti
              </motion.span>
            </span>
          </h1>

          {/* PARA */}
          <div
            className="
              mt-10

              space-y-8

              text-zinc-400

              text-base
              sm:text-lg

              leading-[1.9]

              max-w-[650px]
            "
          >
            <p>
              I transform complex ideas into
              high-speed, scalable web products.
              As an engineering-driven developer,
              I focus on the entire stack —
              prioritizing clean architecture,
              seamless performance, and modern
              solutions that drive real value.
            </p>

            <p>
              Beyond writing code, I build
              immersive experiences, AI systems,
              and futuristic digital products
              that blend design with development.
            </p>

            <p>
              My philosophy is simple:
              build things that feel premium,
              interactive, modern, and unforgettable.
            </p>
          </div>

          {/* SOCIALS */}
          <div
            className="
              flex
              items-center
              gap-5

              mt-10
            "
          >
            <a
              href="#"
              className="
                text-zinc-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="
                text-zinc-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <Github size={20} />
            </a>

            <a
              href="#"
              className="
                text-zinc-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-4

              mt-14

              text-white
              font-semibold
            "
          >
            Dive in deeper

            <div
              className="
                w-10
                h-10

                rounded-full

                border
                border-white/10

                flex
                items-center
                justify-center
              "
            >
              <ArrowRight size={16} />
            </div>
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            h-[750px]

            flex
            items-center
            justify-center

            overflow-hidden
          "
        >
          {/* LEFT PREVIEW */}
          <motion.img
            key={getImage(0)}
            src={getImage(0)}
            animate={{
              x: -260,
              scale: 0.8,
              rotateY: 35,
              opacity: 0.4,
            }}
            transition={{
              duration: 1,
            }}
            className="
              absolute
              z-10

              w-[220px]
              h-[420px]

              rounded-[35px]
              object-cover

              blur-[1px]
            "
          />

          {/* MAIN IMAGE */}
          <motion.div
            key={getImage(1)}
            initial={{
              rotateY: -90,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
            "
          >
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              src={getImage(1)}
              className="
                w-[380px]
                h-[640px]

                rounded-[50px]
                object-cover

                border
                border-white/10

                shadow-[0_60px_200px_rgba(0,0,0,0.8)]
              "
            />

            <div
              className="
                absolute
                inset-0

                rounded-[50px]

                border
                border-white/20

                shadow-[0_0_80px_rgba(255,255,255,0.1)]
              "
            />
          </motion.div>

          {/* RIGHT PREVIEW */}
          <motion.img
            key={getImage(2)}
            src={getImage(2)}
            animate={{
              x: 260,
              scale: 0.8,
              rotateY: -35,
              opacity: 0.4,
            }}
            transition={{
              duration: 1,
            }}
            className="
              absolute
              z-10

              w-[220px]
              h-[420px]

              rounded-[35px]
              object-cover

              blur-[1px]
            "
          />
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div
        className="
          relative

          w-screen

          left-1/2
          -translate-x-1/2

          flex
          flex-col
          items-center
          justify-center

          text-center

          mt-24
          mb-16

          px-6
        "
      >
        {/* SMALL */}
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
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            uppercase

            tracking-[8px]

            text-zinc-500
            text-sm

            mb-5
          "
        >
          THE EXPERIENCE
        </motion.p>

        {/* MAIN */}
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
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            flex-col
            items-center
            justify-center

            text-center

            leading-[0.92]

            overflow-visible
          "
        >
          <h1
            className="
              text-[52px]
              sm:text-[72px]
              md:text-[92px]

              font-black

              tracking-[-6px]

              text-white

              whitespace-nowrap

              leading-none
            "
          >
            Experience That
          </h1>

<motion.h2
  animate={{
    backgroundPosition: [
      "0% 50%",
      "100% 50%",
      "0% 50%",
    ],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    mt-3

    px-14
    py-5

    text-[38px]
    sm:text-[54px]
    md:text-[68px]

    leading-[1.3]

    whitespace-nowrap

    overflow-visible

    text-transparent
    bg-clip-text

    bg-[length:300%_300%]

    bg-gradient-to-r
    from-blue-500
    via-fuchsia-500
    to-pink-500
  "
  style={{
    fontFamily: "'Quintessential', serif",
  }}
>
  Brings Ideas to Life
</motion.h2>
        </motion.div>
      </div>
     <div
        className="
          relative

          max-w-[1500px]
          mx-auto

          px-10
        "
      >
        {/* BASE DARK LINE */}

        <div
          className="
            absolute

            left-[42%]
            top-0

            w-[5px]
            h-full

            rounded-full

            bg-zinc-900
          "
        />

        {/* ACTIVE RGB LINE */}

        <motion.div
          style={{
            height: lineHeight,
          }}
          className="
            absolute

            left-[42%]
            top-0

            w-[5px]

            rounded-full

            bg-gradient-to-b
            from-fuchsia-500
            via-red-500
            to-cyan-400

            shadow-[0_0_35px_rgba(236,72,153,0.9)]
          "
        />

        {/* ================= ITEM 1 ================= */}

        <div
          className="
            relative

            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]

            gap-40

            mb-52
          "
        >
          {/* BALL */}

          <motion.div
            style={{
              top: useTransform(
                scrollYProgress,
                [0, 0.5],
                ["0%", "100%"]
              ),
            }}
            className="
              absolute

              left-[42%]

              -translate-x-1/2

              z-40
            "
          >
            <div
              className="
                relative

                w-11
                h-11

                rounded-full

                border-[3px]
                border-fuchsia-500

                bg-black

                shadow-[0_0_40px_rgba(236,72,153,1)]
              "
            >
              <div
                className="
                  absolute
                  inset-[6px]

                  rounded-full

                  bg-gradient-to-r
                  from-fuchsia-500
                  via-red-500
                  to-cyan-400
                "
              />
            </div>
          </motion.div>

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
            className="
              text-right

              pr-32
            "
          >
            <p
              className="
                text-zinc-400

                font-semibold

                mb-6
              "
            >
              MAY 2025 - PRESENT
            </p>

            <h1
              className="
                text-5xl

                italic

                text-fuchsia-500

                mb-8
              "
              style={{
                fontFamily:
                  "'Quintessential', serif",
              }}
            >
              Intel
            </h1>

            <div
              className="
                space-y-4

                text-zinc-400
              "
            >
              <p
                className="
                  flex
                  items-center
                  justify-end
                  gap-3
                "
              >
                <MapPin size={18} />

                Chandigarh, India
              </p>

              <p
                className="
                  flex
                  items-center
                  justify-end
                  gap-3
                "
              >
                <Briefcase size={18} />

                Internship (Remote/On-site)
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
            className="
              pl-28
            "
          >
            <h1
              className="
                text-5xl

                font-bold

                text-white

                mb-12
              "
            >
              AI Engineer Intern
            </h1>

            <div
              className="
                space-y-8

                text-zinc-300

                text-lg

                leading-[2]
              "
            >
              <p>
                Engineered scalable AI models using deep learning and
                large-scale datasets.
              </p>

              <p>
                Built and fine-tuned transformer models for NLP tasks,
                achieving faster inference.
              </p>

              <p>
                Streamlined deployment with ONNX and TensorRT.
              </p>
            </div>

            {/* SKILLS */}

            <div
              className="
                flex
                flex-wrap
                gap-4

                mt-12
              "
            >
              {[
                "PyTorch",
                "TensorFlow",
                "ONNX",
                "TensorRT",
                "Python",
                "Agile",
              ].map((skill) => (
                <div
                  key={skill}
                  className="
                    px-5
                    py-2.5

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.03]

                    text-white
                    text-sm

                    backdrop-blur-xl

                    hover:border-fuchsia-500/50

                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= ITEM 2 ================= */}

        <div
          className="
            relative

            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]

            gap-40
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
            className="
              text-right

              pr-32
            "
          >
            <p
              className="
                text-zinc-400

                font-semibold

                mb-6
              "
            >
              JAN 2025 - CURRENT
            </p>

            <h1
              className="
                text-5xl

                italic

                text-cyan-400

                mb-8
              "
              style={{
                fontFamily:
                  "'Quintessential', serif",
              }}
            >
              Open Source
            </h1>

            <div
              className="
                space-y-4

                text-zinc-400
              "
            >
              <p
                className="
                  flex
                  items-center
                  justify-end
                  gap-3
                "
              >
                <MapPin size={18} />

                Global
              </p>

              <p
                className="
                  flex
                  items-center
                  justify-end
                  gap-3
                "
              >
                <Briefcase size={18} />

                Contributor
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
            className="
              pl-28
            "
          >
            <h1
              className="
                text-5xl

                font-bold

                text-white

                mb-12
              "
            >
              Open Source Contributor
            </h1>

            <div
              className="
                space-y-8

                text-zinc-300

                text-lg

                leading-[2]
              "
            >
              <p>
                Actively contributing to open-source projects while
                sharpening DSA skills.
              </p>

              <p>
                Focused on improving code quality and collaborating
                globally.
              </p>

              <p>
                Exploring scalable UI/UX and backend integrations.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-4

                mt-12
              "
            >
              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Turborepo",
              ].map((skill) => (
                <div
                  key={skill}
                  className="
                    px-5
                    py-2.5

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.03]

                    text-white
                    text-sm

                    backdrop-blur-xl

                    hover:border-cyan-400/50

                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
    </div>
  </div>
</section>
  );
};


export default AboutSection;
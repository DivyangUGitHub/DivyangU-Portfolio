
"use client";

import Timeline from "./Timeline";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Twitter,
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
          (prev + 1) %
          images.length
      );
    }, 2000);

    return () =>
      clearInterval(interval);
  }, []);

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
      {/* BACKGROUND */}
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
        {/* LEFT */}
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
              I transform complex
              ideas into high-speed,
              scalable web products.
            </p>

            <p>
              Beyond writing code,
              I build immersive
              experiences, AI systems,
              and futuristic digital
              products.
            </p>

            <p>
              My philosophy is simple:
              build things that feel
              premium, interactive,
              modern, and unforgettable.
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
              href="https://www.linkedin.com/in/divyang-upreti/"
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
              href="https://github.com/DivyangUGitHub"
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
              href="https://x.com/Divyang_Upreti_"
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
        </motion.div>

        {/* RIGHT */}
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
          {/* LEFT */}
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

          {/* MAIN */}
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
              "
            />
          </motion.div>

          {/* RIGHT */}
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

      {/* ========== EDUCATION SECTION ========== */}
      <div className="relative z-10 max-w-7xl ml-auto mr-[330px] px-0 py-20">
        
        {/* Section Header */}
        <div className="text-left mb-12 ml-0 md:-ml-8">
          <p className="text-sm uppercase tracking-[6px] text-zinc-500 mb-10">
            ACADEMIC JOURNEY
          </p>
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Education &
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-blue-500 
                via-purple-500 
                to-pink-500
                bg-[length:300%_300%]
                quintessential-regular
              "
            >
              {" "}Qualifications
            </motion.span>
          </h2>
        </div>

        {/* ✅ EDUCATION CONTENT - ADD KARO */}
        <div className="text-left ml-0 md:-ml-8 max-w-3xl">
          <div
            className="
              mt-6
              space-y-8
              text-zinc-400
              text-base
              sm:text-lg
              leading-[1.9]
            "
          >
            {/* Degree & College */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                B.Tech in Computer Science
              </h3>
              <p className="text-purple-400 text-lg mb-1">
                SRM University, India
              </p>
              <p className="text-zinc-500 text-sm">
                2023 — 2027 • CGPA: 8.5/10
              </p>
            </div>

            {/* About College */}
            <p>
              SRM University is renowned for its excellence in engineering education, 
              offering cutting-edge facilities and a curriculum designed to meet 
              global industry standards. The diverse campus culture and rigorous 
              academic environment have played a key role in shaping my technical 
              expertise and professional growth.
            </p>

            {/* Key Courses - Permanent white line neeche */}
            <div>
              <p className="text-white font-semibold mb-3 inline-block border-b border-white pb-1">
                Key Courses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                {["Data Structures & Algorithms", "Machine Learning", "Deep Learning", 
                  "Artificial Intelligence", "Compiler Design", "Database Management Systems", "Operating Systems",
                  "Computer Networks", "Cloud Computing"].map((course, i) => (
                  <span 
                    key={i} 
                    className="text-zinc-400 text-base relative inline-block cursor-pointer group/course hover:text-white transition-all duration-300"
                  >
                    • {course}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/course:w-full"></span>
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond Academics - Permanent white line neeche */}
            <div>
              <p className="text-white font-semibold mb-3 inline-block border-b border-white pb-1">
                Leadership & Community Engagement
              </p>
              <ul className="space-y-3 mt-3">
                
                {/* TEDx SRMIST */}
                <li className="text-zinc-400">
                  <span className="text-white font-medium">TEDx SRMIST</span>
                  <br />
                  Co-Technical Lead
                  <br />
                  <span className="text-sm text-zinc-500">
                    ● Collaborated with the technical team to develop and manage the TEDx SRMIST platform. Coordinated with 10+ developers and supported deployment, integration, and event operations.
                  </span>
                </li>

                {/* Khel SRMIST */}
                <li className="text-zinc-400 mt-3">
                  <span className="text-white font-medium">Khel SRMIST</span>
                  <br />
                  Head Coordinator
                  <br />
                  <span className="text-sm text-zinc-500">
                   ● Led the organization of a university-level sports event, managing logistics, scheduling, volunteers, and on-ground execution to ensure smooth event operations.
                    </span>
                </li>

                {/* CCDF */}
                <li className="text-zinc-400 mt-3">
                  <span className="text-white font-medium">CCDF</span>
                  <br />
                  Community Engagement Intern
                  <br />
                  <span className="text-sm text-zinc-500">
                  ● Contributed to digital literacy, community outreach, and women empowerment initiatives. Worked with teams to support social impact programs and community engagement activities.
                   </span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* EXPERIENCE TITLE */}

<div
  className="
    relative
    z-10

    flex
    flex-col
    items-center
    justify-center

    text-center

    py-20

    mt-20
  "
>
  {/* FIRST LINE */}
  <h1
    className="
      text-white

    sm:text-4xl
    md:text-5xl
    lg:text-6xl

      font-black

      tracking-[-4px]

      leading-[1.1]

      pb-2
    "
  >
    Experience That
  </h1>

  {/* SECOND LINE */}
  <div
    className="
      flex
      items-center
      justify-center

      gap-4

      flex-wrap

      w-full

      overflow-visible
    "
  >
    {/* BRINGS */}
    <h1
      className="
        text-white

    sm:text-4xl
    md:text-5xl
    lg:text-6xl

        font-black

        tracking-[-4px]

        leading-[1.1]

        pb-2
      "
    >
      Brings
    </h1>

    {/* IDEAS TO LIFE */}
    <motion.span
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        quintessential-regular

        text-5xl
        sm:text-7xl

        leading-[1.2]

        pb-4

        inline-block

        whitespace-nowrap

        pr-6

        text-transparent
        bg-clip-text

        bg-[length:300%_300%]

        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-pink-500
      "
    >
      Ideas to Life
    </motion.span>
  </div>
</div>

      {/* TIMELINE */}
      <Timeline
        items={[
          {
            date: "2025 — PRESENT",

            company: "TEDx SRMIST",

            companyGradient:
              "linear-gradient(90deg,#ff2d78,#ff7ad9)",

            location:
              "India",

            jobType:
              "Co-Technical Lead",

            title:
              "Co-Technical Lead",

            description: [
              "Collaborated with technical team to architect and deploy the official TEDx event platform.",

              "Coordinated a team of 10+ developers.",

              "Managed deployment pipelines and performance optimization.",

              "Worked with Next.js and Agile workflows.",
            ],

            tags: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
            ],
          },

          {
            date: "2025",

            company: "Craft and Community Development Foundation (CCDF)",

            companyGradient:
              "linear-gradient(90deg,#60a5fa,#a855f7)",

            location: "On-Site",

            jobType:
              "Community Engagement Intern",

            title:
              "Community Engagement (Intern)",

            description: [
              "Contributed to women empowerment initiatives by assisting in digital literacy and upskilling sessions.",

              "Collaborated with teams to support community welfare programs and outreach activities.",

              "Demonstrated leadership, teamwork, and a service-oriented mindset in social impact projects.",

              "Actively participated in organizing and executing community engagement programs.",
            ],

            tags: [
            ],
          },
        ]}
      />

    </section>
  );
};

export default AboutSection;

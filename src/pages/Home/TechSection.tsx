"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiExpo,
  SiClerk,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiFastapi,
  SiSupabase,
  SiGooglecloud,
  SiPycharm,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiChainlink,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiSemanticweb,
  SiGooglegemini,
  SiDatabricks,
} from "react-icons/si";

/* =========================================================
   TECH STACK
========================================================= */

const techStack = [
  { name: "ReactJS", icon: <SiReact />, color: "text-cyan-400" },
  { name: "NextJS", icon: <SiNextdotjs />, color: "text-white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Motion", icon: <SiFramer />, color: "text-yellow-300" },

  { name: "NodeJS", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "ExpressJS", icon: <SiExpress />, color: "text-gray-200" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Prisma", icon: <SiPrisma />, color: "text-white" },

  { name: "Git", icon: <SiGit />, color: "text-orange-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-white" },

  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "Docker", icon: <SiDocker />, color: "text-sky-500" },
  { name: "Expo", icon: <SiExpo />, color: "text-indigo-300" },
  { name: "Clerk", icon: <SiClerk />, color: "text-gray-200" },
  { name: "Python", icon: <SiPython />, color: "text-blue-400" },
  { name: "Java", icon: <SiOpenjdk />, color: "text-red-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
  { name: "FastAPI", icon: <SiFastapi />, color: "text-green-400" },
  { name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-blue-500" },
  { name: "PyCharm", icon: <SiPycharm />, color: "text-green-300" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400" },
  { name: "PyTorch", icon: <SiPytorch />, color: "text-red-300" },
  { name: "OpenAI", icon: <SiOpenai />, color: "text-green-400" },
  { name: "Chainlink", icon: <SiChainlink />, color: "text-blue-400" },
  { name: "NumPy", icon: <SiNumpy />, color: "text-blue-300" },
  { name: "Pandas", icon: <SiPandas />, color: "text-blue-300" },
  { name: "Plotly", icon: <SiPlotly />, color: "text-blue-300" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-blue-300" },
  { name: "Semantic Web", icon: <SiSemanticweb />, color: "text-blue-300" },
  { name: "Google Gemini", icon: <SiGooglegemini />, color: "text-green-400" },
  { name: "Databricks", icon: <SiDatabricks />, color: "text-red-400" },
];

/* =========================================================
   RUNNING STRAP DATA
========================================================= */

const WORDS_TOP = [
  "READY",
  "IMMERSIVE",
  "PROTECTED",
  "DEPENDABLE",
  "CAPTIVATING",
  "USER-FRIENDLY",
  "ADAPTIVE",
  "FLUID",
  "FUTURE-PROOF",
  "SECURE",
];

const WORDS_BOTTOM = [
  "INNOVATIVE",
  "SEAMLESS",
  "RELIABLE",
  "BOLD",
  "DYNAMIC",
  "INTUITIVE",
  "VERSATILE",
  "POWERFUL",
  "REFINED",
  "CONNECTED",
];

/* =========================================================
   STRAP COMPONENTS
========================================================= */

const Star = () => (
  <span style={strapStyles.star}>
    ✦
  </span>
);

const MarqueeContent = ({
  words,
}: {
  words: string[];
}) => {
  const repeated = [
    ...words,
    ...words,
    ...words,
    ...words,
    ...words,
    ...words,
    ...words,
  ];

  return (
    <>
      {repeated.map((word, i) => (
        <span
          key={i}
          style={strapStyles.item}
        >
          <span style={strapStyles.word}>
            {word}
          </span>

          <Star />
        </span>
      ))}
    </>
  );
};

const Strap = ({
  words,
  rotate,
  direction,
  speed = 20,
}: {
  words: string[];
  rotate: number;
  direction: "left" | "right";
  speed?: number;
}) => {
  const trackRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;

    if (!el) return;

    let animId: number;

    let pos = 0;

    let halfWidth = 0;

    let pxPerMs = 0;

    let lastTs: number | null = null;

    const measure = () => {
      halfWidth =
        el.scrollWidth / 2;

      pxPerMs =
        halfWidth /
        (speed * 1000);

      if (direction === "right") {
        pos = -halfWidth;
      }
    };

    const step = (ts: number) => {
      if (lastTs === null) {
        measure();
        lastTs = ts;
      }

      const dt = ts - lastTs;

      lastTs = ts;

      if (direction === "left") {
        pos -= pxPerMs * dt;

        if (pos <= -halfWidth) {
          pos += halfWidth;
        }
      } else {
        pos += pxPerMs * dt;

        if (pos >= 0) {
          pos -= halfWidth;
        }
      }

      el.style.transform = `translate3d(${pos}px,0,0)`;

      animId =
        requestAnimationFrame(step);
    };

    animId =
      requestAnimationFrame(step);

    return () =>
      cancelAnimationFrame(animId);
  }, [direction, speed]);

  return (
    <div
      style={{
        ...strapStyles.strap,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        ref={trackRef}
        style={strapStyles.track}
      >
        <MarqueeContent words={words} />
      </div>
    </div>
  );
};

const RunningStrap = () => {
  return (
    <div style={strapStyles.scene}>
      <Strap
        words={WORDS_TOP}
        rotate={-9}
        direction="left"
        speed={45}
      />

      <Strap
        words={WORDS_BOTTOM}
        rotate={9}
        direction="right"
        speed={45}
      />
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TechSection = () => {

  /* SCROLL BASED ORB ROTATION */
  const { scrollY } = useScroll();

  const rotate = useTransform(
    scrollY,
    [0, 3000],
    [0, 1080]
  );

  return (
    <section className="relative overflow-hidden bg-black px-4 py-10 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">

        {/* PREMIUM ORB */}
        <motion.div
          style={{
            rotate,
          }}
          className="
            relative
            mt-0 
            mb-0
            flex
            items-center
            justify-center
          "
        >
          {/* IMAGE ONLY */}
          <img
            src="/orb.png"
            alt="Orb"
            draggable={false}
            className="
              relative

              w-[180px]
              sm:w-[240px]
              md:w-[300px]
              lg:w-[400px]

              object-contain
              select-none

              opacity-[0.32]

              saturate-[0.7]
              brightness-[0.9]
              contrast-[1.1]

              blur-[0.4px]
            "
          />
        </motion.div>

{/* HEADING */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mb-16 text-center -mt-20"
>
  <p className="mb-3 text-xs uppercase tracking-[0.4em] text-zinc-400">
    MY SKILLSET
  </p>

  <h2
    className="
      flex
      items-center
      justify-center
      gap-2
      md:gap-4
      text-center
      leading-none
      mt-6
    "
  >
<span
  className="
    text-white
    font-black
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
  "
>
  The Magic
</span>

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
      className="text-transparent bg-clip-text"
      style={{
        fontFamily: "'Bodoni Moda', serif",
        fontStyle: "italic",
        backgroundImage:
          "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899,#ff2fb3,#7c3aed)",
        backgroundSize: "300% 100%",
      }}
    >
      <span
        className="
            text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
          font-bold
        "
      >
        Behind
      </span>
    </motion.span>
  </h2>
</motion.div>

        {/* TECH GRID */}
        <div
          className="
            flex max-w-6xl
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              className="
                group relative
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                px-5 py-3
                backdrop-blur-xl
                transition-all duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
              "
            >
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r
                  from-pink-500/0
                  via-white/5
                  to-cyan-500/0
                  opacity-0 blur-xl
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              <span className={`relative text-xl ${tech.color}`}>
                {tech.icon}
              </span>

              <span className="relative text-sm font-medium text-zinc-200 sm:text-base">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL WIDTH STRAP */}
      <div className="mt-28 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <RunningStrap />
      </div>
    </section>
  );
};

export default TechSection;

/* =========================================================
   STRAP STYLES
========================================================= */

const strapStyles: Record<
  string,
  React.CSSProperties
> = {
  scene: {
    width: "100vw",
    height: "420px",
    background: "#000",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  strap: {
    position: "absolute",
    width: "520vw",
    left: "-210vw",
    height: "64px",

    background:
      "linear-gradient(to right,#8b0000 0%,#ff0000 15%,#ff0000 85%,#8b0000 100%)",

    display: "flex",
    alignItems: "center",
    overflow: "hidden",

    boxShadow:
      "0 0 35px rgba(255,0,0,0.55)",

    borderTop:
      "1px solid rgba(255,255,255,0.15)",

    borderBottom:
      "1px solid rgba(255,255,255,0.15)",
  },

  track: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    willChange: "transform",
  },

  item: {
    display: "inline-flex",
    alignItems: "center",
  },

  word: {
    fontFamily:
      "'Arial Black', sans-serif",

    fontSize: "18px",
    fontWeight: 900,
    letterSpacing: "0.18em",
    color: "#ffffff",
    textTransform: "uppercase",
    padding: "0 12px",
    whiteSpace: "nowrap",
  },

  star: {
    color: "#ffffff",
    fontSize: "20px",
    padding: "0 10px",
    lineHeight: 1,
    display: "inline-block",
  },
};
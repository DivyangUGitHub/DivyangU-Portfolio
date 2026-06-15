"use client";

import { useRef } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiVercel,
} from "react-icons/si";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import LiveProjectButton from "../../components/LiveProjectButton";

interface ProjectData {
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    category: "Personal",
    name: "Forge",
    liveUrl: "https://forge-pink-seven.vercel.app/",
    col1Image1: "/Forge.png",
    col1Image2: "/Forge1.png",
    col2Image: "/Forge2.png",
  },

  {
    number: "02",
    category: "Personal",
    name: "LawLab",
    liveUrl: "https://lawlab-self.vercel.app",
    col1Image1: "/lawlab.png",
    col1Image2: "/lawlab1.png",
    col2Image: "/lawlab2.png",
  },

  {
    number: "03",
    category: "Personal · GenAI",
    name: "ResumeIQ",
    liveUrl: "https://resumeiq-harsh.vercel.app/",
    col1Image1: "/resumeiq-hero.png",
    col1Image2: "/resumeiq-feedback.png",
    col2Image: "/resumeiq-score.png",
  },

  {
    number: "04",
    category: "Personal · Design",
    name: "Notch",
    liveUrl: "https://notch-zeta.vercel.app/",
    col1Image1: "/notch-hero.png",
    col1Image2: "/notch-pricing.png",
    col2Image: "/notch-mockup.png",
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({
  project,
  index,
  total,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale =
    1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full"
      style={{
        top: `${96 + index * 28}px`,
      }}
    >
<motion.article
  initial={false}
  whileHover="hover"
  style={{ scale }}
  className="
    relative
    origin-top
    mx-auto
    h-full
    w-full
    flex
    flex-col
    gap-6
    rounded-[60px]
    border
    border-white/10
    bg-black
    p-6
    md:p-8
    overflow-visible
    shadow-[0_0_100px_rgba(255,255,255,0.03)]
  "
>

{/* PREMIUM LEFT PANEL */}
<motion.div
  variants={{
    hover: {
      x: -30,
      opacity: 1,
      scale: 1,
    },
  }}
  initial={{
    x: 60,
    opacity: 0,
    scale: 0.95,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    absolute
    left-[-290px]
    top-[20%]
    -translate-y-1/2
    h-[520px]
    w-[260px]
    rounded-[38px]
    bg-black
    p-[1px]
    hidden
    2xl:flex
    z-40
    overflow-hidden
  "
>
  {/* PURE WHITE RUNNING BORDER */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    }}
    className="
      absolute
      inset-[-150%]
      opacity-100
    "
    style={{
      background:
        "conic-gradient(from 0deg, transparent 0deg, white 40deg, transparent 80deg)",
    }}
  />

  {/* INNER */}
  <div
    className="
      relative
      z-10
      h-full
      w-full
      rounded-[38px]
      bg-black
      p-6
      flex
      flex-col
      gap-6
    "
  >
    {/* HEADER */}
    <div className="flex items-center gap-4">
      <div
        className="
          h-16
          w-16
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          text-3xl
        "
      >
        🚀
      </div>

      <div>
        <span className="text-white/40 uppercase tracking-[0.3em] text-[10px]">
          Overview
        </span>

        <h4 className="text-white text-2xl font-semibold mt-2">
          {project.name}
        </h4>
      </div>
    </div>

    {/* DESCRIPTION */}
    <div className="flex flex-col gap-5 mt-2">
      {[
        "Premium UI interactions",
        "Smooth Framer Motion animations",
        "Fully responsive layouts",
        "Modern dark aesthetic",
        "Performance optimized",
        "Luxury portfolio experience",
      ].map((point) => (
        <div
          key={point}
          className="flex items-start gap-3"
        >
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />

          <p className="text-white/65 text-sm leading-relaxed">
            {point}
          </p>
        </div>
      ))}
    </div>
  </div>
</motion.div>

{/* PREMIUM RIGHT PANEL */}
<motion.div
  variants={{
    hover: {
      x: 30,
      opacity: 1,
      scale: 1,
    },
  }}
  initial={{
    x: -60,
    opacity: 0,
    scale: 0.95,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    absolute
    right-[-290px]
    top-[20%]
    -translate-y-1/2
    h-[520px]
    w-[260px]
    rounded-[38px]
    bg-black
    p-[1px]
    hidden
    2xl:flex
    z-40
    overflow-hidden
  "
>
  {/* PURE WHITE RUNNING BORDER */}
  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    }}
    className="
      absolute
      inset-[-150%]
      opacity-100
    "
    style={{
      background:
        "conic-gradient(from 0deg, transparent 0deg, white 40deg, transparent 80deg)",
    }}
  />

  {/* INNER */}
  <div
    className="
      relative
      z-10
      h-full
      w-full
      rounded-[38px]
      bg-black
      p-6
      flex
      flex-col
      gap-6
    "
  >
    {/* HEADER */}
    <div>
      <span className="text-white/40 uppercase tracking-[0.3em] text-[10px]">
        Tech Stack
      </span>

      <h4 className="text-white text-2xl font-semibold mt-2">
        Technologies
      </h4>
    </div>

    {/* TECH GRID */}
    <div className="grid grid-cols-2 gap-3 mt-2">

      {[
        {
          icon: SiNextdotjs,
          name: "Next.js",
          color: "text-white",
        },
        {
          icon: SiTypescript,
          name: "TS",
          color: "text-blue-500",
        },
        {
          icon: SiTailwindcss,
          name: "Tailwind",
          color: "text-cyan-400",
        },
        {
          icon: SiFramer,
          name: "Framer",
          color: "text-pink-500",
        },
        {
          icon: SiReact,
          name: "React",
          color: "text-cyan-300",
        },
        {
          icon: SiVercel,
          name: "Vercel",
          color: "text-white",
        },
      ].map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-4
              flex
              flex-col
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              hover:bg-white/[0.06]
            "
          >
            <Icon
              className={`
                text-4xl
                ${tech.color}
              `}
            />

            <span className="text-white/75 text-xs font-medium">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</motion.div>
        
        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-6">
          
          {/* LEFT */}
          <div className="flex items-start gap-6 md:gap-10">
            
            {/* NUMBER */}
            <div
              className="
                shrink-0
                font-black
                text-white
                leading-none
              "
              style={{
                fontSize:
                  "clamp(4rem, 10vw, 140px)",
              }}
            >
              {project.number}
            </div>

            {/* TEXT */}
            <div className="flex flex-col pt-3">
              
              <span
                className="
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
                style={{
                  fontSize:
                    "clamp(0.7rem, 1vw, 1rem)",
                }}
              >
                {project.category}
              </span>

              <h3
                className="
                  text-white
                  uppercase
                  font-semibold
                  leading-none
                  mt-3
                "
                style={{
                  fontSize:
                    "clamp(1.5rem, 2vw, 2.3rem)",
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* BUTTON */}
          <div className="shrink-0">
            <LiveProjectButton
              href={project.liveUrl}
            />
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-[40%_60%] gap-5 flex-1 min-h-0">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 min-h-0">
            
            {/* TOP IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[45px]
                bg-[#050505]
                border
                border-white/10
              "
              style={{
                height:
                  "clamp(180px, 16vw, 260px)",
              }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="
                  h-full
                  w-full
                  object-cover
                "
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* BOTTOM IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[45px]
                bg-[#050505]
                border
                border-white/10
              "
              style={{
                height:
                  "clamp(220px, 22vw, 380px)",
              }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="
                  h-full
                  w-full
                  object-cover
                "
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
              overflow-hidden
              rounded-[45px]
              bg-[#050505]
              border
              border-white/10
              min-h-0
            "
          >
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="
                h-full
                w-full
                object-cover
              "
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        bg-black
        px-4
        sm:px-6
        md:px-10
        py-24
      "
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-24">
        
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
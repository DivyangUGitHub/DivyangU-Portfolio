
"use client";

import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

import {
  MapPin,
  Briefcase,
} from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

interface TimelineItem {
  date: string;
  company: string;
  companyGradient: string;
  location: string;
  jobType: string;
  title: string;
  description: string[];
  tags: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({
  items,
}: TimelineProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const { scrollYProgress } =
    useScroll({
      target: containerRef,
      offset: [
        "start center",
        "end center",
      ],
    });

  const smoothProgress =
    useSpring(scrollYProgress, {
      stiffness: 70,
      damping: 25,
      restDelta: 0.001,
    });

  const orbTop = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // TECH ICONS
  const getTagIcon = (
    tag: string
  ) => {
    switch (tag) {
      case "Next.js":
        return (
          <SiNextdotjs />
        );

      case "React":
        return <SiReact />;

      case "TypeScript":
        return (
          <SiTypescript />
        );

      case "Tailwind":
        return (
          <SiTailwindcss />
        );

      case "AI":
        return (
          <SiTensorflow />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="timeline-container"
      ref={containerRef}
    >
      {/* TRACK */}
      <div className="timeline-track-wrapper">
        <div className="timeline-track-bg" />

        <motion.div
          className="timeline-track-fill"
          style={{
            scaleY:
              smoothProgress,
          }}
        />

        {/* PHOTO ORB */}
        <motion.div
          className="timeline-orb-container"
          style={{ top: orbTop }}
        >
          <div className="timeline-orb">
            <img
              src="/about4.jpg"
              alt="profile"
              className="timeline-photo"
            />

            <div className="timeline-orb-pulse" />
          </div>
        </motion.div>
      </div>

      {/* ITEMS */}
      <div className="timeline-items-list">
        {items.map(
          (item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                margin:
                  "-10% 0px -20% 0px",
              }}
              variants={
                contentVariants
              }
            >
              {/* LEFT */}
              <div className="timeline-left">
                <span className="timeline-date">
                  {item.date}
                </span>

                <motion.h3
                  animate={{
                    backgroundPosition:
                      [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                  }}
                  transition={{
                    duration: 6,
                    repeat:
                      Infinity,
                    ease: "linear",
                  }}
                  className="timeline-company rgb-company"
                  style={{
                    backgroundImage:
                      item.companyGradient,
                  }}
                >
                  {item.company}
                </motion.h3>

                <div className="timeline-meta">
                  <div className="timeline-meta-row">
                    <MapPin
                      size={14}
                      className="timeline-meta-icon"
                    />

                    <span>
                      {item.location}
                    </span>
                  </div>

                  <div className="timeline-meta-row">
                    <Briefcase
                      size={14}
                      className="timeline-meta-icon"
                    />

                    <span>
                      {item.jobType}
                    </span>
                  </div>
                </div>
              </div>

              <div className="timeline-center-spacer" />

              {/* RIGHT */}
              <div className="timeline-right">
                <h2 className="timeline-role">
                  {item.title}
                </h2>

                <div className="timeline-bullets">
                  {item.description.map(
                    (
                      bullet,
                      bIdx
                    ) => (
                      <p
                        key={bIdx}
                        className="timeline-bullet-text"
                      >
                        {renderBulletWithHighlights(
                          bullet
                        )}
                      </p>
                    )
                  )}
                </div>

                {/* TAGS */}
                <div className="timeline-tags">
                  {item.tags.map(
                    (
                      tag,
                      tIdx
                    ) => (
                      <span
                        key={tIdx}
                        className="timeline-tag"
                      >
                        <span className="timeline-tag-icon">
                          {getTagIcon(
                            tag
                          )}
                        </span>

                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

// HIGHLIGHT
function renderBulletWithHighlights(
  text: string
): React.ReactNode {
  const keywords = [
    "AI models",
    "deep learning",
    "prediction accuracy",
    "transformer models",
    "NLP tasks",
    "35% faster inference",
    "ONNX",
    "TensorRT",
    "Agile",
    "Next.js",
    "performance optimization",
  ];

  const pattern = new RegExp(
    `\\b(${keywords.join("|")})\\b`,
    "gi"
  );

  const parts: React.ReactNode[] =
    [];

  let lastIndex = 0;

  let match:
    | RegExpExecArray
    | null;

  while (
    (match = pattern.exec(text)) !==
    null
  ) {
    if (match.index > lastIndex) {
      parts.push(
        text.substring(
          lastIndex,
          match.index
        )
      );
    }

    parts.push(
      <strong
        key={match.index}
        className="timeline-highlight"
      >
        {match[0]}
      </strong>
    );

    lastIndex =
      pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(
      text.substring(lastIndex)
    );
  }

  return parts.length > 0
    ? parts
    : text;
}


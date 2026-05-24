"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  const [maskPosition, setMaskPosition] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect =
        svgRef.current.getBoundingClientRect();

      const cxPercentage =
        ((cursor.x - svgRect.left) /
          svgRect.width) *
        100;

      const cyPercentage =
        ((cursor.y - svgRect.top) /
          svgRect.height) *
        100;

      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) =>
        setCursor({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className={`select-none uppercase cursor-pointer ${className}`}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
        >
          {hovered && (
            <>
              <stop
                offset="0%"
                stopColor="#3b82f6"
              />

              <stop
                offset="25%"
                stopColor="#8b5cf6"
              />

              <stop
                offset="50%"
                stopColor="#ec4899"
              />

              <stop
                offset="75%"
                stopColor="#06b6d4"
              />

              <stop
                offset="100%"
                stopColor="#ffffff"
              />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{
            cx: "50%",
            cy: "50%",
          }}
          animate={maskPosition}
          transition={{
            duration: duration ?? 0,
            ease: "easeOut",
          }}
        >
          <stop
            offset="0%"
            stopColor="white"
          />

          <stop
            offset="100%"
            stopColor="black"
          />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* BACK TEXT */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="
          fill-transparent
          stroke-neutral-700
          font-bold
        "
        style={{
          fontSize: "70px",
          opacity: hovered ? 0.7 : 0,
        }}
      >
        {text}
      </text>

      {/* ANIMATED STROKE */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="
          fill-transparent
          stroke-blue-400
          font-bold
        "
        style={{
          fontSize: "70px",
        }}
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
        }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* HOVER RGB */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="
          fill-transparent
          font-bold
        "
        style={{
          fontSize: "70px",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(59,130,246,0.2), transparent 30%), radial-gradient(circle at bottom left, rgba(217,70,239,0.2), transparent 30%)",
      }}
    />
  );
};
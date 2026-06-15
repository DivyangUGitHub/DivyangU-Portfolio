import { useEffect, useRef } from "react";

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

const Star = () => (
  <span
    style={styles.star}
    aria-hidden="true"
  >
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
  ];

  return (
    <>
      {repeated.map((word, i) => (
        <span
          key={i}
          style={styles.item}
        >
          <span style={styles.word}>
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
        ...styles.strap,

        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        ref={trackRef}
        style={styles.track}
      >
        <MarqueeContent words={words} />
      </div>
    </div>
  );
};

export default function RunningStrap() {
  return (
    <div style={styles.scene}>
      {/* TOP */}
      <Strap
        words={WORDS_TOP}
        rotate={-7}
        direction="left"
        speed={22}
      />

      {/* BOTTOM */}
      <Strap
        words={WORDS_BOTTOM}
        rotate={7}
        direction="right"
        speed={20}
      />
    </div>
  );
}

const styles: Record<
  string,
  React.CSSProperties
> = {
  scene: {
    width: "100vw",

    height: "340px",

    background: "#000",

    overflow: "hidden",

    position: "relative",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",
  },

  strap: {
    position: "absolute",

    width: "420vw", // 👈 VERY IMPORTANT

    left: "-160vw", // 👈 FIX CUT ISSUE

    height: "54px",

    background:
      "linear-gradient(to right,#7a0000 0%,#ff0000 18%,#ff0000 82%,#7a0000 100%)",

    display: "flex",

    alignItems: "center",

    overflow: "hidden",

    boxShadow:
      "0 0 30px rgba(255,0,0,0.35)",
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

    fontSize: "15px",

    fontWeight: 900,

    letterSpacing: "0.14em",

    color: "#ffffff",

    textTransform: "uppercase",

    padding: "0 8px",

    whiteSpace: "nowrap",
  },

  star: {
    color: "#ffffff",

    fontSize: "18px",

    padding: "0 8px",

    lineHeight: 1,

    display: "inline-block",
  },
};
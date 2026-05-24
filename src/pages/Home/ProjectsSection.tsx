import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const MY_PHOTO =
  "https://avatars.githubusercontent.com/u/DivyangUGitHub";

interface Bullet {
  text: string;
  bold?: string;
  rest?: string;
  bold2?: string;
  rest2?: string;
  boldEnd?: string;
  endRest?: string;
}

interface Experience {
  period: string;
  company: string;
  companyColor: string;
  location: string;
  type: string;
  role: string;
  bullets: Bullet[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    period: "SEP 2025 – PRESENT",
    company: "TEDx SRMIST",
    companyColor: "#ff2d78",
    location: "Delhi, NCR, India",
    type: "Co-Technical Lead",
    role: "Co-Technical Lead",
    bullets: [
      {
        text: "Collaborated with technical team to architect and deploy the ",
        bold: "official TEDx event platform",
        rest: ".",
      },
      {
        text: "Coordinated a team of ",
        bold: "10+ developers",
        rest: " ensuring smooth integration and system performance.",
      },
      {
        text: "Managed ",
        bold: "deployment pipelines",
        rest: " and supported live event technical operations.",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "System Architecture",
      "Team Leadership",
      "Deployment",
    ],
  },

  {
    period: "JULY 2025",
    company: "CCDF",
    companyColor: "#f97316",
    location: "New Delhi, India",
    type: "Community Engagement Intern",
    role: "Community Engagement Intern",
    bullets: [
      {
        text: "Contributed to ",
        bold: "women empowerment",
        rest: " initiatives by assisting in digital literacy and upskilling sessions.",
      },
      {
        text: "Collaborated with teams to support ",
        bold: "community welfare programs",
        rest: " and outreach activities.",
      },
      {
        text: "Demonstrated leadership, teamwork, and a service-oriented mindset in ",
        bold: "social impact projects",
        rest: ".",
      },
      {
        text: "Actively participated in organizing and executing ",
        bold: "community engagement programs",
        rest: ".",
      },
    ],
    tags: [
      "Digital Literacy",
      "Community Outreach",
      "Leadership",
      "Social Impact",
    ],
  },
];

interface BulletTextProps {
  item: Bullet;
}

function BulletText({ item }: BulletTextProps) {
  if (!item.bold) {
    return <p style={styles.bullet}>{item.text}</p>;
  }

  return (
    <p style={styles.bullet}>
      {item.text}

      <strong style={{ color: "#ffffff" }}>
        {item.bold}
      </strong>

      {item.rest}

      {item.bold2 && (
        <>
          <strong style={{ color: "#ffffff" }}>
            {item.bold2}
          </strong>
          {item.rest2}
        </>
      )}

      {item.boldEnd && (
        <>
          <strong style={{ color: "#ffffff" }}>
            {item.boldEnd}
          </strong>
          {item.endRest}
        </>
      )}
    </p>
  );
}

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

function ExperienceCard({
  exp,
  index,
}: ExperienceCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <div ref={ref} style={styles.cardRow}>
      {/* LEFT SIDE */}
      <motion.div
        style={styles.cardLeft}
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p style={styles.period}>{exp.period}</p>

        <motion.h3
          style={{
            ...styles.companyName,
            color: exp.companyColor,
          }}
          whileHover={{
            textShadow: `0 0 22px ${exp.companyColor}`,
            scale: 1.02,
          }}
        >
          {exp.company}
        </motion.h3>

        <p style={styles.metaLine}>
          <span style={styles.icon}>◎</span>
          {exp.location}
        </p>

        <p style={styles.metaLine}>
          <span style={styles.icon}>▣</span>
          {exp.type}
        </p>
      </motion.div>

      {/* CENTER */}
      <div style={styles.dotCol}></div>

      {/* RIGHT SIDE */}
      <motion.div
        style={styles.cardRight}
        initial={{ opacity: 0, x: 80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.08 + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.h2
          style={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.08 + 0.2,
          }}
        >
          {exp.role}
        </motion.h2>

        <div style={styles.bullets}>
          {exp.bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{
                duration: 0.4,
                delay:
                  index * 0.08 +
                  0.3 +
                  i * 0.08,
              }}
            >
              <BulletText item={b} />
            </motion.div>
          ))}
        </div>

        <motion.div
          style={styles.tagRow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.08 + 0.5,
          }}
        >
          {exp.tags.map((tag, i) => (
            <motion.span
              key={tag}
              style={styles.tag}
              whileHover={{
                scale: 1.08,
                borderColor: "#ff2d78",
                backgroundColor: "#151515",
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

interface FloatingCircleProps {
  progress: any;
}

function FloatingCircle({
  progress,
}: FloatingCircleProps) {
  const top = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "3px solid #ff2d78",
        boxShadow: `
          0 0 0 6px rgba(255,45,120,0.18),
          0 0 22px rgba(255,45,120,0.7),
          0 0 42px rgba(168,85,247,0.45)
        `,
        transform:
          "translateX(-50%) translateY(-50%)",
        zIndex: 20,
        pointerEvents: "none",
        background:
          "linear-gradient(135deg,#ff2d78,#7c3aed)",
      }}
    >
      <img
        src={MY_PHOTO}
        alt="DU"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}

export default function TimelinePortfolio() {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 70,
      damping: 18,
      restDelta: 0.001,
    }
  );

  const scaleY = useTransform(
    smoothProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div style={styles.page}>
      <div
        ref={containerRef}
        style={styles.timelineWrapper}
      >
        <div style={styles.timeline}>
          {/* CENTER LINE */}
          <div style={styles.lineTrack}>
            <div style={styles.lineBackground} />

            <motion.div
              style={{
                ...styles.lineProgress,
                scaleY,
                originY: 0,
              }}
            />

            <FloatingCircle
              progress={smoothProgress}
            />
          </div>

          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<
  string,
  React.CSSProperties
> = {
  page: {
    background: `
      radial-gradient(circle at top left, rgba(255,45,120,0.08), transparent 30%),
      radial-gradient(circle at top right, rgba(168,85,247,0.08), transparent 30%),
      linear-gradient(
        180deg,
        #000000 0%,
        #050505 35%,
        #080808 65%,
        #000000 100%
      )
    `,
    minHeight: "100vh",
    color: "#e5e5e5",
    overflowX: "hidden",
  },

  timelineWrapper: {
    padding: "120px 0",
    background: "transparent",
  },

  timeline: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    position: "relative",
    background: "transparent",
  },

  lineTrack: {
    position: "absolute",
    left: "calc(50% - 3px)",
    top: 0,
    bottom: 0,
    width: "6px",
    zIndex: 0,
  },

  lineBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom,#111,#1b1b1b)",
    borderRadius: "999px",
  },

  lineProgress: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom,#ff2d78,#c026d3,#7c3aed)",
    borderRadius: "999px",
    boxShadow:
      "0 0 25px rgba(255,45,120,0.45)",
  },

  cardRow: {
    display: "grid",
    gridTemplateColumns: "1fr 100px 1fr",
    gap: "0 10px",
    marginBottom: "140px",
    position: "relative",
    alignItems: "start",
  },

  cardLeft: {
    textAlign: "right",
    paddingTop: "8px",
  },

  dotCol: {},

  cardRight: {
    paddingTop: "6px",
  },

  period: {
    fontSize: "13px",
    color: "#6b7280",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "18px",
    fontFamily: "Arial",
  },

  companyName: {
    fontStyle: "italic",
    fontSize: "52px",
    fontWeight: 700,
    margin: "0 0 22px 0",
    display: "inline-block",
    cursor: "pointer",
    fontFamily: "Georgia",
  },

  metaLine: {
    fontSize: "18px",
    color: "#787878",
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
    fontFamily: "Arial",
  },

  icon: {
    fontSize: "12px",
    color: "#555",
  },

  role: {
    fontSize: "42px",
    fontWeight: 800,
    color: "#ffffff",
    margin: "0 0 30px 0",
    fontFamily: "Arial",
  },

  bullets: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "30px",
  },

  bullet: {
    fontSize: "22px",
    lineHeight: "1.9",
    color: "#b0b0b0",
    margin: 0,
    fontFamily: "Arial",
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
  },

  tag: {
    padding: "12px 20px",
    borderRadius: "999px",
    border: "1px solid #2f2f2f",
    background: "rgba(255,255,255,0.03)",
    fontSize: "16px",
    color: "#d1d5db",
    display: "inline-block",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },
};
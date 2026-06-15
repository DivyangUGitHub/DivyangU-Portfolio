// "use client";

// import React, { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useInView,
// } from "framer-motion";

// const MY_PHOTO = "/about4.jpg";

// interface Bullet {
//   text: string;
//   bold?: string;
// }

// interface Experience {
//   period: string;
//   company: string;
//   companyColor: string;
//   location: string;
//   type: string;
//   role: string;
//   bullets: Bullet[];
//   tags: string[];
// }

// const experiences: Experience[] = [
//   {
//     period: "SEP 2025 – PRESENT",
//     company: "TEDx SRMIST",
//     companyColor: "#ff2d78",
//     location: "Delhi, NCR, India",
//     type: "Co-Technical Lead",
//     role: "Co-Technical Lead",
//     bullets: [
//       {
//         text:
//           "Collaborated with technical team to architect and deploy the ",
//         bold: "official TEDx event platform.",
//       },
//       {
//         text: "Coordinated a team of ",
//         bold: "10+ developers.",
//       },
//       {
//         text:
//           "Managed deployment pipelines and ",
//         bold: "live technical operations.",
//       },
//     ],
//     tags: [
//       "Next.js",
//       "TypeScript",
//       "React",
//       "Tailwind",
//       "Framer Motion",
//       "NodeJS",
//       "MongoDB",
//       "GitHub",
//     ],
//   },

//   {
//     period: "JULY 2025",
//     company: "CCDF",
//     companyColor: "#f97316",
//     location: "New Delhi, India",
//     type: "Community Engagement Intern",
//     role: "Community Engagement Intern",
//     bullets: [
//       {
//         text: "Contributed to ",
//         bold: "women empowerment initiatives.",
//       },
//       {
//         text: "Worked on ",
//         bold: "community welfare programs.",
//       },
//       {
//         text: "Participated in ",
//         bold: "social impact projects.",
//       },
//     ],
//     tags: [
//       "Leadership",
//       "Outreach",
//       "Community",
//       "Digital Literacy",
//       "Social Impact",
//     ],
//   },
// ];

// function BulletText({
//   item,
// }: {
//   item: Bullet;
// }) {
//   return (
//     <p style={styles.bullet}>
//       {item.text}

//       {item.bold && (
//         <strong style={{ color: "#fff" }}>
//           {item.bold}
//         </strong>
//       )}
//     </p>
//   );
// }

// function ExperienceCard({
//   exp,
//   index,
// }: {
//   exp: Experience;
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-50px",
//   });

//   return (
//     <div ref={ref} style={styles.cardRow}>
//       {/* LEFT */}
//       <motion.div
//         style={styles.cardLeft}
//         initial={{ opacity: 0, x: -40 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{
//           duration: 0.6,
//           delay: index * 0.08,
//         }}
//       >
//         <p style={styles.period}>{exp.period}</p>

//         <motion.h3
//           style={{
//             ...styles.companyName,
//             color: exp.companyColor,
//           }}
//           whileHover={{
//             scale: 1.03,
//             textShadow: `0 0 18px ${exp.companyColor}`,
//           }}
//         >
//           {exp.company}
//         </motion.h3>

//         <p style={styles.metaLine}>
//           <span style={styles.icon}>◎</span>
//           {exp.location}
//         </p>

//         <p style={styles.metaLine}>
//           <span style={styles.icon}>▣</span>
//           {exp.type}
//         </p>
//       </motion.div>

//       {/* CENTER */}
//       <div></div>

//       {/* RIGHT */}
//       <motion.div
//         style={styles.cardRight}
//         initial={{ opacity: 0, x: 40 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{
//           duration: 0.6,
//           delay: index * 0.08 + 0.1,
//         }}
//       >
//         <motion.h2
//           style={styles.role}
//           initial={{ opacity: 0, y: 10 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//         >
//           {exp.role}
//         </motion.h2>

//         <div style={styles.bullets}>
//           {exp.bullets.map((b, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               animate={
//                 inView
//                   ? { opacity: 1, y: 0 }
//                   : {}
//               }
//               transition={{
//                 delay: i * 0.08,
//               }}
//             >
//               <BulletText item={b} />
//             </motion.div>
//           ))}
//         </div>

//         {/* TAGS */}
//         <motion.div
//           style={styles.tagRow}
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//         >
//           {exp.tags.map((tag) => (
//             <motion.span
//               key={tag}
//               style={styles.tag}
//               whileHover={{
//                 scale: 1.05,
//                 y: -2,
//                 borderColor:
//                   "rgba(255,255,255,0.18)",
//                 boxShadow:
//                   "0 8px 22px rgba(255,255,255,0.08)",
//               }}
//               transition={{
//                 duration: 0.25,
//               }}
//             >
//               {tag}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// function FloatingCircle({
//   progress,
// }: {
//   progress: any;
// }) {
//   const top = useTransform(
//     progress,
//     [0, 1],
//     ["0%", "100%"]
//   );

//   return (
//     <motion.div
//       style={{
//         position: "absolute",
//         left: "38%",
//         top,
//         width: "42px",
//         height: "42px",
//         borderRadius: "50%",
//         overflow: "hidden",
//         border: "2px solid #ff2d78",
//         boxShadow: `
//           0 0 0 4px rgba(255,45,120,0.18),
//           0 0 18px rgba(255,45,120,0.6)
//         `,
//         transform:
//           "translateX(-50%) translateY(-50%)",
//         zIndex: 20,
//         pointerEvents: "none",
//         background:
//           "linear-gradient(135deg,#ff2d78,#7c3aed)",
//       }}
//     >
//       <img
//         src={MY_PHOTO}
//         alt="DU"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     </motion.div>
//   );
// }

// export default function TimelinePortfolio() {
//   const containerRef =
//     useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(
//     scrollYProgress,
//     {
//       stiffness: 70,
//       damping: 18,
//     }
//   );

//   const scaleY = useTransform(
//     smoothProgress,
//     [0, 1],
//     [0, 1]
//   );

//   return (
//     <div style={styles.page}>
//       <div
//         ref={containerRef}
//         style={styles.timelineWrapper}
//       >
//         <div style={styles.timeline}>
//           {/* TIMELINE */}
//           <div style={styles.lineTrack}>
//             <div style={styles.lineBackground} />

//             <motion.div
//               style={{
//                 ...styles.lineProgress,
//                 scaleY,
//                 originY: 0,
//               }}
//             />

//             <FloatingCircle
//               progress={smoothProgress}
//             />
//           </div>

//           {experiences.map((exp, i) => (
//             <ExperienceCard
//               key={i}
//               exp={exp}
//               index={i}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles: Record<
//   string,
//   React.CSSProperties
// > = {
//   page: {
//     background: `
//       radial-gradient(circle at top left, rgba(255,45,120,0.08), transparent 30%),
//       radial-gradient(circle at top right, rgba(168,85,247,0.08), transparent 30%),
//       linear-gradient(
//         180deg,
//         #000000 0%,
//         #050505 35%,
//         #080808 65%,
//         #000000 100%
//       )
//     `,
//     minHeight: "100vh",
//     color: "#e5e5e5",
//     overflowX: "hidden",
//   },

//   timelineWrapper: {
//     padding: "30px 0",
//   },

//   timeline: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "0 24px",
//     position: "relative",
//   },

//   lineTrack: {
//     position: "absolute",
//     left: "38%",
//     top: 0,
//     bottom: 0,
//     width: "4px",
//     zIndex: 0,
//   },

//   lineBackground: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background:
//       "linear-gradient(to bottom,#111,#1b1b1b)",
//     borderRadius: "999px",
//   },

//   lineProgress: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background:
//       "linear-gradient(to bottom,#ff2d78,#c026d3,#7c3aed)",
//     borderRadius: "999px",
//     boxShadow:
//       "0 0 18px rgba(255,45,120,0.4)",
//   },

//   cardRow: {
//     display: "grid",
//     gridTemplateColumns: "0.8fr 60px 1.2fr",
//     gap: "0 8px",
//     marginBottom: "70px",
//     position: "relative",
//     alignItems: "start",
//   },

//   /* LEFT SIDE FIXED */
// cardLeft: {
//   textAlign: "right",
//   paddingTop: "4px",

//   maxWidth: "320px",

//   marginLeft: "auto",

//   /* LINE SE DUR */
//   paddingRight: "0px",

//   position: "relative",
//   right: "35px",
// },

//   cardRight: {
//     paddingTop: "4px",
//     maxWidth: "620px",
//   },

//   period: {
//     fontSize: "10px",
//     color: "#6b7280",
//     letterSpacing: "0.12em",
//     textTransform: "uppercase",
//     marginBottom: "12px",
//     fontFamily: "Arial",
//   },

//   companyName: {
//     fontStyle: "italic",
//     fontSize: "14px",
//     fontWeight: 700,
//     margin: "0 0 12px 0",
//     display: "inline-block",
//     cursor: "pointer",
//     fontFamily: "Georgia",
//     lineHeight: 1.1,
//   },

//   metaLine: {
//     fontSize: "13px",
//     color: "#787878",
//     margin: "6px 0",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     gap: "8px",
//     fontFamily: "Arial",
//   },

//   icon: {
//     fontSize: "10px",
//     color: "#555",
//   },

//   role: {
//     fontSize: "24px",
//     fontWeight: 800,
//     color: "#ffffff",
//     margin: "0 0 16px 0",
//     fontFamily: "Arial",
//     lineHeight: 1.2,
//   },

//   bullets: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//     marginBottom: "20px",
//   },

//   bullet: {
//     fontSize: "15px",
//     lineHeight: "1.7",
//     color: "#b0b0b0",
//     margin: 0,
//     fontFamily: "Arial",
//   },

//   tagRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "12px",
//     marginTop: "10px",
//   },

//   tag: {
//     padding: "10px 18px",
//     borderRadius: "14px",
//     border:
//       "1px solid rgba(255,255,255,0.08)",
//     background:
//       "linear-gradient(180deg, rgba(25,25,25,0.95), rgba(12,12,12,0.95))",
//     fontSize: "13px",
//     color: "#f3f4f6",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     cursor: "pointer",
//     backdropFilter: "blur(16px)",
//     WebkitBackdropFilter: "blur(16px)",
//     boxShadow: `
//       inset 0 1px 0 rgba(255,255,255,0.05),
//       0 4px 12px rgba(0,0,0,0.35)
//     `,
//     transition: "all 0.3s ease",
//     minHeight: "42px",
//   },
// };

// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import FadeIn from '../../components/FadeIn';
// import LiveProjectButton from '../../components/LiveProjectButton';

// interface ProjectData {
//   number: string;
//   category: string;
//   name: string;
//   liveUrl: string;
//   col1Image1: string;
//   col1Image2: string;
//   col2Image: string;
// }

// const PROJECTS: ProjectData[] = [
//     {
//         number: '01',
//         category: 'Personal',
//         name: 'Forge',
//         liveUrl: 'https://forge-pink-seven.vercel.app/',
//         col1Image1: '/Forge.png',
//         col1Image2: '/Forge1.png',
//         col2Image: '/Forge2.png',
//       },
//   {
//       number: '02',
//       category: 'Personal',
//       name: 'LawLab',
//       liveUrl: 'https://lawlab-self.vercel.app',
//       col1Image1: '/lawlab.png',
//       col1Image2: '/lawlab1.png',
//       col2Image: '/lawlab2.png',
//     },
//   {
//     number: '03',
//     category: 'Personal · GenAI',
//     name: 'ResumeIQ',
//     liveUrl: 'https://resumeiq-harsh.vercel.app/',
//     col1Image1: '/resumeiq-hero.png',
//     col1Image2: '/resumeiq-feedback.png',
//     col2Image: '/resumeiq-score.png',
//   },
//   {
//     number: '04',
//     category: 'Personal · Design',
//     name: 'Notch',
//     liveUrl: 'https://notch-zeta.vercel.app/',
//     col1Image1: '/notch-hero.png',
//     col1Image2: '/notch-pricing.png',
//     col2Image: '/notch-mockup.png',
//   },
// ];

// interface ProjectCardProps {
//   project: ProjectData;
//   index: number;
//   total: number;
//   containerRef: React.RefObject<HTMLDivElement>;
// }

// const ProjectCard = ({ project, index, total, containerRef }: ProjectCardProps) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   // Scroll progress for THIS card relative to the whole projects scroll range.
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ['start end', 'start start'],
//   });

//   // Cards further down the stack stay full-size; earlier cards scale DOWN
//   // as later cards stack on top of them.
//   const targetScale = 1 - (total - 1 - index) * 0.03;
//   const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

//   return (
//     <div
//       ref={cardRef}
//       className="sticky top-24 md:top-32 h-[85vh] w-full"
//       style={{ top: `${96 + index * 28}px` }}
//     >
//       <motion.article
//         style={{ scale }}
//         className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
//       >
//           {/* Top row: number + meta + button */}
//                   <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">
//                     <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
//                       <div
//                         className="shrink-0 font-black text-[#D7E2EA] leading-none"
//                         style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
//                       >
//                         {project.number}
//                       </div>

//                       <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
//                         <span
//                           className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
//                           style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
//                         >
//                           {project.category}
//                         </span>
//                         <h3
//                           className="font-medium uppercase text-[#D7E2EA] leading-tight"
//                           style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
//                         >
//                           {project.name}
//                         </h3>
//                       </div>
//                     </div>

//                     <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
//                       <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
//                     </div>
//                   </div>

//         {/* Bottom row: two-column image grid */}
//         <div className="grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
//           {/* Left column - 2 stacked */}
//           <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0">
//             <div
//               className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
//               style={{ height: 'clamp(130px, 16vw, 230px)' }}
//             >
//               <img
//                 src={project.col1Image1}
//                 alt={`${project.name} preview 1`}
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//             <div
//               className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
//               style={{ height: 'clamp(160px, 22vw, 340px)' }}
//             >
//               <img
//                 src={project.col1Image2}
//                 alt={`${project.name} preview 2`}
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//           </div>

//           {/* Right column - 1 tall */}
//           <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0">
//             <img
//               src={project.col2Image}
//               alt={`${project.name} preview 3`}
//               className="h-full w-full object-cover"
//               loading="lazy"
//               draggable={false}
//             />
//           </div>
//         </div>
//       </motion.article>
//     </div>
//   );
// };

// const ProjectsSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       id="projects"
//       className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
//     >
//       <FadeIn y={40}>
//         <h2
//           className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
//           style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
//         >
//           Project
//         </h2>
//       </FadeIn>

//       <div ref={containerRef} className="mx-auto max-w-7xl">
//         {PROJECTS.map((project, i) => (
//           <ProjectCard
//             key={project.number}
//             project={project}
//             index={i}
//             total={PROJECTS.length}
//             containerRef={containerRef}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
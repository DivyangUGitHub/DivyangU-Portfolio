'use client';
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import {
  ArrowRight,
} from "lucide-react";
import FlowArt, { FlowSection } from "./story-scroll";
import { 
  FaGithub,  
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaExternalLinkAlt,
  FaDocker,
  FaShieldAlt,
  FaEnvelope,
 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiRedis,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiFramer,
  SiGreensock,
  SiThreedotjs,
  SiVercel,
  SiAuth0,
  SiLeaflet,
  SiReacthookform,
} from "react-icons/si";

// ========== GOOGLE FONT OSWALD ==========
const oswaldStyle = {
  fontFamily: "'Oswald', sans-serif"
};

// ========== TECH STACK ICONS WITH COLORS ==========
const techStackColors: Record<string, { icon: any; color: string }> = {
  "Next.js 14": { icon: SiNextdotjs, color: "#ffffff" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "#ffffff" },
  "React Hook Form": { icon: SiReacthookform, color: "#EC5990" },
  "Leaflet": { icon: SiLeaflet, color: "#199900" },
  "NextAuth.js": { icon: SiAuth0, color: "#EB5424" },
  "Prisma ORM": { icon: SiPrisma, color: "#2D3748" },
  "MongoDB Atlas": { icon: SiMongodb, color: "#47A248" },
  "Resend API": { icon: FaEnvelope, color: "#4F46E5" },
  "Middleware Rate Limiting": { icon: FaShieldAlt, color: "#10B981" },
  "Next.js Optimization": { icon: SiNextdotjs, color: "#ffffff" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "GitHub": { icon: FaGithub, color: "#ffffff" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express": { icon: SiExpress, color: "#ffffff" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Socket.io": { icon: SiSocketdotio, color: "#ffffff" },
  "NextAuth": { icon: SiAuth0, color: "#EB5424" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "AWS": { icon: FaAws, color: "#FF9900" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Python": { icon: FaPython, color: "#3776AB" },
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "GraphQL": { icon: SiGraphql, color: "#E10098" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "GSAP": { icon: SiGreensock, color: "#88CE02" },
  "Three.js": { icon: SiThreedotjs, color: "#ffffff" },
};

const defaultTechColor = { icon: FaReact, color: "#61DAFB" };

// ========== SECTION 1 - PROJECT ==========
const crimeSafetyProject = {
  nameHighlight2: "─",
  name: "― Crime",
  nameHighlight: "Safety",
  tagline: "★ Secure & Anonymous Crime Reporting Platform",
  descriptionPart1: "A comprehensive crime reporting system that allows citizens to report incidents anonymously, track report status in real-time, and receive",
  descriptionHighlight: "safety",
  descriptionPart2: "alerts.",
  bulletPoints: [
    "Solved real-world underreporting by creating anonymous reporting system - no login required, protecting victim identity while maintaining report credibility through AI verification.",
    "Reduced manual report review time by 90% - integrated Groq AI that automatically analyzes descriptions, images, and severity levels with 95%+ confidence scoring.",
    "Real-time response time under 2 seconds"
  ],
  liveUrl: "https://crimesafety.vercel.app",
  githubUrl: "https://github.com/DivyangUGitHub/CRIMESAFETY",
  techStack: [
    "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Leaflet",
    "NextAuth.js", "Prisma ORM", "MongoDB Atlas", "Groq AI SDK", "Resend API",
    "Middleware Rate Limiting", "Helmet.js", "CSP", "Next.js Optimization",
    "Vercel", "GitHub"
  ],
  boxImage: "/projects/crime-safety-bg.png",      
  mobileImage: "/projects/project1.jpeg" 
};

// ========== SECTION 2 - PROJECT ==========
const secondProject = {
  name: "― Divyang Portfolio",
  tagline: "★ Creative Developer & Designer Portfolio",
  description: "A modern, interactive portfolio showcasing my work as a creative developer with innovative UI/UX patterns.",
  bulletPoints: [
    "Smooth scroll animations with GSAP",
    "Interactive 3D elements and effects",
    "95+ Lighthouse score performance"
  ],
  liveUrl: "https://divyang-portfolio.vercel.app",
  githubUrl: "https://github.com/yourusername/portfolio",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "Vercel"],
  boxImage: "/projects/Portfolio.png",             
  mobileImage: "/projects/project2.png"    
};

// ========== SECTION 3 - project ==========
const thirdProject = {
  name: "― Ryzz Messaging",
  tagline: "★ Real-time Messaging Platform",
  description: "A modern, real-time messaging platform with end-to-end encryption and seamless user experience.",
  bulletPoints: [
    "Real-time messaging with Socket.io",
    "End-to-end encryption",
    "Group chats & file sharing"
  ],
  liveUrl: "https://divyang-portfolio.vercel.app",
  githubUrl: "https://github.com/DivyangUGitHub/Ryzz",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Prisma", "PostgreSQL"],
  boxImage: "/projects/opengraph.jpg",              
  mobileImage: "/projects/project3.jpeg"         
};

// ========== SECTION 4 - project ==========
const fourthProject = {
  name: "― RAG System",
  tagline: "★ Self-Improving AI System",
  description: "A self-improving Retrieval-Augmented Generation system that learns from user feedback.",
  bulletPoints: [
    "Self-improving RAG pipeline",
    "Vector database integration",
    "User feedback loop"
  ],
  liveUrl: "https://divyang-portfolio.vercel.app",
  githubUrl: "https://github.com/DivyangUGitHub/Self-Improving-RAG-System",
  techStack: ["Python", "LangChain", "MongoDB","TailwindCSS", "Vercel"],
  boxImage: "/projects/project4.png",           
  mobileImage: "/projects/project-4.png"           
};

export default function Home() {

  return (
    <div className="bg-black overflow-hidden">
      <div className="mt-10"> 
      <FlowArt aria-label="My Projects Showcase">
        
        {/* ========== SECTION 1 - CRIME SAFETY PROJECT ========== */}
        <FlowSection 
          aria-label="Crime Safety Project" 
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <div className="relative z-10 flex flex-col justify-between min-h-screen py-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={oswaldStyle}>
                01 — Featured Project
              </p>
              <hr className="my-3 border-none border-t border-white/10" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
              <div className="flex-1 flex flex-col justify-center">
                {/* Name with RED "Safety" */}
                <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] mb-2" style={oswaldStyle}>
                  {crimeSafetyProject.name}{' '}
                  <span className="text-red-500">
                    {crimeSafetyProject.nameHighlight}
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-white/50 mt-5 max-w-xl" style={oswaldStyle}>
                  {crimeSafetyProject.tagline}
                </p>
                
                <p className="text-base md:text-lg text-white/50 max-w-xl mt-10 leading-relaxed" style={oswaldStyle}>
                  {crimeSafetyProject.descriptionPart1}{' '}
                  <span className="text-red-500 font-semibold">
                    {crimeSafetyProject.descriptionHighlight}
                  </span>{' '}
                  {crimeSafetyProject.descriptionPart2}
                </p>
                
                <div className="space-y-1.5 mt-10">
                  {crimeSafetyProject.bulletPoints.map((point, idx) => (
<div key={idx} className="flex items-start gap-3">
  <span className="text-red-500 text-sm mt-0.5">★</span>
  <div className="flex-1 max-w-2xl">
  <span className="text-base md:text-lg text-white/50 leading-loose" style={oswaldStyle}>
    {point}
  </span>
</div>
</div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-10">
                  {crimeSafetyProject.techStack.map((tech, i) => {
                    const techData = techStackColors[tech] || defaultTechColor;
                    const IconComp = techData.icon;
                    return (
                      <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                        <IconComp className="text-[10px] md:text-lg" style={{ color: techData.color }} />
                        <span className="text-[9px] text-white/70">{tech}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-3 mt-10">
                  <button
                    onClick={() => window.open(crimeSafetyProject.liveUrl, '_blank')}
                    className="px-3 py-1.5 bg-white text-black rounded-md font-medium hover:scale-105 transition-all flex items-center gap-1.5 text-base"
                  >
                    Live Demo <FaExternalLinkAlt size={10} />
                  </button>
                  <button
                    onClick={() => window.open(crimeSafetyProject.githubUrl, '_blank')}
                    className="px-3 py-1.5 border border-white/30 rounded-md font-medium hover:bg-white hover:text-black transition-all flex items-center gap-1.5 text-base"
                  >
                    <FaGithub size={20} /> GitHub
                  </button>
                </div>
              </div>

<div className="flex-1 flex flex-col items-center justify-center gap-6">
  
  {/* MacBook - Bada */}
<div className="relative w-full max-w-3xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
    <img 
      src={crimeSafetyProject.boxImage}
      alt="Project preview"
      className="w-full h-auto"
    />
  </div>
</div>
  {/* iPhone - Chhoti */}
  <div className="relative w-[200px] md:w-[240px] rounded-[32px] bg-gradient-to-br from-gray-800 to-black shadow-xl border border-white/10">
     {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-xl z-10"></div> */}
    <div className="relative rounded-[28px] overflow-hidden m-1 bg-white">
      <div className="relative aspect-[9/19] overflow-hidden">
        <img 
          src={crimeSafetyProject.mobileImage}
          alt="iPhone"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full"></div>
    </div>
    <div className="absolute left-[-2px] top-20 w-[2px] h-6 bg-gray-600 rounded-l"></div>
    <div className="absolute left-[-2px] top-30 w-[2px] h-8 bg-gray-600 rounded-l"></div>
    <div className="absolute right-[-2px] top-24 w-[2px] h-10 bg-gray-600 rounded-r"></div>
  </div>
  
</div>
            </div>

            <hr className="my-4 border-none border-t border-white/10" />
            <div className="flex flex-wrap gap-4 text-[9px] text-white/30" style={oswaldStyle}>
            </div>
          </div>
        </FlowSection>

        {/* ========== SECTION 2 - PORTFOLIO PROJECT ========== */}
<FlowSection 
  aria-label="Portfolio Project" 
  style={{ backgroundColor: '#000', color: '#fff' }}
>
  <div className="relative z-10 flex flex-col justify-between min-h-screen py-8">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={oswaldStyle}>
        02 — Portfolio Project
      </p>
      <hr className="my-3 border-none border-t border-white/10" />
    </div>

    <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
      <div className="flex-1 flex flex-col justify-center">
        
        {/* Name - Same size as Section 1 */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] mb-2" style={oswaldStyle}>
          {secondProject.name}
        </h2>
        
        {/* Tagline - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 mt-5 max-w-xl" style={oswaldStyle}>
          {secondProject.tagline}
        </p>
        
        {/* Description - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 max-w-xl mt-10 leading-relaxed" style={oswaldStyle}>
          {secondProject.description}
        </p>
        
        {/* Bullet Points - Same style as Section 1 */}
        <div className="space-y-4 mt-10">
          {secondProject.bulletPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-red-500 text-sm mt-0.5">★</span>
              <div className="flex-1 max-w-2xl">
                <span className="text-base md:text-lg text-white/50 leading-relaxed" style={oswaldStyle}>
                  {point}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack - Same as Section 1 */}
        <div className="flex flex-wrap gap-2 mt-10">
          {secondProject.techStack.map((tech, i) => {
            const techData = techStackColors[tech] || defaultTechColor;
            const IconComp = techData.icon;
            return (
              <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                <IconComp className="text-base md:text-lg" style={{ color: techData.color }} />
                <span className="text-[9px] text-white/70">{tech}</span>
              </div>
            );
          })}
        </div>

        {/* Buttons - Same as Section 1 */}
        <div className="flex flex-wrap gap-3 mt-10">
          <button
            onClick={() => window.open(secondProject.liveUrl, '_blank')}
            className="px-3 py-1.5 bg-white text-black rounded-md font-medium hover:scale-105 transition-all flex items-center gap-1.5 text-base"
          >
            Live Demo <FaExternalLinkAlt size={10} />
          </button>
          <button
            onClick={() => window.open(secondProject.githubUrl, '_blank')}
            className="px-3 py-1.5 border border-white/30 rounded-md font-medium hover:bg-white hover:text-black transition-all flex items-center gap-1.5 text-base"
          >
            <FaGithub size={20} /> GitHub
          </button>
        </div>
      </div>

      {/* Right side - Image Box */}
<div className="flex-1 flex flex-col items-center justify-center gap-6">
  
  {/* MacBook - Bada */}
<div className="relative w-full max-w-3xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
    <img 
      src={secondProject.boxImage}
      alt="Project preview"
      className="w-full h-auto"
    />
  </div>
</div>
  {/* iPhone - Chhoti */}
  <div className="relative w-[200px] md:w-[240px] rounded-[32px] bg-gradient-to-br from-gray-800 to-black shadow-xl border border-white/10">
     {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-xl z-10"></div> */}
    <div className="relative rounded-[28px] overflow-hidden m-1 bg-white">
      <div className="relative aspect-[9/19] overflow-hidden">
        <img 
          src={secondProject.mobileImage}
          alt="iPhone"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full"></div>
    </div>
    <div className="absolute left-[-2px] top-20 w-[2px] h-6 bg-gray-600 rounded-l"></div>
    <div className="absolute left-[-2px] top-30 w-[2px] h-8 bg-gray-600 rounded-l"></div>
    <div className="absolute right-[-2px] top-24 w-[2px] h-10 bg-gray-600 rounded-r"></div>
  </div>
  
</div>
    </div>

    <hr className="my-4 border-none border-t border-white/10" />
    <div className="flex flex-wrap gap-4 text-[9px] text-white/30" style={oswaldStyle}>
    </div>
  </div>
</FlowSection>

        {/* ========== SECTION 3 - TECH STACK (No Oswald on Icons) ========== */}
       <FlowSection 
  aria-label="Ryzz Messaging Website" 
  style={{ backgroundColor: '#000', color: '#fff' }}
>
  <div className="relative z-10 flex flex-col justify-between min-h-screen py-8">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={oswaldStyle}>
        03 — Ryzz messaging Website
      </p>
      <hr className="my-3 border-none border-t border-white/10" />
    </div>

    <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
      <div className="flex-1 flex flex-col justify-center">
        
        {/* Name - Same size as Section 1 */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] mb-2" style={oswaldStyle}>
          {thirdProject.name}
        </h2>
        
        {/* Tagline - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 mt-5 max-w-xl" style={oswaldStyle}>
          {thirdProject.tagline}
        </p>
        
        {/* Description - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 max-w-xl mt-10 leading-relaxed" style={oswaldStyle}>
          {thirdProject.description}
        </p>
        
        {/* Bullet Points - Same style as Section 1 */}
        <div className="space-y-4 mt-10">
          {thirdProject.bulletPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-red-500 text-sm mt-0.5">★</span>
              <div className="flex-1 max-w-2xl">
                <span className="text-base md:text-lg text-white/50 leading-relaxed" style={oswaldStyle}>
                  {point}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack - Same as Section 1 */}
        <div className="flex flex-wrap gap-2 mt-10">
          {thirdProject.techStack.map((tech, i) => {
            const techData = techStackColors[tech] || defaultTechColor;
            const IconComp = techData.icon;
            return (
              <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                <IconComp className="text-base md:text-lg" style={{ color: techData.color }} />
                <span className="text-[9px] text-white/70">{tech}</span>
              </div>
            );
          })}
        </div>

        {/* Buttons - Same as Section 1 */}
        <div className="flex flex-wrap gap-3 mt-10">
          {/* <button
            onClick={() => window.open(thirdProject.liveUrl, '_blank')}
            className="px-3 py-1.5 bg-white text-black rounded-md font-medium hover:scale-105 transition-all flex items-center gap-1.5 text-base"
          >
            Live Demo <FaExternalLinkAlt size={10} />
          </button> */}
          <button
            onClick={() => window.open(thirdProject.githubUrl, '_blank')}
            className="px-3 py-1.5 border border-white/30 rounded-md font-medium hover:bg-white hover:text-black transition-all flex items-center gap-1.5 text-base"
          >
            <FaGithub size={20} /> GitHub
          </button>
        </div>
      </div>

      {/* Right side - Image Box */}
<div className="flex-1 flex flex-col items-center justify-center gap-6">
  
  {/* MacBook - Bada */}
<div className="relative w-full max-w-3xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
    <img 
      src={thirdProject.boxImage}
      alt="Project preview"
      className="w-full h-auto"
    />
  </div>
</div>
  {/* iPhone - Chhoti */}
  <div className="relative w-[200px] md:w-[240px] rounded-[32px] bg-gradient-to-br from-gray-800 to-black shadow-xl border border-white/10">
     {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-xl z-10"></div> */}
    <div className="relative rounded-[28px] overflow-hidden m-1 bg-white">
      <div className="relative aspect-[9/19] overflow-hidden">
        <img 
          src={thirdProject.mobileImage}
          alt="iPhone"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full"></div>
    </div>
    <div className="absolute left-[-2px] top-20 w-[2px] h-6 bg-gray-600 rounded-l"></div>
    <div className="absolute left-[-2px] top-30 w-[2px] h-8 bg-gray-600 rounded-l"></div>
    <div className="absolute right-[-2px] top-24 w-[2px] h-10 bg-gray-600 rounded-r"></div>
  </div>
  
</div>
    </div>

    <hr className="my-4 border-none border-t border-white/10" />
    <div className="flex flex-wrap gap-4 text-[9px] text-white/30" style={oswaldStyle}>
    </div>
  </div>
</FlowSection>
        {/* ========== SECTION 4 - CONTACT & SOCIAL ========== */}
        <FlowSection 
  aria-label="Self Improving RAG System" 
  style={{ backgroundColor: '#000', color: '#fff' }}
>
  <div className="relative z-10 flex flex-col justify-between min-h-screen py-8">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={oswaldStyle}>
        04 — Self Improving RAG System
      </p>
      <hr className="my-3 border-none border-t border-white/10" />
    </div>

    <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
      <div className="flex-1 flex flex-col justify-center">
        
        {/* Name - Same size as Section 1 */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] mb-2" style={oswaldStyle}>
          {fourthProject.name}
        </h2>
        
        {/* Tagline - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 mt-5 max-w-xl" style={oswaldStyle}>
          {fourthProject.tagline}
        </p>
        
        {/* Description - Same as Section 1 */}
        <p className="text-base md:text-lg text-white/50 max-w-xl mt-10 leading-relaxed" style={oswaldStyle}>
          {fourthProject.description}
        </p>
        
        {/* Bullet Points - Same style as Section 1 */}
        <div className="space-y-4 mt-10">
          {fourthProject.bulletPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-red-500 text-sm mt-0.5">★</span>
              <div className="flex-1 max-w-2xl">
                <span className="text-base md:text-lg text-white/50 leading-relaxed" style={oswaldStyle}>
                  {point}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack - Same as Section 1 */}
        <div className="flex flex-wrap gap-2 mt-10">
          {fourthProject.techStack.map((tech, i) => {
            const techData = techStackColors[tech] || defaultTechColor;
            const IconComp = techData.icon;
            return (
              <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                <IconComp className="text-base md:text-lg" style={{ color: techData.color }} />
                <span className="text-[9px] text-white/70">{tech}</span>
              </div>
            );
          })}
        </div>

        {/* Buttons - Same as Section 1 */}
        <div className="flex flex-wrap gap-3 mt-10">
          {/* <button
            onClick={() => window.open(fourthProject.liveUrl, '_blank')}
            className="px-3 py-1.5 bg-white text-black rounded-md font-medium hover:scale-105 transition-all flex items-center gap-1.5 text-base"
          >
            Live Demo <FaExternalLinkAlt size={10} />
          </button> */}
          <button
            onClick={() => window.open(fourthProject.githubUrl, '_blank')}
            className="px-3 py-1.5 border border-white/30 rounded-md font-medium hover:bg-white hover:text-black transition-all flex items-center gap-1.5 text-base"
          >
            <FaGithub size={20} /> GitHub
          </button>
        </div>
      </div>

      {/* Right side - Image Box */}
<div className="flex-1 flex flex-col items-center justify-center gap-6">
  
  {/* MacBook - Bada */}
<div className="relative w-full max-w-3xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
    <img 
      src={fourthProject.boxImage}
      alt="Project preview"
      className="w-full h-auto"
    />
  </div>
</div>
  {/* iPhone - Chhoti */}
  <div className="relative w-[200px] md:w-[240px] rounded-[32px] bg-gradient-to-br from-gray-800 to-black shadow-xl border border-white/10">
     {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-xl z-10"></div> */}
    <div className="relative rounded-[28px] overflow-hidden m-1 bg-white">
      <div className="relative aspect-[9/19] overflow-hidden">
        <img 
          src={fourthProject.mobileImage}
          alt="iPhone"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full"></div>
    </div>
    <div className="absolute left-[-2px] top-20 w-[2px] h-6 bg-gray-600 rounded-l"></div>
    <div className="absolute left-[-2px] top-30 w-[2px] h-8 bg-gray-600 rounded-l"></div>
    <div className="absolute right-[-2px] top-24 w-[2px] h-10 bg-gray-600 rounded-r"></div>
  </div>
  
</div>
    </div>

    <hr className="my-4 border-none border-t border-white/10" />
    <div className="flex flex-wrap gap-4 text-[9px] text-white/30" style={oswaldStyle}>
    </div>
  </div>
</FlowSection>

<div className="flex justify-center items-center py-8">
  <button
    onClick={() => window.open('https://github.com/DivyangUGitHub', '_blank')}
    className="
      text-white/60
      hover:text-white
      text-sm
      md:text-base
      transition-all
      duration-300
      flex
      items-center
      gap-2
      bg-transparent
      cursor-pointer
      group
    "
  >
    See More Projects
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
              <ArrowRight size={16} />
            </div>
  </button>
</div>

      </FlowArt>
    </div>
    </div>
  );
}
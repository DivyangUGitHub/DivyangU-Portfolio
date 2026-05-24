// import React from "react";

// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// import {
//   Code2,
//   Sparkles,
//   Globe2,
//   ArrowRight,
// } from "lucide-react";

// const AboutSection = () => {

//   const { scrollYProgress } =
//     useScroll();

//   const y =
//     useTransform(
//       scrollYProgress,
//       [0, 1],
//       [0, -120]
//     );

//   return (

//     <section
//       className="
//         relative

//         min-h-screen

//         bg-black
//         overflow-hidden

//         text-white

//         px-6
//         md:px-12
//         lg:px-24

//         py-28
//       "
//     >

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 overflow-hidden">

//         <motion.div

//           style={{
//             y,
//           }}

//           className="
//             absolute
//             top-[-10%]
//             left-[-10%]

//             w-[500px]
//             h-[500px]

//             bg-fuchsia-500/10

//             blur-[180px]
//             rounded-full
//           "
//         />

//         <motion.div

//           style={{
//             y:
//               useTransform(
//                 scrollYProgress,
//                 [0, 1],
//                 [0, 180]
//               ),
//           }}

//           className="
//             absolute
//             bottom-[-10%]
//             right-[-10%]

//             w-[500px]
//             h-[500px]

//             bg-blue-500/10

//             blur-[180px]
//             rounded-full
//           "
//         />

//       </div>

//       {/* GRID */}
//       <div
//         className="
//           relative
//           z-10

//           grid
//           grid-cols-1
//           lg:grid-cols-2

//           gap-20
//           items-center
//         "
//       >

//         {/* LEFT SIDE */}
//         <motion.div

//           initial={{
//             opacity: 0,
//             x: -80,
//           }}

//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}

//           transition={{
//             duration: 0.8,
//           }}

//           viewport={{
//             once: true,
//           }}
//         >

//           {/* SMALL TAG */}
//           <div
//             className="
//               inline-flex
//               items-center
//               gap-3

//               px-5
//               py-2

//               rounded-full

//               border
//               border-white/10

//               bg-white/[0.03]

//               mb-8
//             "
//           >

//             <Sparkles
//               size={16}
//               className="text-fuchsia-400"
//             />

//             <span
//               className="
//                 text-sm
//                 uppercase
//                 tracking-[4px]
//                 text-zinc-400
//               "
//             >
//               About Me
//             </span>

//           </div>

//           {/* TITLE */}
//           <h2
//             className="
//               text-5xl
//               md:text-7xl
//               lg:text-8xl

//               font-black

//               leading-[0.95]
//               tracking-[-4px]
//             "
//           >
//             BUILDING
//             <br />

//             <span
//               className="
//                 text-transparent
//                 bg-clip-text

//                 bg-gradient-to-r
//                 from-fuchsia-500
//                 via-pink-500
//                 to-orange-400
//               "
//             >
//               DIGITAL
//             </span>

//             <br />
//             EXPERIENCES
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="
//               mt-10

//               text-zinc-400
//               text-lg
//               md:text-xl

//               leading-[2]

//               max-w-[700px]
//             "
//           >
//             I’m Divyang — a full stack
//             developer and creative engineer
//             focused on building futuristic,
//             immersive and high-performance
//             digital products.

//             <br />
//             <br />

//             I combine design, motion,
//             frontend engineering and AI
//             systems to craft experiences
//             that feel modern, smooth and
//             unforgettable.
//           </p>

//           {/* BUTTONS */}
//           <div
//             className="
//               flex
//               flex-wrap
//               gap-5

//               mt-12
//             "
//           >

//             <motion.button

//               whileHover={{
//                 scale: 1.05,
//               }}

//               whileTap={{
//                 scale: 0.95,
//               }}

//               className="
//                 flex
//                 items-center
//                 gap-3

//                 px-7
//                 py-4

//                 rounded-full

//                 bg-white
//                 text-black

//                 font-semibold
//               "
//             >

//               Explore Work

//               <ArrowRight size={18} />

//             </motion.button>

//             <motion.button

//               whileHover={{
//                 scale: 1.05,
//               }}

//               whileTap={{
//                 scale: 0.95,
//               }}

//               className="
//                 px-7
//                 py-4

//                 rounded-full

//                 border
//                 border-white/10

//                 bg-white/[0.03]

//                 text-white
//               "
//             >
//               Download Resume
//             </motion.button>

//           </div>

//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div

//           initial={{
//             opacity: 0,
//             x: 100,
//           }}

//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}

//           transition={{
//             duration: 1,
//           }}

//           viewport={{
//             once: true,
//           }}

//           className="
//             relative

//             flex
//             items-center
//             justify-center
//           "
//         >

//           {/* MAIN CARD */}
//           <motion.div

//             animate={{
//               y: [
//                 0,
//                 -20,
//                 0,
//               ],
//             }}

//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}

//             className="
//               relative

//               w-full
//               max-w-[620px]

//               rounded-[40px]

//               border
//               border-white/10

//               bg-white/[0.03]

//               backdrop-blur-2xl

//               overflow-hidden

//               p-8
//             "
//           >

//             {/* GRID BG */}
//             <div
//               className="
//                 absolute
//                 inset-0

//                 opacity-[0.05]

//                 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

//                 bg-[size:40px_40px]
//               "
//             />

//             {/* TOP */}
//             <div
//               className="
//                 relative
//                 z-10

//                 flex
//                 items-center
//                 justify-between
//               "
//             >

//               <div>

//                 <p
//                   className="
//                     text-zinc-500
//                     uppercase
//                     tracking-[4px]
//                     text-xs
//                   "
//                 >
//                   Creative Engineer
//                 </p>

//                 <h3
//                   className="
//                     text-4xl
//                     font-black
//                     mt-4
//                   "
//                 >
//                   Full Stack
//                   <br />
//                   Developer
//                 </h3>

//               </div>

//               <div
//                 className="
//                   w-20
//                   h-20

//                   rounded-full

//                   bg-gradient-to-br
//                   from-fuchsia-500
//                   to-orange-400

//                   blur-2xl
//                   opacity-60
//                 "
//               />

//             </div>

//             {/* CARDS */}
//             <div
//               className="
//                 relative
//                 z-10

//                 grid
//                 grid-cols-2

//                 gap-5

//                 mt-16
//               "
//             >

//               <motion.div

//                 whileHover={{
//                   y: -10,
//                 }}

//                 className="
//                   rounded-3xl

//                   border
//                   border-white/10

//                   bg-black/40

//                   p-6
//                 "
//               >

//                 <Code2
//                   size={28}
//                   className="text-blue-400"
//                 />

//                 <h4
//                   className="
//                     text-xl
//                     font-bold
//                     mt-5
//                   "
//                 >
//                   Frontend
//                 </h4>

//                 <p
//                   className="
//                     text-zinc-500
//                     mt-3
//                     leading-relaxed
//                   "
//                 >
//                   React, Next.js,
//                   Tailwind,
//                   Framer Motion
//                 </p>

//               </motion.div>

//               <motion.div

//                 whileHover={{
//                   y: -10,
//                 }}

//                 className="
//                   rounded-3xl

//                   border
//                   border-white/10

//                   bg-black/40

//                   p-6
//                 "
//               >

//                 <Globe2
//                   size={28}
//                   className="text-fuchsia-400"
//                 />

//                 <h4
//                   className="
//                     text-xl
//                     font-bold
//                     mt-5
//                   "
//                 >
//                   Backend
//                 </h4>

//                 <p
//                   className="
//                     text-zinc-500
//                     mt-3
//                     leading-relaxed
//                   "
//                 >
//                   Node.js,
//                   MongoDB,
//                   Express,
//                   APIs
//                 </p>

//               </motion.div>

//             </div>

//             {/* BOTTOM */}
//             <div
//               className="
//                 relative
//                 z-10

//                 mt-14

//                 flex
//                 items-center
//                 justify-between
//               "
//             >

//               <div>

//                 <p
//                   className="
//                     text-zinc-500
//                     text-sm
//                     uppercase
//                     tracking-[4px]
//                   "
//                 >
//                   Based In
//                 </p>

//                 <h4
//                   className="
//                     text-2xl
//                     font-bold
//                     mt-3
//                   "
//                 >
//                   Noida, India
//                 </h4>

//               </div>

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3

//                   px-5
//                   py-3

//                   rounded-full

//                   border
//                   border-green-500/20

//                   bg-green-500/10
//                 "
//               >

//                 <div
//                   className="
//                     w-3
//                     h-3

//                     rounded-full

//                     bg-green-400
//                   "
//                 />

//                 <span
//                   className="
//                     text-green-300
//                     text-sm
//                   "
//                 >
//                   Available for work
//                 </span>

//               </div>

//             </div>

//           </motion.div>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default AboutSection;
import React from "react";

import AboutIntro from "./AboutIntro";
import SkillsSection from "./SkillsSection";
import ValuesSection from "./ValuesSection";

const About = () => {
  return (
    <main className="bg-black overflow-hidden">
      <AboutIntro />
      <SkillsSection />
      <ValuesSection />
    </main>
  );
};

export default About;
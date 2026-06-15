"use client";

import Lanyard from "../../components/Lanyard/Lanyard";


// React import not required with modern JSX transform
import { motion } from "framer-motion";



const email = "upretidivyang@gmail.com";

const handleCopy = async () => {
  await navigator.clipboard.writeText(email);
  alert("Email copied!");
};

/* ========================= */
/* COMMON CARD STYLE */
/* ========================= */

const cardClass = `
  group
  relative

  h-[420px]
  md:h-[520px]
  xl:h-[640px]

  min-w-0
  w-full

  rounded-[28px]

  overflow-hidden

  border
  border-white/[0.06]

  bg-[#050505]

  p-5
  md:p-6

  transition-all
  duration-300
`;

const ShowcaseSection = () => {
  return (
    <section className="w-full bg-black px-4 lg:px-8 py-8 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* ========================= */}
        {/* TOP SECTION */}
        {/* ========================= */}

        <div
          className="
            w-full
            flex
            flex-col
            lg:flex-row
            gap-6
            items-stretch
          "
        >
          {/* ========================= */}
          {/* LEFT CARD */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              boxShadow: "0 0 0 0.5px rgba(255,255,255,0.7)",
            }}
            transition={{
              duration: 0.08,
            }}
            className={`
              ${cardClass}
              lg:w-[28%]
              xl:w-[24%]
              relative
              overflow-hidden
              hover:border-white/50
              transition-all
              duration-100
            `}
            style={{
              boxShadow: "0 0 0 0.5px rgba(255,255,255,0.08)",
            }}
          >
            {/* BLACK BG */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
                opacity-70
              "
            />

            {/* CONTENT */}
            <div className="relative z-30 h-full flex flex-col justify-between">
              {/* ======================= */}
              {/* TOP */}
              {/* ======================= */}
              <div>
                {/* NAME */}
                <div className="leading-none">
                  <h1
                    className="
                      text-white
                      font-black
                      tracking-[-3px]
                      text-[44px]
                      xl:text-[52px]
                    "
                  >
                    Divyang
                  </h1>

                  <h2
                    className="
                      text-white/40
                      italic
                      text-[44px]
                      xl:text-[52px]
                      leading-[0.8]
                      quintessential-regular
                    "
                  >
                    Upreti
                  </h2>
                </div>

                {/* LOCATION + LIVE TIME */}
                <div className="flex items-start gap-2 mt-5">
                  {/* ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    className="opacity-40 mt-[2px]"
                  >
                    <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>

                  {/* TEXTS */}
                  <div className="leading-none">
                    {/* LOCATION */}
                    <p
                      className="
                        text-white/45
                        uppercase
                        tracking-[0.5px]
                        text-[5px]
                        font-medium
                      "
                    >
                      Delhi, IN
                    </p>

                    {/* TIME */}
                    <p
                      className="
                        text-white/25
                        uppercase
                        tracking-[0.5px]
                        text-[4px]
                        mt-[3px]
                        font-medium
                      "
                    >
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* ======================= */}
              {/* LANYARD */}
              {/* ======================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-start
                  justify-center
                  z-10
                  translate-x-[0px]
                  translate-y-[100px]
                  scale-[0.82]
                  sm:scale-[0.88]
                  md:scale-[0.95]
                  lg:scale-[0.92]
                  xl:scale-[0.95]
                  origin-top
                "
              >
                <Lanyard
                  position={[0, 0, 18]}
                  gravity={[0, -36, 0]}
                  fov={15}
                  transparent={true}
                />
              </div>

              {/* ======================= */}
              {/* SOCIAL ICONS */}
              {/* ======================= */}

              <div
                className="
                  relative z-[999]
                  flex
                  items-center
                  justify-center
                  gap-5
                "
              >
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/divyang-upreti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/55
                    hover:text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/DivyangUGitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/55
                    hover:text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>

                {/* TWITTER */}
                <a
                  href="https://x.com/Divyang_Upreti_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/55
                    hover:text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/55 hover:text-white transition-all duration-300"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.9 1.153Zm-1.292 19.488h2.04L6.486 3.24H4.298l13.31 17.401Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ========================= */}
          {/* CENTER CARD - WITH GLOBE */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`${cardClass} lg:flex-1 relative overflow-hidden`}
            style={{
              boxShadow: "0 0 0 0.5px rgba(255,255,255,0.08)",
            }}
          >
          </motion.div>

          {/* ========================= */}
          {/* RIGHT CARD */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            variants={{
              hover: {
                boxShadow: "0 0 0 0.5px rgba(255,255,255,0.7)",
              },
            }}
            transition={{
              duration: 0.08,
            }}
            className={`
              ${cardClass}
              lg:w-[28%]
              xl:w-[24%]
              flex
              flex-col
              justify-between
              relative
              overflow-hidden
              hover:border-white/50
              transition-all
              duration-100
            `}
            style={{
              boxShadow: "0 0 0 0.5px rgba(255,255,255,0.08)",
            }}
          >
            {/* TOP */}
            <div className="relative z-10 flex items-center justify-between">
              {/* CIRCLE */}
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  border border-white/10
                  flex
                  items-center
                  justify-center
                  bg-black/60
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                    group-hover:scale-125
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* AVAILABLE */}
              <div
                className="
                  px-2.5
                  py-1
                  rounded-full
                  border border-white/10
                  bg-black/60
                  backdrop-blur-xl
                  flex
                  items-center
                  gap-1.5
                  shrink-0
                "
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white/90 text-[10px] font-medium whitespace-nowrap">
                  Available for work
                </span>
              </div>
            </div>

            {/* CENTER */}
            <div
              className="
                relative
                z-10
                flex
                flex-col
                justify-center
                flex-1
                py-8
              "
            >
              {/* TITLE */}
              <div>
                <h1
                  className="
                    text-white
                    font-black
                    leading-[0.95]
                    text-[18px]
                    md:text-[22px]
                    xl:text-[26px]
                  "
                >
                  LET&apos;S BUILD SOMETHING
                </h1>
                <p
                  className="
                    text-white/40
                    italic
                    text-[13px]
                    md:text-[16px]
                    xl:text-[18px]
                    leading-none
                    mt-2
                    quintessential-regular
                  "
                >
                  that actually works.
                </p>
              </div>

              {/* LINE */}
              <div className="w-full h-px bg-white/10 my-6" />

              {/* EMAIL */}
              <div className="space-y-3">
                <div
                  onClick={handleCopy}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  {/* ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 shrink-0 mt-1"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>

                  {/* EMAIL */}
                  <div className="relative w-full min-w-0">
                    <h2
                      className="
                        text-white
                        font-bold
                        text-[14px]
                        md:text-[16px]
                        xl:text-[20px]
                        break-all
                        leading-tight
                      "
                    >
                      {email}
                    </h2>

                    {/* HOVER LINE */}
                    <motion.div
                      variants={{
                        hover: {
                          width: "73%",
                        },
                      }}
                      initial={{ width: 0 }}
                      transition={{ duration: 0.4 }}
                      className="
                        h-[3px]
                        bg-gradient-to-r
                        from-orange-400
                        to-yellow-300
                        rounded-full
                        mt-2
                      "
                    />
                  </div>
                </div>

                <p
                  className="
                    text-white/20
                    tracking-[1px]
                    uppercase
                    text-[7px]
                    origin-left
                    font-medium
                    ml-8
                    leading-none
                  "
                >
                  Tap to copy email
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="relative z-10 mt-auto pt-8">
              <a href="mailto:Upretidivyang@gmail.com">
                <button
                  className="
                    w-full
                    py-4
                    md:py-5
                    rounded-[18px]
                    bg-white
                    text-black
                    font-bold
                    tracking-[2px]
                    uppercase
                    text-sm
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Connect Now ↗
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
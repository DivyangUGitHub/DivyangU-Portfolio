"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* PREMIUM BG */}
      <div className="absolute inset-0">
        <div className="absolute left-[20%] top-0 h-[500px] w-[500px] rounded-full bg-[#111827] blur-[150px]" />

        <div className="absolute right-[10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#0f172a] blur-[150px]" />
      </div>

      {/* NOISE */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" />

      {/* MAIN */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 py-8 lg:px-14">


        {/* HERO */}
        <div className="grid flex-1 items-center gap-16 pt-10 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-6 text-[12px] uppercase tracking-[6px] text-white/40">
              Schedule / Connect / Collaborate
            </p>

            <h1 className="leading-none">
              <span className="block text-[85px] font-black uppercase tracking-[-5px] md:text-[145px]">
                Book A
              </span>

              <span className="block text-[85px] font-black uppercase tracking-[-5px] text-white/35 md:text-[145px]">
                Call
              </span>

              <span className="block text-[85px] font-black uppercase tracking-[-5px] md:text-[145px]">
                With Me
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-wrap items-center gap-5">
              {/* WHITE BTN - COMING SOON */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => alert("Coming Soon! 🚀")}
                className="group flex items-center gap-3 rounded-2xl bg-white px-9 py-5 text-lg font-semibold text-black transition duration-300"
              >
                <Phone
                  size={20}
                  className="transition duration-300 group-hover:rotate-12"
                />

                Book a Call
                <span className="ml-2 text-xs font-medium text-black/50">(Coming Soon)</span>
              </motion.button>

              {/* DARK BTN - COMING SOON */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => alert("Coming Soon! 🚀")}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-9 py-5 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
              >
                <MessageSquare
                  size={20}
                  className="transition duration-300 group-hover:-rotate-12"
                />

                Send a Message
                <span className="ml-2 text-xs font-medium text-white/50 group-hover:text-black/50">(Coming Soon)</span>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

              {/* ROTATING BORDER */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-12px] rounded-full border border-white/10 border-t-white/50"
              />

              {/* IMAGE */}
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-white/10 md:h-[430px] md:w-[430px]">
                <img
                  src="/about2.jpg"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
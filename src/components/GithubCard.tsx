"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  Github,
  Linkedin,
} from "lucide-react";

import { SiX } from "react-icons/si";

interface GithubData {

  repo: string;

  message: string;

  time: string;

  url: string;
}

export default function GithubCard() {

  const [data, setData] =
    useState<GithubData | null>(null);

  const [liveTime, setLiveTime] =
    useState("");

  // LIVE TIME
  const getTimeAgo = (
    dateString: string
  ) => {

    const now =
      new Date().getTime();

    const past =
      new Date(dateString).getTime();

    const diff =
      Math.floor(
        (now - past) / 1000
      );

    if (diff < 60)
      return `${diff}s ago`;

    if (diff < 3600)
      return `${Math.floor(
        diff / 60
      )}m ago`;

    if (diff < 86400)
      return `${Math.floor(
        diff / 3600
      )}h ago`;

    return `${Math.floor(
      diff / 86400
    )}d ago`;
  };

  useEffect(() => {

    const fetchGithub =
      async () => {

      try {

        const res =
          await fetch(
            "http://localhost:5000/api/github"
          );

        const json =
          await res.json();

        if (json.success) {

          setData(json);

          setLiveTime(
            getTimeAgo(json.time)
          );
        }

      } catch (err) {

        console.log(err);

      }
    };

    fetchGithub();

    const interval =
      setInterval(() => {

        fetchGithub();

      }, 60000);

    return () =>
      clearInterval(interval);

  }, []);

  // ✅ YEH FUNCTION ADD KARO - POORA CARD CLICK KARNE PAR GITHUB KHULEGA
  const handleCardClick = () => {
    window.open("https://github.com/DivyangUGitHub", "_blank");
  };

  return (

<motion.div

  whileHover={{
    boxShadow:
      "0 0 0 0.5px rgba(255,255,255,0.7)",
  }}

  transition={{
    duration: 0.08,
  }}

  // ✅ YEH LINE ADD KARO - CURSOR POINTER AUR CLICK FUNCTION
  onClick={handleCardClick}
  className="
    group

    relative

    overflow-hidden

    rounded-[28px]

    border
    border-white/[0.06]

    hover:border-white/50

    bg-black

    p-8

    min-h-[420px]

    flex
    flex-col
    justify-between

    transition-all
    duration-100

    cursor-pointer
  "
>

      {/* BG */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          bg-gradient-to-br
          from-white/[0.03]
          to-white/[0.01]

          group-hover:opacity-100

          transition-all
          duration-500
        "
      />

      {/* TOP */}
      <div
        className="
          relative
          z-10
        "
      >

        {/* HEADER */}
        <div
          className="
            flex
            items-center

            gap-4
          "
        >

          {/* ✅ YAHAN SE a HATAYA - CLICK PREVENT KARNE KE LIYE */}
          <div
            onClick={(e) => e.stopPropagation()}
          >
            <Github
              className="
                text-white

                w-10
                h-10

                hover:scale-110

                transition-all
              "
            />
          </div>

          <div>

            <h2
              className="
                text-white

                font-black

             text-2xl
                quintessential-regular
              "
            >
              Divyang'u GitHub
            </h2>

       <p
  className="
    mt-2

    text-zinc-500

    text-sm
  "
>
  LIVE ACTIVITY
</p>

          </div>

        </div>

        {/* CONTENT */}
        <div
          className="
            mt-14
          "
        >

          <div
            className="
              flex
              items-center

              gap-3
            "
          >

            <p
              className="
                text-zinc-500

                uppercase

                text-sm

                tracking-[3px]
              "
            >
              Latest Push
            </p>

            {/* LIVE TIME */}
            <div
              className="
                flex
                items-center

                gap-2

                px-3
                py-1

                rounded-full

                bg-emerald-500/10

                border
                border-emerald-500/20

                text-emerald-400

                text-xs
              "
            >

              <div
                className="
                  w-2
                  h-2

                  rounded-full

                  bg-emerald-400

                  animate-pulse
                "
              />

              {liveTime || "LIVE"}

            </div>

          </div>

          {/* MESSAGE - ✅ YAHAN SE a HATAYA */}
          <div
            onClick={(e) => e.stopPropagation()}
          >
            <h1
              className="
                mt-6

                text-white

                font-bold

                leading-tight

                text-2xl
                sm:text-3xl

                hover:text-zinc-300

                transition-all
              "
            >
              "
              {data?.message ||
                "Loading latest push..."}
              "
            </h1>
          </div>

          {/* REPO */}
          <p
            className="
              mt-6

              text-zinc-500

              text-lg
            "
          >
            Repo:

            <span
              className="
                text-red-400

                ml-2
              "
            >
              {data?.repo ||
                "Fetching..."}
            </span>

          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
          relative
          z-10

          pt-8

          border-t
          border-white/10

          flex
          items-center
          justify-center

          gap-6
        "
      >

        {/* GITHUB */}
        <a
          href="https://github.com/DivyangUGitHub"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Github
            className="
              text-zinc-400

              hover:text-white

              hover:scale-110

              transition-all
            "
          />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/divyang-upreti/"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin
            className="
              text-zinc-400

              hover:text-[#0A66C2]

              hover:scale-110

              transition-all
            "
          />
        </a>

        {/* X */}
        <a
          href="https://x.com/Divyang_Upreti_"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <SiX
            className="
              text-zinc-400

              hover:text-white

              hover:scale-110

              transition-all

              text-[18px]
            "
          />
        </a>

      </div>

    </motion.div>
  );
}
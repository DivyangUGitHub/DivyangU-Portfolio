"use client";
import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  SiLeetcode,
} from "react-icons/si";

interface LeetcodeData {
  totalSolved: number;

  easySolved: number;

  mediumSolved: number;

  hardSolved: number;

  ranking: number;

  totalQuestions: number;
}

export default function LeetcodeCard() {

  const [data, setData] =
    useState<LeetcodeData | null>(null)

useEffect(() => {

  const fetchData = async () => {

    try {

      const res = await fetch(
        "https://leetcode-api-faisalshohag.vercel.app/Divyangu2004"
      );

      const json = await res.json();

      console.log(json);

      setData({

        totalSolved:
          json.totalSolved || 0,

        easySolved:
          json.easySolved || 0,

        mediumSolved:
          json.mediumSolved || 0,

        hardSolved:
          json.hardSolved || 0,

        ranking:
          json.ranking || 0,

        totalQuestions:
          json.totalQuestions || 3494,
      });

    } catch (error) {

      console.log(error);

    }
  };

  fetchData();

}, []);

  return (

<motion.a

  href="https://leetcode.com/u/Divyangu2004/"

  target="_blank"

  whileHover={{
    boxShadow:
      "0 0 0 0.5px rgba(255,255,255,0.7)",
  }}

  transition={{
    duration: 0.08,
  }}

  className="
    relative

    overflow-hidden

    rounded-[30px]

    border
    border-white/[0.06]

    hover:border-white/50

    bg-black

    p-8

    min-h-[430px]

    flex
    flex-col
    justify-between

    transition-all
    duration-100
  "
>

      {/* BG */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          bg-gradient-to-br
          from-yellow-500/[0.05]
          to-orange-500/[0.05]

          hover:opacity-100

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

          <SiLeetcode
            className="
              text-yellow-400

              w-10
              h-10
            "
          />

          <div>

            <h2
              className="
                text-white

                font-black

                text-3xl
              "
               style={{
                  fontFamily:
                    "'Quintessential', serif",
                }}
            >
              Leetcode
            </h2>

            <p
              className="
                text-zinc-500

                text-sm

                mt-1
              "
            >
              LIVE STATS
            </p>

          </div>

        </div>

        {/* CENTER */}
        <div
          className="
            mt-14

            flex
            flex-col
            items-center
            justify-center
          "
        >

          {/* CIRCLE */}
          <div
            className="
              relative

            w-[160px]
h-[160px]
              rounded-full

              flex
              items-center
              justify-center
            "
            style={{

              background:
                `conic-gradient(
                  #22c55e 0deg ${(
                    (data?.easySolved || 0) * 360
                  ) / 3494}deg,

                  #eab308 ${(
                    ((data?.easySolved || 0) +
                      (data?.mediumSolved || 0)) *
                    360
                  ) / 3494}deg,

                  #ef4444 ${(
                    ((data?.easySolved || 0) +
                      (data?.mediumSolved || 0) +
                      (data?.hardSolved || 0)) *
                    360
                  ) / 3494}deg,

                  #27272a 0deg
                )`,
            }}
          >

            {/* INNER */}
            <div
              className="
                absolute

                w-[120px]
h-[120px]

                rounded-full

                bg-black

                flex
                flex-col
                items-center
                justify-center
              "
            >

              <h1
                className="
                  text-white

                  text-5xl

                  font-black
                "
              >
                {data?.totalSolved || 0}
              </h1>

              <p
                className="
                  text-zinc-500

                  text-sm
                "
              >
                /
                {data?.totalQuestions || 3494}
              </p>

              <p
                className="
                  text-green-400

                  text-sm

                  mt-1
                "
              >
                ✓ Solved
              </p>

            </div>

          </div>

          {/* STATS */}
          <div
            className="
              mt-10

              flex
              items-center
              justify-center

              gap-8
            "
          >

            {/* EASY */}
            <div
              className="
                text-center
              "
            >

              <p
                className="
                  text-green-400

                  text-sm
                "
              >
                Easy
              </p>

              <h2
                className="
                  text-white

                  text-3xl

                  font-black
                "
              >
                {data?.easySolved || 0}
              </h2>

            </div>

            {/* MEDIUM */}
            <div
              className="
                text-center
              "
            >

              <p
                className="
                  text-yellow-400

                  text-sm
                "
              >
                Medium
              </p>

              <h2
                className="
                  text-white

                  text-3xl

                  font-black
                "
              >
                {data?.mediumSolved || 0}
              </h2>

            </div>

            {/* HARD */}
            <div
              className="
                text-center
              "
            >

              <p
                className="
                  text-red-400

                  text-sm
                "
              >
                Hard
              </p>

              <h2
                className="
                  text-white

                  text-3xl

                  font-black
                "
              >
                {data?.hardSolved || 0}
              </h2>

            </div>

          </div>

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
          justify-between
        "
      >

        <p
          className="
            text-zinc-500
          "
        >
          Global Ranking
        </p>

        <p
          className="
            text-white

            font-bold

            text-xl
          "
        >
          #{data?.ranking || 0}
        </p>

      </div>

    </motion.a>
  );
}
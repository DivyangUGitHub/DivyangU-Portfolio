import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  {
    number: "01",
    title: "GITHUB",
    username: "@DivyangUGitHub",
    url: "https://github.com/DivyangUGitHub",
  },

  {
    number: "02",
    title: "X",
    username: "@Divyang_Upreti_",
    url: "https://x.com/Divyang_Upreti_",
  },

  {
    number: "03",
    title: "LINKEDIN",
    username:
      "@divyang-upreti",
    url: "https://www.linkedin.com/in/divyang-upreti/",
  },

  {
    number: "04",
    title: "EMAIL",
    username: "upretidivyang@gmail.com",
    url: "https://mail.google.com/mail/u/1/",
  },
];

const LinksSection = () => {

  return (
    <section
      className="
        relative

        min-h-screen

        bg-black

        overflow-hidden

        px-5
        sm:px-8
        md:px-16
        lg:px-24

        pt-32
        pb-20
      "
    >

      {/* BG */}
      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[radial-gradient(circle_at_top,#1d4ed840,transparent_35%),radial-gradient(circle_at_bottom,#9333ea30,transparent_35%)]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-[1500px]
          mx-auto
        "
      >

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-12

            items-center
          "
        >

          {/* LEFT */}
          <div>
            <p
              className="
                text-zinc-500

                uppercase

                tracking-[6px]

                text-xs
                sm:text-sm
              "
            >
              CONNECT / FOLLOW / CHAT
            </p>

            <h1
              className="
                mt-6

                leading-[0.9]

                font-black

                text-white

                text-[18vw]
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]
              "
            >
              MY
              <br />

              <span
                className="
                  text-zinc-500
                "
              >
                DIGITAL
              </span>

              <br />

              PRESENCE
            </h1>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              src="/profile.jpg"
              alt="profile"
              className="
                w-[240px]
                h-[240px]

                sm:w-[300px]
                sm:h-[300px]

                lg:w-[360px]
                lg:h-[360px]

                rounded-full

                object-cover

                border
                border-white/10
              "
            />
          </div>
        </div>

        {/* LINKS */}
        <div
          className="
            mt-20
          "
        >
          {socialLinks.map(
            (item) => (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"

                whileHover={{
                  x: 10,
                }}

                className="
                  group

                  relative

                  flex
                  items-center
                  justify-between

                  border-t
                  border-white/10

                  py-8
                  px-2

                  overflow-hidden

                  transition-all
                  duration-500
                "
              >

                {/* WHITE HOVER BG */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-white

                    scale-y-0

                    origin-bottom

                    group-hover:scale-y-100

                    transition-transform
                    duration-500
                  "
                />

                {/* LEFT */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    items-center

                    gap-6
                    sm:gap-10
                  "
                >

                  {/* NUMBER */}
                  <span
                    className="
                      text-zinc-500

                      text-sm

                      group-hover:text-black

                      transition-all
                      duration-500
                    "
                  >
                    {item.number}
                  </span>

                  {/* TITLE + USERNAME */}
                  <div>

                    <h2
                      className="
                        text-white

                        font-black

                        text-[11vw]
                        sm:text-[8vw]
                        md:text-[6vw]
                        lg:text-[4vw]

                        leading-none

                        group-hover:text-black

                        transition-all
                        duration-500
                      "
                    >
                      {item.title}
                    </h2>

                    {/* USERNAME */}
                    <p
                      className="
                        mt-2

                        text-zinc-400

                        text-sm
                        sm:text-base

                        opacity-0
                        translate-y-5

                        group-hover:opacity-100
                        group-hover:translate-y-0

                        group-hover:text-black

                        transition-all
                        duration-500
                      "
                    >
                      {item.username}
                    </p>
                  </div>
                </div>

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10

                    w-12
                    h-12

                    sm:w-16
                    sm:h-16

                    rounded-full

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-white

                    group-hover:bg-black
                    group-hover:text-white
                    group-hover:border-black

                    transition-all
                    duration-500
                  "
                >
                  <ArrowUpRight />
                </div>
              </motion.a>
            )
          )}

          {/* LAST BORDER */}
          <div
            className="
              border-t
              border-white/10
            "
          />
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
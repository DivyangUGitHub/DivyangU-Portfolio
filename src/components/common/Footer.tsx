import React from "react";
import { PageType } from "../../App";

import {
  Github,
  Linkedin,
  Instagram,
  Send,
  Twitter,
} from "lucide-react";
interface FooterProps {
  setActivePage: React.Dispatch<
    React.SetStateAction<PageType>
  >;
}

const Footer: React.FC<FooterProps> = ({
  setActivePage,
}) => {
  return (

    <footer
      className="
        relative

        w-full
        overflow-hidden

        bg-black
        text-white

        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-14
        2xl:px-20

        pt-20
        sm:pt-24
        lg:pt-28

        pb-8
        sm:pb-10
      "
    >

      {/* TOP BORDER */}
      <div
        className="
          absolute
          top-0
          left-0

          w-full
          h-px

          bg-white/10
        "
      />

      {/* HERO */}
      <div
        className="
          flex
          flex-col
          xl:flex-row

          items-start
          justify-between

          gap-12
          lg:gap-16
        "
      >

        {/* LEFT */}
        <div className="w-full">

          <div
            className="
              flex
              items-start

              gap-3
              sm:gap-5

              flex-wrap
            "
          >

{/* PROFILE */}
<img
  src="/profile.jpg"
  alt="profile"

  className="
    mt-3
    sm:mt-4

    w-16
    h-16

    sm:w-20
    sm:h-20

    lg:w-24
    lg:h-24

    rounded-full

    object-cover

    border
    border-white/10

    shrink-0

    shadow-[0_0_25px_rgba(255,255,255,0.08)]

    transition-all
    duration-500

    hover:scale-105
  "
/>
            {/* TEXT */}
            <div className="flex-1 min-w-0">

              <h1
                className="
                  text-[14vw]
                  sm:text-[11vw]
                  md:text-7xl
                  lg:text-8xl
                  xl:text-[100px]
                  2xl:text-[120px]

                  leading-[0.9]

                  font-black

                  tracking-[-2px]
                  sm:tracking-[-4px]

                  break-words
                "
              >
                Let&apos;s create
              </h1>

<h1
  className="
    ml-[60px]
    sm:ml-[90px]
    md:ml-[110px]

text-[clamp(3rem,10vw,8rem)]

    leading-[0.9]

    font-black

    text-zinc-500

    tracking-[-2px]
    sm:tracking-[-4px]

    break-words
  "
>
  something real.
</h1>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER CARD */}
      <div
        className="
          mt-16
          sm:mt-20
          lg:mt-24

          rounded-[24px]
          sm:rounded-[30px]
          lg:rounded-[36px]

          border
          border-white/5

          bg-[#050505]

          px-[clamp(1rem,4vw,4rem)]

         pt-[clamp(2rem,6vw,6rem)]
        "
      >

        <div
          className="
            grid

           grid-cols-[repeat(auto-fit,minmax(220px,1fr))]

           gap-[clamp(1rem,3vw,4rem)]
          "
        >

         {/* BRAND */}
<div
  className="
    sm:col-span-2
    xl:col-span-2
  "
>

  {/* TITLE */}
  <h1
    className="
      anton-regular

      text-5xl
      sm:text-6xl
      lg:text-7xl

      text-white

      tracking-tight

      transition-all
      duration-500
      ease-out

      hover:tracking-[5px]
      hover:scale-105

      hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]

      cursor-pointer

      origin-left

      inline-block
    "
  >
    DIVYANG
  </h1>

  {/* DESCRIPTION */}
  <p
    className="
      mt-3
      sm:mt-5

      max-w-[580px]

      text-zinc-400

      leading-[1.9]

      text-base
      sm:text-[17px]
      lg:text-[19px]

      oswald-regular
    "
  >
    Building digital experiences that matter,
    one line of code at a time.
    Crafting interfaces that feel alive,
    solving problems that make a difference,
    and turning ideas into reality.
    Every pixel has a purpose.
    Every interaction tells a story.
  </p>

</div>

{/* GENERAL */}
<div>

  <h3
    className="
      text-zinc-500
      text-sm
      mb-5
      sm:mb-8
    "
  >
    General
  </h3>

  <div
    className="
      flex
      flex-col
      gap-5
    "
  >

    {[
      {
        title: "Home",
        page: "home",
      },

      {
        title: "Work",
        page: "work",
      },

      {
        title: "Resume",
        page: "resume",
      },

    ].map((item) => (

      <button
        key={item.title}

        onClick={() =>
         setActivePage(item.page as PageType)
        }

        className="
          group

          flex
          items-center

          gap-2

          w-fit

          text-white/90

          text-sm
          sm:text-base

          transition-all
          duration-300

          hover:text-white
        "
      >

        {/* TEXT */}
        <span
          className="
            relative

            font-semibold
          "
        >
          {item.title}

          {/* UNDERLINE */}
          <span
            className="
              absolute

              left-0
              -bottom-1

              h-[2px]
              w-0

              bg-white

              transition-all
              duration-300

              group-hover:w-full
            "
          />
        </span>

        {/* ARROW */}
        <span
          className="
            opacity-0

            -translate-x-2

            transition-all
            duration-300

            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          →
        </span>

      </button>

    ))}

  </div>

</div>
           {/* ABOUT */}
          <div>

  <h3
    className="
      text-zinc-500
      text-sm
      mb-5
      sm:mb-8
    "
  >
    About
  </h3>

  <div
    className="
      flex
      flex-col
      gap-5
    "
  >

    {[
      {
        title: "About Me",
        page: "about",
      },

      {
        title: "Contact",
        page: "contact",
      },

      {
        title: "Links",
        page: "links",
      },

      {
        title: "Uses",
        page: "uses",
      },
    ].map((item) => (

      <button
        key={item.title}

        onClick={() =>
          setActivePage(item.page as PageType)
        }

        className="
          group

          flex
          items-center

          gap-2

          w-fit

          text-white/90

          text-sm
          sm:text-base

          transition-all
          duration-300

          hover:text-white
        "
      >

        {/* TEXT */}
        <span
          className="
            relative

            font-semibold
          "
        >
          {item.title}

          {/* UNDERLINE */}
          <span
            className="
              absolute

              left-0
              -bottom-1

              h-[2px]
              w-0

              bg-white

              transition-all
              duration-300

              group-hover:w-full
            "
          />
        </span>

        {/* ARROW */}
        <span
          className="
            opacity-0

            -translate-x-2

            transition-all
            duration-300

            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          →
        </span>

      </button>

    ))}

  </div>

</div>

          {/* LEGAL */}
          <div>

            <h3
              className="
                text-zinc-500

                text-sm

                mb-5
                sm:mb-8
              "
            >
              Legal
            </h3>

            <div
              className="
                flex
                flex-col

                gap-4
                sm:gap-5
              "
            >

              {[
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (

                <a
                  key={item}
                  href="#"

                  className="
                    text-white/90

                    text-sm
                    sm:text-base

                    hover:text-white

                    transition-all
                    duration-300

                    hover:translate-x-1
                  "
                >
                  {item}
                </a>

              ))}

            </div>

            {/* DMCA */}
            <div
              className="
                mt-8

                pt-5

                border-t
                border-white/10
              "
            >

              <div
                className="
                  inline-flex

                  items-center

                  px-3
                  py-1

                  rounded-full

                  bg-lime-500/10

                  border
                  border-lime-500/20

                  text-lime-400

                  text-[11px]
                  sm:text-xs

                  font-medium
                "
              >
                DMCA PROTECTED
              </div>

              <p
                className="
                  mt-4

                  text-[10px]
                  sm:text-[11px]

                  text-zinc-600

                  leading-relaxed
                "
              >
                This site is protected.
                Read our Privacy Policy &
                Terms.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
          mt-10
          sm:mt-14

          pt-6
          sm:pt-8

          border-t
          border-white/10

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
        "
      >

        <p
          className="
            text-zinc-500

            text-[11px]
            sm:text-sm

            text-center
            md:text-left
          "
        >
          © 2026 DIVYANG UPRETI. ALL RIGHTS RESERVED.
        </p>

{/* SOCIALS */}
<div
  className="
    flex
    items-center

    gap-4
    sm:gap-5

    flex-wrap
    justify-center
  "
>

  {[
    {
      icon: Github,
      color:
        "hover:text-green-400",
      link: "https://github.com/DivyangUGitHub",
    },

    {
      icon: Linkedin,
      color:
        "hover:text-[#0A66C2]",
      link: "https://www.linkedin.com/in/divyang-upreti/",
    },

    {
      icon: Twitter,
      color:
        "hover:text-[#1DA1F2]",
      link: "https://x.com/Divyang_Upreti_",
    },

    {
      icon: Send,
      color:
        "hover:text-[#229ED9]",
      link: "u_divyang",
    },

    {
      icon: Instagram,
      color:
        "hover:text-pink-500",
      link: "https://www.instagram.com/_._onyxin_/",
    },
  ].map((item, index) => {

    const Icon = item.icon;

    return (

      <a
        key={index}
        href={item.link}

        target="_blank"
        rel="noopener noreferrer"

        className={`
          text-zinc-500

          transition-all
          duration-300

          hover:-translate-y-1
          hover:scale-110

          ${item.color}
        `}
      >
        <Icon
          size={16}

          className="
            sm:w-[18px]
            sm:h-[18px]
          "
        />
      </a>

    );
  })}

</div>

      </div>

    </footer>
  );
};

export default Footer;
import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Plus,
} from "lucide-react";

const socials = [

  {
    icon: <Github size={16} />,
    link: "https://github.com/YOUR_USERNAME",
  },

  {
    icon: <Instagram size={16} />,
    link: "https://instagram.com/YOUR_USERNAME",
  },

  {
    icon: <Linkedin size={16} />,
    link: "https://linkedin.com/in/YOUR_USERNAME",
  },

  {
    icon: <Mail size={16} />,
    link: "mailto:yourmail@gmail.com",
  },

];

const SocialBadge = () => {

  const [open, setOpen] =
    useState(false);

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  /* CLOSE WHEN CLICK OUTSIDE */
  useEffect(() => {

    const handleClickOutside = (
      event: MouseEvent
    ) => {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (

    <div
      ref={wrapperRef}
      className="
        relative
        flex
        items-center
        justify-center
      "
    >

      {/* SOCIAL POPUP */}
      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.85,
              y: -10,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.85,
              y: -10,
            }}

            className="
              absolute
              top-14

              flex
              items-center
              gap-2
            "
          >

            {socials.map((item, index) => (

              <motion.a

                key={index}

                href={item.link}

                target="_blank"

                rel="noopener noreferrer"

                initial={{
                  opacity: 0,
                  y: -12,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -12,
                }}

                transition={{
                  delay: index * 0.06,
                }}

                whileHover={{
                  scale: 1.12,
                }}

                whileTap={{
                  scale: 0.92,
                }}

                className="
                  w-10
                  h-10

                  rounded-full

                  bg-black/95
                  border
                  border-white/10

                  backdrop-blur-xl

                  flex
                  items-center
                  justify-center

                  text-white

                  transition-all
                  duration-300

                  hover:border-white/30
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.14)]
                "
              >

                {item.icon}

              </motion.a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

      {/* MAIN BUTTON */}
      <motion.button

        onClick={() =>
          setOpen(!open)
        }

        whileHover={{
          scale: 1.03,
        }}

        whileTap={{
          scale: 0.96,
        }}

        className="
          relative
          rounded-full
          overflow-hidden
        "
      >

        {/* BORDER CONTAINER */}
        <div
          className="
            relative
            p-[1.2px]
            rounded-full
            overflow-hidden
          "
        >

          {/* DARK BASE */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/10
            "
          />

          {/* MAIN RUNNING LIGHT */}
          <motion.div

            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
              absolute
              inset-0
              rounded-full
            "
          >

            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2

                w-12
                h-[2px]

                bg-white

                shadow-[0_0_12px_rgba(255,255,255,1)]

                rounded-full
              "
            />

          </motion.div>

          {/* SECOND LIGHT */}
          <motion.div

            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}

            className="
              absolute
              inset-0
              rounded-full
            "
          >

            <div
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2

                w-8
                h-[1.5px]

                bg-white/70

                shadow-[0_0_10px_rgba(255,255,255,0.9)]

                rounded-full
              "
            />

          </motion.div>

          {/* INNER BUTTON */}
          <div
            className="
              relative
              z-10

              flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-black/95
              backdrop-blur-2xl
            "
          >

            {/* TEXT */}
            <span
              className="
                text-white
                text-[14px]
                font-medium
                tracking-wide
              "
            >
              Say hi on
            </span>

            {/* PLUS */}
            <motion.div

              animate={{
                rotate: open ? 45 : 0,
              }}

              transition={{
                duration: 0.25,
              }}

              className="text-white"
            >

              <Plus size={14} />

            </motion.div>

          </div>

        </div>

      </motion.button>

    </div>
  );
};

export default SocialBadge;
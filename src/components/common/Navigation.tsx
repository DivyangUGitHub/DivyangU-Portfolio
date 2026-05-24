import React, {
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Moon,
  Phone,
  ChevronDown,
  Link2,
  Monitor,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

interface NavigationProps {
  activePage: string;
  setActivePage: (
    page: string
  ) => void;
}

const navItems = [
  {
    id: "home",
    label: "Home",
  },

  {
    id: "about",
    label: "About",
  },

  {
    id: "work",
    label: "Work",
  },

  {
    id: "resume",
    label: "Resume",
  },
];

const moreItems = [
  {
    id: "links",
    title: "Links",
    desc: "Socials & Profiles",
    icon: <Link2 size={17} />,
  },

  {
    id: "uses",
    title: "Uses",
    desc: "My gear & software",
    icon: <Monitor size={17} />,
  },

  {
    id: "guestbook",
    title: "Guestbook",
    desc: "Sign my wall",
    icon: <BookOpen size={17} />,
  },
];

const Navigation: React.FC<
  NavigationProps
> = ({
  activePage,
  setActivePage,
}) => {

  const [hovered, setHovered] =
    useState<string | null>(null);

  const [moreOpen, setMoreOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(
        window.scrollY > 80
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  const isMainActive = (
    id: string
  ) => activePage === id;

  const isMoreActive =
    moreItems.some(
      (item) =>
        item.id === activePage
    );

  return (
    <>
      {/* DESKTOP + TABLET NAV */}
      <nav
        className={`
          hidden md:flex

          fixed
          top-4
          z-[999]

          max-w-[95vw]

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isScrolled
              ? "left-1/2 -translate-x-1/2 scale-[0.96]"
              : "right-4 scale-100"
          }
        `}
      >
        <div
          className="
            relative

            flex
            items-center

            gap-1

            px-2
            py-2

            rounded-full

            border
            border-white/10

            bg-black/45
            backdrop-blur-[30px]

            shadow-[0_8px_32px_rgba(0,0,0,0.55)]

            overflow-visible
          "
        >

          {/* RGB GLOW */}
          <div
            className="
              absolute
              inset-0

              rounded-full

              opacity-20

              bg-[radial-gradient(circle_at_left,#2563eb40,transparent_25%),radial-gradient(circle_at_right,#a855f740,transparent_25%)]

              pointer-events-none
            "
          />

          {/* NAV ITEMS */}
          {navItems.map((item) => {

            const isActive =
              isMainActive(item.id);

            const isHovered =
              hovered === item.id;

            return (
              <motion.button
                key={item.id}
                onHoverStart={() =>
                  setHovered(item.id)
                }
                onHoverEnd={() =>
                  setHovered(null)
                }
                onClick={() =>
                  setActivePage(
                    item.id
                  )
                }
                className="
                  relative

                  px-3 lg:px-5

                  h-[38px]

                  rounded-full

                  overflow-hidden

                  flex
                  items-center
                  justify-center

                  whitespace-nowrap
                "
              >

                {/* ACTIVE */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-white
                    "
                  />
                )}

                {/* HOVER */}
                <AnimatePresence>
                  {!isActive &&
                    isHovered && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          absolute
                          inset-0

                          rounded-full

                          bg-white
                        "
                      />
                    )}
                </AnimatePresence>

                <span
                  className={`
                    relative
                    z-10

                    text-[12px]
                    lg:text-[13px]

                    font-medium

                    transition-all
                    duration-300

                    ${
                      isActive ||
                      isHovered
                        ? "text-black"
                        : "text-zinc-300"
                    }
                  `}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}

          {/* MORE */}
          <div
            className="relative"
            onMouseEnter={() =>
              setMoreOpen(true)
            }
            onMouseLeave={() =>
              setMoreOpen(false)
            }
          >

            <button
              className={`
                relative

                px-3 lg:px-5

                h-[38px]

                rounded-full

                flex
                items-center
                gap-2

                transition-all
                duration-300

                ${
                  isMoreActive
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:bg-white hover:text-black"
                }
              `}
            >

              {isMoreActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-white
                  "
                />
              )}

              <span
                className="
                  relative
                  z-10

                  text-[12px]
                  lg:text-[13px]
                "
              >
                More
              </span>

              <ChevronDown
                size={15}
                className="relative z-10"
              />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute

                    top-[56px]
                    right-0

                    w-[300px]
                    max-w-[90vw]

                    rounded-[22px]

                    border
                    border-white/10

                    bg-[#070707]/96
                    backdrop-blur-3xl

                    overflow-hidden

                    shadow-[0_0_40px_rgba(0,0,0,0.6)]

                    p-2.5

                    z-[999]
                  "
                >

                  <div
                    className="
                      flex
                      flex-col

                      gap-2
                    "
                  >
                    {moreItems.map(
                      (
                        item,
                        index
                      ) => (

                        <motion.button
                          key={index}
                          whileHover={{
                            x: 3,
                            scale: 1.01,
                          }}
                          onClick={() => {
                            setActivePage(
                              item.id
                            );

                            setMoreOpen(
                              false
                            );
                          }}
                          className={`
                            flex
                            items-center

                            gap-3

                            rounded-[18px]

                            border

                            p-2.5

                            transition-all
                            duration-300

                            ${
                              activePage ===
                              item.id
                                ? `
                                  border-white/20
                                  bg-white
                                  text-black
                                `
                                : `
                                  border-white/10
                                  bg-gradient-to-r
                                  from-zinc-900
                                  to-black

                                  hover:border-white/20
                                `
                            }
                          `}
                        >

                          <div
                            className={`
                              w-10
                              h-10

                              rounded-xl

                              flex
                              items-center
                              justify-center

                              shrink-0

                              border

                              ${
                                activePage ===
                                item.id
                                  ? `
                                    bg-black
                                    text-white
                                    border-black/10
                                  `
                                  : `
                                    bg-white/5
                                    text-white
                                    border-white/10
                                  `
                              }
                            `}
                          >
                            {item.icon}
                          </div>

                          <div
                            className="
                              text-left
                            "
                          >
                            <h3
                              className={`
                                text-[15px]
                                font-semibold

                                ${
                                  activePage ===
                                  item.id
                                    ? "text-black"
                                    : "text-white"
                                }
                              `}
                            >
                              {item.title}
                            </h3>

                            <p
                              className={`
                                text-[11px]

                                mt-0.5

                                ${
                                  activePage ===
                                  item.id
                                    ? "text-zinc-700"
                                    : "text-zinc-400"
                                }
                              `}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </motion.button>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DIVIDER */}
          <div
            className="
              w-px
              h-5

              bg-white/10

              mx-1
            "
          />

          {/* THEME BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              w-9
              h-9

              rounded-full

              bg-white/[0.04]

              border
              border-white/10

              flex
              items-center
              justify-center

              text-gray-300

              hover:bg-white
              hover:text-black

              transition-all
              duration-300
            "
          >
            <Moon size={14} />
          </motion.button>

          {/* CALL BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() =>
              setActivePage(
                "contact"
              )
            }
            className="
              px-3 lg:px-5

              h-[38px]

              rounded-full

              bg-white/[0.08]

              border
              border-white/10

              text-white

              text-[12px]
              lg:text-[13px]

              font-medium

              flex
              items-center
              gap-2

              whitespace-nowrap

              hover:bg-white
              hover:text-black

              transition-all
              duration-300
            "
          >
            <Phone size={13} />

            <span>
              Book a Call
            </span>
          </motion.button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div
        className="
          md:hidden

          fixed
          top-4
          right-4

          z-[9999]
        "
      >

        {/* MENU BUTTON */}
        <button
          onClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
          className="
            w-12
            h-12

            rounded-full

            bg-black/70
            backdrop-blur-xl

            border
            border-white/10

            flex
            items-center
            justify-center

            text-white
          "
        >
          {mobileMenu ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              className="
                absolute
                top-16
                right-0

                w-[90vw]
                max-w-[340px]

                rounded-[28px]

                border
                border-white/10

                bg-[#070707]/95
                backdrop-blur-3xl

                p-4

                shadow-2xl
              "
            >

              {/* MAIN NAV */}
              <div className="space-y-2">
                {navItems.map(
                  (item) => (

                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(
                          item.id
                        );

                        setMobileMenu(
                          false
                        );
                      }}
                      className={`
                        w-full

                        h-[52px]

                        rounded-2xl

                        flex
                        items-center
                        justify-center

                        text-sm
                        font-medium

                        transition-all
                        duration-300

                        ${
                          activePage ===
                          item.id
                            ? `
                              bg-white
                              text-black
                            `
                            : `
                              bg-white/5
                              text-zinc-300
                            `
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>

              {/* MORE ITEMS */}
              <div
                className="
                  mt-4
                  space-y-2
                "
              >
                {moreItems.map(
                  (item) => (

                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(
                          item.id
                        );

                        setMobileMenu(
                          false
                        );
                      }}
                      className={`
                        w-full

                        rounded-2xl

                        flex
                        items-center

                        gap-3

                        p-3

                        transition-all
                        duration-300

                        ${
                          activePage ===
                          item.id
                            ? `
                              bg-white
                              text-black
                            `
                            : `
                              bg-white/5
                              text-white
                            `
                        }
                      `}
                    >

                      <div>
                        {item.icon}
                      </div>

                      <div
                        className="
                          text-left
                        "
                      >
                        <h3
                          className="
                            text-sm
                            font-semibold
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            text-xs
                            opacity-70
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  )
                )}
              </div>

              {/* CALL BUTTON */}
              <button
                onClick={() => {
                  setActivePage(
                    "contact"
                  );

                  setMobileMenu(
                    false
                  );
                }}
                className="
                  w-full

                  h-[54px]

                  rounded-2xl

                  bg-white
                  text-black

                  flex
                  items-center
                  justify-center
                  gap-2

                  font-semibold

                  mt-4
                "
              >
                <Phone size={16} />

                Book a Call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Navigation;
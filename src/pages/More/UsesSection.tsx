import { motion } from "framer-motion";

const hardwareItems = [

  {
    title: "IPHONE 17",
    video:
      "https://www.apple.com/105/media/ww/iphone-17/2025/b2c72de3-1cbc-4e24-b4d3-23c7abcec4ec/anim/hero/xlarge.mp4",
  },

  {
    title: "HP LAPTOP",
    image: "https://cdn.corenexis.com/files/c/6465244720.png",
  },

  {
    title: "Arctic Fox",
    image: "https://cdn.corenexis.com/files/c/7294164720.png",
  },

  {
    title: "AIRPODS PRO",
    video:
      "https://www.apple.com/105/media/us/airpods-pro/2025/7acffb13-4adb-40b1-9393-8f1c99bc6c90/anim/hero/large.mp4",
  },
  {
    title: "MECHANICAL KEYBOARD",
    image: "https://www.amkette.com/cdn/shop/files/Ronin_X654.3141_2f4346b6-1439-409d-b80e-df0b7a74ba44.png?v=1774437511&width=750",
  },

  {
    title: " SONY-XB100",
    image: "https://cdn.corenexis.com/files/c/9231325720.png",
  },
    {
    title: " BENQ-EW270Q",
    image: "https://cdn.corenexis.com/files/c/1553667720.png",
  },
];

const softwareItems = [

  {
    title: "VS Code",
    desc: "Primary IDE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },

  {
    title: "Cursor",
    desc: "AI Code Editor",
    image:
      "https://cdn.corenexis.com/files/c/4637687720.png",
  },

  {
    title: "Arc",
    desc: "Modern Browser",
    image:
      "https://cdn.corenexis.com/files/c/2431464720.png",
  },

  {
    title: "GitHub",
    desc: "Code Hosting",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },

  {
    title: "Figma",
    desc: "UI Design",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },

  {
    title: "Raycast",
    desc: "Launcher",
    image:
      "https://svgstack.com/media/img/raycast-logo-H8cM664924.webp",
  },

  {
    title: "Framer",
    desc: "No-Code Sites",
    image:
      "https://cdn.brandfetch.io/idCeIE9B96/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667565216026",
  },

  {
    title: "Obsidian",
    desc: "Second Brain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
  },

  {
    title: "Notion",
    desc: "Knowledge Base",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },

  {
    title: "Google Cloud",
    desc: "Cloud Service",
    image:
      "https://cdn.corenexis.com/files/c/8954547720.png",
  },

  {
    title: "Vercel",
    desc: "Deployment",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },

  {
    title: "Linear",
    desc: "Project Tracking",
    image:
      "https://svgstack.com/media/img/linear-logo-bCo9603692.webp",
  },
];

const aiSocialItems = [
  {
    title: "ChatGPT",
    desc: "AI Assistant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },

  {
    title: "Claude",
    desc: "Advanced Reasoning",
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
  },

  {
    title: "Gemini",
    desc: "Multimodal AI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg",
  },

  {
    title: "Hugging Face",
    desc: "AI Models",
    image:
      "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },

  {
    title: "Spotify",
    desc: "Audio Streaming",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },

  {
    title: "X",
    desc: "Tech Twitter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
  },

  {
    title: "LinkedIn",
    desc: "Professional Network",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },

  {
    title: "Peerlist",
    desc: "Developer Network",
    image:
      "https://peerlist.io/favicon.ico",
  },
];

const UsesSection = () => {

  return (
    <section
      className="
        relative

        min-h-screen

        bg-black

        overflow-hidden

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24
        2xl:px-32

        pt-28
        sm:pt-32
        lg:pt-36

        pb-24
      "
    >

      {/* BG */}
      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[radial-gradient(circle_at_top,#2563eb20,transparent_35%),radial-gradient(circle_at_bottom,#9333ea20,transparent_35%)]
        "
      />

      <div
        className="
          relative
          z-10

          w-full
          max-w-[1800px]

          mx-auto
        "
      >

        {/* HERO */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2

            gap-12
            xl:gap-20
          "
        >

          <div>

            <p
              className="
                text-zinc-500

                uppercase

                tracking-[5px]

                text-[10px]
                sm:text-xs
                md:text-sm
              "
            >
              SYSTEM INVENTORY
            </p>

            <h1
              className="
                mt-6

                text-white

                leading-[0.9]

                font-black

                text-[20vw]
                sm:text-[16vw]
                md:text-[12vw]
                lg:text-[9vw]
                xl:text-[8vw]
              "
            >
              USES
            </h1>
          </div>

          <div
            className="
              xl:max-w-[650px]

              xl:ml-auto
            "
          >
            <p
              className="
                text-zinc-300

                leading-relaxed

                text-base
                sm:text-lg
                lg:text-xl
                Quicksand
              "
            >
              A curated manifest of the hardware,
              software, and everyday carry that I
              use to design and build products.
            </p>
          </div>
        </div>

        {/* HARDWARE */}
      <div
  className="
    mt-24
    lg:mt-32

    border-t
    border-white/10

    pt-12
    lg:pt-16

    grid
    grid-cols-1
    lg:grid-cols-[42%_58%]

    gap-10
    lg:gap-16

    items-start
  "
>
  {/* LEFT SIDE */}
  <div
    className="
      lg:sticky
      lg:top-32

      self-start

      h-fit
    "
  >
    <div
      className="
        flex
        items-center
        gap-4

        text-zinc-500
        uppercase
        tracking-[4px]

        text-[10px]
        sm:text-xs
      "
    >
      <div
        className="
          w-10
          h-px
          bg-white/20
        "
      />

      01. HARDWARE
    </div>

    <h2
      className="
        mt-8

        text-white
        font-black
        leading-none

        text-5xl
        sm:text-6xl
        lg:text-7xl
      "
    >
      MY WORKSTATION
    </h2>

    <p
      className="
        mt-8

        text-zinc-400
        leading-relaxed

        text-sm
        sm:text-base
        lg:text-lg

        max-w-[650px]

        Quicksand
      "
    >
      I believe in investing in absolute premium,
      high-performance gear. My setup is centered around a
      powerful MSI rig paired with sleek external peripherals,
      designed to minimize friction between thought and code.
      Every piece of hardware is meticulously chosen for
      ergonomics, aesthetic synergy, and raw computational power.
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2

      gap-5
      lg:gap-7
    "
  >
    {hardwareItems.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{
          y: -10,
        }}
        className={`
          group
          overflow-hidden

          rounded-[24px]
          sm:rounded-[30px]

          border
          border-white/10

          bg-[#050505]

          ${
            index === 0
              ? "md:col-span-2"
              : ""
          }
        `}
      >
        <div className="overflow-hidden">
          {item.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                w-full

                h-[260px]
                sm:h-[340px]
                md:h-[420px]
                lg:h-[500px]
                xl:h-[620px]

                object-cover
              "
            >
              <source
                src={item.video}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full

                h-[260px]
                sm:h-[340px]
                md:h-[420px]
                lg:h-[500px]
                xl:h-[620px]

                object-cover

                group-hover:scale-105

                transition-all
                duration-700
              "
            />
          )}
        </div>

        <div
          className="
            flex
            items-center

            gap-4

            px-5
            sm:px-7

            py-5
            sm:py-6

            border-t
            border-white/10
          "
        >
          <h3
            className="
              text-white

              font-semibold
              uppercase

              text-xs
              sm:text-sm
              lg:text-base
            "
          >
            {item.title}
          </h3>

          <div
            className="
              flex-1
              h-px
              bg-white/10
            "
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>

 {/* SOFTWARE */}
<div
  className="
    mt-32
    lg:mt-40

    border-t
    border-white/10

    pt-24

    grid
    grid-cols-1
    lg:grid-cols-[45%_55%]

    gap-10
    lg:gap-16
  "
>
  {/* LEFT SIDE */}
  <div
    className="
      lg:sticky
      lg:top-24

      h-fit
    "
  >
    <div
      className="
        flex
        items-center

        gap-4

        text-zinc-500

        uppercase

        tracking-[4px]

        text-[10px]
        sm:text-xs
      "
    >
      <div
        className="
          w-10
          h-px

          bg-white/20
        "
      />

      02. SOFTWARE
    </div>

    <h2
      className="
        mt-8

        text-white

        font-black

        leading-none

        text-[12vw]
        sm:text-6xl
        lg:text-7xl
      "
    >
      DEV TOOLS
    </h2>

    <p
      className="
        mt-8

        text-zinc-400

        leading-relaxed

        text-xs
        sm:text-sm
        lg:text-base

        max-w-[650px]

        Quicksand
      "
    >
      A highly optimized, blazingly fast software stack.
      I rely heavily on VS Code/Cursor for primary development,
      Arc for fluid browsing, and an ensemble of productivity tools
      like Raycast and Obsidian. My digital workspace is strictly curated.
      If an app doesn't serve a critical function or sparks joy with
      its UI, it doesn't stay.
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div
    className="
      grid

      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4

      gap-4
      lg:gap-6
    "
  >
    {softwareItems.map((item, index) => (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="
          rounded-[20px]
          sm:rounded-[24px]

          border
          border-white/10

          bg-[#050505]

          p-5
          sm:p-6

          flex
          flex-col
          items-center
          justify-center

          text-center

          min-h-[170px]
          sm:min-h-[190px]

          group
        "
      >
        {/* ICON */}
        <div
          className="
            w-14
            h-14

            rounded-2xl

            bg-white/5

            border
            border-white/10

            flex
            items-center
            justify-center

            text-white

            group-hover:bg-white
            group-hover:text-black

            transition-all
            duration-500
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              w-5
              h-5

              object-contain
            "
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-5

            text-white

            font-semibold

            text-sm
            sm:text-base
          "
        >
          {item.title}
        </h3>

        {/* DESC */}
        <p
          className="
            mt-2

            text-zinc-500

            leading-relaxed

            text-[11px]
            sm:text-xs
          "
        >
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>

        {/* AI & SOCIALS */}
<div
  className="
    mt-16
    lg:mt-24

    border-t
    border-white/10

    pt-12
    lg:pt-16

    grid
    grid-cols-1
    lg:grid-cols-[45%_55%]

    gap-8
    xl:gap-12
  "
>
  <div
    className="
      lg:sticky
      lg:top-24

      h-fit
    "
  >
    <div
      className="
        flex
        items-center

        gap-3

        text-zinc-500

        uppercase

        tracking-[3px]
        lg:tracking-[4px]

        text-[9px]
        sm:text-[10px]
        lg:text-xs
      "
    >
      <div
        className="
          w-8
          lg:w-10

          h-px

          bg-white/20
        "
      />

      03. INTEGRATIONS
    </div>

    <h2
      className="
        mt-5
        lg:mt-6

        text-white

        font-black

        leading-[1.1]

        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl
      "
    >
      AI & SOCIALS
    </h2>

    <p
      className="
        mt-4
        lg:mt-5

        text-zinc-400

        leading-relaxed

        text-[10px]
        sm:text-xs
        lg:text-sm

        max-w-[700px]

        Quicksand
      "
    >
      Beyond bare metal and development tools, these are the
      platforms powering my daily workflows. I leverage advanced
      LLMs for rapid prototyping, reasoning, and context analysis,
      while staying connected across professional design networks.
      Every API and social integration is meticulously selected to
      amplify productivity.
    </p>
  </div>

  <div
    className="
      grid

      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4

      gap-4
      sm:gap-5
      lg:gap-6
    "
  >
    {aiSocialItems.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4, scale: 1.01 }}
        className="
          rounded-[16px]
          sm:rounded-[20px]

          border
          border-white/10

          bg-[#050505]

          p-3
          sm:p-4
          md:p-5

          flex
          flex-col
          items-center
          justify-center

          text-center

          min-h-[130px]
          sm:min-h-[150px]
          md:min-h-[170px]

          group
        "
      >
        {/* ICON */}
        <div
          className="
            w-10
            h-10
            lg:w-12
            lg:h-12

            rounded-xl

            bg-white/5

            border
            border-white/10

            flex
            items-center
            justify-center

            text-white

            group-hover:bg-white
            group-hover:text-black

            transition-all
            duration-500
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              w-3.5
              h-3.5
              lg:w-4
              lg:h-4

              object-contain
            "
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-3
            lg:mt-4

            text-white

            font-semibold

            text-[11px]
            sm:text-xs
            lg:text-sm
          "
        >
          {item.title}
        </h3>

        {/* DESC */}
        <p
          className="
            mt-1

            text-zinc-500

            leading-relaxed

            text-[9px]
            sm:text-[10px]
            lg:text-xs
          "
        >
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default UsesSection;
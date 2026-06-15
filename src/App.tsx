import React, {
  useState,
  useEffect,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Branding from "./components/common/Branding";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import ResumeSection from "./pages/Resume/ResumeSection";
import UsesSection from "./pages/More/UsesSection";
import LinksSection from "./pages/More/LinksSection";
import Contact from "./pages/Contact/Contact";

// ✅ More component ka export check karo - agar nahi hai toh temporary fix
// Agar More.tsx exist nahi karta toh ise comment karo
// import More from "./pages/More/More";

export type PageType =
  | "home"
  | "about"
  | "work"
  | "resume"
  | "links"
  | "uses"
  | "guestbook"
  | "contact";

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>("home");

  // ✅ Wrapper function for type safety
  const handleSetActivePage = (page: string) => {
    setActivePage(page as PageType);
  };

  /* PAGE RENDER */
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={handleSetActivePage} />;
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "resume":
        return <ResumeSection />;
      case "links":
        return <LinksSection />;
      case "uses":
        return <UsesSection />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActivePage={handleSetActivePage} />;
    }
  };

  /* AUTO SCROLL TOP */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activePage]);

  return (
    <div
      className="
        bg-black
        min-h-screen
        overflow-x-hidden
      "
    >
      {/* BRAND */}
      <Branding />

      {/* NAVBAR */}
      <Navigation
        activePage={activePage}
        setActivePage={handleSetActivePage}
      />

      {/* PAGE ANIMATION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer setActivePage={handleSetActivePage} />
    </div>
  );
};

export default App;
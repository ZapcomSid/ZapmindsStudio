import { Hero } from "./Hero";
import { WhatItIs } from "./WhatItIs";
import { WhyItMatters } from "./WhyItMatters";
import { ProjectShowcase } from "./ProjectShowcase";
import { Testimonials } from "./Testimonials";
import { ContactUs } from "./ContactUs";
// import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface HomePageProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* <ThemeToggle theme={theme} onToggle={onToggleTheme} /> */}
      <Hero theme={theme} onToggleTheme={onToggleTheme} />
      <WhatItIs theme={theme} />
      <WhyItMatters theme={theme} />
      <ProjectShowcase theme={theme} />
      <Testimonials theme={theme} />
      <ContactUs theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

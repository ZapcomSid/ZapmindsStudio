import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface HeroProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Hero({ theme, onToggleTheme }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "WHAT IS IT", id: "what-it-is" },
    { label: "WHY IT MATTERS", id: "why-it-matters" },
    { label: "OUR INITIATIVES", id: "projects" },
    { label: "SUCCESS STORIES", id: "testimonials" },
  ];

  return (
    // <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 md:p-10">
    // <div className="relative w-full max-w-[2400px] h-[90vh] rounded-2xl overflow-hidden shadow-xl bg-black">
    // <div className="relative min-h-screen flex items-center overflow-hidden">
    <div className="relative min-h-screen flex items-center overflow-hidden">
     {/* <div className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden"> */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc1OTQzODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex-shrink-0"
          >
            <motion.img
              src="/logo.svg"
              alt="Zapminds"
              className="h-7 sm:h-10 md:h-12 object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => scrollToSection("contactUs")}
              className="px-3 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#FF6816] text-white hover:bg-orange-600 transition-colors text-xs sm:text-base whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
        >
          <motion.img
            src="/logo.svg"
            alt="Zapminds"
            className="h-8 sm:h-10 md:h-12 object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => scrollToSection("contactUs")}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div> */}

      {/* Right Side Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        // className="hidden lg:flex absolute right-8 top-[45%] -translate-y-1/2 z-20 flex-col gap-6 text-white text-sm"
        className="hidden lg:flex absolute right-8 top-[45%] -translate-y-1/2 z-20 flex-col items-end text-right gap-6 text-white text-sm"
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="hover:text-blue-400 transition-colors cursor-pointer tracking-wide"
            whileHover={{ x: -5 }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.nav>

      {/* Main Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 w-full"> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 pt-32 sm:pt-40 md:pt-48 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 tracking-tight leading-none m-0 p-0"
            style={{ fontWeight: 700 }}
          >
            Studio
            <br />
            Zapminds
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-base sm:text-lg md:text-xl max-w-xl font-light"
          >
            Built to make you extraordinarily innovative by transforming
            moonshots into market reality.
          </motion.p>
        </motion.div>
      </div>

      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1777F1] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={20} className="sm:hidden" />
        <MessageCircle size={24} className="hidden sm:block" />
      </motion.button>
    </div>
    // </div>
  );
}

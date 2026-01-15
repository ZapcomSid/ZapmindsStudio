import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={onToggle}
      className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
          : "bg-gray-900 text-yellow-400 hover:bg-gray-800"
      } shadow-md hover:shadow-lg`}
      // className={`fixed top-4 right-4 sm:top-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full transition-all duration-300 ${
      //   theme === "dark"
      //     ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
      //     : "bg-gray-900 text-yellow-400 hover:bg-gray-800"
      // } shadow-lg hover:shadow-xl transform hover:scale-110`}
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? (
        <Moon size={20} className="sm:w-6 sm:h-6" />
      ) : (
        <Sun size={20} className="sm:w-6 sm:h-6" />
      )}
    </motion.button>
  );
}

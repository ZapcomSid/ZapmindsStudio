import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Central loading animation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Rotating rings */}
            <div className="relative w-48 h-48 mb-8">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-500/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-pink-500/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50" />
              </motion.div>

              {/* Center core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60" />
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Brand text */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-white m-0">
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  zap
                </motion.span>
                <span className="text-white">com.</span>
              </h2>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <motion.img
                src="/zapcom..png" 
                alt="Zapminds"
                className="h-16 sm:h-20 md:h-24 object-contain"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(139,92,246,0))",
                    "drop-shadow(0 0 20px rgba(139,92,246,0.8))",
                    "drop-shadow(0 0 0px rgba(139,92,246,0))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-80 max-w-[90vw]">
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "50%" }}
                />
              </div>

              {/* Percentage text */}
              <motion.div
                className="mt-4 text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {Math.round(progress)}%
                </span>
                <p className="text-white/60 mt-2 text-sm">Loading Experience</p>
              </motion.div>
            </div>

            {/* Loading dots */}
            <div className="flex gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-pink-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

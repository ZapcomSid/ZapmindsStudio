import { motion } from 'motion/react';

interface FloatingShapesProps {
  theme: 'light' | 'dark';
}

export function FloatingShapes({ theme }: FloatingShapesProps) {
  const shapes = [
    { size: 300, delay: 0, duration: 20, x: '10%', y: '20%' },
    { size: 200, delay: 2, duration: 15, x: '80%', y: '60%' },
    { size: 150, delay: 4, duration: 18, x: '70%', y: '10%' },
    { size: 250, delay: 1, duration: 22, x: '20%', y: '70%' },
    { size: 180, delay: 3, duration: 16, x: '50%', y: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20'
              : 'bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

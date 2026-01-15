import { motion } from 'motion/react';
import { Rocket, Target, Lightbulb, Zap } from 'lucide-react';

interface WhatItIsProps {
  theme: 'light' | 'dark';
}

export function WhatItIs({ theme }: WhatItIsProps) {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: 'Innovation Hub',
      description: 'We are a technology innovation studio that transforms ambitious ideas into market-ready solutions. Our team combines deep technical expertise with creative problem-solving to build products that matter.',
    },
    {
      icon: <Target size={32} />,
      title: 'Strategic Partners',
      description: 'We partner with forward-thinking companies to accelerate their digital transformation journey. From concept to deployment, we guide every step with precision and expertise.',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solvers',
      description: 'Complex challenges require innovative solutions. We specialize in tackling the toughest technical problems with cutting-edge technologies and proven methodologies.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Rapid Execution',
      description: 'Speed matters in today\'s market. Our agile approach ensures rapid prototyping, iterative development, and fast time-to-market without compromising quality.',
    },
  ];

  return (
    <section id="what-it-is" className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-blue-100 text-blue-600'
            }`}>
              What It Is
            </span>
          </motion.div>
          
          <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Who We Are & What We Do
          </h2>
          
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Studio Zapminds is where ambitious visions become reality. We're a team of innovators, 
            engineers, and strategists dedicated to building transformative digital solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-750'
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl'
              }`}
            >
              <motion.div
                className={`mb-4 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className={`mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Award, TrendingUp, Users } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  theme: 'light' | 'dark';
  index: number;
}

export function ProjectCard({ project, theme, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
        theme === 'dark'
          ? 'bg-gray-800 hover:bg-gray-750'
          : 'bg-white hover:bg-gray-50'
      } shadow-xl hover:shadow-2xl`}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : ''
      }`}>
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`} />
      </div>

      <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
        {/* Left side - Image and stats */}
        <div className="space-y-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-900/70 text-white'
              }`}>
                {project.category}
              </span>
            </div>
          </motion.div>

          {/* Impact metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'
                }`}
              >
                <div className={`mb-1 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {metric.icon === 'award' && <Award size={20} />}
                  {metric.icon === 'trending' && <TrendingUp size={20} />}
                  {metric.icon === 'users' && <Users size={20} />}
                </div>
                <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {metric.value}
                </div>
                <div className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col">
          <div className="flex-1">
            <motion.h3
              className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              {project.title}
            </motion.h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.client}
            </p>

            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className={`mb-3 text-base sm:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-3 py-1 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 5 && (
                  <span className={`px-3 py-1 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* View Details Button */}
          <div className="mt-auto">
            <motion.div
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
              whileHover={{ x: 5 }}
            >
              View Full Details
              <ChevronRight size={20} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-blue-500/10 to-transparent'
            : 'bg-gradient-to-br from-blue-100/50 to-transparent'
        }`}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
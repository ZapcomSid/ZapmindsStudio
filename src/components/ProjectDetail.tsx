import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { ThemeToggle } from './ThemeToggle';
import { Footer } from './Footer';

interface ProjectDetailProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function ProjectDetail({ theme, onToggleTheme }: ProjectDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="text-center">
          <h2>Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const getMetricIcon = (icon: string) => {
    switch (icon) {
      case 'award':
        return <Award size={24} />;
      case 'trending':
        return <TrendingUp size={24} />;
      case 'users':
        return <Users size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />

      {/* Header */}
      <div className={`sticky top-0 z-40 backdrop-blur-lg border-b ${
        theme === 'dark'
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <motion.button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              theme === 'dark'
                ? 'text-white hover:bg-gray-800'
                : 'text-gray-900 hover:bg-gray-100'
            }`}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ExternalLink size={18} />
            <span className="hidden sm:inline">Visit Live Project</span>
            <span className="sm:hidden">Visit</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white mb-4">
                {project.category}
              </span>
              <h1 className="text-white mb-4">{project.title}</h1>
              <p className="text-white/90 text-xl max-w-3xl">
                {project.client}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={`py-12 border-b ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-lg`}
              >
                <div className={`mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {getMetricIcon(metric.icon)}
                </div>
                <div className={`mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {metric.value}
                </div>
                <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Project Overview
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              The Challenge
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Our Solution
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.solution}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-4 py-2 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-start gap-3 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <CheckCircle
                    className={`flex-shrink-0 mt-1 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}
                    size={20}
                  />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
            }`}
          >
            <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Results & Impact
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.results}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { Briefcase, TrendingUp, Award, Zap } from "lucide-react";

interface ProjectShowcaseProps {
  theme: "light" | "dark";
}

export function ProjectShowcase({ theme }: ProjectShowcaseProps) {
  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const [activeTab, setActiveTab] = useState("All");

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  // Portfolio stats
  const stats = [
    {
      icon: <Briefcase size={24} />,
      value: `${projects.length}+`,
      label: "Projects Completed",
    },
    {
      icon: <TrendingUp size={24} />,
      value: "$500M+",
      label: "Client Revenue Generated",
    },
    { icon: <Award size={24} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Zap size={24} />, value: "15+", label: "Industries Served" },
  ];

  //scrollToSection function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className={`relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 -right-40 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-200/30"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 -left-40 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-200/30"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          >
            <Briefcase
              size={20}
              className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
            />
            <span
              className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
            >
              Our Initiatives
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Transformative Projects,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`max-w-3xl mx-auto text-lg mb-12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore our comprehensive portfolio of cutting-edge solutions that
            have helped businesses across industries achieve exponential growth
            and digital excellence.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700/50"
                    : "bg-white/80 border border-gray-200/50 shadow-lg"
                }`}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div
                  className={`mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div
            className={`relative flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-2xl sm:rounded-3xl ${
              theme === "dark"
                ? "bg-gray-800/80 backdrop-blur-lg border border-gray-700/50"
                : "bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200/50"
            }`}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === category
                    ? theme === "dark"
                      ? "text-white"
                      : "text-white"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  {activeTab === category && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 text-xs"
                    >
                      {filteredProjects.length}
                    </motion.span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active category description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`text-center mt-6 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {activeTab === "All" &&
                "Showcasing excellence across all industries and domains"}
              {activeTab === "FinTech" &&
                "Revolutionary financial technology solutions for the modern economy"}
              {activeTab === "Healthcare" &&
                "Innovative healthcare platforms improving patient outcomes"}
              {activeTab === "E-Commerce" &&
                "Next-generation shopping experiences driving conversions"}
              {activeTab === "Artificial Intelligence" &&
                "AI-powered solutions automating and optimizing operations"}
              {activeTab === "IoT & Smart Cities" &&
                "Connected ecosystems for smarter urban living"}
              {activeTab === "Education" &&
                "Transforming learning through technology and innovation"}
              {activeTab === "Logistics" &&
                "Intelligent supply chain solutions optimizing global operations"}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                theme={theme}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mt-16 p-8 rounded-3xl ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50"
              : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
          }`}
        >
          <h3
            className={`mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Start Your Success Story?
          </h3>
          <p
            className={`mb-6 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Let's build something extraordinary together. Partner with us to
            transform your vision into a market-leading digital solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contactUs")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Talk to Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

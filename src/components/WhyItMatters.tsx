import { motion } from 'motion/react';
import { TrendingUp, Shield, Users, Globe } from 'lucide-react';

interface WhyItMattersProps {
  theme: 'light' | 'dark';
}

export function WhyItMatters({ theme }: WhyItMattersProps) {
  const impacts = [
    {
      icon: <TrendingUp size={28} />,
      stat: '500%',
      label: 'Average ROI',
      description: 'Our clients see significant return on investment through improved efficiency and market growth.',
    },
    {
      icon: <Shield size={28} />,
      stat: '99.9%',
      label: 'Uptime',
      description: 'Enterprise-grade reliability and security built into every solution we deliver.',
    },
    {
      icon: <Users size={28} />,
      stat: '5M+',
      label: 'Users Impacted',
      description: 'Our solutions reach millions of end-users, creating real-world impact at scale.',
    },
    {
      icon: <Globe size={28} />,
      stat: '25+',
      label: 'Countries',
      description: 'Global reach with localized solutions serving diverse markets worldwide.',
    },
  ];

  return (
    <section id="why-it-matters" className={`py-24 px-6 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
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
                ? 'bg-purple-500/20 text-purple-400' 
                : 'bg-purple-100 text-purple-600'
            }`}>
              Why It Matters
            </span>
          </motion.div>
          
          <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            The Impact We Create
          </h2>
          
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            In a rapidly evolving digital landscape, partnering with the right technology team 
            can be the difference between leading the market and falling behind. We don't just 
            build software—we create competitive advantages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl text-center ${
                theme === 'dark'
                  ? 'bg-gray-900'
                  : 'bg-white shadow-lg'
              }`}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                  theme === 'dark'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-purple-100 text-purple-600'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {impact.icon}
              </motion.div>
              
              <div className={`mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {impact.stat}
              </div>
              
              <div className={`mb-3 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {impact.label}
              </div>
              
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-10 rounded-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-800/50'
              : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className={`mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Future-Proof Your Business
              </h3>
              <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Technology moves fast. We help you stay ahead with scalable, maintainable 
                solutions built on cutting-edge architectures. Our expertise ensures your 
                investment today continues delivering value tomorrow.
              </p>
              <ul className={`space-y-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>✓</span>
                  Scalable cloud-native architectures
                </li>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>✓</span>
                  Security and compliance by design
                </li>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>✓</span>
                  Continuous innovation and updates
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Faster Time to Market', value: '3x' },
                { label: 'Cost Reduction', value: '40%' },
                { label: 'Customer Satisfaction', value: '95%' },
                { label: 'Project Success Rate', value: '98%' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl text-center ${
                    theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'
                  }`}
                >
                  <div className={`mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

interface ContactUsProps {
  theme: 'light' | 'dark';
}

export function ContactUs({ theme }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email Us',
      value: 'hello@zapcom.studio',
      link: 'mailto:hello@zapcom.studio',
    },
    {
      icon: <Phone size={24} />,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Visit Us',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id="contactUs" className={`relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-300/30'
          }`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-300/30'
          }`}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <Send size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
            <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
              Get In Touch
            </span>
          </motion.div>

          <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>

          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind? We'd love to hear about it. Our team is ready to 
            turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className={`block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                    } focus:outline-none`}
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className={`block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                    } focus:outline-none`}
                    placeholder="john@company.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className={`block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                    } focus:outline-none`}
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className={`block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                    } focus:outline-none`}
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>
              </div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className={`block mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Project Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                  } focus:outline-none`}
                >
                  <option value="">Select a range</option>
                  <option value="<50k">Less than $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k+">$250,000+</option>
                </select>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className={`block mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-750'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:shadow-lg'
                  } focus:outline-none`}
                  placeholder="Describe your project, goals, and timeline..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`block p-6 rounded-2xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700'
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400'
                        : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm mb-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {info.label}
                      </div>
                      <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`p-6 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <h4 className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Working Hours
                </h4>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {schedule.day}
                    </span>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div> */}

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`p-6 rounded-2xl text-center ${
                theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
                  theme === 'dark'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                <Calendar size={28} />
              </motion.div>
              <h4 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Quick Response
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                We typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
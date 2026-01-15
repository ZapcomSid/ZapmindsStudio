import { motion } from "motion/react";
import {
  Linkedin,
  Mail,
  Globe,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

interface FooterProps {
  theme: "light" | "dark";
}

export function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 sm:py-16 px-4 sm:px-6 border-t ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-gray-900 border-gray-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12"
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.img
              src="/zapcom..png"
              alt="Zapcom"
              className="h-6 sm:h-8 object-contain mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-gray-400 mb-6 max-w-md text-sm sm:text-base">
              Transforming moonshots into market reality. We build extraordinary
              digital solutions that drive innovation and business growth.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/company/zapcom-solutions-pvt-ltd-/posts/?feedView=all"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/ZapcomGroupInc"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/zapcomgroup/"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/ZapcomGroup/"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@Zapcomgroup"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "https://zapcom.ai/about-us" },
                { label: "Services", href: "https://zapcom.ai/services" },
                { label: "Careers", href: "https://zapcom.ai/careers" },
                { label: "Blog", href: "https://zapcom.ai/blogs" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@zapcom.studio"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                hello@zapcom.studio
              </a>
              <a
                href="https://zapcom.ai/"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Globe size={18} />
                www.zapcom.ai
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-full"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Studio Zapminds. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

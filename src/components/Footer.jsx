import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-200 dark:border-neutral-700 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-transparent dark:from-transparent dark:to-transparent -z-10"></div>
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-md font-semibold mb-4 text-neutral-900 dark:text-white bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeInOut" }}
              >
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-orange-500 dark:text-neutral-300 dark:hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all"></span>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-md font-semibold mb-4 text-neutral-900 dark:text-white bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeInOut" }}
              >
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-orange-500 dark:text-neutral-300 dark:hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all"></span>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        >
          <h3 className="text-md font-semibold mb-4 text-neutral-900 dark:text-white bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
              >
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-orange-500 dark:text-neutral-300 dark:hover:text-white transition-colors group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all"></span>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-16 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 dark:from-orange-500/5 dark:via-orange-400/5 dark:to-orange-500/5 rounded-2xl -z-10"></div>
        <div className="max-w-3xl mx-auto px-6 py-8">
          <motion.p 
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            "In the digital age, your software's value isn't just in its code, but in the lives it transforms."
          </motion.p>
          <motion.p 
            className="mt-4 text-sm text-orange-500 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            - Kirti Sharma
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

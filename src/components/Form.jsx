import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiUser, FiMail, FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BackgroundGradient } from "./ui/background-gradient";

const Form = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const licenseTypes = [
    "Individual License",
    "Business License",
    "Enterprise License",
    "Student License",
    "Educational License",
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="contact-us" className="mt-20">
      <BackgroundGradient>
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
                isDarkMode ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-center mb-12 ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className={`space-y-6 p-8 rounded-2xl ${
                isDarkMode ? 'bg-neutral-800' : 'bg-white'
              } shadow-xl`}
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Name
                </label>
                <div className="relative">
                  <FiUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.name
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-neutral-700 bg-neutral-900'
                        : 'border-neutral-300 bg-neutral-50'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isDarkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Email
                </label>
                <div className="relative">
                  <FiMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-neutral-700 bg-neutral-900'
                        : 'border-neutral-300 bg-neutral-50'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isDarkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Company
                </label>
                <div className="relative">
                  <FiBriefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.company
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-neutral-700 bg-neutral-900'
                        : 'border-neutral-300 bg-neutral-50'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isDarkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                    placeholder="Your company name"
                  />
                </div>
                {errors.company && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.company}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  License Type
                </label>
                <div className="relative">
                  <HiOutlineDocumentText className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <select
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border appearance-none ${
                      errors.licenseType
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-neutral-700 bg-neutral-900'
                        : 'border-neutral-300 bg-neutral-50'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isDarkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    <option value="">Select a license type</option>
                    {licenseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className={`w-5 h-5 ${
                        isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.licenseType && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.licenseType}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className={`absolute left-3 top-4 ${
                    isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.message
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-neutral-700 bg-neutral-900'
                        : 'border-neutral-300 bg-neutral-50'
                    } focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                      isDarkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                    placeholder="Your message..."
                  />
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                    />
                  ) : submitSuccess ? (
                    "Message Sent!"
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 mt-4"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Form;

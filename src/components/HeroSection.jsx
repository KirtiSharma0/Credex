import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import { Cover } from "./ui/cover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log('button clicked');
    navigate('/chatbot')
  }
  return (
    <div id="hero" className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-transparent dark:to-transparent blur-3xl opacity-50 -z-10"></div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Supercharge your sales with  <br /> <Cover><span className="text-orange-500">SoftSell</span></Cover>
        </h1>
        <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
        SoftSell is your trusted digital companion, helping you unlock the true value of your unused software licenses and digital products. With just a few clicks, securely upload your asset, receive an AI-powered valuation within seconds, and get paid instantly!
      </p>
      </motion.div>

      <motion.div 
        className="flex justify-center my-10 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      >
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 px-4 mx-3 rounded-md text-white hover:opacity-90 transition-all shadow-sm hover:shadow-md hover:scale-105 font-medium"
        >
          Sell my licenses
        </a>
        <button 
          className="py-3 px-4 mx-3 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all cursor-pointer font-medium shadow-sm hover:shadow-md hover:scale-105" 
          onClick={handleSubmit}
        >
          Chat with us
        </button>
      </motion.div>

      <motion.div 
        className="flex mt-10 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      >
        <video
          autoPlay
          loop
          muted
          loading="lazy"
          preload="none"
          className="rounded-lg w-1/2 border border-orange-200 dark:border-orange-700 shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] shadow-orange-100 dark:shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          loading="lazy"
          preload="none"
          className="rounded-lg w-1/2 border border-orange-200 dark:border-orange-700 shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] shadow-orange-100 dark:shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default HeroSection;
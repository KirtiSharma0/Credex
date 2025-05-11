import { features } from "../constants";
import { motion } from "motion/react";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-20 border-b border-neutral-200 dark:border-neutral-800 min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 to-transparent dark:from-transparent dark:to-transparent -z-10"></div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-neutral-900 dark:to-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase shadow-sm">
          How it works
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-neutral-900 dark:text-white font-semibold">
          There are just{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
            3 simple steps
          </span>
        </h2>
      </motion.div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            <div className="flex group">
              <div className="flex mx-6 h-10 w-10 p-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-neutral-900 dark:to-neutral-900 text-orange-700 justify-center items-center rounded-full shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-neutral-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-colors">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

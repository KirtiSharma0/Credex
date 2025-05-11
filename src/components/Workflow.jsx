import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import { BackgroundLines } from "./ui/background-lines";
import { motion } from "motion/react";

const Workflow = () => {
  return (
    <div id="workflow" className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide dark:text-white">
        Why choose{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          us.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <BackgroundLines className="flex items-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              SoftSell
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
              SoftSell is the fastest, smartest, and frankly, least annoying way to sell your software licenses. Get instant AI-powered valuations, zero-fee payouts, and no meetings — because who likes meetings? Whether you're a developer, digital nomad, or someone with an old license gathering digital dust, we've got your back.
            </p>
          </BackgroundLines>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.2 + 0.1,
                  ease: "backOut"
                }}
              >
                <CheckCircle2 />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.2 + 0.2,
                  ease: "easeOut"
                }}
              >
                <h5 className="mt-1 mb-2 text-xl dark:text-neutral-300">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

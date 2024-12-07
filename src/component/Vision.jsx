import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullhorn } from "react-icons/fa"; // Importing relevant icons

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Vision = () => {
  return (
    <div
    //   className="relative px-5 py-10 bg-cover bg-center min-h-fit"
    //   style={{
    //     backgroundImage:
    //       "url('https://swayzgroup.co.za/wp-content/uploads/2024/05/Downloader.la-64ae9cc62f5f3.jpg')",
    //   }} 
    >
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-55"></div> */}

      <motion.div
        className="relative font-bold text-xl md:text-2xl lg:text-3xl my-10 text-center text-white z-10"
        initial="hidden"
        animate="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <div className="md:px-10 px-5 text-center text-red-500 md:text-3xl text-xl font-bold">
          OUR GOALS AND VALUES
          <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-red-500 rounded-full"></div>
        </div>
      </motion.div>

      {/* Cards with Framer Motion */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 justify-evenly gap-10 md:px-20 xl:px-40 z-10">
        {/* Vision Card */}
        <motion.div
          className="flex flex-col border h-full p-10 space-y-5 text-white rounded-lg hover:bg-black duration-300 transform hover:scale-105 bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-lg md:text-xl font-bold text-center transition-transform duration-300 hover:scale-110 text-white flex items-center justify-center">
            <FaEye className="lg:mr-9 mr-5 text-white text-3xl" />{" "}
            {/* Vision Icon */}
            OUR VISION
          </div>
          <div className="text-justify text-sm md:text-base">
            Our commitment to innovation and excellence has earned us a 95%
            client retention rate, a testament to our reliable and effective
            security measures. We strive to continue pushing boundaries and
            staying at the forefront of global cybersecurity.
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="flex flex-col border h-full p-10 space-y-5 rounded-lg hover:bg-black duration-300 transform hover:scale-105 bg-black text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-lg md:text-xl font-bold text-center transition-transform duration-300 hover:scale-110 text-white flex items-center justify-center">
            <FaBullhorn className="lg:mr-9 mr-5 text-white text-2xl" />{" "}
            {/* Mission Icon */}
            OUR MISSION
          </div>
          <div className="text-justify text-sm md:text-base">
            our mission is to redefine cybersecurity by delivering adaptive,
            AI-driven solutions that anticipate and mitigate threats before they
            materialize. We aim to set the gold standard in proactive threat
            management and ensure our clients operate in a secure and resilient
            digital landscape.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;

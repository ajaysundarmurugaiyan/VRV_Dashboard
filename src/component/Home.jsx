import React, { useRef } from "react";
import { motion } from "framer-motion";
import home from "/public/images/home.jpg";
import StatisticsSection from "./StaticSection";

const Home = () => {
  const nextSectionRef = useRef(null);

  const handleScrollToSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Animated Background Image */}
        <motion.img
          src={home}
          alt="Home"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to VRV Security
          </motion.h1>
          <motion.div
            className="text-white text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex justify-between gap-x-5 w-full max-w-4xl mx-auto">
              <p>
                VRV Security is a global powerhouse in AI-driven cybersecurity
                solutions, rapidly expanded to protect digital assets for
                Fortune 500 companies and government organizations.
              </p>
            </div>
          </motion.div>

          <motion.button
            className="bg-red-600 hover:bg-white duration-500 hover:text-black text-white font-bold py-2 px-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={handleScrollToSection}
          >
            Explore
          </motion.button>
        </div>
      </div>

      {/* Next Section */}
      <div
        ref={nextSectionRef}>
        <StatisticsSection/>
      </div>
    </>
  );
};

export default Home;

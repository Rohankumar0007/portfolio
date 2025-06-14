import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const roles = [
    " Software Developer",
    " Web Developer",
    " Backend Developer",
    " UI/UX Enthusiast",
    " Frontend Developer",
    " Passionate Learner",
    " Problem Solver",
    " Tech Enthusiast",
    " Full Stack Developer",
    " Programming Aficionado",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [dynamicFontSize, setDynamicFontSize] = useState(80);

  useEffect(() => {
    const calculateFontSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setDynamicFontSize(40);
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        setDynamicFontSize(60);
      } else {
        setDynamicFontSize(80);
      }
    };
    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);
    return () => window.removeEventListener("resize", calculateFontSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen mx-auto flex flex-col">
      <div
        className={`absolute inset-0 top-[120px] md:top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-full">
          <h1
            className={`text-white ${styles.heroHeadText} text-[40px] sm:text-[60px] lg:text-[${dynamicFontSize}px]`}>
            Hi, I'm <span className="text-[#915EFF]">Rohan Kumar</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[20px] lg:text-[24px]`}>
            I am a
            <span className="text-[#915EFF] transition-all duration-500">
              {roles[currentRole]}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}></motion.div>
        </a>
      </div>
    </div>
  );
};

export default Hero;

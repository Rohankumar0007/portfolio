import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      const width = window.innerWidth;
      if (width < 640) setDynamicFontSize(36);
      else if (width < 1024) setDynamicFontSize(54);
      else setDynamicFontSize(80);
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
    <section className="relative w-full h-screen mx-auto">
      {/* Text content on top of canvas */}
      <div
        className={`absolute inset-0 top-[120px] md:top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className="text-white font-black"
            style={{ fontSize: `${dynamicFontSize}px`, lineHeight: "1.2" }}>
            Hi, I'm <span className="text-[#915EFF]">Rohan Kumar</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[20px]`}>
            I am a
            <span className="text-[#915EFF] ml-2 transition-all duration-500">
              {roles[currentRole]}
            </span>
          </p>
        </div>
      </div>

      {/* Canvas in background */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

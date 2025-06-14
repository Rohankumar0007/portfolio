import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg1 from "/herobg1.png";

const Hero = () => {
  const roles = [
    "Software Developer",
    "Web Developer",
    "Backend Developer",
    "UI/UX Enthusiast",
    "Frontend Developer",
    "Passionate Learner",
    "Problem Solver",
    "Tech Enthusiast",
    "Full Stack Developer",
    "Programming Aficionado",
  ];

  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen mx-auto flex flex-col"
      style={{
        backgroundImage: `url(${herobg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rohan Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a
            <span className="text-[#915EFF] ml-2 transition-all duration-500">
              {roles[currentRole]}
            </span>
          </p>
        </div>
      </div>

      {/* Profile image section moved below text */}
      <div className="flex flex-row justify-center items-center mt-[330px] ">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-80 h-80 rounded-full object-cover border-4 border-[#915EFF] shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

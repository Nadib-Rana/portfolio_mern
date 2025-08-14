import React, { useState, useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import {
  SiFigma,
  SiBootstrap,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiWordpress,
  SiJavascript,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills = [
    { icon: <DiMysql />, color: "bg-blue-900 text-blue-100", name: "SQL" },
    { icon: <SiFigma />, color: "bg-purple-900 text-purple-100", name: "Figma" },
    { icon: <SiBootstrap />, color: "bg-indigo-900 text-indigo-100", name: "Bootstrap" },
    { icon: <SiExpress />, color: "bg-gray-800 text-gray-100", name: "Express.js" },
    { icon: <SiTypescript />, color: "bg-sky-900 text-sky-100", name: "TypeScript" },
    { icon: <SiNodedotjs />, color: "bg-green-900 text-green-100", name: "Node.js" },
    { icon: <SiTailwindcss />, color: "bg-cyan-900 text-cyan-100", name: "Tailwind" },
    { icon: <SiReact />, color: "bg-blue-900 text-blue-100", name: "React" },
    { icon: <SiJavascript />, color: "bg-yellow-800 text-yellow-100", name: "JavaScript" },
    { icon: <SiWordpress />, color: "bg-blue-900 text-blue-100", name: "WordPress" },
    { icon: <FaCuttlefish />, color: "bg-red-900 text-red-100", name: "C" },
  ];

  const [currentSkill, setCurrentSkill] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const orbitRadius = 120; // Fixed radius for all orbiting skills

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="about"
      className="bg-gray-900 py-20 px-6 max-w-7xl mx-auto min-h-[500px] scroll-mt-[100px]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-center mb-1">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Skills Visualization */}
        <div className="relative w-[300px] h-[300px] mx-auto flex items-center justify-center">
          {/* Fixed Central Profile Icon */}
          <div className="relative z-10">
            <motion.div
              className="p-6 bg-gray-800 rounded-full shadow-lg ring-2 ring-indigo-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <FaUserTie className="text-indigo-400" size={100} />
            </motion.div>
          </div>

          {/* Featured Skill - Fixed Position Above Icon */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0 }}
            animate={isAnimating ? "exit" : "enter"}
            variants={{
              enter: { 
                scale: 1,
                opacity: 1,
                y: -orbitRadius - 40, // Fixed position above center
                transition: { type: "spring", stiffness: 300 }
              },
              exit: { 
                scale: 0,
                opacity: 0,
                y: -orbitRadius - 80,
                transition: { duration: 0.3 }
              }
            }}
          >
            <div className={`px-4 py-2 mt-140 rounded-full shadow-lg ${skills[currentSkill].color} flex items-center  gap-2 border border-gray-600`}>
              <span className="text-xl">{skills[currentSkill].icon}</span>
              <span className="font-medium">{skills[currentSkill].name}</span>
            </div>
          </motion.div>

          {/* Orbiting Skills with Fixed Radius */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {skills.map((skill, i) => {
              const angle = (i * 360) / skills.length;
              const radian = (angle * Math.PI) / 180;
              const x = orbitRadius * Math.cos(radian);
              const y = orbitRadius * Math.sin(radian);
              
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    x,
                    y,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`p-2 rounded-full shadow-md ${skill.color} border border-gray-600`}>
                    {skill.icon}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-300">
            Full-Stack Developer & Problem Solver
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a Computer Science graduate specializing in full-stack web development with extensive experience across the JavaScript ecosystem.
            </p>
            <p>
              My expertise ranges from building responsive UIs with React to designing scalable backend systems with Node.js and Express.
            </p>
            <p>
              I'm passionate about creating efficient, maintainable code and delivering exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
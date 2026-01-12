"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Button from "./Button";
import { memo } from "react";

const Hero = memo(() => {
  const [text] = useTypewriter({
    words: [
      "Frontend Engineer.",
      "Solidity Developer.",
      // "Fullstack Web Developer.",
      // "Graphic Designer.",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col 
        min-h-[calc(100vh-6rem)] xl:min-h-full justify-center max-w-7xl mx-auto
        pt-24 md:pt-28 lg:pt-32"
    >
      <div className="space-y-4 sm:space-y-5 md:space-y-6 px-6 md:px-16  lg:px-20">
        <h4
          className="text-sm sm:text-base md:text-lg lg:text-xl 
          font-medium text-gray-600"
        >
          Hi, the name is
        </h4>

        <h1
          className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl 
          lg:text-7xl xl:text-8xl tracking-tight"
        >
          Ayodeji Atanda.
        </h1>

        <div
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          text-gray-500 h-[60px] sm:h-[72px] md:h-[84px]"
        >
          <h2 className="inline-flex items-center">
            {text}
            <Cursor cursorColor="#0077b5" />
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-600  leading-relaxed">
          I’m a software engineer creating clean, responsive, and accessible web
          experiences with React, Next.js, Tailwind CSS, and Web3. I build smart
          contracts with Solidity, contribute to decentralized projects, and
          enjoy mentoring new developers to make technology more usable and
          inclusive for everyone.
        </p>

        <div className="pt-6 lg:pt-0">
          <Button title="Get In Touch" />
        </div>
      </div>
    </motion.div>
  );
});

Hero.displayName = "Hero";

export default Hero;

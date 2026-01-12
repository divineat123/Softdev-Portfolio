import React from "react";
import { motion } from "framer-motion";

const BgCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [ 0.2, 0.4, 0.8, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center ml-[35rem]"
    >
      <div className=" absolute border-black border rounded-full w-[100px]  h-[100px] transition duration-1000 mt-52 animate-ping" />
      <div className=" absolute border-black bordern opacity-20 rounded-full w-[200px] transition duration-700 h-[200px] mt-52 animate-ping" />
      <div className=" absolute border-black border opacity-15 rounded-full transition duration-700 w-[200px] h-[200px] mt-52 animate-ping" />

      <div className="transition duration-700 absolute border-blue-700 opacity-5 border rounded-full w-[50px] h-[px] mt-52 hidden lg:inline-flex animate-pulse" />
      <div className="transition duration-700 absolute border-black border rounded-full opacity-50 w-[300px] h-[300px] mt-52 animate-ping" />
    </motion.div>
  );
};

export default BgCircles;

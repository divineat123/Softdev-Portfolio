"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="flex items-start bg-black  justify-between sticky top-0 max-w-5xl  z-20 lg:items-center p-4">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex  flex-row items-center"
      >
        <SocialIcon
          network="x"
          bgColor="transparent"
          fgColor="#1DA1F2"
          url="https://twitter.com/DEJIxICE"
          className="h-2 w-2"
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          fgColor="#0077b5"
          url="https://www.linkedin.com/in/ayodeji-atanda/"
          className="h-2 w-2"
        />
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor=" #FFC0CB"
          url="https://instagram.com/deji_ice?igshid=NTc4MTIwNjQ2YQ=="
          className="h-2 w-2"
        />
      </motion.div>
      
    </header>
  );
};

export default Header;

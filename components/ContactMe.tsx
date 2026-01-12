/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Button from "./Button";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ContactMe = (props: Props) => {
  const handleClick = () => {
    window.location.href = "mailto:ayodejiatanda1@gmail.com";
  };
  return (
    <footer
      className=" flex text-center flex-col md:text-left mt-10 lg:mt-28 mb-5 max-w-7xl
       px-3 lg:px-10  overflow-hidden   mx-auto items-center lg:space-y-10  "
    >
      <h3
        className="text-3xl md:mb-[6rem]  lg:mb-[0] font-semibold
        font-outfit text-gray-500"
      >
        Get In Touch
      </h3>
      <div
        className="lg:space-y-20 pb-28 lg:pb-10 xl:space-y-1 flex flex-col items-center justify-start md:max-w-2xl lg:max-w-3xl max-w-3xl tracking-wide text-center 

       font-normal xl:text "
      >
        <p className="text-sm my-3 xl:mb-16 xl:text-xl  p-5 text-start md:text-center md:text-xl lg:text-3xl ">
          Ready to take your web projects to the next{" "}
          <span className="underline decoration-black decoration-2">level</span>
          ? <br /> Let's collaborate and create exceptional user experiences
          together.
          <br /> Contact me now and let's discuss how I can contribute to your
          frontend development needs. Reach out and let's build something
          amazing!
        </p>
        <Button title="Say Hello"  />
      </div>
      <div className=" absolute bottom-10 space-x-4 xl:space-y-5 xl:bottom-[11rem] xl:left-5 xl:space-x-0 xl:flex xl:flex-col xl:z-20 xl:fixed xl:items-center xl:justify-center xl:text-center">
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="#464646"
          onClick={handleClick}
          target="_blank"
          className="h-2 w-2 filter grayscale hover:cursor-pointer  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="github"
          bgColor="transparent"
          fgColor="#464646"
          url="https://github.com/deji-ice"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="twitter"
          bgColor="transparent"
          fgColor="#1DA1F2"
          url="https://twitter.com/DEJIxICE"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          fgColor="#0077b5"
          url="https://www.linkedin.com/in/ayodeji-atanda/"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor="#e91578"
          url="https://www.instagram.com/deji_ice/"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
      </div>
      <p className="text-xs tracking-wide font-normal">
        Created by X user
        <span className="font-semibold"> @dejixice</span> @2023
      </p>
    </footer>
  );
};

export default ContactMe;

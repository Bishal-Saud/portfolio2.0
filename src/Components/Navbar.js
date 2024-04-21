"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { useState } from "react";

const MotionLi = ({ icon }) => {
  return (
    <motion.li
      initial={{ scale: 0.9 }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className=" cursor-pointer lg:w-[2rem]"
    >
      {icon}
    </motion.li>
  );
};
const NavLink = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`${className} font-semibold  hover:border-b-4 border-dark transition-all ease-in-out lg:text-xl `}
    >
      {title}
    </Link>
  );
};
const NavMobileLink = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`${className} font-semibold  hover:border-b-4 border-dark transition-all ease-in-out lg:text-2xl `}
    >
      {title}
    </Link>
  );
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="relative  flex 2xl:justify-between xl:justify-between px-5 items-center ">
      <button
        className="hidden flex-col mt-5 items-center justify-center lg:flex"
        onClick={handleChange}
      >
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="lg:hidden border rounded-full border-black flex items-center justify-center p-2 bg-dark text-light text-center font-semibold h-16 w-16  hover:bg-light  hover:border-dark  hover:text-dark transition-all duration-700 ease-in-out mt-1">
        <a
          href="../../public/images/personal/resume.pdf"
          download="resume.pdf"
          className=""
        >
          CV{" "}
        </a>
      </div>
      <div className="lg:hidden absolute top-20 left-[2.5rem]">
        <ul className="flex gap-5 flex-col text-3xl">
          <MotionLi icon={<GithubIcon />} />
          <MotionLi icon={<TwitterIcon />} />
          <MotionLi icon={<PinterestIcon />} />
          <MotionLi icon={<LinkedInIcon />} />
          <MotionLi icon={<DribbbleIcon />} />
          <MotionLi icon={<MoonIcon />} />
        </ul>
      </div>
      <div className="lg:hidden">
        <nav>
          <NavLink href="/" title="Home" className="mx-4" />
          <NavLink href="/about" title="About" className="mx-4" />
          <NavLink href="/projects" title="Projects" className="mx-4" />
          <NavLink href="/contact" title="Contact" className="mx-4" />
          <NavLink href="/articles" title="Articles" className="mx-4" />
          <NavLink href="/skills" title="Skills" className="ml-4" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[75vw] flex-col fixed flex z-30 items-center text-light dark:text-dark justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 "
        >
          <div>
            <nav className="flex flex-col gap-5">
              <NavLink href="/" title="Home" className="mx-4" />
              <NavLink href="/about" title="About" className="mx-4" />
              <NavLink href="/projects" title="Projects" className="mx-4" />
              <NavLink href="/contact" title="Contact" className="mx-4" />
              <NavLink href="/articles" title="Articles" className="mx-4" />
              <NavLink href="/skills" title="Skills" className="ml-4" />
            </nav>
          </div>
          <div className="w-full">
            <ul className="flex gap-5 mt-10 items-center justify-center ">
              <MotionLi icon={<GithubIcon />} />
              <MotionLi icon={<TwitterIcon />} />
              <MotionLi icon={<PinterestIcon />} />
              <MotionLi icon={<LinkedInIcon />} />
              <MotionLi icon={<DribbbleIcon />} />
              <MotionLi icon={<MoonIcon />} />
            </ul>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

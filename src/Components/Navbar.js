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

const MotionLi = ({ icon }) => {
  return (
    <motion.li
      initial={{ scale: 0.9 }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className=" cursor-pointer"
    >
      {icon}
    </motion.li>
  );
};
const NavLink = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`${className} font-semibold  hover:border-b-4 border-dark transition-all ease-in-out `}
    >
      {title}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="  flex justify-between px-5 items-center ">
      <div className="border rounded-full border-black flex items-center justify-center p-2 bg-dark text-light text-center font-semibold h-16 w-16 hover:bg-light hover:border-dark hover:-rotate-90 hover:text-dark transition-all duration-700 ease-in-out">
        <Link href="/">
          <span className=" text-2xl font-mono logo">👇</span>
        </Link>
      </div>
      <div className="absolute top-20 left-[2.5rem]">
        <ul className="flex gap-5 flex-col text-3xl">
          <MotionLi icon={<GithubIcon />} />
          <MotionLi icon={<TwitterIcon />} />
          <MotionLi icon={<PinterestIcon />} />
          <MotionLi icon={<LinkedInIcon />} />
          <MotionLi icon={<DribbbleIcon />} />
          <MotionLi icon={<MoonIcon />} />
        </ul>
      </div>
      <div>
        <nav>
          <NavLink href="/" title="Home" className="mx-4" />
          <NavLink href="/about" title="About" className="mx-4" />
          <NavLink href="/projects" title="Projects" className="mx-4" />
          <NavLink href="/contact" title="Contact" className="mx-4" />
          <NavLink href="/articles" title="Articles" className="mx-4" />
          <NavLink href="/skills" title="Skills" className="ml-4" />
        </nav>
      </div>
    </header>
  );
}

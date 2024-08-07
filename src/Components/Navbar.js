"use client";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
// import resume from "../../public/images/personal/v4_Bishal_resume.pdf";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-1 inline-block bg-dark absolute left-0 -bottom-0.5 hover:bottom-b-4 group-hover:w-full transition-[width] ease duration-300${
          router.asPath === href ? "w-full" : "w-0"
        }  dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const MotionLi = ({ icon, link }) => {
  return (
    <motion.li
      initial={{ scale: 0.9 }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className=" cursor-pointer lg:w-[2rem]"
    >
      <Link href={link} target="_blank">
        {icon}
      </Link>
    </motion.li>
  );
};
const NavLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  function handleChange() {
    setIsOpen(!isOpen);
  }
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <header
      className="relative lg:border-none lg:shadow-none  shadow-[#9999] shadow-sm flex justify-between xl:justify-between px-5 items-center text-dark dark:text-light
     "
    >
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
      <div className="lg:hidden border rounded-full border-black flex items-center justify-center p-2 bg-dark text-light text-center font-semibold h-16 w-16  hover:bg-light  hover:border-dark  hover:text-dark dark:bg-light dark:text-dark  dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition-all duration-700 ease-in-out mt-1">
        <a
          href="/images/personal/v4_Bishal_resume.pdf"
          download="v4_Bishal_resume.pdf"
          className=""
        >
          CV
        </a>
      </div>
      <div className="lg:hidden absolute top-20 left-[2.5rem]">
        <ul className="flex gap-5 flex-col text-3xl">
          <MotionLi
            icon={<GithubIcon />}
            link="https://github.com/Bishal-Saud?tab=repositories"
          />
          <MotionLi
            icon={<TwitterIcon />}
            link="https://twitter.com/Bishal_Saud05"
          />
          <MotionLi
            icon={<PinterestIcon />}
            link="https://in.pinterest.com/bishalsaud15/"
          />
          <MotionLi
            icon={<LinkedInIcon />}
            link="https://www.linkedin.com/in/bishal-saud-6a47ba235/"
          />
          <MotionLi
            icon={<DribbbleIcon />}
            link="https://dribbble.com/Bishal15"
          />

          <button
            className={`rounded-full p-1 flex items-center justify-center ${
              mode === "light" ? "text-dark" : "text-dark bg-light"
            }`}
            onClick={toggleTheme}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </ul>
      </div>
      <div className="lg:hidden">
        <nav>
          <NavLink href="/" title="Home" className="mx-4" />
          <NavLink href="/projects" title="Projects" className="mx-4" />
          <NavLink href="/skills" title="Skills" className="ml-4" />
          <NavLink href="/contact" title="Contact" className="mx-4" />
          <NavLink href="/articles" title="Articles" className="mx-4" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[75vw] flex-col fixed flex z-30 items-center text-light dark:text-dark justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 md:h-[80%] md:w-[80%] md:justify-center xl:flex 2xl:hidden"
        >
          <div>
            <nav className="flex flex-col gap-5">
              <CustomMobileLink
                toggle={handleChange}
                href="/"
                title="Home"
                className=""
              />

              <CustomMobileLink
                toggle={handleChange}
                href="/projects"
                title="Projects"
                className=""
              />
              <CustomMobileLink
                toggle={handleChange}
                href="/skills"
                title="Skills"
                className=""
              />
              <CustomMobileLink
                toggle={handleChange}
                href="/contact"
                title="Contact"
                className=""
              />
              <CustomMobileLink
                toggle={handleChange}
                href="/articles"
                title="Articles"
                className=""
              />
            </nav>
          </div>
          <div className="w-full">
            <ul className="flex gap-5 md:gap-2 mt-10 items-center justify-center ">
              <MotionLi
                icon={<GithubIcon />}
                link="https://github.com/Bishal-Saud?tab=repositories"
              />
              <MotionLi
                icon={<TwitterIcon />}
                link="https://twitter.com/Bishal_Saud05"
              />
              <MotionLi
                icon={<PinterestIcon />}
                link="https://in.pinterest.com/bishalsaud15/"
              />
              <MotionLi
                icon={<LinkedInIcon />}
                link="https://www.linkedin.com/in/bishal-saud-6a47ba235/"
              />
              <MotionLi
                icon={<DribbbleIcon />}
                link="https://dribbble.com/Bishal15"
              />
              <button
                className={`rounded-full p-1 flex items-center justify-center lg:text-light lg:dark:text-dark ${
                  mode === "light" ? "text-dark" : "text-dark bg-light"
                }`}
                onClick={toggleTheme}
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className="fill-dark" />
                )}
              </button>
            </ul>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

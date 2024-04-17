"use client";
import AnimatedText from "@/Components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import blogImg from "../../../public/images/projects/blog.png";
import formImg from "../../../public/images/projects/form.png";
import lmsImg from "../../../public/images/projects/lms.png";
import todoImg from "../../../public/images/projects/todo.png";
import pokedexImg from "../../../public/images/projects/pokedex.png";
import netflixImg from "../../../public/images/projects/netflix.png";
import imageShow from "../../../public/images/projects/imageShow.png";
import searchMovieImg from "../../../public/images/projects/searchMovie.png";
import { GithubIcon } from "@/Components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";
import Experience from "@/Components/Experience";

const ProjectBox = ({ img, alt, className, link }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className={`rounded-lg flex items-center justify-between  flex-col  border-r-8 border-b-8 w-1/2 h-full border-dark overflow-hidden cursor-pointer ${className}`}
    >
      <Image className=" h-52" src={img} alt={alt} />
      <div className="flex gap-4 p-2">
        <GithubIcon className="!text-2xl" />
        <Link
          href={link}
          target="_blank"
          className="text-2xl font-medium hover:underline"
        >
          Live
        </Link>
      </div>
    </motion.div>
  );
};
const ProjectBigBox = ({ img, alt, className, link }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className={`rounded-lg flex items-center justify-between  flex-col  border-r-8 border-b-8 w-1/2 h-full border-dark overflow-hidden cursor-pointer ${className}`}
    >
      <Image className=" h-full" src={img} alt={alt} />
      <div className="flex gap-4 p-2">
        <GithubIcon className="!text-2xl" />
        <Link
          href={link}
          target="_blank"
          className="text-2xl font-medium hover:underline"
        >
          Live
        </Link>
      </div>
    </motion.div>
  );
};
export default function Page() {
  return (
    <>
      <Head>
        <title>Bishal \ Projects Page</title>
        <meta name="projects page" content="any description" />
      </Head>
      <main className="w-full min-h-screen flex items-center flex-col gap-4 mb-10 ">
        <div className=" w-full flex flex-col justify-center">
          <AnimatedText className=" !text-6xl pt-10" text="My Projects" />
        </div>
        <div className=" mt-10 flex  justify-evenly gap-5  w-2/3 h-1/2">
          <ProjectBox
            img={blogImg}
            link="https://pwskillsblog.netlify.app/"
            alt="project 1"
          />
          <ProjectBox img={imageShow} link="/" alt="project 2" />
        </div>
        <ProjectBigBox
          className="h-[50vh]"
          link="https://learning-mangement.netlify.app/"
          img={lmsImg}
          alt="project 3"
        />
        <div className=" mt-10 flex  justify-evenly gap-5  w-2/3 h-1/2">
          <ProjectBox
            img={searchMovieImg}
            link="https://moviesearchassignment.netlify.app/"
            alt="project 4"
          />
          <ProjectBox
            img={netflixImg}
            link="https://netfliss.netlify.app/"
            alt="project 5"
          />
        </div>
        <ProjectBigBox
          className="h-[50vh]"
          link="https://pokemonpic.netlify.app/"
          img={pokedexImg}
          alt="project 6"
        />
      </main>
    </>
  );
}

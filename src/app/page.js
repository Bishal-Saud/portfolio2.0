"use client";

import Head from "next/head";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../Components/ui/typewriter-effect";
import AnimatedText from "../Components/AnimatedText";
import HomeContainer from "../Components/homecontainer";

import Faq from "@/Components/ui/faq";
// import PricingCard from "@/Components/ui/priceCard";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  const words = [
    {
      text: "Passionate",
    },
    {
      text: "Web Developer.",
    },
    {
      text: "Bishal Saud",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <Head>
        <title>Bishal Saud \ Home Page</title>
        <meta
          name="home"
          content="Welcome to the home page of Bishal Saud, a proficient Next.js and MERN stack developer. Discover my portfolio, skills, and the innovative web development projects I have worked on."
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center my-10 lg:mb-5 text-dark dark:text-light">
        <section className="flex items-center justify-center flex-col">
          <div className="flex  border 2xl:gap-5 xl:gap-2 rounded-xl 2xl:p-5 h-1/3 shadow-xl xl:p-1 w-2/3 xl:w-3/4 md:w-full justify-center items-center 2xl:flex-row xl:flex-row lg:flex-col md:border-none ">
            <div className="bg-gradient-to-r   to-emerald-600 from-sky-400 flex justify-center items-center  2xl:h-full xl:h-2/3 xl:w-2/3">
              <HomeContainer />
            </div>
            <div className="w-2/3 h-full p-5 md:w-full">
              <TypewriterEffectSmooth words={words} />

              <p className="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Web development is like crafting a virtual world, where each
                line of code weaves together to create digital experiences that
                resonate with real human needs and emotions.
              </p>
              <AnimatedText
                className="!text-xl !text-start xl:!text-sm !pt-2"
                text="Embarking on a Journey in Web Development 🌐 | Committed to DailyGrowth 📚 | Learning and Creating with Passion."
              />
              <div className="pt-10 pb-5 flex justify-start items-center gap-4">
                <button
                  className=" flex items-center gap-2 border border-dark transition-all ease-in-out duration-300 bg-dark text-light hover:bg-light hover:text-dark dark:bg-light dark:text-black dark:hover:text-light 
              hover:border-light dark:hover:bg-dark  sm:text-sm  font-semibold h-12 w-28 px-2 rounded-md py-2"
                >
                  <Link href="/contact" aria-label="contact">
                    Contact <span className="">Me</span>
                  </Link>
                </button>

                <Link
                  className="font-semibold  sm:text-sm transition-all ease-in-out duration-300 hover:underline"
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="font-semibold sm:text-sm  transition-all ease-in-out duration-300 underline sm:hidden "
                  href="/skills"
                >
                  Skills
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full p-5 md:w-full">
            <Faq />
          </div>
        </section>
      </main>
      {/* <section className="flex text-center min-h-screen flex-col my-10">
        <Typography variant="h2" className="text-dark dark:text-light  my-10">
          Pricing
        </Typography>
        <div className=" flex items-center justify-center flex-wrap gap-5"></div>
      </section> */}
    </>
  );
}

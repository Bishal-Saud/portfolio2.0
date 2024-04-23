"use client";

import AnimatedText from "@/Components/AnimatedText";
import { TextGenerateEffect } from "@/Components/Text-generate";
import HomeConatiner from "@/Components/homeConatiner";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bishal Saud \ Home Page</title>
        <meta name="home" content="Bishal saud Home page" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-between my-10  text-dark dark:text-light">
        <div className="flex  border 2xl:gap-5 xl:gap-2 rounded-xl 2xl:p-5 h-1/3 shadow-xl xl:p-1 2xl:w-2/3  xl:w-3/4 md:w-full justify-center items-center 2xl:flex-row xl:flex-row lg:flex-col  ">
          <div className="bg-gradient-to-r to-emerald-600 from-sky-400 flex justify-center items-center  2xl:h-full xl:h-2/3 xl:w-2/3 ">
            <HomeConatiner />
          </div>
          <div className="w-2/3 h-full p-5 md:w-full">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white  xl:text-2xl 2xl:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Bishal Saud
              </span>{" "}
              Web developer.
            </h1>

            <p className="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Web development is like crafting a virtual world, where each line
              of code weaves together to create digital experiences that
              resonate with real human needs and emotions.
            </p>
            <AnimatedText
              className="!text-xl !text-start xl:!text-sm !pt-2"
              text="Embarking on a Journey in Web Development 🌐 | Committed to DailyGrowth 📚 | Learning and Creating with Passion."
            />
            <div className="pt-10 pb-5 flex justify-start items-center gap-4">
              <button
                className=" flex items-center gap-2 border border-dark transition-all ease-in-out duration-300 bg-dark text-light hover:bg-light hover:text-dark dark:bg-light dark:text-black dark:hover:text-light 
              hover:border-light dark:hover:bg-dark  font-semibold h-12 w-28 px-2 rounded-md py-2"
              >
                <Link href="/contact">
                  Contact <span className="">Me</span>
                </Link>
              </button>

              <Link
                className="font-semibold  transition-all ease-in-out duration-300 hover:underline"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="font-semibold  transition-all ease-in-out duration-300 underline"
                href="/articles"
              >
                Create Articles
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

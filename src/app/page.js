"use client";

import AnimatedText from "@/Components/AnimatedText";
import { AnimatedPinDemo } from "@/Components/demo3d";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bishal Saud \ Home Page</title>
        <meta name="home" content="Bishal saud Home page" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="flex  justify-center items-center gap-2 w-full">
          <div className=" flex justify-center items-center   ">
            <AnimatedPinDemo />
          </div>
          <div className="w-1/2 h-full">
            <AnimatedText
              className="!text-2xl "
              text="Embarking on a Journey in Web Development 🌐 | Committed to DailyGrowth 📚 | Learning and Creating with Passion."
            />
            <div className="pt-10 flex justify-center items-center gap-4">
              <button className=" flex items-center gap-2 border border-dark transition-all ease-in-out duration-300 bg-dark text-light hover:bg-light hover:text-dark font-semibold h-12 w-28 px-2 rounded-md py-2">
                Contact <span className=" text-2xl">&#9737;</span>
              </button>
              <Link
                className="font-semibold  transition-all ease-in-out duration-300 hover:underline"
                href="/projects"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";
import AnimatedText from "@/Components/AnimatedText";
import { TextGenerateEffect } from "@/Components/Text-generate";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Bishal \ About Page</title>
        <meta name="about page" content="any description" />
      </Head>

      <main className="w-full min-h-screen pt-10 flex flex-col  items-center">
        <div className="flex items-center flex-col justify-center w-2/3 ">
          <AnimatedText className=" pb-5 !text-6xl" text=" About Me" />
          <TextGenerateEffect
            className=" pb-5 !text-lg !font-medium"
            words=" Hello there! I'm Bishal Saud, a passionate web development enthusiast hailing from the beautiful land of Nepal.
        My journey in the world of coding is not just a profession; it's a perpetual adventure. Each day, I dedicate
        myself to continuous growth, embracing the challenges and triumphs that come with being a developer."
          />
        </div>
        <div className="w-2/3 lg:flex-col  flex justify-between border border-r-8 border-b-8  rounded-3xl  border-[#35374B] lg:px-10 md:px-2">
          <div className=" 2xl:w-1/2 xl:w-full p-4 justify-center flex items-center flex-col  border-r-4 rounded-full border-[#35374B]">
            <h2 className="2xl:py-5 lg:py-2 text-[#FF3EA5]">{"<CODE/>"}</h2>
            <p className="  2xl:px-5 lg:px-2 lg:text-sm sm:text-[10px] ">
              Coding, on the other hand, is the implementation of the design
              through programming languages. It transforms conceptualized
              designs into functional software or websites. Skilled coding
              requires logical thinking, problem-solving, and attention to
              detail. The code serves as the backbone, bringing the design to
              life and enabling the intended functionality.
            </p>
          </div>
          <div className="2xl:w-1/2 xl:w-full border-l-4 rounded-full border-[#35374B] p-4 flex justify-center items-center flex-col">
            <h2 className="2xl:py-5 lg:py-2 text-[#54c1cb]"> {"<DESIGN/>"}</h2>
            <p className=" 2xl:px-5 lg:px-2 lg:text-sm sm:text-[10px] ">
              Designing involves creating a blueprint for a product or system,
              considering aesthetics, functionality, and user experience. It
              encompasses ideation, wireframing, prototyping, and user testing
              to ensure a seamless and visually appealing outcome. Effective
              design communicates ideas and solves problems.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";
import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/Components/Icons";
import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Bishal \ Contact Page</title>
        <meta name="Contact page" content="any description" />
      </Head>
      <main className="min-h-screen w-full ">
        <AnimatedText text="Contact Me" className="!text-4xl my-10" />
        <div className="flex items-start justify-center gap-5 mt-10 w-full  h-full shadow-light shadow-2xl lg:flex-col lg:items-center lg:justify-center ">
          <div className=" bg-light rounded-md flex flex-col items-center justify-end  gap-4  h-full w-1/2 lg:w-3/4">
            <h2 className="text-4xl">
              Let's Work together, <span className="text-primary">Bishal</span>
            </h2>
            <div className="flex items-start justify-start flex-col pt-9">
              <p className="text-xl font-semibold">
                Email:{" "}
                <span className=" opacity-30 hover:opacity-100 ease-in-out duration-300 transition-opacity hover:text-primary">
                  bishalsaud15@gmail.com
                </span>
              </p>
              <p className="text-xl font-semibold">
                Phone Number:{" "}
                <span className=" opacity-30 hover:opacity-100 hover:text-secondary ease-in-out duration-300 transition-opacity">
                  +9779865742290
                </span>
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-2xl py-4 font-mono">Find out Here</h2>
              <div className="flex gap-6  items-center justify-center">
                <Link
                  className=" text-4xl cursor-pointer"
                  href="https://github.com/Bishal-Saud"
                  target="_blank"
                >
                  <GithubIcon />
                </Link>
                <Link
                  className=" text-4xl cursor-pointer"
                  href="https://www.linkedin.com/in/bishal-saud-6a47ba235/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  className=" text-4xl cursor-pointer"
                  href="https://twitter.com/Bishal_Saud05"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </div>
          <form className=" shadow-sm shadow-dark bg-light text-dark rounded-lg h-full p-10 flex flex-col gap-2 justify-center w-[35%] md:w-[90%] lg:w-[60%]">
            <div className="your name flex gap-5 xl:flex-col">
              <div className="name flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Your Name{" "}
                </label>
                <input
                  className="p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2 rounded-sm"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="number flex flex-col">
                <label htmlFor="number" className="font-semibold">
                  Phone Number{" "}
                </label>
                <input
                  className="border border-dark p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>
            </div>

            <div className="email flex flex-col">
              <label htmlFor="email" className="font-semibold ">
                Email{" "}
              </label>
              <input
                className="border border-dark p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="subject flex flex-col">
              <label htmlFor="subject" className="font-semibold ">
                Subject{" "}
              </label>
              <input
                className="border border-dark p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2"
                type="text"
                placeholder="Enter your subject"
              />
            </div>
            <div className="message flex flex-col">
              <label htmlFor="message" className="font-semibold ">
                Message{" "}
              </label>
              <textarea
                className="border border-dark h-28 resize-none p-2 bg-light shadow-dark outline-none border-none shadow-sm mt-2"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="shadow-sm hover:shadow-xl transition-all ease-out duration-300  shadow-dark mt-4 p-2 text-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

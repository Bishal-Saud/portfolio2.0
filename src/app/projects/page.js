"use client";

import AnimatedText from "@/Components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import { GithubIcon } from "@/Components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

// Project data
const projectData = [
  {
    label: "All",
    value: "all",
    projects: [
      {
        img: "/images/projects/hamropasal.png",
        alt: "Haamropasal",
        link: "https://haamropasal.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/portfolio2.0",
      },
      {
        img: "/images/projects/lms.png",
        alt: "LMS",
        link: "https://learning-mangement.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud?tab=repositories",
      },
      {
        img: "/images/projects/moviesHomepage.png",
        alt: "MoviesHomePage Task",
        link: "https://movieshomepage.netlify.app/",
        githubLink:
          "https://github.com/Bishal-Saud/Movie_Streaming_Platform_Homepage",
      },
      {
        img: "/images/projects/premiumHub.png",
        alt: "premiumHub",
        link: "https://premiumhub.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/ECommerce_OnLy_HTLM_CSS_JS",
      },
      {
        img: "/images/projects/blog.png",
        alt: "Blog",
        link: "https://pwskillsblog.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/PwSkills.blogs.github.io",
      },
      {
        img: "/images/projects/imageShow.png",
        alt: "imageShow",
        link: "https://imageshow.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud",
      },

      {
        img: "/images/projects/searchMovie.png",
        alt: "searchMovie",
        link: "https://moviesearchassignment.netlify.app/",
        githubLink:
          "https://github.com/Bishal-Saud/MileStone-2Exam.Solution/tree/main/Project%202%20Build%20Simple%20Movie%20Search%20Web%20App%20Using%20HTML%2C%20CSS%20%26%20JavaScript%20Only",
      },
      {
        img: "/images/projects/netflix.png",
        alt: "netflix",
        link: "https://netfliss.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud",
      },
      {
        img: "/images/projects/pokedex.png",
        alt: "pokedex",
        link: "https://pokemonpic.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/pokedex",
      },

      {
        img: "/images/projects/todo.png",
        alt: "todo",
        link: "https://todoworkapp.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/MileStone-2Exam.Solution",
      },
    ],
  },
  {
    label: "HTML/CSS/JS",
    value: "html/css/js",
    projects: [
      {
        img: "/images/projects/premiumHub.png",
        alt: "E-commerce",
        link: "https://premiumhub.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/ECommerce_OnLy_HTLM_CSS_JS",
      },
      {
        img: "/images/projects/netflix.png",
        alt: "netflix",
        link: "https://netfliss.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud",
      },
      {
        img: "/images/projects/firstportfolio.png",
        alt: "first Portfolio",
        link: "https://bishalsaud.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud?tab=repositories",
      },
    ],
  },
  {
    label: "React",
    value: "react",
    projects: [
      {
        img: "/images/projects/hamropasal.png",
        alt: "Haamropasal",
        link: "https://haamropasal.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/portfolio2.0",
      },
      {
        img: "/images/projects/moviesHomepage.png",
        alt: "MoviesHomePage Task",
        link: "https://movieshomepage.netlify.app/",
        githubLink:
          "https://github.com/Bishal-Saud/Movie_Streaming_Platform_Homepage",
      },
      {
        img: "/images/projects/searchMovie.png",
        alt: "searchMovie",
        link: "https://moviesearchassignment.netlify.app/",
        githubLink:
          "https://github.com/Bishal-Saud/MileStone-2Exam.Solution/tree/main/Project%202%20Build%20Simple%20Movie%20Search%20Web%20App%20Using%20HTML%2C%20CSS%20%26%20JavaScript%20Only",
      },
      {
        img: "/images/projects/pokedex.png",
        alt: "pokedex",
        link: "https://pokemonpic.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/pokedex",
      },
      {
        img: "/images/projects/todo.png",
        alt: "Todo",
        link: "https://todoworkapp.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud/MileStone-2Exam.Solution",
      },
    ],
  },

  {
    label: "MERN/App",
    value: "mern app",
    projects: [
      {
        img: "/images/projects/lms.png",
        alt: "LMS",
        link: "https://learning-mangement.netlify.app/",
        githubLink: "https://github.com/Bishal-Saud?tab=repositories",
      },
    ],
  },
  {
    label: "Next JS",
    value: "next js",
    projects: [
      {
        img: "/images/projects/nextjsportfolio.png",
        alt: "Next js portfolio",
        link: "https://bishalsaud.vercel.app/",
        githubLink: "https://github.com/Bishal-Saud/portfolio2.0",
      },
    ],
  },
];

// ProjectGallery component
const ProjectGallery = () => {
  return (
    <Tabs value="all">
      <TabsHeader className="flex sm:flex-col 2xl:flex-row xl:flex-row md:flex-row">
        {projectData.map(({ label, value }) => (
          <Tab key={value} value={value} className="sm:text-xs border-2 m-1">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4 ">
        {projectData.map(({ value, projects }) => (
          <TabPanel
            className="grid grid-cols-3 gap-4 md:grid-cols-1"
            key={value}
            value={value}
          >
            {projects?.map(({ img, alt, link, githubLink }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className=" rounded-lg flex items-center justify-between flex-col border-r-8 border-b-8 h-full border-dark dark:border-light shadow-sm dark:shadow-white cursor-pointer"
              >
                <Image
                  className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  src={img}
                  alt={alt}
                  width={200}
                  height={200}
                />
                <div className="flex gap-4 p-2">
                  <Link href={githubLink} target="_blank">
                    <GithubIcon className="!text-2xl" />
                  </Link>
                  <Link
                    href={link}
                    target="_blank"
                    className="text-2xl font-medium hover:underline"
                  >
                    Live <span className="text-xs">{alt}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

// Page component
export default function Page() {
  return (
    <>
      <Head>
        <title>Bishal \ Projects Page</title>
        <meta
          name="projects page"
          content="Explore the diverse range of projects developed by Bishal Saud, showcasing expertise in Next.js and the MERN stack. From innovative web applications to responsive user interfaces, discover how cutting-edge technologies are utilized to create impactful solutions."
        />
      </Head>
      <main className="w-full min-h-screen flex items-center flex-col gap-4 mb-10 text-dark dark:text-light">
        <div className="w-full flex flex-col justify-center">
          <AnimatedText
            className="!text-6xl pt-10 md:!text-4xl"
            text="My Projects"
          />
        </div>
        <ProjectGallery />
      </main>
    </>
  );
}

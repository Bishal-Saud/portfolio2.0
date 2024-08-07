"use client";
import AnimatedText from "@/Components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import htmlImg from "../../../public/images/Skills/html.png";
import cssImg from "../../../public/images/Skills/css.png";
import jsImg from "../../../public/images/Skills/js.png";
import mongoImg from "../../../public/images/Skills/mongo.png";
import nodeImg from "../../../public/images/Skills/node.png";
import reactImg from "../../../public/images/Skills/react-js.png";
import tailwindImg from "../../../public/images/Skills/tailwindcss.png";
import expressImg from "../../../public/images/Skills/express.png";
import reduxToolkit from "../../../public/images/Skills/reduxToolkit.jpg";
import nextJs from "../../../public/images/Skills/nextJS.png";
import github from "../../../public/images/Skills/github.jpg";
import npm from "../../../public/images/Skills/npm.webp";
import Experience from "@/Components/Experience";

const SkillBox = ({ img, title, percentage }) => {
  return (
    <div className="flex flex-col rounded-md justify-between  items-center p-2 m-2 ">
      <Image src={img} alt="skill" className="h-30 w-36" />

      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold text-xl">{percentage}%</span>
        <span className="text-primary">{title}</span>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <>
      <Head>
        <title>Bishal \ Skills Page</title>
        <meta
          name="skills page"
          content="Discover the professional skills of Bishal Saud, an expert in Next.js and MERN stack development. Explore detailed insights into React, MongoDB, Express.js, Node.js, and how these technologies are leveraged to build robust and scalable web applications."
        />
      </Head>
      <main className="min-h-screen w-full text-dark dark:text-light ">
        <AnimatedText
          text="My Skills"
          className="!text-6xl !font-serif !text-center md:!text-4xl"
        />

        <div className="  flex items-center flex-col justify-center  mt-10 gap-10 h-full  w-full">
          <p className="text-sm text-[#0000007f] dark:text-[#ffffff7f] hover:text-primary lg:px-4">
            @Percentages are just ratings by myself, but I believe that if you
            don&apos;t know anything, just Google it. LOL.{" "}
          </p>

          <div className="flex  w-[80%] flex-col h-full ">
            {/* <h2 className="text-4xl font-serif text-center p-4">My Skills</h2> */}

            <div className="skills mt-5 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10">
              <SkillBox img={htmlImg} title="HTML" percentage={90} />
              <SkillBox img={cssImg} title="CSS" percentage={80} />
              <SkillBox img={jsImg} title="JS" percentage={70} />
              <SkillBox img={reactImg} title="REACT" percentage={70} />
              <SkillBox img={nodeImg} title="NODE JS" percentage={66} />
              <SkillBox img={mongoImg} title="MONGO DB" percentage={55} />
              <SkillBox img={tailwindImg} title="TailwindCSS" percentage={60} />
              <SkillBox img={expressImg} title="EXPRESS" percentage={66} />
              <SkillBox img={nextJs} title="NEXT JS" percentage={70} />
              <SkillBox img={npm} title="NPM" percentage={60} />
              <SkillBox img={github} title="github" percentage={70} />
              <SkillBox
                img={reduxToolkit}
                title="Redux Toolkit"
                percentage={50}
              />
            </div>
          </div>
        </div>
        <Experience />
      </main>
    </>
  );
}

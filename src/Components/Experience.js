import { Ysabeau_Office } from "next/font/google";
import AnimatedText from "./AnimatedText";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import certificate from "../../public/images/Skills/certificate.png";

const ExperienceBox = ({ title, description }) => {
  return (
    <motion.div
      initial={{ scale: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileInView={{ scale: 1, y: 1 }}
      className="w-1/2 md:w-full lg:w-3/4"
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="py-2">{description}</p>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="m-5 my-10">
      <AnimatedText
        text="Experience and Certificates"
        className="lg:!text-4xl"
      />
      <div className="flex w-full justify-between lg:flex-col lg:justify-center lg:items-center ">
        <div className="flex flex-col w-1/2 justify-center mt-20 lg:w-full">
          <div className="flex justify-center items-center">
            <div className="border-dark border w-3/4 ">
              <Image src={certificate} alt="certificate" priority />
            </div>
          </div>
          <h2 className="text-4xl p-2 mt-4 font-semibold lg:p-1 lg:text-2xl lg:text-center">
            Full stack web development Certificate.
          </h2>
        </div>
        <div className="flex flex-col  pl-5 gap-y-10 justify-center relative items-start mt-20 w-1/2  lg:w-full lg:items-center lg:pl-1 lg:gap-y-5">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="border-dark  border-l-4 w-2 h-full left-[-10px] absolute lg:hidden"
          />
          <ExperienceBox
            title="@2023,Joined Pw skills web dev Boot-camp"
            description="During this  Boot-camp, I completed a series of courses and projects
            that have enriched my programming expertise and provided me with
            practical software development insights."
          />
          <ExperienceBox
            title="@2022-2023,Content Writing,Facebook Marketing"
            description="Facebook marketing and content writing are vital for online success. Utilizing Facebook's reach and targeted ads alongside compelling content ensures effective audience engagement and growth."
          />
          <ExperienceBox
            title="@2023,Learning Experience"
            description="To be honest, I have no big industrial experience yet, but I am ready to gain experience. I have my own learning and researching experiences."
          />
        </div>
      </div>
    </div>
  );
}

import { Ysabeau_Office } from "next/font/google";
import AnimatedText from "./AnimatedText";
import { easeIn, easeInOut, motion } from "framer-motion";

const ExperienceBox = ({ title, description }) => {
  return (
    <motion.div
      initial={{ scale: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileInView={{ scale: 1, y: 1 }}
      className="w-1/2"
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="py-2">{description}</p>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className=" m-5 my-10">
      <AnimatedText text="Experience and Certificates" />
      <div className="flex w-full justify-between ">
        <div className="flex w-1/2 justify-center mt-20">
          <h2>My Certificates</h2>
          <div className="grid grid-cols-1 items-center">
            <div className="border-dark border ">Certificates 11</div>
            <div className="border-dark border ">Certificates 11</div>
            <div className="border-dark border ">Certificates 11</div>
          </div>
        </div>
        <div className="flex flex-col  pl-5 gap-y-10 justify-center relative items-start mt-20 w-1/2">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="border-dark  border-l-4 w-2 h-full left-[-10px] absolute"
          />
          <ExperienceBox
            title="@Designer,Google"
            description="During my internship, I completed a series of courses and projects
          that have enriched my programming expertise and provided me with
          practical software development insights."
          />
          <ExperienceBox
            title="@Designer,Google"
            description="During my internship, I completed a series of courses and projects
          that have enriched my programming expertise and provided me with
          practical software development insights."
          />
          <ExperienceBox
            title="@Designer,Google"
            description="During my internship, I completed a series of courses and projects
          that have enriched my programming expertise and provided me with
          practical software development insights."
          />
        </div>
      </div>
    </div>
  );
}

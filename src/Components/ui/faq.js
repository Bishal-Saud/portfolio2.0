import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How can my unique blend of skills and experiences benefit your team?
        </AccordionHeader>
        <AccordionBody>
          My diverse skills, coupled with a passion for learning and innovation,
          enable me to bring fresh perspectives and valuable insights to your
          projects. I'm eager to contribute to your team's success by leveraging
          my unique blend of experiences and skills.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What sets me apart from other candidates and makes me an ideal fit for
          this role?
        </AccordionHeader>
        <AccordionBody>
          What distinguishes me is not just my technical expertise but also my
          commitment to continuous improvement and adaptability. I possess
          strong problem-solving skills and a collaborative mindset, making me
          an ideal candidate to tackle your team's challenges effectively.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          In what ways can I contribute to the success and growth of your
          organization?
        </AccordionHeader>
        <AccordionBody>
          I'm dedicated to contributing to your organization's success by
          leveraging my skills to enhance projects, tackle new challenges, and
          collaborate effectively with team members. My goal is to drive
          innovation and make a positive impact on your organization's growth
          trajectory.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          How do my passion for learning and adaptability align with the needs
          of your team?
        </AccordionHeader>
        <AccordionBody>
          My passion for learning and adaptability make me well-suited to thrive
          in dynamic environments. I actively seek out opportunities for growth
          and stay updated with industry trends, ensuring that I can bring fresh
          insights and value to your team's projects.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          What specific projects or challenges are you ready to tackle?
        </AccordionHeader>
        <AccordionBody>
          I'm eager to take on optimization tasks, implement new features, and
          resolve technical issues aligned with my skills and interests. With
          dedication and expertise, I'm prepared to contribute my best efforts
          towards achieving your organization's objectives.
        </AccordionBody>
      </Accordion>
    </>
  );
}

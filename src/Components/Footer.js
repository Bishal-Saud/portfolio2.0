"use client";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between dark:bg-light">
      <Typography color="blue-gray" className="font-normal">
        &copy; {date} bishal saud
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/aabout"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/projects"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Projects
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/skills"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Skills
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

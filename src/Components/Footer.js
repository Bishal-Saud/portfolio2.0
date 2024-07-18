"use client";
import { Avatar, Typography } from "@material-tailwind/react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between dark:bg-dark dark:text-light">
      <Avatar src="https://bestofjs.org/logos/nextjs.svg" alt="avatar" />

      <Typography color="blue-gray" className="font-normal">
        &copy; {date} All rights reserved by Bishal Saud.
      </Typography>
    </footer>
  );
}

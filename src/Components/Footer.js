"use client";
import { Avatar, Typography } from "@material-tailwind/react";
import avatar from "../../public/images/personal/owner.png";
export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between dark:bg-dark dark:text-light">
      <Avatar
        src="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/409729615_371969541974560_61709591685620646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p6DJu6wNNQUQ7kNvgGH_Yu_&_nc_ht=scontent.fdhi1-1.fna&oh=00_AYApipBKb0geqJAOjpXdSuMOKe0etXFO2BKkJXsOrdV6dg&oe=66593651"
        alt="avatar"
      />

      <Typography color="blue-gray" className="font-normal">
        &copy; {date} All rights reserved by Bishal Saud.
      </Typography>
    </footer>
  );
}

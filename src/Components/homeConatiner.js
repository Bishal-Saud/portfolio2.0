"use client";
import Image from "next/image";
import React from "react";
import owner from "../../public/images/personal/owner.png";
function HomeConatiner({ className }) {
  return (
    <div className="flex rounded-md  items-start justify-start ">
      <Image
        src={owner}
        alt="owner of this website "
        className={`${className}2xl:h-full 2xl:w-3/4 xl:h-full xl:w-3/4 rounded-md `}
        priority
      />
    </div>
  );
}

export default HomeConatiner;

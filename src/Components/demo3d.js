"use client";
import React from "react";
import { PinContainer } from "./3d";
import profile from "../../public/images/personal/owner.png";
import Image from "next/image";
export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="/bishalsaud.com" href="https://twitter.com">
        <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[37rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Full Stack Developer
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Hello there! I'm Bishal Saud, a passionate web development
              enthusiast hailing from the beautiful land of Nepal.
            </span>
          </div>
          <Image
            priority
            src={profile}
            alt="profile"
            className="flex h-full flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-blue-500 to-sky-500"
          />
        </div>
      </PinContainer>
    </div>
  );
}

import Link from "next/link";
import { RotateText } from "./Icons";

export default function HireMe() {
  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center overflow-hidden md:top-[-10rem] ">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-32">
        <RotateText
          className={"fill-dark animate-spin-slow dark:fill-light md:text-sm"}
        />
        <Link
          href="mailto:bishalsaud15@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 md:w-14 md:h-14 md:text-sm rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

import { cn } from "@/untill/cn";
import Image from "next/image";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid  grid-cols-2 gap-2", className)}>{children}</div>
  );
};

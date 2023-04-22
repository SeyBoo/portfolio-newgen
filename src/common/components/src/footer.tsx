import Link from "next/link";
import { FunctionComponent } from "react";
import { Logo } from "./logo";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="text-[#6E757C] flex flex-col md:flex-row md:justify-between gap-4 items-center py-6 max-w-[95%] lg:max-w-[90%] m-auto 3xl:max-w-[1860px] text-center">
      <div>
        <Logo />
        <p>© Copyright 2023 All Rights Reserved</p>
      </div>
      <div className="flex gap-4 lg:gap-6">
        <Link href="">Home</Link>
        <Link href="">About Me</Link>
        <Link href="">Contact</Link>
      </div>
    </footer>
  );
};

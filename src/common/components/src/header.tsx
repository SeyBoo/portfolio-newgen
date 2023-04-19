import {
  FromTheLeftAnimation,
  FromTheRightAnimation,
  FromTheTopAnimation,
  ZoomInAnimation,
} from "@/common/animations";
import * as groovyWalkAnimation from "@/common/assets/man-working.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="flex flex-col gap-4 -mt-10 lg:gap-6 lg:grid lg:grid-cols-2 lg:items-center">
      <ZoomInAnimation delay={0.1}>
        <Lottie animationData={groovyWalkAnimation} loop={true} />
      </ZoomInAnimation>
      <div className="flex flex-col gap-4 lg:gap-6 text-center text-[#DD9787] lg:-order-1 lg:text-start lg:max-w-[80%]">
        <FromTheTopAnimation delay={0.5}>
          <h1 className="text-4xl font-bold xl:text-6xl lg:leading-[45px] xl:leading-[65px]">
            Hi, I&apos;m Antoine <br /> a Fullstack <br />
            Web Developper
          </h1>
        </FromTheTopAnimation>
        <FromTheTopAnimation delay={0.75}>
          <p className="text-[#6E757C] xl:text-xl xl:leading-8 xl:max-w-xl">
            My objective is to provide high-quality, creative solutions that
            solve complex problems and help my clients succeed.
          </p>
        </FromTheTopAnimation>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 items-center text-center">
          <FromTheLeftAnimation delay={1.25}>
            <div className="bg-[#FFCB6B80] p-4 text-sm font-semibold rounded-lg border-2 border-[#ffcb6b00] xl:text-lg">
              <Link href="">Get in touch</Link>
            </div>
          </FromTheLeftAnimation>
          <FromTheRightAnimation delay={1.25}>
            <div className="p-4 text-sm font-semibold rounded-lg border-2 border-[#DD9787] xl:text-lg">
              <Link href="">Wiew all works</Link>
            </div>
          </FromTheRightAnimation>
        </div>
      </div>
    </header>
  );
};

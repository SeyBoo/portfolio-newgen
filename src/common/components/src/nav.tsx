import { EaseInAnimation } from "@/common/animations";
import LogoImage from "@/common/assets/logo.svg";
import Image from "next/image";
import { FunctionComponent } from "react";

export const Nav: FunctionComponent = () => {
  return (
    <div className="max-w-[95%] lg:max-w-[90%] 3xl:max-w-[1860px] m-auto">
      <EaseInAnimation>
        <nav className="flex items-center h-24 -ml-4 lg:h-32 lg:-ml-8">
          <div className="relative h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]">
            <Image src={LogoImage} alt="logo" fill />
          </div>
          <p className="text-[#DD9787] font-semibold text-xl -ml-16 -mt-2 lg:-ml-[85px] lg:-mt-4 lg:text-2xl">
            Antoine Chevalier <strong className="text-[#FFCB6B80]">.</strong>
          </p>
        </nav>
      </EaseInAnimation>
    </div>
  );
};

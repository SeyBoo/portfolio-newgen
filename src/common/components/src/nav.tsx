import { EaseInAnimation } from "@/common/animations";
import { FunctionComponent } from "react";
import { Logo } from "./logo";

export const Nav: FunctionComponent = () => {
  return (
    <div className="max-w-[95%] lg:max-w-[90%] 3xl:max-w-[1860px] m-auto">
      <EaseInAnimation>
        <Logo />
      </EaseInAnimation>
    </div>
  );
};

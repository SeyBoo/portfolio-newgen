
import { Header } from "@/common/components";
import { FunctionComponent, PropsWithChildren } from "react";
import { Nav } from "../../components";

export const BaseLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="bg-[#F6E7CB] min-h-screen h-full overflow-hidden">
      <div className="max-w-[95%] lg:max-w-[90%] m-auto 3xl:max-w-[1860px]">
        <Nav />
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

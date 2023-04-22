import { FromTheTopAnimation } from "@/common/animations";
import { FunctionComponent } from "react";

export const Contact: FunctionComponent = () => {
  return (
    <div className="bg-[#F7F7F8] px-4 py-10 mt-10 text-[#272E35]">
      <div className="3xl:max-w-[1860px] m-auto">
        <FromTheTopAnimation>
          <h6 className="text-[#DD9787] text-2xl 3xl:text-4xl text-center font-bold">
            Contact me today & let&apos;s get started
          </h6>
        </FromTheTopAnimation>
        <form
          className="rounded-2xl bg-white px-4 py-8 mt-6 flex flex-col gap-6 shadow-lg max-w-lg m-auto"
          method="POST"
          action="https://api.web3forms.com/submit"
        >
          <input
            type="hidden"
            name="access_key"
            value="e481bf8e-cf70-47c9-8f21-a3397d62b909"
          />
          <FromTheTopAnimation delay={0.3}>
            <div className="flex flex-col gap-2">
              <label>Your name</label>
              <input
                type="text"
                placeholder="Write your name"
                name="name"
                required
              />
              <hr />
            </div>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.4}>
            <div className="flex flex-col gap-2">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Write your email address"
                name="email"
                required
              />
              <hr />
            </div>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.5}>
            <div className="flex flex-col gap-2">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Write a subject line"
                name="subject"
                required
              />
              <hr />
            </div>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.6}>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                placeholder="Add a brief of your project"
                required
                name="message"
              ></textarea>
              <hr />
            </div>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.7}>
            <input
              type="submit"
              value="Send"
              className="bg-[#FFCB6B80] text-[#DD9787] w-full rounded-xl text-lg py-3 font-medium mt-2"
            />
          </FromTheTopAnimation>
        </form>
      </div>
    </div>
  );
};

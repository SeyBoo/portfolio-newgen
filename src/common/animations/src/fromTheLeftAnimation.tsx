import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

interface FromTheLeftAnimationProps {
  delay?: number;
}

export const FromTheLeftAnimation: FunctionComponent<
  PropsWithChildren<FromTheLeftAnimationProps>
> = ({ children, delay = 0.25 }) => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 2,
        delay,
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {children}
    </motion.div>
  );
};

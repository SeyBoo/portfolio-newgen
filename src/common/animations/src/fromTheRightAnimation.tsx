import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

interface FromTheRightAnimationProps {
  delay?: number;
}

export const FromTheRightAnimation: FunctionComponent<
  PropsWithChildren<FromTheRightAnimationProps>
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
        delay: delay,
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};

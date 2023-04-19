import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

interface ZoomInAnimationProps {
  className?: string;
  delay?: number;
}

export const ZoomInAnimation: FunctionComponent<
  PropsWithChildren<ZoomInAnimationProps>
> = ({ children, className, delay = 0.25 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      transition={{
        type: "spring",
        bounce: 0.1,
        duration: 1.75,
        delay,
      }}
      variants={{
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0.75, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

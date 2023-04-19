import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

export const EaseInAnimation: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.1,
        duration: 1,
        delay: 0.15,
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

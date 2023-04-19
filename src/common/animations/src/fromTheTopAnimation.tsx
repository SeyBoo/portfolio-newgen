import { motion } from 'framer-motion';
import { FunctionComponent, PropsWithChildren } from 'react';

interface FromTheTopAnimationProps {
  duration?: number;
  delay?: number;
  startY?: number;
  className?: string;
}

export const FromTheTopAnimation: FunctionComponent<
  PropsWithChildren<FromTheTopAnimationProps>
> = ({ duration = 2, delay = 0.25, startY = -100, className, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: duration,
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: startY, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
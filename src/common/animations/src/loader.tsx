import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F6E7CB]">
      <motion.div
        className="h-32 w-32 rounded-full border-4 border-[#DD9787]"
        variants={{
          start: {
            scale: 0,
          },
          end: {
            scale: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          },
        }}
        initial="start"
        animate="end"
      />
    </div>
  );
};

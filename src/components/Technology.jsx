import { RiReactjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technology = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 pb-2"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(6)}
          className="p-4"
        >
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4"
        >
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4"
        >
          <SiCss3 className="text-7xl text-cyan-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;

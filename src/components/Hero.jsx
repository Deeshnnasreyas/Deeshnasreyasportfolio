import profilepic from "../assets/proimg.png";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="Deeshna"
              className="shadow-black rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              width={650}
              height={650}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter
                      lg:text-8xl font-semibold bg-gradient-to-r from-yellow-200 to-yellow-800 text-transparent bg-clip-text"
            >
              Deeshnna Sreyas
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="text-3xl tracking-tight text-yellow-100 font-bold"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/files/DEESHNNASREYASCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-full p-4 px-5 text-sm shadow-lg bg-yellow-5 text-white bg-gradient-to-r from-yellow-400 to-yellow-800 hover:bg-yellow-800 hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

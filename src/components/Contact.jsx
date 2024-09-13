import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-1 border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter text-yellow-400">
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a href="#" className="border-b">
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

export const HomeLayout = ({ children }) => {
  return (
    <div className="bg-neutral-700 h-[100vh] overflow-hidden">
      <motion.div
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: "-7rem", opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar />
      </motion.div>
      {/* children */}
      <div className="flex justify-center items-center flex-col">
        <motion.main
          className="bg-neutral-700 h-[calc(100vh-4rem)] px-12 flex flex-col justify-center w-full"
          animate={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: "100vh", opacity: 0.2, scale: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextComponent } from "./TextComponent";

const StickyLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      style={{ display: "flex", color: "black", minHeight: "100vh" }}
    >
      <motion.div
        style={{
          color: "white",
          position: "sticky",
          width: "30%",
          top: "0",
          alignSelf: "flex-start",
        }}
        variants={leftVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2>Hey I&apos;m the Left Section</h2>
      </motion.div>
      <div
        style={{
          width: "70%",
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TextComponent length={5} />
        </motion.div>
      </div>
    </div>
  );
};

export default StickyLayout;

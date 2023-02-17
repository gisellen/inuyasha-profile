import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import './Home.sass'

export default function Home() {
  const [isAbout, setIsAbout ] = useState(false);

  const animation = {
    animate: { y: [-100, 0], opacity: [0, 1] },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } },
  };
  return (
    <div className="title highlightDisable">
      <motion.span
        variants={animation}
        animate="animate"
        exit="exit"
        transition={{ ease: "easeOut", duration: 1 }}
        className="small-title"
      >
        THE CHARACTERS OF
      </motion.span>
      <motion.span
        variants={animation}
        className="big-title"
        animate="animate"
        transition={{ delay: 0.9, ease: "easeOut", duration: 1 }}
        exit="exit"
      >
        INUYASHA
      </motion.span>
      <motion.div
        variants={animation}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 3, ease: "easeOut", duration: 2 }}
        exit="exit"
      >
        <>
          <NavLink className="link" >HOME</NavLink>
          <NavLink className="link" onClick={() => setIsAbout(true)}>ABOUT</NavLink>
        </>
      </motion.div>
      <motion.div
        className="inuyasha-link"
        variants={animation}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 3, ease: "easeOut", duration: 2 }}
        exit="exit"
      >
      </motion.div>
    </div>
  );
}

import React from "react";
import "./inuyasha.sass";
import InuyashaImage from "../assets/inuyasha.png";
import { motion } from "framer-motion";


export default function Inuyasha() {
  const animation = {
    animate: { y: [-100, 0], opacity: [0, 1] },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div 
    variants={animation}
    animate="animate"
    className="inuyasha">
      <section className="inuyasha-description">
        <h2 className="inuyasha-header">INUYASHA</h2>
        <p>
          The son of a demon father and a human mother, was bound to a sacred
          tree from Kikyo, the shrine priestess, while trying to claim the
          Shikon Jewel. A powerful shard amongst demons. Until Kagome, fdks
          reincarnation freed him.
        </p>
      </section>
      <section className="inu-image-group">
        <div className="circle"></div>
        <img className="inu-pic" src={InuyashaImage} />
      </section>
    </motion.div>
  );
}

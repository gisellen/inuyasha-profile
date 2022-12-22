import React from "react";
import "./inuyasha.sass";
import InuyashaImage from "../assets/Inuyasha.png";
import InuyashaImage2 from "../assets/Inuyasha2.png";
import { motion } from "framer-motion";
import CharacterNav from "../common/CharacterNav";

export default function Inuyasha() {
  const animation = {
    animate: { y: [-100, 0], opacity: [0, 1], transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={animation} animate="animate" exit="exit">
      <div className="inuyasha">
        <div className="inuyasha-card">
          <img className="inu-pic2" src={InuyashaImage2} />
          <section className="inuyasha-description">
            <h2 className="inuyasha-header">INUYASHA</h2>
            <p>
              The son of a demon father and a human mother, was bound to a
              sacred tree from Kikyo, the shrine priestess, while trying to
              claim the Shikon Jewel, a powerful shard amongst demons. Until
              Kagome, who is supposedly Kikyo's reincarnation, freed him.
            </p>
            <blockquote>
              "I'm a half-demon, more egotistical and greedy than any other
              living creature — that's what human beings are, right?"
            </blockquote>
            <img className="inu-pic" src={InuyashaImage} />
          </section>

          
        </div>
        <CharacterNav />
      </div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import './About.sass'

export default function About() {
  return <div className="about">
      <motion.section 
      animate={{opacity: [0,1]}}
      transition={{ease:"easeOut", duration: 0.2}}
      className="description">
THIS WEBSITE IS AN UNOFFICIAL WEBSITE AND IS INTENDED FOR LEARNING USE ONLY.<br />
      THIS SHOWCASES THE MAIN CHARACTERS OF A POPULAR ANIME IN THE LATE 90S, INUYASHA BY RUMIKO TAKAHASHI, ORIGINALLY PUBLISHED BY SHOGAKUKAN.
      </motion.section>
  </div>;
}

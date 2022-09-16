import React, { useState } from "react";
import "./home.sass";
import { motion } from "framer-motion";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [speed, setSpeed] = useState(60);
  function handleMouseMove(e) {
    let _w = e.clientX - window.innerWidth / 2;
    let _h = e.clientY - window.innerHeight / 2;
    let depthX = `${50 + _w / speed}`;
    let depthY = `${50 + _h / speed}`;
    setOffsetX(depthX);
    setOffsetY(depthY);
  }

  let offset = {
    backgroundPosition: `${offsetX}% ${offsetY}%`,
  };

  return (
    <div
      style={offset}
      onMouseMove={(e) => handleMouseMove(e)}
      className="background-img"
    >
      <div className="blur">
        <div className="text highlightDisable">犬夜叉</div>
        <div className="title highlightDisable">
          <motion.span
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="small-title"
          >
            THE CHARACTERS OF
          </motion.span>
          <motion.span
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.9, ease: "easeOut", duration: 1 }}
          >
            INUYASHA
          </motion.span>
        </div>
      </div>
    </div>
  );
}

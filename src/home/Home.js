import React, { useState } from "react";
import "./home.sass";

import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Title from "./Title";
import About from "./About";

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

  const location = useLocation();
  return (
    <div
      style={offset}
      onMouseMove={(e) => handleMouseMove(e)}
      className="background-img"
    >
      <div className="blur">
        <div className="text highlightDisable">犬夜叉</div>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Title />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

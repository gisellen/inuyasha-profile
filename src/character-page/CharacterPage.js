import React from "react";
import inuyashaImg from "../assets/Inuyasha2.png";
import kagomeImg from "../assets/kagome.png";
import sangoImg from "../assets/sango.png";
import mirokuImg from "../assets/miroku.png";
import shippoImg from "../assets/shippo.png";
import kilalaImg from "../assets/kilala.png";

import { Link } from "react-router-dom";

import "./CharacterPage.sass";

import { motion } from "framer-motion";

export default function CharacterPage() {
  const animation = {
    animate: { opacity: [0, 1], transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      exit={{opacity: [1,0], transition: {duration: 1}}}
      className="center character-page"
    >
      <motion.div
        variants={animation}
        animate="animate"
        exit="exit"
        className="character-container"
      >
        <Link to='/inuyasha' className="character">
          <div className="character-title">
            <div className="center" style={{flexDirection: 'column',}}>
            <div>Inuyasha</div>
            <div>犬夜叉</div>
            </div>
          </div>
          <img className="character-image" src={inuyashaImg} />
        </Link>
        <div className="character">
          <div className="character-title">
          <div className="center" style={{flexDirection: 'column',}}>
            <div>Kagome</div>
            <div>かごめ</div>
            </div>
          </div>
          <img className="character-image" src={kagomeImg} />
        </div>
        <div className="character">
          <div className="character-title">
          <div className="center" style={{flexDirection: 'column',}}>
            <div>Sango</div>
            <div>珊瑚</div>
            </div>
          </div>
          <img className="character-image" src={sangoImg} />
        </div>
        <div className="character">
          <div className="character-title">
          <div className="center" style={{flexDirection: 'column',}}>
            <div>Miroku</div>
            <div>弥勒</div>
            </div>
          </div>
          <img className="character-image" src={mirokuImg} />
        </div>
        <div className="character">
          <div className="character-title">
          <div className="center" style={{flexDirection: 'column',}}>
            <div>Shippo</div>
            <div>七宝</div>
            </div>
          </div>
          <img className="character-image" src={shippoImg} />
        </div>
        <div className="character">
          <div className="character-title">
          <div className="center" style={{flexDirection: 'column',}}>
            <div>Kilala</div>
            <div>雲母</div>
            </div>
          </div>
          <img className="character-image" src={kilalaImg} />
        </div>
      </motion.div>
    </motion.div>
  );
}

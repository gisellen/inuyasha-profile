import React from "react";
import inuyashaImg from "../assets/Inuyasha2.png";
import kagomeImg from "../assets/kagome.png";
import sangoImg from "../assets/sango.png";
import mirokuImg from "../assets/miroku.png";
import shippoImg from "../assets/shippo.png";
import kilalaImg from "../assets/kilala.png";

import "./CharacterPage.sass";

import { motion } from "framer-motion";

export default function CharacterPage() {
  return (
    <div className="center character-page">
      <div className="character-container">
        <div className="character">
          <div className="character-title">inuyasha</div>
          <img className="character-image" src={inuyashaImg} />
        </div>
        <div className="character">
          <img className="character-image" src={kagomeImg} />
        </div>
        <div className="character">
          <img className="character-image" src={sangoImg} />
        </div>
        <div className="character">
          <img className="character-image" src={mirokuImg} />
        </div>
        <div className="character">
          <img className="character-image" src={shippoImg} />
        </div>
        <div className="character">
          <img className="character-image" src={kilalaImg} />
        </div>
      </div>
    </div>
  );
}

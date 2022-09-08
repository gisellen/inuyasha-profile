import React, {useState} from "react";
import "./home.sass";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [speed, setSpeed] = useState(1/32)
function handleMouseMove(e) {
  console.log(e.pageX, e.pageY)
  setOffsetX(e.pageX)
}

let offset = {
  // backgroundPositionX: `${offsetX}`
             }
  return (
    <div style={offset} onMouseMove={e => handleMouseMove(e)} className="background-img">
      <div className="blur">
      <div className="text highlightDisable">犬夜叉</div>
      <div className="title">The Characters of Inuyasha</div>
      </div>

    </div>
  );
}

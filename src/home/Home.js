import React, {useState} from "react";
import "./home.sass";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [speed, setSpeed] = useState(50)
function handleMouseMove(e) {
  let _w = e.clientX - window.innerWidth/2
  let _h = e.clientY - window.innerHeight/2
  let depthX = `${50 + _w/speed}`
  let depthY = `${50 + _h/speed}`
  setOffsetX(depthX)
  setOffsetY(depthY)
}

let offset = {
  backgroundPosition: `${offsetX}% ${offsetY}%`
}

  return (
    <div style={offset} onMouseMove={e => handleMouseMove(e)} className="background-img">
      <div className="blur">
      <div className="text highlightDisable">犬夜叉</div>
      <div className="title"><span className="small-title">The Characters of</span> Inuyasha</div>
      </div>

    </div>
  );
}

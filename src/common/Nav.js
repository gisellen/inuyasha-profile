import React from "react";
import {NavLink} from 'react-router-dom'
export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="link" to="/home">HOME</NavLink>
      <NavLink className="link" to="/about">ABOUT</NavLink>
    </nav>
  );
}

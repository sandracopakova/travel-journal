import React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} />
      <div>my travel journal.</div>
    </nav>
  );
}

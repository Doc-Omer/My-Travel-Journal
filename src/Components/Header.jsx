import React from "react";
import "../App.css";
import Globe from "../assets/globe.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={Globe} alt="Globe-icon" className="header--icon" />
      <p className="header--text">My Travel Journey</p>
    </nav>
  );
}

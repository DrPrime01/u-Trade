import React from "react";
import "./Navigation.css";
import logo from "../Assets/Images/logo.svg"

function Navigation() {
  return (
    <nav className="navbar">
      <span className="logo-container"><img src={logo} alt="logo" /></span>
      <ul className="nav-list">
        <li className="nav-list-item">Features</li>
        <li className="nav-list-item">About</li>
        <li className="nav-list-item">Support</li>
        <li className="nav-list-item">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation;

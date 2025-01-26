import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <h4>GROW TOGETHER</h4>
        </div>
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a href="/" className="header-menu-link">
                <span>HOME</span>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="/about" className="header-menu-link">
                <span>ABOUT US</span>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="/courses" className="header-menu-link">
                <span>COURSES</span>
              </a>
            </li>
            <li className="header-menu-item">
              <a href="/contact" className="header-menu-link">
                <span>CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

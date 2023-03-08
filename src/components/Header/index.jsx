import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="content">
        <div className="banner">
          <h2 className="heading">The Artifact</h2>
          <div className="subheading">Culture & Art Blog</div>
        </div>
        <div className="navbar">
          <div>Blog</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

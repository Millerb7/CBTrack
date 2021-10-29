import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

function BackNavbar() {
  return (
    <nav className="navbar is-flex p-2 m-2">
          <Link className="navbar-item" to="/"><i className="fas fa-chevron-left"></i></Link>
    </nav>
  );
}

export default BackNavbar;

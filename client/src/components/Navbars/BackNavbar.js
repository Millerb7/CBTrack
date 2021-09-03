import React from "react";
import { Link } from "react-router-dom";

function BackNavbar() {
  return (
    <nav className="navbar p-4 m-2">
          <Link className="navbar-item" to="/">back</Link>
    </nav>
  );
}

export default BackNavbar;

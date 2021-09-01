import React from "react";
import { Link } from "react-router-dom";

function BackNavbar() {
  return (
    <nav className="nav flex-row justify-space-around p-4 m-2 bg-dark">
      <ul>
        <li>
          <Link to="/">back</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BackNavbar;

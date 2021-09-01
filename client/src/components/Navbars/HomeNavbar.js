import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <nav className="nav flex-row justify-space-around p-4 m-2 bg-dark">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/log">Log</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;

import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import './nav.css';

function HomeNavbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar">
      {Auth.loggedIn() ? (
        <div className="is-flex is-justify-content-space-around p-2 m-2">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/log">
            Log
          </Link>
          <Link className="navbar-item" to="/calendar">
            Calendar
          </Link>
          <Link className="navbar-item" to="/settings">
            Options
          </Link>
          <Link onClick={logout} className="navbar-item" to="/">
            Logout
          </Link>
        </div>
      ) : (
        <div className="is-flex is-justify-content-space-around p-2 m-2">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default HomeNavbar;

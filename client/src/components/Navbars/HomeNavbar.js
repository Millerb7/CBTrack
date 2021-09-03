import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function HomeNavbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar is-flex  p-4 m-2">
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

      {Auth.loggedIn() ? (
        <Link onClick={logout} className="navbar-item" to="/">
          Logout
        </Link>
      ) : (
        <Link className="navbar-item" to="/login">
          Login
        </Link>
      )}
    </nav>
  );
}

export default HomeNavbar;

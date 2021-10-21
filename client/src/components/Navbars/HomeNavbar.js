import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function HomeNavbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <nav className="navbar is-flex is-justify-content-space-around has-background-light p-4 m-4">
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
        </nav>
      ) : (
        <nav className="navbar is-flex is-justify-content-space-around has-background-light p-4 m-4">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/login">
          Login
        </Link>
        </nav>
      )}
    </div>
  );
}

export default HomeNavbar;

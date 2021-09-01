import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

function HomeNavbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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
          {Auth.loggedIn() ? (
              <div>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <div>
                <Link className="btn btn-lg btn-info m-2" to="/login">
                  Login
                </Link>
                </div>
                <div>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
                </div>
              </div>
            )}
        </li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;

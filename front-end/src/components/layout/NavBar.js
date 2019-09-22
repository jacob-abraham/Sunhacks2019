import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> The News.com
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;

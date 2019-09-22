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
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;

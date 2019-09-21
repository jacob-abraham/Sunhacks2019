import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function NavBar() {
  return (
    <React.Fragment>
      <nav class="navbar">
        <h1>
          <Link to="/">
            <i class="fas fa-code"></i> The News.com
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/articles">Articles</Link>
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

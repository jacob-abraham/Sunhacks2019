import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Typography from "@material-ui/core/Typography";
import LeftFooter from "./LeftFooterImages";
import RightFooter from "./RightFooterImages";

/** Footer, spans bottom of page across all pages on the site. **/
function Footer() {
  return (
    <React.Fragment>
      <nav className="footer">
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <LeftFooter />
          <Typography variant="h3" style={{ padding: 15 }}>
            The News.com
          </Typography>
          <RightFooter />
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Footer;

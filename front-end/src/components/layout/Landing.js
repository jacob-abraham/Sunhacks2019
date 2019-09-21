import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Landing() {
  return (
    <React.Fragment>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">The News.com</h1>
            <p class="lead">
              Discover news in a new way: an innovative way to find news using
              Machine Learning
            </p>
            <div class="buttons">
              <Link to="/register" class="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" class="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Landing;

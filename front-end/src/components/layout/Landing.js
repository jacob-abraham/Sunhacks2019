import React from "react";
import Button from "@material-ui/core/Button";
import LoginModal from "../auth/LoginModal";
import SignUpModal from "../auth/SignUpModal";
import "../../App.css";

function Landing() {
  const [loginOpen, setloginOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  const handleLoginClickOpen = event => {
    setloginOpen(true);
  };

  const handleLoginClose = event => {
    setloginOpen(false);
  };

  const handleSignUpClickOpen = event => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = event => {
    setSignUpOpen(false);
  };

  return (
    <React.Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">The News.com</h1>
            <p className="lead">
              Discover news in a new way: an innovative way to find news using
              Machine Learning
            </p>
            <div className="buttons">
              <Button
                variant="contained"
                color="default"
                onClick={e => handleSignUpClickOpen(e)}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={e => handleLoginClickOpen(e)}
              >
                Login
              </Button>
              <LoginModal open={loginOpen} onClose={() => handleLoginClose} />
              <SignUpModal
                open={signUpOpen}
                onClose={() => handleSignUpClose}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Landing;

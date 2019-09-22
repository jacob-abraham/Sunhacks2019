import React from "react";
import Button from "@material-ui/core/Button";
import LoginModal from "../auth/LoginModal";
import SignUpModal from "../auth/SignUpModal";
import "../../App.css";

/** Landing component, the first screen a user sees. Handles logic of modals as well**/
function Landing() {
  const [loginOpen, setloginOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  // Modal open/close logic. Need to break this up in the future
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

  //Return the main screen the user sees
  return (
    <React.Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">The News.com</h1>
            <p className="lead">
              Discover news in a new way: an innovative way to find and sort
              news using Python webscraping
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

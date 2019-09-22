import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/** Login Modal, modeled using MaterialUI**/
export default function LoginModal(props) {
  function redirect() {
    window.location = "http://thenooz.tech.s3-website.us-west-1.amazonaws.com/home";
  }
  function refresh() {
    window.location = "http://thenooz.tech.s3-website.us-west-1.amazonaws.com/";
  }

  //return a dialog box prompting the user to log in
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => refresh()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => redirect()} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

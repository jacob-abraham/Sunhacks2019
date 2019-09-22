import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/** SignUp Modal, modeled using MaterialUI**/
export default function SignUpModal(props) {
  function redirect() {
    window.location = "http://localhost:3000/home";
  }
  function refresh() {
    window.location = "http://localhost:3000/";
  }

  //return a sign up modal, prompting the user to create an account
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="First Name"
          type="name"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Last Name"
          type="name"
          fullWidth
        />
        <TextField
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
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
}

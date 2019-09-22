import React from "react";
import BiasMeter from "./BiasMeter";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function BiasContainer() {
  return (
    <div style={{ justifyItems: "center" }}>
      <Paper style={{ minHeight: "80px", padding: "3%" }}>
        <Typography variant="h5">Your Score: <font color="blue">6.8</font>
        </Typography>
        <BiasMeter />
      </Paper>
    </div>
  );
}

export default BiasContainer;

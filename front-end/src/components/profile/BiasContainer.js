import React from "react";
import BiasMeter from "./BiasMeter";
import Paper from "@material-ui/core/Paper";

function BiasContainer() {
  return (
    <div style={{ paddingBottom: "25", justifyItems: "center" }}>
      <Paper>
        <BiasMeter />
      </Paper>
    </div>
  );
}

export default BiasContainer;

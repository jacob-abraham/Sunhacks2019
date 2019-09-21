import React from "react";
import BiasContainer from "./BiasContainer";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../../App.css";

function InfoPanes() {
  return (
    <div style={{ width: "100%" }}>
      <BiasContainer />
      <div>
        <Paper>
          <Typography variant="h6">Bias explained</Typography>
          <p>
            Maecenas lacinia finibus fringilla. Praesent quis felis magna. Nam
            vulputate mi sit amet fringilla iaculis. Vestibulum in sagittis
            eros. Donec at dignissim dui. Aliquam fringilla dui sem, a feugiat
            leo dictum sit amet. Morbi eleifend velit quis nunc varius lacinia.
            Vestibulum laoreet sit amet sem vitae tempus.
          </p>
        </Paper>
      </div>
      <div>
        <Paper>
          <Typography variant="h6">More information</Typography>
          <p>
            Maecenas lacinia finibus fringilla. Praesent quis felis magna. Nam
            vulputate mi sit amet fringilla iaculis. Vestibulum in sagittis
            eros. Donec at dignissim dui. Aliquam fringilla dui sem, a feugiat
            leo dictum sit amet. Morbi eleifend velit quis nunc varius lacinia.
            Vestibulum laoreet sit amet sem vitae tempus.
          </p>
        </Paper>
      </div>
    </div>
  );
}
export default InfoPanes;

import React from "react";
import BiasContainer from "./BiasContainer";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../../App.css";

function InfoPanes() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ padding: "2%", background: "#F5F5DC" }}>
        <BiasContainer />
      </div>

      <div
        style={{ padding: "2%", textAlign: "center", background: "#F5F5DC" }}
      >
        <Paper>
          <Typography style={{ padding: "1%" }} variant="h5">
            Bias explained
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
            Maecenas lacinia finibus fringilla. Praesent quis felis magna. Nam
            vulputate mi sit amet fringilla iaculis. Vestibulum in sagittis
            eros. Donec at dignissim dui. Aliquam fringilla dui sem, a feugiat
            leo dictum sit amet. Morbi eleifend velit quis nunc varius lacinia.
            Vestibulum laoreet sit amet sem vitae tempus.
          </Typography>
        </Paper>
      </div>
      <div
        style={{ padding: "2%", textAlign: "center", background: "#F5F5DC" }}
      >
        <Paper>
          <Typography style={{ padding: "1%" }} variant="h5">
            More information
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
            Maecenas lacinia finibus fringilla. Praesent quis felis magna. Nam
            vulputate mi sit amet fringilla iaculis. Vestibulum in sagittis
            eros. Donec at dignissim dui. Aliquam fringilla dui sem, a feugiat
            leo dictum sit amet. Morbi eleifend velit quis nunc varius lacinia.
            Vestibulum laoreet sit amet sem vitae tempus.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
export default InfoPanes;

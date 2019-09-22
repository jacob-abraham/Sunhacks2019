import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import "../../App.css";
import imagePng from "../../img/biasBar.png"

function NavBar() {
  return (
    <React.Fragment>
      <img src={imagePng} alt="Bias Bar" width="300" height="65">
      </img>
    </React.Fragment>
  );
}
export default NavBar;

/*const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#FFFFFF", 0.5),
    width: "90%"
  },
  bar: {
    borderRadius: 20,
    background:
      "linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(255,255,255,1) 47%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 53%, rgba(255,0,0,1) 100%)"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function BiasMeter() {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          textAlign: "center",
          minHeight: "90%"
        }}
      >
        <Typography variant="h6">Liberal</Typography>
        <Typography variant="h6">&#9;Neutral</Typography>
        <Typography variant="h6">Conservative</Typography>
      </div>

      <div className={classes.root}>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          value={100}
        />
      </div>
    </div>
  );
}
*/

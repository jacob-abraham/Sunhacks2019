import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    minWidth: 300,
    margin: "5px",
    marginBottom: "20px"
  },
  media: {
    height: 80,
    background: "linear-gradient(to right bottom, #66ffcc, #ccff66 )"
  }
});

export default function NewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h1">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

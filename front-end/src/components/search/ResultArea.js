import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import DescriptionIcon from "@material-ui/icons/Description";

/** Represents each search result **/
export default function ResultArea(props) {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DescriptionIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.title} secondary={props.link} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}

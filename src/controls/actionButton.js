import React from "react";
import { Button } from "@material-ui/core";
import { styles } from "../styles/actionButtonStyle";

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = styles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}

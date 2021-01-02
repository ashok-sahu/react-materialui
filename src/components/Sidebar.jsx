import React from "react";
import { withStyles } from "@material-ui/core";
import { Styles } from "../styles/SidebarStyle";

const Sidebar = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}>sidebar</div>;
};

export default withStyles(Styles)(Sidebar);

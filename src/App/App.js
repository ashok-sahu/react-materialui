import React from "react";
import {
  CssBaseline,
  withStyles,
  ThemeProvider,
} from "@material-ui/core";
import { styles, theme } from "../styles/AppStyle";
import { Sidebar, Header, Employees } from "../components/index";

function App(props) {
  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <div className={classes.appMain}>
        <Header />
          <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);

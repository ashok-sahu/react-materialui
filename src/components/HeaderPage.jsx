import React from "react";
import { Paper, Card, Typography } from "@material-ui/core";
import { useStyles } from "../styles/HeaderPageStyle";

const HeaderPage = (props) => {
  const classes = useStyles();
  const { title, subtitle, icon } = props;

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default HeaderPage;

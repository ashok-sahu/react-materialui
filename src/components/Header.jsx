import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  InputBase,
  Badge,
} from "@material-ui/core";
import {
  NotificationsNone,
  ChatBubbleOutline,
  PowerSettingsNew,
  Search,
} from "@material-ui/icons";
import { useStyles } from "../styles/HeaderStyle";

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="search..."
              className={classes.searchItem}
              startAdornment={<Search fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

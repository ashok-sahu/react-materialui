import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";
import Controls from "../controls/controls";
import CloseIcon from "@material-ui/icons/Close";
import { styles } from "../styles/PopUpStyle";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = styles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

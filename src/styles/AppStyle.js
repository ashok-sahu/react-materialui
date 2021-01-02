import { createMuiTheme } from "@material-ui/core";
import { sidebarWidth } from "./DefaultStyles";

export const styles = {
  appMain: {
    paddingLeft: sidebarWidth,
    width: "100%",
  },
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3c44b126",
      main: "#ab47bc",
    },
    secondary: {
      light: "#f8324526",
      main: "#1de9b6",
    },
    background:{
        default:'#eeff41'
    },
    shape:{
        borderRadius:'12px'
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
  },
});

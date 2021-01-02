import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width:'80%',
      margin:theme.spacing(1)  
    },
  },
}));

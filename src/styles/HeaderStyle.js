import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: "#fff",
    transform:'translateZ(0)'
  },
  searchItem:{
      opacity:0.6,
      padding:`0px ${theme.spacing(1)}`,
      fontSize:'0.8rem',
      '&:hover':{
          backgroundColor:'#f2f2f2',
          borderRadius:'5px'
      },
      '& .MuiSvgIcon-root':{
          marginRight:theme.spacing(1)//8px
      }
  }
}));

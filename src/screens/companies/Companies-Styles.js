import makeStyles from "@mui/styles/makeStyles";
import { display, textTransform } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
  },
  propertyCard: {
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    height: "264px",
  },
  propertyImg: {
    display: "flex",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "20px",
    backgroundColor: theme.palette.background.lightGray,
    width: "141px",
    height: "141px",
    borderRadius: "50%",
    boxShadow: "none",
  },
  propImg: {
    display: "flex",
    margin: "auto",
    width: "60px",
    height: "60px",
  },
  uploadBtn: {
   
    "&.MuiButton-root": {
      color: "#071741",
      border: "1px solid #E4E8EE",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
      textTransform: "capitalize",
      padding: "6px",
      display:"flex",
      margin:"auto",
      
    },
     "&.MuiButton-root:hover": {
      opacity:"0.80"
    },
  },
}));

export { useStyles };

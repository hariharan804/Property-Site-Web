import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    margin: "12px 0px",
  },
 
  input: {
    font: "normal normal 600 16px/19px NunitoSans-SemiBold !important",
    border: "1px solid #E4E8EE",
    borderRadius: "10px",
    padding: "3px 10px",
    color: theme.palette.secondary.light+' !important',
  },

  label: {
    font: "normal normal 600 13px/16px NunitoSans-Regular !important",
    letterSpacing:"0.05rem",
    color: theme.palette.background.gray + " !important",
  },
}));

export { useStyles };

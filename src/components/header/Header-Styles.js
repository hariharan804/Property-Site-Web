import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
     position: "fixed",
    height: "54px",
    width:"100vw",
    backgroundColor: theme.palette.background.darkBg,
    padding: "10px 18px",
    boxSizing: "Border-Box",
    zIndex:"1000",
  },
  logImg: {
    width: "116px",
    height: "22px",
    paddingRight: "20px",
  },
  siteName: {
    display: "inline-block",
    color: theme.palette.background.white,
    paddingLeft: "20px",
    paddingTop: "5px",
    paddingBottom: "6 px",
    marginTop: "-10px",
    font: "normal normal 500 12px/14px NunitoSans-Regular !important",
    border: 0,
    borderLeft: "1px solid #E4E8EE",
  },
  userName: {
    font: "normal normal bold 12px/16px NunitoSans-SemiBold",
    margin: "0",
    color: theme.palette.background.white,
    padding: "0 10px",
  },
  role: {
    font: "normal normal bold 10px/16px NunitoSans-SemiBold",
    margin: "0",
    color: theme.palette.background.gray,
    padding: "0 10px",
  },
  dropDown: {
    margin: 0,
    marginLeft:"7px",
    color: theme.palette.background.white,
    fontSize: "12px",
    transform: "rotate(90deg)",
  },
}));

export { useStyles };

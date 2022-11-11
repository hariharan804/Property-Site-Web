import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    // height: "100vh",
    display: "flex",
  },
  sidebar: {
    width: "68px",
    height: "91.5vh",
    backgroundColor: theme.palette.background.sidebarBg,
  },
  mainContent: {
    // padding: "8px",
    width: "100%",
    height: "100%",
    marginTop:"56px"
  },
}));

export { useStyles };

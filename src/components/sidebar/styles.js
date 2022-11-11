import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.sidebarBg,
    "& .MuiPaper-root": {
      marginTop: "53px !important",
      backgroundColor: theme.palette.background.sidebarBg,
      color: theme.palette.background.sidebarText,
      border: 0,
    },
    title: {
      color: theme.palette.background.white + " !important",
      font: "normal normal bold 12px/16px Nunito Sans !important",
      display: "block !important",
      margin: "0 !important",
      textAlign: "left",
    },
    drawerBtn: {
      //     backgroundColor: "#fff",
      //     "&:hover ": {
      //         color: '#000',
      //     },
      //   "& .MuiButtonBase-root:hover": {
      //     backgroundColor: "#fff",
      //   },
      //   "& .MuiSvgIcon-root": {
      //     backgroundColor: "#fff",
      //   },
    },
  },
}));

export { useStyles };

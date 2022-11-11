import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
  },
  propertyCard: {
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    minHeight: "264px",
  },
  cards: {
    margin: "18px 0",
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    minHeight: "264px",
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
    // width: "60px",
    // height: "60px",
    width: "141px",
    height: "141px",
    objectFit: "cover",
  },
  uploadBtn: {
    "&.MuiButton-root": {
      color: "#071741",
      border: "1px solid #E4E8EE",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
      textTransform: "capitalize",
      padding: "6px",
      display: "flex",
      margin: "auto",
    },
    "&.MuiButton-root:hover": {
      opacity: "0.80",
    },
  },
  box: {
    borderRadius: "12px",
    border: "1px solid #E4E8EE",
    // padding:"2px 8px",
    // padding:"12px",
    "& div": {
      border: "0 !important",
      margin: "0",
      // padding: "4px 8px",
    },
    "& .ql-header": {
      display: "none",
    },
    "& textarea": {
      border: "0 !important",
      outline: "0 !important",
      padding: "7px 0px",
      font: "normal normal 600 14px/19px NunitoSans-Bold !important",
      "&:hover": {
        border: "0 !important",
      },
    },
    "& .quill": {
      display: "flex",
      flexDirection: "column-reverse",
    },
    "& .ql-toolbar": {
      borderTop: "1px solid #E4E8EE !important",
    },
    "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
      font: "normal normal 500 16px/19px NunitoSans-Regular !important",
    },
  },
  label: {
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    marginBottom: "7px",
    marginTop: "8px",
  },
  toggleBtn: {
    "& .MuiToggleButton-root": {
      backgroundColor: theme.palette.background.white,
      borderRadius: "10px !important",
      border: "1px solid " + theme.palette.background.lightGray + "! important",
      padding: "7px 16px",
      margin: "0 10px",
      textTransform: "capitalize",
      color: theme.palette.primary.dark,
      font: "normal normal bold 14px/19px NunitoSans-Bold",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      border: "1px solid " + theme.palette.primary.light + "! important",
      background: theme.palette.primary.light,
      color: theme.palette.background.white,
    },
    "& .Mui-selected.MuiToggleButton-root:hover": {
      background: theme.palette.primary.light + "! important",
      opacity: "0.80",
      color: theme.palette.background.white,
      border: "1px solid " + theme.palette.primary.light + "! important",
    },
    "& .MuiToggleButton-root:hover": {
      backgroundColor: theme.palette.background.gray + " !important",
      opacity: "0.90",
      color: theme.palette.background.white,
      border: "1px solid " + theme.palette.background.gray + "! important",
    },
  },
  toggleCheck: {
    "& .MuiToggleButton-root": {
      backgroundColor: theme.palette.background.white,
      borderRadius: "50% !important",
      border: "2px solid " + theme.palette.background.lightGray + "! important",
      padding: "2px",
      marginTop: "7px",
      textTransform: "capitalize",
      color: theme.palette.primary.dark,
      font: "normal normal bold 10px/19px NunitoSans-Bold",
    },
    "& .Mui-selected.MuiToggleButton-root:hover": {
      background: theme.palette.primary.light + "! important",
      opacity: "0.80",
      color: theme.palette.background.white,
      border: "2px solid " + theme.palette.primary.light + "! important",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      border: "2px solid " + theme.palette.primary.light + "! important",
      background: theme.palette.primary.light,
      color: theme.palette.background.white,
    },
    "& .MuiToggleButton-root:hover": {
      backgroundColor: theme.palette.background.gray + " !important",
      opacity: "0.90",
      color: theme.palette.background.white,
      border: "2px solid " + theme.palette.background.gray + "! important",
    },
  },
  contactCard: {
    margin: "18px 0",
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
  },
  endCard: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  saveBtn: {
    "& .MuiButton-root": {
      backgroundColor: theme.palette.primary.light,
      borderRadius: "8px",
      padding: "8px 0",
      margin: "0 10px",
    },
    "& .MuiButton-outlined": {
      backgroundColor: theme.palette.background.white,
      textTransform: "capitalize",
      font: "normal normal bold 14px/19px NunitoSans-Bold",
    },
    "& .MuiButton-root:hover": {
      // backgroundColor:"inherit",
      opacity: "0.90",
    },
    "& .MuiButton-text": {
      color: theme.palette.background.white,
    },
    "& .MuiButton-contained": {
      color: theme.palette.background.white,
      font: "normal normal bold 14px/19px NunitoSans-Bold",
      textTransform: "capitalize",
    },
  },
  innnerSelect: {
    "& .MuiSelect-select": {
      // border: "none",
      // borderRight: "1px solid #E4E8EE",
      borderRadius: "10px",
      padding: "8px 6px !important",
      color: theme.palette.secondary.light + " !important",
    },
  },
  postionRelative: {
    position: "relative",
  },
  uploadHidden: {
    position: "absolute",
    top: "-8px",
    left: "-5px",
    padding: "1px",
    width: "110%",
    height: "200%",
    opacity: "0",
  },
}));

export { useStyles };

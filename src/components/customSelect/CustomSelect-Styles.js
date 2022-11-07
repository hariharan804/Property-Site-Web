import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    margin: "12px 0px",
  },

  select: {
    "& .MuiSelect-select": {
      font: "normal normal 600 14px/19px NunitoSans-SemiBold !important",
      border: "1px solid #E4E8EE",
      borderRadius: "10px",
      padding: "8px 6px !important",
      color: theme.palette.secondary.light + " !important",
    },

    "& .Mui-focused": { color: theme.palette.secondary.dark + " !important" },
    "& .Mui-focused.MuiInput-root": { border: "1px solid #5078E1" },
  },

  label: {
    font: "normal normal 600 13px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    marginBottom: "5px",
  },
}));

export { useStyles };

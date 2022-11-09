import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    margin: "8px 0px",
  },

  select: {
    "& .MuiSelect-select": {
      font: "normal normal 600 14px/19px NunitoSans-Bold !important",
      border: "1px solid #E4E8EE",
      borderRadius: "10px",
      padding: "8px 6px !important",
      color: theme.palette.secondary.light + " !important",
    },
    "& .Mui-focused": { color:   "#3f5 !important" },
    "& .Mui-focused.MuiInput-root": { border: "1px solid #5078E1 !important" },
  },

  label: {
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    marginBottom: "5px",
  },
}));

export { useStyles };

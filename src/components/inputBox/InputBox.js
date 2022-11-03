import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useStyles } from "./InputBox-Styles";

export const InputBox = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const {type,label, placeholder, endAdornment } = props;

  const inputOnFocused = {
    "& .Mui-focused": {
        color: theme.palette.secondary.dark+' !important',
    },
    "& .Mui-focused.MuiInput-root": {
        border: '1px solid #5078E1',
    },
   
}
  return (
    <div className={classes.inputBlock}>
      <TextField
        sx={inputOnFocused}
        label={label}
        type={type}
        fullWidth={true}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
          className: classes.label,
        }}
        InputProps={{
          disableUnderline: true,
          className: classes.input,
          endAdornment:<InputAdornment position="end">{endAdornment}</InputAdornment>
        }}
        variant="standard"
      />
    </div>
  );
};

export default InputBox;

import { TextareaAutosize } from "@material-ui/core";
import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useStyles } from "./InputBox-Styles";

export const InputBox = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const {
    type,
    label,
    placeholder,
    defaultValue,
    disabled,
    endAdornment,
    startAdornment,
    row,
    onChangeFun
  } = props;

  const inputOnFocused = {
    "& .Mui-focused": {
      color: theme.palette.secondary.dark + " !important",
    },
    "& .Mui-focused.MuiInput-root": {
      border: "1px solid #5078E1",
    },
  };
  return (
    <div className={classes.inputBlock}>
      {type !== "textArea" ? (
        <TextField
          sx={(inputOnFocused, disabled && { opacity: 0.9 , "& div":{ background:theme.palette.background.lightGray}})}
          label={label}
          type={type}
          fullWidth={true}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChangeFun}
          InputLabelProps={{
            shrink: true,
            className: classes.label,
          }}
          InputProps={{
            readOnly: disabled,
            disableUnderline: true,
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          }}
          variant="standard"
        />
      ) : (
        <TextareaAutosize
          className={classes.input}
          sx={inputOnFocused}
          minRows={row}
          aria-label="maximum height"
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={{ minWidth: "100%", maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default InputBox;

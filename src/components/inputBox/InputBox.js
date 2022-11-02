import { TextField } from "@mui/material";
import { useStyles } from "./InputBox-Styles";

export const InputBox = (props) => {
    const classes = useStyles(props);
  
    return (
      <>
      <TextField
          id="filled-number"
          label="Number"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </>)
}

export default InputBox;
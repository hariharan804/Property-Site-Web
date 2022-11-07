import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { useState } from "react";
import { useStyles } from "./CustomSelect-Styles";

export const CustomSelect = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const { type, label, placeholder, endAdornment, startAdornment } = props;
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.inputBlock}>
      <InputLabel
        className={classes.label}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        Agedd
      </InputLabel>
      <FormControl fullWidth>
        <Select className={classes.select} value={age} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;

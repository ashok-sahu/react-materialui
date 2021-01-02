import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  FormLabel,
  Radio,
} from "@material-ui/core";

const RadioGroup = (props) => {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
            key={item.id}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
export default RadioGroup;

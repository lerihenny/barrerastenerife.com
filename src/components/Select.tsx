import React from "react";
import { InputLabel, MenuItem, TextField } from "@material-ui/core";

interface Props {
  label: string;
  items: string[];
  value: number;
}

const Select: React.FC<Props> = ({ label, items, value }) => {
  const labelToId = () => {
    return label.toLowerCase().replace(" ", "-");
  };

  return (
    <>
      <InputLabel shrink htmlFor={labelToId()} classes={{ root: "mb-3 mt-3" }}>
        {label}
      </InputLabel>
      <TextField
        fullWidth
        select
        id={labelToId()}
        size="small"
        variant="filled"
        value={value}
      >
        {items.map((item: string, index: number) => (
          <MenuItem key={`${labelToId()}-${index}`} value={index}>
            {index === 0 ? <em>{item}</em> : item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default Select;

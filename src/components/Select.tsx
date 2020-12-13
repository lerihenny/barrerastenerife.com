import React from "react";
import { InputLabel, MenuItem, TextField } from "@material-ui/core";

interface Props {
  label: string;
  items: string[];
  value: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Select: React.FC<Props> = ({
  label,
  items,
  value,
  onChange = () => {},
}) => {
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
        name={labelToId()}
        size="small"
        variant="filled"
        value={value}
        onChange={onChange}
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

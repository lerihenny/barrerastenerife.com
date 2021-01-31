import React from "react";
import { InputLabel, TextField } from "@material-ui/core";

type Props = {
  id: string;
  label: string;
  disabled: boolean;
  onChange: (event: any) => void;
  value: string;
};

const Field = ({ id, label, disabled, onChange, value }: Props) => (
  <>
    <InputLabel shrink htmlFor={id} classes={{ root: "mb-3 mt-3" }}>
      {label}
    </InputLabel>
    <TextField
      fullWidth
      disabled={disabled}
      id={id}
      size="small"
      variant="filled"
      onChange={onChange}
      value={value}
    />
  </>
);

export default Field;

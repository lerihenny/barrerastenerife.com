import React from "react";
import { InputLabel, TextField } from "@material-ui/core";

type Props = {
  id: string;
  label: string;
};

const Field = ({ id, label }: Props) => (
  <>
    <InputLabel shrink htmlFor={id} classes={{ root: "mb-3 mt-3" }}>
      {label}
    </InputLabel>
    <TextField fullWidth id={id} size="small" variant="filled" />
  </>
);

export default Field;

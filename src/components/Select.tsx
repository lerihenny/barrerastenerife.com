import React from "react";
import { InputLabel, MenuItem, TextField } from "@material-ui/core";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface Props {
  tKey?: string;
  label: string;
  items: any;
  value: number;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const Select: React.FC<Props> = ({
  tKey,
  label,
  items,
  value,
  disabled = false,
  onChange = () => {},
}) => {
  const { t } = useTranslation();
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
        disabled={disabled}
        id={labelToId()}
        name={labelToId()}
        size="small"
        variant="filled"
        value={value}
        onChange={onChange}
      >
        {items.map((item: any, index: number) => (
          <MenuItem key={`${labelToId()}-${index}`} value={index}>
            {t(`constants.${tKey}.${item.name}`)}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default Select;

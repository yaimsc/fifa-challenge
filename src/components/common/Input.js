import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, error, handleChange, value, name, defaultValue }) => {
  return (
    <>
      <TextField
        onChange={handleChange}
        defaultValue={defaultValue}
        label={label}
        name={name}
        value={value}
        error={error}
        data-testid="input"
      />
    </>
  );
};

export default Input;

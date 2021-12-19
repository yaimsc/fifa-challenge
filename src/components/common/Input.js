import React from 'react';
import { TextField } from '@mui/material';

const Input = ({label, error, handleChange, value, name}) => {
  return(
    <>
      <TextField
        onChange={handleChange}
        label={label}
        name={name}
        value={value}
        error={error}
      />
    </>
  )
}

export default Input;
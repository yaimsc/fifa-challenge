import React from 'react';
import { FormControl, InputLabel } from '@mui/material';

const LabelSelect = ({ label, content }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel>{label}</InputLabel>
      {content}
    </FormControl>
  )
}

export default LabelSelect;
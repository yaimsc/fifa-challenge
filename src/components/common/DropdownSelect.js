import React, { useState } from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';

const DropdownSelect = ({label, list}) => {

    const [selected, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    }

    return (
    <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
        id="select"
        value={selected}
        onChange={handleChange}
        label={label}
        ></Select>
        {list}
    </FormControl>
    )
}

export default DropdownSelect;




import React from 'react';
import { Button } from '@mui/material';

const BasicButton = ({title, type}) => {
    return (
        <Button className="button" variant="contained" type={type}>{title}</Button>
    )
}

export default BasicButton;
import React from 'react';
import { Button } from '@mui/material';

const BasicButton = ({title, type, onClick}) => {
    return (
        <Button
            className="button"
            variant="contained"
            type={type}
            onClick={onClick}
        >
        {title}
        </Button>
    )
}

export default BasicButton;
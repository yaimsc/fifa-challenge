import React from 'react';
import { FormHelperText } from '@mui/material';


const Error = ({error}) => {
    return (
        <FormHelperText>{error}</FormHelperText>
    )
}

export default Error;
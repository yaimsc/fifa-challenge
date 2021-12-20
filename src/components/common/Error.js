import React from 'react';
import { FormHelperText } from '@mui/material';


const Error = ({error}) => {
    return (
        <FormHelperText error id="component-error-text" data-testid="error-text">{error}</FormHelperText>
    )
}

export default Error;
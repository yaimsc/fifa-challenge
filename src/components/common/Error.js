import React from 'react';
import { FormHelperText } from '@mui/material';


const Error = ({errorLabel}) => {
    return (
        <FormHelperText id="component-error-text">{errorLabel}</FormHelperText>
    )
}

export default Error;
import React from 'react';
import { Label } from '@mui/material';

const YourTeam = () => {
    return(
        <>
            <p>Your selected team</p>
            <div>
                <Label>Team Name</Label>
                <p>{localStorage.getItem('teamName')}</p>
            </div>
            <div>
                <Label>Coach Name</Label>
                <p>{localStorage.getItem('coachName')}</p>
            </div>
        </>
    )
}

export default YourTeam;


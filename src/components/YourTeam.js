import React from 'react';
import { Label, Chip } from '@mui/material';

const YourTeam = () => {
    return(
        <>
            <h2>Your selected team</h2>
            <div>
                <h3>Team Name</h3>
                <p>{localStorage.getItem('teamName')}</p>
            </div>
            <div>
                <h3>Coach</h3>
                <p>{localStorage.getItem('coachName')}</p>
            </div>
            <div>
                <h3>Players</h3>
                <p>Defenders</p>
                {}
            </div>
        </>
    )
}

export default YourTeam;


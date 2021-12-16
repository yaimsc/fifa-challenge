import React from 'react';
import { Card, Fab } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Player = ({ name, position, selected, handleClick, index }) => {
    let cardClassName = 'card';
    let fabClassName = 'fab';
    if(selected){
        console.log(selected)
        cardClassName += ' card-selected';
        fabClassName += ' fab-selected';
    }

    return(
        <Card className={cardClassName} onClick={() => handleClick(index)}>
            <p className>{name}</p>
            <p className='position'>{position}</p>
            <Fab size="small" aria-label="selected" className={fabClassName} sx={{backgroundColor: '#0fc0fc', color: 'white'}}>
                <CheckIcon />
            </Fab>
        </Card>
    )
}

export default Player;
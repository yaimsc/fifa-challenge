import React, { useState, useEffect } from 'react';
import useForceUpdate from 'use-force-update';
import { Stack, Chip } from '@mui/material';

const YourTeam = () => {

    const [yourTeam, setYourTeam] = useState(JSON.parse(localStorage.getItem('yourTeam')));

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        setYourTeam(JSON.parse(localStorage.getItem('yourTeam')))
    }, [JSON.parse(localStorage.getItem('yourTeam'))]);

    // const filtering = (team, position) => {
    //     team.filter(player => player.position === position).map((filteredPlayer, key) => (
    //         console.log(filteredPlayer),
    //         <Chip key={key} label={filteredPlayer.name} onDelete={handleDelete}/>
    //     ))
    // }

    const handleDelete = (playerToDelete) => {

    }

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
                <p>Defender</p>
                <Stack direction="column">
                {console.log(yourTeam)}
                {yourTeam === null ? '' : yourTeam.map((player,key) => (
                    player.position === 'Defender' ?
                    <Chip key={key} label={player.name} onDelete={handleDelete}/> : 'You have no attacker'
                ))}
                </Stack>

                <p>Attacker</p>
                <Stack direction="column">
                {console.log(yourTeam)}
                {yourTeam === null ? '' : yourTeam.map((player,key) => (
                    player.position === 'Attacker' ?
                    <Chip key={key} label={player.name} onDelete={handleDelete}/> : 'You have no attacker'
                ))}
                </Stack>

                <p>Midfielder</p>
                <Stack direction="column">
                {console.log(yourTeam)}
                {yourTeam === null ? '' : yourTeam.map((player,key) => (
                    player.position === 'Midfielder' ?
                    <Chip key={key} label={player.name} onDelete={handleDelete}/> : 'You have no midfielder'
                ))}
                </Stack>

                <p>Goalkeeper</p>
                <Stack direction="column">
                {console.log(yourTeam)}
                {yourTeam === null ? '' : yourTeam.map((player,key) => (
                    player.position === 'Goalkeeper' ?
                    <Chip key={key} label={player.name} onDelete={handleDelete}/> : 'You have no goalkeeper'
                ))}
                </Stack>
            </div>
        </>
    )
}

export default YourTeam;


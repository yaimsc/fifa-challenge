import React from 'react';
import { Stack, Chip } from '@mui/material';

const FinalTeam = () => {

  const finalPlayers = JSON.parse(localStorage.getItem('finalTeam'))

  const defenders = finalPlayers.filter(player => player.position === 'Defenders');
  const midfielders = finalPlayers.filter(player => player.position === 'Midfielders');
  const attackers = finalPlayers.filter(player => player.position === 'Attacker');
  const goalkeepers = finalPlayers.filter(player => player.position === 'Attacker');

    const showPlayers = (players) => {
      players.map(player => (
          <Stack direction={'row'} spacing={1}>
            <Chip label={player.name} variant={'outlined'}/>
          </Stack>
      ))
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
        <p>Defenders</p>
        {showPlayers(defenders)}
        <p>Midfielders</p>
        {showPlayers(midfielders)}
        <p>Attackers</p>
        {showPlayers(attackers)}
        <p>Goalkeepers</p>
        {showPlayers(goalkeepers)}
      </div>
    </>
  )
}

export default FinalTeam;


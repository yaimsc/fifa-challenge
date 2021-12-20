import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, BasicButton } from './../components/common';
import { Stack, Chip } from '@mui/material';


const FinalTeam = () => {
  const navigate = useNavigate();

  const finalPlayers = JSON.parse(localStorage.getItem('yourTeam'))

  const defenders = finalPlayers.filter(player => player.position === 'Defenders');
  const midfielders = finalPlayers.filter(player => player.position === 'Midfielders');
  const attackers = finalPlayers.filter(player => player.position === 'Attacker');
  const goalkeepers = finalPlayers.filter(player => player.position === 'Goalkeeper');

  const clearBack = () => {
    localStorage.clear()
    navigate(-1)
  }

  return(
    <>
      <Header />
      <div class="create" data-testid="final-team">
        <h2 class="title">Your selected team</h2>
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
          {defenders.map((defender, key) => (
            <Stack direction={'row'} spacing={1}>
              <Chip key={key} label={defender.name} variant={'outlined'}/>
            </Stack>
          ))}
          <p>Midfielders</p>
          {midfielders.map((midfielder, key) => (
            <Stack direction={'row'} spacing={1}>
              <Chip key={key} label={midfielder.name} variant={'outlined'}/>
            </Stack>
          ))}
          <p>Attackers</p>
          {attackers.map((attacker, key) => (
            <Stack direction={'row'} spacing={1}>
              <Chip key={key} label={attacker.name} variant={'outlined'}/>
            </Stack>
          ))}
          <p>Goalkeepers</p>
          {goalkeepers.map((goalkeeper, key) => (
            <Stack direction={'row'} spacing={1}>
              <Chip key={key} label={goalkeeper.name} variant={'outlined'}/>
            </Stack>
          ))}
        </div>
        <BasicButton
          onClick={() => clearBack()}
          title="Go back & Start a new team"
        />
      </div>
    </>
  )
}

export default FinalTeam;


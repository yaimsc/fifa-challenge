import React, {useEffect, useState } from "react";
import { Stack, Chip, MenuItem, Select, OutlinedInput } from "@mui/material";
import { BasicButton, LabelSelect } from './common';

const SelectPlayers = () => {

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
  PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
  },
  };

  const selectedTeam = localStorage.getItem("selectedTeam");
  console.log("selectedteam")
  console.log(selectedTeam);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [ownTeam, setOwnTeam] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      return selectedTeam !== "" ?
      fetch(`https://api.football-data.org/v2/teams/${selectedTeam}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': '842eabacaca542ec9ed31f058efc2115'
        }
      },100)
      .then(response => response.json())
      .then(data => setPlayers(data.squad))
      .catch(error => console.error(error)) :
      "Loading Data ..."
    }, 300)
  }, [selectedTeam])

  useEffect(() => {
  }, [ownTeam])

  const handleChange = (event) => {
    setPlayer(event.target.value);
  }

  const checkIfExists = (player) => {
    return ownTeam.some(item => player.id === item.id);
  }

  const addPlayer = () => {
    if(checkIfExists(player)){
      return alert('You have that player already selected')
    }else{
      setOwnTeam(ownTeam => [...ownTeam, player])
      localStorage.setItem('yourTeam', JSON.stringify(ownTeam))
      console.log(ownTeam)
      return ownTeam
    }
  }

  const handlePlayerDelete = (playerToDelete) => {
      setOwnTeam((team) => team.filter((player) => player !== playerToDelete))
  }

  const showSelectedPlayers = (ownTeam) => {
    return (
      <Stack direction="row">
        {ownTeam.length < 1 ? '' : ownTeam.map((player,key) => (
          <Chip
            key={key}
            label={`${player.name} - ${player.position}`}
            onDelete={() => handlePlayerDelete(player)}
          />
        ))}
      </Stack>
    )
  }

  return(
    <>
      <div className="player-select">
      <LabelSelect
        label="Select Player"
        content={
            <Select
            value={player === '' ? '' : player}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            >
            {players.map((player, key) => (
                <MenuItem
                key={key}
                value={player}
                >
                {player.name} - {player.position}
                </MenuItem>
            ))}
            </Select>
        }
      />
      <BasicButton
        type="submit"
        title="Add"
        onClick={addPlayer}
      />
      </div>
      <div>
        {showSelectedPlayers(ownTeam)}
      </div>
  </>
  )
}

export default SelectPlayers;
import React, { useEffect, useState } from "react";
import { Select, MenuItem, Stack, Chip, OutlinedInput } from "@mui/material";
import { BasicButton, LabelSelect } from "./common";

const SelectTeamPlayers = () => {
  const [teams, setTeams] = useState([]);
  const [selected, setSelect] = useState("");

  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [ownTeam, setOwnTeam] = useState([]);

  useEffect(() => {
    fetch("https://api.football-data.org/v2/competitions/WC/teams", {
      method: "GET",
      headers: {
        "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTeams(data.teams))
      .catch((error) => console.error(error));
  }, []);

  const handleTeamChange = (event) => {
    setSelect(event.target.value);
    localStorage.setItem("teams", JSON.stringify(teams));
  };

  useEffect(() => {
    if (selected) {
      fetch(`https://api.football-data.org/v2/teams/${selected}`, {
        method: "GET",
        headers: {
          "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setPlayers(data.squad))
        .catch((error) => console.error(error));
    }
  }, [selected]);

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  const checkIfExists = (player) => {
    return ownTeam.some((item) => player.id === item.id);
  };

  /*
  * Add player function sets pleyer selection with 1 of delay
  * haven't found a fix soon enough and had to move on to the next task
  */

  const addPlayer = () => {
    if (checkIfExists(player)) {
      return alert("You have that player already selected");
    } else {
      setOwnTeam((ownTeam) => [...ownTeam, player])
      localStorage.setItem("yourTeam", JSON.stringify(ownTeam));
      console.log(ownTeam);
      return ownTeam;
    }
  };

  const handlePlayerDelete = (playerToDelete) => {
    setOwnTeam((team) => team.filter((player) => player !== playerToDelete));
  };

  const showSelectedPlayers = (ownTeam) => {
    localStorage.setItem("yourTeam", JSON.stringify(ownTeam));
    return (
      <div>
        <p>Total: {ownTeam.length}</p>
        <Stack
          direction="column"
          spacing={1}
          className="player-chips"
          sx={{ marginBottom: 2 }}
        >
          {ownTeam.length < 1
            ? ""
            : ownTeam.map((player, key) => (
                <Chip
                  className="chip"
                  key={key}
                  label={`${player.name} - ${player.position} - ${player.nationality}`}
                  onDelete={() => handlePlayerDelete(player)}
                />
              ))}
        </Stack>
      </div>
    );
  };

  return (
    <>
      <h3>Your team is your strengh, select your favorite players</h3>
      <div className="div-select" data-testid="selects">
        <LabelSelect
          label={"Select team"}
          content={
            <Select
              id="select"
              value={selected === "" ? "" : selected}
              onChange={handleTeamChange}
              label={"Select team"}
            >
              {teams.map((value, key) => (
                <MenuItem key={key} value={value.id} sx={{ zInxdex: 1251 }}>
                  {value.name}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </div>
      <div className="player-select">
        <LabelSelect
          label="Select Player"
          content={
            <Select
              value={player === "" ? "" : player}
              onChange={handlePlayerChange}
              input={<OutlinedInput label="Name" />}
            >
              {players.map((player, key) => (
                <MenuItem key={key} value={player} sx={{ zIndex: 1251 }}>
                  {player.name} - {player.position}
                </MenuItem>
              ))}
            </Select>
          }
        />
        <BasicButton
          sx={{ fontWeight: "bold" }}
          className="add-button"
          title="Add"
          onClick={addPlayer}
        />
      </div>
      <div>{showSelectedPlayers(ownTeam)}</div>
    </>
  );
};

export default SelectTeamPlayers;

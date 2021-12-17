import React, {useEffect, useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, OutlinedInput } from "@mui/material";
import { Player } from './common';

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
    const [selected, setSelected] = useState(false);
    // const [selectedArray, setSelectedArray] = useState([]);
    const error = "";
    // const [defenders, setDefenders] = useState([]);
    // const [midfielders, setMidfielders] = useState([]);
    // const [attackers, setAttackers] = useState([]);
    // const [goalkeepers, setGoalkeepers] = useState([]);
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
            .catch(error => console.error(error))
            : "Loading Data ..."
        }, 300)
        }, [selectedTeam])


    // const handleClick = (i) => {
    //     const tempArray =[...selectedArray]
    //     if(tempArray[i]===i){tempArray[i]=undefined}
    //     else {tempArray[i]=i}
    //     console.log(tempArray)
    //     setSelectedArray(tempArray)
    //         // setOwnTeam({index: i, id: players[i].id, name: players[i].name, position: players[i].position})

    //     // setOwnTeam(selectedArray)
    //     }

    const handleChange = (event, player) => {
        
        // console.log(event.target);
        // const {
        //     target: { value },
        //   } = event;

          setPlayer(
            // On autofill we get a the stringified value.
            // typeof value === 'string' ? value.split(',') : value,
            event.target.value
          );
        // ownTeam[i].selected = !ownTeam[i].selected;
        if(event.target.value.id === ownTeam.forEach( player => player.id)){
            return ''
        }else{
            setOwnTeam(ownTeam.push(event.target.value))
            setPlayer('')
        }
        console.log(ownTeam)
        //setOwnTeam([...ownTeam,{index: i, id: players[i].id, name: players[i].name, position: players[i].position}])
    }


    //  const handleClick = (i) => {
    //     const tempArray =[...selectedArray]
    //     console.log(i)
    //     console.log(tempArray[i])
    //     if(tempArray[i] !== [] && tempArray[i]===i){tempArray[i]=undefined}
    //     else {tempArray[i]=i}
    //     console.log(tempArray)
    //     setSelectedArray(tempArray)
    // }

    // const handleClick = (i) => {
    //     const ownArray = [...selectedArray]
    //     setSelectedArray(players.map((player,key) => {
    //         if(key !== i) return key;
    //             return {...key, name: player.name, position: player.position}}
    //     ))
    // }

    return(
        <>
        {/* {players.map((player, key) => (
            console.log(ownTeam[key]), */}
            {/* <Player
                key={key}
                index={key}
                name={player.name}
                position={player.position}
                nationality={player.nationality}
                selected={selected}
                handleClick={handleClick}
            {/* /> */}
            <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Players</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={player.name}
                onChange={(event) => handleChange(event,player)}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                >
                {players.map((player, key) => (
                    <MenuItem
                    key={key}
                    value={player}
                    // style={getStyles(name, personName, theme)}
                    >
                    {player.name} - {player.position}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>
        {/* } */}
        </>
    )
}

export default SelectPlayers;
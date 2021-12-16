import React, {useEffect, useState } from "react";
// import { debounce } from "lodash";
import { Player } from './common';

const SelectPlayers = () => {
    const selectedTeam = localStorage.getItem("selectedTeam");
    console.log("selectedteam")
    console.log(selectedTeam);
    const [players, setPlayers] = useState([]);
    const [selectedArray, setSelectedArray] = useState([]);
    const error = "";
    const [defenders, setDefenders] = useState([]);
    const [midfielders, setMidfielders] = useState([]);
    const [attackers, setAttackers] = useState([]);
    const [goalkeepers, setGoalkeepers] = useState([]);
    const [ownTeam, setOwnTeam] = useState([...defenders, ...midfielders, ...attackers, ...goalkeepers]);

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


    const handleClick = (i) => {
        const tempArray =[...selectedArray]
        if(tempArray[i]===i){tempArray[i]=undefined}
        else {tempArray[i]=i}
        console.log(tempArray)
        setSelectedArray(tempArray)
    }

    return(
        <>
        {players.map((player, key) => (
            <Player
                key={key}
                index={key}
                name={player.name}
                position={player.position}
                nationality={player.nationality}
                selected={selectedArray[key] === key ? true : false}
                handleClick={handleClick}
            />
            ))
        }
        </>
    )
}

export default SelectPlayers;
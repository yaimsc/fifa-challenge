import React, { useEffect, useState } from 'react';

const SelectPlayers = () => {
    const selectedTeam = window.sessionStorage.getItem("selectedTeam");
    const [players, getPlayers] = useState([]);
    useEffect(() => {
        fetch(`https://api.football-data.org/v2/teams/${selectedTeam}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-Auth-Token': '842eabacaca542ec9ed31f058efc2115'
            }
        })
        .then(response => response.json())
        .then(data => getPlayers(data))
        .catch(error => console.error(error))
    })

    return(
        <>
        {players}
        </>
    )
}

export default SelectPlayers;
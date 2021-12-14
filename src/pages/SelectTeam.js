import React, { useEffect, useState } from 'react';
import { getListItemUtilityClass, MenuItem } from '@mui/material';
import { DropdownSelect } from '../components/common';

const SelectTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/2021/teams', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-Auth-Token': '842eabacaca542ec9ed31f058efc2115'
            }
            })
            .then(response => response.json())
            .then(data => setTeams(data.teams))
            .catch(error => error)
        })
    console.log(teams);

    return(
        // <DropdownSelect
        //     label="Select Team"
        //     list={teams}
        // >
        <>
        {teams.map((value, key) => (
                console.log(key),
                <MenuItem key={key} value={value.id}>
                {value.name}
                </MenuItem>
            ))
        }
        </>
        // </DropdownSelect>
    )
}


export default SelectTeam;
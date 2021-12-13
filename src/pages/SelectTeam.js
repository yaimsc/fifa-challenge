import React, { useEffect, useState } from 'react';
import { MenuItem } from '@mui/material';
import { DropdownSelect } from '../components/common';

const SelectTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/2021/teams', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '842eabacaca542ec9ed31f058efc2115'
            }
            })
            .then(response => console.log(response.json()))
            .then(function(data){
                console.log(data)
                // setTeams(data)
            })
            .catch(error => error)
        })
    console.log(teams)
    return(
        <DropdownSelect
            label="Select Team"
            list={teams}
        >
        {teams.map((data, index) => (
            <MenuItem key={index} value={data.id}>
                {data.name}
            </MenuItem>
            ))}
        </DropdownSelect>
    )
}


export default SelectTeam;
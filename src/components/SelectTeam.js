import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectTeam = () => {
    const [teams, setTeams] = useState([]);
    const [selected, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    }

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
            .catch(error => console.error(error))
            window.sessionStorage.setItem("selectedTeam", selected)
        })
    console.log(teams);

    return(
        // {/* <> */}
        <FormControl>
            <InputLabel>{"Select Team"}</InputLabel>
            <Select
            id="select"
            value={selected}
            onChange={handleChange}
            label={"Select team"}
            >
            {teams.map((value, key) => (
                    console.log(key),
                    <MenuItem key={key} value={value.id}>
                    {value.name}
                    </MenuItem>
                ))
            }
            </Select>
        </FormControl>
        // {/* </> */}
    )
}


export default SelectTeam;
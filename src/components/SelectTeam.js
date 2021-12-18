import React, { useEffect, useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import SelectPlayers from './SelectPlayers';
import { LabelSelect } from './common';

const SelectTeam = () => {
    const [teams, setTeams] = useState([]);
    const [selected, setSelect] = useState('');

    useEffect(() => {
            fetchData()
            localStorage.setItem('selectedTeam', selected);
            localStorage.setItem('teams', JSON.stringify(teams))
    }, [selected]);

    const fetchData = async() => {
        return await fetch('https://api.football-data.org/v2/competitions/WC/teams', {
        method: 'GET',
        headers: {
            'X-Auth-Token': '842eabacaca542ec9ed31f058efc2115',
        }
        })
        .then(response => response.json())
        .then(data => setTeams(data.teams))
        .catch(error => console.error(error))
    }


    const handleChange = (event) => {
        setSelect(event.target.value);
    }

    console.log(teams);

    return(
        <>
            <p>Your team is your strengh, select your favorite players</p>
            <div className='div-select'>
            <LabelSelect
                label={"Select team"}
                content={<Select
                id="select"
                value={selected==='' ? localStorage.getItem('selectedTeam') : selected}
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
                </Select>} />
            </div>
            <div className='players'>
                <SelectPlayers/>
            </div>
        </>
    )
}

export default SelectTeam;
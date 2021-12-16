import React, { useState } from 'react';
import { Input, Error } from './common'

const TeamName = () => {
    const [error, setError] = useState({ error: false, errorLabel: ''})
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
        localStorage.setItem('teamName', name)
        if(name === '' || name === null)
            setError({error: true, errorLabel: "Team name is required"})
    }

    return (
        <>
            <p>Your team name is your brand, give us your favorite name</p>
            <Input
                handleChange={handleChange}
                value={name}
                name="team-name"
                label="Your team name"
                error={error.error} />
            <Error errorLabel={error.errorLabel} />
        </>
    )
}

export default TeamName;
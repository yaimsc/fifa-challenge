import React, { useState } from 'react';

import { Input, Error } from './common'

const CoachName = () => {
    const [error, setError] = useState({ error: false, errorLabel: ''})
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
        localStorage.setItem('coachName', name)
        if(name === '' || name === null)
            setError({error: true, errorLabel: "Coach name is required"})
    }

    return (
        <>
            <p>Be your own coach, give us a name</p>
            <Input
                handleChange={handleChange}
                value={name}
                name="coach-name"
                label="Coach name"
                error={error.bool} />
            <Error errorLabel={error.errorLabel} />
        </>
    )
}

export default CoachName;
import React, { useState } from 'react';
import { Input, BasicButton, Error } from './../components/common';
import SelectTeamPlayers from '../components/SelectTeamPlayers';
import validate from './../functions/validate';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState();
  const [coachName, setCoachName] = useState();
  const [error, setError] = useState([]);

  const finalTeam = JSON.parse(localStorage.getItem('yourTeam'));

  const handleTeamChange = (event) => {
    setTeamName(event.target.value)
    localStorage.setItem('teamName', teamName)
  }

  const handleCoachChange = (event) => {
    setCoachName(event.target.value)
    localStorage.setItem('coachName', coachName)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setError(validate(teamName, coachName, finalTeam))
    console.log(error)
    if(error === []) localStorage.setItem('open', true)
  }

  return (
  <form onSubmit={onSubmit} action="#">
    <h3>Your team name is your brand, give us your favorite name</h3>
    <Input
      name="team-name"
      label="Team Name"
      handleChange={handleTeamChange}
    />
    <h3>Be your own coach, give us a name</h3>
    <Input
      name="coach-name"
      label="Coach Name"
      handleChange={handleCoachChange}
    />
    <SelectTeamPlayers />
    {error.map(error => (
      <Error error={error} />
    ))}
    <BasicButton type="submit" title="submit" variant="contained" />
  </form>
  )
}

export default CreateTeam;
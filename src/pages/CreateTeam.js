import React, { useState } from 'react';
import { Input, BasicButton, Error } from './../components/common';
import SelectTeam from './../components/SelectTeam';
import validate from './../functions/validate';


const CreateTeam = () => {
  const [teamName, setTeamName] = useState();
  const [coachName, setCoachName] = useState();
  const [error, setError] = useState();

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
  }

return (
  <form>
    <Error error={error} />
    <h3>Your team name is your brand, give us your favorite name</h3>
    <Input
      value="Team Name"
      name="team-name"
      label="Team Name"
      handleChange={handleTeamChange}
    />
    <h3>Be your own coach, give us a name</h3>
    <Input
      value="Coach Name"
      name="coach-name"
      label="Coach Name"
      handleChange={handleCoachChange}
    />
    <SelectTeam />
    <BasicButton type="submit" title="submit" onClick={onSubmit} />
  </form>
)
}

export default CreateTeam;
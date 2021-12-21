import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Input, BasicButton } from "./../components/common";
import SelectTeamPlayers from "../components/SelectTeamPlayers";
import validate from "./../functions/validate";

const CreateTeam = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('');
  const [coachName, setCoachName] = useState('')
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setTeamName(localStorage.setItem('teamName', ''))
    setCoachName(localStorage.setItem('coachName', ''))
  }, [])

  const handleTeamChange = (event) => {
    setTeamName(event.target.value);
    localStorage.setItem("teamName", event.target.value);
  };

  const handleCoachChange = (event) => {
    setCoachName(event.target.value);
    localStorage.setItem("coachName", event.target.value);
  };

  const onSubmit = () => {
    setValid(validate(teamName, coachName, JSON.parse(localStorage.getItem("yourTeam"))))
    console.log(valid)
    if(valid) navigate('/your-team')
  }

  return (
    <>
      <Header />
      <div className="create" data-testid="create-team">
        <h2 className="title">Create your own Adidas team</h2>
        <p className="instructions">
          Your team needs at least 4 defenders, 4 midfielders, 2 attackers & 2
          goalkeepers and cannot exceed 16 player.
        </p>
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
        <BasicButton
          type="submit"
          title="submit"
          variant="contained"
          onClick={onSubmit}
        />
      </div>
    </>
  );
}

export default CreateTeam;


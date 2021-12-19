export default function validate(teamName, coachName, ownTeam){
  const teams = JSON.parse(localStorage.getItem('teams'))
  // ownTeam.slice(1);
  let error=[];
  if(teamName === '' || teamName === undefined) error.push(`Team name is required`)
  if(coachName === '' || coachName === undefined) error.push(`Coach name is required`)
  if(ownTeam.length === 15) error.push(`Add one more please`)
  if(ownTeam.length > 16) error.push(`Your team can only have 16 players, coach included`)
  if(ownTeam.filter(player => player.position === 'Defender').length < 4) error.push(`You need at least 4 Defenders`)
  if(ownTeam.filter(player => player.position === 'Midfielder').length < 4) error.push(`You need at least 4 Midfielders`)
  if(ownTeam.filter(player => player.position === 'Attacker').length < 2) error.push(`You need at least 2 Attackers`)
  if(ownTeam.filter(player => player.position === 'Goalkeeper').length < 2) error.push(`You need at least 2 Goalkeepers`)
  teams.map(team => (
      ownTeam.filter(player => player.nationality === team.name).length > 4 ? error.push(`You cannot select more than 4 from the same team`) : ''
  ))
  return error;
}
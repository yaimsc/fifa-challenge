export default function validate(teamName, coachName, ownTeam){
  const teams = JSON.parse(localStorage.getItem('teams'))
  // ownTeam.slice(1);
  let error='';
  if(teamName === '') error += `Team name is required\n`
  if(coachName === '') error += `Team name is required\n`
  if(ownTeam.length > 16) error += `Your team can only have 16 players, coach included\n`
  if(ownTeam.filter(player => player.position === 'Defender').length < 4) error += `You need at least 4 Deefenders\n`
  if(ownTeam.filter(player => player.position === 'Midfielder').length < 4) error += `You need at least 4 Midfielders\n`
  if(ownTeam.filter(player => player.position === 'Attacker').length < 2) error += `You need at least 2 Attackers\n`
  if(ownTeam.filter(player => player.position === 'Goalkeeper').length < 2) error += `You need at least 2 Goalkeepers\n`
  teams.map(team => (
      ownTeam.filter(player => player.nationality === team.name).length +1 > 4 ? error += `You cannot select more than 4 from the same team\n` : error+=''
  ))
  return alert(error);
}
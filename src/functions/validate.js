export default function validate(teamName, coachName, ownTeam) {
  const teams = JSON.parse(localStorage.getItem("teams"));
  let error = '';
  let valid= false;
  console.log(ownTeam);
  if (ownTeam === null || ownTeam === "" || ownTeam === undefined) {
    error += `Your team is empty\n`;
  } else {
    if (teamName === "" || teamName === undefined)
      error += `Team name is required\n`
    if (coachName === "" || coachName === undefined)
      error += `Coach name is required\n`
    if(ownTeam.length < 12)
      error += `You need at least 12 players\n`
    if (ownTeam.length > 16)
      error += `Your team can only have 16 players, coach included\n`
    if (ownTeam.filter((player) => player.position === "Defender").length < 4)
      error += `You need at least 4 Defenders, try adding more\n`
    if (ownTeam.filter((player) => player.position === "Midfielder").length < 4)
      error += `You need at least 4 Midfielders, try adding more\n`
    if (ownTeam.filter((player) => player.position === "Attacker").length < 2)
      error += `You need at least 2 Attackers, try adding more\n`
    if (ownTeam.filter((player) => player.position === "Goalkeeper").length < 2)
      error += `You need at least 2 Goalkeepers, try adding more\n`
      if (teams !== null || teams !== "" || teams !== undefined)
        teams.map((team) =>
          ownTeam.filter((player) => player.nationality === team.name).length > 4
            ? error +=`You cannot select more than 4 players from the same team\n`
            : ""
        );
  }
  if(error === ''){
    error = "Congratulation! Your team is succesfully completed, please press submit again to view your full team"
    alert(error)
    valid= true
    return valid
  }else{
    alert(error)
  }
  return valid;
}

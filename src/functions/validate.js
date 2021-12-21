export default function validate(teamName, coachName, ownTeam) {
  const teams = JSON.parse(localStorage.getItem("teams"));
  let error = [];
  // ownTeam.slice(1);
  if (ownTeam === null || ownTeam === "" || ownTeam === undefined) {
    error.push("Your team is empty");
  } else {
    if (teamName === "" || teamName === undefined)
      error.push(`Team name is required`);
    if (coachName === "" || coachName === undefined)
      error.push(`Coach name is required`);
    if (ownTeam.length > 16)
      error.push(`Your team can only have 16 players, coach included`);
    if (ownTeam.filter((player) => player.position === "Defender").length < 4)
      error.push(`You need at least 4 Defenders, try adding more`);
    if (ownTeam.filter((player) => player.position === "Midfielder").length < 4)
      error.push(`You need at least 4 Midfielders, try adding more`);
    if (ownTeam.filter((player) => player.position === "Attacker").length < 2)
      error.push(`You need at least 2 Attackers, try adding more`);
    if (ownTeam.filter((player) => player.position === "Goalkeeper").length < 2)
      error.push(`You need at least 2 Goalkeepers, try adding more`);
    teams.map((team) =>
      ownTeam.filter((player) => player.nationality === team.name).length > 4
        ? error.push(`You cannot select more than 4 players from the same team`)
        : ""
    );
  }
  return error;
}

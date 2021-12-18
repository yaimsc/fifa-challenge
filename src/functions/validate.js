export default function validate(ownTeam){
    console.log('enter validate');
    ownTeam.slice(1);
    const teams = JSON.parse(localStorage.getItem('teams'));
    let error='';
    if(ownTeam.length > 16) error += `Your team can only have 16 players, coach included\n`
    if(ownTeam.filter(player => player.position === 'Defender').length < 4) error += `You need at least 4 Deefenders\n`
    if(ownTeam.filter(player => player.position === 'Midfielder').length < 4) error += `You need at least 4 Midfielders\n`
    if(ownTeam.filter(player => player.position === 'Attacker').length < 2) error += `You need at least 2 Attackers\n`
    if(ownTeam.filter(player => player.position === 'Goalkeeper').length < 2) error += `You need at least 2 Goalkeepers\n`
    if(ownTeam.filter(player => player.nationality === 'France').length +1 > 4) error += `You cannot select more than 4 from the same team\n`
    validateTeamLimit(ownTeam, teams)
    return alert(error);
}

const validateTeamLimit = (ownTeam, teams) => teams.map(team => {
    let error='';
    if(ownTeam.filter(player => player.nationality === team.name).length +1 > 4) error += `You cannot select more than 4 from the same team\n`
    return error;
})

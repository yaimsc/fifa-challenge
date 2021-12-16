export const defendersValidate = (defenders, error) => {
    if(defenders.filter((v) => v).length > 4){
        error += "You can only choose 4 defenders"
    }else{
        error += "You need to choose 4 defenders"
    }
}

export const midfieldersValidate = (midfielders, error) => {
    if(midfielders.filter((v) => v).length > 4){
        error += "You can only choose 4 defenders"
    }else{
        error += "You need to choose 4 defenders"
    }
}

export const attackersValidate = (attackers, error) => {
    if(attackers.filter((v) => v).length > 2){
        error += "You can only choose 2 defenders"
    }else{
        error += "You need to choose 2 defenders"
    }
}

export const goalkeeprsValidate = (goalkeepers, error) => {
    if(goalkeepers.filter((v) => v).length > 2){
        error += "You can only choose 2 defenders"
    }else{
        error += "You need to choose 2 defenders"
    }
}


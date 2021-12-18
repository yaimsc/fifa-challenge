import React, { Component } from 'react';
import {BasicButton} from './common';


export default class AddToTeam extends Component{
    constructor(props){
        super(props)
        this.state = {
            ownTeam: [],
            player: JSON.stringify(localStorage.getItem('player'))
        }
        this.addPlayer = this.addPlayer.bind(this);
    }

    checkIfExists = () => {
        return this.state.ownTeam.some(item => this.state.player.id === item.id);
    }

    addPlayer = () => {
        console.log(this.state.player)
        if(this.checkIfExists(this.state.player)){
            return ''
        }else{
            // if(ownTeam === [])
            // var newArr = ownTeam.concat(player)
            this.setState({ownTeam: [...this.state.ownTeam, this.state.player]})
            console.log(this.state.ownTeam)
            localStorage.setItem('yourTeam', this.state.ownTeam)
        }
    }
    render(){
        return(
        <BasicButton
            type="submit"
            title="Add"
            onClick={this.addPlayer}
        />
        )
    }
}
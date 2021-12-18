import React from "react";
import { Header } from './components/common';
import { TeamName, CoachName, SelectTeam, SelectPlayers } from './components';
import './styles/styles.scss';

const App = () => {
    return (
        <>
          <Header />
          <div className="div-body">
            <div div="create">
            <p className="title">Create your own Adidas team</p>
            <TeamName />
            <CoachName />
            <SelectTeam />
            </div>
          </div>
        </>
    )
}

export default App;
import React from "react";
import { Header } from './components/common';
import { TeamName, CoachName, SelectTeam } from './components';
import './styles/styles.scss';

const App = () => {
    return (
        <>
          <Header />
          <p className="title">Create your own Adidas team</p>
          <TeamName />
          <CoachName />
          <SelectTeam />
        </>
    )
}

export default App;
import React from "react";
import { Header } from './components/common';
import CreateTeam from './pages/CreateTeam';
import './styles/styles.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className="div-body">
        <div div="create">
        <h2 className="title">Create your own Adidas team</h2>
        <p className="instructions"> Your team needs at least 4 defenders, 4 midfielders, 2 attackers & 2 goalkeepers and cannot exceed 16 player.</p>
        <CreateTeam />
        </div>
      </div>
    </>
  )
}

export default App;
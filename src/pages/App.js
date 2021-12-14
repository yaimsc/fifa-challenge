import React from "react";
import SelectTeam from "../components/SelectTeam";
import SelectPlayers from "../components/SelectPlayers";
import './../styles/styles.scss';

const App = () => {
    return (
        <>
          <SelectTeam />
          <SelectPlayers />
        </>
    )
}

export default App;
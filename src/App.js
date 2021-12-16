import React from "react";
import { Header } from './components/common';
import SelectTeam from "./components/SelectTeam";
import './styles/styles.scss';

const App = () => {
    return (
        <>
          <Header />
          <p className="title">Create your own Adidas team</p>
          <SelectTeam />
        </>
    )
}

export default App;
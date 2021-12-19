import React from "react";
import { Route, Routes } from 'react-router-dom';
import CreateTeam from "./pages/CreateTeam";
import FinalTeam from "./pages/FinalTeam";
import './styles/styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateTeam />}/>
      <Route path="your-team" element={<FinalTeam />}/>
    </Routes>
  )
}

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateTeam from "./pages/CreateTeam";
import FinalTeam from "./pages/FinalTeam";
import "./styles/styles.scss";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CreateTeam />} />
      {localStorage.getItem("yourTeam") === "" ? (
        <Route exact path="/" element={<CreateTeam />} />
      ) : (
        <Route exact path="your-team" element={<FinalTeam />} />
      )}
    </Routes>
  );
};

export default App;

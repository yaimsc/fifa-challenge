import { render } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
// const { render } = require("@testing-library/react");
// const { createMemoryHistory } = require("history");
// const React = require("react");
// const { Router } = require("react-router-dom");

it("navigation works", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}></Router>
  );
});
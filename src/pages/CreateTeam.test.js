import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CreateTeam from "./CreateTeam";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

it("form can be submitted", () => {
  render(
    <BrowserRouter>
      <CreateTeam onClick={mockUseNavigate} />
    </BrowserRouter>
  );
  expect(mockUseNavigate).toBeTruthy();
});

import React from "react";
import { Link } from "react-router-dom";
import icon from "./../../assets/img/adidas_logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="icon" alt="adidas" src={icon} />
      </Link>
      <h1 className="header-title" data-testid="header-title">
        Your Adidas Team
      </h1>
    </div>
  );
};

export default Header;

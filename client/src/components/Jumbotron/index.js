import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

const Header = () => {
  return (
    <Jumbotron fluid className="jumbotron">
        <h1 className="greyBackground">Shaq's Books Search</h1>
        <h2 className="greyBackground">Search and save books</h2>
    </Jumbotron>
  );
};

export default Header;
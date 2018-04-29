import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
  	<div className="img-container">
  		<img alt="madmen logo" src="assets/images/madmen_logo.png" />
    </div>

    <h1>Memory Game</h1>
    <h3>
      Click on an image to earn points, but don't click on any more than once!
    </h3>
       
  </header>
);

export default Header;

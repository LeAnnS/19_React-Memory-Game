import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <div className="click-item">
     	 onClick={() => props.handleClick(props.id)}
      </div>

    </div>
  </div>
);

export default FriendCard;

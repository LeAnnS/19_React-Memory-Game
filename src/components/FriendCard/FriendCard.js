import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
	<div className="card">
		<div onClick={() => props.handleClick(props.id)} 
			className={`click-item${props.shake ? " shake" : ""}`}
			className="img-container">
    			<img alt={props.name} src={props.image} />
    	</div>
	</div>
);

export default FriendCard;

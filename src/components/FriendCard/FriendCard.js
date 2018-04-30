import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
	<div className="card"
		onClick={() => props.handleClick(props.id)}
		// eslint-disable-next-line
    	className={'card${props.shake ? " shake" : ""}'}>
    		<div className="img-container">
    			<img alt={props.name} src={props.image} />
    		</div>
	   
 	</div>
);

export default FriendCard;

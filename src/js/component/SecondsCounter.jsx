import React from "react";
import { BsFillClockFill } from "react-icons/bs";

export default function SecondsCounter(props) {
	return (
		<div className="counter">
		<div className="boxcouter">
			<div className="clock"> <BsFillClockFill /> </div>
			<div className="6">{props.countersix % 10 }</div>
			<div className="5">{props.counterfive % 10 }</div>
			<div className="4">{props.counterfour % 10 }</div>
			<div className="3">{props.counterthree % 10 }</div>
			<div className="2">{props.countertwo % 10 }</div>
			<div className="1">{props.counter % 10}</div>
		</div>
		</div>

	);
};


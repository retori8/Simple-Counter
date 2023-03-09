import propTypes from "prop-types";
import React, { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";

export default function SecondsCounter(props) {
    const[counter,setCounter]=useState(0);

    setInterval(function(){
        const six = Math.floor(counter/100000);
        const five = Math.floor(counter/10000);
        const four = Math.floor(counter/1000);
        const tree = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);
    couter++;},1000);
    
    SecondsCounter.propTypes = {
        firstcounter: propTypes.number,
        secondcounter: propTypes.number,
        thirdcounter: propTypes.number,
        fourthcounter: propTypes.number,
        fifthcounter: propTypes.number,
        sixthcounter: propTypes.number,
    }
	return (
		<div className="counter">
		<div className="boxcouter">
			<div className="clock"> <BsFillClockFill /> </div>
			<div className="6">{props.sixthcounter % 10}</div>
			<div className="5">{props.fifthcounter % 10}</div>
			<div className="4">{props.fourthcounter % 10}</div>
			<div className="3">{props.thirdcounter % 10}</div>
			<div className="2">{props.secondcounter % 10}</div>
			<div className="1">{props.firstcounter % 10}</div>
		</div>
		</div>
	);
};


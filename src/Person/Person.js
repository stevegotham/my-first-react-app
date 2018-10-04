import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
	
	const style = {
		'@media (max-width: 600px)': {
			backgroundColor: 'lightblue',
			width: '66%'
		}
	}
	
	return (
		<div className="Person" style={style}>
			<p onClick={props.click} className={props.style}>My name is {props.name} and I am {props.age} years old!</p>
			<span>{props.children}</span>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default Radium(person);
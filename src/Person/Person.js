import React from 'react';
import classes from './Person.css';

const person = (props) => {
	
	return (
		<div className={classes.Person}>
			<p onClick={props.click} className={props.style}>My name is {props.name} and I am {props.age} years old!</p>
			<span>{props.children}</span>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default person;
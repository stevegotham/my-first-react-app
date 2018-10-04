import React from 'react';
import classes from './Person.css';

const person = (props) => {
	
	const rnd = Math.random();
	
	if (rnd > 0.7) {
		throw new Error('Uh oh, something has gone terribly wrong!');
	}
	
	return (
		<div className={classes.Person}>
			<p onClick={props.click} className={props.style}>My name is {props.name} and I am {props.age} years old!</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default person;
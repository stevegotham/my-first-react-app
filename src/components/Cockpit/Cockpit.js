import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	
	let btnClass = props.showPersons ? classes.red : '';
  let btnText = props.showPersons ? 'Hide' : 'Show';
	
	const classesCollection = [];
	if (props.persons.length < 3) classesCollection.push(classes.bold);
	if (props.persons.length < 2) classesCollection.push(classes.red);
	
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={classesCollection.join(' ')}>Look at us go!</p>
			<button 
				className={btnClass}
				onClick={props.clicked}>{btnText} Persons Display</button>
		</div>
	);
}
	
export default cockpit;
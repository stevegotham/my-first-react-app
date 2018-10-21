import React, {Fragment} from 'react';
import classes from './Cockpit.css';
// can import Fragment from React in lieu of a higher order component such as Aux
// import Aux from '../../hoc/Aux';

const cockpit = (props) => {
	
	let btnClass = props.showPersons ? [classes.Button, classes.red].join(' ') : classes.Button;
  let btnText = props.showPersons ? 'Hide' : 'Show';
	
	const classesCollection = [];
	if (props.persons.length < 3) classesCollection.push(classes.bold);
	if (props.persons.length < 2) classesCollection.push(classes.red);
	
	return (
		<Fragment>
			<h1>{props.title}</h1>
			<p className={classesCollection.join(' ')}>Look at us go!</p>
			<button 
				className={btnClass}
				onClick={props.clicked}>{btnText} Persons Display</button>
		</Fragment>
	);
}
	
export default cockpit;
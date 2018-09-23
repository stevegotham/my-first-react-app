import React from 'react';

const person = (props) => {
	
	const sayIt = () => console.log('howdy');
	
	return (
		<div>
			<p>My name is {props.name} and I am {props.age} years old!</p>
			<span onClick={sayIt}>{props.children}</span>
		</div>
	)
}

export default person;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Este es mi inicio</h1>
			<Link to="login">Iniciar Sesion</Link>
		</div>
	);
};

export default Home;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel/Carousel';

const Home = () => {
	return (
		<Fragment>
			<Carousel />
			<br />
			<div className="container">
				<div className="jumbotron">
					<h1>Bienvenido a mi aplicacion</h1>
					<p>
						<Link to="login" className="btn btn-primary btn-lg">
							Iniciar Sesion
						</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;

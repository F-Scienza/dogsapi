import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { DogsContext } from '../../context';

function Header() {
	const context = useContext(DogsContext);
	const { favDogs } = context;

	return (
		<nav className="header">
			<span></span>
			<Link to="/" className="link">
				{' '}
				<h1> Mis perritos app </h1>
			</Link>
			<Link to="/favourites" className="nav-linkfavs link">
				😍
				{favDogs.length > 0 && (
					<span className="nav-lengthfavs"> {favDogs.length}</span>
				)}
			</Link>
		</nav>
	);
}

export { Header };

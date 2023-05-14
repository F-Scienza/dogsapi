import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
	const favorites = ['asd','123123']
	return (
		<nav className="header">
			<span></span>
			<Link to='/' className='link'> <h1> Mis perritos app </h1></Link>
			<Link to='/favourites' className='nav-linkfavs link'>
				😍
				<span className='nav-lengthfavs'> {favorites.length} </span>
			</Link>
		</nav>
	);
}

export { Header };

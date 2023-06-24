import React from 'react';
import './card.css';
import like from '../../asets/like.png';
import { useContext } from 'react';
import { DogsContext } from '../../context';

function Card({ dog }) {
	const context = useContext(DogsContext); // traemos el contexto
	const { favDogs, setFavDogs } = context;


	const handleAddToFav = () => {
		// agregamos al contexto
		setFavDogs([...favDogs, dog])
	};

	return (
		<div className="card-dogs">
			<img className="card-img" key={dog.id} src={dog.url} alt="dog" />
			<button onClick={handleAddToFav} className="fav-btn">
				<img className="fav-btn-img" src={like} alt="like" />
			</button>
		</div>
	);
}

export { Card };

import React from 'react';
import './card.css';
import like from '../../asets/like.png';
import { useContext } from 'react';
import { DogsContext } from '../../context';

function Card({ dog }) {
	const context = useContext(DogsContext); // traemos el contexto
	const { favDogs, setFavDogs } = context;

	const updatedFavDogs = favDogs.filter((favDog) => favDog !== dog)

	const handleFavs = () => {
		// agregamos al contexto
		favDogs.includes(dog)
			? setFavDogs(updatedFavDogs)
			: setFavDogs([...favDogs, dog]);
	};

	// clase por si el perrito ya está en favoritos 
	const faved = favDogs.includes(dog) ? 'faved' : 'fav-btn';

	return (
		<div className="card-dogs">
			<img className="card-img" key={dog.id} src={dog.url} alt="dog" />
			<button onClick={handleFavs} className={faved}>
				<img className="fav-btn-img" src={like} alt="like" />
			</button>
		</div>
	);
}

export { Card };

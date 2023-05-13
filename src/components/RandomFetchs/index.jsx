import React from 'react';
import { Card } from '../Card/';
import { useFetchDogs } from '../../customHooks/useFetchDogs';
import './random.css';
function RandomFetchs() {
	const { dogs, isLoading } = useFetchDogs();
	return (
		<div className="random-container">
			<ul className="card-container">
				{isLoading ? (
					<p>cargando</p>
				) : (
					dogs.map(dog => <Card key={dog.id} dog={dog} />)
				)}
			</ul>
			<button>cargar mas perritos</button>
		</div>
	);
}

export { RandomFetchs };

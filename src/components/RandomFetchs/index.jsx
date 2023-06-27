import React from 'react';
import { Card } from '../Card/';
import { useFetchDogs } from '../../customHooks/useFetchDogs';
import './random.css';
function RandomFetchs() {
	const { handleLoadMore, dogs, isLoading } = useFetchDogs();

	return (
		<div className="random-container">
			<ul className="card-container">
				{isLoading && dogs.length == 0 ? (
					<p>cargando</p>
				) : (
					dogs.map(dog => <Card key={dog.id} dog={dog} />)
				)}
			</ul>
			<button onClick={handleLoadMore} className="random-btn-load">
				cargar mas perritos
			</button>
		</div>
	);
}

export { RandomFetchs };

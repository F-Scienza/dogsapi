import React from 'react';
import { useFetchFavs } from '../../customHooks/useFetchFav';
import confused from '../../asets/perritoconfundido.jpg'
import './myfav.css'

function MyFavDogs() {
	const { favDogs, isLoading } = useFetchFavs();

	return (
		<div className="random-container">
			<ul className="card-container">
				{isLoading ? (
					<div className='not-found'>
						<h1>ups...</h1>
						<img className='confused-img' src={confused} alt="perrito confundido" />
						<h1>Puede que no tengas favoritos</h1>
					</div>
				) : (
					favDogs?.map(dog => (
						<li>
							<Card key={dog.id} dog={dog} />
						</li>
					))
				)}
			</ul>
		</div>
	);
}

export { MyFavDogs };

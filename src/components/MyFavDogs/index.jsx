import React from 'react';
import { useFetchFavs } from '../../customHooks/useFetchFav';

function MyFavDogs() {
	const { favDogs, isLoading } = useFetchFavs();

	return (
		<div className="random-container">
			<ul className="card-container">
				{isLoading ? (
					<p>Puede que no tengas favoritos</p>
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

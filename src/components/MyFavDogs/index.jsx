import React, { useContext } from 'react';
import { Card } from '../Card/';
import confused from '../../asets/perritoconfundido.jpg';
import './myfav.css';
import { DogsContext } from '../../context';

function MyFavDogs() {
	const context = useContext(DogsContext);
	const { favDogs } = context;

	return (
		<div className="random-container">
			<ul className="fav-container">
				{favDogs.length == 0 ? (
					<div className="not-found">
						<h1>ups...</h1>
						<img
							className="confused-img"
							src={confused}
							alt="perrito confundido"
						/>
						<h1>Puede que no tengas favoritos</h1>
					</div>
				) : (
					favDogs?.map(dog => <Card key={dog.id} dog={dog} />)
				)}
			</ul>
		</div>
	);
}

export { MyFavDogs };

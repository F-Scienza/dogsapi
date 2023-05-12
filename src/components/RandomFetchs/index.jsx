import React from 'react';
import { Card } from '../Card/';
import { useFetchCats } from '../../customHooks/useFetchCats';
import './random.css'
function RandomFetchs() {
	const { cats, isLoading } = useFetchCats();
	return (
		<div>
			<h1>random fetchs</h1>

			<ul className="card-container">
				{isLoading ? (
					<p>cargando</p>
				) : (
					cats.map(cat => (
						<li>
							<Card key={cat.id} cat={cat} />
						</li>
					))
				)}
			</ul>
		</div>
	);
}

export { RandomFetchs };

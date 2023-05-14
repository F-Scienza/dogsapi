import React from 'react';
import './card.css';
import like from '../../asets/like.png';
import { handleAddToFavorites } from '../../customHooks/useFetchFav';
function Card({ dog }) {
	const addToFav = ()=>{handleAddToFavorites(dog.id)}
	return (
		<div className="card-dogs">
			<img className="card-img" key={dog.id} src={dog.url} alt="cat" />
			<button onClick={addToFav} className="fav-btn">
				<img className='fav-btn-img' src={like} alt="like" />
			</button>
		</div>
	);
}

export { Card };

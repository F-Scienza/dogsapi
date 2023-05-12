import React from 'react';
import './card.css';
function Card({ cat }) {
	return <img className="card-img" key={cat.id} src={cat.url} alt="cat" />;
}

export { Card };

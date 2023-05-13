
export const handleAddToFavorites = imageId => {
	fetch('https://api.thecatapi.com/v1/favourites', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key':
				'live_NH7yhDAW0nJjypadSC0BMGYZl610al6564C3JCQ2RWXCCaIlOWRoBpFIO1wT7lDO',
		},
		body: JSON.stringify({
			image_id: imageId,
		}),
	})
		.then(response => response.json())
		.then(data => {
			setFavorites([...favorites, data]);
		})
		.catch(error => console.error(error));
};

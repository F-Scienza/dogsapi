import { useState, useEffect } from 'react';

export const useFetchFavs = () => {
	const [favDogs, setFavDogs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchFavDogs = async () => {
			setIsLoading(true);
			const response = await fetch(
				'https://api.thedogapi.com/v1/favourites?limit?10&api_key=live_NH7yhDAW0nJjypadSC0BMGYZl610al6564C3JCQ2RWXCCaIlOWRoBpFIO1wT7lDO'
			);
			const data = await response.json();
			setFavDogs(data);
			setIsLoading(false);
		};
		fetchFavDogs();
	}, []);

	return { favDogs, isLoading };
};

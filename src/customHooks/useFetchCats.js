import { useState, useEffect } from 'react';

export const useFetchCats = () => {
	const [cats, setCats] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchCats = async () => {
			setIsLoading(true);
			const response = await fetch(
				'https://api.thedogapi.com/v1/images/search?limit=20'
			);
			const data = await response.json();
			setCats(data);
			setIsLoading(false);
		};
		fetchCats();
	}, []);

	return { cats, isLoading };
};

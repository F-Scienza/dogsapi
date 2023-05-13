import { useState, useEffect } from 'react';

export const useFetchDogs = () => {
	const [dogs, setDog] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchDog = async () => {
			setIsLoading(true);
			const response = await fetch(
				'https://api.thedogapi.com/v1/images/search?limit=20'
			);
			const data = await response.json();
			setDog(data);
			setIsLoading(false);
		};
		fetchDog();
	}, []);

	return { dogs, isLoading };
};

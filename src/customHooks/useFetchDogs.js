import { useState, useEffect, useContext } from 'react';
import { DogsContext } from '../context';

export const useFetchDogs = () => {
	const context = useContext(DogsContext);
	const { dogs, setDogs } = context;

	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const handleLoadMore = () => {
		setPage(page + 1);
		fetchDog()
	};

	const fetchDog = async () => {
		setIsLoading(true);
		const response = await fetch(
			`https://api.thedogapi.com/v1/images/search?limit=3&page=${page}`
		);
		const data = await response.json();
		setDogs([...dogs, ...data]);
		setIsLoading(false);
	};

	useEffect(() => {	
		fetchDog();
	}, []);

	return { handleLoadMore, dogs, isLoading };
};

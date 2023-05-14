import { useState, useEffect } from 'react';

export const useFetchDogs = () => {
	const [page, setPage] = useState(1)
	const [dogs, setDog] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const handleLoadMore = ()=>{
		setPage(page+1)
	}
	useEffect(() => {
		const fetchDog = async () => {
			setIsLoading(true);
			const response = await fetch(
				`https://api.thedogapi.com/v1/images/search?limit=5&page=${page}`
			);
			const data = await response.json();
			setDog([...dogs, ...data]);
			setIsLoading(false);
		};
		fetchDog();
	}, [page]);

	return { handleLoadMore, dogs, isLoading };
};

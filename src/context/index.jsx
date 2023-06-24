import { createContext, useState } from 'react';

export const DogsContext = createContext();

export const DogsContextProvider = ({ children }) => {
	const [favDogs, setFavDogs] = useState([]);
	const [dogs, setDogs] = useState([])
	return (
		<DogsContext.Provider
			value={{
				dogs, // todos los perritos
				setDogs, //agregar perritos
				favDogs, //todos los componentees podran leer
				setFavDogs, // podran escribir
			}}
		>
			{children}
		</DogsContext.Provider>
	);
};

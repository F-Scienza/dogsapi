import { App } from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DogsContextProvider } from './context/index.jsx';

import { MyFavDogs } from './components/MyFavDogs'
import { RandomFetchs } from './components/RandomFetchs';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const hashRouter = createHashRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/favourites',
		element: <MyFavDogs />,
	},
]);


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<DogsContextProvider>
		<RouterProvider router={hashRouter}/>
	</DogsContextProvider>
);

import React from 'react';
import { MyFavDogs } from './MyFavDogs';
import { RandomFetchs } from './RandomFetchs';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const hashRouter = createHashRouter([
	{
		path: '/',
		element: <RandomFetchs />,
	},
	{
		path: '/favourites',
		element: <MyFavDogs />,
	},
]);

export const Router = () => {
    return (
        <RouterProvider router={hashRouter}/>
    )
}
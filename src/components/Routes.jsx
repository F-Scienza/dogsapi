import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { MyFavDogs } from './MyFavDogs';
import { RandomFetchs } from './RandomFetchs';

export const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<RandomFetchs/>} />
            <Route path='/favourites' element={<MyFavDogs/>} />
        </Routes>
    )
}
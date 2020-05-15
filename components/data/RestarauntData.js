import React, { useEffect, useState } from 'react';
import {
    processRestaurantData,
    sortRestaurants,
    getAllGenres,
} from '../../resources/utils';

export const RestaurantContext = React.createContext();
export const RestaurantProvider = RestaurantContext.Provider;
export const RestaurantConsumer = RestaurantContext.Consumer;

const RestaurantData = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('NAME_ASC');
    const [stateFilters, setStateFilters] = useState([]);
    const [genreFilters, setGenreFilters] = useState([]);

    const fetchRestaurants = async (url) => {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const data = await res.json();
        // console.log(data);
        setRestaurants(processRestaurantData(data));
    };

    const resetFilters = () => {
        setStateFilters([]);
        setGenreFilters([]);
        setSearchText('');
    };

    const allGenres = getAllGenres(restaurants);

    const context = {
        restaurants,
        sortRestaurants,
        searchText,
        setSearchText,
        sortType,
        setSortType,
        stateFilters,
        setStateFilters,
        allGenres,
        genreFilters,
        setGenreFilters,
        resetFilters,
    };

    useEffect(() => {
        fetchRestaurants(process.env.NEXT_PUBLIC_BACKEND_URL);
    }, []);

    return (
        <RestaurantProvider value={context}>
            {props.children}
        </RestaurantProvider>
    );
};

export default RestaurantData;
